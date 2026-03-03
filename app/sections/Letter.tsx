"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

/* ── 3D Tilt Card ── */
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [7, -7]), { stiffness: 270, damping: 26 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-7, 7]), { stiffness: 270, damping: 26 });

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

const letterTypes = [
  {
    name: "Liquid Acrylic Letter",
    slug: "liquid-acrylic-letter",
    img: "https://5.imimg.com/data5/KA/NY/AI/SELLER-47867688/led-acrylic-letter.jpg",
    accent: "#3b82f6",
    tag: "LED Lit",
    description: "Stunning liquid acrylic letters with a glossy, premium finish. Perfect for modern storefronts and elegant brand signage with outstanding light reflection.",
  },
  {
    name: "Channel Letter",
    slug: "channel-letter",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCIcJQ35tRQJzGl4aES2BtSx1pwtTwGzSaKQ&s",
    accent: "#a855f7",
    tag: "24/7 Visibility",
    description: "Professional channel letters with LEDs for round-the-clock visibility. Superior durability with fully customizable lighting and color options.",
  },
  {
    name: "Diamond Letter",
    slug: "diamond-letter",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBewPELgZlB9UNUCX4_qG9ZhDTNDnwNUHMZw&s",
    accent: "#ec4899",
    tag: "Luxury Grade",
    description: "Luxurious diamond-shaped letters for premium branding. Striking visual impact with sophisticated geometry and modern elegance.",
  },
  {
    name: "ACP Letter",
    slug: "acp-letter",
    img: "https://5.imimg.com/data5/LA/NI/MY-2396634/acp-board-acrylic-letters.jpg",
    accent: "#0ea5e9",
    tag: "Weather Proof",
    description: "Durable ACP (Aluminium Composite Panel) letters designed for exterior signage. Weather-resistant, lightweight, and ideal for commercial branding..",
  },
  {
    name: "Digital Letter",
    slug: "digital-letter",
    img: "https://5.imimg.com/data5/PK/ON/MY-5119902/digital-letter-display-board-500x500.jpg",
    accent: "#6366f1",
    tag: "Dynamic Display",
    description: "Cutting-edge digital display letters with dynamic lighting. Perfect for interactive storefronts and contemporary brand aesthetics.",
  },
  {
    name: "PVC NEON Letter",
    slug: "pvc-neon-letter",
    img: "https://i.pinimg.com/736x/35/2d/db/352ddb13ae2c25833c015205f84b848a.jpg",
    accent: "#f97316",
    tag: "Neon Style",
    description: "Vibrant neon-style PVC letters with energy-efficient LED. Eye-catching and modern — ideal for bars, cafes, and entertainment venues.",
  },
  {
    name: "Acrylic Box Letter",
    slug: "acrylic-box-letter",
    img: "https://cpimg.tistatic.com/08282655/b/4/Acrylic-Box-Type-Letters.jpg",
    accent: "#22c55e",
    tag: "3D Depth",
    description: "3D acrylic box letters with depth and dimension. Premium finish for upscale retail, hotels, and corporate establishments.",
  },
  {
    name: "Golden Steel Letter",
    slug: "golden-steel-letter",
    img: "https://ssbspl.com/wp-content/uploads/2024/03/blob-7781f7b-1.png",
    accent: "#facc15",
    tag: "Gold Finish",
    description: "Luxurious gold-finished steel letters that exude elegance and sophistication. Perfect for luxury brands and high-end businesses.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function LetterSection() {
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
          0%   { transform: translateY(0)   scale(1);    opacity: 0; }
          8%   { opacity: 1; }
          88%  { opacity: 0.5; }
          100% { transform: translateY(-115px) scale(0.55); opacity: 0; }
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
        @keyframes borderShimmer {
          0%   { background-position: 0% 50%; }
          100% { background-position: 300% 50%; }
        }
        @keyframes scanline {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }

        .ls-heading {
          font-family: 'Orbitron', sans-serif;
          font-weight: 800;
          background: linear-gradient(90deg, #b45309 0%, #facc15 22%, #fef08a 45%, #facc15 68%, #ca8a04 85%, #facc15 100%);
          background-size: 260% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 5.5s linear infinite;
        }

        .ls-label   { font-family: 'Rajdhani', sans-serif; font-weight: 700; }
        .ls-body    { font-family: 'Inter', sans-serif; }

        .ls-badge {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          letter-spacing: 0.22em;
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(18px) saturate(150%);
          -webkit-backdrop-filter: blur(18px) saturate(150%);
          border: 1px solid rgba(250,204,21,0.18);
          box-shadow: 0 0 20px rgba(250,204,21,0.05) inset;
        }

        .ls-card {
          background: rgba(255,255,255,0.024);
          backdrop-filter: blur(22px) saturate(160%);
          -webkit-backdrop-filter: blur(22px) saturate(160%);
          border: 1px solid rgba(255,255,255,0.065);
          transition: border-color 0.32s ease, box-shadow 0.32s ease;
        }

        .ls-underline {
          height: 2px;
          background: linear-gradient(90deg, transparent, #ec4899, #facc15, #fef08a, #facc15, #3b82f6, transparent);
          background-size: 300% auto;
          animation: underlineFlow 4.5s linear infinite, neonPulse 3s ease-in-out infinite;
          border-radius: 2px;
        }

        .ls-grain {
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
          animation: grain 0.85s steps(1) infinite;
          opacity: 0.022;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px 180px;
        }

        .ls-scanline {
          position: absolute; left: 0; right: 0;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(250,204,21,0.035), transparent);
          animation: scanline 16s linear infinite;
          pointer-events: none; z-index: 1;
        }

        .ls-particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: floatUp linear infinite;
        }
      `}</style>

      <section
        className="relative py-14 overflow-hidden "
        style={{
          background: "linear-gradient(148deg, #06060a 0%, #08080e 30%, #0c0b12 60%, #07070c 100%)",
        }}
      >
        {/* Grain */}
        <div className="ls-grain" />

        {/* Scanline */}
        <div className="ls-scanline" />

        {/* ── AMBIENT BLOBS ── */}
        <div className="absolute pointer-events-none"
          style={{
            top: "-14%", left: "-8%", width: 620, height: 520,
            background: "radial-gradient(ellipse, rgba(250,204,21,0.065) 0%, transparent 68%)",
            filter: "blur(74px)", animation: "neonPulse 7s ease-in-out infinite"
          }} />
        <div className="absolute pointer-events-none"
          style={{
            bottom: "-10%", right: "-6%", width: 560, height: 480,
            background: "radial-gradient(ellipse, rgba(59,130,246,0.055) 0%, transparent 68%)",
            filter: "blur(70px)", animation: "neonPulse 5.5s ease-in-out infinite", animationDelay: "2.5s"
          }} />
        <div className="absolute pointer-events-none"
          style={{
            top: "42%", left: "38%", width: 420, height: 360,
            background: "radial-gradient(ellipse, rgba(236,72,153,0.038) 0%, transparent 70%)",
            filter: "blur(60px)", animation: "neonPulse 9s ease-in-out infinite", animationDelay: "1.5s"
          }} />
        <div className="absolute pointer-events-none"
          style={{
            top: "20%", right: "10%", width: 300, height: 280,
            background: "radial-gradient(ellipse, rgba(168,85,247,0.035) 0%, transparent 70%)",
            filter: "blur(52px)", animation: "neonPulse 6s ease-in-out infinite", animationDelay: "3s"
          }} />

        {/* ── GRID ── */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.019]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250,204,21,1) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* ── PARTICLES ── */}
        {[
          { left: "7%", bottom: "14%", s: 3, dur: "8.5s", del: "0s", c: "rgba(250,204,21,0.65)" },
          { left: "19%", bottom: "22%", s: 2, dur: "10s", del: "1.6s", c: "rgba(250,204,21,0.42)" },
          { left: "33%", bottom: "9%", s: 4, dur: "7s", del: "0.4s", c: "rgba(59,130,246,0.55)" },
          { left: "50%", bottom: "17%", s: 2, dur: "12s", del: "3s", c: "rgba(250,204,21,0.48)" },
          { left: "64%", bottom: "7%", s: 3, dur: "9.5s", del: "0.2s", c: "rgba(168,85,247,0.52)" },
          { left: "76%", bottom: "25%", s: 2, dur: "11s", del: "1.4s", c: "rgba(250,204,21,0.38)" },
          { left: "88%", bottom: "12%", s: 3, dur: "8s", del: "2.2s", c: "rgba(59,130,246,0.42)" },
          { left: "4%", bottom: "40%", s: 2, dur: "15s", del: "4s", c: "rgba(236,72,153,0.38)" },
          { left: "93%", bottom: "35%", s: 2, dur: "9s", del: "0.8s", c: "rgba(250,204,21,0.5)" },
          { left: "44%", bottom: "44%", s: 2, dur: "18s", del: "5s", c: "rgba(168,85,247,0.32)" },
        ].map((p, i) => (
          <div key={i} className="ls-particle"
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-10">

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
              <span className="ls-badge inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-[0.68rem] uppercase tracking-[0.26em]"
                style={{ color: "rgba(250,204,21,0.8)" }}>
                <span className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#facc15", boxShadow: "0 0 8px #facc15" }} />
                Letter &amp; Signage Solutions
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              variants={cardVariants}
              className="ls-heading text-[2.6rem] md:text-[3.6rem] lg:text-[4.4rem] leading-[1.05] mb-6"
            >
              Letters That 
              <br />
             Stand Out.
            </motion.h2>

            {/* Animated underline */}
            <motion.div variants={cardVariants} className="flex justify-center mb-7">
              <div className="ls-underline w-48" />
            </motion.div>

            <motion.p
              variants={cardVariants}
              className="ls-body text-[1rem] leading-relaxed max-w-xl mx-auto"
              style={{ color: "rgba(156,163,175,0.82)" }}
            >
              From liquid acrylic to golden steel — we craft premium custom letters and signage that define your brand in light, metal, and form.
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
            {letterTypes.map((letter, idx) => (
              <motion.div key={idx} variants={cardVariants} className="group">
                <TiltCard>
                  <div
                    className="ls-card rounded-2xl overflow-hidden h-full flex flex-col"
                    style={{ transformStyle: "preserve-3d" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = `${letter.accent}42`;
                      el.style.boxShadow = `0 0 0 1px ${letter.accent}1c, 0 24px 64px rgba(0,0,0,0.65), 0 0 40px ${letter.accent}18`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "rgba(255,255,255,0.065)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    {/* ── IMAGE ── */}
                    <div className="relative h-52 overflow-hidden flex-shrink-0">
                      <motion.div
                        className="w-full h-full"
                        whileHover={{ scale: 1.09 }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <Image
                          src={letter.img}
                          alt={letter.name}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover"
                        />
                      </motion.div>

                      {/* Gradient mask */}
                      <div className="absolute inset-0 pointer-events-none"
                        style={{ background: "linear-gradient(180deg, transparent 32%, rgba(6,6,12,0.95) 100%)" }} />

                      {/* Neon hover overlay */}
                      <div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                        style={{
                          background: `radial-gradient(ellipse at 50% 110%, ${letter.accent}2a 0%, transparent 65%)`,
                        }}
                      />

                      {/* Corner glow — top right */}
                      <div
                        className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-350 pointer-events-none"
                        style={{
                          background: `radial-gradient(ellipse at 100% 0%, ${letter.accent}48 0%, transparent 70%)`,
                        }}
                      />

                      {/* Corner glow — bottom left */}
                      <div
                        className="absolute bottom-0 left-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-450 pointer-events-none"
                        style={{
                          background: `radial-gradient(ellipse at 0% 100%, ${letter.accent}28 0%, transparent 70%)`,
                        }}
                      />

                      {/* Tag pill */}
                      <div className="absolute top-3 left-3">
                        <span
                          className="ls-label text-[0.6rem] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full"
                          style={{
                            background: "rgba(0,0,0,0.7)",
                            backdropFilter: "blur(14px)",
                            border: `1px solid ${letter.accent}52`,
                            color: letter.accent,
                            boxShadow: `0 0 8px ${letter.accent}28`,
                          }}
                        >
                          {letter.tag}
                        </span>
                      </div>
                    </div>

                    {/* ── CONTENT ── */}
                    <div className="p-5 flex flex-col flex-grow" style={{ transform: "translateZ(10px)" }}>
                      <h3 className="ls-label text-[1.08rem] text-white mb-2 uppercase tracking-[0.07em]">
                        {letter.name}
                      </h3>

                      {/* Animated accent bar */}
                      <div
                        className="h-[1.5px] w-10 mb-3 rounded-full transition-all duration-500 group-hover:w-full"
                        style={{
                          background: `linear-gradient(90deg, ${letter.accent}, rgba(250,204,21,0.45), transparent)`,
                          boxShadow: `0 0 5px ${letter.accent}55`,
                        }}
                      />

                      <p
                        className="ls-body text-[0.8rem] leading-[1.72] flex-grow mb-5"
                        style={{ color: "rgba(156,163,175,0.8)" }}
                      >
                        {letter.description}
                      </p>

                      {/* CTA */}
                      <Link href={`/services/${letter.slug}`}>
                        <motion.span
                          whileHover={{ scale: 1.04, y: -2 }}
                          whileTap={{ scale: 0.97 }}
                          className="block w-full text-center py-2.5 rounded-xl text-[0.78rem] font-700 uppercase tracking-[0.16em] transition-all duration-300"
                          style={{
                            fontFamily: "'Rajdhani', sans-serif",
                            fontWeight: 700,
                            background: `linear-gradient(90deg, ${letter.accent}22, ${letter.accent}11)`,
                            border: `1px solid ${letter.accent}35`,
                            color: letter.accent,
                            boxShadow: `0 0 0 0 ${letter.accent}00`,
                            display: "block",
                          }}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLElement).style.background = `${letter.accent}22`;
                            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 16px ${letter.accent}35`;
                            (e.currentTarget as HTMLElement).style.borderColor = `${letter.accent}60`;
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLElement).style.background = `linear-gradient(90deg, ${letter.accent}22, ${letter.accent}11)`;
                            (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${letter.accent}00`;
                            (e.currentTarget as HTMLElement).style.borderColor = `${letter.accent}35`;
                          }}
                        >
                          View Details→
                        </motion.span>
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