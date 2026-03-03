"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence, cubicBezier } from "framer-motion";
import logo from "@/app/assets/logo.png";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  const servicesItems = [
    { label: "Letter Services", href: "/letter" },
    { label: "Cutting Services", href: "/cutting" },
    { label: "Flex Printing", href: "/flexprinting" },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const isServicesActive = servicesItems.some((s) => pathname.startsWith(s.href));

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=Inter:wght@400;500;600&display=swap');

        @keyframes neonFlow {
          0%   { background-position: 0% center; }
          100% { background-position: 300% center; }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes ctaGlow {
          0%, 100% { box-shadow: 0 0 10px rgba(250,204,21,0.4), 0 0 24px rgba(250,204,21,0.16), 0 2px 8px rgba(0,0,0,0.5); }
          50%       { box-shadow: 0 0 18px rgba(250,204,21,0.72), 0 0 42px rgba(250,204,21,0.28), 0 2px 8px rgba(0,0,0,0.5); }
        }

        .gs-logo {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 800;
          letter-spacing: 0.14em;
          background: linear-gradient(90deg, #ca8a04 0%, #facc15 30%, #fef08a 55%, #facc15 75%, #ca8a04 100%);
          background-size: 250% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 5s linear infinite;
          transition: filter 0.3s ease;
        }
        .gs-logo:hover {
          filter: drop-shadow(0 0 14px rgba(250,204,21,0.85));
        }

        .gs-link {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 0.82rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          position: relative;
          transition: color 0.25s ease, transform 0.25s ease;
          display: inline-block;
        }
        .gs-link:hover {
          transform: scale(1.04);
        }
        .gs-link::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0;
          width: 0; height: 1.5px;
          background: linear-gradient(90deg, #facc15, #fef08a, #facc15);
          border-radius: 2px;
          box-shadow: 0 0 6px rgba(250,204,21,0.7);
          transition: width 0.32s cubic-bezier(0.22,1,0.36,1);
        }
        .gs-link:hover::after,
        .gs-link.active::after { width: 100%; }
        .gs-link.active         { color: #facc15; }

        .gs-services-btn {
          font-family: 'Inter', sans-serif;
          font-weight: 500;
          font-size: 0.82rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          position: relative;
          transition: color 0.25s ease, transform 0.25s ease;
        }
        .gs-services-btn:hover { transform: scale(1.04); }
        .gs-services-btn::after {
          content: '';
          position: absolute;
          bottom: -3px; left: 0;
          width: 0; height: 1.5px;
          background: linear-gradient(90deg, #facc15, #fef08a, #facc15);
          border-radius: 2px;
          box-shadow: 0 0 6px rgba(250,204,21,0.7);
          transition: width 0.32s cubic-bezier(0.22,1,0.36,1);
        }
        .gs-services-btn:hover::after,
        .gs-services-btn.active::after { width: 100%; }
        .gs-services-btn.active        { color: #facc15; }

        .gs-dropdown {
          background: rgba(7, 7, 13, 0.93);
          backdrop-filter: blur(28px) saturate(170%);
          -webkit-backdrop-filter: blur(28px) saturate(170%);
          border: 1px solid rgba(250,204,21,0.13);
          box-shadow:
            0 24px 64px rgba(0,0,0,0.82),
            0 0 0 1px rgba(250,204,21,0.05) inset,
            0 6px 30px rgba(59,130,246,0.05);
        }
        .gs-dd-item {
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          transition: color 0.2s ease, background 0.2s ease;
        }
        .gs-dd-item:hover { color: #facc15; background: rgba(250,204,21,0.055); }
        .gs-dd-item.active { color: #facc15; }

        .gs-cta {
          font-family: 'Rajdhani', sans-serif;
          font-weight: 700;
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #09090b;
          background: linear-gradient(90deg, #ca8a04 0%, #facc15 35%, #fef08a 55%, #facc15 75%, #ca8a04 100%);
          background-size: 280% auto;
          animation: shimmer 4s linear infinite;
          box-shadow: 0 0 12px rgba(250,204,21,0.35), 0 2px 10px rgba(0,0,0,0.5);
          transition: transform 0.28s cubic-bezier(0.22,1,0.36,1);
        }
        .gs-cta:hover {
          transform: scale(1.055) translateY(-1.5px);
          animation: shimmer 4s linear infinite, ctaGlow 1.6s ease-in-out infinite;
        }

        .gs-neon-bar {
          background: linear-gradient(
            90deg,
            transparent          0%,
            rgba(59,130,246,0.5) 8%,
            rgba(250,204,21,0.95) 28%,
            rgba(254,240,138,1)   50%,
            rgba(250,204,21,0.95) 72%,
            rgba(236,72,153,0.5) 92%,
            transparent          100%
          );
          background-size: 300% auto;
          animation: neonFlow 5s linear infinite;
        }

        .gs-drawer {
          background: rgba(5, 5, 10, 0.97);
          backdrop-filter: blur(40px) saturate(180%);
          -webkit-backdrop-filter: blur(40px) saturate(180%);
          border-left: 1px solid rgba(250,204,21,0.08);
          box-shadow: -20px 0 80px rgba(0,0,0,0.88);
        }
        .gs-m-link {
          font-family: 'Inter', sans-serif;
          font-size: 0.84rem;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          transition: color 0.2s ease;
        }
        .gs-m-link:hover, .gs-m-link.active { color: #facc15; }
      `}</style>

      {/* ══ HEADER ══ */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: cubicBezier(0.22, 1, 0.36, 1) }}
        className="fixed top-0 left-0 w-full z-50"
        style={{
  background: "linear-gradient(180deg, rgba(5,5,10,0.98) 0%, rgba(8,8,15,0.96) 100%)",
          backdropFilter: scrolled ? "blur(22px) saturate(180%)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(22px) saturate(180%)" : "none",
          boxShadow: scrolled ? "0 4px 48px rgba(0,0,0,0.7)" : "none",
          transition: "background 0.45s ease, backdrop-filter 0.45s ease, box-shadow 0.45s ease",
        }}
      >
        {/* Neon bottom bar */}
        <motion.div
          className="gs-neon-bar absolute bottom-0 left-0 right-0 h-[1.5px] pointer-events-none"
          animate={{ opacity: scrolled ? 1 : 0.3 }}
          transition={{ duration: 0.4 }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-[68px]">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 select-none group">
              <Image 
                src={logo} 
                alt="M.N. Graphics" 
                width={50} 
                height={50}
                className="h-12 w-auto group-hover:scale-110 transition-transform duration-300"
              />
              <span className="gs-logo text-[1.55rem] hidden sm:block">Graphics</span>
            </Link>


            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item, i) => (
                <motion.div key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 + 0.18, duration: 0.4, ease: "easeOut" }}
                >
                  <Link href={item.href}
                    className={`gs-link px-4 py-2 block ${
                      isActive(item.href) ? "active text-yellow-400" : "text-gray-300 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}

              {/* Services */}
              <motion.div className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.4, ease: "easeOut" }}
              >
                <button className={`gs-services-btn flex items-center gap-1.5 px-4 py-2 ${
                  isServicesActive ? "active text-yellow-400" : "text-gray-300 hover:text-white"
                }`}>
                  Services
                  <motion.span
                    animate={{ rotate: servicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.26 }}
                    className="inline-flex mt-px"
                  >
                    <ChevronDown size={13} strokeWidth={2.5} />
                  </motion.span>
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.96 }}
                      transition={{ duration: 0.22, ease: cubicBezier(0.22, 1, 0.36, 1) }}
                      className="gs-dropdown absolute top-full left-1/2 -translate-x-1/2 mt-3.5 w-52 rounded-xl overflow-hidden"
                    >
                      <div className="h-[1px]" style={{
                        background: "linear-gradient(90deg, transparent, rgba(250,204,21,0.6), rgba(254,240,138,0.85), rgba(250,204,21,0.6), transparent)"
                      }} />

                      {servicesItems.map((item, idx) => (
                        <motion.div key={item.href}
                          initial={{ opacity: 0, x: -8 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.055, duration: 0.22 }}
                        >
                          <Link href={item.href}
                            onClick={() => setServicesOpen(false)}
                            className={`gs-dd-item flex items-center gap-3 px-5 py-3.5 ${
                              isActive(item.href) ? "active" : "text-gray-300"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all duration-200"
                              style={{
                                background: isActive(item.href) ? "#facc15" : "rgba(250,204,21,0.28)",
                                boxShadow: isActive(item.href) ? "0 0 7px #facc15" : "none",
                              }}
                            />
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}

                      <div className="h-[1px]" style={{
                        background: "linear-gradient(90deg, transparent, rgba(250,204,21,0.18), transparent)"
                      }} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </nav>

            {/* CTA */}
            <motion.div className="hidden md:block"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.58, duration: 0.4 }}
            >
              <Link href="/contact" className="gs-cta px-6 py-2.5 rounded-full block">
                Get Quote
              </Link>
            </motion.div>

            {/* Hamburger */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
              className="md:hidden p-2.5 rounded-lg"
              style={{
                border: "1px solid rgba(250,204,21,0.22)",
                background: "rgba(250,204,21,0.04)",
                color: "#facc15",
              }}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.span key="x"
                    initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.18 }}
                    className="block"
                  ><X size={22} /></motion.span>
                ) : (
                  <motion.span key="menu"
                    initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.18 }}
                    className="block"
                  ><Menu size={22} /></motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* ══ MOBILE DRAWER ══ */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.28 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[55] md:hidden"
              style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(4px)" }}
            />

            <motion.aside key="drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.38, ease: cubicBezier(0.22, 1, 0.36, 1) }}
              className="gs-drawer fixed top-0 right-0 h-full w-[78vw] max-w-[300px] z-[60] flex flex-col md:hidden"
            >
              {/* Top neon accent */}
              <div className="gs-neon-bar absolute top-0 left-0 right-0 h-[1.5px]" />

              {/* Ambient glows */}
              <div className="absolute top-0 left-0 w-full h-52 pointer-events-none" style={{
                background: "radial-gradient(ellipse at 75% 0%, rgba(250,204,21,0.055) 0%, transparent 70%)"
              }} />
              <div className="absolute bottom-0 left-0 w-full h-52 pointer-events-none" style={{
                background: "radial-gradient(ellipse at 25% 100%, rgba(236,72,153,0.04) 0%, transparent 70%)"
              }} />

              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5"
                style={{ borderBottom: "1px solid rgba(250,204,21,0.07)" }}
              >
                <Link href="/" className="flex items-center gap-2 select-none" onClick={() => setIsOpen(false)}>
                  <Image 
                    src={logo} 
                    alt="M.N. Graphics" 
                    width={45} 
                    height={45}
                    className="h-11 w-auto"
                  />
                  <span className="gs-logo text-[1.3rem]">Graphics</span>
                </Link>
                <motion.button onClick={() => setIsOpen(false)}
                  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                  style={{ color: "rgba(250,204,21,0.6)" }}
                >
                  <X size={20} />
                </motion.button>
              </div>

              {/* Links */}
              <nav className="flex flex-col px-4 pt-4 flex-1 overflow-y-auto">
                {navItems.map((item, i) => (
                  <motion.div key={item.href}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.08, duration: 0.35, ease: "easeOut" }}
                  >
                    <Link href={item.href} onClick={() => setIsOpen(false)}
                      className={`gs-m-link flex items-center gap-3 px-3 py-4 ${
                        isActive(item.href) ? "active" : "text-gray-300"
                      }`}
                    >
                      <span className="w-[3px] h-5 rounded-full flex-shrink-0"
                        style={{
                          background: isActive(item.href) ? "#facc15" : "rgba(255,255,255,0.1)",
                          boxShadow: isActive(item.href) ? "0 0 8px #facc15" : "none",
                        }}
                      />
                      {item.label}
                    </Link>
                  </motion.div>
                ))}

                {/* Services accordion */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.07 + 0.08, duration: 0.35 }}
                >
                  <button onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`gs-m-link w-full flex items-center gap-3 px-3 py-4 ${
                      isServicesActive ? "active" : "text-gray-300"
                    }`}
                  >
                    <span className="w-[3px] h-5 rounded-full flex-shrink-0"
                      style={{
                        background: isServicesActive ? "#facc15" : "rgba(255,255,255,0.1)",
                        boxShadow: isServicesActive ? "0 0 8px #facc15" : "none",
                      }}
                    />
                    Services
                    <motion.span className="ml-auto"
                      animate={{ rotate: mobileServicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.25 }}
                      style={{ color: "rgba(250,204,21,0.5)" }}
                    >
                      <ChevronDown size={15} />
                    </motion.span>
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                        className="overflow-hidden"
                        style={{
                          borderLeft: "1px solid rgba(250,204,21,0.18)",
                          marginLeft: "1rem",
                          background: "rgba(250,204,21,0.018)",
                        }}
                      >
                        {servicesItems.map((item, idx) => (
                          <motion.div key={item.href}
                            initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: idx * 0.055 }}
                          >
                            <Link href={item.href}
                              onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
                              className={`flex items-center gap-2.5 px-5 py-3 text-[0.75rem] uppercase tracking-[0.1em] transition-colors duration-200 ${
                                isActive(item.href) ? "text-yellow-400" : "text-gray-400 hover:text-yellow-400"
                              }`}
                              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}
                            >
                              <span className="w-1 h-1 rounded-full flex-shrink-0"
                                style={{ background: "rgba(250,204,21,0.4)" }} />
                              {item.label}
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </nav>

              {/* Drawer CTA */}
              <motion.div
                initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.44, duration: 0.35 }}
                className="px-6 py-7"
                style={{ borderTop: "1px solid rgba(250,204,21,0.07)" }}
              >
                <Link href="/contact" onClick={() => setIsOpen(false)}
                  className="gs-cta block w-full text-center py-3.5 rounded-full"
                >
                  Get Quote
                </Link>
              </motion.div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}