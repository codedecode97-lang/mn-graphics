"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, cubicBezier } from "framer-motion";
import { ArrowRight, Zap, Clock, Shield, Star } from "lucide-react";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: cubicBezier(0.22, 1, 0.36, 1), delay } },
});

const printServices = [
  {
    name: "HP Latex Print",
    slug: "hp-latex-print",
    img: "https://www.insightwithin.com/wp-content/uploads/2017/07/Latex-560_Standard_Front_with-output-1024x629.png",
    description: "High-quality water-resistant printing for banners, signage with vibrant colors.",
  },
  {
    name: "Mutoh Eco Print",
    slug: "mutoh-eco-print",
    img: "https://tiimg.tistatic.com/fp/2/001/525/mutoh-valuejet-1604-ecosolvent-printer-992.jpg",
    description: "Eco-solvent technology for durable outdoor prints and vehicle wraps.",
  },
  {
    name: "UV Flatbed Print",
    slug: "uv-flatbed-print",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqFmysgNo9A_An68f00I1OVd6vvU0oLhmcDw&s",
    description: "Advanced UV printing for rigid substrates with premium finishes.",
  },
  {
    name: "Flex Print",
    slug: "flex-print",
    img: "https://dn-24.com/wp-content/uploads/2024/04/26dc7e915abaaf10ed1fefde1ec0b0d5.jpg",
    description: "Flexible vinyl printing for garments, bags, and curved surfaces.",
  },
  {
    name: "Digital Print",
    slug: "digital-print",
    img: "https://cdn2.bigcommerce.com/server500/cd6a7/product_images/uploaded_images/digital-printing.jpg",
    description: "Fast and cost-effective printing for short runs and marketing materials.",
  },
  {
    name: "Canvas Print",
    slug: "canvas-print",
    img: "https://supraprint.pl/wp-content/uploads/2023/11/obrazy-canvas-na-plotnie-malarskim-934x700.webp",
    description: "Premium canvas printing for artistic displays and elegant wall decor.",
  },
  {
    name: "Retro Print",
    slug: "retro-print",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/4/410886102/DX/AX/AI/79727137/retro-print-cutting-plotter-500x500.jpg",
    description: "Vintage and retro-style printing with distressed finishes.",
  },
  {
    name: "Transfer Print",
    slug: "transfer-print",
    img: "https://framerusercontent.com/images/HQ5VjoIZj9tte1nxmlde0Nqksqo.jpg?width=1300&height=730",
    description: "Heat-transfer technology for direct-to-garment printing.",
  },
];

const whyChoose = [
  { icon: Zap, title: "Industry-Leading Equipment", desc: "Latest technology for unmatched quality." },
  { icon: Clock, title: "Fast Turnaround", desc: "Always respect your deadlines." },
  { icon: Shield, title: "Durable Output", desc: "Weather-proof materials rated for outdoor use." },
  { icon: Star, title: "500+ Projects", desc: "Proven track record since 2013." },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1a1f3a] to-[#0f172a] pt-20">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&display=swap');

        .service-card {
          border-radius: 1.25rem;
          overflow: hidden;
          background: #fff;
          border: 1px solid #e2e8f0;
          box-shadow: 0 4px 18px rgba(0,0,0,0.07);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1), box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .service-card:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 16px 48px rgba(250,204,21,0.15);
          border-color: #facc15;
        }

        .service-badge {
          position: absolute;
          top: 12px;
          right: 12px;
          background: rgba(255,255,255,0.92);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,255,255,0.7);
          border-radius: 0.75rem;
          padding: 6px 12px;
          opacity: 0;
          transform: translateY(-8px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        .service-card:hover .service-badge {
          opacity: 1;
          transform: translateY(0);
        }

        .service-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.22) 100%);
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .service-card:hover .service-overlay {
          opacity: 1;
        }

        .icon-box {
          width: 48px;
          height: 48px;
          border-radius: 0.875rem;
          background: rgba(250,204,21,0.12);
          border: 1px solid rgba(250,204,21,0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span
              style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontWeight: 700,
                fontSize: "0.68rem",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "#facc15",
              }}
            >
              ━ OUR SERVICES ━
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontWeight: 900,
              fontSize: "3rem",
              color: "#0f172a",
              lineHeight: "1.1",
            }}
            className="mb-4"
          >
            Premium Printing Solutions
          </h1>
          <p
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: "1.1rem",
              color: "#475569",
              lineHeight: "1.8",
            }}
            className="max-w-2xl mx-auto"
          >
            Explore our comprehensive range of printing technologies and services. From eco-solvent to UV flatbed, we have the perfect solution for your needs.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {printServices.map((service, idx) => (
            <motion.div
              key={idx}
              variants={fadeUp(idx * 0.08)}
              initial="hidden"
              animate="visible"
              className="service-card group"
            >
              <Link href={`/services/${service.slug}`}>
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.img}
                    alt={service.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                    sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 25vw"
                  />
                  <div className="service-overlay" />
                  <div className="service-badge">
                    <span
                      style={{
                        fontFamily: "'Rajdhani',sans-serif",
                        fontWeight: 700,
                        fontSize: "0.7rem",
                        color: "#facc15",
                        letterSpacing: "0.12em",
                        textTransform: "uppercase",
                      }}
                    >
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
              <div className="p-5">
                <h3
                  style={{
                    fontFamily: "'Poppins',sans-serif",
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    color: "#0f172a",
                    marginBottom: "0.5rem",
                  }}
                >
                  {service.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'Poppins',sans-serif",
                    fontSize: "0.85rem",
                    color: "#64748b",
                    lineHeight: "1.6",
                    marginBottom: "1rem",
                  }}
                >
                  {service.description}
                </p>
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-[0.85rem] font-600 transition-all group/link"
                  style={{ color: "#facc15" }}
                >
                  Learn More
                  <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Why Choose Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <span
              style={{
                fontFamily: "'Rajdhani',sans-serif",
                fontWeight: 700,
                fontSize: "0.68rem",
                letterSpacing: "0.26em",
                textTransform: "uppercase",
                color: "#facc15",
              }}
            >
              ━ WHY CHOOSE US ━
            </span>
            <h2
              style={{
                fontFamily: "'Poppins',sans-serif",
                fontWeight: 900,
                fontSize: "2.2rem",
                color: "#0f172a",
                marginTop: "1rem",
              }}
            >
              Why M.N. Graphics
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={fadeUp(idx * 0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  style={{
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: "1.25rem",
                    padding: "28px 24px",
                  }}
                  className="transition-all hover:shadow-lg hover:border-[#facc15]"
                >
                  <div className="icon-box mb-4">
                    <Icon size={24} style={{ color: "#facc15" }} strokeWidth={1.8} />
                  </div>
                  <h3
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontWeight: 700,
                      fontSize: "1rem",
                      color: "#0f172a",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "'Poppins',sans-serif",
                      fontSize: "0.9rem",
                      color: "#64748b",
                      lineHeight: "1.6",
                    }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-3xl text-center py-16"
          style={{
            background: "linear-gradient(135deg, #0f172a 0%, rgba(250,204,21,0.15) 100%)",
            border: "1px solid rgba(250,204,21,0.22)",
          }}
        >
          <h2
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontWeight: 900,
              fontSize: "2rem",
              color: "#fff",
              marginBottom: "1rem",
            }}
          >
            Ready to Get Started?
          </h2>
          <p
            style={{
              fontFamily: "'Poppins',sans-serif",
              fontSize: "1rem",
              color: "rgba(255,255,255,0.7)",
              marginBottom: "2rem",
            }}
          >
            Contact us for a free quote and discuss your project with our experts.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-700 transition-all"
            style={{
              fontFamily: "'Rajdhani',sans-serif",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              fontSize: "0.82rem",
              background: "#facc15",
              color: "#0f172a",
              boxShadow: "0 0 24px rgba(250,204,21,0.5)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "scale(1.05) translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "";
            }}
          >
            Get Free Quote <ArrowRight size={15} strokeWidth={2.5} />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
