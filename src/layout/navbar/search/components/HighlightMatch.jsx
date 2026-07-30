import React from "react";

export function HighlightMatch({ text, query }) {
  if (!query || !text) return <>{text}</>;
  
  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase().trim();
  const idx = lowerText.indexOf(lowerQuery);
  
  if (idx === -1) return <>{text}</>;
  
  return (
    <>
      {text.slice(0, idx)}
      <span className="font-bold text-ink">{text.slice(idx, idx + lowerQuery.length)}</span>
      {text.slice(idx + lowerQuery.length)}
    </>
  );
}

export default HighlightMatch;
