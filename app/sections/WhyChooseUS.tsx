import { ShieldCheck, Clock, Award, Users } from "lucide-react";

const features = [
  {
    icon: <Award size={28} />,
    title: "Premium Quality Materials",
    description:
      "We use high-grade vinyl, eco solvent ink, and durable materials to ensure long-lasting signage solutions.",
  },
  {
    icon: <Clock size={28} />,
    title: "On-Time Delivery",
    description:
      "Fast and reliable turnaround time for all printing and vinyl cutting projects in Kolkata.",
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Trusted & Reliable",
    description:
      "M.N. Graphics is trusted by 100+ local businesses for professional printing and signage services.",
  },
  {
    icon: <Users size={28} />,
    title: "Customized Solutions",
    description:
      "We provide tailored signage, flex printing, and steel letter designs based on your brand requirements.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        
        {/* Section Label */}
        <p className="text-blue-600 font-semibold tracking-widest uppercase mb-4">
          Why Choose Us
        </p>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Businesses Trust M.N. Graphics in Kolkata
        </h2>

        <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
          We combine premium materials, expert craftsmanship, and timely delivery
          to provide high-quality printing and signage solutions across Kolkata.
        </p>

        {/* Feature Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-2xl shadow-sm hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center items-center w-14 h-14 mx-auto rounded-full bg-blue-100 text-blue-600 mb-6">
                {feature.icon}
              </div>

              <h3 className="text-xl font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-4 text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}