"use client";

import React from "react";
import Image from "next/image";
import NewFooter from "@/components/Footer2";
import Link from "next/link";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400"],
});

const Ayurvadic = () => {
  return (
    <div className="bg-gradient-to-b min-h-screen from-green-50 mt-16 to-white ">
      {/* Container */}
      <div className="max-w-7xl mx-5 mb-4 space-y-12">
        {/* Section Title */}
        <div className="text-center pt-7">
          <h1
            className={`${cinzel.className} text-3xl lg:text-4xl font-bold text-center mx-auto md:ml-12  text-gray-600`}
          >
            Know More About Ayurvedic Medicine
          </h1>
          <p
            className={`${cinzel.className} mt-4 text-gray-600 text-lg lg:text-xl`}
          >
            Ayurveda, which means “The Science of Life,” is one of the
            world&apos;s oldest systems of medicine. It started in India more
            than 5,000 years ago and focuses on keeping the mind, body, and soul
            in balance. Let&apos;s learn more about Ayurveda and how it has
            helped people live healthier lives.
          </p>
        </div>

        {/* History Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <Image
              src="/history_of_ayurveda.webp"
              alt="History of ayurvada"
              width={640}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-slate-600">
              The Beginning of Ayurveda
            </h2>
            <p className={`${cinzel.className} text-gray-600 text-md`}>
              Ayurveda is one of the oldest systems of medicine in the world,
              with roots going back over 5,000 years to ancient India. It was
              first mentioned in the Vedas, especially the Atharvaveda, which
              contains hymns and practices for health and healing. Texts like
              the Charaka Samhita and Sushruta Samhita documented its theories
              on wellness, anatomy, and treatments. Ayurveda focuses on the
              connection between mind, body, and spirit, emphasizing a natural
              and balanced way of living.
            </p>
          </div>
        </div>

        {/* How Ayurveda Works */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="lg:w-1/2">
            <Image
              src="/how_aurvadia_work.webp"
              alt="How Ayurvada Works"
              width={640}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-slate-600">
              How Ayurveda Works
            </h2>
            <p className={`${cinzel.className} text-gray-700 text-md`}>
              Ayurveda is based on balancing the body&apos;s three energies, or
              doshas: Vata (Air and Space), Pitta (Fire and Water), and Kapha
              (Water and Earth). Each person has a unique combination of these
              energies, and when they are in harmony , the body stays healthy.
              If the balance is disturbed, it can lead to illness. Ayurveda uses
              personalized treatments, dietary advice, and daily routines to
              restore this balance and promote overall health.
            </p>
          </div>
        </div>

        {/* Treatments Section */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          <div className="lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Herbal Remedies"
              width={640}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-slate-600">
              Ayurvedic Treatments
            </h2>
            <p className={`${cinzel.className} text-gray-700 text-md`}>
              Ayurveda offers a wide range of treatments using natural methods
              and herbal remedies. Some key practices include:
            </p>
            <ul className="list-disc list-inside text-gray-700 text-lg">
              <li>
                <strong>Natural herbs</strong> like turmeric and ashwagandha.
              </li>
              <li>
                <strong>Panchakarma:</strong>A detox therapy that removes toxins
                from the body.
              </li>
              <li>
                <strong>Herbal Medicine:</strong> Using turmeric, ashwagandha,
                and neem for healing.
              </li>
              <li>
                <strong>Yoga and Meditation:</strong> To calm the mind and
                strengthen the body.
              </li>

              <li>
                <strong>Detoxification techniques</strong> like Panchakarma.
              </li>
              <li>
                <strong>Daily practices</strong> like yoga and meditation.
              </li>
              <li>
                <strong>Diet and Lifestyle Adjustments:</strong>Diet and
                Lifestyle Adjustments: Eating fresh, seasonal foods and
                maintaining regular routines.
              </li>
            </ul>
          </div>
        </div>

        {/* Modern Ayurveda */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-8">
          <div className="lg:w-1/2">
            <Image
              src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Modern Ayurveda"
              width={640}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-slate-600">
              Ayurveda in Today’s World
            </h2>
            <p className={`${cinzel.className} text-gray-700 text-md`}>
              Ayurveda is gaining global recognition as a natural and holistic
              healthcare system. Modern research supports its effectiveness in
              managing chronic diseases and improving overall wellnessIn recent
              years, Ayurveda has gained popularity worldwide as a natural and
              holistic approach to healthcare. Many modern studies have shown
              its effectiveness in managing chronic conditions like stress,
              diabetes, and arthritis. Ayurvedic products, including herbal
              teas, oils, and skincare, are widely available. Its combination of
              ancient wisdom and modern relevance makes it a trusted choice for
              people seeking natural healing methods.
            </p>
          </div>
        </div>
      </div>
      <h2 className="text-center text-gray-600 text-4xl mt-16 font-bold">
        Why we Choose Ayurvadic Remedies ?
      </h2>
      <p className={`${cinzel.className} text-gray-700 text-md m-4 py-5`}>
        Ayurveda is gaining global recognition as a natural and holistic
        healthcare system. Modern research supports its effectiveness in
        managing chronic diseases and improving overall wellnessIn recent years,
        Ayurveda has gained popularity worldwide as a natural and holistic
        approach to healthcare. Many modern studies have shown its effectiveness
        in managing chronic conditions like stress, diabetes, and arthritis.
        Ayurvedic products, including herbal teas, oils, and skincare, are
        widely available. Its combination of ancient wisdom and modern relevance
        makes it a trusted choice for people seeking natural healing methods.
      </p>
      <div className="flex flex-col justify-center items-center my-6 md:mb-0">
        <Link href="https://en.wikipedia.org/wiki/Ayurveda">
          <button className="bg-[#45cb40] text-white font-inherit px-[1.2em] py-[0.35em] text-[17px] font-medium rounded-[0.9em] border-none tracking-[0.05em] flex items-center shadow-[inset_0_0_1.6em_-0.6em_#714da6] overflow-hidden relative h-[2.8em] pr-[3.3em] cursor-pointer group">
            Know More Ayurvadic
            <div className="bg-white ml-[1em] absolute flex items-center justify-center h-[2.2em] w-[2.2em] rounded-[0.7em] shadow-[0.1em_0.1em_0.6em_0.2em_#7b52b9] right-[0.3em] transition-all duration-300 group-hover:w-[calc(100%-0.6em)] group-active:scale-95">
              <svg
                className="w-[1.1em] text-[#5de37a] transition-transform duration-300 group-hover:translate-x-[0.1em]"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 12h14M12 5l7 7-7 7"
                />
              </svg>
            </div>
          </button>
        </Link>
      </div>

      <NewFooter />
    </div>
  );
};

export default Ayurvadic;
