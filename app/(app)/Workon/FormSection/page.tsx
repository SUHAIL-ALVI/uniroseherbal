"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Loader2 } from "lucide-react";

export default function WorkInProgress() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 via-white to-pink-50 overflow-hidden text-center px-6">
      {/* Animated background circles */}
      <motion.div
        className="absolute w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        style={{ top: "-5rem", left: "-5rem" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"
        style={{ bottom: "-8rem", right: "-8rem" }}
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-6"
      >
        <Image
          src="/Logo2.png"
          alt="Unirose Logo"
          width={200}
          height={80}
          className="drop-shadow-lg"
        />
      </motion.div>

      {/* Main message */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-4xl md:text-5xl font-bold text-green-700 mb-4"
      >
        We’re Working On It 🚧
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-lg text-gray-600 max-w-xl mx-auto mb-8"
      >
        This feature is currently under development.  
        Our team is polishing every detail 🌸.  
        Stay tuned for something amazing coming soon!
      </motion.p>

      {/* Animated loader icon */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
        className="bg-white border-4 border-pink-200 rounded-full p-4 shadow-xl"
      >
        <Loader2 className="w-8 h-8 text-pink-500" />
      </motion.div>

      {/* Bottom gradient line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "80%" }}
        transition={{ duration: 1.2 }}
        className="mt-10 h-1 rounded-full bg-gradient-to-r from-green-600 via-pink-600 to-green-600"
      />
    </section>
  );
}
