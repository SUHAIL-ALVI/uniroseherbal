import React from "react";
import { Big_Shoulders_Text } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const Big_Text = Big_Shoulders_Text({
  subsets: ["latin"],
  weight: ["300"],
});

const KnowMoreUnirose = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-green-100 to-white flex items-center justify-center px-4 lg:px-12">
      {/* Overlay Content */}
      <div className="flex flex-col items-center space-y-6 text-center max-w-4xl">
        {/* Image */}
        <div className="w-32 h-32 md:w-48 md:h-48 lg:w-64 lg:h-64">
          <Image
            src="/Logo2.png"
            alt="unirose_Logo_2"
            height={500}
            width={500}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Heading */}
        <h1
          className={`${Big_Text.className} text-3xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-br from-green-500 to-green-800 text-transparent bg-clip-text`}
        >
          Know More About Unirose Herbals
        </h1>

        {/* Button */}
        <Link href="/About">
          <button
            className="
            text-[16px] md:text-[18px] lg:text-[20px] px-6 md:px-8 py-3 rounded-lg font-semibold 
            bg-gradient-to-br from-pink-400 to-[#ec4899] text-white 
            shadow-md hover:shadow-lg transition-shadow duration-200 ease-in-out 
            hover:-translate-y-1 active:translate-y-0 active:shadow-inner
          "
          >
            Click Here
          </button>
        </Link>
      </div>
    </div>
  );
};

export default KnowMoreUnirose;
