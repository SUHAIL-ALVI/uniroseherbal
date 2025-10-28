"use client";
import type React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Heart, Sun } from "lucide-react";

const AboutSection: React.FC = () => {
  const iconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="bg-gradient-to-b from-white to-[#F8E7F6] py-20 md:py-32 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="md:flex items-stretch">
            {/* Image Column */}
            <div className="md:w-1/2 relative">
              <div className="h-64 md:h-full relative overflow-hidden">
                <Image
                  src="/Logo2.png" // Replace with your actual image
                  alt="Our Company"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/100 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6  text-slate-200 ">
                  <h3 className="text-2xl font-bold mb-2">Rooted in Nature</h3>
                  <p className="text-sm">
                    Blending ancient wisdom with modern science
                  </p>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="md:w-1/2 p-8 md:p-12 lg:p-16 bg-gradient-to-br from-[#F8E7F6] to-white">
              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="text-4xl md:text-5xl font-bold text-gray-500 mb-8 leading-tight"
              >
                Discover the Essence of{" "}
                <span className="text-pink-400">Unirose Herbals</span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-gray-500 text-lg mb-6 leading-relaxed"
              >
                Unirose Herbals, we promote holistic wellness through Ayurveda,
                blending ancient wisdom with modern science. Guided by
                &quot;Nature&apos;s Cure,&quot; we create natural, effective
                remedies for a balanced life. Our mission is to offer safe,
                sustainable solutions that enhance well-being while addressing
                modern health challenges.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="text-gray-500 text-lg mb-8 leading-relaxed"
              >
                At Unirose Herbals, we embrace Ayurveda&apos;s healing power to
                promote natural well-being. Our philosophy, “Nature&apos;s
                Cure,” blends time-tested remedies with modern innovation. We
                are committed to creating safe, effective, and sustainable
                products that support balance, vitality, and a healthier
                lifestyle.
              </motion.p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-center"
                >
                  <Leaf className="w-12 h-12 mx-auto text-green-600 mb-2" />
                  <p className="text-sm font-semibold text-green-800">
                    100% Natural
                  </p>
                </motion.div>
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.2 }}
                  className="text-center"
                >
                  <Heart className="w-12 h-12 mx-auto text-red-500 mb-2" />
                  <p className="text-sm font-semibold text-red-800">
                    Crafted with Love
                  </p>
                </motion.div>
                <motion.div
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.4 }}
                  className="text-center"
                >
                  <Sun className="w-12 h-12 mx-auto text-yellow-500 mb-2" />
                  <p className="text-sm font-semibold text-yellow-800">
                    Radiant Health
                  </p>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
              >
                <a
                  href="/About/AboutDetails"
                  className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
                >
                  More info
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
    </section>
  );
};

export default AboutSection;
