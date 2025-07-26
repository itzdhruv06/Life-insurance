import React from "react";
import { motion } from "framer-motion";

const Plans = () => {
  const plans = [
    {
      title: "Basic Plan",
      price: "₹499/month",
      features: [
        "Coverage up to ₹5 Lakhs",
        "Term: 10 Years",
        "Includes accidental cover",
        "Easy claim process",
      ],
      recommended: false,
    },
    {
      title: "Family Plan",
      price: "₹999/month",
      features: [
        "Coverage up to ₹15 Lakhs",
        "Term: 15 Years",
        "Includes spouse + children",
        "24/7 customer support",
      ],
      recommended: true,
    },
    {
      title: "Premium Plan",
      price: "₹1499/month",
      features: [
        "Coverage up to ₹30 Lakhs",
        "Lifetime renewal option",
        "Tax saving benefits",
        "Dedicated claim advisor",
      ],
      recommended: false,
    },
  ];

  return (
    <div className="mt-24 min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 px-4 py-12 transition-colors duration-500">
      <div className="text-center mb-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-yellow-400 mb-4"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Choose Your Protection Plan
        </motion.h1>
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Flexible and affordable plans designed to secure your family’s financial future.
        </motion.p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            className={`rounded-xl border-2 shadow-xl p-8 transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-1 hover:scale-[1.03] ${
              plan.recommended
                ? "border-blue-600 bg-gradient-to-br from-blue-100 to-white dark:from-blue-800 dark:to-gray-900"
                : "border-gray-300 bg-white dark:bg-gray-800"
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
          >
            {plan.recommended && (
              <div className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full inline-block mb-3 shadow-md">
                🌟 Most Popular
              </div>
            )}
            <div className="text-4xl mb-4">
            {plan.title === "Basic Plan" && "🧾"}
            {plan.title === "Family Plan" && "👨‍👩‍👧‍👦"}
            {plan.title === "Premium Plan" && "💎"}
            </div>
            <h3 className="text-2xl font-bold text-blue-700 dark:text-yellow-400 mb-2">
              {plan.title}
            </h3>
            <p className="text-xl font-semibold text-gray-800 dark:text-white mb-6">
              {plan.price}
            </p>
            <ul className="text-gray-600 dark:text-gray-300 mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✔️</span> {feature}
                </li>
              ))}
            </ul>
            <motion.button
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.03 }}
            className="w-full bg-blue-600 hover:bg-blue-700 dark:hover:bg-yellow-500 text-white dark:text-gray-900 py-2 rounded-lg transition">
            Get Started
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Plans;