import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="mt-24 min-h-screen bg-gradient-to-b from-blue-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500 text-gray-800 dark:text-gray-200 px-4">
      {/* Header */}
      <motion.section
        className="text-center py-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 dark:text-yellow-400 mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Have questions or need help choosing the right plan? We’re here for you. Send us a message or reach out directly.
        </p>
      </motion.section>

      {/* Form and Info */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 py-10">
        {/* Contact Form */}
        <motion.form
          className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md transition-all"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="How can we help you?"
              className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700"
              required
            ></textarea>
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-blue-600 hover:bg-blue-700 dark:hover:bg-yellow-500 text-white dark:text-gray-900 py-3 rounded-lg font-semibold transition-colors duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="bg-blue-700 dark:bg-yellow-500 text-white dark:text-gray-900 p-8 rounded-xl shadow-md flex flex-col justify-center transition-all"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2">
            <strong>📞 Phone:</strong> +91 98765 43210
          </p>
          <p className="mb-2">
            <strong>✉️ Email:</strong> support@lifesecure.in
          </p>
          <p className="mb-6">
            <strong>📍 Address:</strong> 12th Floor, LifeSecure Tower,<br />
            Bandra-Kurla Complex, Mumbai, India
          </p>
          <hr className="my-4 border-blue-300 dark:border-gray-700" />
          <p className="text-sm">
            ⏰ <strong>Office Hours:</strong> Mon - Fri, 9:00 AM - 6:00 PM
          </p>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;