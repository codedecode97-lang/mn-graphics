"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ArrowLeft, Check, Phone, Mail } from "lucide-react";
import Link from "next/link";

export default function ServiceDetailPage() {
  const params = useParams();
  const serviceName = params.name as string;

  // Service data - same as in PrintSection
  const printServices = [
    {
      name: "HP Latex Print",
      img: "https://www.insightwithin.com/wp-content/uploads/2017/07/Latex-560_Standard_Front_with-output-1024x629.png",
      color: "from-blue-600",
      description:
        "High-quality water-resistant printing for indoor and outdoor applications. Perfect for banners, signage, and large format prints with vibrant colors.",
      gallery: [
        {
          img: "https://5.imimg.com/data5/SELLER/Default/2024/9/454721238/RP/JM/JB/45631869/hp-latex-vinyl-with-lamination-250x250.jpg",
          title: "HP Latex Print",
        },
        {
          img: "https://5.imimg.com/data5/JI/NF/MY-11912779/eco-solvent-printing-250x250.jpg",
          title: "Eco-Solvent Printing",
        },
        {
          img: "https://5.imimg.com/data5/SELLER/Default/2024/4/412108170/QF/PY/OX/2307481/digital-banner-printing-service-250x250.jpg",
          title: "Digital Banner Printing",
        },
      ],
    },
    {
      name: "Mutoh Eco Print",
      img: "https://tiimg.tistatic.com/fp/2/001/525/mutoh-valuejet-1604-ecosolvent-printer-992.jpg",
      color: "from-green-600",
      description:
        "Eco-solvent technology for durable outdoor prints. Excellent for vehicle wraps, PVC banners, and weather-resistant signage without harsh chemicals.",
      gallery: [
        {
          img: "https://img500.exportersindia.com/product_images/bc-500/dir_118/3532627/mutoh-valuejet-2638-104-inch-large-eco-solvent-1878362.jpeg",
          title: "Mutoh ValueJet Printer",
        },
        {
          img: "https://i.ytimg.com/vi/KGcHGJFGRRA/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGF4gXiheMA8=&rs=AOn4CLAfBRHD4OflwhXIFSjIGVMBa_6_xA",
          title: "Eco-Solvent Printing",
        },
        {
          img: "https://i.ebayimg.com/images/g/TcIAAOSwD1BftDMI/s-l1200.jpg",
          title: "Premium Print Output",
        },
      ],
    },
    {
      name: "UV Flatbed Print",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqFmysgNo9A_An68f00I1OVd6vvU0oLhmcDw&s",
      color: "from-purple-600",
      description:
        "Advanced UV printing for rigid substrates like wood, acrylic, and metal. Instant drying with superior color accuracy and premium finishes.",
      gallery: [
        {
          img: "https://www.simco-ion.es/fileadmin/Simco/Applications/products/Flatbed_printer_rolltoroll.jpg",
          title: "UV Flatbed Printer",
        },
        {
          img: "https://5.imimg.com/data5/ANDROID/Default/2024/6/427796400/LA/BP/MS/2033066/product-jpeg-500x500.jpg",
          title: "UV Flatbed Technology",
        },
        {
          img: "https://lh3.googleusercontent.com/proxy/ROk_NkT8z66YXAh2zE3vcvh28-q-G3g4kWHuMpT8mZOoXAsMh5KiKDo_bKDnUn_XDx_kGlZekmzIT3H_6XDwsa6yx0Ry_v15AE7pGettPN7jqYDYY578k-WqD_U3",
          title: "Premium Output",
        },
      ],
    },
    {
      name: "Flex Print",
      img: "https://dn-24.com/wp-content/uploads/2024/04/26dc7e915abaaf10ed1fefde1ec0b0d5.jpg",
      color: "from-orange-600",
      description:
        "Flexible vinyl printing for garments, bags, and curved surfaces. Soft, breathable, and perfect for custom apparel and textile applications.",
      gallery: [
        {
          img: "https://static.vecteezy.com/system/resources/thumbnails/054/907/774/small/a-large-format-printing-machine-producing-vibrant-highquality-prints-in-a-commercial-printing-shop-using-modern-technology-photo.jpg",
          title: "Large Format Printing",
        },
        {
          img: "https://images.jdmagicbox.com/quickquotes/images_main/flex-printing-2220377487-1cvmr8ap.jpg",
          title: "Flex Printing Technology",
        },
        {
          img: "https://sc04.alicdn.com/kf/HTB1bev9a7Y2gK0jSZFgq6A5OFXa1.jpg",
          title: "Premium Quality Output",
        },
      ],
    },
    {
      name: "Digital Print",
      img: "https://cdn2.bigcommerce.com/server500/cd6a7/product_images/uploaded_images/digital-printing.jpg",
      color: "from-indigo-600",
      description:
        "Fast and cost-effective printing solution for short runs and color-rich designs. Ideal for marketing materials, brochures, and promotional items.",
      gallery: [
        {
          img: "https://anuprerna-bloomscorp.s3.ap-south-1.amazonaws.com/MGAUKXTXQRVQIAQVVUIEYBWQ6W3U09799.jpg",
          title: "Digital Printing Machine",
        },
        {
          img: "https://content.jdmagicbox.com/comp/ernakulam/y6/0484px484.x484.220929134417.p4y6/catalogue/insight-advertising-and-marketing-elamakkara-ernakulam-flex-printing-services-edacmxob9p.jpg",
          title: "Flex Printing Services",
        },
        {
          img: "https://imprintbd.com/wp-content/uploads/2021/08/Digital-Print-Image.jpg",
          title: "Digital Print Output",
        },
      ],
    },
    {
      name: "Canvas Print",
      img: "https://supraprint.pl/wp-content/uploads/2023/11/obrazy-canvas-na-plotnie-malarskim-934x700.webp",
      color: "from-red-600",
      description:
        "Premium canvas printing for artistic displays and elegant wall decor. Gallery-quality finish perfect for corporate offices and modern spaces.",
      gallery: [
        {
          img: "https://5.imimg.com/data5/GLADMIN/Default/2023/1/NP/LH/AX/7854362/wallpaper-and-canvas-printing-machine.jpg",
          title: "Canvas Printing Machine",
        },
        {
          img: "https://cpimg.tistatic.com/10961450/b/4/Ricoh-Gen5-Solvent-Printing-Machine..jpg",
          title: "Premium Printing Technology",
        },
        {
          img: "https://5.imimg.com/data5/SELLER/Default/2022/6/QK/BG/MM/119706847/flex-printed-banner-250x250.jpg",
          title: "Canvas Print Output",
        },
      ],
    },
    {
      name: "Retro Print",
      img: "https://5.imimg.com/data5/SELLER/Default/2024/4/410886102/DX/AX/AI/79727137/retro-print-cutting-plotter-500x500.jpg",
      color: "from-pink-600",
      description:
        "Vintage and retro-style printing with distressed finishes. Perfect for trendy merchandise, apparel, and nostalgic brand aesthetics.",
      gallery: [
        {
          img: "https://5.imimg.com/data5/SELLER/Default/2021/6/LU/IU/HT/130448126/retro-reflective-vinyl.jpg",
          title: "Retro Reflective Vinyl",
        },
        {
          img: "https://5.imimg.com/data5/NSDMERP/Default/2022/7/ZI/RF/EN/120988310/rato-print-service-1657200686197-500x500.jpg",
          title: "Retro Print Service",
        },
        {
          img: "https://5.imimg.com/data5/SELLER/Default/2025/7/529493457/OX/MG/GL/98937243/retro-vinyl-printing.jpg",
          title: "Retro Vinyl Printing",
        },
      ],
    },
    {
      name: "Transfer Print",
      img: "https://framerusercontent.com/images/HQ5VjoIZj9tte1nxmlde0Nqksqo.jpg?width=1300&height=730",
      color: "from-cyan-600",
      description:
        "Heat-transfer technology for direct-to-garment printing with vibrant, durable results. Ideal for custom t-shirts, hoodies, and personalized items.",
      gallery: [
        {
          img: "https://5.imimg.com/data5/SELLER/Default/2025/7/526842505/XK/UO/CC/228152791/digital-transfer-film-printing-service-500x500.jpg",
          title: "Digital Transfer Film",
        },
        {
          img: "https://5.imimg.com/data5/SELLER/Default/2025/7/526842509/SE/UO/TM/228152791/digital-transfer-film-printing-service.jpg",
          title: "Transfer Printing Service",
        },
        {
          img: "https://5.imimg.com/data5/SELLER/Default/2024/11/468873601/VG/PQ/TM/190601809/dtf-heat-transfer-printing-services-250x250.png",
          title: "DTF Heat Transfer Printing",
        },
      ],
    },
  ];

  // Find the service based on URL parameter
  const service = printServices.find(
    (s) => s.name.toLowerCase().replace(/\s+/g, "-") === serviceName
  );

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft size={18} />
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const features = [
    "Premium Quality Output",
    "Fast Turnaround Time",
    "Eco-Friendly Options",
    "Expert Support Team",
    "Competitive Pricing",
    "Custom Solutions",
  ];

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
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden py-12">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-900/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/#services"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors "
          >
            <ArrowLeft size={20} />
            Back to Services
          </Link>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Image Section */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <div className={`relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br ${service.color} via-blue-600 to-transparent`}>
              <Image
                src={service.img}
                alt={service.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col justify-center"
          >
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-4 w-fit">
                <div className="w-2 h-2 bg-blue-900 rounded-full" />
                <p className="text-blue-900 font-bold tracking-widest text-sm uppercase">
                  Service Details
                </p>
              </div>
              <h1 className="text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-2">
                {service.name}
              </h1>
              <div
                className={`h-2 w-32 bg-gradient-to-r ${service.color} via-blue-600 rounded-full`}
              />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-lg text-gray-700 leading-relaxed"
            >
              {service.description}
            </motion.p>

            {/* Key Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-10"
            >
              <h3 className="text-2xl font-black text-gray-900 mb-6">Key Features</h3>
              <div className="space-y-3">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + idx * 0.05 }}
                    className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                  >
                    <Check size={24} className="text-blue-600 flex-shrink-0" />
                    <span className="font-semibold text-gray-700">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/contact"
                className="flex-1 py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-xl hover:shadow-xl transition-all text-center hover:to-blue-800"
              >
                Get a Quote
              </a>
              <a
                href="tel:+919876543210"
                className="flex-1 py-4 px-6 border-2 border-blue-600 text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-all flex items-center justify-center gap-2"
              >
                <Phone size={20} />
                Call Us
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Gallery Section */}
        {service.gallery && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-blue-100 mb-12"
          >
            <h2 className="text-3xl font-black text-gray-900 mb-8">Our Work Showcase</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.gallery.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden bg-gradient-to-br from-blue-100 to-blue-50">
                    <Image
                      src={item.img}
                      alt={item.title}
                      width={250}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <p className="text-white font-bold text-center">{item.title}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Additional Information Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-blue-100 mb-12"
        >
          <h2 className="text-3xl font-black text-gray-900 mb-8">Why Choose This Service?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Industry Leading</h3>
              <p className="text-gray-700 leading-relaxed">
                We use the latest technology and equipment to ensure the highest quality output
                for all your printing and signage needs.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Quick Turnaround</h3>
              <p className="text-gray-700 leading-relaxed">
                Fast delivery without compromising on quality. We understand the importance of
                timely completion of your projects.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Professional Team</h3>
              <p className="text-gray-700 leading-relaxed">
                Our experienced team is dedicated to bringing your vision to life with precision
                and expertise.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-600 mb-3">Competitive Pricing</h3>
              <p className="text-gray-700 leading-relaxed">
                Get premium quality services at competitive rates. We believe in providing value
                for your investment.
              </p>
            </div>
          </div>
        </motion.div>

   
      </div>
    </section>
  );
}
