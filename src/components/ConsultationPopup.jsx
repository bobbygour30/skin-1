"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const ConsultationPopup = ({ isOpen, onClose }) => {
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
            className="relative bg-[#FFF8EF] text-[#2B333C] rounded-2xl shadow-2xl w-[90%] max-w-md p-6 sm:p-8"
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
            <h2 className="text-2xl font-semibold mb-6 text-center bg-linear-to-r from-[#9E4A47] to-[#B87C72] bg-clip-text text-transparent">
              Book Your Consultation
            </h2>

            {/* Simplified Form */}
            <form className="space-y-5">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-medium mb-1.5">Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="Enter your full name"
                  className="w-full rounded-lg border border-[#b87c7240] bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#B87C72] transition"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium mb-1.5">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  className="w-full rounded-lg border border-[#b87c7240] bg-white px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#B87C72] transition"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full bg-linear-to-r from-[#9E4A47] via-[#B87C72] to-[#9E4A47] text-[#FFF8EF] py-3 rounded-full font-medium text-sm shadow-md transition-all"
              >
                Submit & Book
              </motion.button>

              {/* Footer Note */}
              <p className="text-xs text-center text-gray-500 mt-3">
                We’ll contact you within 24 hours to confirm your consultation.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ConsultationPopup;