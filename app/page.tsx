import { Metadata } from "next";
import Hero from "./sections/Hero";
import AboutPage from "./sections/About";
import WhyChooseUs from "./sections/WhyChooseUS";
import ContactPage from "./sections/ContactSection";
import CuttingPage from "./sections/Cutting";
import PrintPage from "./flexprinting/page";
import LetterPage from "./letter/page";
import OurWorkPage from "./ourwork/page";
import OurClients from "./sections/OurClient";


export const metadata: Metadata = {
  title: "M.N. Graphics | Printing Services in Kolkata",
  description:
    "M.N. Graphics offers Vinyl Cutting, Eco Solvent Printing, Steel Letter, Flex Backlit and signage solutions in Kolkata. Contact us for premium branding services.",
  keywords: [
    "Printing Services in Kolkata",
    "Vinyl Cutting in Kolkata",
    "Eco Solvent Printing Kolkata",
    "Steel Letter Signage Kolkata",
  ],
  openGraph: {
    title: "M.N. Graphics | Printing Services in Kolkata",
    description:
      "Premium printing and signage solutions in Kolkata.",
    url: "https://mngraphics.in",
    siteName: "M.N. Graphics",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main className="bg-white">

      {/* Hero Section (Contains Main H1) */}
      <Hero />

      {/* About */}
      <AboutPage />
      <PrintPage />
      <LetterPage />

      {/* Cutting Services */}
      <CuttingPage />
      <OurWorkPage />
      <OurClients />

      {/* Services */}
      {/* <Services /> */}

    

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Contact */}
      <ContactPage />

    </main>
  );
}