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
        Ayurvedic OTC products bring the wisdom of ancient healing into modern daily life. 
        These readily available remedies, often based on traditional herbal 
        formulations, are designed for common health concerns, offering accessible
         and natural support for minor ailments and general well-being. 
         They empower individuals to manage their health proactively with gentle, 
         time-honored solutions.
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
