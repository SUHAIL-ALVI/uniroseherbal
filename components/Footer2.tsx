"use client";
import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-white">
      <footer className="bg-gradient-to-t from-pink-400 to bg-gray-50 text-slate-400 py-6  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Logo Section */}

            {/* Links Section */}
            <div className="flex space-x-8 text-center md:text-left">
              <Link
                href="/About/AboutDetails"
                className="text-slate-500 hover:text-white transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-slate-500 hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
              <Link
                href="/PrivacyPolicy"
                className="text-slate-500 hover:text-white transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <Link
                href="/Workon/SocialMedia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors duration-300"
              >
                <Facebook size={24} />
              </Link>
              <Link
                href="/Workon/SocialMedia"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors duration-300"
              >
                <Twitter size={24} />
              </Link>
              <Link
                href="https://www.instagram.com/unirose_herbals/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-500 hover:text-white transition-colors duration-300"
              >
                <Instagram size={24} />
              </Link>
             
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mt-6 text-center text-gray-700 text-sm">
            <p>&copy; 2025 Unirose Herbals. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
