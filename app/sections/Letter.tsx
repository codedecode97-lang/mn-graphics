"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function LetterSection() {
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

  const letterTypes = [
    {
      name: "Liquid Acrylic Letter",
      img: "https://5.imimg.com/data5/KA/NY/AI/SELLER-47867688/led-acrylic-letter.jpg",
      color: "from-blue-600",
      description: "Stunning liquid acrylic letters with a glossy, premium finish. Perfect for modern storefronts and elegant brand signage with outstanding light reflection.",
    },
    {
      name: "Channel Letter",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIcJQ35tRQJzGl4aES2BtSx1pwtTwGzSaKQ&s",
      color: "from-purple-600",
      description: "Professional channel letters with LEDs for 24/7 visibility. Ideal for business signage with superior durability and customizable lighting options.",
    },
    {
      name: "Diamond Letter",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBewPELgZlB9UNUCX4_qG9ZhDTNDnwNUHMZw&s",
      color: "from-pink-600",
      description: "Luxurious diamond-shaped letters for premium branding. Creates a striking visual impact with sophisticated geometry and modern elegance.",
    },
    {
      name: "Steel Letter",
      img: "https://5.imimg.com/data5/SELLER/Default/2022/10/FR/OS/WZ/3003574/golden-steel-letters-with-led-250x250.jpg",
      color: "from-gray-600",
      description: "Durable steel letters built to last. Weather-resistant and professional, perfect for industrial and corporate signage applications.",
    },
    {
      name: "Digital Letter",
      img: "https://5.imimg.com/data5/PK/ON/MY-5119902/digital-letter-display-board-500x500.jpg",
      color: "from-indigo-600",
      description: "Cutting-edge digital display letters with dynamic lighting. Perfect for interactive storefronts and contemporary brand aesthetics.",
    },
    {
      name: "PVC NEON Letter",
      img: "https://i.pinimg.com/736x/35/2d/db/352ddb13ae2c25833c015205f84b848a.jpg",
      color: "from-orange-600",
      description: "Vibrant neon-style PVC letters with energy-efficient LED. Eye-catching and modern, ideal for bars, cafes, and entertainment venues.",
    },
    {
      name: "Acrylic Box Letter",
      img: "https://cpimg.tistatic.com/08282655/b/4/Acrylic-Box-Type-Letters.jpg",
      color: "from-green-600",
      description: "3D acrylic box letters with depth and dimension. Premium finish suitable for upscale retail, hotels, and corporate establishments.",
    },
    {
      name: "Golden Steel Letter",
      img: "https://ssbspl.com/wp-content/uploads/2024/03/blob-7781f7b-1.png",
      color: "from-yellow-600",
      description: "Luxurious gold-finished steel letters for premium branding. Exudes elegance and sophistication, perfect for luxury brands and high-end businesses.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white relative overflow-hidden">
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
                Letter Solutions
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-4xl lg:text-5xl font-black text-blue-900 leading-tight font-poppins">
              Premium Letter
              <br />
              & Signage Solutions
            </h2>
          </motion.div>

          <motion.p variants={itemVariants} className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
            Showcase your brand with custom letters and signage. From elegant acrylic to durable steel, we craft premium solutions for every style.
          </motion.p>
        </motion.div>

        {/* Letters Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {letterTypes.map((letter, idx) => (
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
                      src={letter.img}
                      alt={letter.name}
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
                    {letter.name}
                  </h3>

                  {/* Divider */}
                  <div className="w-10 h-1 bg-gradient-to-r from-blue-900 to-blue-400 rounded-full mb-4" />

                  {/* Description */}
                  <p className="text-gray-600 flex-grow text-sm leading-relaxed">
                    {letter.description}
                  </p>

                  {/* Bottom accent bar */}
                  <motion.div
                    className={`mt-4 h-1 w-0 bg-gradient-to-r ${letter.color} via-blue-600 to-transparent group-hover:w-full transition-all duration-500 rounded-full`}
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
