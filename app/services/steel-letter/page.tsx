import { Metadata } from "next";
import Link from "next/link";
import { PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Steel Letter Signage in Kolkata | M.N. Graphics",
  description:
    "Get premium stainless steel letter signage in Kolkata. We offer 3D steel letters, gold finish letters, LED backlit letters and custom branding solutions.",
  keywords: [
    "Steel Letter in Kolkata",
    "Stainless Steel Letter Board Kolkata",
    "3D Letter Signage Kolkata",
  ],
  openGraph: {
    title: "Steel Letter Signage in Kolkata",
    description:
      "Premium stainless steel and 3D letter signage solutions in Kolkata.",
    url: "https://mngraphics.in/steel-letter-kolkata",
    siteName: "M.N. Graphics",
    type: "website",
  },
};

export default function SteelLetterPage() {
  return (
    <main className="pt-40 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* HERO */}
        <section className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Premium Steel Letter Signage in Kolkata
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            M.N. Graphics provides high-quality stainless steel and 3D steel
            letter signage solutions in Kolkata. Perfect for shops, offices,
            showrooms, and commercial buildings.
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

        {/* ABOUT STEEL LETTER */}
        <section className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What is Steel Letter Signage?
          </h2>

          <p className="text-gray-600 leading-relaxed mb-6">
            Steel letter signage is a premium 3D branding solution made from
            stainless steel or metal materials. It gives businesses a bold,
            professional, and long-lasting brand presence. Located at 45,
            B. Ganguly Street, Kolkata, M.N. Graphics designs and installs
            customized stainless steel letter boards across Kolkata.
          </p>

          <p className="text-gray-600 leading-relaxed">
            We offer mirror finish, matte finish, gold finish, and LED backlit
            steel letters suitable for shop sign boards, showroom branding,
            and corporate offices.
          </p>
        </section>

        {/* TYPES */}
        <section className="mt-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Types of Steel Letters We Offer
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Stainless Steel Letters",
              "Gold Finish Letters",
              "Silver Finish Letters",
              "LED Backlit Steel Letters",
              "Acrylic + Steel Combination Letters",
              "Mirror Finish Letters",
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
            Why Choose Our Steel Letter Services?
          </h2>

          <ul className="space-y-4 text-gray-600">
            <li>✔ Premium Grade Stainless Steel</li>
            <li>✔ Weather Resistant & Durable</li>
            <li>✔ Custom Size & Design Available</li>
            <li>✔ LED Backlit Options</li>
            <li>✔ Professional Installation</li>
            <li>✔ Affordable Pricing</li>
          </ul>
        </section>

        {/* CTA */}
        <section className="mt-24 text-center bg-gray-50 p-12 rounded-2xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Looking for Steel Letter Signage in Kolkata?
          </h2>

          <p className="mt-4 text-gray-600">
            Contact M.N. Graphics today for premium stainless steel letter
            boards and professional installation services.
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