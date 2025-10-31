"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import ConsultationPopup from "./ConsultationPopup"; // ✅ import the popup

const HeroSection = () => {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="relative flex flex-col sm:flex-row items-start sm:items-center justify-start w-full min-h-[90vh] sm:min-h-screen overflow-hidden sm:mt-[100px]">
      {/* === Backgrounds and Overlays === */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden sm:block"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/662e5390115777703fa6e8da/66436c298380209fe979a912_Hero%20Image%20New1-p-2600.webp')",
        }}
      />
      <div
        className="absolute inset-0 bg-cover bg-top sm:hidden"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/662e5390115777703fa6e8da/66437012577dde71828b6739_Hero%20Image%20Mobile%20New-p-1080.webp')",
        }}
      />
      <div className="absolute inset-0 bg-linear-to-b from-[#2B333C]/90 via-[#2B333C]/70 to-[#9E4A47]/40"></div>
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] bg-[radial-gradient(circle,rgba(245,231,209,0.25)_0%,transparent_70%)] blur-3xl pointer-events-none"></div>

      {/* === Content === */}
      <motion.div
        className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left w-full sm:max-w-[1000px] px-6 sm:px-16 md:px-24 pt-12 sm:pt-0 text-[#FFF8EF] mt-20 sm:mt-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <motion.h1
          className="text-xs sm:text-xl font-semibold bg-[#f1c8c6] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Lift. Tighten. Glow - without surgery or downtime.
        </motion.h1>

        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold mb-6 bg-linear-to-r from-[#FFF8EF] via-[#FCEBDE] to-[#DFDFDD] bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          When Healthy Skin Feels Like Confidence
        </motion.h1>

        <motion.p
          className="text-sm sm:text-base md:text-lg text-[#DFDFDD]/90 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          Satya's dermatologist-performed HIFU tones, contours, and rejuvenates from deep within for results that build for months.
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.07,
            boxShadow: "0 0 20px rgba(184,124,114,0.45)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowPopup(true)}
          className="bg-linear-to-r from-[#9E4A47] via-[#B87C72] to-[#9E4A47] text-[#FFF8EF] py-3 px-8 rounded-full font-semibold shadow-[0_4px_15px_rgba(184,124,114,0.3)] transition-all"
        >
          Book Consultation →
        </motion.button>
      </motion.div>

      {/* ✅ Popup rendered here */}
      <ConsultationPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </section>
  );
};

export default HeroSection;
