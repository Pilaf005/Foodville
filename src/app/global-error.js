"use client";

/**
 * Last-resort boundary: catches errors thrown in the root layout itself.
 * It must render its own <html>/<body> because the layout failed.
 */
export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body style={{ background: "#FAF7F2", color: "#2E2A26", fontFamily: "Inter, system-ui, sans-serif" }}>
        <div style={{ maxWidth: 480, margin: "0 auto", padding: "96px 24px", textAlign: "center" }}>
          <div style={{ fontSize: 56 }}>🫤</div>
          <h1 style={{ fontSize: 24, fontWeight: 800, margin: "16px 0 8px" }}>Something went wrong</h1>
          <p style={{ fontSize: 14, color: "#8A8275", marginBottom: 24 }}>
            The app failed to load. Please refresh and try again.
          </p>
          <button
            onClick={reset}
            style={{
              background: "#6B7F59", color: "#fff", border: 0, borderRadius: 12,
              padding: "12px 24px", fontWeight: 700, fontSize: 13, cursor: "pointer",
            }}
          >
            Try again
          </button>
        </div>
      </body>
    </html>
  );
}
