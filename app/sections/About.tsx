"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Premium Quality",
    desc: "High-grade materials with flawless finishing on every project.",
    glow: "rgba(250,204,21,0.18)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Timely Delivery",
    desc: "Fast, reliable completion — your deadlines are our priority.",
    glow: "rgba(59,130,246,0.16)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75" />
      </svg>
    ),
    title: "Affordable Pricing",
    desc: "Professional branding solutions crafted within your budget.",
    glow: "rgba(52,211,153,0.14)",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
    title: "Custom Designs",
    desc: "Unique, tailored branding that reflects your business identity.",
    glow: "rgba(236,72,153,0.14)",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function AboutPage() {
  const imageRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Rajdhani:wght@500;600;700&family=Inter:wght@400;500&display=swap');

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes floatBadge {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes rotateSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.35; }
          50%       { opacity: 0.7; }
        }

        .about-heading {
          font-family: 'Cormorant Garamond', serif;
          line-height: 1.12;
        }
        .about-body { font-family: 'Inter', sans-serif; }
        .card-label  { font-family: 'Rajdhani', sans-serif; letter-spacing: 0.06em; }

        .gradient-name {
          background: linear-gradient(90deg, #facc15 0%, #fde68a 40%, #facc15 70%, #b45309 100%);
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 5s linear infinite;
        }

        .feature-card {
          position: relative;
          background: rgba(255,255,255,0.025);
          backdrop-filter: blur(18px) saturate(160%);
          -webkit-backdrop-filter: blur(18px) saturate(160%);
          border: 1px solid rgba(255,255,255,0.06);
          transition: transform 0.35s cubic-bezier(0.22,1,0.36,1),
                      border-color 0.35s ease,
                      box-shadow 0.35s ease;
        }
        .feature-card:hover {
          transform: translateY(-4px);
          border-color: rgba(250,204,21,0.22);
        }

        .badge-float {
          animation: floatBadge 3.5s ease-in-out infinite;
        }

        .ring-spin {
          animation: rotateSlow 14s linear infinite;
        }

        .blob {
          animation: pulseGlow 5s ease-in-out infinite;
        }

        .image-frame {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
        }
        .image-frame::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 24px;
          padding: 1.5px;
          background: linear-gradient(135deg, rgba(250,204,21,0.5) 0%, rgba(250,204,21,0.05) 50%, rgba(236,72,153,0.25) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          z-index: 2;
          pointer-events: none;
        }

        .divider-line {
          background: linear-gradient(90deg, transparent, rgba(250,204,21,0.4), rgba(236,72,153,0.2), transparent);
          height: 1px;
        }
      `}</style>

      <section
        className="relative overflow-hidden py-14 px-6"
        style={{ background: "linear-gradient(160deg, #080810 0%, #0c0c14 50%, #090909 100%)" }}
      >
        {/* ── BACKGROUND BLOBS ── */}
        <div
          className="blob absolute top-[-8%] left-[-10%] w-[520px] h-[420px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(250,204,21,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="blob absolute bottom-[-10%] right-[-8%] w-[480px] h-[400px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(236,72,153,0.05) 0%, transparent 70%)",
            filter: "blur(60px)",
            animationDelay: "2.5s",
          }}
        />
        <div
          className="blob absolute top-[40%] left-[45%] w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(ellipse, rgba(59,130,246,0.04) 0%, transparent 70%)",
            filter: "blur(50px)",
            animationDelay: "1.2s",
          }}
        />

        {/* ── GRID TEXTURE OVERLAY ── */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(250,204,21,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto">

          {/* ── EYEBROW ── */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="flex items-center gap-3 mb-4"
          >
            <span
              className="inline-flex items-center gap-2 text-[0.7rem] font-700 uppercase tracking-[0.28em] px-4 py-1.5 rounded-full"
              style={{
                fontFamily: "'Rajdhani', sans-serif",
                fontWeight: 700,
                border: "1px solid rgba(250,204,21,0.2)",
                background: "rgba(250,204,21,0.05)",
                color: "rgba(250,204,21,0.75)",
                letterSpacing: "0.28em",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "#facc15", boxShadow: "0 0 8px #facc15" }}
              />
              Est. 2013 · Kolkata
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

            {/* ══ LEFT CONTENT ══ */}
            <div>
              {/* Heading */}
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
                className="about-heading text-[2.6rem] md:text-[3.4rem] xl:text-[3.8rem] font-bold text-white mb-2 leading-[1.1]"
              >
                About
              </motion.h2>
              <motion.h2
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1.5}
                className="about-heading text-[2.6rem] md:text-[3.4rem] xl:text-[3.8rem] font-bold mb-8"
              >
                <span className="gradient-name">M N Graphic</span>
              </motion.h2>

              <div className="divider-line mb-8 w-24" />

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
                className="about-body text-gray-400 mb-5 leading-[1.85] text-[1rem]"
              >
                M N Graphic Vinyl Cutting is a trusted vinyl cutting and signage
                service provider in Kolkata. Located at{" "}
                <span style={{ color: "rgba(250,204,21,0.7)" }}>
                  45, Bepin Behari Ganguly Street, Lal Bazar, Kolkata – 700012
                </span>
                , we deliver professional and affordable branding solutions for
                businesses of all sizes.
              </motion.p>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2.5}
                className="about-body text-gray-400 mb-10 leading-[1.85] text-[1rem]"
              >
                We specialize in shop name boards, glass branding, wall graphics,
                vehicle stickers, acrylic letters, neon signs, and custom vinyl
                designs — clean, precise, long-lasting, and delivered on time.
              </motion.p>

              {/* Feature Cards */}
              <div className="grid grid-cols-2 gap-4">
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={3 + i * 0.15}
                  >
                    <div
                      className="feature-card rounded-xl p-5 h-full cursor-default"
                      style={{ "--glow": f.glow } as React.CSSProperties}
                    >
                      {/* Hover glow */}
                      <div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                        style={{
                          background: `radial-gradient(ellipse at 50% 0%, ${f.glow} 0%, transparent 70%)`,
                        }}
                      />

                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 flex-shrink-0"
                        style={{
                          background: "rgba(250,204,21,0.06)",
                          border: "1px solid rgba(250,204,21,0.14)",
                          color: "#facc15",
                          boxShadow: "0 0 12px rgba(250,204,21,0.06)",
                        }}
                      >
                        {f.icon}
                      </div>

                      <h4
                        className="card-label text-[0.88rem] font-700 mb-1.5"
                        style={{ color: "#facc15", fontWeight: 700 }}
                      >
                        {f.title}
                      </h4>
                      <p
                        className="about-body text-[0.78rem] leading-[1.65]"
                        style={{ color: "rgba(156,163,175,0.85)" }}
                      >
                        {f.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* ══ RIGHT IMAGE ══ */}
            <motion.div
              ref={imageRef}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              className="relative flex justify-center"
            >
              {/* Decorative ring */}
              <div
                className="ring-spin absolute -top-8 -right-8 w-56 h-56 rounded-full pointer-events-none opacity-20"
                style={{
                  border: "1px dashed rgba(250,204,21,0.5)",
                }}
              />

              {/* Glow behind image */}
              <div
                className="absolute inset-[-8%] rounded-[32px] pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 50%, rgba(250,204,21,0.08) 0%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />

              {/* Image */}
              <motion.div style={{ y: imageY }} className="w-full image-frame">
                <Image
                  src="/about.jpeg"
                  alt="Printing and Vinyl Cutting Services in Kolkata"
                  width={600}
                  height={500}
                  className="w-full h-full object-cover"
                  style={{ borderRadius: "24px", display: "block" }}
                />

                {/* Dark vignette overlay */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    borderRadius: "24px",
                    background:
                      "linear-gradient(180deg, transparent 55%, rgba(8,8,16,0.55) 100%)",
                  }}
                />
              </motion.div>

              {/* ── EXPERIENCE BADGE ── */}
              <div
                className="badge-float absolute -bottom-5 -left-5 flex items-center gap-3 px-5 py-3.5 rounded-2xl select-none"
                style={{
                  background: "linear-gradient(135deg, #facc15 0%, #fbbf24 60%, #d97706 100%)",
                  boxShadow:
                    "0 8px 32px rgba(250,204,21,0.35), 0 2px 8px rgba(0,0,0,0.4)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(0,0,0,0.15)" }}
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 text-black">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                  </svg>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'Rajdhani', sans-serif",
                      fontWeight: 800,
                      fontSize: "1.3rem",
                      color: "#0c0c0c",
                      lineHeight: 1,
                    }}
                  >
                    10+ Years
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontWeight: 500,
                      fontSize: "0.68rem",
                      color: "rgba(0,0,0,0.65)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    of Experience
                  </div>
                </div>
              </div>

              {/* ── STATS PILL ── */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
                className="absolute top-6 -right-4 flex items-center gap-3 px-4 py-3 rounded-xl"
                style={{
                  background: "rgba(12,12,20,0.88)",
                  border: "1px solid rgba(250,204,21,0.15)",
                  backdropFilter: "blur(20px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.5)",
                }}
              >
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: "#4ade80", boxShadow: "0 0 8px #4ade80" }}
                />
                <div>
                  <div
                    style={{
                      fontFamily: "'Rajdhani', sans-serif",
                      fontWeight: 700,
                      fontSize: "1.1rem",
                      color: "#facc15",
                      lineHeight: 1,
                    }}
                  >
                    500+
                  </div>
                  <div
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.65rem",
                      color: "rgba(156,163,175,0.8)",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                    }}
                  >
                    Projects Done
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}