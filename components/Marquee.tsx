"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const items = [
  { img: "/fssai.png", text: "100% Certified by FSSAI" },
  { img: "/gmp.jpeg", text: "GMP Quality Assured" },
  { img: "/ISO.png", text: "ISO Certified Products" },
  { img: "/fssai.png", text: "100% Certified by FSSAI" },
  { img: "/gmp.jpeg", text: "GMP Quality Assured" },
  { img: "/ISO.png", text: "ISO Certified Products" },
  
];

export default function EnhancedMarquee() {
  return (
    <div className="relative overflow-hidden py-6 sm:py-8">
      {/* Infinite marquee scroll */}
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-100%"] }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
      >
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="flex items-center gap-8 sm:gap-14 px-4 sm:px-8"
          >
            {items.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.08, y: -2 }}
                transition={{ type: "spring", stiffness: 250, damping: 15 }}
                className="flex items-center gap-3 sm:gap-4 px-5 py-3 sm:px-6 sm:py-3 
                  bg-white/25 backdrop-blur-md rounded-full border border-gray-200/40 
                  shadow-[0_2px_10px_rgba(0,0,0,0.08)] hover:shadow-[0_4px_20px_rgba(0,0,0,0.15)] 
                  transition-all duration-300 max-w-[260px] sm:max-w-none overflow-hidden"
              >
                <Image
                  src={item.img}
                  alt={item.text}
                  width={36}
                  height={36}
                  className="object-contain shrink-0"
                />
                <span className="text-sm sm:text-base font-medium text-gray-700 whitespace-nowrap">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>

      {/* Subtle animated shimmer */}
      <motion.div
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-100/10 to-transparent pointer-events-none"
      />
    </div>
  );
}
