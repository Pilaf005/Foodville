"use client";

import { useState, useEffect } from "react";

export function useTypewriter(suggestions) {
  const [placeholderIndex, setPlaceholderIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    if (!suggestions || suggestions.length === 0) return;
    let timer;
    const fullText = suggestions[placeholderIndex];
    
    const handleType = () => {
      if (!isDeleting) {
        setDisplayText(fullText.substring(0, displayText.length + 1));
        setTypingSpeed(80);
        if (displayText === fullText) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setDisplayText(fullText.substring(0, displayText.length - 1));
        setTypingSpeed(40);
        if (displayText === "") {
          setIsDeleting(false);
          setPlaceholderIndex((p) => (p + 1) % suggestions.length);
          return;
        }
      }
      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, placeholderIndex, typingSpeed, suggestions]);

  return { displayText };
}

export default useTypewriter;
