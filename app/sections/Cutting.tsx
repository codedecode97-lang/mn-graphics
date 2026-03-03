"use client";

import { motion, useMotionValue, useTransform, useSpring, cubicBezier } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

/* ── 3D Tilt Card ── */
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 280, damping: 28 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 280, damping: 28 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 900 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

const cuttingServices = [
  {
    slug: "router-jali-cutting",
    image: "https://amazingsign.co.in/wp-content/uploads/2025/09/hq720-6.jpg",
    title: "Router Jali Cutting",
    description:
      "Precision router cutting for decorative jali patterns using MDF, plywood, and other materials. Perfect for architectural and interior design elements with intricate designs.",
    accent: "#facc15",
    tag: "CNC Router",
  },
  {
    slug: "ply-cutting",
    image: "https://cpimg.tistatic.com/11098810/b/6/30mm-Ply-Cutting-Services..jpg",
    title: "Ply Cutting",
    description:
      "Expert plywood cutting services for signage, display boards, and interior decoration. Various thicknesses with perfectly cut pieces and smooth finishing.",
    accent: "#f97316",
    tag: "Multi-Thickness",
  },
  {
    slug: "corian-cutting",
    image: "https://cpimg.tistatic.com/02485569/b/5/Corian-Cutting-Service.jpg",
    title: "Corian Cutting",
    description:
      "Waterproof Corian sheet cutting for kitchen countertops, bathroom panels, and wall cladding. Precision cuts with professional installation support.",
    accent: "#22c55e",
    tag: "Waterproof",
  },
  {
    slug: "acp-sheet-cutting",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQinJuplxaSl5vDo73Ea4DCs-gFpY2DNHNFQ&s",
    title: "ACP Sheet Cutting",
    description:
      "High-precision ACP (Aluminum Composite Panel) cutting for building facades, signage, and cladding. Weather-resistant and durable for outdoor use.",
    accent: "#3b82f6",
    tag: "Outdoor Grade",
  },
  {
    slug: "vinyl-cutting",
    image: "https://framerusercontent.com/images/ffJ1ohu44pMwZQMVZ7esQJsaUY.jpg?width=1300&height=730",
    title: "Vinyl Cutting",
    description:
      "Professional vinyl sheet cutting for stickers, vehicle wraps, wall decals, and window graphics. Available in all colors with guaranteed precision.",
    accent: "#a855f7",
    tag: "Vehicle Wraps",
  },
  {
    slug: "acrylic-laser-cutting",
    image: "https://www.weetect.com/wp-content/uploads/2018/08/Figure-1-Laser-cutting-acrylic-sheet-1024x576.jpg",
    title: "Acrylic Laser Cutting",
    description:
      "State-of-the-art laser cutting for acrylic sheets. Ideal for awards, signage, and display items with clean, precise edges and premium finish.",
    accent: "#06b6d4",
    tag: "Laser Precision",
  },
  {
    slug: "engraving",
    image: "https://static.vecteezy.com/system/resources/thumbnails/008/028/162/small/damask-vintage-baroque-scroll-ornament-swirl-victorian-monogram-heraldic-shield-swirl-retro-floral-leaf-pattern-border-foliage-antique-acanthus-calligraphy-engraved-tattoo-tile-decor-elemen-vector.jpg",
    title: "Engraving",
    description:
      "Premium engraving on acrylic, wood, metal, and leather. Customized awards, plaques, commemorative items, and bespoke corporate gifts.",
    accent: "#ec4899",
    tag: "Custom Engraving",
  },
  {
    slug: "metal-sheet-cutting",
    image: "https://londonmetalstore.co.uk/cdn/shop/articles/cut_sheet_metal.jpg?v=1694613468https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOCrHvWgYtK8GQuZqQnGHB3qPfC7R9xS_-_w&s",
    title: "Metal Sheet Cutting",
    description:
      "Precision metal cutting for aluminum, steel, and stainless steel sheets. Ideal for industrial signage, architectural elements, and custom metal fabrication.",
    accent: "#10b981",
    tag: "Industrial Grade",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: cubicBezier(0.22, 1, 0.36, 1) } },
};

export default function CuttingSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;800&family=Rajdhani:wght@600;700&family=Inter:wght@400;500&display=swap');

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes neonPulse {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
        @keyframes floatUp {
          0%   { transform: translateY(0px) scale(1);   opacity: 0; }
          8%   { opacity: 1; }
          88%  { opacity: 0.5; }
          100% { transform: translateY(-110px) scale(0.5); opacity: 0; }
        }
        @keyframes ctaGlow {
          0%, 100% { box-shadow: 0 0 12px rgba(250,204,21,0.45), 0 0 28px rgba(250,204,21,0.18); }
          50%       { box-shadow: 0 0 22px rgba(250,204,21,0.75), 0 0 48px rgba(250,204,21,0.32); }
        }
        @keyframes grain {
          0%   { transform: translate(0,0); }
          25%  { transform: translate(-2px, 2px); }
          50%  { transform: translate(2px,-2px); }
          75%  { transform: translate(-1px, 3px); }
          100% { transform: translate(0,0); }
        }
        @keyframes underlineFlow {
          0%   { background-position: 0% center; }
          100% { background-position: 300% center; }
        }
        @keyframes scanline {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }

        .cs-heading {
          font-family: 'Orbitron', sans-serif;
          font-weight: 800;
          background: linear-gradient(90deg, #ca8a04 0%, #facc15 25%, #fef08a 50%, #facc15 75%, #b45309 100%);
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 5s linear infinite;
        }
        .cs-label { font-family: 'Rajdhani', sans-serif; font-weight: 700; }
        .cs-body  { font-family: 'Inter', sans-serif; }

        .cs-badge {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          letter-spacing: 0.22em;
          background: rgba(255,255,255,0.035);
          backdrop-filter: blur(16px) saturate(150%);
          -webkit-backdrop-filter: blur(16px) saturate(150%);
          border: 1px solid rgba(250,204,21,0.18);
        }

        .cs-card {
          background: rgba(255,255,255,0.026);
          backdrop-filter: blur(20px) saturate(155%);
          -webkit-backdrop-filter: blur(20px) saturate(155%);
          border: 1px solid rgba(255,255,255,0.065);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .cs-underline {
          height: 2px;
          background: linear-gradient(90deg, transparent, #facc15, #fef08a, #3b82f6, #facc15, transparent);
          background-size: 300% auto;
          animation: underlineFlow 4.5s linear infinite, neonPulse 3s ease-in-out infinite;
          border-radius: 2px;
        }

        .cs-cta {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-size: 0.8rem;
          color: #08080c;
          background: linear-gradient(90deg, #ca8a04 0%, #facc15 35%, #fef08a 55%, #facc15 75%, #ca8a04 100%);
          background-size: 280% auto;
          animation: shimmer 4s linear infinite;
          box-shadow: 0 0 10px rgba(250,204,21,0.28), 0 2px 8px rgba(0,0,0,0.55);
          transition: transform 0.28s cubic-bezier(0.22,1,0.36,1);
        }
        .cs-cta:hover {
          transform: scale(1.045) translateY(-2px);
          animation: shimmer 4s linear infinite, ctaGlow 1.5s ease-in-out infinite;
        }

        .cs-grain {
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
          animation: grain 0.9s steps(1) infinite;
          opacity: 0.022;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 190px 190px;
        }

        .cs-particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: floatUp linear infinite;
        }

        .cs-scanline {
          position: absolute;
          left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(250,204,21,0.04), transparent);
          animation: scanline 14s linear infinite;
          pointer-events: none;
          z-index: 1;
        }
      `}</style>

      <section
        className="relative   overflow-hidden"
        style={{
          background: "linear-gradient(155deg, #050508 0%, #09090e 35%, #0b0a0f 65%, #060609 100%)",
        }}
      >
        {/* Grain */}
        <div className="cs-grain" />

        {/* Scanline */}
        <div className="cs-scanline" />

        {/* Ambient blobs */}
        <div className="absolute pointer-events-none"
          style={{
            top: "-12%", right: "-6%", width: 580, height: 480,
            background: "radial-gradient(ellipse, rgba(250,204,21,0.07) 0%, transparent 68%)",
            filter: "blur(72px)", animation: "neonPulse 7s ease-in-out infinite"
          }} />
        <div className="absolute pointer-events-none"
          style={{
            bottom: "-10%", left: "-8%", width: 540, height: 460,
            background: "radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 68%)",
            filter: "blur(68px)", animation: "neonPulse 5.5s ease-in-out infinite", animationDelay: "2.5s"
          }} />
        <div className="absolute pointer-events-none"
          style={{
            top: "38%", left: "40%", width: 380, height: 340,
            background: "radial-gradient(ellipse, rgba(236,72,153,0.035) 0%, transparent 70%)",
            filter: "blur(56px)", animation: "neonPulse 8s ease-in-out infinite", animationDelay: "1s"
          }} />

        {/* Industrial grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250,204,21,1) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Floating particles */}
        {[
          { left: "8%", bottom: "12%", s: 3, dur: "8s", del: "0s", c: "rgba(250,204,21,0.65)" },
          { left: "22%", bottom: "20%", s: 2, dur: "10s", del: "1.8s", c: "rgba(250,204,21,0.4)" },
          { left: "38%", bottom: "8%", s: 4, dur: "7s", del: "0.5s", c: "rgba(59,130,246,0.55)" },
          { left: "54%", bottom: "16%", s: 2, dur: "12s", del: "2.8s", c: "rgba(250,204,21,0.5)" },
          { left: "68%", bottom: "6%", s: 3, dur: "9s", del: "0.2s", c: "rgba(168,85,247,0.5)" },
          { left: "80%", bottom: "24%", s: 2, dur: "11s", del: "1.2s", c: "rgba(250,204,21,0.38)" },
          { left: "4%", bottom: "38%", s: 2, dur: "14s", del: "3.5s", c: "rgba(59,130,246,0.38)" },
          { left: "92%", bottom: "30%", s: 3, dur: "8.5s", del: "0.7s", c: "rgba(250,204,21,0.48)" },
          { left: "46%", bottom: "42%", s: 2, dur: "16s", del: "4s", c: "rgba(236,72,153,0.35)" },
        ].map((p, i) => (
          <div key={i} className="cs-particle"
            style={{
              left: p.left, bottom: p.bottom,
              width: p.s, height: p.s,
              background: p.c,
              boxShadow: `0 0 ${p.s * 3}px ${p.c}`,
              animationDuration: p.dur,
              animationDelay: p.del,
            }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-20">

          {/* ── HEADER ── */}
          <motion.div
            className="text-center mb-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            {/* Badge */}
            <motion.div variants={cardVariants} className="flex justify-center mb-7">
              <span className="cs-badge inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-[0.68rem] uppercase tracking-[0.26em]"
                style={{ color: "rgba(250,204,21,0.8)" }}>
                <span className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#facc15", boxShadow: "0 0 8px #facc15" }} />
                Cutting &amp; Engraving Services
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={cardVariants}
              className="cs-heading text-[2.6rem] md:text-[3.6rem] lg:text-[4.2rem] leading-[1.06] mb-6">
              Precision Cutting <br /> Services.
            </motion.h2>

            {/* Animated underline */}
            <motion.div variants={cardVariants} className="flex justify-center mb-7">
              <div className="cs-underline w-44" />
            </motion.div>

            <motion.p variants={cardVariants}
              className="cs-body text-[1rem] leading-relaxed max-w-xl mx-auto"
              style={{ color: "rgba(156,163,175,0.82)" }}>
              From precision CNC router work to state-of-the-art laser engraving — M.N. Graphics delivers expert fabrication for every material and every scale.
            </motion.p>
          </motion.div>

          {/* ── CARDS ── */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
          >
            {cuttingServices.map((service, idx) => (
              <motion.div key={idx} variants={cardVariants} className="group">
                <TiltCard>
                  <div
                    className="cs-card rounded-2xl overflow-hidden h-full flex flex-col"
                    style={{ transformStyle: "preserve-3d" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = `${service.accent}40`;
                      el.style.boxShadow = `0 0 0 1px ${service.accent}1a, 0 22px 64px rgba(0,0,0,0.65), 0 0 40px ${service.accent}18`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "rgba(255,255,255,0.065)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    {/* Image */}
                    <div className="relative h-52 overflow-hidden flex-shrink-0">
                      <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.09 }}
                        transition={{ duration: 0.5, ease: cubicBezier(0.22, 1, 0.36, 1) }}
                      >
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                        />
                      </motion.div>

                      {/* Gradient mask */}
                      <div className="absolute inset-0 pointer-events-none"
                        style={{ background: "linear-gradient(180deg, transparent 35%, rgba(5,5,10,0.95) 100%)" }} />

                      {/* Neon hover overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                        style={{
                          background: `radial-gradient(ellipse at 50% 110%, ${service.accent}28 0%, transparent 65%)`,
                        }}
                      />

                      {/* Corner glow — top right */}
                      <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none"
                        style={{
                          background: `radial-gradient(ellipse at 100% 0%, ${service.accent}45 0%, transparent 70%)`,
                        }}
                      />

                      {/* Tag pill */}
                      <div className="absolute top-3 left-3">
                        <span
                          className="cs-label text-[0.6rem] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full"
                          style={{
                            background: "rgba(0,0,0,0.68)",
                            backdropFilter: "blur(14px)",
                            border: `1px solid ${service.accent}50`,
                            color: service.accent,
                            boxShadow: `0 0 8px ${service.accent}28`,
                          }}
                        >
                          {service.tag}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5 flex flex-col flex-grow" style={{ transform: "translateZ(10px)" }}>
                      <h3 className="cs-label text-[1.12rem] text-white mb-2 uppercase tracking-[0.06em]">
                        {service.title}
                      </h3>

                      {/* Accent bar */}
                      <div
                        className="h-[1.5px] w-10 mb-3 rounded-full transition-all duration-500 group-hover:w-full"
                        style={{
                          background: `linear-gradient(90deg, ${service.accent}, rgba(250,204,21,0.4), transparent)`,
                          boxShadow: `0 0 5px ${service.accent}50`,
                        }}
                      />

                      <p className="cs-body text-[0.8rem] leading-[1.72] flex-grow mb-5"
                        style={{ color: "rgba(156,163,175,0.8)" }}>
                        {service.description}
                      </p>

                      {/* CTA */}
                      <Link href={`/services/${service.slug}`}
                        className="cs-cta block w-full text-center py-2.5 rounded-xl"
                      >
                        View Details →
                      </Link>
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