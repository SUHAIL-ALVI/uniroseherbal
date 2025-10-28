import Link from "next/link";
import Image from "next/image";
import React from "react";

const ProductCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Classical Ayurvedic Formulations",
      image: "/k1.png", // e.g., mortar-pestle with herbs
      para:
        "Classical Ayurvedic medicines are prepared strictly as per authoritative texts, using plant, mineral, and rasa-based processes to balance doshas and support holistic healing across preventive and curative care.", // Cite in page content, not code
      route: "/ProductsCategory/classical_medicine",
    },
    {
      id: 2,
      title: "Patent/Proprietary Ayurvedic (ASU)",
      image: "/k2.png", // e.g., labeled bottles in compliant packaging
      para:
        "Patent/Proprietary Ayurvedic products follow Ayurveda’s materia medica while using standardized, innovation-led formulations that meet licensing and GMP norms for consistent quality and safety.",
      route: "/ProductsCategory/patented_medicine",
    },
    {
      id: 3,
      title: "OTC Ayurvedic Wellness",
      image: "/otc.png", // e.g., chyawanprash, oils, kadha visuals
      para:
        "OTC Ayurvedic products like chyawanprash, herbal oils, and digestive tonics offer convenient daily support for immunity, digestion, skin, and respiratory wellness using time-tested rasayana and herbal blends.",
      route: "/ProductsCategory/otc_medicine",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-t from-slate-50 to-green-300">
      {/* Hero Section */}
      <div className="relative w-full h-[150px]">
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl md:text-5xl font-bold text-gray-700">
          Product Category
        </h1>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-4 py-10">
        {categories.map((category, index) => (
          <div
            key={category.id}
            className={`flex flex-col md:flex-row items-center gap-8 mb-12 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Image Section */}
            <div className="w-full md:w-1/2 flex justify-center">
              <Image
                src={category.image}
                alt={`${category.title} Image`}
                width={500}
                height={500}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>

            {/* Text Section */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                {category.title}
              </h2>
              {category.para && (
                <p className="text-gray-600 mb-4 leading-7">
                  {category.para}
                </p>
              )}
              <Link href={category.route}>
                <button className="bg-gradient-to-br from-emerald-600 to-emerald-400 hover:from-emerald-700 hover:to-emerald-500 text-white px-4 py-2 rounded mt-4">
                  Know More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategories;
