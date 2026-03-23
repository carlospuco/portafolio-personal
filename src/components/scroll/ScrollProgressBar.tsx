"use client";

import { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: `${progress}%`,
        height: "3px",
        background: "linear-gradient(90deg, var(--brand-solid-strong), var(--accent-solid-strong))",
        zIndex: 9999,
        transition: "width 0.1s linear",
        borderRadius: "0 2px 2px 0",
        boxShadow: "0 0 8px var(--brand-solid-strong)",
      }}
    />
  );
}
