"use client";

import { useState, useRef } from "react";
import { GALLERY_FALLBACK_IMAGE, THUMBNAIL_FALLBACK_IMAGE } from "../constants";

const FALLBACK_IMGS = [GALLERY_FALLBACK_IMAGE];

function calculateZoomPosition(e, containerRef) {
  if (!containerRef.current) return null;
  const { left, top, width, height } = containerRef.current.getBoundingClientRect();
  const x = ((e.clientX - left) / width)  * 100;
  const y = ((e.clientY - top)  / height) * 100;
  // Bounds checking to keep the tracking lens within 20%–80% boundaries
  return { x, y, boundedX: Math.max(20, Math.min(80, x)), boundedY: Math.max(20, Math.min(80, y)) };
}

export default function ProductGallery({ images = [], name = "" }) {
  const [active,      setActive]      = useState(0);
  const [zoomPos,     setZoomPos]     = useState({ x: 0, y: 0, boundedX: 50, boundedY: 50 });
  const [isHovered,   setIsHovered]   = useState(false);
  const [mobileZoom,  setMobileZoom]  = useState(false);
  const containerRef = useRef(null);

  const imgs = images.length > 0 ? images : FALLBACK_IMGS;

  const prev = () => { setActive((i) => (i - 1 + imgs.length) % imgs.length); setMobileZoom(false); };
  const next = () => { setActive((i) => (i + 1) % imgs.length);               setMobileZoom(false); };

  const handleMouseMove  = (e) => { const pos = calculateZoomPosition(e, containerRef); if (pos) { setZoomPos(pos); setIsHovered(true); } };
  const handleMouseLeave = ()  => setIsHovered(false);
  const handleDoubleTap  = ()  => setMobileZoom((prev) => !prev);

  // Magnified background position mapping
  const bgPosX = isHovered ? ((zoomPos.boundedX - 20) / 60) * 100 : 50;
  const bgPosY = isHovered ? ((zoomPos.boundedY - 20) / 60) * 100 : 50;

  return (
    <div className="flex flex-col gap-5">
      {/* Main Image Container */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onDoubleClick={handleDoubleTap}
        className="relative w-full h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] rounded-3xl border border-cardline bg-cream shadow-sm cursor-zoom-in"
      >
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <img
            key={active}
            src={imgs[active]}
            alt={`${name} - image ${active + 1}`}
            className="h-full w-full object-cover transition-all"
            style={{ transform: mobileZoom ? "scale(2.0)" : "scale(1)", transformOrigin: "center", transition: "transform 0.3s ease" }}
            onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = GALLERY_FALLBACK_IMAGE; }}
          />

          {/* Tracking lens overlay */}
          {isHovered && (
            <div
              className="absolute border-2 border-olive/35 bg-olive/10 pointer-events-none hidden md:block rounded-2xl shadow-sm"
              style={{ width: "40%", height: "40%", left: `${zoomPos.boundedX - 20}%`, top: `${zoomPos.boundedY - 20}%` }}
            />
          )}

          {/* Zoom instruction */}
          {!isHovered && !mobileZoom && (
            <div className="absolute bottom-3 left-3 bg-black/60 text-[10px] font-bold text-white px-2 py-1 rounded-lg pointer-events-none backdrop-blur-sm sm:block hidden">
              🔍 Hover to zoom
            </div>
          )}
          {!isHovered && (
            <div className="absolute bottom-3 left-3 bg-black/60 text-[10px] font-bold text-white px-2 py-1 rounded-lg pointer-events-none backdrop-blur-sm sm:hidden block">
              📱 Double-tap to zoom
            </div>
          )}

          {/* Prev / Next arrows */}
          {!isHovered && !mobileZoom && imgs.length > 1 && (
            <>
              <button onClick={prev} className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/90 shadow flex items-center justify-center text-ink hover:bg-white transition z-10" aria-label="Previous image">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button onClick={next} className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full bg-white/90 shadow flex items-center justify-center text-ink hover:bg-white transition z-10" aria-label="Next image">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </>
          )}

          {/* Slide counter */}
          {!isHovered && !mobileZoom && imgs.length > 1 && (
            <span className="absolute bottom-3 right-3 rounded-full bg-black/50 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
              {active + 1} / {imgs.length}
            </span>
          )}
        </div>

        {/* Flipkart-style Zoomed Preview Box */}
        {isHovered && (
          <div
            className="absolute left-[calc(100%+24px)] top-0 w-full h-full rounded-3xl border border-cardline bg-white overflow-hidden shadow-2xl z-[999] pointer-events-none hidden md:block"
            style={{ backgroundImage: `url(${imgs[active]})`, backgroundPosition: `${bgPosX}% ${bgPosY}%`, backgroundSize: "250%", backgroundRepeat: "no-repeat" }}
          />
        )}
      </div>

      {/* Thumbnail Strip */}
      {imgs.length > 1 && (
        <div className="mt-1 flex gap-2 overflow-x-auto rounded-2xl bg-cream px-2 py-2 border border-cardline no-scrollbar w-fit max-w-full justify-start">
          {imgs.map((src, i) => (
            <button
              key={i}
              onClick={() => { setActive(i); setMobileZoom(false); }}
              className={`shrink-0 h-16 w-16 sm:h-20 sm:w-20 rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                i === active ? "border-olive shadow-md scale-105" : "border-cardline hover:border-olive/50 opacity-70 hover:opacity-100"
              }`}
              aria-label={`View image ${i + 1}`}
            >
              <img
                src={src}
                alt={`Thumbnail ${i + 1}`}
                className="h-full w-full object-cover"
                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = THUMBNAIL_FALLBACK_IMAGE; }}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
