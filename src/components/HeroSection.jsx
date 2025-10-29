"use client";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col sm:flex-row items-start sm:items-center justify-start w-full min-h-[90vh] sm:min-h-screen overflow-hidden">
      {/* === Desktop Background === */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden sm:block"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/662e5390115777703fa6e8da/66436c298380209fe979a912_Hero%20Image%20New1-p-2600.webp')",
          backgroundPosition: "center top",
        }}
      />

      {/* === Mobile Background === */}
      <div
        className="absolute inset-0 bg-cover bg-top sm:hidden"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/662e5390115777703fa6e8da/66437012577dde71828b6739_Hero%20Image%20Mobile%20New-p-1080.webp')",
        }}
      />

      {/* === Gradient Overlay === */}
      <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/50 to-amber-900/30"></div>

      {/* === Radial Glow Accent === */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] sm:w-[60vw] sm:h-[60vw] bg-[radial-gradient(circle,rgba(245,231,209,0.25)_0%,transparent_70%)] blur-3xl pointer-events-none"></div>

      {/* === Content === */}
      <motion.div
        className="relative z-10 flex flex-col items-center sm:items-start text-center sm:text-left w-full sm:max-w-xl px-6 sm:px-16 md:px-24 pt-12 sm:pt-0 text-white mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Headline */}
        <motion.h1
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-snug mb-4 sm:mb-6 bg-linear-to-r from-amber-300 via-amber-100 to-white bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Real Confidence.<br className="hidden sm:block" /> Real Results.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-sm sm:text-base md:text-lg text-amber-50/90 mb-6 sm:mb-10 max-w-md leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.6 }}
        >
          Advanced HIFU facial contouring by Satya — non-invasive lift for jawline, cheeks, and neck. Safe, precise, and natural.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          whileHover={{
            scale: 1.07,
            boxShadow: "0 0 20px rgba(212,175,55,0.45)",
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-linear-to-r from-amber-600 via-amber-500 to-amber-700 text-white py-3 px-6 sm:py-4 sm:px-8 rounded-full font-medium sm:font-semibold text-sm sm:text-base tracking-wide shadow-[0_4px_15px_rgba(212,175,55,0.3)] transition-all"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 100, delay: 1.1 }}
        >
          Book Consultation →
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
