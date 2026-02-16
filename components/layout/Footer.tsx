import Link from "next/link";
import { Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              M.N. <span className="text-blue-600">Graphics</span>
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Premium Printing & Signage Services in Kolkata. We specialize in
              Vinyl Cutting, Flex Printing, Eco Solvent Printing, Steel Letter
              and customized branding solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link href="/" className="hover:text-blue-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-600 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-blue-600 transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-600 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links (SEO Boost) */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">
              Our Services
            </h4>
            <ul className="space-y-3 text-gray-600">
              <li>
                <Link
                  href="/vinyl-cutting-kolkata"
                  className="hover:text-blue-600 transition"
                >
                  Vinyl Cutting in Kolkata
                </Link>
              </li>
              <li>
                <Link
                  href="/eco-solvent-printing-kolkata"
                  className="hover:text-blue-600 transition"
                >
                  Eco Solvent Printing
                </Link>
              </li>
              <li>
                <Link
                  href="/steel-letter-kolkata"
                  className="hover:text-blue-600 transition"
                >
                  Steel Letter Signage
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-blue-600 transition"
                >
                  All Printing Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-6">
              Contact Info
            </h4>

            <div className="space-y-5 text-gray-600">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-blue-600 mt-1" />
                <span>9831016701</span>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-blue-600 mt-1" />
                <span>
                  45, B. Ganguly Street, Kolkata - 700012
                  <br />
                  Opp. Bow Bazar, 2nd Floor
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={18} className="text-blue-600 mt-1" />
                <span>info@mngraphics.in</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mt-16 pt-8 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} M.N. Graphics. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}