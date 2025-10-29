"use client";

import React from "react";
import { motion } from "framer-motion";
import { Big_Shoulders_Text } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const Big_Text = Big_Shoulders_Text({
  subsets: ["latin"],
  weight: ["400"],
});

const KnowMoreUnirose = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-green-50 via-white to-pink-50 flex items-center justify-center px-6 py-16 overflow-hidden">
      {/* 🌿 Floating natural icons */}
      <motion.span
        className="absolute top-10 left-10 text-5xl text-green-400/30"
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        🌿
      </motion.span>

      <motion.span
        className="absolute top-1/3 right-12 text-4xl text-pink-300/30"
        animate={{ y: [0, 20, 0], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        🌸
      </motion.span>

      <motion.span
        className="absolute bottom-10 left-1/3 text-5xl text-green-500/20"
        animate={{ y: [0, 25, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        🍃
      </motion.span>

      <motion.span
        className="absolute bottom-16 right-1/4 text-4xl text-amber-400/30"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      >
        ☀️
      </motion.span>

      {/* 🌼 Main content */}
      <motion.div
        className="flex flex-col items-center text-center max-w-4xl space-y-8 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* 🌺 Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/Logo2.png"
            alt="Unirose Herbals Logo"
            width={200}
            height={200}
            className="rounded-full shadow-lg shadow-green-300/30"
          />
        </motion.div>

        {/* 🪷 Heading */}
        <motion.h1
          className={`${Big_Text.className} text-3xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-green-600 via-green-600 to-green-600 text-transparent bg-clip-text`}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Know More About Unirose Herbals
        </motion.h1>

       

        {/* 🌸 Trust + Healing decorative section */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-6 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          {[
            { emoji: "💚", label: "Trust & Purity" },
            { emoji: "🌿", label: "Natural Healing" },
            { emoji: "☀️", label: "Ayurvedic Wellness" },
            { emoji: "🌸", label: "Sustainable Remedies" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              className="px-4 py-2 bg-white rounded-full shadow-sm hover:shadow-md border border-green-100 flex items-center gap-2 text-sm md:text-base font-medium text-gray-700"
            >
              <span>{item.emoji}</span>
              {item.label}
            </motion.div>
          ))}
        </motion.div>

        {/* 🌷 Animated Button */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link href="/About">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 25px rgba(236, 72, 153, 0.5)",
              }}
              whileTap={{ scale: 0.96 }}
              className="mt-8 px-8 py-3 rounded-2xl font-semibold text-white text-lg bg-gradient-to-r from-pink-500 via-pink-500 to-pink-500 shadow-md transition-all duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-pink-300"
            >
              Discover Our Journey
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default KnowMoreUnirose;
