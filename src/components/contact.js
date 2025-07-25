import React from "react";

const Contact = () => {
  return (
    <div className="mt-24 min-h-screen bg-gray-50 text-gray-800 px-4">
      {/* Header */}
      <section className="text-center py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Have questions or need help choosing the right plan? We’re here for you. Send us a message or reach out directly.
        </p>
      </section>

      {/* Form and Info */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 py-10">
        {/* Contact Form */}
        <form className="bg-white p-8 rounded-xl shadow-md">
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="How can we help you?"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="bg-blue-700 text-white p-8 rounded-xl shadow-md flex flex-col justify-center">
          <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>
          <p className="mb-2">
            <strong>Phone:</strong> +91 98765 43210
          </p>
          <p className="mb-2">
            <strong>Email:</strong> support@lifesecure.in
          </p>
          <p className="mb-6">
            <strong>Address:</strong> 12th Floor, LifeSecure Tower,<br />
            Bandra-Kurla Complex, Mumbai, India
          </p>
          <hr className="my-4 border-gray-300" />
          <p className="text-sm text-blue-100">
            Office Hours: Monday to Friday, 9:00 AM - 6:00 PM
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;