import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";



export const metadata: Metadata = {
  metadataBase: new URL("https://mngraphics.in"),
  title: {
    default: "M.N. Graphics | Printing Services in Kolkata",
    template: "%s | M.N. Graphics",
  },
  description:
    "M.N. Graphics provides Vinyl Cutting, Eco Solvent Printing, Steel Letter and premium signage solutions in Kolkata.",
  keywords: [
    "Printing Services in Kolkata",
    "Vinyl Cutting Kolkata",
    "Eco Solvent Printing Kolkata",
    "Steel Letter Kolkata",
  ],
  openGraph: {
    title: "M.N. Graphics | Printing Services in Kolkata",
    description:
      "Premium printing and signage services in Kolkata.",
    url: "https://mngraphics.in",
    siteName: "M.N. Graphics",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900 antialiased">

        {/* Navbar */}
        <Navbar />

        {/* Page Content */}
        {children}

        {/* Footer */}
        <Footer />

      </body>
    </html>
  );
}