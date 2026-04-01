"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";

const stats = [
  { value: "25+", label: "Years serving Punjab" },
  { value: "5,000+", label: "Workers placed abroad" },
  { value: "Zero", label: "Fraud complaints ever" },
];

export default function FounderStory() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    gsap.fromTo(
      ref.current.querySelectorAll(".fs-text"),
      { opacity: 0, x: -30 },
      {
        opacity: 1, x: 0, duration: 0.7, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      }
    );

    gsap.fromTo(
      ref.current.querySelector(".fs-image"),
      { opacity: 0, x: 40 },
      {
        opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 70%" },
      }
    );

    gsap.fromTo(
      ref.current.querySelectorAll(".fs-stat"),
      { opacity: 0, y: 20 },
      {
        opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 40%" },
      }
    );
  }, []);

  return (
    <div
      ref={ref}
      style={{
        padding: "80px 0",
        backgroundColor: "var(--surface-container-low)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--max-width)",
          margin: "0 auto",
          padding: "0 var(--spacing-8)",
        }}
      >
        {/* Main content */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 56,
            flexWrap: "wrap",
            marginBottom: 48,
          }}
        >
          {/* Left — Text */}
          <div style={{ flex: "1 1 440px", minWidth: 300 }}>
            <p
              className="fs-text"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.1em",
                color: "#0052dc",
                textTransform: "uppercase",
                marginBottom: 12,
              }}
            >
              OUR MISSION
            </p>

            <h2
              className="fs-text"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                fontWeight: 700,
                color: "var(--on-surface)",
                lineHeight: 1.2,
                marginBottom: 20,
              }}
            >
              From a Small Office in Nakodar<br />
              to Punjab&apos;s Most Trusted<br />
              Recruitment Name
            </h2>

            <p
              className="fs-text"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 15,
                color: "var(--on-surface-variant)",
                lineHeight: 1.7,
                marginBottom: 16,
                maxWidth: 500,
              }}
            >
              In 1999, [Founder Name] started Shiva Travel &amp; Manpower Consultants
              with a single mission: to give the hardworking youth of Nakodar and
              Jalandhar a legitimate, safe path to overseas employment. At a time when
              unverified agents were exploiting families, he chose transparency.
            </p>

            <p
              className="fs-text"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 15,
                color: "var(--on-surface-variant)",
                lineHeight: 1.7,
                marginBottom: 28,
                maxWidth: 500,
              }}
            >
              Today, over two decades later, Shiva Manpower has placed more than 5,000
              workers across the UAE, Saudi Arabia, Poland, Romania, and beyond. All with
              zero fraud complaints. Families across Jalandhar, Kapurthala, and the Doaba
              belt trust us because we are their neighbours first, and agents second.
            </p>

            <div className="fs-text" style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  backgroundColor: "#001f5d",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontFamily: "var(--font-display)",
                  fontSize: 18,
                  fontWeight: 700,
                }}
              >
                S
              </div>
              <div>
                <p
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: 16,
                    fontWeight: 700,
                    color: "var(--on-surface)",
                  }}
                >
                  [Founder Name]
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 13,
                    color: "var(--on-surface-variant)",
                  }}
                >
                  Founder &amp; Managing Director
                </p>
              </div>
            </div>
          </div>

          {/* Right — Image + floating quote */}
          <div
            className="fs-image"
            style={{
              flex: "1 1 420px",
              minWidth: 300,
              position: "relative",
            }}
          >
            <div
              style={{
                width: "100%",
                height: 500,
                borderRadius: 20,
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Image
                src="/Professional Indian executive.png"
                alt="Founder of Shiva Manpower Consultants Nakodar"
                fill
                style={{ objectFit: "cover", objectPosition: "center top" }}
              />
            </div>

            {/* Floating quote card */}
            <div
              style={{
                position: "absolute",
                bottom: -20,
                left: -20,
                backgroundColor: "#001f5d",
                borderRadius: 16,
                padding: "20px 24px",
                maxWidth: 300,
                boxShadow: "0 12px 32px rgba(0,12,47,0.2)",
              }}
            >
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 14,
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.6,
                  marginBottom: 8,
                }}
              >
                &ldquo;Every worker we place is someone&apos;s son, someone&apos;s father.
                We treat their dreams with the respect they deserve.&rdquo;
              </p>
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 12,
                  fontWeight: 600,
                  color: "#60a5fa",
                }}
              >
                — [Founder Name]
              </p>
            </div>
          </div>
        </div>

        {/* Stats row */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 48,
            flexWrap: "wrap",
            paddingTop: 20,
          }}
        >
          {stats.map((s) => (
            <div
              key={s.label}
              className="fs-stat"
              style={{ textAlign: "center" }}
            >
              <p
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 32,
                  fontWeight: 800,
                  color: "#0052dc",
                  marginBottom: 4,
                }}
              >
                {s.value}
              </p>
              <p
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 13,
                  color: "var(--on-surface-variant)",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
