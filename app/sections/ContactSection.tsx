"use client";

import { motion, cubicBezier } from "framer-motion";
import { Phone, MapPin, Mail, Send } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.12 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: cubicBezier(0.22, 1, 0.36, 1) } },
};

const contactInfo = [
  {
    icon: Phone,
    label: "Call Us",
    value: "9831016701",
    sub: "Mon–Sat, 9am–7pm",
    accent: "#facc15",
    href: "tel:9831016701",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: "45, B. Ganguly Street",
    sub: "Kolkata – 700012, 2nd Floor, Opp. Bow Bazar",
    accent: "#3b82f6",
    href: "https://maps.google.com/?q=45,B.Ganguly+Street,Kolkata-700012",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@mngraphics.in",
    sub: "We reply within 24 hours",
    accent: "#22c55e",
    href: "mailto:info@mngraphics.in",
  },
];

export default function ContactSectionPages() {
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
          50%       { box-shadow: 0 0 22px rgba(250,204,21,0.78), 0 0 50px rgba(250,204,21,0.3); }
        }
        @keyframes waGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(34,197,94,0.35), 0 0 22px rgba(34,197,94,0.12); }
          50%       { box-shadow: 0 0 18px rgba(34,197,94,0.65), 0 0 38px rgba(34,197,94,0.22); }
        }
        @keyframes iconPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(250,204,21,0); }
          50%       { box-shadow: 0 0 0 7px rgba(250,204,21,0.07); }
        }
        @keyframes mapGlow {
          0%, 100% { box-shadow: 0 0 30px rgba(250,204,21,0.06), 0 20px 60px rgba(0,0,0,0.6); }
          50%       { box-shadow: 0 0 50px rgba(250,204,21,0.12), 0 20px 60px rgba(0,0,0,0.6); }
        }
        @keyframes borderSpin {
          0%   { background-position: 0% 50%; }
          100% { background-position: 400% 50%; }
        }
        @keyframes formBreath {
          0%, 100% { box-shadow: 0 0 60px rgba(250,204,21,0.04) inset, 0 30px 80px rgba(0,0,0,0.6); }
          50%       { box-shadow: 0 0 80px rgba(250,204,21,0.08) inset, 0 30px 80px rgba(0,0,0,0.6); }
        }

        .cs-heading {
          font-family: 'Orbitron', sans-serif;
          font-weight: 800;
          background: linear-gradient(90deg, #b45309 0%, #facc15 22%, #fef08a 45%, #facc15 68%, #ca8a04 88%, #facc15 100%);
          background-size: 260% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 5.5s linear infinite;
        }
        .cs-label { font-family: 'Rajdhani', sans-serif; font-weight: 700; }
        .cs-body  { font-family: 'Inter', sans-serif; }

        .cs-badge {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          letter-spacing: 0.22em;
          background: rgba(255,255,255,0.03);
          backdrop-filter: blur(18px) saturate(150%);
          -webkit-backdrop-filter: blur(18px) saturate(150%);
          border: 1px solid rgba(250,204,21,0.18);
        }

        .cs-underline {
          height: 2px;
          background: linear-gradient(90deg, transparent, #3b82f6, #facc15, #fef08a, #facc15, #22c55e, transparent);
          background-size: 300% auto;
          animation: underlineFlow 4.5s linear infinite, neonPulse 3s ease-in-out infinite;
          border-radius: 2px;
        }

        .cs-grain {
          position: absolute; inset: 0; pointer-events: none; z-index: 1;
          animation: grain 0.85s steps(1) infinite;
          opacity: 0.022;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          background-size: 182px 182px;
        }

        .cs-scanline {
          position: absolute; left: 0; right: 0;
          height: 1.5px;
          background: linear-gradient(90deg, transparent, rgba(250,204,21,0.032), transparent);
          animation: scanline 17s linear infinite;
          pointer-events: none; z-index: 1;
        }

        .cs-particle {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          animation: floatUp linear infinite;
        }

        /* Glass form */
        .cs-form-card {
          background: rgba(255,255,255,0.026);
          backdrop-filter: blur(24px) saturate(160%);
          -webkit-backdrop-filter: blur(24px) saturate(160%);
          border: 1px solid rgba(250,204,21,0.1);
          animation: formBreath 5s ease-in-out infinite;
          position: relative;
          overflow: hidden;
        }
        .cs-form-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1px;
          background: linear-gradient(90deg, rgba(59,130,246,0.3), rgba(250,204,21,0.5), rgba(34,197,94,0.3), rgba(250,204,21,0.5), rgba(59,130,246,0.3));
          background-size: 400% auto;
          animation: borderSpin 7s linear infinite;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        /* Inputs */
        .cs-input {
          font-family: 'Inter', sans-serif;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          color: rgba(229,231,235,0.9);
          border-radius: 10px;
          padding: 12px 16px;
          width: 100%;
          outline: none;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
          font-size: 0.88rem;
        }
        .cs-input::placeholder { color: rgba(107,114,128,0.7); }
        .cs-input:hover {
          border-color: rgba(250,204,21,0.2);
          background: rgba(255,255,255,0.055);
        }
        .cs-input:focus {
          border-color: rgba(250,204,21,0.45);
          background: rgba(255,255,255,0.06);
          box-shadow: 0 0 0 3px rgba(250,204,21,0.08), 0 0 16px rgba(250,204,21,0.12);
        }

        .cs-label-text {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 600;
          letter-spacing: 0.08em;
          font-size: 0.72rem;
          text-transform: uppercase;
          color: rgba(156,163,175,0.75);
          display: block;
          margin-bottom: 6px;
        }

        /* CTA button */
        .cs-cta {
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
          border-radius: 9999px;
          padding: 14px 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          width: 100%;
          cursor: pointer;
          border: none;
        }
        .cs-cta:hover {
          transform: scale(1.03) translateY(-2px);
          animation: shimmer 4s linear infinite, ctaGlow 1.5s ease-in-out infinite;
        }

        /* Call button */
        .cs-call-btn {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-size: 0.78rem;
          color: #08080c;
          background: linear-gradient(90deg, #ca8a04 0%, #facc15 35%, #fef08a 55%, #facc15 75%, #ca8a04 100%);
          background-size: 280% auto;
          animation: shimmer 4s linear infinite;
          box-shadow: 0 0 10px rgba(250,204,21,0.3);
          transition: transform 0.25s ease;
          border-radius: 9999px;
          padding: 12px 24px;
        }
        .cs-call-btn:hover {
          transform: scale(1.04) translateY(-2px);
          animation: shimmer 4s linear infinite, ctaGlow 1.5s ease-in-out infinite;
        }

        /* WA button */
        .cs-wa-btn {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          font-size: 0.78rem;
          background: rgba(34,197,94,0.08);
          border: 1px solid rgba(34,197,94,0.4);
          color: #4ade80;
          border-radius: 9999px;
          padding: 12px 24px;
          transition: transform 0.25s ease, background 0.25s ease;
        }
        .cs-wa-btn:hover {
          transform: scale(1.04) translateY(-2px);
          background: rgba(34,197,94,0.16);
          animation: waGlow 1.5s ease-in-out infinite;
        }

        .cs-info-card {
          background: rgba(255,255,255,0.022);
          backdrop-filter: blur(18px) saturate(155%);
          -webkit-backdrop-filter: blur(18px) saturate(155%);
          border: 1px solid rgba(255,255,255,0.06);
          transition: border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .cs-info-card:hover {
          border-color: rgba(250,204,21,0.18);
          box-shadow: 0 8px 40px rgba(0,0,0,0.4);
        }

        .cs-icon-wrap {
          animation: iconPulse 2.8s ease-in-out infinite;
        }

        .cs-map-wrap {
          animation: mapGlow 5s ease-in-out infinite;
          border-radius: 1.5rem;
          overflow: hidden;
          border: 1px solid rgba(250,204,21,0.1);
        }

        .cs-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent);
        }
      `}</style>

      <section
        id="contact"
        className="relative py-14 overflow-hidden"
        style={{
          background: "linear-gradient(158deg, #060608 0%, #08090e 32%, #0b0a12 64%, #060609 100%)",
        }}
      >
        {/* Grain & scanline */}
        <div className="cs-grain" />
        <div className="cs-scanline" />

        {/* ── AMBIENT BLOBS ── */}
        {/* Strong gold behind form (left) */}
        <div className="absolute pointer-events-none"
          style={{ top: "15%", left: "-8%", width: 620, height: 520,
            background: "radial-gradient(ellipse, rgba(250,204,21,0.07) 0%, transparent 68%)",
            filter: "blur(80px)", animation: "neonPulse 7s ease-in-out infinite" }} />
        <div className="absolute pointer-events-none"
          style={{ bottom: "-8%", right: "-5%", width: 560, height: 470,
            background: "radial-gradient(ellipse, rgba(59,130,246,0.055) 0%, transparent 68%)",
            filter: "blur(72px)", animation: "neonPulse 5.5s ease-in-out infinite", animationDelay: "2s" }} />
        <div className="absolute pointer-events-none"
          style={{ top: "50%", left: "45%", width: 420, height: 360,
            background: "radial-gradient(ellipse, rgba(34,197,94,0.03) 0%, transparent 70%)",
            filter: "blur(62px)", animation: "neonPulse 9s ease-in-out infinite", animationDelay: "1.5s" }} />
        <div className="absolute pointer-events-none"
          style={{ top: "5%", right: "12%", width: 300, height: 280,
            background: "radial-gradient(ellipse, rgba(168,85,247,0.032) 0%, transparent 70%)",
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
          { left: "19%", bottom: "22%", s: 2,  dur: "10.5s",del: "1.5s", c: "rgba(250,204,21,0.42)" },
          { left: "33%", bottom: "8%",  s: 4,  dur: "7s",   del: "0.4s", c: "rgba(59,130,246,0.55)" },
          { left: "50%", bottom: "16%", s: 2,  dur: "13s",  del: "3s",   c: "rgba(250,204,21,0.48)" },
          { left: "65%", bottom: "6%",  s: 3,  dur: "9.5s", del: "0.2s", c: "rgba(168,85,247,0.52)" },
          { left: "79%", bottom: "24%", s: 2,  dur: "11s",  del: "1.2s", c: "rgba(250,204,21,0.38)" },
          { left: "91%", bottom: "11%", s: 3,  dur: "8.5s", del: "2.5s", c: "rgba(59,130,246,0.45)" },
          { left: "3%",  bottom: "42%", s: 2,  dur: "16s",  del: "4s",   c: "rgba(34,197,94,0.36)" },
          { left: "96%", bottom: "36%", s: 2,  dur: "9.5s", del: "0.7s", c: "rgba(250,204,21,0.5)" },
          { left: "44%", bottom: "48%", s: 2,  dur: "20s",  del: "5.5s", c: "rgba(168,85,247,0.28)" },
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

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">

          {/* ── HEADER ── */}
          <motion.div
            className="text-center mb-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={containerVariants}
          >
            <motion.div variants={fadeUp} className="flex justify-center mb-7">
              <span className="cs-badge inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-[0.68rem] uppercase tracking-[0.26em]"
                style={{ color: "rgba(250,204,21,0.8)" }}>
                <span className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#facc15", boxShadow: "0 0 8px #facc15" }} />
                Contact Us
              </span>
            </motion.div>

            <motion.h2 variants={fadeUp}
              className="cs-heading text-[2.4rem] md:text-[3.4rem] lg:text-[4rem] leading-[1.08] mb-6">
              Get a Free Quote
              <br />
              Today.
            </motion.h2>

            <motion.div variants={fadeUp} className="flex justify-center mb-7">
              <div className="cs-underline w-44" />
            </motion.div>

            <motion.p variants={fadeUp}
              className="cs-body text-[1rem] leading-relaxed max-w-xl mx-auto"
              style={{ color: "rgba(156,163,175,0.82)" }}>
              Looking for vinyl cutting, flex printing, or steel letter signage? Contact M.N. Graphics for fast and reliable service across Kolkata.
            </motion.p>
          </motion.div>

          {/* ── MAIN GRID ── */}
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16">

            {/* ── FORM ── */}
            <motion.div
              initial={{ opacity: 0, x: -32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: cubicBezier(0.22, 1, 0.36, 1) }}
            >
              <div className="cs-form-card rounded-2xl p-8">
                {/* Inner ambient behind form */}
                <div className="absolute -top-10 -left-10 w-48 h-48 rounded-full pointer-events-none"
                  style={{ background: "radial-gradient(ellipse, rgba(250,204,21,0.06) 0%, transparent 70%)", filter: "blur(30px)" }} />

                <form className="relative space-y-5">
                  {/* Full Name */}
                  <div>
                    <label className="cs-label-text">Full Name</label>
                    <input type="text" placeholder="Enter your name" className="cs-input" />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="cs-label-text">Phone Number</label>
                    <input type="tel" placeholder="Enter your phone number" className="cs-input" />
                  </div>

                  {/* Service */}
                  <div>
                    <label className="cs-label-text">Service Required</label>
                    <select className="cs-input" style={{ cursor: "pointer" }}>
                      <option style={{ background: "#0a0a10" }}>Vinyl Cutting</option>
                      <option style={{ background: "#0a0a10" }}>Eco Solvent Printing</option>
                      <option style={{ background: "#0a0a10" }}>Steel Letter</option>
                      <option style={{ background: "#0a0a10" }}>Flex Backlit</option>
                      <option style={{ background: "#0a0a10" }}>Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="cs-label-text">Message</label>
                    <textarea rows={4} placeholder="Write your requirements..." className="cs-input" style={{ resize: "none" }} />
                  </div>

                  {/* Submit */}
                  <button type="submit" className="cs-cta">
                    <Send size={15} />
                    Submit Inquiry
                  </button>
                </form>
              </div>
            </motion.div>

            {/* ── CONTACT INFO ── */}
            <motion.div
              className="flex flex-col gap-5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={containerVariants}
            >
              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={i}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    variants={fadeUp}
                    className="cs-info-card rounded-xl p-5 flex items-start gap-4 group cursor-pointer"
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = `${info.accent}35`;
                      el.style.boxShadow = `0 0 0 1px ${info.accent}15, 0 12px 40px rgba(0,0,0,0.5), 0 0 28px ${info.accent}12`;
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.borderColor = "rgba(255,255,255,0.06)";
                      el.style.boxShadow = "";
                    }}
                  >
                    {/* Icon */}
                    <div
                      className="cs-icon-wrap w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: `1px solid ${info.accent}38`,
                        color: info.accent,
                        boxShadow: `0 0 14px ${info.accent}18`,
                      }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="cs-label text-[0.68rem] uppercase tracking-[0.18em] mb-0.5"
                        style={{ color: `${info.accent}` }}>
                        {info.label}
                      </p>
                      <p className="cs-label text-[1rem] text-white leading-snug">
                        {info.value}
                      </p>
                      <p className="cs-body text-[0.75rem] mt-0.5"
                        style={{ color: "rgba(107,114,128,0.8)" }}>
                        {info.sub}
                      </p>
                    </div>
                  </motion.a>
                );
              })}

              {/* Divider */}
              <div className="cs-divider my-2" />

              {/* CTA Buttons */}
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 pt-2">
                <a href="tel:9831016701" className="cs-call-btn flex-1 text-center">
                  Call Now
                </a>
                <a
                  href="https://wa.me/919831016701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cs-wa-btn flex-1 text-center"
                >
                  WhatsApp
                </a>
              </motion.div>

              {/* Small trust line */}
              <motion.p variants={fadeUp}
                className="cs-body text-[0.72rem] text-center pt-2"
                style={{ color: "rgba(107,114,128,0.65)" }}>
                ✦ Serving 100+ businesses across Kolkata since 2013
              </motion.p>
            </motion.div>
          </div>

          {/* ── GOOGLE MAP ── */}
          <motion.div
            className="mt-16 cs-map-wrap"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: cubicBezier(0.22, 1, 0.36, 1), delay: 0.15 }}
            whileHover={{ scale: 1.005 }}
          >
            <iframe
              src="https://www.google.com/maps?q=45,B.Ganguly Street,Kolkata-700012&output=embed"
              width="100%"
              height="400"
              loading="lazy"
              style={{ border: 0, display: "block", filter: "invert(90%) hue-rotate(180deg)" }}
              title="M.N. Graphics Location"
            />
          </motion.div>

        </div>
      </section>
    </>
  );
}