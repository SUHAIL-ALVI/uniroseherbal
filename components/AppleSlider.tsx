"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";



export function AppleCards() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20 bg-gradient-to-t from-white via-pink-200 to-green-200 ...">
      <span className="text-center">
        <h2
          className={` items-center justify-center flex flex-col max-w-7xl pl-4 mx-auto  text-4xl md:text-5xl  text-gray-600 dark:text-neutral-600 font-sans`}
        >
          Unirose{" herbals"}
          <span className="text-green-500 font-bold">
            {" "}
            Products
          </span>{" "}
        </h2>
      </span>

      <h6 className="flex flex-col ml-6 items-center justify-center text-sm pt-4 ">
        Proprietary & Patent Medicines™
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
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl p-4 font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200 ">
                Cough Rose Syrup is an effective remedy for bronchitis, allergic
                cough.
              </span>{" "}
              and dry irritating cough. Formulated with natural ingredients, it
              helps soothe the throat, reduce irritation, and provide relief
              from persistent coughing.
              {" "} <span className="text-neutral-700 dark:text-neutral-200 font-bold">Available in Two Size 100ml and 200ml</span>
            </p>
            <Image
              src="/cough syrup.jpeg"
              alt="Cough Rose Syrup"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto mt-7 rounded-lg object-contain"
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
                Unirose Jiger Syrup
              </span>{" "}
              is a natural remedy designed to support liver health, particularly
              in cases of jaundice and an enlarged liver. It helps detoxify the
              liver, promote proper liver function, and restore balance,
              offering relief and aiding in recovery from liver-related issues.
              {" "} <span className="text-neutral-700 dark:text-neutral-200 font-bold">Available in Two Size 100ml and 200ml</span>
            </p>
            <Image
              src="/jiger syrup.jpeg"
              alt="Unirose jiger Syrup"
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
                Mussafi Rose
              </span>{" "}
              is a powerful natural solution for treating acne and various
              allergic conditions. Its unique blend of ingredients helps reduce
              inflammation, clear the skin, and prevent breakouts while also
              alleviating symptoms of allergies, promoting overall skin health
              and well-being.
              {" "} <span className="text-neutral-700 dark:text-neutral-200 font-bold">Available in Two Size 100ml and 200ml</span>
            </p>
            <Image
              src="/mussafi rose.jpeg"
              alt="Mussafi Rose Syrup"
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
                Unirose Zyme
              </span>{" "}
              is a natural solution designed to address common digestive issues
              such as indigestion, flatulence, hyperacidity, and bloating. Its
              unique formulation helps improve digestion, reduce discomfort, and
              restore balance in the digestive system, providing effective
              relief from digestive disturbances. 
              {" "} <span className="text-neutral-700 dark:text-neutral-200 font-bold">Available in Two Size 100ml and 200ml</span>
            </p>
            <Image
              src="/unirosezyme.jpeg"
              alt="Rose Zyme Syrup"
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

const DummyContent4 = () => {
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
                Dibe Rose
              </span>{" "}
              Managing diabetes just got simpler. Introducing Dibe Rose Tablets, your natural ally in maintaining healthy blood sugar levels. Rooted in herbal tradition, Dibe Rose is crafted to support your well-being with care. Take a step towards a balanced life
              {" "} <span className="text-neutral-700 dark:text-neutral-200 font-bold">Available in Tablet Form</span>
            </p>
            <Image
              src="/diberose.jpeg"
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

//Roshanda rose

const DummyContent5 = () => {
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
                Joshanda
              </span>{" "}
              Ayuverdic Joshanda is a traditional herbal decoction (or kaadha) primarily used in the 
              Unani and Ayurvedic systems of medicine. It is a popular and time-tested 
              natural remedy, most commonly used to relieve symptoms of cold, cough, 
              and congestion. 
              {" "} <span className="text-neutral-700 dark:text-neutral-200 font-bold">Available in Two Size 100ml and 200ml</span>
            </p>
            <Image
              src="/joshanda.jpeg"
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
    category: "Cough Syrup ™",
    title: "Cough Rose Syrup",
    src: "/cough1.png",
    content: <DummyContent />,
  },
  {
    category: "jiger Syrup ™",
    title: "Unirose Jiger Syrup",
    src: "/unirosejiger.jpeg",
    content: <DummyContent1 />,
  },
  {
    category: "Mussafi Syrup ™",
    title: "Mussafi Rose Syrup",
    src: "/mussafi rose.jpeg",
    content: <DummyContent2 />,
  },

  {
    category: "Zyme Syrup ™",
    title: "Unirose Zyme Syrup",
    src: "/unizyme.jpeg",
    content: <DummyContent3 />,
  },
  {
    category: "Dibe Rose ™",
    title: "Dibe Rose",
    src: "/diberose.jpeg",
    content: <DummyContent4 />,
  },
  {
    category: "Joshanda ™",
    title: "Joshanda",
    src: "/joshanda.jpeg",
    content: <DummyContent5 />,
  },
];
