// components/VideoEmbed.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Big_Shoulders_Text } from "next/font/google";

const Big_Text = Big_Shoulders_Text({
  subsets: ["latin"],
  weight: ["300"],
});

interface VideoEmbedProps {
  videoId: string; // YouTube Video ID
  title: string; // Title of the video
}

const VideoEmbed: React.FC<VideoEmbedProps> = ({ videoId, title }) => {
  return (
    <motion.div
      className="video-container max-w-xs md:max-w-3xl mx-auto mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h3
        className={`${Big_Text.className} text-3xl md:text-6xl py-4 text-center bg-gradient-to-r from-green-300 to bg-green-700 bg-clip-text text-transparent`}
      >
        {title}
      </h3>
      <iframe
        width="100%"
        height="390"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="mx-auto mt-4 rounded-lg shadow-lg"
      ></iframe>
      <div className="flex flex-col justify-center items-center my-7">
        <Link href="https://www.youtube.com/@RelaxationFilm">
          <button className="relative w-52 h-12 rounded-full text-sm font-bold text-blue-600 hover:text-gray-100 font-inherit border-none shadow-[6px_6px_12px_#c5c5c5,-6px_-6px_12px_#ffffff] overflow-hidden group">
            <span className="absolute inset-0 w-0 h-full rounded-full bg-gradient-to-r from-[#5eb164] to-[#1eaf19] transition-all duration-500 ease-in-out group-hover:w-full"></span>
            <span className="relative z-10"> ╰┈➤ Video Copyright©</span>
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

export default VideoEmbed;
