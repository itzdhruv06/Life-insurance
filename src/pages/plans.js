import React from "react";
import { motion } from "framer-motion";
import termImg from "../assets/term.webp";
import wholeImg from "../assets/whole.webp";
import endowmentImg from "../assets/endowment.webp";
import ulipImg from "../assets/ulip.webp";

const plans = [
  {
    title: "Term Life Insurance",
    img: termImg,
    description:
      "Affordable, fixed-term life coverage that provides financial protection for your family in case of untimely death.",
  },
  {
    title: "Whole Life Insurance",
    img: wholeImg,
    description:
      "Coverage for your entire life with savings and wealth-building benefits included.",
  },
  {
    title: "Endowment Plans",
    img: endowmentImg,
    description:
      "Life coverage with a lump sum payout on maturity or death, combining insurance and savings.",
  },
  {
    title: "ULIP (Unit Linked Insurance Plan)",
    img: ulipImg,
    description:
      "Life cover with investment options in equity or debt markets, offering returns with protection.",
  },
];

const Plans = () => {
  return (
    <div className="mt-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-500">
      <section className="py-16 px-4 max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold text-blue-800 dark:text-yellow-400 mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Explore Our Insurance Plans
        </motion.h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-blue-900 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform duration-500 hover:-translate-y-2"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <img
                src={plan.img}
                alt={plan.title}
                className="w-full h-40 object-cover rounded-md mb-4 transition-transform duration-500 hover:scale-105"
              />
              <h3 className="text-xl font-semibold text-blue-800 dark:text-yellow-300 mb-2">
                {plan.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-200 text-sm">
                {plan.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Plans;