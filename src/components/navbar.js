import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaSun, FaMoon } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Plans", path: "/plans" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    }
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 shadow-2xl backdrop-blur-md transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Logo" className="w-10 h-10 rounded-full border-2 border-white shadow-md" />
          <span className="text-white text-2xl font-bold tracking-wide">
            Life<span className="text-yellow-300">Secure</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`relative text-white font-semibold transition-all duration-200 hover:text-yellow-300 ${
                location.pathname === item.path ? "text-yellow-300" : ""
              }`}
            >
              <span className="pb-1 hover:underline underline-offset-4">
                {item.name}
              </span>
            </Link>
          ))}
        </nav>

        {/* Toggle Buttons */}
        <div className="flex items-center space-x-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="text-white text-xl hover:text-yellow-300 transition"
            aria-label="Toggle Dark Mode"
          >
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </button>

          {/* Hamburger Icon */}
          <div
            className="md:hidden text-white text-2xl cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Animated Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden px-6 py-4 space-y-4 bg-gradient-to-b from-blue-600 via-indigo-700 to-purple-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={`block text-white text-lg font-semibold hover:text-yellow-300 ${
                  location.pathname === item.path ? "text-yellow-300" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;