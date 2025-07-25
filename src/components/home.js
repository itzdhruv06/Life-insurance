import React from "react";
import heroImage from "../assets/insurance-producer.jpg";
import familyImg from "../assets/family.jpg";
import supportImg from "../assets/support.jpg";
import coverageImg from "../assets/coverage.jpg";
import { motion } from "framer-motion";

const stats = [
  { value: "50K+", label: "Policies Issued" },
  { value: "98%", label: "Claim Settlement Ratio" },
  { value: "24/7", label: "Customer Support" },
];

const Home = () => {
  return (
    <div className="mt-20 bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center min-h-[85vh] flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-white-900 bg-opacity-70"></div>
        <div className="relative z-10 max-w-4xl px-6">
          <motion.h1
            className="text-4xl md:text-5xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Insure Your Life. Secure Their Future.
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Comprehensive life insurance coverage tailored for your family’s peace of mind.
          </motion.p>
          <motion.button
            className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-semibold px-6 py-3 rounded-lg shadow-lg transition"
            whileHover={{ scale: 1.05 }}
          >
            Get a Free Quote
          </motion.button>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-6">Why Choose LifeSecure?</h2>
          <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
            We believe in building a secure future for your loved ones. Our personalized life insurance solutions ensure long-term peace of mind.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                img: coverageImg,
                title: "Tailored Coverage",
                description: "From term plans to child and retirement plans, we customize policies that match your goals.",
              },
              {
                img: familyImg,
                title: "Trusted Claims",
                description: "Our 98% claim settlement ratio ensures your loved ones get what they deserve — without hassle.",
              },
              {
                img: supportImg,
                title: "Instant Support",
                description: "24/7 chat & call assistance with expert advisors who understand your unique needs.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-blue-50 p-6 rounded-xl shadow-md hover:shadow-xl transition text-left"
                whileHover={{ y: -5 }}
              >
                <img src={item.img} alt={item.title} className="rounded-md w-full h-40 object-cover mb-4" />
                <h3 className="text-xl font-semibold text-blue-800 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Stats */}
      <section className="bg-gradient-to-r from-blue-100 to-cyan-100 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-700 mb-10">We’re Making an Impact</h2>
          <div className="flex flex-col md:flex-row justify-center gap-12 text-blue-900">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-4xl font-bold">{stat.value}</h3>
                <p className="text-md font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-blue-700 mb-10">What Our Clients Say</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                name: "Amit R.",
                text: "LifeSecure made it easy to choose the right plan for my family. Highly recommended!",
              },
              {
                name: "Priya K.",
                text: "Excellent customer service and quick claims. I feel safe knowing my future is protected.",
              },
              {
                name: "Rahul M.",
                text: "Their term insurance plan gave me affordable security and peace of mind.",
              },
            ].map((testimonial, i) => (
              <motion.div
                key={i}
                className="bg-gray-100 p-6 rounded-xl shadow-lg text-left"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-gray-700 italic mb-4">"{testimonial.text}"</p>
                <h4 className="font-semibold text-blue-600">– {testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Life Insurance Journey Now</h2>
        <p className="text-lg mb-6">
          Get a personalized plan, compare benefits, and speak with a licensed advisor today.
        </p>
        <motion.button
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          whileHover={{ scale: 1.05 }}
        >
          Talk to an Advisor
        </motion.button>
      </section>
    </div>
  );
};

export default Home;