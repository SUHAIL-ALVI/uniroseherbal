"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Big_Shoulders_Text } from "next/font/google";
import Link from "next/link";

const Big_Text = Big_Shoulders_Text({
  subsets: ["latin"],
  weight: ["400"],
});

const DiscoverUnirose = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 py-16 bg-gradient-to-b from-violet-200 via-white to-green-50 overflow-hidden">
      {/* 🌸 Animated floating nature elements */}
      <motion.div
        className="absolute top-10 left-10 text-6xl text-green-400/30"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        🌿
      </motion.div>
      <motion.div
        className="absolute bottom-10 right-12 text-5xl text-pink-300/40"
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
      >
        🌸
      </motion.div>

      {/* 🪷 Logo */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/Logo2.png"
          alt="Unirose Herbals Logo"
          width={180}
          height={180}
          className="rounded-full shadow-lg"
        />
      </motion.div>

      {/* 🌼 Title */}
      <motion.h1
        className={`${Big_Text.className} mt-8 text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-600 to-pink-500 bg-clip-text text-transparent`}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Discover the Essence of Unirose Herbals
      </motion.h1>

      {/* 🌱 Description */}
      <motion.p
        className="mt-6 max-w-2xl text-lg md:text-xl text-gray-700 leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        At <span className="text-green-500 font-bold">Unirose Herbals</span>, we promote holistic wellness through Ayurveda,
        blending ancient wisdom with modern science. Guided by &quot;Nature&apos;s Cure,&quot; 
        we create natural, effective remedies for a balanced life. Our mission is to offer 
        safe, sustainable solutions that enhance well-being while addressing modern health challenges.
      </motion.p>

      {/* 🌾 Decorative divider */}
      <motion.div
        className="mt-10 flex items-center justify-center space-x-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        <div className="h-0.5 w-12 bg-green-500 rounded-full"></div>
        <span className="text-green-600 font-medium">Rooted in Nature Thriving in Health</span>
        <div className="h-0.5 w-12 bg-pink-400 rounded-full"></div>
      </motion.div>

      {/* 🌷 Animated Button */}
      <motion.div
        className="mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <Link href="/About/AboutDetails">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 20px rgba(236, 72, 153, 0.5)",
            }}
            whileTap={{ scale: 0.97 }}
            className="relative px-8 py-3 rounded-full font-semibold text-white text-lg bg-gradient-to-r from-green-500 via-pink-500 to-violet-500 shadow-md transition-all duration-300 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-pink-300"
          >
            Explore Our Journey
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
};

export default DiscoverUnirose;
