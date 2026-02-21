import { Metadata } from "next";
import LetterSection from "../sections/Letter";
import OurWork from "../sections/OurWork";

export const metadata: Metadata = {
  title: "Gallery | M.N. Graphics - Printing Services in Kolkata",
  description:
    "View our completed vinyl cutting, steel letter signage and eco solvent printing projects in Kolkata.",
};

export default function OurWorkPage() {
  return (
    <main className=" bg-white">


      <OurWork />

    </main>
  );
}