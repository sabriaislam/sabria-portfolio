"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Lightbox() {
  const [active, setActive] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (target.tagName !== "IMG") return;
      const img = target as HTMLImageElement;
      if (!img.dataset.lightbox) return;
      setActive({ src: img.dataset.lightboxSrc ?? img.src, alt: img.alt });
    }

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
    }

    document.addEventListener("click", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("click", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, []);

  if (!active) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={() => setActive(null)}
    >
      <button
        className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
        onClick={() => setActive(null)}
        aria-label="Close"
      >
        ✕
      </button>
      <div
        className="relative max-h-[90vh] max-w-[90vw] overflow-hidden rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={active.src}
          alt={active.alt}
          width={1800}
          height={1200}
          className="max-h-[90vh] w-auto object-contain"
          unoptimized={active.src.startsWith("http")}
        />
      </div>
    </div>
  );
}
