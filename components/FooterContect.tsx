"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-br from-pink-100 via-white to-green-100 py-16 px-6 md:px-20">
      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center mb-10"
      >
        <Image
          src="/UniLogo.png"
          alt="Unirose Logo"
          width={250}
          height={100}
          className="drop-shadow-lg"
        />
      </motion.div>

      {/* Contact Info */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl p-8 md:p-12 border border-pink-200">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-8 text-pink-600"
        >
          Contact Us
        </motion.h2>

        <div className="space-y-6 text-lg text-gray-700">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <Mail className="text-pink-600 w-6 h-6" />
            <p>
              <span className="font-semibold text-green-700">Email:</span>{" "}
              <a
                href="mailto:info@unirose.com"
                className="text-pink-600 hover:underline"
              >
                info@unirose.com
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4"
          >
            <Phone className="text-pink-600 w-6 h-6" />
            <p>
              <span className="font-semibold text-green-700">Phone:</span>{" "}
              <a
                href="tel:+919876543210"
                className="text-pink-600 hover:underline"
              >
                +91 98765 43210
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-4"
          >
            <MapPin className="text-pink-600 w-6 h-6" />
            <p>
              <span className="font-semibold text-green-700">Location:</span>{" "}
              123 Green Street, New Delhi, India
            </p>
          </motion.div>
        </div>

        {/* Decorative animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
          className="mt-10 flex justify-center"
        >
          <div className="w-24 h-1 bg-gradient-to-r from-green-600 via-pink-600 to-green-600 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
