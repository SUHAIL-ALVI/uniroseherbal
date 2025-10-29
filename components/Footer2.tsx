"use client";
import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="bg-gradient-to-t from-green-100 via-pink-50 to-white text-gray-700 py-8 shadow-inner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 🌸 Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* 🔗 Links Section */}
          <div className="flex space-x-8 text-center md:text-left">
            <Link
              href="/About/AboutDetails"
              className="text-gray-700 hover:text-pink-600 font-medium transition-all duration-300 hover:scale-105"
            >
              About
            </Link>
            <Link
              href="/About/AboutFooter"
              className="text-gray-700 hover:text-pink-600 font-medium transition-all duration-300 hover:scale-105"
            >
              Contact
            </Link>
            <Link
              href="/PrivacyPolicy"
              className="text-gray-700 hover:text-pink-600 font-medium transition-all duration-300 hover:scale-105"
            >
              Privacy Policy
            </Link>
          </div>

          {/* 🌿 Social Media Icons */}
          <div className="flex space-x-6">
            <Link
              href="/Workon/SocialMedia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-transform duration-300 hover:scale-110"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="/Workon/SocialMedia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-transform duration-300 hover:scale-110"
            >
              <Twitter size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/unirose_herbals/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-transform duration-300 hover:scale-110"
            >
              <Instagram size={24} />
            </Link>
          </div>
        </div>

        {/* 🌺 Divider */}
        <div className="border-t border-gray-300 my-6 opacity-50" />

        {/* 💬 Footer Text */}
        <div className="text-center text-gray-600 text-sm space-y-1">
          <p>&copy; 2025 Unirose Herbals. All rights reserved.</p>
          <p className="text-pink-600 font-semibold tracking-wide">
            Developed by Suhail Alvi with ❤️
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
