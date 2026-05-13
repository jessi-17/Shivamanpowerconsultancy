import type { Metadata } from "next";
import SalaryCalculator from "./SalaryCalculator";

export const metadata: Metadata = {
  title: { absolute: "Free Gulf Salary Calculator | UAE, Saudi, Qatar, Poland Earnings" },
  description:
    "Free salary calculator for overseas jobs — estimate take-home pay in UAE, Saudi Arabia, Qatar, Kuwait, Poland & Romania. By Punjab's best govt-licensed manpower consultancy (RA B-1794).",
  keywords: [
    "free gulf salary calculator",
    "best overseas salary estimate punjab",
    "UAE job salary calculator",
    "Saudi Arabia worker salary",
    "Qatar construction salary",
    "poland worker salary calculator",
    "overseas job earnings calculator nakodar",
  ],
  alternates: { canonical: "/salary-calculator" },
};

export default function SalaryCalculatorPage() {
  return (
    <main className="full-width-page">
      <SalaryCalculator />
    </main>
  );
}
