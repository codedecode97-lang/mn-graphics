


"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Centered Header Section */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4">
              <div className="w-2 h-2 bg-blue-900 rounded-full" />
              <p className="text-blue-900 font-bold tracking-widest text-sm uppercase">
                About M.N. Graphics
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-black text-blue-900 leading-tight font-poppins">
              Premium Vinyl Cutting
              <br />
              & Signage Solutions
            </h2>
          </motion.div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Image */}
          <motion.div variants={imageVariants} className="relative group">
            <div className="absolute -inset-4 bg-blue-900 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition duration-500" />
            <div className="relative bg-white rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-2xl group-hover:shadow-blue-500/30 transition-all duration-500">
              <Image
                src="/about.jpeg"
                alt="Printing and Vinyl Cutting Services in Kolkata"
                width={600}
                height={500}
                className="w-full h-full object-cover rounded-3xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 via-transparent to-transparent rounded-3xl" />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div variants={containerVariants} className="space-y-6">
            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed font-medium">
                <span className="font-bold text-blue-900">M N Graphic Vinyl Cutting</span> is a trusted vinyl cutting and signage service provider in Kolkata. We are located at <span className="font-semibold text-blue-600">45, Bepin Behari Ganguly Street, Lal Bazar, Kolkata – 700012</span>.
              </p>

              <p className="text-gray-700 leading-relaxed">
                We provide high-quality vinyl cutting for shop name boards, glass branding, wall graphics, vehicle stickers, and custom designs. Our work is <span className="font-semibold text-blue-900">clean, precise, and long-lasting</span>.
              </p>

              <p className="text-gray-700 leading-relaxed">
                We focus on <span className="font-semibold text-blue-900">quality, timely delivery, and customer satisfaction</span>. Whether it is a small shop or a big business, we provide professional and affordable branding solutions.
              </p>

              <p className="text-gray-700 leading-relaxed font-medium text-lg">
                Our aim is simple — <span className="font-bold text-blue-900">to help your business look better and stand out</span>.
              </p>
            </motion.div>

          </motion.div>
        </motion.div>

            {/* Key Features Section */}
            <motion.div 
              className="mt-20 -mx-6 lg:-mx-8 px-6 lg:px-8 py-16 bg-gradient-to-r from-blue-900/5 via-blue-900/3 to-blue-900/5 rounded-3xl"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
            >
              <motion.div className="mb-8 text-center" variants={itemVariants}>
                <p className="text-blue-900 font-bold tracking-widest text-sm uppercase">Our Specialties</p>
                <h3 className="text-2xl lg:text-3xl font-black text-blue-900 font-poppins mt-2">Why We Excel</h3>
              </motion.div>
              
              <motion.div className="grid grid-cols-2 lg:grid-cols-4 gap-5" variants={containerVariants}>
                {[
                  { text: "Clean & Precise Vinyl Cutting", icon: "✂️" },
                  { text: "Long-Lasting Materials", icon: "⭐" },
                  { text: "Fast & Reliable Delivery", icon: "⚡" },
                  { text: "Affordable Premium Solutions", icon: "💎" }
                ].map((feature, idx) => (
                  <motion.div 
                    key={idx} 
                    className="group relative overflow-hidden"
                    variants={itemVariants}
                    whileHover={{ y: -10, scale: 1.02 }}
                  >
                    <div className="relative p-6 bg-white rounded-2xl shadow-lg border border-blue-100 group-hover:border-blue-400 group-hover:shadow-2xl transition-all duration-300 overflow-hidden h-full">
                      {/* Premium gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/0 via-transparent to-blue-900/0 group-hover:from-blue-900/8 group-hover:to-blue-900/5 transition-all duration-300 rounded-2xl" />
                      
                      {/* Icon */}
                      <motion.div
                        className="relative text-4xl mb-4 group-hover:scale-125 transition-transform duration-300"
                        whileHover={{ rotate: 15, scale: 1.3 }}
                      >
                        {feature.icon}
                      </motion.div>
                      
                      {/* Text */}
                      <p className="relative text-sm font-bold text-gray-800 group-hover:text-blue-900 transition-colors duration-300 leading-snug">
                        {feature.text}
                      </p>

                      {/* Bottom accent line */}
                      <motion.div
                        className="absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r from-blue-900 via-blue-600 to-transparent group-hover:w-full transition-all duration-500 rounded-full"
                      />
                      
                      {/* Top accent line */}
                      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
        {/* Professional Stats Section */}
        <motion.div
          className="mt-20 -mx-6 lg:-mx-8 px-6 lg:px-8 py-20 bg-gradient-to-r from-blue-900/8 via-blue-900/5 to-blue-900/8 rounded-3xl border border-blue-200/50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div className="mb-12 text-center" variants={itemVariants}>
            <p className="text-blue-900 font-bold tracking-widest text-sm uppercase">Our Track Record</p>
            <h3 className="text-2xl lg:text-3xl font-black text-blue-900 font-poppins mt-2">Trusted by Businesses</h3>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {[
              { number: "10+", label: "Years Experience", icon: "📅" },
              { number: "100+", label: "Happy Clients", icon: "😊" },
              { number: "Premium", label: "Quality Materials", icon: "⭐" },
              { number: "Fast", label: "On-Time Delivery", icon: "⚡" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                whileHover={{ y: -15, scale: 1.05, boxShadow: "0 40px 80px rgba(15, 23, 42, 0.2)" }}
                className="group"
              >
                <div className="relative p-8 bg-gradient-to-br from-white via-blue-50/30 to-white rounded-3xl shadow-xl border border-blue-200 group-hover:border-blue-400 transition-all duration-300 overflow-hidden">
                  {/* Premium gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-900/0 via-transparent to-blue-900/0 group-hover:from-blue-900/10 group-hover:to-blue-900/5 transition-all duration-300 rounded-3xl" />
                  
                  {/* Icon */}
                  <motion.div
                    className="relative text-6xl mb-5 group-hover:scale-125 transition-transform duration-300"
                    whileHover={{ rotate: 12, scale: 1.3 }}
                  >
                    {stat.icon}
                  </motion.div>

                  {/* Number */}
                  <h3 className="relative text-5xl font-black text-blue-900 mb-2 font-poppins group-hover:text-blue-700 transition-colors duration-300">
                    {stat.number}
                  </h3>

                  {/* Label */}
                  <p className="relative text-gray-700 font-bold text-base group-hover:text-blue-900 transition-colors duration-300">{stat.label}</p>

                  {/* Animated bottom border */}
                  <motion.div
                    className="absolute bottom-0 left-0 h-2 w-0 bg-gradient-to-r from-blue-900 via-blue-600 to-transparent group-hover:w-full transition-all duration-500 rounded-full"
                  />

                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}