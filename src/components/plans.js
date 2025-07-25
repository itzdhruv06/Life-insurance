import React from "react";

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
    <div className="mt-24 min-h-screen bg-gray-50 px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Choose Your Protection Plan
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Flexible and affordable plans designed to secure your family’s financial future.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`p-8 rounded-xl shadow-lg bg-white border-2 transition-all ${
              plan.recommended ? "border-blue-600 scale-105" : "border-gray-200"
            }`}
          >
            {plan.recommended && (
              <div className="text-sm bg-blue-600 text-white px-3 py-1 rounded-full inline-block mb-3">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold text-blue-700 mb-2">{plan.title}</h3>
            <p className="text-xl font-semibold text-gray-800 mb-6">{plan.price}</p>
            <ul className="text-gray-600 mb-6 space-y-2">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-green-500 mr-2 mt-1">✔️</span> {feature}
                </li>
              ))}
            </ul>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;