"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";

/* ── 3D tilt card hook ── */
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 300, damping: 30 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 800 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

const printServices = [
  {
    name: "HP Latex Print",
    img: "https://www.insightwithin.com/wp-content/uploads/2017/07/Latex-560_Standard_Front_with-output-1024x629.png",
    accent: "#3b82f6",
    tag: "Indoor / Outdoor",
    description: "High-quality water-resistant printing for indoor and outdoor applications. Vibrant colors, sharp detail, and long-lasting results.",
  },
  {
    name: "Mutoh Eco Print",
    img: "https://tiimg.tistatic.com/fp/2/001/525/mutoh-valuejet-1604-ecosolvent-printer-992.jpg",
    accent: "#22c55e",
    tag: "Eco-Solvent",
    description: "Durable eco-solvent technology for vehicle wraps, PVC banners, and weather-resistant outdoor signage.",
  },
  {
    name: "UV Flatbed Print",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqFmysgNo9A_An68f00I1OVd6vvU0oLhmcDw&s",
    accent: "#a855f7",
    tag: "Rigid Substrates",
    description: "UV printing for wood, acrylic, and metal. Instant drying, superior color accuracy, and premium matte or gloss finishes.",
  },
  {
    name: "Flex Print",
    img: "https://dn-24.com/wp-content/uploads/2024/04/26dc7e915abaaf10ed1fefde1ec0b0d5.jpg",
    accent: "#f97316",
    tag: "Textile / Vinyl",
    description: "Flexible vinyl printing for garments, bags, and curved surfaces. Soft, breathable, and built for custom apparel.",
  },
  {
    name: "Digital Print",
    img: "https://cdn2.bigcommerce.com/server500/cd6a7/product_images/uploaded_images/digital-printing.jpg",
    accent: "#6366f1",
    tag: "Short Run",
    description: "Fast and cost-effective for short runs and color-rich designs. Ideal for marketing materials and promotional items.",
  },
  {
    name: "Canvas Print",
    img: "https://supraprint.pl/wp-content/uploads/2023/11/obrazy-canvas-na-plotnie-malarskim-934x700.webp",
    accent: "#ef4444",
    tag: "Fine Art",
    description: "Gallery-quality canvas printing for corporate offices, elegant wall decor, and artistic large-format displays.",
  },
  {
    name: "Retro Print",
    img: "https://5.imimg.com/data5/SELLER/Default/2024/4/410886102/DX/AX/AI/79727137/retro-print-cutting-plotter-500x500.jpg",
    accent: "#ec4899",
    tag: "Vintage Style",
    description: "Distressed vintage-style printing for trendy merchandise, apparel, and nostalgic brand aesthetics.",
  },
  {
    name: "Transfer Print",
    img: "https://framerusercontent.com/images/HQ5VjoIZj9tte1nxmlde0Nqksqo.jpg?width=1300&height=730",
    accent: "#06b6d4",
    tag: "Direct to Garment",
    description: "Heat-transfer technology for vibrant, durable direct-to-garment results. Custom t-shirts, hoodies, and personalized items.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function PrintSection() {
  const router = useRouter();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=Orbitron:wght@700;800&family=Inter:wght@400;500&display=swap');

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes neonPulse {
          0%, 100% { opacity: 0.55; }
          50%       { opacity: 1; }
        }
        @keyframes floatParticle {
          0%        { transform: translateY(0px)   translateX(0px)   scale(1);   opacity: 0; }
          10%       { opacity: 1; }
          90%       { opacity: 0.6; }
          100%      { transform: translateY(-120px) translateX(20px)  scale(0.6); opacity: 0; }
        }
        @keyframes ctaGlow {
          0%, 100% { box-shadow: 0 0 14px rgba(250,204,21,0.5), 0 0 28px rgba(250,204,21,0.2); }
          50%       { box-shadow: 0 0 22px rgba(250,204,21,0.8), 0 0 50px rgba(250,204,21,0.35); }
        }
        @keyframes grain {
          0%   { transform: translate(0, 0); }
          20%  { transform: translate(-2px, 2px); }
          40%  { transform: translate(2px, -2px); }
          60%  { transform: translate(-1px, 3px); }
          80%  { transform: translate(3px, -1px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes underlineFlow {
          0%   { background-position: 0% center; }
          100% { background-position: 300% center; }
        }
        @keyframes borderSpin {
          0%   { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }

        .ps-heading {
          font-family: 'Orbitron', sans-serif;
          font-weight: 800;
          background: linear-gradient(90deg, #ca8a04 0%, #facc15 25%, #fef08a 50%, #facc15 75%, #b45309 100%);
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 5s linear infinite;
        }

        .ps-subhead {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          letter-spacing: 0.18em;
        }

        .ps-body { font-family: 'Inter', sans-serif; }
        .ps-card-title {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          letter-spacing: 0.06em;
        }

        .ps-badge {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(16px) saturate(160%);
          -webkit-backdrop-filter: blur(16px) saturate(160%);
          border: 1px solid rgba(250,204,21,0.18);
          box-shadow: 0 0 20px rgba(250,204,21,0.06) inset;
        }

        .ps-card {
          background: rgba(255,255,255,0.028);
          backdrop-filter: blur(22px) saturate(160%);
          -webkit-backdrop-filter: blur(22px) saturate(160%);
          border: 1px solid rgba(255,255,255,0.07);
          transition:
            border-color 0.35s ease,
            box-shadow 0.35s ease;
        }

        .ps-cta {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-size: 0.78rem;
          color: #09090b;
          background: linear-gradient(90deg, #ca8a04 0%, #facc15 35%, #fef08a 55%, #facc15 75%, #ca8a04 100%);
          background-size: 280% auto;
          animation: shimmer 4s linear infinite;
          box-shadow: 0 0 10px rgba(250,204,21,0.3), 0 2px 8px rgba(0,0,0,0.5);
          transition: transform 0.28s cubic-bezier(0.22,1,0.36,1);
        }
        .ps-cta:hover {
          transform: scale(1.045) translateY(-2px);
          animation: shimmer 4s linear infinite, ctaGlow 1.5s ease-in-out infinite;
        }

        .ps-grain {
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
          animation: grain 0.8s steps(1) infinite;
          opacity: 0.025;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
          background-size: 180px 180px;
        }

        .ps-underline {
          height: 2px;
          background: linear-gradient(90deg, transparent, #facc15, #fef08a, #facc15, #3b82f6, transparent);
          background-size: 300% auto;
          animation: underlineFlow 4s linear infinite, neonPulse 3s ease-in-out infinite;
          border-radius: 2px;
        }

        .particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: floatParticle linear infinite;
        }
      `}</style>

      <section
        className="relative  overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #060608 0%, #0a0a10 40%, #07070c 70%, #050508 100%)",
        }}
      >
        {/* ── GRAIN TEXTURE ── */}
        <div className="ps-grain" />

        {/* ── AMBIENT GLOW BLOBS ── */}
        <div className="absolute pointer-events-none"
          style={{ top: "-10%", left: "-8%", width: 600, height: 500,
            background: "radial-gradient(ellipse, rgba(250,204,21,0.065) 0%, transparent 70%)",
            filter: "blur(70px)", animation: "neonPulse 6s ease-in-out infinite" }} />
        <div className="absolute pointer-events-none"
          style={{ bottom: "-8%", right: "-6%", width: 550, height: 480,
            background: "radial-gradient(ellipse, rgba(59,130,246,0.055) 0%, transparent 70%)",
            filter: "blur(70px)", animation: "neonPulse 5s ease-in-out infinite", animationDelay: "2s" }} />
        <div className="absolute pointer-events-none"
          style={{ top: "45%", left: "55%", width: 400, height: 350,
            background: "radial-gradient(ellipse, rgba(168,85,247,0.04) 0%, transparent 70%)",
            filter: "blur(60px)", animation: "neonPulse 7s ease-in-out infinite", animationDelay: "1s" }} />

        {/* ── FLOATING PARTICLES ── */}
        {[
          { left: "12%",  bottom: "15%", size: 3, dur: "7s",  delay: "0s",   color: "rgba(250,204,21,0.6)" },
          { left: "28%",  bottom: "22%", size: 2, dur: "9s",  delay: "1.5s", color: "rgba(250,204,21,0.4)" },
          { left: "45%",  bottom: "10%", size: 4, dur: "6s",  delay: "0.8s", color: "rgba(59,130,246,0.5)" },
          { left: "62%",  bottom: "18%", size: 2, dur: "11s", delay: "2.2s", color: "rgba(250,204,21,0.5)" },
          { left: "78%",  bottom: "8%",  size: 3, dur: "8s",  delay: "0.3s", color: "rgba(168,85,247,0.5)" },
          { left: "88%",  bottom: "25%", size: 2, dur: "10s", delay: "1s",   color: "rgba(250,204,21,0.35)" },
          { left: "5%",   bottom: "35%", size: 2, dur: "13s", delay: "3s",   color: "rgba(59,130,246,0.4)" },
          { left: "94%",  bottom: "40%", size: 3, dur: "8.5s",delay: "2s",   color: "rgba(250,204,21,0.45)" },
        ].map((p, i) => (
          <div key={i} className="particle"
            style={{
              left: p.left, bottom: p.bottom,
              width: p.size, height: p.size,
              background: p.color,
              boxShadow: `0 0 ${p.size * 3}px ${p.color}`,
              animationDuration: p.dur,
              animationDelay: p.delay,
            }}
          />
        ))}

        {/* ── GRID OVERLAY ── */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.022]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250,204,21,1) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-20">

          {/* ── SECTION HEADER ── */}
          <motion.div
            className="text-center mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            {/* Badge */}
            <motion.div variants={cardVariants} className="flex justify-center mb-7">
              <span className="ps-badge ps-subhead inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-[0.7rem] uppercase tracking-[0.28em]"
                style={{ color: "rgba(250,204,21,0.8)" }}>
                <span className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#facc15", boxShadow: "0 0 8px #facc15" }} />
                Advanced Printing Technologies
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={cardVariants}
              className="ps-heading text-[2.8rem] md:text-[3.8rem] lg:text-[4.4rem] leading-[1.05] mb-6">
              Trusted Printing
              <br />Services.
            </motion.h2>

            {/* Animated underline */}
            <motion.div variants={cardVariants} className="flex justify-center mb-7">
              <div className="ps-underline w-48" />
            </motion.div>

            <motion.p variants={cardVariants}
              className="ps-body text-[1rem] leading-relaxed max-w-xl mx-auto"
              style={{ color: "rgba(156,163,175,0.85)" }}>
              We deploy cutting-edge printing systems to deliver premium quality output for every branding challenge — indoor, outdoor, rigid, or textile.
            </motion.p>
          </motion.div>

          {/* ── CARDS GRID ── */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
          >
            {printServices.map((service, idx) => (
              <motion.div key={idx} variants={cardVariants} className="group">
                <TiltCard>
                  <div
                    className="ps-card rounded-2xl overflow-hidden h-full flex flex-col"
                    style={{ transformStyle: "preserve-3d" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = `${service.accent}44`;
                      el.style.boxShadow = `0 0 0 1px ${service.accent}22, 0 20px 60px rgba(0,0,0,0.6), 0 0 40px ${service.accent}18`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "rgba(255,255,255,0.07)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden flex-shrink-0">
                      <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Image
                          src={service.img}
                          alt={service.name}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>

                      {/* Gradient mask */}
                      <div className="absolute inset-0"
                        style={{ background: "linear-gradient(180deg, transparent 40%, rgba(6,6,12,0.95) 100%)" }} />

                      {/* Neon overlay on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                        style={{
                          background: `radial-gradient(ellipse at 50% 100%, ${service.accent}22 0%, transparent 70%)`,
                        }}
                      />

                      {/* Corner accent glow */}
                      <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                        style={{
                          background: `radial-gradient(ellipse at 100% 0%, ${service.accent}40 0%, transparent 70%)`,
                        }}
                      />

                      {/* Tag pill */}
                      <div className="absolute top-3 left-3">
                        <span className="ps-subhead text-[0.62rem] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full"
                          style={{
                            background: "rgba(0,0,0,0.65)",
                            backdropFilter: "blur(12px)",
                            border: `1px solid ${service.accent}55`,
                            color: service.accent,
                            boxShadow: `0 0 8px ${service.accent}30`,
                          }}>
                          {service.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-grow" style={{ transform: "translateZ(10px)" }}>
                      <h3 className="ps-card-title text-[1.1rem] text-white mb-2">
                        {service.name}
                      </h3>

                      {/* Accent bar */}
                      <div className="h-[1.5px] w-10 mb-3 rounded-full group-hover:w-full transition-all duration-500"
                        style={{
                          background: `linear-gradient(90deg, ${service.accent}, rgba(250,204,21,0.5), transparent)`,
                          boxShadow: `0 0 6px ${service.accent}60`,
                        }}
                      />

                      <p className="ps-body text-[0.8rem] leading-[1.7] flex-grow mb-5"
                        style={{ color: "rgba(156,163,175,0.8)" }}>
                        {service.description}
                      </p>

                      {/* CTA */}
                      <button
                        onClick={() =>
                          router.push(`/services/${service.name.toLowerCase().replace(/\s+/g, "-")}`)
                        }
                        className="ps-cta w-full py-2.5 rounded-xl cursor-pointer"
                      >
                        View Details →
                      </button>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>
    </>
  );
}