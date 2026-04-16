import type { Metadata } from "next";
import { readOffer } from "../api/admin/offer/route";
import { readDemands } from "../api/admin/demands/route";
import OfferClient from "./OfferClient";

export const metadata: Metadata = {
  title: "Work Abroad — Free Consultation",
  description:
    "Book a free consultation with Shiva Travel & Manpower Consultants. Government licensed overseas recruitment agency.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
  alternates: {
    canonical: undefined,
  },
};

export const dynamic = "force-dynamic";

export default function OfferPage() {
  const offer = readOffer();
  const demands = readDemands();
  return <OfferClient offer={offer} demands={demands} />;
}
