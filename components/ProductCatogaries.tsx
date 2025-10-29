"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Big_Shoulders_Text } from "next/font/google";

const Big_Text = Big_Shoulders_Text({
  subsets: ["latin"],
  weight: ["400"],
});

const ProductCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Classical Ayurvedic Formulations",
      image: "/k1.png",
      para:
        "Prepared according to ancient Ayurvedic texts, these formulations combine herbal, mineral, and rasa-based remedies to restore balance and harmony for preventive and curative wellness.",
      route: "/ProductsCategory/classical_medicine",
    },
    {
      id: 2,
      title: "Patent / Proprietary Ayurvedic (ASU)",
      image: "/k2.png",
      para:
        "Developed with innovation and scientific validation, our patented Ayurvedic products combine traditional herbs with modern standards for safety, consistency, and efficacy.",
      route: "/ProductsCategory/patented_medicine",
    },
    {
      id: 3,
      title: "OTC Ayurvedic Wellness",
      image: "/otc.png",
      para:
        "Convenient Ayurvedic solutions like chyawanprash, herbal oils, and tonics that naturally support immunity, digestion, skin, and respiratory wellness for everyday vitality.",
      route: "/ProductsCategory/otc_medicine",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-green-50 via-white to-pink-50 overflow-hidden py-20">
      {/* 🌿 Floating nature icons */}
      <motion.span
        className="absolute top-16 left-10 text-6xl text-green-300/30 select-none"
        animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      >
        🌿
      </motion.span>
      <motion.span
        className="absolute bottom-10 right-12 text-5xl text-pink-300/40 select-none"
        animate={{ y: [0, 15, 0], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 9, repeat: Infinity }}
      >
        🌸
      </motion.span>
      <motion.span
        className="absolute top-1/3 right-1/4 text-6xl text-green-200/40 select-none"
        animate={{ y: [0, -25, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      >
        🍃
      </motion.span>

      {/* 🌸 Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 flex flex-col items-center mb-16 px-4"
      >
        <h1
          className={`${Big_Text.className} text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-green-700 via-emerald-500 to-pink-500 bg-clip-text text-transparent text-center`}
        >
          Our Product Categories
        </h1>
        <motion.div
          className="mt-4 h-1 w-24 bg-gradient-to-r from-green-400 to-pink-400 rounded-full"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </motion.div>

      {/* 🌿 Category Cards */}
      <div className="container mx-auto px-6 md:px-10 z-10 relative">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`flex flex-col md:flex-row items-center gap-10 mb-20 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* 🖼️ Image Section */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <Image
                src={category.image}
                alt={category.title}
                width={500}
                height={500}
                className="rounded-3xl shadow-2xl object-cover border-2 border-green-200"
              />
            </motion.div>

            {/* 🪷 Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold text-green-800 mb-4 bg-gradient-to-r from-green-600 to-emerald-400 bg-clip-text text-transparent">
                {category.title}
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed text-base md:text-lg">
                {category.para}
              </p>

              <motion.div whileHover={{ scale: 1.05 }}>
                <Link href={category.route}>
                  <button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-br from-green-600 to-emerald-400 hover:from-pink-500 hover:to-rose-400 transition-all duration-300 shadow-md hover:shadow-xl">
                    Know More →
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* 🌾 Bottom Soft Glow */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-green-200/50 to-transparent" />
    </section>
  );
};

export default ProductCategories;
