"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    "Why HIFU",
    "Satya Difference",
    "Procedure",
    "Results",
    "FAQ",
    "Contact",
  ];

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-md transition-all duration-500 ${
        scrolled
          ? "bg-white/90 shadow-[0_4px_20px_rgba(212,175,55,0.12)]"
          : "bg-linear-to-r from-white via-amber-50/60 to-white"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-lg font-semibold uppercase tracking-wide bg-linear-to-r from-amber-700 via-amber-600 to-amber-800 bg-clip-text text-transparent"
        >
          Satya Skin & Hair Solutions
        </motion.h1>

        {/* Center Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              whileHover={{ scale: 1.07 }}
              className="relative text-[15px] font-medium text-neutral-700 hover:text-amber-700 transition-colors"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-amber-600 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* Right: Button */}
        <div className="hidden lg:flex items-center space-x-6">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 16px rgba(212,175,55,0.4)" }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 bg-linear-to-r from-amber-600 via-amber-500 to-amber-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-[0_4px_10px_rgba(212,175,55,0.3)] transition-all"
          >
            Book Consultation
            <FiArrowUpRight size={16} />
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="lg:hidden text-2xl text-neutral-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white/95 backdrop-blur-md shadow-[0_8px_20px_rgba(212,175,55,0.15)] rounded-b-2xl"
          >
            <div className="flex flex-col items-center py-5 space-y-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-neutral-700 font-medium uppercase hover:text-amber-700 transition-colors"
                >
                  {link}
                </a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="mt-3 flex items-center gap-2 bg-linear-to-r from-amber-600 via-amber-500 to-amber-700 text-white px-6 py-2 rounded-full font-medium shadow-md"
              >
                Book Consultation <FiArrowUpRight size={16} />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
