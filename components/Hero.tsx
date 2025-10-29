"use client";
import React from "react";
import { FlipWords } from "./ui/flip-words";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import { motion } from "framer-motion";

const HeroSection = () => {
  const words = ["Rooted in Nature", "Thriving in Health", "Modern Herbal"];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white to-pink-100 overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="purple"
      />

      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, #22c55e 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-col-reverse lg:flex-row items-center mt-10 gap-12">
          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl px-2 lg:text-6xl font-bold text-pink-400 mb-6">
              Unirose Herbals
              <br />
              <FlipWords words={words} className="text-green-400" />
            </h1>
            <p className="text-lg mt-10 pt-10 md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Welcome to Unirose Herbals, where Ayurveda meets modern wellness.
              Guided by <span className="text-green-500 font-bold">&quot;Nature&apos;s Cure&quot;</span> we create safe,
              effective herbal solutions for a healthier life.
            </p>

            {/* Animated Buttons */}
            <div className="flex mt-10 flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              {/* Query Section Button */}
              <Link href="/Workon/FormSection" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 overflow-hidden text-white font-semibold rounded-2xl group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-rose-400 to-rose-200 rounded-2xl transition-all duration-500 group-hover:brightness-110" />
                  <span className="relative z-10">Query Section</span>
                </motion.button>
              </Link>

              {/* Products Button */}
              <Link href="/Products" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="relative w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border-2 border-pink-400 text-pink-600 rounded-2xl font-semibold overflow-hidden group bg-white transition-colors duration-500 hover:bg-pink-50"
                >
                  <span className="relative z-10">Our Products</span>
                </motion.button>
              </Link>
            </div>
          </div>

          {/* Right content - Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center lg:justify-end w-full lg:w-auto"
          >
            <Image
              src="/Logo2.png"
              alt="Hero Image"
              width={500}
              height={500}
              className="w-3/4 lg:w-auto drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
