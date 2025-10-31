"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ConsultationPopup = ({ isOpen, onClose }) => {
  const [fileName, setFileName] = useState("No file chosen");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFileName(file ? file.name : "No file chosen");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Popup Card */}
          <motion.div
            className="relative bg-[#FFF8EF] text-[#2B333C] rounded-2xl shadow-2xl w-[90%] max-w-lg p-6 sm:p-8"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 120, damping: 12 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-[#9E4A47] hover:scale-110 transition-transform"
            >
              <X size={22} />
            </button>

            {/* Heading */}
            <h2 className="text-2xl font-semibold mb-5 text-center bg-linear-to-r from-[#9E4A47] to-[#B87C72] bg-clip-text text-transparent">
              Book Your Consultation
            </h2>

            {/* Form */}
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-lg border border-[#b87c7240] bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#B87C72]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Email / WhatsApp</label>
                <input
                  type="text"
                  placeholder="email or +91…"
                  className="w-full rounded-lg border border-[#b87c7240] bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#B87C72]"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Select Concern</label>
                <select className="w-full rounded-lg border border-[#b87c7240] bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#B87C72]">
                  <option>Choose an option</option>
                  <option>Skin Tightening</option>
                  <option>Wrinkle Reduction</option>
                  <option>Face Contouring</option>
                  <option>Dark Spots / Pigmentation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Upload Photos</label>
                <div className="flex items-center gap-3">
                  <label className="bg-[#B87C72] text-[#FFF8EF] px-4 py-2 rounded-lg text-sm cursor-pointer hover:bg-[#9E4A47] transition">
                    Choose File
                    <input type="file" className="hidden" onChange={handleFileChange} />
                  </label>
                  <span className="text-xs text-gray-500">{fileName}</span>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  rows="3"
                  placeholder="Tell us about your skin goals"
                  className="w-full rounded-lg border border-[#b87c7240] bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-[#B87C72]"
                ></textarea>
              </div>

              <div className="flex items-center gap-2">
                <input type="checkbox" id="virtual" className="accent-[#B87C72]" />
                <label htmlFor="virtual" className="text-sm">
                  I want a virtual consultation
                </label>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-linear-to-r from-[#9E4A47] via-[#B87C72] to-[#9E4A47] text-[#FFF8EF] py-3 rounded-full font-medium text-sm shadow-md"
              >
                Submit My Details
              </motion.button>

              <p className="text-xs text-center text-gray-500 mt-3">
                By submitting, you agree to be contacted by our counselor within 24 hours.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationPopup;
