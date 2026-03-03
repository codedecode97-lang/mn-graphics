"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MapPin, Mail, ArrowUp, MessageCircle } from "lucide-react";
import logo from "@/app/assets/logo.png";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  }),
};

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Vinyl Cutting in Kolkata", href: "/vinyl-cutting-kolkata" },
  { label: "Eco Solvent Printing", href: "/eco-solvent-printing-kolkata" },
  { label: "Steel Letter Signage", href: "/steel-letter-kolkata" },
  { label: "All Printing Services", href: "/services" },
];

const contactItems = [
  { icon: Phone, value: "9831016701", sub: "Call us anytime", href: "tel:9831016701", accent: "#facc15" },
  { icon: MapPin, value: "45, B. Ganguly Street", sub: "Kolkata – 700012, 2nd Floor", href: "https://maps.google.com/?q=45,B.Ganguly+Street,Kolkata-700012", accent: "#3b82f6" },
  { icon: Mail, value: "info@mngraphics.in", sub: "We reply within 24h", href: "mailto:info@mngraphics.in", accent: "#22c55e" },
];

export default function Footer() {
  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;800&family=Rajdhani:wght@600;700&family=Inter:wght@400;500&display=swap');

        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes neonFlow {
          0%   { background-position: 0% center; }
          100% { background-position: 300% center; }
        }
        @keyframes neonPulse {
          0%, 100% { opacity: 0.45; }
          50%       { opacity: 1; }
        }
        @keyframes floatUp {
          0%   { transform: translateY(0) scale(1); opacity: 0; }
          8%   { opacity: 1; }
          88%  { opacity: 0.45; }
          100% { transform: translateY(-110px) scale(0.5); opacity: 0; }
        }
        @keyframes grain {
          0%   { transform: translate(0, 0); }
          25%  { transform: translate(-2px, 2px); }
          50%  { transform: translate(2px, -2px); }
          75%  { transform: translate(-1px, 3px); }
          100% { transform: translate(0, 0); }
        }
        @keyframes ctaGlow {
          0%, 100% { box-shadow: 0 0 12px rgba(250,204,21,0.45), 0 0 28px rgba(250,204,21,0.18); }
          50%       { box-shadow: 0 0 22px rgba(250,204,21,0.75), 0 0 48px rgba(250,204,21,0.3); }
        }
        @keyframes waFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-5px); }
        }
        @keyframes iconPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(250,204,21,0); }
          50%       { box-shadow: 0 0 0 6px rgba(250,204,21,0.07); }
        }
        @keyframes topBorderFlow {
          0%   { background-position: 0% center; }
          100% { background-position: 300% center; }
        }
        @keyframes arrowPulse {
          0%, 100% { transform: translateY(0); }
          50%       { transform: translateY(-3px); }
        }

        .ft-logo {
          font-family: 'Orbitron', sans-serif;
          font-weight: 800;
          letter-spacing: 0.12em;
          background: linear-gradient(90deg, #ca8a04 0%, #facc15 28%, #fef08a 50%, #facc15 72%, #b45309 100%);
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 5s linear infinite;
        }
        .ft-logo:hover { filter: drop-shadow(0 0 12px rgba(250,204,21,0.8)); }

        .ft-col-head {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-size: 0.72rem;
          color: rgba(250,204,21,0.75);
          position: relative;
          display: inline-block;
        }
        .ft-col-head::after {
          content: '';
          position: absolute;
          bottom: -6px; left: 0;
          width: 100%;
          height: 1.5px;
          background: linear-gradient(90deg, #facc15, rgba(250,204,21,0.3), transparent);
          border-radius: 2px;
          box-shadow: 0 0 6px rgba(250,204,21,0.5);
        }

        .ft-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.85rem;
          font-weight: 500;
          color: rgba(156,163,175,0.8);
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 0;
          transition: color 0.25s ease, gap 0.25s ease;
        }
        .ft-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 1px;
          background: linear-gradient(90deg, #facc15, rgba(250,204,21,0.3));
          box-shadow: 0 0 5px rgba(250,204,21,0.6);
          transition: width 0.3s cubic-bezier(0.22,1,0.36,1);
          border-radius: 1px;
        }
        .ft-link:hover {
          color: #facc15;
          padding-left: 6px;
          transition: color 0.25s ease, padding-left 0.25s cubic-bezier(0.22,1,0.36,1);
        }
        .ft-link:hover::after { width: calc(100% - 6px); }

        .ft-body { font-family: 'Inter', sans-serif; }

        .ft-grain {
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
          animation: grain 0.85s steps(1) infinite;
          opacity: 0.02;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 180px 180px;
        }

        .ft-particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: floatUp linear infinite;
        }

        .ft-top-bar {
          height: 1.5px;
          background: linear-gradient(90deg, transparent 0%, rgba(59,130,246,0.6) 10%, rgba(250,204,21,0.95) 30%, rgba(254,240,138,1) 50%, rgba(250,204,21,0.95) 70%, rgba(236,72,153,0.6) 90%, transparent 100%);
          background-size: 300% auto;
          animation: topBorderFlow 5s linear infinite;
        }

        .ft-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(250,204,21,0.12), rgba(255,255,255,0.06), rgba(250,204,21,0.12), transparent);
        }

        .ft-icon-wrap {
          animation: iconPulse 2.8s ease-in-out infinite;
          flex-shrink: 0;
        }

        .ft-wa-btn {
          position: fixed;
          bottom: 24px;
          right: 24px;
          z-index: 100;
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: linear-gradient(135deg, #16a34a, #22c55e);
          border: 1px solid rgba(74,222,128,0.4);
          box-shadow: 0 0 16px rgba(34,197,94,0.4), 0 4px 16px rgba(0,0,0,0.5);
          display: flex; align-items: center; justify-content: center;
          color: white;
          animation: waFloat 3s ease-in-out infinite;
          transition: transform 0.25s ease;
          cursor: pointer;
        }
        .ft-wa-btn:hover {
          transform: scale(1.1);
          box-shadow: 0 0 26px rgba(34,197,94,0.65), 0 4px 16px rgba(0,0,0,0.5);
        }

        .ft-back-top {
          width: 42px; height: 42px;
          border-radius: 50%;
          background: rgba(250,204,21,0.08);
          border: 1px solid rgba(250,204,21,0.28);
          display: flex; align-items: center; justify-content: center;
          color: #facc15;
          cursor: pointer;
          transition: background 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
        }
        .ft-back-top:hover {
          background: rgba(250,204,21,0.15);
          box-shadow: 0 0 16px rgba(250,204,21,0.35);
          transform: translateY(-2px);
        }
        .ft-back-top svg {
          animation: arrowPulse 2s ease-in-out infinite;
        }
      `}</style>

      {/* ── WHATSAPP FLOATING CTA ── */}
      <a href="https://wa.me/919831016701" target="_blank" rel="noopener noreferrer" className="ft-wa-btn" aria-label="WhatsApp">
        <MessageCircle size={22} fill="white" />
      </a>

      <footer className="relative overflow-hidden"
        style={{ background: "linear-gradient(160deg, #060608 0%, #09090e 35%, #0b0a12 65%, #070709 100%)" }}>

        {/* Grain */}
        <div className="ft-grain" />

        {/* Animated top border */}
        <div className="ft-top-bar" />

        {/* ── AMBIENT BLOBS ── */}
        <div className="absolute pointer-events-none"
          style={{ top: "-15%", left: "-8%", width: 500, height: 420,
            background: "radial-gradient(ellipse, rgba(250,204,21,0.065) 0%, transparent 68%)",
            filter: "blur(72px)", animation: "neonPulse 7s ease-in-out infinite" }} />
        <div className="absolute pointer-events-none"
          style={{ bottom: "-10%", right: "-6%", width: 480, height: 400,
            background: "radial-gradient(ellipse, rgba(59,130,246,0.05) 0%, transparent 68%)",
            filter: "blur(68px)", animation: "neonPulse 5.5s ease-in-out infinite", animationDelay: "2s" }} />
        <div className="absolute pointer-events-none"
          style={{ top: "40%", left: "40%", width: 360, height: 300,
            background: "radial-gradient(ellipse, rgba(168,85,247,0.032) 0%, transparent 70%)",
            filter: "blur(58px)", animation: "neonPulse 9s ease-in-out infinite", animationDelay: "1.5s" }} />

        {/* Grid */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.016]"
          style={{
            backgroundImage: "linear-gradient(rgba(250,204,21,1) 1px, transparent 1px), linear-gradient(90deg, rgba(250,204,21,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* ── PARTICLES ── */}
        {[
          { left: "5%",  bottom: "12%", s: 2,  dur: "9s",   del: "0s",   c: "rgba(250,204,21,0.6)" },
          { left: "20%", bottom: "20%", s: 2,  dur: "11s",  del: "1.5s", c: "rgba(250,204,21,0.38)" },
          { left: "38%", bottom: "7%",  s: 3,  dur: "8s",   del: "0.4s", c: "rgba(59,130,246,0.5)" },
          { left: "58%", bottom: "15%", s: 2,  dur: "13s",  del: "3s",   c: "rgba(250,204,21,0.44)" },
          { left: "74%", bottom: "5%",  s: 3,  dur: "10s",  del: "0.2s", c: "rgba(168,85,247,0.48)" },
          { left: "88%", bottom: "22%", s: 2,  dur: "12s",  del: "1.2s", c: "rgba(250,204,21,0.34)" },
          { left: "3%",  bottom: "38%", s: 2,  dur: "16s",  del: "4s",   c: "rgba(34,197,94,0.32)" },
          { left: "94%", bottom: "30%", s: 2,  dur: "10s",  del: "0.7s", c: "rgba(250,204,21,0.46)" },
        ].map((p, i) => (
          <div key={i} className="ft-particle"
            style={{ left: p.left, bottom: p.bottom, width: p.s, height: p.s,
              background: p.c, boxShadow: `0 0 ${p.s * 3}px ${p.c}`,
              animationDuration: p.dur, animationDelay: p.del }}
          />
        ))}

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-[1.3fr_repeat(3,1fr)] gap-10">

            {/* ── COL 1: BRAND ── */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={0}
              className="lg:col-span-1"
            >
              <Link href="/" className="ft-logo text-[1.55rem] flex items-center gap-2.5 mb-5 w-fit">
                <Image 
                  src={logo} 
                  alt="M.N. Graphics" 
                  width={50} 
                  height={50}
                  className="h-12 w-auto"
                />
                <span>Graphics</span>
              </Link>
              <p className="ft-body text-[0.82rem] leading-[1.8] mb-6"
                style={{ color: "rgba(107,114,128,0.85)" }}>
                Premium Printing &amp; Signage Services in Kolkata. Vinyl Cutting, Flex Printing, Eco Solvent, Steel Letters — crafted for brands that demand excellence.
              </p>
              {/* Tiny trust badges */}
              <div className="flex flex-wrap gap-2">
                {["10+ Years", "500+ Projects", "Kolkata #1"].map((badge) => (
                  <span key={badge}
                    className="ft-body text-[0.6rem] uppercase tracking-[0.14em] px-2.5 py-1 rounded-full"
                    style={{
                      background: "rgba(250,204,21,0.06)",
                      border: "1px solid rgba(250,204,21,0.16)",
                      color: "rgba(250,204,21,0.65)",
                    }}>
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* ── COL 2: QUICK LINKS ── */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={1}
              className="lg:ml-12"
            >
              
              <h4 className="ft-col-head mb-8">Quick Links</h4>
              <ul className="space-y-4 mt-2 ">
                {quickLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="ft-link">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* ── COL 3: SERVICES ── */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={2}
            >
             
              <h4 className="ft-col-head mb-8">Our Services</h4>
              <ul className="space-y-4 mt-2">
                {serviceLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="ft-link">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* ── COL 4: CONTACT ── */}
            <motion.div
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={fadeUp} custom={3}
            >
              <h4 className="ft-col-head mb-8">Contact Info</h4>
              <div className="space-y-5 mt-2">
                {contactItems.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <a key={i} href={item.href}
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="flex items-start gap-3 group"
                    >
                      <div
                        className="ft-icon-wrap w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform duration-300"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: `1px solid ${item.accent}35`,
                          color: item.accent,
                          boxShadow: `0 0 10px ${item.accent}18`,
                        }}
                      >
                        <Icon size={14} />
                      </div>
                      <div>
                        <p className="ft-body text-[0.83rem] text-white leading-snug group-hover:text-[#facc15] transition-colors duration-250">
                          {item.value}
                        </p>
                        <p className="ft-body text-[0.7rem] mt-0.5"
                          style={{ color: "rgba(107,114,128,0.7)" }}>
                          {item.sub}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* ── DIVIDER ── */}
          <div className="ft-divider my-14" />

          {/* ── BOTTOM BAR ── */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-between gap-5"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: "easeOut", delay: 0.2 }}
          >
            {/* Copyright */}
            <p className="ft-body text-[0.75rem] text-center sm:text-left"
              style={{ color: "rgba(107,114,128,0.65)" }}>
              © {new Date().getFullYear()}{" "}
              <span style={{ color: "rgba(250,204,21,0.6)" }}>M.N. Graphics</span>
              . All Rights Reserved. Crafted with precision in Kolkata.
            </p>

            {/* Right: CTA buttons + back to top */}
            <div className="flex items-center gap-3">
              <a href="tel:9831016701"
                className="ft-body text-[0.72rem] font-600 uppercase tracking-[0.14em] px-4 py-2 rounded-full"
                style={{
                  fontFamily: "'Rajdhani', sans-serif",
                  fontWeight: 700,
                  background: "linear-gradient(90deg, #ca8a04, #facc15, #fef08a, #facc15, #ca8a04)",
                  backgroundSize: "280% auto",
                  animation: "shimmer 4s linear infinite",
                  color: "#08080c",
                  boxShadow: "0 0 8px rgba(250,204,21,0.3)",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                Call Now
              </a>

              <button
                onClick={scrollTop}
                className="ft-back-top"
                aria-label="Back to top"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </footer>
    </>
  );
}