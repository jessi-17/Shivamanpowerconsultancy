"use client";

import { useEffect, useRef } from "react";

/**
 * Lightweight scroll-reveal using IntersectionObserver.
 * Adds the `visible` class when the element enters the viewport.
 * Works with `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-scale`, `.reveal-stagger` CSS classes.
 */
export function useScrollReveal<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
