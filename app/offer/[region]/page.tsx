import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { readOffer, type Region } from "../../api/admin/offer/route";
import { readDemands } from "../../api/admin/demands/route";
import OfferClient from "./OfferClient";

const VALID_REGIONS: Region[] = ["gulf", "europe"];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ region: string }>;
}): Promise<Metadata> {
  const { region } = await params;
  const label = region === "europe" ? "Europe" : "Gulf";
  return {
    title: `Work Abroad — ${label} | Free Consultation`,
    description:
      "Book a free consultation with Shiva Travel & Manpower Consultants. Government licensed overseas recruitment agency.",
    robots: { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } },
    alternates: { canonical: undefined },
  };
}

export const dynamic = "force-dynamic";

export default async function OfferRegionPage({
  params,
}: {
  params: Promise<{ region: string }>;
}) {
  const { region } = await params;
  if (!VALID_REGIONS.includes(region as Region)) notFound();

  const offer = await readOffer(region as Region);
  const demands = await readDemands();
  return <OfferClient offer={offer} demands={demands} region={region as Region} />;
}
