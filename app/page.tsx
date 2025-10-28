import { AppleCards } from "@/components/AppleSlider";
import { AppleCard } from "@/components/AppleSlider2";
import Footer from "@/components/Footer2";
import HeroSection from "@/components/Hero";

import KnowMoreUnirose from "@/components/KnowMoreUnirose";
import ProductCatogaries from "@/components/ProductCatogaries";

import React from "react";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AppleCards />
      <AppleCard />
      <ProductCatogaries />
      <KnowMoreUnirose />

      <Footer />
    </div>
  );
};

export default Home;
