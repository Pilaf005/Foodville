"use client";

import { useState, useRef, useMemo, useEffect } from "react";
import { GALLERY_FALLBACK_IMAGE, THUMBNAIL_FALLBACK_IMAGE } from "../constants";

const FALLBACK_IMGS = [GALLERY_FALLBACK_IMAGE];

function calculateZoomPosition(e, containerRef) {
  if (!containerRef.current) return null;
  const { left, top, width, height } = containerRef.current.getBoundingClientRect();
  const x = ((e.clientX - left) / width) * 100;
  const y = ((e.clientY - top) / height) * 100;
  return { x, y, boundedX: Math.max(20, Math.min(80, x)), boundedY: Math.max(20, Math.min(80, y)) };
}

export default function ProductGallery({ images = [], videos = [], name = "" }) {
  const [active, setActive] = useState(0);
  const [zoomPos, setZoomPos] = useState({ x: 0, y: 0, boundedX: 50, boundedY: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const [mobileZoom, setMobileZoom] = useState(false);
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  // Unified media list combining photos and video clips
  const mediaList = useMemo(() => {
    const list = [];
    // Add images
    const imgSources = images.length > 0 ? images : FALLBACK_IMGS;
    imgSources.forEach((url) => {
      if (url) list.push({ type: "image", url });
    });
    // Add videos
    (videos || []).forEach((url) => {
      if (url) list.push({ type: "video", url });
    });
    return list.length > 0 ? list : [{ type: "image", url: GALLERY_FALLBACK_IMAGE }];
  }, [images, videos]);

  const activeMedia = mediaList[active] || mediaList[0];
  const isVideo = activeMedia.type === "video";

  // Programmatic DOM mute & autoplay handling to bypass React muted prop bug in Chrome/Safari
  useEffect(() => {
    if (isVideo && videoRef.current) {
      const v = videoRef.current;
      v.defaultMuted = true;
      v.muted = true;
      v.play().catch(() => {}); // Ignore autoplay policy errors silently
    }
  }, [isVideo, activeMedia.url]);

  const prev = () => { setActive((i) => (i - 1 + mediaList.length) % mediaList.length); setMobileZoom(false); };
  const next = () => { setActive((i) => (i + 1) % mediaList.length); setMobileZoom(false); };

  const handleMouseMove = (e) => {
    if (isVideo) return;
    const pos = calculateZoomPosition(e, containerRef);
    if (pos) { setZoomPos(pos); setIsHovered(true); }
  };
  const handleMouseLeave = () => setIsHovered(false);
  const handleDoubleTap = () => { if (!isVideo) setMobileZoom((prev) => !prev); };

  const bgPosX = isHovered ? ((zoomPos.boundedX - 20) / 60) * 100 : 50;
  const bgPosY = isHovered ? ((zoomPos.boundedY - 20) / 60) * 100 : 50;

  return (
    <div className="flex flex-col gap-5">
      {/* Main Viewport Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onDoubleClick={handleDoubleTap}
        className={`relative w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-3xl border border-cardline ${
          isVideo ? "bg-black" : "bg-cream cursor-zoom-in"
        } shadow-sm`}
      >
        <div className="absolute inset-0 rounded-3xl overflow-hidden flex items-center justify-center pointer-events-none">
          {isVideo ? (
            /* Product Video Player — H.264 MP4 guaranteed via admin-side FFmpeg transcoding */
            <div className="relative z-20 h-full w-full flex items-center justify-center bg-black">
              <video
                ref={videoRef}
                key={activeMedia.url}
                src={activeMedia.url}
                controls
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="h-full w-full object-contain pointer-events-auto"
                onError={(e) => {
                  const code = e.currentTarget?.error?.code;
                  // Only log meaningful errors (not code 1 = MEDIA_ERR_ABORTED during mount)
                  if (code && code !== 1) {
                    console.warn("[Video Error]", code, activeMedia.url);
                  }
                }}
              />
            </div>
          ) : (
            /* Product Image Display */
            <img
              key={active}
              src={activeMedia.url}
              alt={`${name} - media ${active + 1}`}
              className="h-full w-full object-cover transition-all"
              style={{
                transform: mobileZoom ? "scale(2.0)" : "scale(1)",
                transformOrigin: "center",
                transition: "transform 0.3s ease",
              }}
              onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = GALLERY_FALLBACK_IMAGE; }}
            />
          )}

          {/* Tracking lens overlay for image zoom */}
          {!isVideo && isHovered && (
            <div
              className="absolute border-2 border-olive/35 bg-olive/10 pointer-events-none hidden md:block rounded-2xl shadow-sm z-20"
              style={{ width: "40%", height: "40%", left: `${zoomPos.boundedX - 20}%`, top: `${zoomPos.boundedY - 20}%` }}
            />
          )}

          {/* Image Zoom Instructions */}
          {!isVideo && !isHovered && !mobileZoom && (
            <div className="absolute bottom-3 left-3 bg-black/60 text-[10px] font-bold text-white px-2.5 py-1 rounded-lg pointer-events-none backdrop-blur-sm sm:block hidden z-20">
              🔍 Hover to zoom
            </div>
          )}
          {!isVideo && !isHovered && (
            <div className="absolute bottom-3 left-3 bg-black/60 text-[10px] font-bold text-white px-2.5 py-1 rounded-lg pointer-events-none backdrop-blur-sm sm:hidden block z-20">
              📱 Double-tap to zoom
            </div>
          )}

          {/* Prev / Next Arrows */}
          {!mobileZoom && mediaList.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                onMouseMove={(e) => e.stopPropagation()}
                onMouseEnter={() => setIsHovered(false)}
                className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/90 shadow flex items-center justify-center text-ink hover:bg-white transition z-30 cursor-pointer pointer-events-auto"
                aria-label="Previous item"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button
                type="button"
                onClick={next}
                onMouseMove={(e) => e.stopPropagation()}
                onMouseEnter={() => setIsHovered(false)}
                className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/90 shadow flex items-center justify-center text-ink hover:bg-white transition z-30 cursor-pointer pointer-events-auto"
                aria-label="Next item"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </>
          )}

          {/* Slide Counter */}
          {!isHovered && !mobileZoom && mediaList.length > 1 && (
            <span className="absolute bottom-3 right-3 rounded-full bg-black/60 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm z-30">
              {active + 1} / {mediaList.length}
            </span>
          )}
        </div>

        {/* Magnified Image Zoom Box (Desktop) */}
        {!isVideo && isHovered && (
          <div
            className="absolute left-[calc(100%+24px)] top-0 w-full h-full rounded-3xl border border-cardline bg-white overflow-hidden shadow-2xl z-[999] pointer-events-none hidden md:block"
            style={{
              backgroundImage: `url(${activeMedia.url})`,
              backgroundPosition: `${bgPosX}% ${bgPosY}%`,
              backgroundSize: "250%",
              backgroundRepeat: "no-repeat",
            }}
          />
        )}
      </div>

      {/* Media Thumbnail Strip */}
      {mediaList.length > 1 && (
        <div className="mt-1 flex gap-2 overflow-x-auto rounded-2xl bg-cream px-2 py-2 border border-cardline no-scrollbar w-fit max-w-full justify-start">
          {mediaList.map((item, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); setMobileZoom(false); }}
              className={`relative shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-xl overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                i === active ? "border-olive shadow-md scale-105" : "border-cardline hover:border-olive/50 opacity-70 hover:opacity-100"
              }`}
              aria-label={`View item ${i + 1}`}
            >
              {item.type === "video" ? (
                /* Video Thumbnail with Play Button Overlay */
                <div className="w-full h-full bg-black relative flex items-center justify-center">
                  <video src={item.url} className="w-full h-full object-cover opacity-70" preload="metadata" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <div className="w-8 h-8 rounded-full bg-cream/95 text-olive flex items-center justify-center shadow-md backdrop-blur-sm transition-transform duration-200">
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="ml-0.5">
                        <polygon points="6 4 20 12 6 20 6 4"/>
                      </svg>
                    </div>
                  </div>
                </div>
              ) : (
                /* Image Thumbnail */
                <img
                  src={item.url}
                  alt={`Thumbnail ${i + 1}`}
                  className="h-full w-full object-cover"
                  onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = THUMBNAIL_FALLBACK_IMAGE; }}
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
