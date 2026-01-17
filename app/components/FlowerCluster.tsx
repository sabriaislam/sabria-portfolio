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
    const isMobile = window.matchMedia("(max-width: 900px)");
    if (prefersReduced.matches || isMobile.matches) {
      return;
    }

    const flowers = Array.from(
      element.querySelectorAll<HTMLImageElement>(".flower")
    );
    let rafId = 0;
    const update = () => {
      rafId = 0;
      const scrollY = window.scrollY;
      const count = Math.max(flowers.length, 1);
      const segment = window.innerHeight / count;
      const cycle = segment * count * 2;
      const looped = cycle ? scrollY % cycle : scrollY;
      const step = Math.floor(looped / segment);
      const progress = segment ? (looped - step * segment) / segment : 0;
      const orderIndex =
        step < count ? step : Math.max(0, 2 * count - 1 - step);
      flowers.forEach((flower, index) => {
        const rotation = index === orderIndex ? progress * 360 : 0;
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
