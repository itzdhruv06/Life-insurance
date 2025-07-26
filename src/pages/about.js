import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import termImg from "../assets/term-life.jpg";
import wholeImg from "../assets/whole-life.jpg";
import childImg from "../assets/child-protection.jpg";
import missionImg from "../assets/mission.jpg";
import visionImg from "../assets/vision.jpg";

const About = () => {
  return (
    <div className="mt-24 min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-all duration-500 ease-in-out">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 dark:text-yellow-400 mb-6">
          About LifeSecure Insurance
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600 dark:text-gray-300">
          Building financial security and peace of mind for every family through innovative and trusted life insurance solutions.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-gray-100 dark:bg-gray-800 py-16 transition duration-500">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 px-4">
          {[
            {
              title: "Our Mission",
              text: "To simplify and secure lives with affordable, tech-driven life insurance tailored for every generation.",
              image: missionImg,
            },
            {
              title: "Our Vision",
              text: "To be India's most trusted life insurance partner, empowering families to thrive worry-free.",
              image: visionImg,
            },
          ].map((item, idx) => (
           <motion.div
            key={idx}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2, ease: "easeOut" }}
            >
              <img
              src={item.image}
              alt={item.title}
              className="rounded-lg shadow-lg mb-4 w-full h-64 object-cover"
              />
              <h2 className="text-2xl font-bold text-blue-600 dark:text-yellow-300 mb-2">{item.title}</h2>
              <p className="text-gray-700 dark:text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* What We Cover */}
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-yellow-400 mb-10">What We Cover</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              title: "Term Life Insurance",
              img: termImg,
              desc: "Simple and affordable protection for a fixed period.",
            },
            {
              title: "Whole Life Coverage",
              img: wholeImg,
              desc: "Lifelong coverage with built-in savings.",
            },
            {
              title: "Child Protection Plans",
              img: childImg,
              desc: "Secure your child’s education and dreams.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition transform hover:scale-105 p-4"
            >
              <img src={item.img} alt={item.title} className="h-48 w-full object-cover rounded-lg mb-4" />
              <h3 className="text-xl font-bold text-blue-600 dark:text-yellow-300">{item.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Experts */}
      <section className="py-16 bg-gray-100 dark:bg-gray-800 transition duration-500 text-center">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-yellow-400 mb-10">Meet Our Experts</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {[
            {
              name: "Anjali Sharma",
              role: "Senior Advisor",
              img: "https://randomuser.me/api/portraits/women/68.jpg",
            },
            {
              name: "Rahul Verma",
              role: "Insurance Analyst",
              img: "https://randomuser.me/api/portraits/men/52.jpg",
            },
            {
              name: "Priya Menon",
              role: "Claims Specialist",
              img: "https://randomuser.me/api/portraits/women/44.jpg",
            },
          ].map((person, i) => (
            <div
              key={i}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300"
            >
              <img src={person.img} alt={person.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-blue-500" />
              <h4 className="text-xl font-semibold text-blue-700 dark:text-yellow-300">{person.name}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-300">{person.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-blue-700 dark:text-yellow-400 mb-10">What Our Customers Say</h2>
        <div className="grid md:grid-cols-2 gap-8">
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
            <div key={i} className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 text-left">
              <p className="italic text-gray-700 dark:text-gray-300 mb-3">“{testimonial.quote}”</p>
              <h5 className="font-semibold text-blue-600 dark:text-yellow-300">— {testimonial.name}</h5>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 dark:from-yellow-500 dark:to-yellow-700 text-white py-16 text-center transition duration-500">
        <h2 className="text-3xl font-bold mb-4">Secure Your Family’s Future Today</h2>
        <p className="text-lg mb-6">Start your journey with a plan that’s built around your life and dreams.</p>
        <Link to="/plans">
          <button className="bg-white text-blue-700 dark:text-yellow-700 px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition">
            Explore Our Plans
          </button>
        </Link>
      </section>
    </div>
  );
};

export default About;