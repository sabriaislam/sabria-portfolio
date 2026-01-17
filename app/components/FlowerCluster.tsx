"use client";

import { useEffect, useRef } from "react";

export default function FlowerCluster() {
  const clusterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = clusterRef.current;
    if (!element || typeof window === "undefined") {
      return;
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (prefersReduced.matches) {
      return;
    }

    const flowers = Array.from(
      element.querySelectorAll<HTMLImageElement>(".flower")
    );
    const segment = 420;
    const cycle = segment * Math.max(flowers.length, 1);
    let rafId = 0;
    const update = () => {
      rafId = 0;
      const scrollY = window.scrollY;
      const looped = cycle ? scrollY % cycle : scrollY;
      flowers.forEach((flower, index) => {
        const start = index * segment;
        const progress = Math.min(Math.max((looped - start) / segment, 0), 1);
        const rotation = progress * 360;
        flower.style.setProperty("--flower-rotate", `${rotation}deg`);
      });
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(update);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="flower-cluster flower-cluster--nav" aria-hidden="true" ref={clusterRef}>
      <img className="flower flower-blue" src="/Blue.svg" alt="" />
      <img className="flower flower-green" src="/Green.svg" alt="" />
      <img className="flower flower-orange" src="/Orange.svg" alt="" />
      <img className="flower flower-pink" src="/Pink.svg" alt="" />
    </div>
  );
}
