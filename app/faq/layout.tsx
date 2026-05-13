import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { absolute: "FAQ | Best Overseas Recruitment & Visa Agency in Punjab" },
  description:
    "Answers to common questions about overseas jobs, work visas, E-Migrate, GAMCA medical & fees. From Punjab's best govt-licensed manpower consultancy (RA B-1794) — 20+ years of placements.",
  alternates: { canonical: "/faq" },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
