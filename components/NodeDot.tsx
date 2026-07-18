"use client";

import { useEffect, useRef } from "react";

export default function NodeDot({ className }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        ref.current.style.boxShadow = "0 0 15px #3DDC97, 0 0 5px #3DDC97";
        ref.current.style.transform = "rotate(45deg) scale(1.25)";
      } else {
        ref.current.style.boxShadow = "none";
        ref.current.style.transform = "rotate(45deg) scale(1)";
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`node-dot hidden md:block ${className || ""}`}
    />
  );
}
