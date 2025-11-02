"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Facebook, Twitter } from "lucide-react";

export default function SocialComingSoon() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[100vh] bg-gradient-to-br from-pink-50 via-white to-green-50 overflow-hidden text-center px-6">
      {/* Floating background effects */}
      <motion.div
        className="absolute w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"
        style={{ top: "-5rem", left: "-5rem" }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-pulse"
        style={{ bottom: "-8rem", right: "-8rem" }}
      />

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="mb-8"
      >
        <Image
          src="/UniLogo.png"
          alt="Unirose Logo"
          width={220}
          height={80}
          className="drop-shadow-lg"
        />
      </motion.div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-green-700 mb-4"
      >
        We’re Coming Soon on <span className="text-blue-700">Facebook</span> & <span className="text-black">X</span> Do Check out <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600">Instagram</span>  🌸
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 text-lg max-w-xl mx-auto mb-10"
      >
        Stay tuned — <span className="text-pink-600 font-bold">Already on instagram</span> soon you&apos;ll be able to connect with us on your favorite
        social platforms! 💫
      </motion.p>

      {/* Icons row */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
        }}
        className="flex gap-6"
      >
        {socials.map((s, i) => (
          <motion.a
            key={s.name}
            href="#"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.15, rotate: 3 }}
            className="p-4 bg-white border border-pink-200 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <s.icon
              className={`w-8 h-8 ${
                i % 2 === 0 ? "text-green-600" : "text-pink-500"
              }`}
            />
          </motion.a>
        ))}
      </motion.div>

      {/* Bottom gradient line */}
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "70%" }}
        transition={{ duration: 1.2 }}
        className="mt-12 h-1 rounded-full bg-gradient-to-r from-green-600 via-pink-600 to-green-600"
      />
    </section>
  );
}

const socials = [
  { name: "Twitter", icon: Twitter },
  { name: "Facebook", icon: Facebook },
 
];
