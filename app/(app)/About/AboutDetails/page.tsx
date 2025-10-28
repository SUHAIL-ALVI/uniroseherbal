"use client";
import type React from "react";
import { motion } from "framer-motion";
import { Leaf, Heart, Star } from "lucide-react";
import Link from "next/link";

const CompanyDetails: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F8E7F6] relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+CjxyZWN0IHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgZmlsbD0iI2Y4ZTdmNiI+PC9yZWN0Pgo8cGF0aCBkPSJNMzYgNDZMMjYgNDAgTDI2IDM0IEwzNiAyOCBMNDYgMzQgTDQ2IDQwIFoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2U5ZDVmMyIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+Cjwvc3ZnPg==')] opacity-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-pink-400/90 mb-8 relative inline-block"
          >
            Welcome To Unirose Herbals™
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-green-300 to-pink-400"></span>
          </motion.h2>

          <motion.div
            variants={containerVariants}
            className="space-y-8 text-slate-600"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl leading-relaxed"
            >
              Welcome to Unirose Herbals, we are dedicated to promoting holistic
              health and wellness through the power of Ayurveda. Our mission is
              to deliver natural, effective solutions that enhance the quality
              of life for our customers.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-12 my-12"
            >
              <div className="text-center">
                <Leaf className="w-12 h-12 text-green-600 mx-auto mb-2" />
                <p className="font-semibold">100% Natural</p>
              </div>
              <div className="text-center">
                <Heart className="w-12 h-12 text-red-500 mx-auto mb-2" />
                <p className="font-semibold">Made with Love</p>
              </div>
              <div className="text-center">
                <Star className="w-12 h-12 text-yellow-500 mx-auto mb-2" />
                <p className="font-semibold">Premium Quality</p>
              </div>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl leading-relaxed"
            >
              <b>Our Philosophy: Nature&apos;s Cure</b>
              <br /> At Unirose Herbals, we believe in the healing power of
              nature. Guided by the philosophy of &quot;Nature&apos;s
              Cure,&quot; we combine ancient Ayurvedic principles with modern
              approaches to bring time-tested remedies into today’s world. Our
              commitment is to help individuals achieve balance, harmony, and
              natural health in their daily lives.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl leading-relaxed"
            >
              <b>A Modern Approach to Ancient Wisdom</b> <br />
              Unirose Herbals blends the wisdom of Ayurveda with the innovations
              of modern science to meet the evolving needs of our customers. We
              understand the importance of addressing modern health challenges
              while staying rooted in the timeless practices of Ayurveda. Our
              aim is to provide products that are both effective and
              sustainable, ensuring holistic well-being for all.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl leading-relaxed"
            >
              <b>Our Mission</b>
              <br />
              Our mission is simple yet powerful: to improve health and wellness
              by offering natural Ayurvedic remedies that integrate ancient
              wisdom with modern advancements. We are dedicated to creating
              products that are safe, reliable, and aligned with nature&apos;s
              healing power.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl leading-relaxed"
            >
              <b>The Benefits of Ayurveda in Modern Life</b>
              <br />
              Ayurveda offers unique solutions to modern health challenges{" "}
              <br />
              <b>Holistic Health</b>
              <br />
              Ayurveda views the body, mind, and spirit as interconnected,
              providing complete wellness rather than treating isolated
              symptoms.
              <br />
              <b>Natural Ingredients</b>
              <br />
              Our Ayurvedic products are made from natural herbs and
              ingredients, offering gentle yet effective solutions without
              harmful side effects.
              <br />
              <b>Personalized Care</b>
              <br />
              Ayurveda recognizes individual differences, offering personalized
              remedies tailored to unique constitutions (doshas)
              <br />
              <b>Stress Relief</b>
              <br />
              Practices like yoga, meditation, and herbal therapies help combat
              stress and promote emotional balance
              <br />
              <b>Improved Digestion</b>
              <br />
              Ayurveda emphasizes the importance of digestive health, offering
              solutions to counteract the effects of modern diets and lifestyles
              <br />
              <b> Detoxification</b>
              <br />
              Through techniques like Panchakarma, Ayurveda helps cleanse the
              body of toxins, rejuvenating and revitalizing overall health
              <br />
              <b>Preventive Health</b>
              <br />
              Ayurveda focuses on prevention, encouraging healthy daily habits
              and routines to avoid illness.
              <br />
              <b>Balance and Harmony</b>
              <br />
              By promoting balanced living, Ayurveda helps individuals maintain
              harmony in their physical, mental, and emotional well-being.
              <br />
              <br />
              <b>
                {" "}
                At Unirose Herbals, we strive to make these benefits accessible
                to everyone. We are proud to bring the rich traditions of
                Ayurveda into the modern world, providing solutions that support
                health, happiness, and harmony.
              </b>
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold mt-12"
            >
              Experience the Power of Nature with Unirose Herbals.
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12">
            <Link
              href="/Products"
              className="inline-block bg-gradient-to-r from-purple-400 to-pink-400 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:shadow-lg hover:scale-105 transform"
            >
              Discover Our Products
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-slate-50 via-pink-300 to-green-300"></div>
    </section>
  );
};

export default CompanyDetails;
