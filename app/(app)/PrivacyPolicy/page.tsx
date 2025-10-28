"use client";
import type React from "react";
import { motion } from "framer-motion";
import { Shield, Lock, Eye, Users, Bell } from "lucide-react";

const ModernPrivacyPolicy: React.FC = () => {
  const sections = [
    {
      title: "Information We Collect",
      content:
        "We collect the following types of information Personal Identification Information: When you visit our website, make a purchase, sign up for our newsletter, or engage with us in any other way, we may collect your name, email address, phone number, billing and shipping address, and payment details.Non-personal Identification Information: This includes information such as your IP address, browser type, device information, and browsing patterns on our website. This helps us improve your experience and understand our audience.",
      icon: <Eye className="w-6 h-6" />,
    },
    {
      title: " How We Use Your Information",
      content:
        "Order Processing and Fulfillment: To process and deliver your orders and communicate with you regarding shipping and delivery Customer Support: To provide customer support for any questions or issues you may have Marketing and Promotions: With your consent, we may send you newsletters, product updates, and special promotions related to our herbal and Ayurvedic products Improvement of Services: To personalize and improve your experience on our website, including making recommendations for products based on your preferences. Legal Compliance: To comply with applicable laws and protect our legal rights.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "How We Protect Your Information",
      content:
        "We implement industry-standard security measures to protect your personal data. All sensitive information, such as payment details, is encrypted and transmitted securely using SSL encryption. We store your data on secure servers and take appropriate steps to prevent unauthorized access or disclosure",
      icon: <Bell className="w-6 h-6" />,
    },
    {
      title: "Changes to This Privacy Policy",
      content:
        "We reserve the right to update or change this Privacy Policy at any time. Any changes will be posted on this page with the updated effective date. Please check this policy periodically to stay informed about how we are protecting your data.",
      icon: <Lock className="w-6 h-6" />,
    },
    {
      title: "Trademark Notice",
      content:
        "All products offered by Unirose Herbals are trademarked. Our trademarks, logos, and product names are the exclusive property of Unirose Herbals and are protected under applicable trademark laws. Any unauthorized use of these trademarks is prohibited.",
      icon: <Shield className="w-6 h-6" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold p-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl p-5 text-gray-600 dark:text-gray-300">
            At Unirose Herbals, your privacy is of paramount importance to us.
            We are committed to safeguarding your personal data and ensuring
            that your experience with our products is safe and secure. This
            Privacy Policy outlines the types of information we collect, how we
            use it, and the measures we take to protect your privacy.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl overflow-hidden"
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
              className="p-8 border-b border-gray-100 dark:border-gray-700 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-300"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-pink-400 rounded-2xl flex items-center justify-center text-white">
                    {section.icon}
                  </div>
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">
                    {section.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default ModernPrivacyPolicy;
