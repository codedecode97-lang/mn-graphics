"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const cuttingServices = [
  {
    image: "https://amazingsign.co.in/wp-content/uploads/2025/09/hq720-6.jpg",
    title: "Router Jali Cutting",
    description:
      "Precision router cutting for decorative jali patterns using MDF, plywood, and other materials. Perfect for architectural and interior design elements with intricate designs.",
  },
  {
    image: "https://cpimg.tistatic.com/11098810/b/6/30mm-Ply-Cutting-Services..jpg",
    title: "Ply Cutting",
    description:
      "Expert plywood cutting services for signage, display boards, and interior decoration. We handle various thicknesses and deliver perfectly cut pieces with smooth finishing.",
  },
  {
    image: "https://cpimg.tistatic.com/02485569/b/5/Corian-Cutting-Service.jpg",
    title: "Corian Cutting",
    description:
      "Waterproof Corian sheet cutting for kitchen countertops, bathroom panels, and wall cladding. Precision cuts and professional installation support available.",
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQinJuplxaSl5vDo73Ea4DCs-gFpY2DNHNFQ&s",
    title: "ACP Sheet Cutting",
    description:
      "High-precision ACP (Aluminum Composite Panel) cutting for building facades, signage, and cladding. Weather-resistant and durable for outdoor applications.",
  },
  {
    image: "https://framerusercontent.com/images/ffJ1ohu44pMwZQMVZ7esQJsaUY.jpg?width=1300&height=730",
    title: "Vinyl Cutting",
    description:
      "Professional vinyl sheet cutting for stickers, vehicle wraps, wall decals, and window graphics. Available in various colors with guaranteed precision and durability.",
  },
  {
    image: "https://www.weetect.com/wp-content/uploads/2018/08/Figure-1-Laser-cutting-acrylic-sheet-1024x576.jpg",
    title: "Acrylic Laser Cutting",
    description:
      "State-of-the-art laser cutting technology for acrylic sheets. Ideal for awards, signage, display items, and decorative pieces with clean, precise edges.",
  },
  {
    image: "https://static.vecteezy.com/system/resources/thumbnails/008/028/162/small/damask-vintage-baroque-scroll-ornament-swirl-victorian-monogram-heraldic-shield-swirl-retro-floral-leaf-pattern-border-foliage-antique-acanthus-calligraphy-engraved-tattoo-tile-decor-elemen-vector.jpg",
    title: "Engraving",
    description:
      "Premium engraving services on acrylic, wood, metal, and leather. Perfect for customized awards, plaques, commemorative items, and corporate gifts.",
  },
];

export default function CuttingSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header Section */}
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
                Cutting Services
              </p>
            </div>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 mt-4"
            variants={itemVariants}
          >
            Professional Cutting & Engraving Services
          </motion.h2>

          <motion.p
            className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            From precision router cutting to laser engraving, M.N. Graphics offers
            comprehensive cutting services using advanced technology and expert
            craftsmanship for all your business and design needs.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {cuttingServices.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 border border-gray-100 hover:border-blue-200 overflow-hidden hover:scale-105"
            >
              {/* Image Container */}
              <div className="relative w-full h-48 overflow-hidden bg-gray-200">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-110 transition duration-300"
                />
              </div>

              {/* Content Container */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center text-sm leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="text-center">
                  <a
                    href="tel:9831016701"
                    className="inline-block text-sm font-semibold text-blue-600 hover:text-blue-700 transition"
                  >
                    Get Quote →
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

    
      </div>
    </section>
  );
}
