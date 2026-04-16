import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { breadcrumbJsonLd } from "../../_lib/breadcrumb";
import { readDemands } from "../../api/admin/demands/route";
import { readOfferAll } from "../../api/admin/offer/route";
import DemandDetailClient from "./DemandDetailClient";

export const dynamic = "force-dynamic";

const EUROPEAN_COUNTRIES = new Set([
  "Poland",
  "Romania",
  "Croatia",
  "Malta",
  "Hungary",
  "Czech Republic",
  "Germany",
  "Italy",
  "Spain",
  "Portugal",
  "Greece",
  "Cyprus",
  "Europe",
  "Schengen",
]);

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const demand = readDemands().find((d) => d.id === id);
  if (!demand) return { title: "Opening not found" };
  return {
    title: `${demand.title} — Shiva Travel & Manpower Consultants`,
    description: demand.description.slice(0, 160),
    openGraph: {
      title: demand.title,
      description: demand.description.slice(0, 160),
      images: demand.poster ? [{ url: demand.poster }] : undefined,
    },
  };
}

export default async function DemandDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const allDemands = readDemands();
  const demand = allDemands.find((d) => d.id === id);
  if (!demand) notFound();

  const otherDemands = allDemands.filter((d) => d.id !== demand.id);
  const offerFile = readOfferAll();
  const region = EUROPEAN_COUNTRIES.has(demand.country) ? "europe" : "gulf";
  const offer = offerFile[region];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbJsonLd([
              { name: "Home", href: "/" },
              { name: "Current Demands", href: "/current-demands" },
              { name: demand.title, href: `/current-demands/${demand.id}` },
            ])
          ),
        }}
      />
      <DemandDetailClient
        demand={demand}
        otherDemands={otherDemands}
        leftMarqueeImages={offer.leftMarqueeImages}
        rightMarqueeImages={offer.rightMarqueeImages}
      />
    </>
  );
}
