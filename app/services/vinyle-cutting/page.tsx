import { Metadata } from "next";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Vinyl Cutting Services in Kolkata | M.N. Graphics",
  description:
    "Professional Vinyl Cutting services in Kolkata. We provide custom vinyl stickers, shop boards, glass branding and signage solutions.",
  keywords: [
    "Vinyl Cutting in Kolkata",
    "Vinyl Sticker Printing Kolkata",
    "Shop Board Vinyl Cutting Kolkata",
  ],
  openGraph: {
    title: "Vinyl Cutting Services in Kolkata",
    description:
      "High-quality vinyl cutting and sticker solutions for shops and offices in Kolkata.",
    url: "https://mngraphics.in/vinyl-cutting-kolkata",
    siteName: "M.N. Graphics",
    type: "website",
  },
};

export default function VinylCuttingPage() {
  return (
    <main className="pt-40 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HERO */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Professional Vinyl Cutting Services in Kolkata
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            M.N. Graphics offers premium vinyl cutting solutions in Kolkata
            for shop boards, glass branding, office signage, and promotional
            displays with high precision and durable materials.
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

        {/* ABOUT VINYL CUTTING */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What is Vinyl Cutting?
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Vinyl cutting is a precise process used to create custom text,
            logos, and designs on adhesive vinyl sheets. It is widely used for
            shop boards, glass branding, vehicle graphics, and promotional
            signage. Located at 45, B. Ganguly Street, Kolkata, M.N. Graphics
            provides expert vinyl cutting services across Kolkata.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We use advanced cutting machines and premium vinyl materials to
            ensure sharp detailing, long-lasting finish, and weather resistance.
          </p>
        </section>

        {/* SERVICES INCLUDED */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Our Vinyl Cutting Solutions
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Shop Board Vinyl Cutting",
              "Glass Branding Stickers",
              "Wall Vinyl Graphics",
              "Vehicle Vinyl Stickers",
              "Promotional Vinyl Designs",
              "Custom Logo Cutting",
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
            Why Choose Our Vinyl Cutting Services?
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>✔ High Precision Cutting</li>
            <li>✔ Premium Quality Vinyl</li>
            <li>✔ Weather Resistant Material</li>
            <li>✔ Custom Design Support</li>
            <li>✔ Affordable Pricing</li>
            <li>✔ Fast Delivery Across Kolkata</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-24 text-center bg-gray-50 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Need Vinyl Cutting in Kolkata?
          </h2>

          <p className="mt-4 text-gray-600">
            Contact M.N. Graphics today for professional vinyl cutting,
            custom stickers, and branding solutions tailored to your business.
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