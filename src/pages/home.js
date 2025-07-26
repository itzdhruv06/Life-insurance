import React from "react";
import heroImage from "../assets/insurance-producer.jpg";
import familyImg from "../assets/family.jpg";
import supportImg from "../assets/support.jpg";
import coverageImg from "../assets/coverage.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="mt-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500">
      {/* Hero Section */}
      <section className="bg-gray-100 dark:bg-gray-900">
        {/* Full width image on top */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src={heroImage}
            alt="Life Insurance Hero"
            className="w-full h-[85vh] object-cover rounded-none shadow-md"
          />
        </motion.div>

        {/* Text content below */}
        <motion.div
          className="text-center px-4 py-12 md:py-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 dark:text-yellow-400 mb-6">
            Secure Your Life. Protect Their Future.
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            We provide trusted life insurance solutions designed to keep your loved ones protected through every phase of life.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-md"
          >
            Get a Free Quote
          </motion.button>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-500">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-700 dark:text-yellow-400 mb-6">
            Why Choose LifeSecure?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            Our mission is to offer reliable, affordable life insurance plans with a customer-first approach.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: coverageImg,
                title: "Tailored Coverage",
                description: "Custom policies that match your life goals and secure your family's future.",
              },
              {
                img: familyImg,
                title: "Trusted Claims",
                description: "98% claim settlement with transparency and compassion.",
              },
              {
                img: supportImg,
                title: "Instant Support",
                description: "Get help 24/7 from our friendly, trained advisors anytime, anywhere.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-blue-50 dark:bg-blue-900 p-6 rounded-xl shadow-md hover:shadow-xl transition text-left"
                whileHover={{ y: -5 }}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="rounded-md w-full h-48 object-cover mb-4"
                />
                <h3 className="text-xl font-semibold text-blue-800 dark:text-yellow-300 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-200">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 dark:bg-yellow-500 text-white dark:text-blue-900 py-16 text-center transition-colors duration-500">
        <h2 className="text-3xl font-bold mb-4">Your Future Starts Now</h2>
        <p className="text-lg mb-6">Protect your family with confidence. Start with a free quote today.</p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="bg-white dark:bg-blue-900 text-blue-700 dark:text-yellow-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-yellow-600 transition"
        >
          Talk to an Advisor
        </motion.button>
      </section>
    </div>
  );
};

export default Home;