"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";

export default function OurClients() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const clients = [
    {
      id: 1,
      name: "HP",
      category: "Technology & Printing",
      description: "Premium printing solutions and signage for HP's brand excellence",
      logo: "HP",
      gradient: "from-blue-600 to-cyan-500",
      icon: "🖨️",
      testimonial: "Professional quality and timely delivery",
    },
    {
      id: 2,
      name: "SBI",
      category: "Banking & Finance",
      description: "Corporate branding and signage for banking excellence",
      logo: "SBI",
      gradient: "from-green-600 to-emerald-500",
      icon: "🏦",
      testimonial: "Exceptional attention to detail and service",
    },
    {
      id: 3,
      name: "Vikram",
      category: "Enterprise Solutions",
      description: "Comprehensive branding and printing solutions",
      logo: "VIKRAM",
      gradient: "from-purple-600 to-pink-500",
      icon: "⚙️",
      testimonial: "Reliable partner for brand visibility",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <Star size={16} className="text-blue-900 fill-blue-900" />
              <p className="text-blue-900 font-bold tracking-widest text-sm uppercase">
                Trusted By Brands
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              Our Valued Clients
            </h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              We partner with industry leaders to deliver exceptional printing and signage solutions
              that elevate their brand presence
            </p>
          </motion.div>
        </motion.div>

        {/* Clients Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {clients.map((client) => (
            <motion.div
              key={client.id}
              variants={itemVariants}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100">
                {/* Gradient Top Border */}
                <div
                  className={`h-1 w-full bg-gradient-to-r ${client.gradient}`}
                />

                {/* Content */}
                <div className="p-8 h-full flex flex-col">
                  {/* Logo & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${client.gradient} flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        {client.icon}
                      </div>
                      <div className="flex flex-col">
                        <h3 className="text-2xl font-black text-gray-900">
                          {client.logo}
                        </h3>
                        <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                          {client.name}
                        </p>
                      </div>
                    </div>
                    <CheckCircle2
                      size={24}
                      className={`text-transparent bg-gradient-to-r ${client.gradient} bg-clip-text`}
                    />
                  </div>

                  {/* Category Badge */}
                  <div className="mb-4">
                    <span
                      className={`inline-block text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-gradient-to-r ${client.gradient} bg-opacity-10 text-gray-700`}
                    >
                      {client.category}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-auto leading-relaxed">
                    {client.description}
                  </p>

                  {/* Divider */}
                  <div className="my-6 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                  {/* Testimonial */}
                  <div className="flex items-start gap-3">
                    <div className="flex gap-0.5 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`fill-yellow-400 text-yellow-400`}
                        />
                      ))}
                    </div>
                    <p className="text-sm text-gray-700 italic font-medium">
                      "{client.testimonial}"
                    </p>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`mt-6 w-full py-2 px-4 font-semibold text-sm rounded-lg bg-gradient-to-r ${client.gradient} text-white opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300`}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Metrics Section */}
        <motion.div
          className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-4xl font-black mb-2">100+</p>
              <p className="text-blue-100">Successful Projects</p>
            </div>
            <div>
              <p className="text-4xl font-black mb-2">15+</p>
              <p className="text-blue-100">Years Experience</p>
            </div>
            <div>
              <p className="text-4xl font-black mb-2">99%</p>
              <p className="text-blue-100">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <p className="text-gray-600 mb-6 text-lg">
            Join our network of trusted enterprise clients
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300"
          >
            Start Your Project
            <span className="text-xl">→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
