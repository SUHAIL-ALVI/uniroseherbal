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
    <section className="bg-gradient-to-br min-h-screen w-full from-pink-100 via-white to-green-100 py-16 px-6 md:px-20">
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
                href="mailto:Nadeemalvi@uniroseherbals.com"
                className="text-pink-600 hover:underline"
              >
                Nadeemalvi@uniroseherbals.com
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
                href="tel:+919650053210"
                className="text-pink-600 hover:underline"
              >
                +91 9650053210
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
              Alpha-2 Greater Noida GTB Nagar UP India 201301  <span className="text-blue-600">(Office)</span>
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
              Delhi Road Hapur Uttar Pradesh India 245101 <span className="text-blue-600">(Wharehouse)</span>
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
      <h1
        className={`${Big_Text.className} grid md:grid-cols-2 gap-0 bg-gradient-to-b from-pink-600 to-white bg-clip-text text-transparent text-center text-bold text-9xl mx-auto`}
      >
        UNIROSE{" "}
        <span className="bg-gradient-to-b  from-green-600 hidden md:block to-white bg-clip-text text-transparent ">
          HERBALS
        </span>
      </h1>
    </section>
    
  );
}
