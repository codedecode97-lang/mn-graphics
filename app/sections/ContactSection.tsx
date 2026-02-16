



"use client";

import { Phone, MapPin, Mail } from "lucide-react";

export default function ContactSectionPages() {
  return (
    <section className="py-24 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold tracking-widest uppercase mb-4">
            Contact Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get a Free Quote for Printing Services in Kolkata
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Looking for vinyl cutting, flex printing, or steel letter signage?
            Contact M.N. Graphics today for fast and reliable service.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="bg-white p-10 rounded-2xl shadow-lg">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="Enter your phone number"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Service Required
                </label>
                <select className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none">
                  <option>Vinyl Cutting</option>
                  <option>Eco Solvent Printing</option>
                  <option>Steel Letter</option>
                  <option>Flex Backlit</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  rows={4}
                  placeholder="Write your requirements..."
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 rounded-full bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 transition duration-300"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-10">
            
            <div className="flex items-start gap-5">
              <div className="p-4 bg-blue-100 text-blue-600 rounded-full">
                <Phone size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Call Us
                </h3>
                <p className="text-gray-600">9831016701</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="p-4 bg-blue-100 text-blue-600 rounded-full">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Visit Us
                </h3>
                <p className="text-gray-600">
                  45, B. Ganguly Street, Kolkata - 700012  
                  <br />
                  Opp. Bow Bazar, 2nd Floor
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="p-4 bg-blue-100 text-blue-600 rounded-full">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Email
                </h3>
                <p className="text-gray-600">info@mngraphics.in</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a
                href="tel:9831016701"
                className="px-6 py-3 rounded-full bg-blue-600 text-white font-semibold text-center shadow-md hover:bg-blue-700 transition duration-300"
              >
                Call Now
              </a>

              <a
                href="https://wa.me/919831016701"
                target="_blank"
                className="px-6 py-3 rounded-full border border-green-500 text-green-600 font-semibold text-center hover:bg-green-500 hover:text-white transition duration-300"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-20 rounded-2xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps?q=45,B.Ganguly Street,Kolkata-700012&output=embed"
            width="100%"
            height="400"
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </div>
    </section>
  );
}