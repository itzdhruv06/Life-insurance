import React from "react";

const About = () => {
  return (
    <div className="mt-24 min-h-screen bg-white px-4 text-gray-800">
      {/* Header Section */}
      <section className="max-w-6xl mx-auto text-center py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          About LifeSecure Insurance
        </h1>
        <p className="text-lg max-w-3xl mx-auto text-gray-600">
          Empowering families with financial protection and peace of mind through trusted life insurance solutions.
        </p>
      </section>

      {/* Mission and Vision Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-4">
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">Our Mission</h2>
            <p className="text-gray-700">
              To provide affordable, transparent, and customizable life insurance solutions that meet the evolving needs of every individual and family.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-700 mb-3">Our Vision</h2>
            <p className="text-gray-700">
              To be India’s most trusted life insurance provider by offering innovative plans, exceptional service, and lifelong support.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="max-w-6xl mx-auto py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-10">Our Core Values</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Trust</h3>
            <p className="text-sm text-gray-600">We build lasting relationships through honesty, integrity, and accountability.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Commitment</h3>
            <p className="text-sm text-gray-600">We’re dedicated to protecting lives and delivering exceptional service always.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Innovation</h3>
            <p className="text-sm text-gray-600">We embrace technology and creativity to offer modern insurance solutions.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-600 mb-2">Empathy</h3>
            <p className="text-sm text-gray-600">We care deeply about your future and are here to support every step of the way.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Secure Your Family’s Tomorrow, Today</h2>
        <p className="text-lg mb-6">Join thousands who trust LifeSecure to protect what matters most.</p>
        <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
          View Our Plans
        </button>
      </section>
    </div>
  );
};

export default About;