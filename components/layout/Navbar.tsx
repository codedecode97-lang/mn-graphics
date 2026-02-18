"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  const servicesItems = [
    { label: "Letter Services", href: "/letter" },
    { label: "Cutting Services", href: "/cutting" },
    { label: "Flex Printing", href: "/flexprinting" },
  ];

  const navbarVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 },
    },
  };

  const mobileMenuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const navLinkVariants = {
    initial: { y: 0 },
    hover: { y: -2 },
  };

  const underlineVariants = {
    initial: { width: 0 },
    hover: { width: "100%" },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-blue-900 backdrop-blur-2xl border-b border-blue-700 shadow-2xl shadow-blue-900/40"
          : "bg-blue-900/95 backdrop-blur-xl border-b border-blue-700/50 shadow-lg shadow-blue-900/30"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              href="/"
              className="relative text-3xl lg:text-4xl font-bold tracking-widest text-white group font-poppins"
            >
              <motion.span 
                className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-amber-300 bg-clip-text text-transparent drop-shadow-lg"
                animate={{ backgroundPosition: ["0%", "100%"] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              >
                M.N. Graphics
              </motion.span>
              <motion.div
                className="absolute -bottom-1 left-0 h-1 bg-gradient-to-r from-yellow-300 via-amber-300 to-yellow-300"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-2 font-medium">
            {navItems.map((item) => (
              <motion.div key={item.href} variants={navLinkVariants}>
                <Link
                  href={item.href}
                  className="relative px-4 py-2.5 text-gray-100 transition-colors duration-300 hover:text-amber-300 group text-base uppercase tracking-wider font-bold font-poppins"
                >
                  {item.label}
                  <motion.div
                    className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-amber-300 to-yellow-400"
                    variants={underlineVariants}
                    initial="initial"
                    whileHover="hover"
                    transition={{ duration: 0.4 }}
                  />
                </Link>
              </motion.div>
            ))}

            {/* Services Dropdown */}
            <motion.div
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
              className="relative"
              variants={navLinkVariants}
            >
              <button className="relative px-4 py-2.5 text-gray-100 transition-colors duration-300 hover:text-amber-300 group text-base uppercase tracking-wider font-bold font-poppins flex items-center gap-2">
                Services
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: isServicesOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </motion.svg>
                <motion.div
                  className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-amber-300 to-yellow-400"
                  variants={underlineVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={{ duration: 0.4 }}
                />
              </button>

              <AnimatePresence>
                {isServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-gradient-to-b from-slate-800 to-slate-900 rounded-lg shadow-xl border border-blue-500/30 backdrop-blur-xl overflow-hidden z-40"
                  >
                    {servicesItems.map((item, idx) => (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsServicesOpen(false)}
                          className="block px-4 py-3 text-gray-100 hover:text-amber-300 hover:bg-blue-500/20 transition-all duration-200 font-semibold text-sm uppercase tracking-wider"
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <motion.a
              href="tel:9831016701"
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="relative px-6 lg:px-7 py-3 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-slate-900 text-base font-bold uppercase tracking-widest shadow-xl shadow-amber-400/40 hover:shadow-2xl hover:shadow-amber-300/50 transition-all duration-300 overflow-hidden group font-poppins"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-amber-300 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative">Call Now</span>
            </motion.a>

          
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-amber-300 p-2.5 hover:bg-white/10 rounded-lg transition-all duration-300 border border-amber-300/30 hover:border-amber-300/60"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={28} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={28} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 backdrop-blur-2xl border-t border-blue-500/30 shadow-2xl shadow-blue-500/20 overflow-hidden"
          >
            <motion.nav
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center py-8 gap-2"
            >
              {navItems.map((item) => (
                <motion.div key={item.href} variants={mobileMenuItemVariants}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="relative px-6 py-3 text-gray-100 font-bold text-xl transition-colors duration-300 hover:text-amber-300 group block uppercase tracking-wider font-poppins"
                  >
                    {item.label}
                    <motion.div
                      className="absolute bottom-1 left-6 right-6 h-1 bg-gradient-to-r from-amber-300 to-yellow-400"
                      initial={{ width: 0 }}
                      whileHover={{ width: "calc(100% - 24px)" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}

              {/* Mobile Services Dropdown */}
              <motion.div variants={mobileMenuItemVariants} className="w-full">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="w-full relative px-6 py-3 text-gray-100 font-bold text-xl transition-colors duration-300 hover:text-amber-300 group block uppercase tracking-wider font-poppins flex items-center justify-center gap-2"
                >
                  Services
                  <motion.svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    animate={{ rotate: isServicesOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </motion.svg>
                  <motion.div
                    className="absolute bottom-1 left-6 right-6 h-1 bg-gradient-to-r from-amber-300 to-yellow-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: "calc(100% - 24px)" }}
                    transition={{ duration: 0.3 }}
                  />
                </button>

                <AnimatePresence>
                  {isServicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      {servicesItems.map((item, idx) => (
                        <motion.div
                          key={item.href}
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.05 }}
                        >
                          <Link
                            href={item.href}
                            onClick={() => {
                              setIsOpen(false);
                              setIsServicesOpen(false);
                            }}
                            className="block px-8 py-3 text-gray-200 hover:text-amber-300 hover:bg-blue-500/20 transition-all duration-200 font-semibold text-base uppercase tracking-wide"
                          >
                            {item.label}
                          </Link>
                        </motion.div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              <motion.div
                variants={mobileMenuItemVariants}
                className="w-full flex flex-col gap-3 items-center px-6 mt-6 pt-6 border-t border-blue-500/30"
              >
                <motion.a
                  href="tel:9831016701"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-amber-400 via-yellow-300 to-amber-400 text-slate-900 text-center font-bold uppercase tracking-wider shadow-lg shadow-amber-400/40 transition-all duration-300 text-base font-poppins"
                >
                  Call Now
                </motion.a>

                <motion.a
                  href="https://wa.me/919831016701"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 rounded-full border-2 border-green-400 text-green-300 text-center font-bold uppercase tracking-wider transition-all duration-300 hover:bg-green-500/10 text-base font-poppins"
                >
                  WhatsApp
                </motion.a>
              </motion.div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}