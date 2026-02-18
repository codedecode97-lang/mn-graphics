import { Metadata } from "next";
import PrintSection from "../sections/PrintSection";

export const metadata: Metadata = {
  title: "Gallery | M.N. Graphics - Printing Services in Kolkata",
  description:
    "View our completed vinyl cutting, steel letter signage and eco solvent printing projects in Kolkata.",
};

export default function PrintPage() {
  return (
    <main className=" bg-white">
      <PrintSection />

    </main>
  );
}