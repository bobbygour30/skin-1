import React from "react";
import { motion } from "framer-motion";

// Luxurious Scrolling RibbonStrip
export default function RibbonStrip() {
  const phrases = [
    "No Needles. No Downtime.",
    "Define Jawline • Lift Cheeks • Tighten Neck",
    "Results That Build for Months",
  ];

  const line = Array(6)
    .fill(phrases.join(" • "))
    .join("   ");

  const marquee = {
    animate: { x: ["0%", "-100%"] },
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 22,
        ease: "linear",
      },
    },
  };

  return (
    <div className="w-full overflow-hidden relative">
      {/* Background Ribbon with Soft Gold Gradient */}
      <div className="absolute inset-0 -skew-y-1 transform-gpu">
        <div className="h-20 md:h-24 w-full bg-linear-to-r from-[#d4b97b] via-[#bfa26a] to-[#e6cf94] shadow-2xl opacity-95" />
      </div>

      {/* Animated Text Layer */}
      <div className="relative -skew-y-1">
        <div className="max-w-full mx-auto">
          <div className="py-5 md:py-6">
            <div className="mx-4 md:mx-8 lg:mx-16 overflow-hidden rounded-md">
              <motion.div
                className="whitespace-nowrap font-semibold text-sm md:text-base lg:text-lg tracking-wide leading-tight flex items-center skew-y-1 text-[#fffdf9]"
                {...marquee}
                aria-hidden
              >
                <span className="inline-block px-6 md:px-10 py-3">
                  {line}
                </span>
                <span className="inline-block px-6 md:px-10 py-3">
                  {line}
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      

      {/* Subtle Glow Animation */}
      <motion.div
        className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{
          repeat: Infinity,
          duration: 6,
          ease: "easeInOut",
        }}
        style={{
          mixBlendMode: "overlay",
        }}
      />
    </div>
  );
}
