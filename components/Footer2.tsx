"use client";
import React from "react";
import { Facebook, Twitter, Instagram, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="relative overflow-hidden bg-gradient-to-b from-white via-pink-50/50 to-green-50/50 text-gray-700 pt-12 pb-8 shadow-inner border-t border-pink-100/50"
    >
      {/* 🌸 Decorative Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-green-100/10 via-pink-100/20 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
        {/* 🪴 Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* 🌿 Logo and tagline */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <div className="flex items-center gap-3">
              <Image
                src="/Logo2.png"
                alt="Unirose Herbals Logo"
                width={50}
                height={50}
                className="rounded-full object-contain"
              />
              <h2 className="text-lg font-bold text-gray-800">
                Unirose <span className="text-pink-600">Herbals</span>
              </h2>
            </div>
            
          </div>

          {/* 🔗 Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <Link
              href="/About/AboutDetails"
              className="hover:text-pink-600 transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/About/AboutFooter"
              className="hover:text-pink-600 transition-colors duration-300"
            >
              Contact
            </Link>
            <Link
              href="/PrivacyPolicy"
              className="hover:text-pink-600 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/Products"
              className="hover:text-pink-600 transition-colors duration-300"
            >
              Products
            </Link>
          </div>

          {/* 🌺 Social Icons */}
          <div className="flex space-x-5">
            <motion.a
              href="/Workon/SocialMedia"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-2 rounded-full bg-white/60 hover:bg-pink-100/70 shadow-md"
            >
              <Facebook size={20} className="text-gray-600" />
            </motion.a>
            <motion.a
              href="/Workon/SocialMedia"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-2 rounded-full bg-white/60 hover:bg-pink-100/70 shadow-md"
            >
              <Twitter size={20} className="text-gray-600" />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/unirose_herbals/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-2 rounded-full bg-white/60 hover:bg-pink-100/70 shadow-md"
            >
              <Instagram size={20} className="text-gray-600" />
            </motion.a>
            <motion.a
              href="mailto:uniroseherbals@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="p-2 rounded-full bg-white/60 hover:bg-pink-100/70 shadow-md"
            >
              <Mail size={20} className="text-gray-600" />
            </motion.a>
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-300/50" />

        {/* 💬 Bottom Text */}
        <div className="text-center text-gray-600 text-sm">
          <p>&copy; 2025 <span className="font-semibold text-pink-600">Unirose Herbals</span>. All rights reserved.</p>
          <p className="text-xs mt-1">
            Build by{" "}
            <span className="font-semibold text-green-600 hover:text-pink-600 transition">
              Suhail Alvi
            </span>
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
