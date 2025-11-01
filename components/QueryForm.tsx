"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import Image from "next/image";
import Footer from "./Footer2";

type FormData = {
  name: string;
  contact: string;
  email: string;
  query: string;
};

export default function QueryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/send-query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result?.message || "Failed to send query");

      toast.success("✅ Query sent successfully!");
      reset();
    } catch (err) {
        console.log(err);
        
      toast.error("❌ Failed to send the query. Please try again later.");
    }
  };

  return (
    <div>
    <div className="relative flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 via-white to-green-50 overflow-hidden">
      {/* Background Animation Blurs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-200/40 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-200/40 rounded-full blur-3xl animate-pulse delay-300" />

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 flex flex-col md:flex-row items-center backdrop-blur-2xl bg-white/30 shadow-2xl rounded-3xl overflow-hidden border border-white/40 max-w-5xl w-full mx-4"
      >
        {/* Left Side */}
        <div className="w-full md:w-1/2 flex flex-col border-b md:border-b-0 md:border-r border-white/40 items-center justify-center p-8 sm:p-10 bg-gradient-to-br from-pink-50 via-white to-white text-pink-500">
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center space-y-4"
          >
            <Image
              src="/Logo2.png"
              alt="Unirose Herbals"
              width={180}
              height={60}
              className="drop-shadow-lg"
            />

            {/* Hide heading & paragraph on small devices */}
            <div className="hidden sm:block text-center">
              <h2 className="text-3xl font-bold tracking-wide">
                Welcome to{" "}
                <span className="text-pink-500">Unirose Herbals</span>
              </h2>
              <p className="mt-3 text-slate-600 text-sm leading-relaxed">
                We value your trust <br /> 
                Send your query — our herbal experts will get back within {" "}<span className="text-green-600 font-bold"> 24 hours.</span>
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Side - Query Form */}
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 p-8 sm:p-10 space-y-5 bg-white/70 backdrop-blur-xl"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-center bg-gradient-to-r from-pink-500 via-rose-400 to-rose-200 text-transparent bg-clip-text mb-3">
            Send a Query
          </h3>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/80 shadow-sm"
              placeholder="Full Name"
            />
            {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>}
          </div>

          {/* Contact */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Contact Number</label>
            <input
              {...register("contact", {
                required: "Contact number is required",
                minLength: { value: 7, message: "Enter a valid number" },
              })}
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/80 shadow-sm"
              placeholder="+91 9XXXXXXXXX"
            />
            {errors.contact && <p className="text-sm text-red-500 mt-1">{errors.contact.message}</p>}
          </div>

          {/* Email */}
          <div>
  <label className="block text-sm font-medium text-gray-700">Email</label>
  <input
    {...register("email", {
      required: "Email is required",
      pattern: {
        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "Enter a valid email",
      },
    })}
    className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/80 shadow-sm"
    placeholder="your@email.com"
  />
  {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>}
</div>

          {/* Query */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Your Query / Message</label>
            <textarea
              {...register("query", {
                required: "Please write your query",
                minLength: { value: 10, message: "Write at least 10 characters" },
              })}
              rows={4}
              className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400 bg-white/80 resize-none shadow-sm"
              placeholder="Tell us about your query..."
            />
            {errors.query && <p className="text-sm text-red-500 mt-1">{errors.query.message}</p>}
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-full bg-gradient-to-r from-pink-500 via-rose-400 to-rose-200 text-white px-6 py-3 font-semibold shadow-lg hover:shadow-xl transition-all disabled:opacity-70"
          >
            {isSubmitting ? "Sending..." : "Submit Query"}
          </motion.button>

          
        </motion.form>
      </motion.div>
     
    </div>
    <Footer />
 </div>
     
  );
}
