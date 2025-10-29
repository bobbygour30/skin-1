import React from "react";
import { motion } from "framer-motion";

export default function ScienceBehindHIFU({ imageSrc = "https://img.freepik.com/free-vector/realistic-skin-structure-with-its-layers-hairs-vector-illustration_1284-68962.jpg" }) {
  const container = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-linear-to-b from-[#faf7f2] via-[#fffaf6] to-[#f8f5f0] text-gray-900 py-24 px-6 sm:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE: CONTENT */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="space-y-7"
        >
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            The Science Behind{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#c9a76a] via-[#e6cf94] to-[#b3915a]">
              HIFU
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-gray-700 leading-relaxed max-w-xl"
          >
            Focused ultrasound deposits thermal coagulation points at controlled
            depths to tighten the fibromuscular layer and trigger
            neocollagenesis. Unlike lasers, it bypasses the surface —
            melanin-safe and season-agnostic.
          </motion.p>

          {/* KEY POINTS */}
          <motion.ul variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6">
            {[
              "Targets SMAS & Deep Dermis",
              "Collagen Remodeling (3–6 months)",
              "No Surface Injury",
              "Pairs well with Skin Boosters/Morpheus8",
            ].map((point, i) => (
              <motion.li
                key={i}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 250, damping: 18 }}
                className="flex items-start gap-3 bg-white rounded-2xl shadow-md hover:shadow-lg p-4 border border-[#e5d8b9]/50"
              >
                <div className="w-5 h-5 mt-1 text-[#b3915a]">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="w-full h-full"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="text-gray-800 text-sm">{point}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* HIGHLIGHT BOX */}
          <motion.div
            variants={fadeUp}
            className="mt-8 bg-white/90 rounded-2xl p-6 shadow-xl border border-[#f0e6d2]"
          >
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-linear-to-br from-[#f9f5ec] to-[#f0e6d2] shadow-inner">
                <svg
                  className="w-6 h-6 text-[#b3915a]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeWidth="1.6"
                  />
                  <path
                    d="M12 8v4l3 2"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div>
                <div className="font-semibold text-gray-900">
                  Collagen Remodeling Timeline
                </div>
                <div className="text-sm text-gray-600">
                  Results strengthen between 3–6 months post-procedure.
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE: IMAGE + EFFECTS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-linear-to-br from-white to-[#f7f3eb] border border-[#f0e6d2]/60">
            <motion.img
              src={imageSrc}
              alt="Skin layers diagram showing HIFU depth"
              className="w-full h-80 md:h-112 object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 160 }}
            />

            {/* Floating Tag */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="absolute left-6 top-6 bg-white/80 backdrop-blur-md rounded-xl px-4 py-2 shadow-md border border-[#e6d8b7]/60"
            >
              <div className="text-xs font-semibold text-gray-900">
                Skin Layer Visualization
              </div>
              <div className="text-[11px] text-gray-600">
                Illustrates SMAS & dermal targets
              </div>
            </motion.div>

            {/* Soft Pulses */}
            <div className="absolute right-8 bottom-8 flex items-center justify-center">
              {[1, 2, 3].map((i) => (
                <motion.span
                  key={i}
                  className="absolute w-12 h-12 rounded-full border border-[#c9a76a]/40"
                  animate={{ scale: [1, 1.3, 1], opacity: [1, 0.3, 1] }}
                  transition={{
                    duration: 2.5 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
