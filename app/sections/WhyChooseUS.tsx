"use client";

import { motion, useMotionValue, useTransform, useSpring, cubicBezier } from "framer-motion";
import { ShieldCheck, Clock, Award, Users } from "lucide-react";
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
    <motion.div ref={ref} onMouseMove={handleMove} onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 900 }}
      className="h-full">
      {children}
    </motion.div>
  );
}

const features = [
  {
    icon: Award,
    title: "Premium Quality",
    subtitle: "Materials",
    description:
      "High-grade vinyl, eco-solvent ink, and durable materials ensure every signage solution stands the test of time.",
    accent: "#facc15",
    tag: "Grade A",
  },
  {
    icon: Clock,
    title: "On-Time",
    subtitle: "Delivery",
    description:
      "Fast, reliable turnaround for every printing and vinyl cutting project — across Kolkata, without compromise.",
    accent: "#3b82f6",
    tag: "Always Punctual",
  },
  {
    icon: ShieldCheck,
    title: "Trusted &",
    subtitle: "Reliable",
    description:
      "M.N. Graphics is the trusted choice of 100+ local businesses for professional printing and signage excellence.",
    accent: "#22c55e",
    tag: "100+ Clients",
  },
  {
    icon: Users,
    title: "Customized",
    subtitle: "Solutions",
    description:
      "Tailored signage, flex printing, and steel letter designs crafted precisely around your brand identity.",
    accent: "#a855f7",
    tag: "Bespoke Design",
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

export default function WhyChooseUs() {
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
        @keyframes scanline {
          0%   { transform: translateY(-100%); }
          100% { transform: translateY(100vh); }
        }
        @keyframes iconOrbit {
          0%, 100% { box-shadow: 0 0 0 0 rgba(250,204,21,0); }
          50%       { box-shadow: 0 0 0 8px rgba(250,204,21,0.07); }
        }
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-5px); }
        }

        .wcu-heading {
          font-family: 'Orbitron', sans-serif;
          font-weight: 800;
          background: linear-gradient(90deg, #b45309 0%, #facc15 22%, #fef08a 45%, #facc15 68%, #ca8a04 88%, #facc15 100%);
          background-size: 260% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 5.5s linear infinite;
        }
        .wcu-label { font-family: 'Rajdhani', sans-serif; font-weight: 700; }
        .wcu-body  { font-family: 'Inter', sans-serif; }

        .wcu-badge {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          letter-spacing: 0.22em;
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(18px) saturate(150%);
          -webkit-backdrop-filter: blur(18px) saturate(150%);
          border: 1px solid rgba(250,204,21,0.18);
        }

        .wcu-card {
          background: rgba(255,255,255,0.024);
          backdrop-filter: blur(22px) saturate(160%);
          -webkit-backdrop-filter: blur(22px) saturate(160%);
          border: 1px solid rgba(255,255,255,0.065);
          transition: border-color 0.32s ease, box-shadow 0.32s ease;
        }

        .wcu-underline {
          height: 2px;
          background: linear-gradient(90deg, transparent, #22c55e, #facc15, #fef08a, #facc15, #a855f7, transparent);
          background-size: 300% auto;
          animation: underlineFlow 4.5s linear infinite, neonPulse 3s ease-in-out infinite;
          border-radius: 2px;
        }

        .wcu-grain {
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
          animation: grain 0.85s steps(1) infinite;
          opacity: 0.022;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 182px 182px;
        }

        .wcu-scanline {
          position: absolute; left: 0; right: 0;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(250,204,21,0.03), transparent);
          animation: scanline 16s linear infinite;
          pointer-events: none; z-index: 1;
        }

        .wcu-particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: floatUp linear infinite;
        }

        .wcu-icon-pulse {
          animation: iconOrbit 2.8s ease-in-out infinite;
        }

        .wcu-card-float {
          animation: cardFloat 5s ease-in-out infinite;
        }
        .wcu-card-float:nth-child(2) { animation-delay: 0.8s; }
        .wcu-card-float:nth-child(3) { animation-delay: 1.6s; }
        .wcu-card-float:nth-child(4) { animation-delay: 2.4s; }
      `}</style>

      <section
        className="relative  overflow-hidden"
        style={{
          background: "linear-gradient(155deg, #060609 0%, #09090f 32%, #0b0a13 62%, #07070c 100%)",
        }}
      >
        {/* Grain & scanline */}
        <div className="wcu-grain" />
        <div className="wcu-scanline" />

        {/* ── AMBIENT BLOBS ── */}
        <div className="absolute pointer-events-none"
          style={{ top: "-12%", right: "-6%", width: 580, height: 500,
            background: "radial-gradient(ellipse, rgba(250,204,21,0.065) 0%, transparent 68%)",
            filter: "blur(76px)", animation: "neonPulse 7s ease-in-out infinite" }} />
        <div className="absolute pointer-events-none"
          style={{ bottom: "-10%", left: "-6%", width: 560, height: 470,
            background: "radial-gradient(ellipse, rgba(59,130,246,0.055) 0%, transparent 68%)",
            filter: "blur(72px)", animation: "neonPulse 5.5s ease-in-out infinite", animationDelay: "2s" }} />
        <div className="absolute pointer-events-none"
          style={{ top: "40%", left: "30%", width: 420, height: 360,
            background: "radial-gradient(ellipse, rgba(168,85,247,0.036) 0%, transparent 70%)",
            filter: "blur(62px)", animation: "neonPulse 9s ease-in-out infinite", animationDelay: "1.5s" }} />
        <div className="absolute pointer-events-none"
          style={{ top: "15%", left: "10%", width: 300, height: 280,
            background: "radial-gradient(ellipse, rgba(34,197,94,0.03) 0%, transparent 70%)",
            filter: "blur(50px)", animation: "neonPulse 6s ease-in-out infinite", animationDelay: "3s" }} />

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
          { left: "5%",  bottom: "13%", s: 3,  dur: "8s",   del: "0s",   c: "rgba(250,204,21,0.65)" },
          { left: "17%", bottom: "21%", s: 2,  dur: "10s",  del: "1.5s", c: "rgba(250,204,21,0.42)" },
          { left: "30%", bottom: "7%",  s: 4,  dur: "7.5s", del: "0.4s", c: "rgba(59,130,246,0.55)" },
          { left: "47%", bottom: "15%", s: 2,  dur: "12.5s",del: "3s",   c: "rgba(250,204,21,0.48)" },
          { left: "63%", bottom: "6%",  s: 3,  dur: "9s",   del: "0.2s", c: "rgba(168,85,247,0.52)" },
          { left: "77%", bottom: "23%", s: 2,  dur: "11s",  del: "1.2s", c: "rgba(250,204,21,0.38)" },
          { left: "90%", bottom: "10%", s: 3,  dur: "8.5s", del: "2.2s", c: "rgba(59,130,246,0.45)" },
          { left: "3%",  bottom: "42%", s: 2,  dur: "15s",  del: "4s",   c: "rgba(236,72,153,0.36)" },
          { left: "95%", bottom: "36%", s: 2,  dur: "9.5s", del: "0.7s", c: "rgba(250,204,21,0.5)" },
          { left: "52%", bottom: "48%", s: 2,  dur: "19s",  del: "5.5s", c: "rgba(168,85,247,0.28)" },
        ].map((p, i) => (
          <div key={i} className="wcu-particle"
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
              <span className="wcu-badge inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-[0.68rem] uppercase tracking-[0.26em]"
                style={{ color: "rgba(250,204,21,0.8)" }}>
                <span className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#facc15", boxShadow: "0 0 8px #facc15" }} />
                Why Choose Us
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2 variants={cardVariants}
              className="wcu-heading text-[2.4rem] md:text-[3.4rem] lg:text-[4rem] leading-[1.08] mb-6">
              Why Businesses Trust
              <br />
              M.N. Graphics.
            </motion.h2>

            {/* Underline */}
            <motion.div variants={cardVariants} className="flex justify-center mb-7">
              <div className="wcu-underline w-44" />
            </motion.div>

            <motion.p variants={cardVariants}
              className="wcu-body text-[1rem] leading-relaxed max-w-xl mx-auto"
              style={{ color: "rgba(156,163,175,0.82)" }}>
              Premium materials, expert craftsmanship, and timely delivery — engineered to make your brand impossible to ignore across Kolkata.
            </motion.p>
          </motion.div>

          {/* ── FEATURE CARDS ── */}
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={containerVariants}
          >
            {features.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <motion.div key={idx} variants={cardVariants} className={`group wcu-card-float`} style={{ animationDelay: `${idx * 0.8}s` }}>
                  <TiltCard>
                    <div
                      className="wcu-card rounded-2xl p-7 h-full flex flex-col items-center text-center"
                      style={{ transformStyle: "preserve-3d" }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = `${feature.accent}42`;
                        el.style.boxShadow = `0 0 0 1px ${feature.accent}1c, 0 24px 64px rgba(0,0,0,0.65), 0 0 44px ${feature.accent}18`;
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = "rgba(255,255,255,0.065)";
                        el.style.boxShadow = "none";
                      }}
                    >
                      {/* Hover top glow */}
                      <div className="absolute top-0 left-0 right-0 h-20 rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                        style={{
                          background: `radial-gradient(ellipse at 50% 0%, ${feature.accent}18 0%, transparent 70%)`,
                        }}
                      />

                      {/* Icon */}
                      <div
                        className="wcu-icon-pulse relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background: `rgba(255,255,255,0.04)`,
                          border: `1px solid ${feature.accent}40`,
                          boxShadow: `0 0 20px ${feature.accent}18, 0 4px 16px rgba(0,0,0,0.4)`,
                          color: feature.accent,
                          transform: "translateZ(14px)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 28px ${feature.accent}45, 0 4px 16px rgba(0,0,0,0.4)`;
                          (e.currentTarget as HTMLElement).style.borderColor = `${feature.accent}70`;
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.boxShadow = `0 0 20px ${feature.accent}18, 0 4px 16px rgba(0,0,0,0.4)`;
                          (e.currentTarget as HTMLElement).style.borderColor = `${feature.accent}40`;
                        }}
                      >
                        <Icon size={26} />
                        {/* Corner glow */}
                        <div className="absolute top-0 right-0 w-6 h-6 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                          style={{ background: `radial-gradient(ellipse at 100% 0%, ${feature.accent}40 0%, transparent 70%)` }} />
                      </div>

                      {/* Tag pill */}
                      <span
                        className="wcu-label text-[0.58rem] uppercase tracking-[0.18em] px-2.5 py-0.5 rounded-full mb-4"
                        style={{
                          background: `${feature.accent}12`,
                          border: `1px solid ${feature.accent}32`,
                          color: feature.accent,
                        }}
                      >
                        {feature.tag}
                      </span>

                      {/* Title */}
                      <div className="mb-3" style={{ transform: "translateZ(8px)" }}>
                        <h3 className="wcu-label text-[1.05rem] text-white uppercase tracking-[0.07em] leading-tight">
                          {feature.title}
                          <br />
                          <span style={{ color: feature.accent }}>{feature.subtitle}</span>
                        </h3>
                      </div>

                      {/* Accent bar */}
                      <div
                        className="h-[1.5px] w-8 mb-4 rounded-full transition-all duration-500 group-hover:w-16"
                        style={{
                          background: `linear-gradient(90deg, ${feature.accent}, rgba(250,204,21,0.3))`,
                          boxShadow: `0 0 5px ${feature.accent}55`,
                        }}
                      />

                      {/* Description */}
                      <p className="wcu-body text-[0.8rem] leading-[1.72] flex-grow"
                        style={{ color: "rgba(156,163,175,0.78)" }}>
                        {feature.description}
                      </p>
                    </div>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </section>
    </>
  );
}