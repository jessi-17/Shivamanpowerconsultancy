"use client";

import { useRef, useEffect } from "react";
import { gsap } from "@/lib/gsap";

const reviewsRow1 = [
  { name: "Ruksarmani Dadrha", location: "Nakodar", rating: 5, text: "Shiva Travel is the most trusted consultant for Gulf and Europe work permits. They helped me and my cousin both. One went to Dubai, the other to Poland. Very professional." },
  { name: "Ajit Singh Rawat", location: "Jalandhar", rating: 5, text: "The service is great as long as you clearly cross your point. Owner is so friendly and patient. Very helpful staff and from here the work of sending people abroad gets done quickly." },
  { name: "Vicky Jain", location: "Punjab", rating: 5, text: "Best travel agent in Punjab. I received my work permit for Romania through them. Smooth process and very supportive team throughout." },
  { name: "Amandeep", location: "Nakodar", rating: 5, text: "Shiva Travel and Manpower Consultants is an excellent and highly reliable service provider. Their professionalism, transparency, and commitment to customer satisfaction truly set them apart." },
  { name: "Nishan Begraj", location: "Nakodar", rating: 5, text: "Shiva Travel services is amazing! Their process is hassle free, making everything easy. They give great recommendations. The offers are good and reasonably priced too!" },
  { name: "Naveen Kumar", location: "Jalandhar", rating: 5, text: "I had a great experience with Shiva Travel & Manpower Consultants. The team is very professional, knowledgeable, and supportive throughout the entire process." },
];

const reviewsRow2 = [
  { name: "Daljinder Singh Sandhu", location: "Punjab", rating: 5, text: "You will get genuine advice everytime. No false promises, just honest guidance about overseas jobs and what to expect." },
  { name: "Vaneet Dadhra", location: "Nakodar", rating: 5, text: "Excellent work. Team is supportive and behavior is good. They treat everyone with respect and explain every step clearly." },
  { name: "Shiva Courier Nakodar", location: "Nakodar", rating: 5, text: "Shiva Travel Nakodar provides good service for Gulf and Europe work permits. Staff is helpful and processing is fast. Recommended for overseas job assistance." },
  { name: "Charnjit Kaur", location: "Nakodar", rating: 5, text: "Good service. They handled all my documents properly and kept us informed about the progress. Would recommend to anyone looking for Gulf jobs." },
  { name: "Gurpreet Singh", location: "Kapurthala", rating: 5, text: "My family has been using Shiva Travel for years. My father went to Dubai through them and now my brother is in Saudi Arabia. We trust them completely." },
  { name: "Harjinder Kaur", location: "Shahkot", rating: 5, text: "Very reliable agency. They don't charge extra fees and the whole process is transparent. Got my son placed in Qatar within 2 months." },
];

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24"
          fill={i < count ? "#f59e0b" : "rgba(255,255,255,0.15)"}
          stroke="none"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: typeof reviewsRow1[0] }) {
  return (
    <div style={{
      flex: "0 0 360px",
      padding: "24px 28px",
      backgroundColor: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: 16,
      backdropFilter: "blur(8px)",
    }}>
      <Stars count={review.rating} />
      <p style={{
        fontFamily: "var(--font-body)", fontSize: 14,
        color: "rgba(255,255,255,0.7)", lineHeight: 1.6,
        marginTop: 12, marginBottom: 16,
      }}>
        &ldquo;{review.text}&rdquo;
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <div style={{
          width: 36, height: 36, borderRadius: "50%",
          backgroundColor: "rgba(0,82,220,0.2)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontFamily: "var(--font-display)", fontSize: 14, fontWeight: 700,
          color: "#60a5fa",
        }}>
          {review.name[0]}
        </div>
        <div>
          <p style={{
            fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 700, color: "#fff",
          }}>
            {review.name}
          </p>
          <p style={{
            fontFamily: "var(--font-body)", fontSize: 11, color: "rgba(255,255,255,0.4)",
          }}>
            {review.location}
          </p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({ reviews, direction }: { reviews: typeof reviewsRow1; direction: "left" | "right" }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;
    const track = trackRef.current;
    const totalWidth = track.scrollWidth / 2;

    gsap.set(track, { x: direction === "left" ? 0 : -totalWidth });

    const tween = gsap.to(track, {
      x: direction === "left" ? -totalWidth : 0,
      duration: 60,
      ease: "none",
      repeat: -1,
    });

    track.addEventListener("mouseenter", () => tween.pause());
    track.addEventListener("mouseleave", () => tween.resume());

    return () => { tween.kill(); };
  }, [direction]);

  const doubled = [...reviews, ...reviews];

  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div ref={trackRef} style={{ display: "flex", gap: 16, width: "max-content" }}>
        {doubled.map((r, i) => (
          <ReviewCard key={`${r.name}-${i}`} review={r} />
        ))}
      </div>
    </div>
  );
}

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(ref.current.querySelector(".test-header"),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" } }
    );
  }, []);

  return (
    <div
      ref={ref}
      style={{
        padding: "80px 0",
        backgroundColor: "#000c2f",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Fade edges */}
      <div style={{
        position: "absolute", top: 0, left: 0, bottom: 0, width: 120,
        background: "linear-gradient(to right, #000c2f, transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: 0, right: 0, bottom: 0, width: 120,
        background: "linear-gradient(to left, #000c2f, transparent)",
        zIndex: 2, pointerEvents: "none",
      }} />

      {/* Header */}
      <div className="test-header" style={{
        textAlign: "center", marginBottom: 48,
        padding: "0 var(--spacing-8)",
      }}>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 12, fontWeight: 700,
          letterSpacing: "0.1em", color: "#60a5fa", textTransform: "uppercase",
          marginBottom: 12,
        }}>
          REAL GOOGLE REVIEWS
        </p>
        <h2 style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
          fontWeight: 700, color: "#fff", marginBottom: 8,
        }}>
          Trusted by Thousands Across Punjab
        </h2>
        <p style={{
          fontFamily: "var(--font-body)", fontSize: 14,
          color: "rgba(255,255,255,0.4)", maxWidth: 460, margin: "0 auto",
        }}>
          From Nakodar to Jalandhar, families trust us with their futures.
        </p>
      </div>

      {/* Row 1 — left */}
      <div style={{ marginBottom: 16 }}>
        <MarqueeRow reviews={reviewsRow1} direction="left" />
      </div>

      {/* Row 2 — right */}
      <MarqueeRow reviews={reviewsRow2} direction="right" />
    </div>
  );
}
