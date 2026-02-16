


import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Image */}
          <div className="relative">
            <Image
              src="/images/about-printing.jpg"
              alt="Printing and Vinyl Cutting Services in Kolkata"
              width={600}
              height={500}
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>

          {/* Right Content */}
          <div>
            <p className="text-blue-600 font-semibold tracking-widest uppercase mb-4">
              About M.N. Graphics
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              Trusted Printing & Signage Experts in Kolkata
            </h2>

            <p className="mt-6 text-gray-600 leading-relaxed">
              M.N. Graphics, located at 45, B. Ganguly Street, Kolkata, is a
              leading provider of high-quality printing and signage solutions.
              Under the leadership of Nadim Akhter, we specialize in Vinyl
              Cutting, Eco Solvent Printing, Flex Backlit, Steel Letter and
              customized branding solutions for shops, offices, and commercial
              spaces.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              With a commitment to precision, premium materials, and timely
              delivery, we help businesses enhance their brand visibility with
              attractive and durable signage solutions.
            </p>

            {/* Highlights */}
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="p-5 bg-gray-50 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900">10+ Years</h3>
                <p className="text-sm text-gray-600">Industry Experience</p>
              </div>

              <div className="p-5 bg-gray-50 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900">100+ Clients</h3>
                <p className="text-sm text-gray-600">Local Businesses Served</p>
              </div>

              <div className="p-5 bg-gray-50 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900">Premium</h3>
                <p className="text-sm text-gray-600">Quality Materials</p>
              </div>

              <div className="p-5 bg-gray-50 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold text-gray-900">Fast</h3>
                <p className="text-sm text-gray-600">On-Time Delivery</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}