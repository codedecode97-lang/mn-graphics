"use client";

import Image from "next/image";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useRef } from "react";

/* ── 3D Tilt Card ── */
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 260, damping: 26 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 260, damping: 26 });

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
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      className="h-full"
    >
      {children}
    </motion.div>
  );
}

const workItems = [
  {
    id: 1,
    title: "Vinyl Cutting Signage",
    category: "Vinyl Cutting",
    description: "Custom vinyl cut letters for premium brands",
    image: "https://3.imimg.com/data3/RT/GB/MY-3413666/vinyl-cutting-signages-500x500.jpg",
    accent: "#facc15",
  },
  {
    id: 2,
    title: "Eco Solvent Printing",
    category: "Flex Printing",
    description: "High-quality eco-friendly banner and poster printing",
    image: "https://3.imimg.com/data3/OG/JI/MY-3735414/eco-solvent-printers-hp-latex.jpg",
    accent: "#22c55e",
  },
  {
    id: 3,
    title: "Steel Letter Installation",
    category: "Steel Letter",
    description: "Durable stainless steel letterpress solutions",
    image: "https://i.ytimg.com/vi/nKTB-hD3ZHU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBwfgA7GTH65ZTvuqE_JWWl0iDtJw",
    accent: "#94a3b8",
  },
  {
    id: 4,
    title: "3D LED Signage",
    category: "LED Signage",
    description: "Modern 3D LED displays and illuminated signs",
    image: "https://5.imimg.com/data5/QQ/TM/MY-58022541/3d-led-letter-board.jpg",
    accent: "#f97316",
  },
  {
    id: 5,
    title: "Acrylic Laser Cutting",
    category: "Laser Cutting",
    description: "Precision laser-cut acrylic signs with clean edges",
    image: "https://www.weetect.com/wp-content/uploads/2018/08/Figure-1-Laser-cutting-acrylic-sheet-1024x576.jpg",
    accent: "#06b6d4",
  },
  {
    id: 6,
    title: "Metal Sheet Cutting",
    category: "CNC Cutting",
    description: "Custom aluminum and steel cutting for industrial signage",
    image: "https://londonmetalstore.co.uk/cdn/shop/articles/cut_sheet_metal.jpg?v=1694613468",
    accent: "#10b981",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function OurWork() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;800&family=Rajdhani:wght@600;700&family=Inter:wght@400;500&display=swap');

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes neonPulse {
          0%, 100% { opacity: 0.48; }
          50%       { opacity: 1; }
        }
        @keyframes floatUp {
          0%   { transform: translateY(0) scale(1); opacity: 0; }
          8%   { opacity: 1; }
          88%  { opacity: 0.5; }
          100% { transform: translateY(-120px) scale(0.5); opacity: 0; }
        }
        @keyframes grain {
          0%   { transform: translate(0, 0); }
          25%  { transform: translate(-2px, 2px); }
          50%  { transform: translate(2px, -2px); }
          75%  { transform: translate(-1px, 3px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes underlineFlow {
          0%   { background-position: 0% center; }
          100% { background-position: 300% center; }
        }
        @keyframes scanline {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes imageShimmer {
          0%   { transform: translateX(-120%) skewX(-12deg); }
          100% { transform: translateX(220%) skewX(-12deg); }
        }
        @keyframes iconPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(250,204,21,0); }
          50%       { box-shadow: 0 0 0 6px rgba(250,204,21,0.12); }
        }

        .ow-heading {
          font-family: 'Orbitron', sans-serif;
          font-weight: 800;
          background: linear-gradient(90deg, #b45309 0%, #facc15 22%, #fef08a 45%, #facc15 68%, #ca8a04 85%, #facc15 100%);
          background-size: 260% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 5s linear infinite;
        }
        .ow-label { font-family: 'Rajdhani', sans-serif; font-weight: 700; }
        .ow-body  { font-family: 'Inter', sans-serif; }

        .ow-badge {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          letter-spacing: 0.24em;
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(18px) saturate(150%);
          -webkit-backdrop-filter: blur(18px) saturate(150%);
          border: 1px solid rgba(250,204,21,0.18);
        }

        .ow-card {
          background: rgba(255,255,255,0.022);
          backdrop-filter: blur(16px) saturate(155%);
          -webkit-backdrop-filter: blur(16px) saturate(155%);
          border: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.32s ease, box-shadow 0.32s ease;
        }

        .ow-underline {
          height: 2px;
          background: linear-gradient(90deg, transparent, #3b82f6, #facc15, #fef08a, #facc15, #ec4899, transparent);
          background-size: 300% auto;
          animation: underlineFlow 4s linear infinite, neonPulse 3s ease-in-out infinite;
          border-radius: 2px;
        }

        .ow-grain {
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
          animation: grain 0.9s steps(1) infinite;
          opacity: 0.022;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 185px 185px;
        }

        .ow-scanline {
          position: absolute; left: 0; right: 0;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(250,204,21,0.03), transparent);
          animation: scanline 18s linear infinite;
          pointer-events: none; z-index: 1;
        }

        .ow-particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: floatUp linear infinite;
        }

        /* Image shimmer sweep */
        .ow-img-shimmer::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.08) 50%, transparent 70%);
          transform: translateX(-120%) skewX(-12deg);
          transition: none;
        }
        .group:hover .ow-img-shimmer::after {
          animation: imageShimmer 0.7s ease forwards;
        }

        .ow-ext-icon {
          animation: iconPulse 2s ease-in-out infinite;
          border-radius: 50%;
        }
      `}</style>

      <section
        className="relative py-14 overflow-hidden"
        style={{
          background: "linear-gradient(152deg, #060608 0%, #08090e 30%, #0b0a12 62%, #060609 100%)",
        }}
      >
        {/* Grain */}
        <div className="ow-grain" />
        {/* Scanline */}
        <div className="ow-scanline" />

        {/* ── AMBIENT BLOBS ── */}
        <div className="absolute pointer-events-none"
          style={{ top: "-10%", right: "-5%", width: 600, height: 500,
            background: "radial-gradient(ellipse, rgba(250,204,21,0.065) 0%, transparent 68%)",
            filter: "blur(76px)", animation: "neonPulse 7s ease-in-out infinite" }} />
        <div className="absolute pointer-events-none"
          style={{ bottom: "-8%", left: "-6%", width: 560, height: 470,
            background: "radial-gradient(ellipse, rgba(59,130,246,0.055) 0%, transparent 68%)",
            filter: "blur(72px)", animation: "neonPulse 5.5s ease-in-out infinite", animationDelay: "2s" }} />
        <div className="absolute pointer-events-none"
          style={{ top: "40%", left: "42%", width: 420, height: 360,
            background: "radial-gradient(ellipse, rgba(236,72,153,0.036) 0%, transparent 70%)",
            filter: "blur(62px)", animation: "neonPulse 9s ease-in-out infinite", animationDelay: "1.5s" }} />
        <div className="absolute pointer-events-none"
          style={{ top: "15%", left: "5%", width: 320, height: 280,
            background: "radial-gradient(ellipse, rgba(168,85,247,0.032) 0%, transparent 70%)",
            filter: "blur(52px)", animation: "neonPulse 6s ease-in-out infinite", animationDelay: "3.5s" }} />

        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250,204,21,1) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* ── PARTICLES ── */}
        {[
          { left: "6%",  bottom: "12%", s: 3,  dur: "8s",   del: "0s",   c: "rgba(250,204,21,0.65)" },
          { left: "18%", bottom: "20%", s: 2,  dur: "10.5s",del: "1.5s", c: "rgba(250,204,21,0.42)" },
          { left: "32%", bottom: "7%",  s: 4,  dur: "7.5s", del: "0.4s", c: "rgba(59,130,246,0.55)" },
          { left: "48%", bottom: "15%", s: 2,  dur: "13s",  del: "3.2s", c: "rgba(250,204,21,0.48)" },
          { left: "62%", bottom: "5%",  s: 3,  dur: "9s",   del: "0.2s", c: "rgba(168,85,247,0.52)" },
          { left: "75%", bottom: "22%", s: 2,  dur: "11.5s",del: "1.2s", c: "rgba(250,204,21,0.38)" },
          { left: "88%", bottom: "10%", s: 3,  dur: "8.5s", del: "2.5s", c: "rgba(59,130,246,0.45)" },
          { left: "3%",  bottom: "38%", s: 2,  dur: "16s",  del: "4s",   c: "rgba(236,72,153,0.38)" },
          { left: "94%", bottom: "32%", s: 2,  dur: "9.5s", del: "0.7s", c: "rgba(250,204,21,0.5)" },
          { left: "42%", bottom: "46%", s: 2,  dur: "20s",  del: "5.5s", c: "rgba(168,85,247,0.28)" },
        ].map((p, i) => (
          <div key={i} className="ow-particle"
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

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
              <span className="ow-badge inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-[0.68rem] uppercase tracking-[0.26em]"
                style={{ color: "rgba(250,204,21,0.8)" }}>
                <span className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#facc15", boxShadow: "0 0 8px #facc15" }} />
                Portfolio
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={cardVariants}
              className="ow-heading text-[2.6rem] md:text-[3.6rem] lg:text-[4.4rem] leading-[1.05] mb-6"
            >
              Our Best
              
              Works.
            </motion.h2>

            {/* Underline */}
            <motion.div variants={cardVariants} className="flex justify-center mb-7">
              <div className="ow-underline w-44" />
            </motion.div>

            <motion.p
              variants={cardVariants}
              className="ow-body text-[1rem] leading-relaxed max-w-xl mx-auto"
              style={{ color: "rgba(156,163,175,0.82)" }}
            >
              Explore our portfolio of premium printing and signage solutions delivered to satisfied clients across Kolkata and beyond.
            </motion.p>
          </motion.div>

          {/* ── WORK GRID ── */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
          >
            {workItems.map((item) => (
              <motion.div key={item.id} variants={cardVariants} className="group cursor-pointer">
                <TiltCard>
                  <div
                    className="ow-card relative h-80 rounded-2xl overflow-hidden"
                    style={{ transformStyle: "preserve-3d" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = `${item.accent}40`;
                      el.style.boxShadow = `0 0 0 1px ${item.accent}18, 0 28px 70px rgba(0,0,0,0.7), 0 0 50px ${item.accent}16`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "rgba(255,255,255,0.06)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    {/* ── IMAGE ── */}
                    <div className="ow-img-shimmer relative w-full h-full overflow-hidden">
                      <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Image
                          src={item.image}
                          alt={item.title}
                          width={600}
                          height={400}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>

                      {/* Base gradient */}
                      <div className="absolute inset-0 pointer-events-none"
                        style={{
                          background: "linear-gradient(180deg, rgba(6,6,12,0.1) 0%, rgba(6,6,12,0.5) 60%, rgba(6,6,12,0.92) 100%)",
                        }}
                      />

                      {/* Deeper hover overlay */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                        style={{ background: "rgba(6,6,12,0.28)" }}
                      />

                      {/* Accent neon overlay on hover */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                        style={{
                          background: `radial-gradient(ellipse at 50% 100%, ${item.accent}20 0%, transparent 65%)`,
                        }}
                      />
                    </div>

                    {/* ── CORNER NEON ACCENTS ── */}
                    {/* Top-left */}
                    <div className="absolute top-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse at 0% 0%, ${item.accent}38 0%, transparent 70%)`,
                      }}
                    />
                    {/* Bottom-right */}
                    <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse at 100% 100%, ${item.accent}30 0%, transparent 70%)`,
                      }}
                    />

                    {/* ── CONTENT OVERLAY ── */}
                    <div className="absolute inset-0 flex flex-col justify-end p-6" style={{ transform: "translateZ(8px)" }}>

                      {/* Category badge */}
                      <motion.div
                        className="mb-3 self-start"
                        initial={{ opacity: 0.7 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <span
                          className="ow-label text-[0.62rem] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full"
                          style={{
                            background: "rgba(0,0,0,0.6)",
                            backdropFilter: "blur(14px)",
                            border: `1px solid ${item.accent}48`,
                            color: item.accent,
                            boxShadow: `0 0 10px ${item.accent}25`,
                          }}
                        >
                          {item.category}
                        </span>
                      </motion.div>

                      {/* Title */}
                      <h3
                        className="ow-label text-[1.2rem] text-white mb-2 uppercase tracking-[0.08em] group-hover:translate-y-0 translate-y-1 transition-transform duration-300"
                        style={{ textShadow: "0 2px 12px rgba(0,0,0,0.8)" }}
                      >
                        {item.title}
                      </h3>

                      {/* Accent bar */}
                      <div
                        className="h-[1.5px] w-8 mb-3 rounded-full transition-all duration-500 group-hover:w-full"
                        style={{
                          background: `linear-gradient(90deg, ${item.accent}, rgba(250,204,21,0.4), transparent)`,
                          boxShadow: `0 0 6px ${item.accent}55`,
                        }}
                      />

                      {/* Description */}
                      <p
                        className="ow-body text-[0.8rem] leading-[1.65] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-350"
                        style={{ color: "rgba(209,213,219,0.88)" }}
                      >
                        {item.description}
                      </p>

                      {/* Arrow icon */}
                      <div
                        className="ow-ext-icon mt-4 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-1 transition-all duration-350"
                        style={{
                          border: `1px solid ${item.accent}48`,
                          color: item.accent,
                        }}
                      >
                        <ExternalLink size={14} />
                      </div>
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