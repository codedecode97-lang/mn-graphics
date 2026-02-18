import { Metadata } from "next";
import GallerySection from "../sections/Gallery";
import LetterSection from "../sections/Letter";

export const metadata: Metadata = {
  title: "Gallery | M.N. Graphics - Printing Services in Kolkata",
  description:
    "View our completed vinyl cutting, steel letter signage and eco solvent printing projects in Kolkata.",
};

export default function LetterPage() {
  return (
    <main className=" bg-white">


      <LetterSection />

    </main>
  );
}