import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import termImg from "../assets/term-life.webp";
import wholeImg from "../assets/whole-life.webp";
import childImg from "../assets/child-protection.webp";
import missionImg from "../assets/mission.webp";
import visionImg from "../assets/vision.webp";

const About = () => {
  return (
    <div className="mt-24 min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-all duration-500 ease-in-out">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-indigo-600 dark:from-yellow-500 dark:to-orange-500 py-20 px-6 text-center text-white shadow-lg">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4"
        >
          About LifeSecure Insurance
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-lg max-w-2xl mx-auto"
        >
          We build peace of mind by offering innovative, reliable, and affordable life insurance solutions tailored to your family’s unique journey.
        </motion.p>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition duration-500">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-6">
          {[
            {
              title: "Our Mission",
              text: "Empowering families through accessible, trustworthy, and future-ready insurance plans.",
              image: missionImg,
            },
            {
              title: "Our Vision",
              text: "To be India's leading life insurance provider by embracing innovation and empathy.",
              image: visionImg,
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.3 }}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover rounded-md shadow-md mb-4"
              />
              <h2 className="text-2xl font-bold text-blue-700 dark:text-yellow-300 mb-2">{item.title}</h2>
              <p className="text-gray-700 dark:text-gray-200">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-20 bg-gradient-to-br from-blue-100 to-indigo-100 dark:from-gray-700 dark:to-gray-800 transition duration-500 text-center">
        <h2 className="text-4xl font-bold text-blue-800 dark:text-yellow-300 mb-12">
          What We Cover
        </h2>
        <div className="grid md:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
          {[
            {
              title: "Term Life Insurance",
              img: termImg,
              desc: "Simple, secure coverage for a specific period with high benefits at low cost.",
            },
            {
              title: "Whole Life Coverage",
              img: wholeImg,
              desc: "Comprehensive coverage for life, with added savings benefits.",
            },
            {
              title: "Child Protection Plans",
              img: childImg,
              desc: "Invest in your child’s future with secure education and life goals planning.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg p-5 transform transition-all duration-300"
            >
              <img src={item.img} alt={item.title} className="h-48 w-full object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-blue-700 dark:text-yellow-300">{item.title}</h3>
              <p className="text-gray-700 dark:text-gray-200 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6 bg-blue-50 dark:bg-gray-800 text-center transition duration-500">
        <h2 className="text-4xl font-bold text-blue-700 dark:text-yellow-400 mb-10">
          What Our Customers Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              quote: "LifeSecure gave me peace of mind. The claim process was smooth and the team was incredibly supportive.",
              name: "Suresh Patil",
            },
            {
              quote: "I appreciate the flexible plans and the transparency. I feel secure knowing my family is covered.",
              name: "Divya Kaur",
            },
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <p className="italic text-gray-700 dark:text-gray-200 mb-4">“{testimonial.quote}”</p>
              <h5 className="font-semibold text-blue-600 dark:text-yellow-300">— {testimonial.name}</h5>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 dark:from-yellow-500 dark:to-orange-600 text-white py-20 text-center transition duration-500">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Secure Your Family’s Future Today</h2>
        <p className="text-lg mb-6">Choose a plan that grows with your dreams and your family’s future.</p>
        <Link to="/plans">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="bg-white text-blue-700 dark:text-yellow-700 px-8 py-3 rounded-full font-semibold shadow hover:bg-gray-200 transition"
          >
            Explore Our Plans
          </motion.button>
        </Link>
      </section>
    </div>
  );
};

export default About;