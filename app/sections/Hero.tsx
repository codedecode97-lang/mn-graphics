"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronDown, MapPin } from "lucide-react";
import hero1 from "@/app/assets/cutting.png";
import hero2 from "@/app/assets/ecosolvent.png";
import hero3 from "@/app/assets/ledsignage.png";
import hero4 from "@/app/assets/steel.png";
/* ─────────────────────────────────────────────
   SLIDE DATA
───────────────────────────────────────────── */
const slides = [
  {
    id: 0,
    badge: "LED & Illuminated Signage · Kolkata",
    headline: "Premium LED Signage Solutions",
    sub: "We design and install durable illuminated signage that enhances brand visibility and ensures strong presence day and night.",
    img: hero3,
    accentRgb: "250, 204, 21",
  },
  {
    id: 1,
    badge: "Custom Steel & Acrylic Letters",
    headline: "Precision-Crafted Steel & Acrylic Lettering",
    sub: "High-quality stainless steel and acrylic letters manufactured with attention to detail for retail, corporate, and commercial spaces.",
    img: hero4,
    accentRgb: "226, 232, 240",
  },
  {
    id: 2,
    badge: "Eco Solvent & Flex Printing",
    headline: "Reliable Large Format Printing Services",
    sub: "Using advanced HP Latex technology, we deliver sharp, weather-resistant banners, flex prints, and promotional displays across Kolkata.",
    img: hero2,
    accentRgb: "134, 239, 172",
  },
  {
    id: 3,
    badge: "Vinyl Cutting & Vehicle Branding",
    headline: "Expert Vinyl Cutting & Vehicle Branding",
    sub: "Custom vinyl graphics for shops, offices, and vehicles — installed with precision to create clean and professional branding impact.",
    img: hero1,
    accentRgb: "251, 191, 36",
  },
];
const SLIDE_INTERVAL = 5500;
const TICK = 50;

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0,  transition: { duration: 0.72, ease: [0.22, 1, 0.36, 1], delay } },
  exit:    { opacity: 0, y: -16, transition: { duration: 0.38, ease: "easeIn" } },
});

const scaleIn = (delay = 0) => ({
  hidden:  { opacity: 0, scale: 0.91 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay } },
  exit:    { opacity: 0, scale: 0.97, transition: { duration: 0.28 } },
});

/* ─────────────────────────────────────────────
   COMPONENT
───────────────────────────────────────────── */
export default function HeroSection() {
  const [current, setCurrent]   = useState(0);
  const [progress, setProgress] = useState(0);
  const slideRef    = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const slide = slides[current];

  const clearAll = () => {
    if (slideRef.current)    clearInterval(slideRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
  };

  const startTimers = useCallback(() => {
    clearAll();
    setProgress(0);
    progressRef.current = setInterval(() => {
      setProgress(p => Math.min(p + (TICK / SLIDE_INTERVAL) * 100, 100));
    }, TICK);
    slideRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
      setProgress(0);
    }, SLIDE_INTERVAL);
  }, []);

  useEffect(() => { startTimers(); return clearAll; }, [startTimers]);

  const goTo = (i: number) => {
    clearAll(); setCurrent(i); setProgress(0); startTimers();
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;800;900&family=Rajdhani:wght@500;600;700&display=swap');

        /* ---------- keyframes ---------- */
        @keyframes goldShimmer {
          0%   { background-position: -220% center; }
          100% { background-position:  220% center; }
        }
        @keyframes kenBurns {
          0%   { transform: scale(1.0) translate(0, 0); }
          100% { transform: scale(1.08) translate(-1%, -0.6%); }
        }
        @keyframes floatRise {
          0%   { transform: translateY(0)   scale(1);    opacity: 0; }
          10%  { opacity: 0.85; }
          85%  { opacity: 0.5; }
          100% { transform: translateY(-160px) scale(0.4); opacity: 0; }
        }
        @keyframes scrollPulse {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(7px); }
        }
        @keyframes dotGlow {
          0%, 100% { opacity: 0.7; }
          50%       { opacity: 1; }
        }
        @keyframes grain {
          0%   { transform: translate(0, 0); }
          33%  { transform: translate(-1px, 1px); }
          66%  { transform: translate(1px, -1px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes softGlow {
          0%, 100% { opacity: 0.55; transform: scale(1); }
          50%       { opacity: 0.75; transform: scale(1.04); }
        }

        /* ---------- base ---------- */
        .hero-root {
          position: relative;
          width: 100%;
          height: 100svh;
          min-height: 620px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Ken-Burns wrapper */
        .hero-img-motion {
          width: 100%; height: 100%;
          animation: kenBurns 7s ease-out forwards;
          will-change: transform;
        }

        /* Grain — just adds micro-texture, no darkness */
        .hero-grain {
          position: absolute; inset: 0; z-index: 3; pointer-events: none;
          animation: grain 0.9s steps(1) infinite;
          opacity: 0.016;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 160px 160px;
        }

        /* Floating particle */
        .hero-particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: floatRise linear infinite;
          z-index: 5;
        }

        /* ── Gold shimmer heading ── */
        .gold-text {
          font-family: 'Orbitron', sans-serif;
          font-weight: 900;
          line-height: 1.06;
          letter-spacing: -0.015em;
          background: linear-gradient(90deg,
            #92400e 0%,
            #d97706 15%,
            #facc15 30%,
            #fef08a 50%,
            #facc15 70%,
            #d97706 85%,
            #92400e 100%
          );
          background-size: 240% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: goldShimmer 5.5s linear infinite;
          /* subtle text shadow for brightness pop */
          filter: drop-shadow(0 0 20px rgba(250,204,21,0.35));
        }

        /* ── Fonts ── */
        .f-rajdhani { font-family: 'Rajdhani', sans-serif; }
        .f-orbitron  { font-family: 'Orbitron', sans-serif; }

        /* ── Primary CTA: gold ── */
        .cta-gold {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-size: 0.82rem;
          color: #0a0800;
          background: linear-gradient(90deg,
            #ca8a04 0%, #facc15 35%, #fef08a 55%, #facc15 75%, #ca8a04 100%
          );
          background-size: 270% auto;
          animation: goldShimmer 4s linear infinite;
          border-radius: 9999px;
          padding: 14px 34px;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          box-shadow: 0 0 18px rgba(250,204,21,0.5), 0 4px 20px rgba(0,0,0,0.22);
          transition: transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease;
          cursor: pointer;
        }
        .cta-gold:hover {
          transform: scale(1.06) translateY(-3px);
          box-shadow: 0 0 32px rgba(250,204,21,0.75), 0 8px 28px rgba(0,0,0,0.3);
        }

        /* ── Secondary CTA: glass ── */
        .cta-glass {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          font-size: 0.82rem;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.14);
          backdrop-filter: blur(20px) saturate(150%);
          -webkit-backdrop-filter: blur(20px) saturate(150%);
          border: 1.5px solid rgba(255,255,255,0.38);
          border-radius: 9999px;
          padding: 13px 30px;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          transition: background 0.3s ease, border-color 0.3s ease,
                      color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
        }
        .cta-glass:hover {
          background: rgba(255,255,255,0.22);
          border-color: rgba(250,204,21,0.55);
          color: #facc15;
          transform: translateY(-3px);
          box-shadow: 0 0 20px rgba(250,204,21,0.22);
        }

        /* ── Badge ── */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 7px 18px;
          background: rgba(255,255,255,0.15);
          backdrop-filter: blur(18px) saturate(160%);
          -webkit-backdrop-filter: blur(18px) saturate(160%);
          border: 1.5px solid rgba(255,255,255,0.35);
          border-radius: 9999px;
        }

        /* ── Dot nav ── */
        .dot-wrap {
          border-radius: 9999px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          background: rgba(255,255,255,0.22);
          border: 1px solid rgba(255,255,255,0.3);
          transition: width 0.42s cubic-bezier(0.22,1,0.36,1);
        }
        .dot-bar {
          position: absolute; inset-y: 0; left: 0;
          border-radius: 9999px;
          transition: width 0.05s linear;
          animation: dotGlow 1.6s ease-in-out infinite;
        }

        /* ── Scroll bounce ── */
        .scroll-anim { animation: scrollPulse 2.1s ease-in-out infinite; }

        /* ── Soft glow blob behind heading ── */
        .heading-glow {
          animation: softGlow 5s ease-in-out infinite;
        }
      `}</style>

      <section className="hero-root">

        {/* ══ BACKGROUND IMAGES — crossfade ══ */}
        <AnimatePresence>
          <motion.div
            key={`bg-${slide.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute inset-0 z-0"
          >
            <div className="hero-img-motion">
              <Image
                src={slide.img}
                alt={slide.badge}
                fill priority
                className="object-cover"
                sizes="100vw"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ══ OVERLAY — light touches only ══ */}

        {/* 1. Soft center vignette (keeps edges dark, center bright) */}
        <div className="absolute inset-0 z-1 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse 85% 75% at 50% 48%, rgba(0,0,0,0) 28%, rgba(0,0,0,0.32) 100%)",
          }}
        />

        {/* 2. Bottom gradient — ensures nav dots / address are readable */}
        <div className="absolute bottom-0 left-0 right-0 h-44 z-1 pointer-events-none"
          style={{ background: "linear-gradient(to top, rgba(0,0,0,0.42) 0%, transparent 100%)" }}
        />

        {/* 3. Top strip — nav bar readability */}
        <div className="absolute top-0 left-0 right-0 h-28 z-1 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, transparent 100%)" }}
        />

        {/* 4. Very soft center darkening behind text — NOT a global overlay */}
        <div className="absolute z-1 pointer-events-none"
          style={{
            top: "50%", left: "50%",
            transform: "translate(-50%, -50%)",
            width: "72vw", height: "52vh",
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.28) 0%, transparent 70%)",
            filter: "blur(24px)",
          }}
        />

        {/* 5. Slide-accent tint — very gentle color cast */}
        <AnimatePresence>
          <motion.div
            key={`tint-${slide.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.06 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 z-1 pointer-events-none"
            style={{
              background: `rgba(${slide.accentRgb}, 1)`,
              mixBlendMode: "overlay",
            }}
          />
        </AnimatePresence>

        {/* Grain */}
        <div className="hero-grain" />

        {/* ══ PARTICLES ══ */}
        {[
          { l: "10%", b: "20%", s: 2, d: "11s",  del: "0s",   c: "rgba(250,204,21,0.65)" },
          { l: "26%", b: "10%", s: 2, d: "15s",  del: "2.2s", c: "rgba(255,255,255,0.45)" },
          { l: "55%", b: "6%",  s: 3, d: "9.5s", del: "0.6s", c: "rgba(250,204,21,0.5)" },
          { l: "74%", b: "18%", s: 2, d: "13s",  del: "1.8s", c: "rgba(255,255,255,0.38)" },
          { l: "88%", b: "12%", s: 2, d: "12s",  del: "3.5s", c: "rgba(250,204,21,0.42)" },
          { l: "4%",  b: "38%", s: 2, d: "17s",  del: "4.5s", c: "rgba(255,255,255,0.3)" },
        ].map((p, i) => (
          <div key={i} className="hero-particle"
            style={{
              left: p.l, bottom: p.b,
              width: p.s, height: p.s,
              background: p.c,
              boxShadow: `0 0 ${p.s * 5}px ${p.c}`,
              animationDuration: p.d,
              animationDelay: p.del,
            }}
          />
        ))}

        {/* ══ SUBTLE GLOW BEHIND HEADING ══ */}
        <AnimatePresence>
          <motion.div
            key={`glow-${slide.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.2 }}
            className="absolute z-2 pointer-events-none heading-glow"
            style={{
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60vw", height: "36vh",
              background: `radial-gradient(ellipse at center, rgba(${slide.accentRgb}, 0.18) 0%, transparent 65%)`,
              filter: "blur(50px)",
            }}
          />
        </AnimatePresence>

        {/* ══════════════════════════════════════
            CENTERED MAIN CONTENT
        ══════════════════════════════════════ */}
        <div className="relative z-10 w-full flex flex-col items-center justify-center text-center px-5 sm:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={`content-${slide.id}`}
              className="flex flex-col items-center gap-6 w-full max-w-[720px] mx-auto"
            >

              {/* ── Badge ── */}
              <motion.div
                variants={scaleIn(0)}
                initial="hidden" animate="visible" exit="exit"
              >
                <div className="hero-badge">
                  <span
                    className="w-2 h-2 rounded-full flex-shrink-0"
                    style={{
                      background: `rgba(${slide.accentRgb},1)`,
                      boxShadow: `0 0 10px rgba(${slide.accentRgb},0.9)`,
                    }}
                  />
                  <span
                    className="f-rajdhani text-[0.66rem] font-700 uppercase tracking-[0.24em] text-white"
                  >
                    {slide.badge}
                  </span>
                </div>
              </motion.div>

              {/* ── Heading ── */}
              <motion.div
                variants={fadeUp(0.1)}
                initial="hidden" animate="visible" exit="exit"
                className="w-full"
              >
                <h1 className="gold-text text-[2.35rem] sm:text-[3.1rem] lg:text-[3.9rem] xl:text-[4.5rem]">
                  {slide.headline}
                </h1>
              </motion.div>

              {/* ── Sub ── */}
              <motion.p
                variants={fadeUp(0.26)}
                initial="hidden" animate="visible" exit="exit"
                className="f-rajdhani font-500 text-[1rem] sm:text-[1.1rem] leading-[1.75] max-w-[560px] text-white"
                style={{ textShadow: "0 1px 10px rgba(0,0,0,0.7)" }}
              >
                {slide.sub}
              </motion.p>

              {/* ── CTAs ── */}
              <motion.div
                variants={scaleIn(0.42)}
                initial="hidden" animate="visible" exit="exit"
                className="flex flex-wrap justify-center gap-4 pt-1"
              >
                <Link href="/contact" className="cta-gold">
                  Get Free Quote
                  <ArrowRight size={15} strokeWidth={2.5} />
                </Link>
                <Link href="/gallery" className="cta-glass">
                  View Our Work
                  <ArrowRight size={15} strokeWidth={2} />
                </Link>
              </motion.div>

            </motion.div>
          </AnimatePresence>
        </div>

        {/* ══ BOTTOM CONTROLS ══ */}
        <div className="absolute bottom-8 left-0 right-0 z-10 flex flex-col items-center gap-5">

          {/* Progress dots */}
          <div className="flex items-center gap-2.5">
            {slides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                className="dot-wrap"
                style={{
                  width: i === current ? 50 : 10,
                  height: 10,
                  opacity: i === current ? 1 : 0.5,
                }}
              >
                {i === current && (
                  <div
                    className="dot-bar"
                    style={{
                      width: `${progress}%`,
                      background: `linear-gradient(90deg, rgba(${slide.accentRgb},1), #fff)`,
                      boxShadow: `0 0 6px rgba(${slide.accentRgb},0.9)`,
                    }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="scroll-anim flex flex-col items-center gap-1.5 opacity-75">
            <div className="w-px h-7"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.7), transparent)" }} />
            <ChevronDown size={15} color="rgba(255,255,255,0.75)" />
          </div>
        </div>

        {/* ══ BOTTOM-LEFT: address ══ */}
        <div
          className="absolute bottom-9 left-6 lg:left-10 z-10 hidden sm:flex items-center gap-2"
          style={{
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(255,255,255,0.28)",
            borderRadius: "9999px",
            padding: "6px 16px",
          }}
        >
          <MapPin size={11} color="rgba(255,255,255,0.7)" />
          <span className="f-rajdhani font-600 text-[0.64rem] tracking-[0.06em] text-white/80">
            45, B. Ganguly Street · Kolkata 700012
          </span>
        </div>

        {/* ══ BOTTOM-RIGHT: counter ══ */}
        <div
          className="absolute bottom-[38px] right-6 lg:right-10 z-10 hidden sm:flex items-center gap-1.5"
          style={{ fontFamily: "'Orbitron', sans-serif", fontWeight: 700 }}
        >
          <span className="text-[1rem] text-white/90" style={{ lineHeight: 1 }}>
            {String(current + 1).padStart(2, "0")}
          </span>
          <span className="text-[0.6rem] text-white/45 tracking-widest">
            / {String(slides.length).padStart(2, "0")}
          </span>
        </div>

      </section>
    </>
  );
}