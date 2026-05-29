import type { Metadata } from "next";
import Link from "next/link";
import { breadcrumbJsonLd } from "../_lib/breadcrumb";
import SalaryCalcCTA from "@/components/own/SalaryCalcCTA";
import { readDemands } from "../api/admin/demands/store";
import { readOffer } from "../api/admin/offer/store";
import { DemandCard, DemandsEmpty } from "@/components/own/DemandCard";
import SidePosterRails from "@/components/own/SidePosterRails";
import DemandsTicker from "@/components/own/DemandsTicker";
import PageHero from "@/components/own/PageHero";
import NumberedProcess from "@/components/own/NumberedProcess";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: { absolute: "Live Overseas Job Openings | UAE, Saudi, Poland Vacancies" },
  description:
    "Live overseas job openings in construction, factory, driving, hospitality & healthcare. From Punjab's best govt-licensed recruitment agency — UAE, Saudi, Qatar, Poland, Romania. Apply directly, transparent fees.",
  alternates: { canonical: "/current-demands" },
};

export default async function CurrentDemands() {
  const demands = await readDemands();
  const offer = await readOffer("gulf");
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", href: "/" },
              { name: "Current Demands", href: "/current-demands" },
            ])
          ),
        }}
      />
      <main className="cd-page" style={{ backgroundColor: "#f8f9ff", position: "relative", paddingTop: 80 }}>
        <SidePosterRails
          leftImages={offer.leftMarqueeImages}
          rightImages={offer.rightMarqueeImages}
        />
        <DemandsTicker demands={demands} />
        <style>{`
          @media (min-width: 1200px) {
            .cd-page .cd-inner { padding-left: 220px !important; padding-right: 220px !important; }
          }
        `}</style>
        <div className="cd-inner">
        <PageHero
          kicker="Updated Regularly"
          title="Live job openings across the globe."
          highlight="across the globe."
          chips={["Gulf Countries", "European Union", "No Hidden Fees"]}
          description="Browse live openings in Gulf and European countries. Every listing is verified, every employer is vetted, and we maintain minimal & transparent charges. Your next career move starts here."
          stats={[
            { num: "500+", label: "Active Openings" },
            { num: "12+", label: "Countries" },
            { num: "Weekly", label: "Updates" },
          ]}
          image={{ src: "/licensed-overseas-recruitment-punjab.webp", alt: "Professional placement candidates ready for overseas opportunities" }}
          imageSeal={{ title: "500+ Live Openings", subtitle: "Updated weekly across Gulf & Europe" }}
          microChip={{ value: "RA B-1794", label: "MEA Licensed" }}
        />

        {/* ===== LIVE DEMANDS ===== */}
        <section style={{ padding: "80px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0b1c30", marginBottom: 12 }}>Live Demands</h2>
              <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "#43474d", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
                Every demand below is a current opening from a verified employer. Tap a card to apply — our team will call you back.
              </p>
            </div>

            {demands.length === 0 ? (
              <DemandsEmpty />
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: 20 }}>
                {demands.map((d) => (
                  <DemandCard key={d.id} demand={d} />
                ))}
              </div>
            )}
          </div>
        </section>

        <NumberedProcess
          kicker="How It Works"
          title="From your first call to departure day."
          highlight="departure day."
          intro="From your first call to the day you board your flight — every step is transparent, documented, and handled by us."
          steps={[
            { title: "Walk In or Call", desc: "Visit our office in Nakodar or call us directly at +91 98148-20432. No appointment needed." },
            { title: "Profile Assessment", desc: "We evaluate your skills, experience, and preferences to match you with the right opportunity." },
            { title: "Interview & Selection", desc: "Direct interviews with verified employers. No middlemen, no hidden steps." },
            { title: "Visa & Departure", desc: "We handle everything from visa processing to travel arrangements and pre-departure orientation." },
          ]}
        />

        {/* ===== CAN'T FIND YOUR ROLE? ===== */}
        <section style={{ padding: "64px 0", backgroundColor: "#f8f9ff" }}>
          <div style={{ maxWidth: 1300, margin: "0 auto", padding: "0 32px" }}>
            <div
              style={{
                padding: "56px 48px",
                borderRadius: 20,
                backgroundColor: "#001f5d",
                position: "relative",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                gap: 48,
                flexWrap: "wrap",
              }}
            >
              <div style={{ position: "absolute", top: -60, right: -60, width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(255,255,255,0.06) 0%, transparent 70%)" }} />

              <div style={{ flex: "1 1 400px", minWidth: 0, position: "relative" }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700, color: "#ffffff", marginBottom: 16 }}>
                  Can&apos;t Find Your Role?
                </h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "#bfdbfe", lineHeight: 1.7, maxWidth: 520 }}>
                  Not every opening is listed here. We receive new demands from employers every week. Reach out to us directly and we&apos;ll match you with the right opportunity based on your skills and experience.
                </p>
              </div>

              <div style={{ flex: "0 0 auto", display: "flex", gap: 16, flexWrap: "wrap", position: "relative" }}>
                <a
                  href="https://wa.me/919815358832"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 10,
                    padding: "14px 28px",
                    backgroundColor: "#25d366",
                    color: "#fff",
                    fontFamily: "var(--font-display)",
                    fontSize: 14,
                    fontWeight: 700,
                    borderRadius: 50,
                    textDecoration: "none",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp Us
                </a>
                <Link
                  href="/contactus"
                  style={{
                    display: "inline-block",
                    padding: "14px 28px",
                    backgroundColor: "transparent",
                    border: "1.5px solid rgba(255,255,255,0.25)",
                    color: "#fff",
                    fontFamily: "var(--font-display)",
                    fontSize: 14,
                    fontWeight: 700,
                    borderRadius: 50,
                    textDecoration: "none",
                  }}
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        <SalaryCalcCTA />

        {/* ===== CTA ===== */}
        <section style={{ padding: "96px 24px", maxWidth: 1300, margin: "0 auto", background: "linear-gradient(135deg, #000c2f 0%, #001f5d 100%)", textAlign: "center", position: "relative", overflow: "hidden", borderRadius: 24 }}>
          <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(0,82,220,0.15) 0%, transparent 70%)" }} />
          <div style={{ maxWidth: 640, margin: "0 auto", position: "relative" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, color: "#fff", lineHeight: 1.15, marginBottom: 20 }}>
              Ready to move beyond<br />the ordinary?
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: 36, maxWidth: 480, margin: "0 auto 36px" }}>
              Join the thousands of professionals who trusted Punjab&apos;s most reliable manpower agency. Your global career starts with a single consultation.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contactus" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "#ffffff", color: "#001f5d", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                Start Your Application
              </Link>
              <a href="https://wa.me/919815358832" target="_blank" rel="noopener noreferrer" style={{ display: "inline-block", padding: "16px 36px", backgroundColor: "transparent", border: "1.5px solid rgba(255,255,255,0.25)", color: "#fff", fontFamily: "var(--font-display)", fontSize: 15, fontWeight: 700, borderRadius: 50, textDecoration: "none" }}>
                Speak with a Consultant
              </a>
            </div>
          </div>
        </section>
        </div>
      </main>
    </>
  );
}
