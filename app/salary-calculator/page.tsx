import type { Metadata } from "next";
import SalaryCalculator from "./SalaryCalculator";

export const metadata: Metadata = {
  title: "Gulf Salary Calculator — Estimate Your Overseas Earnings",
  description:
    "Calculate your expected salary working in UAE, Saudi Arabia, Qatar, Kuwait, Poland or Romania. Free tool by Shiva Manpower Consultants. See take-home pay, accommodation, and benefits.",
  keywords: [
    "gulf salary calculator",
    "overseas salary estimate India",
    "UAE job salary",
    "Saudi Arabia worker salary",
    "Qatar construction salary",
    "overseas job earnings calculator",
  ],
};

export default function SalaryCalculatorPage() {
  return (
    <main className="full-width-page">
      <SalaryCalculator />
    </main>
  );
}
