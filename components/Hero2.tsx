"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import { FlipWords } from "./FlipWords";
import Image from "next/image";

export function ImagesSliderDemo() {
  const words = ["Rooted in Nature", "Thriving in Health", "Modern Herbal"];
  const images = [
    "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1948&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1485433592409-9018e83a1f0d?q=80&w=1814&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1482189349482-3defd547e0e9?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <ImagesSlider
      className="min-h-screen w-full overflow-hidden"
      images={images}
    >
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center px-4"
      >
        <motion.p
          className={`font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4`}
        ></motion.p>
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, green 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  pb-16">
          <div className="flex flex-col-reverse lg:flex-row items-center mt-10 gap-12">
            {/* Left content */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl px-2 lg:text-5xl font-bold text-pink-400 mb-6 ease-in">
                Unirose Herbals
                <br />
                <FlipWords words={words} className="text-green-400" />
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl">
                Discover our carefully curated collection of premium herbal
                remedies, sourced from nature&apos;s finest ingredients for your
                holistic wellbeing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-8 py-3 bg-pink-400 hover:bg-pink-800 text-white rounded-full font-semibold transition-colors">
                  Shop Collection
                </button>
                <button className="px-8 py-3 border-2 border-pink-600 text-pink-600 hover:bg-pink-200 rounded-full font-semibold transition-colors">
                  Learn More
                </button>
              </div>
            </div>

            {/* Right content - Image */}
            <div className="flex justify-center lg:justify-end w-full lg:w-auto ">
              <Image
                src="/Logo2.png"
                alt="Hero Image"
                width={500}
                height={500}
                className="w-3/4 lg:w-auto"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </ImagesSlider>
  );
}
