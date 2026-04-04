"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import { useIsMobile } from "@/hooks/useIsMobile";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Visa Services", href: "/services" },
  { label: "For Employers", href: "/employers" },
  { label: "For Job Seekers", href: "/job-seekers" },
  { label: "Salary Calculator", href: "/salary-calculator" },
  { label: "Current Demands", href: "/current-demands" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact Us", href: "/contactus" },
];

const visaServices = [
  { label: "Schengen Visa", href: "/visa/schengen" },
  { label: "Romania Visa", href: "/visa/romania" },
  { label: "Poland Visa", href: "/visa/poland" },
  { label: "UAE / Dubai Visa", href: "/visa/uae" },
  { label: "Croatia Visa", href: "/visa/croatia" },
  { label: "Saudi Arabia Visa", href: "/visa/saudi-arabia" },
  { label: "Qatar Visa", href: "/visa/qatar" },
  { label: "Kuwait Visa", href: "/visa/kuwait" },
  { label: "Bahrain Visa", href: "/visa/bahrain" },
];

const immigrationServices = [
  { label: "Immigration Office Nakodar", href: "/nakodar" },
  { label: "Visa Consultant Nakodar", href: "/nakodar" },
  { label: "E-Migrate Guidance", href: "/services/e-migrate" },
  { label: "Document Attestation Guide", href: "/services/document-attestation" },
  { label: "GAMCA Medical Guide", href: "/services/gamca-medical" },
  { label: "Passport Guidance", href: "/services/passport-assistance" },
  { label: "Embassy Guidance", href: "/services/embassy-coordination" },
  { label: "Pre-Departure Briefing", href: "/services/pre-departure-briefing" },
];

const workPermits = [
  { label: "UAE Work Permit", href: "/visa/uae" },
  { label: "Saudi Arabia Work Permit", href: "/visa/saudi-arabia" },
  { label: "Qatar Work Permit", href: "/visa/qatar" },
  { label: "Poland Work Permit", href: "/visa/poland" },
  { label: "Romania Work Permit", href: "/visa/romania" },
  { label: "Croatia Work Permit", href: "/visa/croatia" },
  { label: "Kuwait Work Permit", href: "/visa/kuwait" },
  { label: "Bahrain Work Permit", href: "/visa/bahrain" },
  { label: "Europe Work Permit", href: "/visa/schengen" },
];

const destinations = [
  { label: "Jobs in UAE", href: "/jobs/uae" },
  { label: "Jobs in Saudi Arabia", href: "/jobs/saudi-arabia" },
  { label: "Jobs in Qatar", href: "/jobs/qatar" },
  { label: "Jobs in Europe", href: "/jobs/europe" },
  { label: "Jobs in Poland", href: "/jobs/poland" },
  { label: "Jobs in Romania", href: "/jobs/romania" },
];

const serviceAreas = [
  { label: "Nakodar Office (HQ)", href: "/nakodar" },
  { label: "Jalandhar", href: "/jalandhar" },
  { label: "Kapurthala", href: "/kapurthala" },
  { label: "Phagwara", href: "/phagwara" },
  { label: "Hoshiarpur", href: "/hoshiarpur" },
  { label: "Nawanshahr", href: "/nawanshahr" },
];

const socials = [
  { icon: "mdi:facebook", href: "https://www.facebook.com/shivatravelnakodar/", label: "Facebook" },
  { icon: "mdi:instagram", href: "https://www.instagram.com/shiva.travels.consultants/", label: "Instagram" },
  { icon: "mdi:youtube", href: "https://www.youtube.com/@ShivaTravelNakodar", label: "YouTube" },
  { icon: "mdi:whatsapp", href: "https://wa.me/919815358832", label: "WhatsApp" },
];

export default function Footer() {
  const m = useIsMobile();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const globeRef = useRef<HTMLDivElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!wrapperRef.current || !revealRef.current || !globeRef.current || !footerRef.current) return;

    const ctx = gsap.context(() => {
      const lines = [line1Ref.current, line2Ref.current, line3Ref.current].filter(Boolean) as HTMLSpanElement[];

      lines.forEach((line) => {
        const text = line.textContent || "";
        line.textContent = "";
        text.split("").forEach((char) => {
          const span = document.createElement("span");
          span.textContent = char === " " ? "\u00A0" : char;
          span.style.display = "inline-block";
          span.style.willChange = "transform, opacity, filter";
          span.classList.add("footer-char");
          line.appendChild(span);
        });
      });

      const allChars = revealRef.current!.querySelectorAll(".footer-char");

      gsap.set(allChars, {
        opacity: 0,
        scale: 1.4,
        filter: "blur(20px)",
        y: 20,
      });

      gsap.to(allChars, {
        opacity: 1,
        scale: 1,
        filter: "blur(0px)",
        y: 0,
        duration: 1.0,
        stagger: { each: 0.025, from: "center" },
        ease: "power2.out",
        scrollTrigger: {
          trigger: revealRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });

      const consultantChars = line3Ref.current?.querySelectorAll(".footer-char");
      if (consultantChars?.length) {
        gsap.to(consultantChars, {
          y: -5,
          duration: 2.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
          stagger: { each: 0.08, from: "center" },
        });
      }

      gsap.fromTo(globeRef.current, { y: 80, scale: 0.95 }, {
        y: -20, scale: 1, ease: "none",
        scrollTrigger: { trigger: revealRef.current, start: "top bottom", end: "bottom top", scrub: 1 },
      });

      gsap.fromTo(revealRef.current, { opacity: 0 }, {
        opacity: 1, duration: 0.8, ease: "power2.out",
        scrollTrigger: { trigger: revealRef.current, start: "top 95%", toggleActions: "play none none reverse" },
      });

      const footerCols = footerRef.current?.querySelectorAll(".footer-col");
      if (footerCols?.length) {
        gsap.fromTo(footerCols, { opacity: 0, y: 30 }, {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: footerRef.current, start: "top 85%" },
        });
      }

      gsap.to(footerRef.current, {
        y: -20,
        boxShadow: "0 32px 100px rgba(0,12,47,0.3)",
        scrollTrigger: {
          trigger: revealRef.current,
          start: "top bottom",
          end: "top 60%",
          scrub: 0.8,
        },
      });
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const container = document.getElementById("footer-globe");
    if (!container || (window as any).__footerGlobeInit) return;
    (window as any).__footerGlobeInit = true;

    const script = document.createElement("script");
    script.src = "https://www.webglearth.com/v2/api.js";
    script.async = true;
    script.onload = () => {
      const WE = (window as any).WE;
      if (!WE) return;

      const earth = new WE.map(container, {
        center: [89.6, 158.8],
        zoom: 0,
        dragging: false,
        scrollWheelZoom: false,
        atmosphere: true,
      });

      WE.tileLayer(
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
        { tileSize: 256, maxZoom: 6 }
      ).addTo(earth);

      let lng = 158.8;
      const rotate = () => {
        lng += 0.01;
        earth.setCenter([89.6, lng]);
        requestAnimationFrame(rotate);
      };
      rotate();
    };
    document.head.appendChild(script);

    return () => { (window as any).__footerGlobeInit = false; };
  }, []);

  return (
    <div ref={wrapperRef} style={{ position: "relative", backgroundColor: "#060e24", marginTop: m ? 48 : 80 }}>
      <footer ref={footerRef} style={{
        backgroundColor: "#f8fafc",
        position: "relative",
        zIndex: 2,
        borderRadius: m ? 0 : "0 0 32px 32px",
        boxShadow: m ? "none" : "0 24px 80px rgba(0,12,47,0.2)",
      }}>
        <div style={{
          maxWidth: "var(--max-width)", margin: "0 auto",
          padding: "56px var(--spacing-8) 24px",
        }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 40,
            marginBottom: 40,
          }}>
            {/* Brand */}
            <div className="footer-col">
              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700,
                color: "#172554", marginBottom: 12,
              }}>
                Shiva Travel & Manpower Consultants
              </h3>
              <p style={{
                fontFamily: "var(--font-body)", fontSize: 14, color: "#64748b", lineHeight: 1.6,
                marginBottom: 16,
              }}>
                A premier manpower consultancy helping the youth of Punjab find dignified and
                high-growth opportunities across the globe.
              </p>
              <div style={{ display: "flex", gap: 8 }}>
                {socials.map((s) => (
                  <a
                    key={s.icon}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    aria-label={s.label}
                    style={{
                      width: 32, height: 32, borderRadius: 8,
                      backgroundColor: "rgba(0,12,47,0.06)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 150ms",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#001f5d";
                      (e.currentTarget.firstChild as HTMLElement).style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(0,12,47,0.06)";
                      (e.currentTarget.firstChild as HTMLElement).style.color = "#64748b";
                    }}
                  >
                    <Icon icon={s.icon} width={16} height={16} style={{ color: "#64748b", transition: "color 150ms" }} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h4 style={{
                fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
                color: "#000c2f", marginBottom: 16,
              }}>Quick Links</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {quickLinks.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    style={{
                      fontFamily: "var(--font-body)", fontSize: 14, color: "#64748b",
                      textDecoration: "none", transition: "color 150ms",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#0052dc"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#64748b"; }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Visa Services */}
            <div className="footer-col">
              <h4 style={{
                fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
                color: "#000c2f", marginBottom: 16,
              }}>Visa Services</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {visaServices.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    style={{
                      fontFamily: "var(--font-body)", fontSize: 14, color: "#64748b",
                      textDecoration: "none", transition: "color 150ms",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#0052dc"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#64748b"; }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Immigration */}
            <div className="footer-col">
              <h4 style={{
                fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
                color: "#000c2f", marginBottom: 16,
              }}>Immigration</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {immigrationServices.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    style={{
                      fontFamily: "var(--font-body)", fontSize: 14, color: "#64748b",
                      textDecoration: "none", transition: "color 150ms",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#0052dc"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#64748b"; }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Work Permits */}
            <div className="footer-col">
              <h4 style={{
                fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
                color: "#000c2f", marginBottom: 16,
              }}>Work Permits</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {workPermits.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    style={{
                      fontFamily: "var(--font-body)", fontSize: 14, color: "#64748b",
                      textDecoration: "none", transition: "color 150ms",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#0052dc"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#64748b"; }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Jobs Abroad */}
            <div className="footer-col">
              <h4 style={{
                fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
                color: "#000c2f", marginBottom: 16,
              }}>Jobs Abroad</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {destinations.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    style={{
                      fontFamily: "var(--font-body)", fontSize: 14, color: "#64748b",
                      textDecoration: "none", transition: "color 150ms",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#0052dc"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#64748b"; }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div className="footer-col">
              <h4 style={{
                fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
                color: "#000c2f", marginBottom: 16,
              }}>Service Areas</h4>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {serviceAreas.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    style={{
                      fontFamily: "var(--font-body)", fontSize: 14, color: "#64748b",
                      textDecoration: "none", transition: "color 150ms",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#0052dc"; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#64748b"; }}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="footer-col">
              <h4 style={{
                fontFamily: "var(--font-display)", fontSize: 16, fontWeight: 700,
                color: "#000c2f", marginBottom: 16,
              }}>Contact Us</h4>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 12 }}>
                <Icon icon="mdi:map-marker" width={20} style={{ color: "#0052dc", marginTop: 2, flexShrink: 0 }} />
                <p style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#64748b", lineHeight: 1.6, margin: 0 }}>
                  Golden Avenue, Near Sukhjeet Hospital,<br />
                  Jalandhar Road, Nakodar, Punjab
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <Icon icon="mdi:phone-outline" width={16} style={{ color: "#64748b", flexShrink: 0 }} />
                <a href="tel:+919814820432" style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#64748b", textDecoration: "none" }}>
                  +91 98148-20432 <span style={{ fontSize: 11, color: "#94a3b8" }}>(Call)</span>
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <Icon icon="mdi:whatsapp" width={16} style={{ color: "#64748b", flexShrink: 0 }} />
                <a href="https://wa.me/919815358832" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#64748b", textDecoration: "none" }}>
                  +91 98153-58832 <span style={{ fontSize: 11, color: "#94a3b8" }}>(WhatsApp)</span>
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
                <Icon icon="mdi:email-outline" width={16} style={{ color: "#64748b", flexShrink: 0 }} />
                <a href="mailto:info@shivamanpower.com" style={{ fontFamily: "var(--font-body)", fontSize: 14, color: "#64748b", textDecoration: "none" }}>
                  info@shivamanpower.com
                </a>
              </div>

              <Link
                href="/contactus"
                style={{
                  display: "inline-flex", padding: "8px 20px", borderRadius: 8,
                  backgroundColor: "#c4dcff", color: "#001f5d",
                  fontFamily: "var(--font-display)", fontSize: 13, fontWeight: 600,
                  textDecoration: "none", transition: "all 150ms",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#0052dc";
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#c4dcff";
                  e.currentTarget.style.color = "#001f5d";
                }}
              >
                Visit Us Now →
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div style={{
            borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: 20, textAlign: "center",
          }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 12, color: "#94a3b8" }}>
              © 2026 Shiva Travel & Manpower Consultants. Licensed by Ministry of External Affairs (RA B-1794). All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Globe reveal */}
      <div ref={revealRef} style={{
        position: "sticky",
        bottom: 0,
        zIndex: 1,
        backgroundColor: "#060e24",
        overflow: "hidden",
      }}>
        <div style={{ textAlign: "center", paddingTop: 40, position: "relative", zIndex: 1 }}>
          <h2 aria-hidden="true" style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(3rem, 9vw, 8rem)",
            fontWeight: 800, lineHeight: 1, letterSpacing: "-0.03em",
            userSelect: "none", margin: 0,
          }}>
            <span ref={line1Ref} style={{ display: "block", color: "rgba(255,255,255,0.06)", willChange: "transform, opacity" }}>
              Shiva Travel &
            </span>
            <span ref={line2Ref} style={{ display: "block", color: "rgba(255,255,255,0.06)", willChange: "transform, opacity" }}>
              Manpower
            </span>
            <span ref={line3Ref} style={{ display: "block", color: "rgba(96,165,250,0.2)", willChange: "transform, opacity" }}>
              Consultant
            </span>
          </h2>
        </div>

        <div ref={globeRef} style={{
          position: "relative",
          width: "100%",
          height: "35vw",
          maxHeight: 400,
          margin: "-20px auto 0",
          willChange: "transform",
          overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 80,
            background: "linear-gradient(to bottom, #060e24 0%, transparent 100%)",
            zIndex: 1, pointerEvents: "none",
          }} />
          <div id="footer-globe" style={{
            position: "absolute",
            width: "200%",
            height: "100vw",
            overflow: "hidden",
            left: "-50%",
            top: "-60%",
          }} />
        </div>
      </div>
    </div>
  );
}
