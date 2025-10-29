import React from "react";
import Image from "next/image";
import { Big_Shoulders_Text } from "next/font/google";

const Big_Text = Big_Shoulders_Text({
  subsets: ["latin"],
  weight: ["300"],
});

const Page = () => {
  return (
    <div className="min-h-screen bg-violet-200 overflow-hidden">
      {/* Logo Section */}
      <section className="flex justify-center items-center mt-10">
        <Image src="/Logo2.png" alt="UniLogo2" width={400} height={400} />
      </section>

      {/* Description Section */}
      <p className="text-wrap text-center max-w-3xl md:mx-auto mx-5 mb-32 mt-8 text-2xl font-serif text-gray-700">
        OTC (Over-the-Counter) Ayurvedic medicines are herbal formulations
        available without a doctor’s prescription. They are made using
        time-tested Ayurvedic herbs that help maintain overall health and
        well-being. Designed for safe self-care, these products support everyday
        wellness and preventive health naturally, without harmful side effects.
      </p>

      {/* Title Section */}
      <h1
        className={`${Big_Text.className} grid md:grid-cols-2 gap-0 bg-gradient-to-b from-pink-600 to-white bg-clip-text text-transparent text-center font-bold text-9xl mx-auto`}
      >
        UNIROSE{" "}
        <span className="bg-gradient-to-b from-green-600 to-white bg-clip-text text-transparent hidden md:block">
          HERBALS
        </span>
      </h1>
    </div>
  );
};

export default Page;
