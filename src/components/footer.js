import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import logo from "../assets/life-secure-logo.webp";
import iso from "../assets/iso-certified.webp";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-950 via-indigo-900 to-purple-900 text-white py-16 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
        {/* Logo + Company Info */}
        <div className="col-span-2 animate-fade-in">
          <img
            src={logo}
            alt="LifeSecure"
            className="w-36 mb-4 hover:scale-110 transition-transform duration-500"
          />
          <p className="text-gray-300 text-sm leading-relaxed">
            <span className="text-yellow-400 font-semibold">LifeSecure</span> provides smart, secure, and flexible life insurance plans designed for your future.
          </p>
          <img
            src={iso}
            alt="ISO Certified"
            className="w-24 mt-4 opacity-80 hover:opacity-100 transition duration-300"
          />
        </div>

        {/* Quick Links */}
        <div className="animate-slide-up">
          <h3 className="text-xl font-semibold text-yellow-400 mb-4 border-b-2 border-yellow-400 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            {["Home", "About", "Plans", "Contact", "FAQs"].map((text, idx) => (
              <li key={idx}>
                <Link
                  to={`/${text === "Home" ? "" : text.toLowerCase()}`}
                  className="hover:text-pink-400 transition duration-300"
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="animate-slide-up">
          <h3 className="text-xl font-semibold text-yellow-400 mb-4 border-b-2 border-yellow-400 inline-block">
            Contact Us
          </h3>
          <ul className="text-sm text-gray-300 space-y-2">
            <li>Email: <span className="text-blue-300">help@lifesecure.com</span></li>
            <li>Phone: <span className="text-blue-300">+91 98765 43210</span></li>
            <li>Support: Mon - Sat, 9AM - 6PM</li>
            <li>Address: DG2P Towers, Mumbai</li>
          </ul>
        </div>

        {/* Newsletter + Social */}
        <div className="animate-fade-in">
          <h3 className="text-xl font-semibold text-yellow-400 mb-4 border-b-2 border-yellow-400 inline-block">
            Stay Connected
          </h3>
          <p className="text-sm text-gray-400 mb-3">Get updates & offers:</p>
          <form className="flex items-center gap-2 mb-4">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md w-full text-gray-800 text-sm focus:outline-none shadow-md"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 px-4 py-2 rounded-md font-semibold transition duration-300"
            >
              Subscribe
            </button>
          </form>
          <div className="flex gap-3">
            {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="bg-white hover:bg-pink-500 text-blue-900 hover:text-white transition p-2 rounded-full shadow-md duration-300 transform hover:scale-110"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-sm text-gray-400 border-t border-gray-700 pt-6">
        &copy; {new Date().getFullYear()} <span className="text-yellow-300">LifeSecure Insurance</span>. All rights reserved.
        <br />
        Crafted by <span className="text-blue-300 font-semibold">DG2P</span> | Powered by <span className="text-green-400">Trust</span> & <span className="text-pink-400">Technology</span>.
      </div>
    </footer>
  );
};

export default Footer;