import Link from "next/link";
import { PhoneCall } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Small Tagline */}
        <p className="text-blue-600 font-semibold tracking-widest uppercase mb-4">
          Premium Printing & Signage Solutions
        </p>

        {/* Main Heading (ONLY ONE H1 FOR SEO) */}
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
          Best Printing & Vinyl Cutting Services in Kolkata
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          M.N. Graphics provides high-quality Vinyl Cutting, Eco Solvent Printing,
          Flex Backlit, Steel Letter and customized signage solutions in Kolkata.
          Fast delivery, premium finish, and affordable pricing.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-5">
          
          <a
            href="tel:9831016701"
            className="flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition duration-300"
          >
            <PhoneCall size={18} />
            Call Now
          </a>

          <Link
            href="/services"
            className="px-8 py-3 rounded-full border border-gray-300 text-gray-800 font-semibold hover:border-blue-600 hover:text-blue-600 transition duration-300"
          >
            Explore Services
          </Link>
        </div>

        {/* Trust Line */}
        <div className="mt-12 text-sm text-gray-500">
          📍 45, B. Ganguly Street, Kolkata – 700012  
          <br />
          Trusted by 100+ Local Businesses
        </div>
      </div>
    </section>
  );
}