"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    { label: "Services", href: "/services" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
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
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg shadow-black/5"
          : "bg-white/60 backdrop-blur-md border-b border-white/20 shadow-none"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link
              href="/"
              className="relative text-2xl lg:text-3xl font-bold tracking-tight text-gray-900 group"
            >
              M.N.{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
                Graphics
              </span>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-blue-600"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-1 font-medium">
            {navItems.map((item) => (
              <motion.div key={item.href} variants={navLinkVariants}>
                <Link
                  href={item.href}
                  className="relative px-4 py-2 text-gray-700 transition-colors duration-300 hover:text-blue-600 group"
                >
                  {item.label}
                  <motion.div
                    className="absolute bottom-0 left-4 right-4 h-0.5 bg-blue-600"
                    variants={underlineVariants}
                    initial="initial"
                    whileHover="hover"
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <motion.a
              href="tel:9831016701"
              whileHover={{ scale: 1.05, backgroundColor: "#1e40af" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="px-5 lg:px-6 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all duration-300"
            >
              Call Now
            </motion.a>

            <motion.a
              href="https://wa.me/919831016701"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#22c55e",
                color: "#ffffff",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="px-5 lg:px-6 py-2.5 rounded-full border-2 border-green-500 text-green-600 text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30"
            >
              WhatsApp
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="md:hidden text-gray-800 p-2 hover:bg-gray-100 rounded-lg transition-all duration-300"
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
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl shadow-black/5 overflow-hidden"
          >
            <motion.nav
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center py-6 gap-2"
            >
              {navItems.map((item) => (
                <motion.div key={item.href} variants={mobileMenuItemVariants}>
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="relative px-6 py-3 text-gray-700 font-medium text-lg transition-colors duration-300 hover:text-blue-600 group block"
                  >
                    {item.label}
                    <motion.div
                      className="absolute bottom-1 left-6 right-6 h-0.5 bg-blue-600"
                      initial={{ width: 0 }}
                      whileHover={{ width: "calc(100% - 24px)" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}

              <motion.div
                variants={mobileMenuItemVariants}
                className="w-full flex flex-col gap-3 items-center px-6 mt-4 pt-4 border-t border-gray-100"
              >
                <motion.a
                  href="tel:9831016701"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 rounded-full bg-blue-600 text-white text-center font-semibold shadow-lg shadow-blue-600/30 transition-all duration-300"
                >
                  Call Now
                </motion.a>

                <motion.a
                  href="https://wa.me/919831016701"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full px-6 py-3 rounded-full border-2 border-green-500 text-green-600 text-center font-semibold transition-all duration-300"
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