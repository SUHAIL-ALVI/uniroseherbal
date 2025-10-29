"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Big_Shoulders_Text } from "next/font/google";

const Big_Text = Big_Shoulders_Text({
  subsets: ["latin"],
  weight: ["400"],
});

const Page = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-pink-50 overflow-hidden px-6 py-16">
      {/* 🌿 Floating Elements */}
      <motion.div
        className="absolute top-10 left-10 text-6xl text-green-400/20"
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
      >
        🌿
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-12 text-5xl text-pink-300/30"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        🌸
      </motion.div>
      <motion.div
        className="absolute top-1/3 right-1/4 text-5xl text-green-300/20"
        animate={{ rotate: [0, 15, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        🍃
      </motion.div>

      {/* 🧪 Logo with Soft Entry */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="relative z-10"
      >
        <Image
          src="/Logo2.png"
          alt="Unirose Logo"
          width={220}
          height={220}
          className="drop-shadow-lg hover:scale-105 transition-transform duration-500"
        />
      </motion.div>

      {/* 🌿 Title */}
      <motion.h1
        className={`${Big_Text.className} text-4xl md:text-6xl lg:text-7xl font-extrabold text-center mt-10 bg-gradient-to-r from-green-600 via-emerald-500 to-pink-400 bg-clip-text text-transparent drop-shadow-md`}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
      >
        Patent / Proprietary Ayurvedic (ASU)
      </motion.h1>

      {/* ✨ Description */}
      <motion.p
        className="mt-8 max-w-3xl text-center text-gray-700 text-lg md:text-xl leading-relaxed backdrop-blur-sm bg-white/40 p-6 rounded-2xl shadow-sm border border-green-100"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
       A <span className="text-green-600 font-bold">Patent/Proprietary Ayurvedic</span> (ASU) medicine is a finished product containing 
       one or more ingredients of the Ayurveda, Siddha, or Unani (ASU) systems 
       of medicine, manufactured exclusively by the licensee (the company). 🌿Fixed Formulation: Unlike classical Ayurvedic medicines whose formulations are 
       prescribed in ancient, authoritative texts, a Patent/Proprietary medicine has a specific, fixed, and unique formulation developed and owned by the manufacturer.
       Novelty/Uniqueness: The formulation is often considered &quot;patent&quot; or &quot;proprietary&quot; because it is a new combination, a modification of a classical formula, or a unique process of manufacture, giving the manufacturer exclusive rights over its production and sale.
       Legal Definition: In India, these products are defined under the Drugs and Cosmetics Act, 1940, and rules thereunder. They are required to clearly state the active ingredients on the label.
       Examples: Common examples include herbal capsules, tablets, syrups, oils, or creams that are sold under a brand name and are not mentioned in the ancient Ayurvedic texts.
      </motion.p>

      {/* 🌺 Animated Decorative Divider */}
      <motion.div
        className="mt-10 flex items-center justify-center space-x-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        <div className="h-[2px] w-12 bg-gradient-to-r from-green-400 to-transparent"></div>
        <span className="text-emerald-600 font-medium tracking-wide">
          Rooted in Nature, Thriving in Health
        </span>
        <div className="h-[2px] w-12 bg-gradient-to-l from-pink-400 to-transparent"></div>
      </motion.div>

      {/* 🌼 Floating Glow orbs */}
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 bg-pink-300/30 rounded-full blur-2xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-20 left-24 w-20 h-20 bg-green-300/30 rounded-full blur-2xl"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />

      {/* 🌱 Call-to-Action Button */}
      <motion.div
        className="mt-12 z-10"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
       
      </motion.div>
    </section>
  );
};

export default Page;
