import { Metadata } from "next";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Eco Solvent Printing in Kolkata | M.N. Graphics",
  description:
    "High-quality Eco Solvent Printing services in Kolkata for flex boards, vinyl branding, posters and outdoor signage. Contact M.N. Graphics today.",
  keywords: [
    "Eco Solvent Printing in Kolkata",
    "Flex Printing Kolkata",
    "Outdoor Vinyl Printing Kolkata",
  ],
  openGraph: {
    title: "Eco Solvent Printing in Kolkata",
    description:
      "Premium eco solvent printing solutions for shops, offices and commercial branding in Kolkata.",
    url: "https://mngraphics.in/eco-solvent-printing-kolkata",
    siteName: "M.N. Graphics",
    type: "website",
  },
};

export default function EcoSolventPrintingPage() {
  return (
    <main className="pt-40 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HERO */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Professional Eco Solvent Printing in Kolkata
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            M.N. Graphics provides high-resolution eco solvent printing
            services in Kolkata for flex boards, vinyl branding, posters,
            banners and outdoor advertising materials.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="tel:9831016701"
              className="flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
            >
              <PhoneCall size={18} />
              Call Now
            </a>

            <Link
              href="/contact"
              className="px-8 py-3 rounded-full border border-gray-300 text-gray-800 font-semibold hover:border-blue-600 hover:text-blue-600 transition"
            >
              Get Free Quote
            </Link>
          </div>
        </section>

        {/* ABOUT ECO SOLVENT */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What is Eco Solvent Printing?
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Eco solvent printing is a high-quality digital printing technique
            used for outdoor and indoor branding materials. It produces sharp,
            vibrant colors with long-lasting durability and weather resistance.
            Located at 45, B. Ganguly Street, Kolkata, M.N. Graphics offers
            professional eco solvent printing solutions across Kolkata.
          </p>

          <p className="text-gray-600 leading-relaxed">
            This printing method is ideal for flex boards, vinyl graphics,
            hoardings, posters and promotional materials that require strong
            color output and durability.
          </p>
        </section>

        {/* APPLICATIONS */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Applications of Eco Solvent Printing
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Flex Board Printing",
              "Vinyl Branding Graphics",
              "Outdoor Banners & Hoardings",
              "Posters & Promotional Displays",
              "Wall Graphics & Stickers",
              "Retail Store Branding",
            ].map((item, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-xl transition"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </section>

        {/* BENEFITS */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Choose Our Eco Solvent Printing Services?
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>✔ High-Resolution Printing</li>
            <li>✔ Vibrant & Long-Lasting Colors</li>
            <li>✔ Weather Resistant Materials</li>
            <li>✔ Premium Quality Ink & Media</li>
            <li>✔ Affordable Pricing</li>
            <li>✔ Fast Delivery Across Kolkata</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-24 text-center bg-gray-50 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Need Eco Solvent Printing in Kolkata?
          </h2>

          <p className="mt-4 text-gray-600">
            Contact M.N. Graphics today for premium flex printing and outdoor
            branding solutions tailored to your business needs.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a
              href="tel:9831016701"
              className="px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition"
            >
              Call Now
            </a>

            <a
              href="https://wa.me/919831016701"
              target="_blank"
              className="px-8 py-3 rounded-full border border-green-500 text-green-600 font-semibold hover:bg-green-500 hover:text-white transition"
            >
              WhatsApp Now
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}