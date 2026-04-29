"use client";

import { useEffect, useRef, useState } from "react";
import type { Heading } from "../_lib/markdown";

interface ArticleProps {
  html: string;
  headings: Heading[];
}

/**
 * Renders the article body, plus:
 *  - a thin reading-progress bar pinned to the top of the viewport
 *  - a sticky table of contents (desktop only) that highlights the
 *    section currently in view
 */
export default function Article({ html, headings }: ArticleProps) {
  const articleRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState<string>(headings[0]?.id ?? "");

  // Reading-progress bar
  useEffect(() => {
    const onScroll = () => {
      const el = articleRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const scrolled = -rect.top;
      const pct = Math.max(0, Math.min(100, (scrolled / total) * 100));
      setProgress(pct);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Active section in TOC
  useEffect(() => {
    if (!headings.length) return;
    const ids = headings.map((h) => h.id);
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the topmost intersecting heading
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveId((visible[0].target as HTMLElement).id);
        }
      },
      { rootMargin: "-100px 0px -70% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [headings]);

  return (
    <>
      <div className="reading-progress">
        <div className="reading-progress__fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="article-shell">
        <div
          ref={articleRef}
          className="article-body"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        {headings.length > 1 && (
          <aside className="article-toc" aria-label="Table of contents">
            <div className="article-toc__title">On this page</div>
            <ul className="article-toc__list">
              {headings.map((h) => (
                <li
                  key={h.id}
                  className={
                    "article-toc__item" +
                    (h.level === 3 ? " article-toc__item--h3" : "")
                  }
                >
                  <a
                    href={`#${h.id}`}
                    className={
                      "article-toc__link" +
                      (activeId === h.id ? " article-toc__link--active" : "")
                    }
                  >
                    {h.text}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}
      </div>
    </>
  );
}
