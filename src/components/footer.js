import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import companyLogo from "../assets/life-secure-logo.png"; // Replace with your logo
import isoBadge from "../assets/iso-certified.png"; // Optional badge

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 via-blue-800 to-gray-900 text-gray-200 pt-16 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-5 gap-12">
        {/* Logo + Description */}
        <div className="col-span-2">
          <img
            src={companyLogo}
            alt="DG2P Insurance Logo"
            className="w-32 mb-4 transition-transform hover:scale-105 duration-300"
          />
          <p className="text-sm leading-relaxed text-gray-300">
            Life Insurance offers trusted life insurance policies for individuals and families. 
            Our commitment is to provide financial peace of mind with innovative and affordable plans.
          </p>
          <div className="mt-4">
            <img src={isoBadge} alt="ISO Certified" className="w-24 opacity-80" />
          </div>
        </div>

        {/* Quick Navigation */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/" className="hover:text-yellow-300 transition">Home</Link></li>
            <li><Link to="/about" className="hover:text-yellow-300 transition">About Us</Link></li>
            <li><Link to="/plans" className="hover:text-yellow-300 transition">Plans</Link></li>
            <li><Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Reach Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Email: <span className="text-blue-300">help@lifeinsurance.com</span></li>
            <li>Phone: <span className="text-blue-300">+91 98765 43210</span></li>
            <li>Hours: Mon–Sat, 9 AM–6 PM</li>
            <li>Office: DG2P Towers, Mumbai, India</li>
          </ul>
        </div>

        {/* Newsletter + Socials */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-yellow-400">Stay Updated</h3>
          <p className="text-sm mb-3 text-gray-400">Subscribe to our newsletter:</p>
          <form className="flex items-center space-x-2 mb-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-3 py-2 rounded-lg w-full text-gray-800 text-sm"
            />
            <button
              type="submit"
              className="bg-yellow-400 text-blue-900 px-4 py-2 rounded-lg hover:bg-yellow-300 transition"
            >
              Subscribe
            </button>
          </form>
          <div className="flex space-x-3 mt-2">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-gray-800 hover:bg-blue-500 transition p-2 rounded-full text-white shadow-md"
                title="Follow us"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} DG2P Life Insurance. All rights reserved. | Powered by Trust & Technology.
      </div>
    </footer>
  );
};

export default Footer;