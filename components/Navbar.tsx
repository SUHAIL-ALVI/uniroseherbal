"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50">
      <motion.div
        className="backdrop-blur-md bg-white/30 "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/">
                <Image
                  src="/UniLogo.png"
                  alt="Logo"
                  height={220}
                  width={220}
                  className=""
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link
                  href="/"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium relative group"
                >
                  Home
                  <motion.div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-500 to-[#2abe39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link
                  href="/About"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium relative group"
                >
                  About
                  <motion.div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-500 to-[#2abe39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >

                 <Link
                  href="/About/AboutFooter"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium relative group"
                >
                  Contect
                  <motion.div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-500 to-[#2abe39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Link
                  href="/Products"
                  className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium relative group"
                >
                  Products
                  <motion.div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-green-500 to-[#2abe39] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <Link href="/Ayurvadic">
                  <button className="relative w-36 h-12 rounded-full text-sm font-bold text-gray-600 hover:text-gray-100 font-inherit border-none shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] overflow-hidden group">
                    <span className="absolute inset-0 w-0 h-full rounded-full bg-gradient-to-r from-[#0fd850] to-[#f9f047] transition-all duration-500 ease-in-out group-hover:w-full"></span>
                    <span className="relative z-10">➢ Ayurvadic</span>
                  </button>
                </Link>
              </motion.div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ y: -200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }} // Reduced duration for quicker opening animation
            className="md:hidden"
          >
            <div className="flex flex-col items-center justify-center px-4 py-6 space-y-6 sm:px-6 backdrop-blur-md bg-white/40 rounded-lg shadow-lg">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }} // Reduced delay for smoother transition
              >
                <Link
                  href="/"
                  className="text-gray-700 hover:text-green-500 px-4 py-3 rounded-md text-lg font-medium transition duration-300 ease-in-out transform hover:scale-110"
                >
                  Home
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.2 }} // Slight delay to stagger the animations
              >
                <Link
                  href="/About"
                  className="text-gray-700 hover:text-green-500 px-4 py-3 rounded-md text-lg font-medium transition duration-300 ease-in-out transform hover:scale-110"
                >
                  About
                </Link>
              </motion.div>


              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }} // Added delay for staggered effect
              >
                <Link
                  href="/About/AboutFooter"
                  className="text-gray-700 hover:text-green-500 px-4 py-3 rounded-md text-lg font-medium transition duration-300 ease-in-out transform hover:scale-110"
                >
                  Contect us
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.3 }} // Added delay for staggered effect
              >
                <Link
                  href="/Products"
                  className="text-gray-700 hover:text-green-500 px-4 py-3 rounded-md text-lg font-medium transition duration-300 ease-in-out transform hover:scale-110"
                >
                  Products
                </Link>
              </motion.div>

              

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.4 }} // Slight delay for this button
              >
                <Link href="/Ayurvadic">
                  <button className="w-full text-center bg-gradient-to-r from-[#0fd850] to-[#f9f047] text-white px-6 py-3 rounded-md text-lg font-bold hover:opacity-90 transition duration-300 ease-in-out transform hover:scale-105">
                    Know Ayurvedic
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;
