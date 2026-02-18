"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PrintSection() {
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

  const printServices = [
    { 
      name: "HP Latex Print", 
      img: "https://www.insightwithin.com/wp-content/uploads/2017/07/Latex-560_Standard_Front_with-output-1024x629.png", 
      color: "from-blue-600",
      description: "High-quality water-resistant printing for indoor and outdoor applications. Perfect for banners, signage, and large format prints with vibrant colors."
    },
    { 
      name: "Mutoh Eco Print", 
      img: "https://tiimg.tistatic.com/fp/2/001/525/mutoh-valuejet-1604-ecosolvent-printer-992.jpg", 
      color: "from-green-600",
      description: "Eco-solvent technology for durable outdoor prints. Excellent for vehicle wraps, PVC banners, and weather-resistant signage without harsh chemicals."
    },
    { 
      name: "UV Flatbed Print", 
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqFmysgNo9A_An68f00I1OVd6vvU0oLhmcDw&s", 
      color: "from-purple-600",
      description: "Advanced UV printing for rigid substrates like wood, acrylic, and metal. Instant drying with superior color accuracy and premium finishes."
    },
    { 
      name: "Flex Print", 
      img: "https://dn-24.com/wp-content/uploads/2024/04/26dc7e915abaaf10ed1fefde1ec0b0d5.jpg", 
      color: "from-orange-600",
      description: "Flexible vinyl printing for garments, bags, and curved surfaces. Soft, breathable, and perfect for custom apparel and textile applications."
    },
    { 
      name: "Digital Print", 
      img: "https://cdn2.bigcommerce.com/server500/cd6a7/product_images/uploaded_images/digital-printing.jpg", 
      color: "from-indigo-600",
      description: "Fast and cost-effective printing solution for short runs and color-rich designs. Ideal for marketing materials, brochures, and promotional items."
    },
    { 
      name: "Canvas Print", 
      img: "https://supraprint.pl/wp-content/uploads/2023/11/obrazy-canvas-na-plotnie-malarskim-934x700.webp", 
      color: "from-red-600",
      description: "Premium canvas printing for artistic displays and elegant wall decor. Gallery-quality finish perfect for corporate offices and modern spaces."
    },
    { 
      name: "Retro Print", 
      img: "https://5.imimg.com/data5/SELLER/Default/2024/4/410886102/DX/AX/AI/79727137/retro-print-cutting-plotter-500x500.jpg", 
      color: "from-pink-600",
      description: "Vintage and retro-style printing with distressed finishes. Perfect for trendy merchandise, apparel, and nostalgic brand aesthetics."
    },
    { 
      name: "Transfer Print", 
      img: "https://framerusercontent.com/images/HQ5VjoIZj9tte1nxmlde0Nqksqo.jpg?width=1300&height=730", 
      color: "from-cyan-600",
      description: "Heat-transfer technology for direct-to-garment printing with vibrant, durable results. Ideal for custom t-shirts, hoodies, and personalized items."
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
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
            <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
              <div className="w-2 h-2 bg-blue-900 rounded-full" />
              <p className="text-blue-900 font-bold tracking-widest text-sm uppercase">
                Our Services
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-black text-blue-900 leading-tight font-poppins">
              Advanced Printing
              <br />
              Technologies
            </h2>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            We use the latest printing technologies to deliver premium quality output for all your branding needs.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {printServices.map((service, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -12 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-blue-100 hover:border-blue-400 hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                  <motion.div whileHover={{ scale: 1.08 }} className="w-full h-full">
                    <Image
                      src={service.img}
                      alt={service.name}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Name */}
                  <h3 className="text-xl font-black text-blue-900 font-poppins mb-2">
                    {service.name}
                  </h3>

                  {/* Divider */}
                  <div className="w-10 h-1 bg-gradient-to-r from-blue-900 to-blue-400 rounded-full mb-4" />

                  {/* Description */}
                  <p className="text-gray-600 flex-grow text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bottom accent bar */}
                  <motion.div
                    className={`mt-4 h-1 w-0 bg-gradient-to-r ${service.color} via-blue-600 to-transparent group-hover:w-full transition-all duration-500 rounded-full`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
