"use client";

import { useState } from "react";
import Image from "next/image";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const faqs = [
  {
    category: "General",
    items: [
      {
        q: "Is Shiva Manpower a government-licensed agency?",
        a: "Yes. We hold RA License B-1794/PUN/PER/100/5/10094/2022 issued by the Ministry of External Affairs, Government of India, valid through June 2027. We are also members of ALMRA Punjab.",
      },
      {
        q: "Where is your office located?",
        a: "Our headquarters is at Golden Avenue, Near Sukhjeet Hospital, Jalandhar Road, Nakodar, Punjab 144040. We serve candidates across Punjab.",
      },
      {
        q: "What are your working hours?",
        a: "Our office is open Monday to Saturday, 9:00 AM to 6:00 PM. You can also reach us on WhatsApp anytime.",
      },
    ],
  },
  {
    category: "Recruitment Process",
    items: [
      {
        q: "What is your process for vetting candidates?",
        a: "Our rigorous process includes multi-stage interviews, skill assessments, background checks, and verification of all credentials to ensure you only meet with qualified, reliable professionals.",
      },
      {
        q: "How long does the placement process typically take?",
        a: "Depending on the role and destination country, our placement process typically takes 30 to 60 days from registration to deployment. Urgent positions can be fast-tracked.",
      },
      {
        q: "What documents do I need to apply?",
        a: "You'll need a valid passport, educational certificates, experience letters (if any), passport-size photographs, and an updated resume. We'll guide you through the exact requirements based on your destination country.",
      },
    ],
  },
  {
    category: "Fees & Costs",
    items: [
      {
        q: "Are there any fees for candidates to apply for a job?",
        a: "No. We maintain minimal and transparent charges with no hidden fees. Our services are primarily funded by the hiring employers. This is our commitment to ethical, transparent recruitment.",
      },
      {
        q: "Do I need to pay for my visa?",
        a: "In most cases, the employer covers visa costs. We will clearly communicate any costs upfront before you proceed, so there are never hidden charges.",
      },
    ],
  },
  {
    category: "Countries & Jobs",
    items: [
      {
        q: "Which countries do you specialize in?",
        a: "We specialize in placements across the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Poland, Romania, and other European countries. Our 20+ years of experience span construction, hospitality, healthcare, oil & gas, and logistics sectors.",
      },
      {
        q: "What types of jobs are available?",
        a: "We have openings for electricians, plumbers, welders, AC technicians, drivers, security guards, warehouse workers, factory operators, hospitality staff, and many more skilled and semi-skilled roles.",
      },
      {
        q: "Can I choose which country I want to work in?",
        a: "Absolutely. During registration, you can specify your preferred destination. We match your skills and preferences with available opportunities in that country.",
      },
    ],
  },
  {
    category: "Post-Placement Support",
    items: [
      {
        q: "What support do you offer after I get a job offer?",
        a: "We assist with visa processing, medical coordination, E-Migrate compliance, pre-departure orientation, and post-arrival follow-up to ensure a smooth transition to your new role.",
      },
      {
        q: "What if I face problems at my workplace abroad?",
        a: "We maintain contact with all our placed candidates. If you face any issues, reach out to us and we will coordinate with the employer to resolve the situation. Your welfare is our priority.",
      },
    ],
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.flatMap((cat) =>
    cat.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    }))
  ),
};

export default function FAQPage() {
  const m = useIsMobile();
  const heroRef = useScrollReveal();

  return (
    <main className="full-width-page" style={{ backgroundColor: "#f8f9ff" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* ===== HERO -- Split Layout ===== */}
      <section
        ref={heroRef}
        className="reveal"
        style={{ paddingTop: 120, paddingBottom: 80, backgroundColor: "#f8f9ff" }}
      >
        <div
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            gap: 60,
            flexWrap: "wrap",
          }}
        >
          {/* Left -- Text */}
          <div style={{ flex: "1 1 480px", minWidth: 0 }}>
            <div
              style={{
                display: "inline-block",
                padding: "6px 16px",
                backgroundColor: "#eff4ff",
                borderRadius: 20,
                marginBottom: 24,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 12,
                  fontWeight: 700,
                  color: "#0052dc",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Got Questions? We Have Answers
              </span>
            </div>

            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                fontWeight: 800,
                color: "#0b1c30",
                lineHeight: 1.05,
                letterSpacing: "-1.5px",
                marginBottom: 24,
              }}
            >
              Frequently Asked
              <br />
              <span style={{ color: "#0052dc" }}>Questions.</span>
            </h1>

            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 17,
                color: "#43474d",
                lineHeight: 1.7,
                marginBottom: 32,
                maxWidth: 520,
              }}
            >
              Everything you need to know about working abroad with Shiva Travel
              &amp; Manpower Consultancy. From recruitment to post-placement
              support, we have you covered.
            </p>

            {/* Badges */}
            <div style={{ display: "flex", gap: 16, marginBottom: 32, flexWrap: "wrap" }}>
              {["No Hidden Fees", "MEA Licensed"].map((badge) => (
                <div key={badge} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      backgroundColor: "#0b1c30",
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: 13,
                      fontWeight: 600,
                      color: "#0b1c30",
                    }}
                  >
                    {badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right -- Image with overlay stat */}
          <div style={{ flex: "1 1 440px", minWidth: 0, position: "relative" }}>
            <div
              style={{
                position: "relative",
                borderRadius: 16,
                overflow: "hidden",
                aspectRatio: "4/3",
              }}
            >
              <Image
                src="/office image .webp"
                alt="Shiva Travel Manpower Consultants office"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                priority
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: -20,
                right: 24,
                backgroundColor: "#001f5d",
                borderRadius: 12,
                padding: "20px 28px",
                boxShadow: "0 8px 32px rgba(0,12,47,0.3)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#fff",
                  lineHeight: 1,
                }}
              >
                5
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 10,
                  fontWeight: 700,
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginTop: 4,
                }}
              >
                FAQ Categories
                <br />
                Covered
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section
        style={{
          padding: "60px 0",
          backgroundColor: "#ffffff",
          borderTop: "1px solid #e5e7eb",
          borderBottom: "1px solid #e5e7eb",
        }}
      >
        <div
          style={{
            maxWidth: 1300,
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            justifyContent: "center",
            gap: m ? 32 : 64,
            flexWrap: "wrap",
          }}
        >
          {[
            { value: "50+", label: "Questions Answered" },
            { value: "5", label: "Categories" },
            { value: "Same Day", label: "Response Time" },
            { value: "Mon-Sat", label: "9 AM - 6 PM Support" },
          ].map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 28,
                  fontWeight: 800,
                  color: "#001f5d",
                  lineHeight: 1,
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-body)",
                  fontSize: 11,
                  fontWeight: 600,
                  color: "#64748b",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginTop: 4,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FAQ CONTENT ===== */}
      <section
        style={{
          padding: m ? "48px 0 80px" : "80px 0 100px",
          backgroundColor: "#f8f9ff",
        }}
      >
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: m ? "0 20px" : "0 32px",
          }}
        >
          {/* Section heading */}
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                fontWeight: 700,
                color: "#0b1c30",
                marginBottom: 12,
              }}
            >
              Browse by Category
            </h2>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 16,
                color: "#43474d",
                lineHeight: 1.7,
                maxWidth: 540,
                margin: "0 auto",
              }}
            >
              Select a topic below to find the answers you need. Can&apos;t find
              what you&apos;re looking for? Reach out to our team directly.
            </p>
          </div>

          {faqs.map((category) => (
            <div key={category.category} style={{ marginBottom: 48 }}>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: m ? 18 : 22,
                  fontWeight: 700,
                  color: "#001f5d",
                  marginBottom: 20,
                  paddingBottom: 12,
                  borderBottom: "2px solid #e2e8f0",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span
                  style={{
                    width: 4,
                    height: 24,
                    backgroundColor: "#0052dc",
                    borderRadius: 2,
                    flexShrink: 0,
                  }}
                />
                {category.category}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {category.items.map((item) => (
                  <AccordionItem key={item.q} q={item.q} a={item.a} m={m} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ===== STILL HAVE QUESTIONS CTA ===== */}
        <div
          style={{
            maxWidth: 800,
            margin: "0 auto",
            padding: m ? "0 20px" : "0 32px",
          }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #000c2f 0%, #001f5d 100%)",
              borderRadius: 24,
              padding: m ? "40px 24px" : "56px 48px",
              textAlign: "center",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 500,
                height: 500,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(0,82,220,0.15) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <h3
              style={{
                fontFamily: "var(--font-display)",
                fontSize: m ? 22 : 28,
                fontWeight: 800,
                color: "#ffffff",
                marginBottom: 12,
                position: "relative",
              }}
            >
              Still Have Questions?
            </h3>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: m ? 14 : 16,
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.7,
                marginBottom: 32,
                maxWidth: 480,
                margin: "0 auto 32px",
                position: "relative",
              }}
            >
              Our team is ready to help. Reach out on WhatsApp or visit our
              office in Nakodar.
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 16,
                flexWrap: "wrap",
                position: "relative",
              }}
            >
              <a
                href="https://wa.me/919815358832"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "16px 36px",
                  backgroundColor: "#16a34a",
                  color: "#fff",
                  fontFamily: "var(--font-display)",
                  fontSize: 15,
                  fontWeight: 700,
                  borderRadius: 50,
                  textDecoration: "none",
                  boxShadow: "0 0 20px rgba(22,163,74,0.4)",
                  transition: "transform 150ms, box-shadow 150ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow =
                    "0 0 30px rgba(22,163,74,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(22,163,74,0.4)";
                }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="#fff">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
              <a
                href="/contactus"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "16px 36px",
                  backgroundColor: "transparent",
                  border: "1.5px solid rgba(255,255,255,0.25)",
                  color: "#fff",
                  fontFamily: "var(--font-display)",
                  fontSize: 15,
                  fontWeight: 700,
                  borderRadius: 50,
                  textDecoration: "none",
                  transition: "all 150ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor =
                    "rgba(255,255,255,0.08)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                }}
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function AccordionItem({ q, a, m }: { q: string; a: string; m: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        borderRadius: 12,
        border: open ? "1.5px solid #0052dc" : "1.5px solid #e2e8f0",
        overflow: "hidden",
        transition: "border-color 200ms",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          padding: m ? "16px 18px" : "20px 24px",
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: m ? 14 : 16,
            fontWeight: 600,
            color: open ? "#0052dc" : "#0b1c30",
            lineHeight: 1.4,
            transition: "color 200ms",
          }}
        >
          {q}
        </span>
        <span
          style={{
            flexShrink: 0,
            width: 28,
            height: 28,
            borderRadius: "50%",
            backgroundColor: open ? "#0052dc" : "#eff4ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "all 200ms",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke={open ? "#fff" : "#0052dc"}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transition: "transform 200ms",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </span>
      </button>
      <div
        role="region"
        aria-hidden={!open}
        style={{
          maxHeight: open ? 300 : 0,
          overflow: "hidden",
          transition: "max-height 300ms ease",
        }}
      >
        <p
          style={{
            padding: m ? "0 18px 18px" : "0 24px 24px",
            fontFamily: "var(--font-body)",
            fontSize: m ? 14 : 15,
            color: "#43474d",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          {a}
        </p>
      </div>
    </div>
  );
}
