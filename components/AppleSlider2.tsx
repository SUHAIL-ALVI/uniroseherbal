"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";



export function AppleCard() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 bg-gradient-to-b from-white via-pink-200">
      <span className="text-center">
        <h2
          className={` items-center justify-center flex flex-col max-w-7xl pl-4 mx-auto  text-4xl md:text-5xl  text-gray-600 dark:text-neutral-600 font-sans`}
        >
          Unirose{" herbals"}
          <span className="text-pink-500 font-bold">
            {" "}
            Products
          </span>{" "}
        </h2>
      </span>

      <h6 className="flex flex-col ml-6 items-center justify-center text-sm pt-4 ">
        Only Womes Products™
      </h6>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Leuco Rose
              </span>{" "}
              is a specialized herbal remedy beneficial for managing PCOD
              (Polycystic Ovarian Disease) and leucorrhea. It helps regulate
              hormonal imbalances, support reproductive health, and reduce
              symptoms associated with these conditions, promoting overall
              well-being for women.
              {" "} <span className="text-gray-300 font-bold">Available in Two Size 100ml and 200ml</span>
            </p>
            <Image
              src="/lucorose.jpeg"
              alt="lucorose syrup"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full mt-7 rounded-lg w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};
const DummyContent1 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
               Leuco off Rose
              </span>{" "}
              Managing diabetes just got simpler. 
              Introducing Dibe Rose Tablets, your natural ally in maintaining healthy blood sugar levels. 
              Rooted in herbal tradition, Dibe Rose is crafted to support your well-being with care. 
              Take a step towards a balanced life.
              {" "} <span className="text-gray-300 font-bold">Available in Tablet Form</span>
            </p>
            <Image
              src="/lucodibe.jpeg"
              alt="luco off rose tablets"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mt-7 rounded-lg mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const DummyContent2 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Coming Soon
              </span>{" "}
              We are excited to announce that a new product from Unirose Herbals
              is coming soon! Stay tuned for a natural, effective solution
              designed to enhance your health and well-being. With our
              commitment to quality and innovation, this new product will bring
              you closer to achieving your wellness goals. Keep an eye out for
              more details!
            </p>
            <Image
              src="/comingsoon.png"
              alt="Unirose Herbals"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full mt-7 rounded-lg w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const DummyContent3 = () => {
  return (
    <>
      {[...new Array(1).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Coming Soon
              </span>{" "}
              We are excited to announce that a new product from Unirose Herbals
              is coming soon! Stay tuned for a natural, effective solution
              designed to enhance your health and well-being. With our
              commitment to quality and innovation, this new product will bring
              you closer to achieving your wellness goals. Keep an eye out for
              more details!
            </p>
            <Image
              src="/comingsoon2.png"
              alt="Unirose Herbals"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full mt-7 rounded-lg w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};



const data = [
  {
    category: "Leuco Syrup ™",
    title: "Leuco Rose Syrup",
    src: "/lucorose.jpeg",
    content: <DummyContent />,
  },
  {
    category: "Leuco off rose ™",
    title: "Leuco off rose",
    src: "/lucodibe.jpeg",
    content: <DummyContent1 />,
  },
  {
    category: "Product",
    title: "Coming Soon",
    src: "/comingsoon.png",
    content: <DummyContent2 />,
  },

  {
    category: "Product",
    title: "Coming Soon",
    src: "/comingsoon2.png",
    content: <DummyContent3 />,
  },
 
];
