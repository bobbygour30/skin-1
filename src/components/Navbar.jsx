"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import assets from "../assets/assets";

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
          ? "bg-[#FFF8EF]/95 shadow-[0_4px_20px_rgba(184,124,114,0.2)]"
          : "bg-linear-to-r from-[#FFF8EF] via-[#FCEBDE]/60 to-[#FFF8EF]"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Left: Logo */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="flex items-center gap-2"
        >
          <img src={assets.logo} alt="Logo" className="w-56" />
        </motion.a>

        {/* Center Links */}
        <nav className="hidden lg:flex items-center space-x-8">
          {links.map((link, i) => (
            <motion.a
              key={i}
              href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
              whileHover={{ scale: 1.07 }}
              className="relative text-[15px] font-medium text-[#2B333C] hover:text-[#9E4A47] transition-colors group"
            >
              {link}
              <span className="absolute bottom-0 left-0 w-0 h-px bg-[#B87C72] transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* Right: Button */}
        <div className="hidden lg:flex items-center space-x-6">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 0px 16px rgba(184,124,114,0.4)",
            }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-2 bg-linear-to-r from-[#9E4A47] via-[#B87C72] to-[#9E4A47] text-[#FFF8EF] px-5 py-2.5 rounded-full text-sm font-semibold shadow-[0_4px_10px_rgba(184,124,114,0.3)] transition-all"
          >
            Book Consultation
            <FiArrowUpRight size={16} />
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <div
          className="lg:hidden text-2xl text-[#2B333C]"
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
            className="lg:hidden bg-[#FFF8EF]/95 backdrop-blur-md shadow-[0_8px_20px_rgba(184,124,114,0.15)] rounded-b-2xl"
          >
            <div className="flex flex-col items-center py-5 space-y-4">
              {links.map((link, index) => (
                <a
                  key={index}
                  href={`#${link.toLowerCase().replace(/\s+/g, "-")}`}
                  className="text-[#2B333C] font-medium uppercase hover:text-[#9E4A47] transition-colors"
                >
                  {link}
                </a>
              ))}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="mt-3 flex items-center gap-2 bg-linear-to-r from-[#9E4A47] via-[#B87C72] to-[#9E4A47] text-[#FFF8EF] px-6 py-2 rounded-full font-medium shadow-md"
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
