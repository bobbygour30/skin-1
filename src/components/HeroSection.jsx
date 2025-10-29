"use client";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section
      className="relative flex items-center w-full h-screen overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://cdn.prod.website-files.com/662e5390115777703fa6e8da/66436c298380209fe979a912_Hero%20Image%20New1-p-2600.webp')",
      }}
    >
      {/* Soft golden overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-black/60 via-black/40 to-amber-900/20"></div>

      {/* Subtle radial glow accent */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(245,231,209,0.25)_0%,transparent_70%)] blur-3xl pointer-events-none"></div>

      {/* Content Wrapper */}
      <motion.div
        className="relative z-10 flex flex-col items-start max-w-2xl p-6 md:p-12 lg:p-20 text-white"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6 bg-linear-to-r from-amber-300 via-amber-100 to-white bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(212,175,55,0.2)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          Real Confidence.<br className="hidden md:block" /> Real Results.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-base md:text-lg text-amber-50/90 mb-10 max-w-md leading-relaxed"
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
          className="bg-linear-to-r from-amber-600 via-amber-500 to-amber-700 text-white py-4 px-8 rounded-full font-semibold text-base tracking-wide shadow-[0_4px_15px_rgba(212,175,55,0.3)] transition-all"
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 1.1 }}
        >
          Book Consultation →
        </motion.button>
      </motion.div>
    </section>
  );
};

export default HeroSection;
