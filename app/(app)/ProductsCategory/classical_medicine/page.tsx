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
        Classical medicine in Ayurveda refers to the traditional, 
        time-tested formulations and practices documented in ancient 
        Ayurvedic texts like the Charaka Samhita, Sushruta Samhita, and 
        Ashtanga Hrudayam. These medicines are prepared using specific herbs, 
        minerals, and animal products according to prescribed methods, aiming
         to restore balance to the body&apos;s doshas (Vata, Pitta, Kapha) and 
         promote holistic well-being. They are often complex, multi-ingredient
          preparations, renowned for their efficacy and adherence to 
          foundational Ayurvedic principles.
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
