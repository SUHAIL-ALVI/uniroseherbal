import Image from "next/image";
import React from "react";
import { Big_Shoulders_Text } from "next/font/google";

const Big_Text = Big_Shoulders_Text({
  subsets: ["latin"],
  weight: ["300"],
});

const page = () => {
  return (
   
      
       <div className="min-h-screen bg-violet-200 overflow-hidden">
        
      <section className="flex justify-center  items-center">
        <Image src="/Logo2.png" alt="UniLogo2" width={400} height={400} />
      </section>
      <p className="text-wrap justify-center text-center max-w-3xl md:mx-auto mx-5 mb-32 items-center mt-8 text-2xl font-serif text-gray-700 ">
        Patented Ayurvedic products represent the innovative evolution of ancient wisdom. These unique formulations combine traditional 
        Ayurvedic principles with modern research and intellectual property protection. 
        Developed through rigorous study and often utilizing novel 
        combinations or extraction methods, they offer advanced, 
        specialized solutions for specific health needs, backed by scientific
         validation and exclusive therapeutic benefits.
      </p>
      <h1
        className={`${Big_Text.className} grid md:grid-cols-2 gap-0 bg-gradient-to-b from-pink-600 to-white bg-clip-text text-transparent text-center text-bold text-9xl mx-auto`}
      >
        UNIROSE{" "}
        <span className="bg-gradient-to-b  from-green-600 hidden md:block to-white bg-clip-text text-transparent ">
          HERBALS
        </span>
      </h1>
    </div>
   
   
  );
};

export default page;
