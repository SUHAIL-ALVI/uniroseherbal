"use client";
import { Big_Shoulders_Text } from "next/font/google";
import { motion } from "framer-motion";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

const Big_Text = Big_Shoulders_Text({
  subsets: ["latin"],
  weight: ["300"],
});

export default function ContactSection() {
  return (
    <section className="bg-gradient-to-br min-h-screen w-full from-pink-100 via-white to-green-100 py-12 px-4 sm:px-8 md:px-20">
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
          width={200}
          height={80}
          className="drop-shadow-lg w-48 sm:w-56 md:w-64 h-auto"
        />
      </motion.div>

      {/* Contact Info Card */}
      <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-2xl p-6 sm:p-8 md:p-12 border border-pink-200">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-bold text-center mb-8 text-pink-600"
        >
          Contact Us
        </motion.h2>

        <div className="space-y-5 sm:space-y-6 text-sm sm:text-base text-gray-700">
          {/* Email */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-center sm:text-left"
          >
            <Mail className="text-pink-600 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            <p>
              <span className="font-semibold text-green-700">Email:</span>{" "}
              <a
                href="mailto:uniroseherbals@gmail.com"
                className="text-pink-600 hover:underline break-words"
              >
                uniroseherbals@gmail.com
              </a>
            </p>
          </motion.div>

          {/* Order Email */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.25 }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-center sm:text-left"
          >
            <Mail className="text-pink-600 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            <p>
              <span className="font-semibold text-green-700">
                Order Queries:
              </span>{" "}
              <a
                href="mailto:Nadeemalvi@uniroseherbals.com"
                className="text-pink-600 hover:underline break-words"
              >
                Nadeemalvi@uniroseherbals.com
              </a>
            </p>
          </motion.div>

          {/* Phone */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-center sm:text-left"
          >
            <Phone className="text-pink-600 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            <p>
              <span className="font-semibold text-green-700">Phone:</span>{" "}
              <a
                href="tel:+919650053210"
                className="text-pink-600 hover:underline"
              >
                +91 9650053210
              </a>
            </p>
          </motion.div>

          {/* Customer Care */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-center sm:text-left"
          >
            <Phone className="text-pink-600 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            <p>
              <span className="font-semibold text-green-700">
                Customer Care:
              </span>{" "}
              <a
                href="tel:+918533995433"
                className="text-pink-600 hover:underline"
              >
                +91 8533995433
              </a>
            </p>
          </motion.div>

          {/* Office */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-center sm:text-left"
          >
            <MapPin className="text-pink-600 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            <p>
              <span className="font-semibold text-green-700">Office:</span>{" "}
              Alpha 2, Greater Noida, Gautam Buddha Nagar, U.P – 201308{" "}
              <span className="text-blue-600">(Office)</span>
            </p>
          </motion.div>

          {/* Warehouse */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 text-center sm:text-left"
          >
            <MapPin className="text-pink-600 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            <p>
              <span className="font-semibold text-green-700">Warehouse:</span>{" "}
              UP WEST OFFICE <span className="text-blue-600">(Warehouse)</span>
            </p>
          </motion.div>
        </div>

        {/* Decorative line */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, type: "spring", stiffness: 150 }}
          className="mt-8 flex justify-center"
        >
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 via-pink-600 to-green-600 rounded-full" />
        </motion.div>
      </div>

      {/* Title */}
      <h1
        className={`${Big_Text.className} text-center font-bold mt-12 text-transparent bg-clip-text bg-gradient-to-b from-pink-600 to-green-600 text-5xl sm:text-6xl md:text-8xl leading-tight`}
      >
        UNIROSE{" "}
        <span className="block text-3xl sm:text-5xl md:text-6xl bg-gradient-to-b from-green-600 to-pink-600 bg-clip-text text-transparent">
          HERBALS
        </span>
      </h1>
    </section>
  );
}
