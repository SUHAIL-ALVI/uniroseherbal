"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

// Sample image URLs (replace with your own images in the public folder)
const images = [
  "/combo1.jpg", // Make sure these images are in the public folder
  "/combo sleep.jpg",
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Function to go to the previous image
  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="relative w-full  h-64 md:h-96 overflow-hidden">
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Image Slider */}
        <motion.div
          className="w-full h-full"
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }} // Initial slide-in position
          animate={{ opacity: 1, x: 0 }} // Slide to normal position
          exit={{ opacity: 0, x: -100 }} // Exit slide animation
          transition={{
            duration: 0.8,
            ease: "easeInOut",
          }}
        >
          <Image
            src={images[currentIndex]} // Image paths relative to the public folder
            alt={`Slide ${currentIndex}`}
            layout="fill" // Ensure the image fills the container
            objectFit="cover" // Maintain aspect ratio, cover the area
          />
        </motion.div>
      </motion.div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
      >
        &#8594;
      </button>
    </div>
  );
};

export default ImageSlider;
