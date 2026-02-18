"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const floatingVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5,
      },
    },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const hoverVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.15 },
  };

  return (
    <motion.div
      variants={floatingVariants}
      initial="initial"
      animate="animate"
      className="fixed bottom-6 right-6 z-40"
    >
      <motion.a
        href="https://wa.me/919831016701"
        target="_blank"
        rel="noopener noreferrer"
        variants={hoverVariants}
        whileHover="hover"
        whileTap={{ scale: 0.9 }}
        className="relative flex items-center justify-center"
      >
        {/* Pulsing background circle */}
        <motion.div
          variants={pulseVariants}
          animate="animate"
          className="absolute inset-0 bg-green-500 rounded-full opacity-20"
        />

        {/* Main button */}
        <div className="relative w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full shadow-2xl shadow-green-500/50 flex items-center justify-center group hover:shadow-green-500/70 transition-shadow duration-300 cursor-pointer border-2 border-green-300">
          <MessageCircle size={32} className="text-white drop-shadow-lg" />

          {/* Shine effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent"
            animate={{
              opacity: [0.5, 0.2, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Tooltip */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileHover={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute right-20 bg-green-600 text-white px-4 py-2 rounded-lg whitespace-nowrap text-sm font-semibold shadow-lg pointer-events-none"
          >
            Chat with us
            <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-8 border-l-green-600 border-t-4 border-t-transparent border-b-4 border-b-transparent" />
          </motion.div>
        </div>
      </motion.a>
    </motion.div>
  );
}
