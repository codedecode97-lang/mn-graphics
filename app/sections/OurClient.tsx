"use client";

import { motion, useMotionValue, useTransform, useSpring, useInView, cubicBezier } from "framer-motion";
import { Star, CheckCircle2 } from "lucide-react";
import { useRef, useEffect, useState } from "react";

/* ── 3D Tilt Card ── */
function TiltCard({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [6, -6]), { stiffness: 260, damping: 26 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-6, 6]), { stiffness: 260, damping: 26 });
  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleLeave = () => { x.set(0); y.set(0); };
  return (
    <motion.div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 900 }}
      className="h-full">
      {children}
    </motion.div>
  );
}

/* ── Animated Counter ── */
function Counter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const clients = [
  {
    id: 1,
    name: "HP",
    fullName: "Hewlett-Packard",
    category: "Technology & Printing",
    description: "Premium printing solutions and branded signage for HP's global brand excellence across regional offices.",
    icon: "🖨️",
    accent: "#3b82f6",
    testimonial: "Professional quality and timely delivery on every project.",
  },
  {
    id: 2,
    name: "SBI",
    fullName: "State Bank of India",
    category: "Banking & Finance",
    description: "Corporate branding, wayfinding signage, and interior graphics for banking excellence across branches.",
    icon: "🏦",
    accent: "#22c55e",
    testimonial: "Exceptional attention to detail and consistent service.",
  },
  {
    id: 3,
    name: "VIKRAM",
    fullName: "Vikram Enterprises",
    category: "Enterprise Solutions",
    description: "Comprehensive branding, large-format printing, and fabrication solutions for enterprise-scale operations.",
    icon: "⚙️",
    accent: "#a855f7",
    testimonial: "Reliable long-term partner for brand visibility.",
  },
];

const metrics = [
  { value: 500, suffix: "+", label: "Successful Projects" },
  { value: 15,  suffix: "+", label: "Years Experience" },
  { value: 99,  suffix: "%", label: "Client Satisfaction" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 44 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: cubicBezier(0.22, 1, 0.36, 1) } },
};

export default function OurClients() {
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
        @keyframes ctaGlow {
          0%, 100% { box-shadow: 0 0 12px rgba(250,204,21,0.45), 0 0 28px rgba(250,204,21,0.18); }
          50%       { box-shadow: 0 0 22px rgba(250,204,21,0.75), 0 0 48px rgba(250,204,21,0.3); }
        }
        @keyframes iconPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(250,204,21,0); }
          50%       { box-shadow: 0 0 0 8px rgba(250,204,21,0.08); }
        }
        @keyframes starGlow {
          0%, 100% { filter: drop-shadow(0 0 2px rgba(250,204,21,0.5)); }
          50%       { filter: drop-shadow(0 0 6px rgba(250,204,21,0.9)); }
        }
        @keyframes borderSpin {
          0%   { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
        @keyframes metricFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-4px); }
        }

        .oc-heading {
          font-family: 'Orbitron', sans-serif;
          font-weight: 800;
          background: linear-gradient(90deg, #b45309 0%, #facc15 22%, #fef08a 45%, #facc15 68%, #ca8a04 88%, #facc15 100%);
          background-size: 260% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 5.5s linear infinite;
        }
        .oc-label { font-family: 'Rajdhani', sans-serif; font-weight: 700; }
        .oc-body  { font-family: 'Inter', sans-serif; }

        .oc-badge {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          letter-spacing: 0.22em;
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(18px) saturate(150%);
          -webkit-backdrop-filter: blur(18px) saturate(150%);
          border: 1px solid rgba(250,204,21,0.18);
        }

        .oc-card {
          background: rgba(255,255,255,0.024);
          backdrop-filter: blur(22px) saturate(160%);
          -webkit-backdrop-filter: blur(22px) saturate(160%);
          border: 1px solid rgba(255,255,255,0.065);
          transition: border-color 0.32s ease, box-shadow 0.32s ease;
        }

        .oc-underline {
          height: 2px;
          background: linear-gradient(90deg, transparent, #a855f7, #facc15, #fef08a, #facc15, #22c55e, transparent);
          background-size: 300% auto;
          animation: underlineFlow 4.5s linear infinite, neonPulse 3s ease-in-out infinite;
          border-radius: 2px;
        }

        .oc-grain {
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
          animation: grain 0.85s steps(1) infinite;
          opacity: 0.022;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px 180px;
        }

        .oc-scanline {
          position: absolute; left: 0; right: 0;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(250,204,21,0.032), transparent);
          animation: scanline 17s linear infinite;
          pointer-events: none; z-index: 1;
        }

        .oc-particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: floatUp linear infinite;
        }

        .oc-icon-wrap {
          animation: iconPulse 2.5s ease-in-out infinite;
        }

        .oc-star {
          animation: starGlow 2s ease-in-out infinite;
        }

        .oc-cta {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          font-size: 0.82rem;
          color: #08080c;
          background: linear-gradient(90deg, #ca8a04 0%, #facc15 35%, #fef08a 55%, #facc15 75%, #ca8a04 100%);
          background-size: 280% auto;
          animation: shimmer 4s linear infinite;
          box-shadow: 0 0 10px rgba(250,204,21,0.28), 0 2px 8px rgba(0,0,0,0.55);
          transition: transform 0.28s cubic-bezier(0.22,1,0.36,1);
        }
        .oc-cta:hover {
          transform: scale(1.045) translateY(-2px);
          animation: shimmer 4s linear infinite, ctaGlow 1.5s ease-in-out infinite;
        }

        .oc-metrics-box {
          background: rgba(255,255,255,0.024);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          border: 1px solid rgba(250,204,21,0.12);
          box-shadow: 0 0 60px rgba(250,204,21,0.04) inset, 0 20px 60px rgba(0,0,0,0.5);
          position: relative;
          overflow: hidden;
        }
        .oc-metrics-box::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(90deg, rgba(59,130,246,0.4), rgba(250,204,21,0.6), rgba(236,72,153,0.4), rgba(250,204,21,0.6), rgba(59,130,246,0.4));
          background-size: 400% auto;
          animation: borderSpin 6s linear infinite;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }

        .oc-metric-item {
          animation: metricFloat 4s ease-in-out infinite;
        }
        .oc-metric-item:nth-child(2) { animation-delay: 0.8s; }
        .oc-metric-item:nth-child(3) { animation-delay: 1.6s; }

        .oc-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
        }
      `}</style>

      <section
        className="relative  overflow-hidden"
        style={{
          background: "linear-gradient(158deg, #070709 0%, #09090f 35%, #0c0b14 65%, #07070b 100%)",
        }}
      >
        {/* Grain & scanline */}
        <div className="oc-grain" />
        <div className="oc-scanline" />

        {/* ── AMBIENT BLOBS ── */}
        <div className="absolute pointer-events-none"
          style={{ top: "-10%", left: "-7%", width: 580, height: 500,
            background: "radial-gradient(ellipse, rgba(250,204,21,0.065) 0%, transparent 68%)",
            filter: "blur(76px)", animation: "neonPulse 7s ease-in-out infinite" }} />
        <div className="absolute pointer-events-none"
          style={{ bottom: "-8%", right: "-5%", width: 560, height: 470,
            background: "radial-gradient(ellipse, rgba(59,130,246,0.055) 0%, transparent 68%)",
            filter: "blur(72px)", animation: "neonPulse 5.5s ease-in-out infinite", animationDelay: "2s" }} />
        <div className="absolute pointer-events-none"
          style={{ top: "35%", right: "15%", width: 380, height: 340,
            background: "radial-gradient(ellipse, rgba(168,85,247,0.038) 0%, transparent 70%)",
            filter: "blur(60px)", animation: "neonPulse 9s ease-in-out infinite", animationDelay: "1.5s" }} />
        <div className="absolute pointer-events-none"
          style={{ top: "60%", left: "20%", width: 320, height: 280,
            background: "radial-gradient(ellipse, rgba(34,197,94,0.03) 0%, transparent 70%)",
            filter: "blur(52px)", animation: "neonPulse 6s ease-in-out infinite", animationDelay: "3s" }} />

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
          { left: "6%",  bottom: "14%", s: 3,  dur: "8s",   del: "0s",   c: "rgba(250,204,21,0.65)" },
          { left: "18%", bottom: "22%", s: 2,  dur: "10.5s",del: "1.5s", c: "rgba(250,204,21,0.42)" },
          { left: "31%", bottom: "8%",  s: 4,  dur: "7.5s", del: "0.4s", c: "rgba(59,130,246,0.55)" },
          { left: "50%", bottom: "16%", s: 2,  dur: "12s",  del: "3s",   c: "rgba(250,204,21,0.48)" },
          { left: "64%", bottom: "6%",  s: 3,  dur: "9s",   del: "0.2s", c: "rgba(168,85,247,0.52)" },
          { left: "78%", bottom: "24%", s: 2,  dur: "11s",  del: "1.2s", c: "rgba(250,204,21,0.38)" },
          { left: "89%", bottom: "11%", s: 3,  dur: "8.5s", del: "2.2s", c: "rgba(59,130,246,0.45)" },
          { left: "3%",  bottom: "40%", s: 2,  dur: "16s",  del: "4s",   c: "rgba(236,72,153,0.36)" },
          { left: "95%", bottom: "34%", s: 2,  dur: "9.5s", del: "0.7s", c: "rgba(250,204,21,0.5)" },
          { left: "44%", bottom: "46%", s: 2,  dur: "20s",  del: "5.5s", c: "rgba(168,85,247,0.28)" },
        ].map((p, i) => (
          <div key={i} className="oc-particle"
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
              <span className="oc-badge inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-[0.68rem] uppercase tracking-[0.26em]"
                style={{ color: "rgba(250,204,21,0.8)" }}>
                <Star size={11} style={{ fill: "#facc15", color: "#facc15", filter: "drop-shadow(0 0 4px #facc15)" }} />
                Trusted By Brands
              </span>
            </motion.div>

            <motion.h2 variants={cardVariants}
              className="oc-heading text-[2.6rem] md:text-[3.6rem] lg:text-[4.2rem] leading-[1.06] mb-6">
              Our Valued
            
              Clients.
            </motion.h2>

            <motion.div variants={cardVariants} className="flex justify-center mb-7">
              <div className="oc-underline w-44" />
            </motion.div>

            <motion.p variants={cardVariants}
              className="oc-body text-[1rem] leading-relaxed max-w-xl mx-auto"
              style={{ color: "rgba(156,163,175,0.82)" }}>
              We partner with industry leaders to deliver exceptional printing and signage solutions that elevate brand presence across Kolkata and beyond.
            </motion.p>
          </motion.div>

          {/* ── CLIENT CARDS ── */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
          >
            {clients.map((client) => (
              <motion.div key={client.id} variants={cardVariants} className="group">
                <TiltCard>
                  <div
                    className="oc-card rounded-2xl overflow-hidden h-full flex flex-col"
                    style={{ transformStyle: "preserve-3d" }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = `${client.accent}42`;
                      el.style.boxShadow = `0 0 0 1px ${client.accent}1c, 0 24px 64px rgba(0,0,0,0.65), 0 0 44px ${client.accent}16`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "rgba(255,255,255,0.065)";
                      el.style.boxShadow = "none";
                    }}
                  >
                    {/* Top accent bar */}
                    <div className="h-[2px] w-full flex-shrink-0"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${client.accent}, rgba(250,204,21,0.6), ${client.accent}, transparent)`,
                        boxShadow: `0 0 8px ${client.accent}60`,
                      }}
                    />

                    <div className="p-7 flex flex-col flex-grow" style={{ transform: "translateZ(10px)" }}>

                      {/* Logo row */}
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-3.5">
                          {/* Icon */}
                          <div
                            className="oc-icon-wrap w-14 h-14 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                            style={{
                              background: `rgba(255,255,255,0.04)`,
                              border: `1px solid ${client.accent}40`,
                              boxShadow: `0 0 16px ${client.accent}20`,
                            }}
                          >
                            {client.icon}
                          </div>
                          <div>
                            <h3 className="oc-label text-[1.4rem] text-white uppercase tracking-[0.08em] leading-none mb-1">
                              {client.name}
                            </h3>
                            <p className="oc-body text-[0.68rem] uppercase tracking-[0.16em]"
                              style={{ color: "rgba(156,163,175,0.6)" }}>
                              {client.fullName}
                            </p>
                          </div>
                        </div>
                        <CheckCircle2
                          size={20}
                          style={{ color: client.accent, filter: `drop-shadow(0 0 4px ${client.accent})` }}
                        />
                      </div>

                      {/* Category badge */}
                      <div className="mb-4">
                        <span
                          className="oc-label text-[0.62rem] uppercase tracking-[0.16em] px-3 py-1 rounded-full"
                          style={{
                            background: `${client.accent}12`,
                            border: `1px solid ${client.accent}35`,
                            color: client.accent,
                          }}
                        >
                          {client.category}
                        </span>
                      </div>

                      {/* Description */}
                      <p className="oc-body text-[0.82rem] leading-[1.72] flex-grow mb-6"
                        style={{ color: "rgba(156,163,175,0.8)" }}>
                        {client.description}
                      </p>

                      {/* Divider */}
                      <div className="oc-divider mb-5" />

                      {/* Stars + Testimonial */}
                      <div className="flex items-start gap-3 mb-6">
                        <div className="flex gap-0.5 mt-0.5 flex-shrink-0">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={13}
                              className="oc-star"
                              style={{ fill: "#facc15", color: "#facc15", animationDelay: `${i * 0.15}s` }}
                            />
                          ))}
                        </div>
                        <p className="oc-body text-[0.78rem] italic leading-[1.6]"
                          style={{ color: "rgba(209,213,219,0.7)" }}>
                          "{client.testimonial}"
                        </p>
                      </div>

                      {/* CTA hover reveal */}
                      <motion.a
                        href="/contact"
                        className="block w-full text-center py-2.5 rounded-xl text-[0.75rem] uppercase tracking-[0.14em] opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-350 cursor-pointer"
                        style={{
                          fontFamily: "'Rajdhani', sans-serif",
                          fontWeight: 700,
                          background: `${client.accent}18`,
                          border: `1px solid ${client.accent}40`,
                          color: client.accent,
                          boxShadow: `0 0 0 0 ${client.accent}00`,
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.background = `${client.accent}28`;
                          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 18px ${client.accent}35`;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.background = `${client.accent}18`;
                          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 0 0 ${client.accent}00`;
                        }}
                      >
                        Learn More →
                      </motion.a>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </motion.div>

          {/* ── TRUST METRICS ── */}
          <motion.div
            className="oc-metrics-box rounded-2xl p-12 mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: cubicBezier(0.22, 1, 0.36, 1) }}
          >
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at 50% 0%, rgba(250,204,21,0.04) 0%, transparent 65%)",
              }}
            />
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
              {metrics.map((m, i) => (
                <div key={i} className="oc-metric-item text-center relative">
                  {i > 0 && (
                    <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-16"
                      style={{ background: "linear-gradient(180deg, transparent, rgba(250,204,21,0.2), transparent)" }} />
                  )}
                  <div className="oc-heading text-[3.2rem] md:text-[3.8rem] leading-none mb-2">
                    <Counter target={m.value} suffix={m.suffix} />
                  </div>
                  <p className="oc-label text-[0.75rem] uppercase tracking-[0.22em]"
                    style={{ color: "rgba(156,163,175,0.7)" }}>
                    {m.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

      
        </div>
      </section>
    </>
  );
}