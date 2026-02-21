"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function OurWork() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const workItems = [
    {
      id: 1,
      title: "Vinyl Cutting Signage",
      category: "Vinyl Cutting",
      description: "Custom vinyl cut letters for premium brands",
      image: "https://3.imimg.com/data3/RT/GB/MY-3413666/vinyl-cutting-signages-500x500.jpg",
      gradient: "from-blue-600 to-blue-400",
    },
    {
      id: 2,
      title: "Eco Solvent Printing",
      category: "Flex Printing",
      description: "High-quality eco-friendly banner and poster printing",
      image: "https://3.imimg.com/data3/OG/JI/MY-3735414/eco-solvent-printers-hp-latex.jpg",
      gradient: "from-green-600 to-emerald-400",
    },
    {
      id: 3,
      title: "Steel Letter Installation",
      category: "Steel Letter",
      description: "Durable stainless steel letterpress solutions",
      image: "https://i.ytimg.com/vi/nKTB-hD3ZHU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBwfgA7GTH65ZTvuqE_JWWl0iDtJw",
      gradient: "from-gray-700 to-gray-500",
    },
    {
      id: 4,
      title: "3D LED Signage",
      category: "LED Signage",
      description: "Modern 3D LED displays and illuminated signs",
      image: "https://5.imimg.com/data5/QQ/TM/MY-58022541/3d-led-letter-board.jpg",
      gradient: "from-amber-600 to-yellow-400",
    },
    {
      id: 5,
      title: "Vehicle Wrapping",
      category: "Vehicle Branding",
      description: "Eye-catching vehicle wraps and graphics",
      image: "/work-5.jpg",
      gradient: "from-pink-600 to-rose-400",
    },
    {
      id: 6,
      title: "Office Branding",
      category: "Corporate Signage",
      description: "Comprehensive office interior branding solutions",
      image: "/work-6.jpg",
      gradient: "from-purple-600 to-indigo-400",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl -translate-x-1/2" />
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
              <div className="w-2 h-2 bg-blue-900 rounded-full" />
              <p className="text-blue-900 font-bold tracking-widest text-sm uppercase">
                Portfolio
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
              Our Best Works
            </h2>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of premium printing and signage solutions delivered
              to satisfied clients across Kolkata and beyond
            </p>
          </motion.div>
        </motion.div>

        {/* Work Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {workItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="group relative cursor-pointer"
            >
              {/* Card Container */}
              <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <div className="relative w-full h-full">
                  {/* Placeholder background with gradient */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-20`}
                  />
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Dark overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                  {/* Category Badge */}
                  <div className="mb-3 inline-block">
                    <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                      {item.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-2 group-hover:translate-y-0 translate-y-2 transition-transform duration-300">
                    {item.title}
                  </h3>

                  {/* Description - Show on hover */}
                  <p className="text-sm text-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 line-clamp-2">
                    {item.description}
                  </p>

                  {/* Arrow Icon */}
                  <div className="mt-4 inline-flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300">
                    <ExternalLink size={18} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-gray-600 mb-6">
            Want to see more of our work or discuss your project?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 hover:gap-3 transition-all duration-300"
          >
            Get Your Project Started
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
