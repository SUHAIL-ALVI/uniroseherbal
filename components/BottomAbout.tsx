import React from "react";
import { Big_Shoulders_Text } from "next/font/google";
const Big_Text = Big_Shoulders_Text({
    subsets: ["latin"],
    weight: ["300"],
  });

const BottomAbout = () => {
 

  return (
    <div>
      <h1
        className={`${Big_Text.className} grid md:grid-cols-2 gap-0 bg-gradient-to-b from-pink-600 to-white bg-clip-text text-transparent text-center text-bold text-9xl mx-auto`}
      >
        UNIROSE{" "}
        <span className="bg-gradient-to-b from-green-600 hidden md:block to-white bg-clip-text text-transparent ">
          HERBALS
        </span>
      </h1>
    </div>
  );
};

export default BottomAbout;
