"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useIsMobile } from "@/hooks/useIsMobile";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const officeImages = [
  { src: "/office image .webp", alt: "Shiva Travel & Manpower Consultants Nakodar office front" },
  { src: "/carousel 1.webp", alt: "Shiva Manpower Consultants Nakodar office" },
  { src: "/carousel 2.webp", alt: "Shiva Travel recruitment team Jalandhar" },
  { src: "/carousel 3.webp", alt: "Overseas placement process at Shiva Manpower" },
  { src: "/carousel 4.webp", alt: "Shiva Travel Manpower Consultants team" },
];

function OfficeCarousel() {
  const m = useIsMobile();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleThumbClick = useCallback(
    (index: number) => { api?.scrollTo(index); },
    [api]
  );

  return (
    <div>
      <Carousel className="w-full" setApi={setApi}>
        <CarouselContent>
          {officeImages.map((img) => (
            <CarouselItem key={img.src}>
              <div style={{ position: "relative", width: "100%", height: m ? 260 : 440, borderRadius: 16, overflow: "hidden" }}>
                <Image src={img.src} alt={img.alt} fill sizes="(max-width: 640px) 100vw, 50vw" loading="lazy" style={{ objectFit: "cover", objectPosition: "center" }} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div style={{ display: "flex", gap: 8, marginTop: 12, overflow: "hidden" }}>
        {officeImages.map((img, index) => (
          <div
            key={img.src}
            onClick={() => handleThumbClick(index)}
            style={{
              position: "relative",
              flex: "1 1 0",
              height: m ? 48 : 72,
              borderRadius: 8,
              overflow: "hidden",
              cursor: "pointer",
              opacity: current === index + 1 ? 1 : 0.5,
              transition: "opacity 200ms",
            }}
          >
            <Image src={img.src} alt={img.alt} fill sizes="60px" loading="lazy" style={{ objectFit: "cover", objectPosition: "center" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function LocalCTA() {
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();
  const m = useIsMobile();

  return (
    <div style={{ padding: m ? "40px 0" : "80px 0", backgroundColor: "var(--surface)", position: "relative" }}>
      <div style={{
        maxWidth: "var(--max-width)", margin: "0 auto", padding: "0 var(--spacing-8)",
        display: "flex", alignItems: "center", gap: m ? 32 : 60, flexWrap: "wrap",
      }}>

        {/* Left — Text content */}
        <div ref={leftRef} className="reveal-left" style={{ flex: "1 1 480px", minWidth: 0 }}>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
            letterSpacing: "0.1em", color: "#0052dc", textTransform: "uppercase", marginBottom: 16,
          }}>
            NAKODAR &amp; JALANDHAR&apos;S #1 CHOICE
          </p>
          <h2 style={{
            fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
            fontWeight: 700, color: "var(--on-surface)", marginBottom: 20, lineHeight: 1.2,
          }}>
            The Most Trusted Name in Jalandhar &amp; Nakodar for Overseas Recruitment
          </h2>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 15, color: "var(--on-surface-variant)",
            lineHeight: 1.7, maxWidth: 520, marginBottom: 28,
          }}>
            For over two decades, families across Jalandhar, Nakodar, Kapurthala, and the entire
            Doaba belt have trusted Shiva Manpower Consultancy for safe, legal, and
            verified overseas placements. We are your neighbours,
            rooted in this community, accountable to every family we serve.
          </p>

          {/* Trust points */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
            {[
              "Walk-in office in Nakodar. Meet us face to face.",
              "Zero fraud cases in 25+ years of operations",
              "Families recommend us to families. That's our marketing.",
            ].map((point) => (
              <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                  <circle cx="12" cy="12" r="12" fill="#0052dc" fillOpacity={0.1} />
                  <path d="M8 12.5l2.5 2.5L16 9.5" stroke="#0052dc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "var(--on-surface)", lineHeight: 1.5 }}>
                  {point}
                </span>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <a
              href="/contactus"
              style={{
                display: "inline-flex", alignItems: "center", padding: "14px 28px",
                backgroundColor: "#001f5d", color: "#ffffff",
                fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700,
                borderRadius: 10, textDecoration: "none",
                transition: "all 150ms cubic-bezier(0.16,1,0.3,1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,31,93,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Visit Our Nakodar Office
            </a>
            <a
              href="tel:+919814820432"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 28px", backgroundColor: "transparent",
                color: "var(--on-surface)",
                fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700,
                borderRadius: 10, textDecoration: "none",
                border: "1.5px solid rgba(0,0,0,0.12)",
                transition: "all 150ms cubic-bezier(0.16,1,0.3,1)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,82,220,0.3)";
                e.currentTarget.style.backgroundColor = "rgba(0,82,220,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.12)";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 98148-20432
            </a>
          </div>
        </div>

        {/* Right — Office carousel */}
        <div ref={rightRef} className="reveal-right" style={{ flex: "1 1 500px", minWidth: 0, width: "100%" }}>
          <OfficeCarousel />
        </div>
      </div>
    </div>
  );
}
