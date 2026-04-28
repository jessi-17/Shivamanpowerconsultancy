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

const SITE_URL = "https://shivatravelconsultant.in";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const demand = (await readDemands()).find((d) => d.id === id);
  if (!demand) return { title: "Opening not found" };

  const pageUrl = `${SITE_URL}/current-demands/${demand.id}`;
  const toAbsolute = (u: string) => (u.startsWith("http") ? u : `${SITE_URL}${u}`);
  const imageUrl = demand.poster ? toAbsolute(demand.poster) : `${SITE_URL}/logo.jpg`;
  const title = `${demand.title} — Shiva Travel & Manpower Consultants`;
  const description = demand.description.slice(0, 200) || `${demand.country} opening — apply via Shiva Travel & Manpower Consultants.`;

  return {
    title,
    description,
    alternates: { canonical: pageUrl },
    openGraph: {
      type: "article",
      url: pageUrl,
      siteName: "Shiva Travel & Manpower Consultants",
      title: demand.title,
      description,
      locale: "en_IN",
      images: [
        {
          url: imageUrl,
          width: 1080,
          height: 1350,
          alt: demand.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: demand.title,
      description,
      images: [imageUrl],
    },
  };
}

export default async function DemandDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const allDemands = await readDemands();
  const demand = allDemands.find((d) => d.id === id);
  if (!demand) notFound();

  const otherDemands = allDemands.filter((d) => d.id !== demand.id);
  const offerFile = await readOfferAll();
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
