import { Metadata } from "next";
import GallerySection from "../sections/Gallery";

export const metadata: Metadata = {
  title: "Gallery | M.N. Graphics - Printing Services in Kolkata",
  description:
    "View our completed vinyl cutting, steel letter signage and eco solvent printing projects in Kolkata.",
};

export default function GalleryPage() {
  return (
    <main className="pt-40 bg-white">

      <section className="text-center pb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Our Gallery
        </h1>

        <p className="mt-6 text-gray-600 max-w-3xl mx-auto">
          Take a look at some of our recent printing and signage projects
          delivered across Kolkata.
        </p>
      </section>

      <GallerySection />

    </main>
  );
}