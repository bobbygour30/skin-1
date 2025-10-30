import React from "react";
import { motion } from "framer-motion";

export default function ScienceBehindHIFU({
  imageSrc = "https://img.freepik.com/free-vector/realistic-skin-structure-with-its-layers-hairs-vector-illustration_1284-68962.jpg",
}) {
  const container = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-linear-to-b from-[#FFF8EF] via-[#FCEBDE]/60 to-[#FFF8EF] text-[#2B333C] py-10 px-6 sm:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT SIDE */}
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
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#9E4A47] via-[#B87C72] to-[#DFDFDD]">
              HIFU
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-[#2B333C]/80 leading-relaxed max-w-xl"
          >
            Focused ultrasound deposits thermal coagulation points at controlled
            depths to tighten the fibromuscular layer and trigger
            neocollagenesis. Unlike lasers, it bypasses the surface —
            melanin-safe and season-agnostic.
          </motion.p>

          {/* KEY POINTS */}
          <motion.ul
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-6"
          >
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
                className="flex items-start gap-3 bg-white rounded-2xl shadow-md hover:shadow-lg p-4 border border-[#DFDFDD]"
              >
                <div className="w-5 h-5 mt-1 text-[#9E4A47]">
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
                <span className="text-[#2B333C] text-sm">{point}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* HIGHLIGHT BOX */}
          <motion.div
            variants={fadeUp}
            className="mt-8 bg-white/90 rounded-2xl p-6 shadow-xl border border-[#DFDFDD]"
          >
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-linear-to-br from-[#FCEBDE] to-[#FFF8EF] shadow-inner">
                <svg
                  className="w-6 h-6 text-[#9E4A47]"
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
                <div className="font-semibold text-[#2B333C]">
                  Collagen Remodeling Timeline
                </div>
                <div className="text-sm text-[#828D9C]">
                  Results strengthen between 3–6 months post-procedure.
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-linear-to-br from-white to-[#FFF8EF] border border-[#DFDFDD]">
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
              className="absolute left-6 top-6 bg-white/80 backdrop-blur-md rounded-xl px-4 py-2 shadow-md border border-[#DFDFDD]"
            >
              <div className="text-xs font-semibold text-[#2B333C]">
                Skin Layer Visualization
              </div>
              <div className="text-[11px] text-[#828D9C]">
                Illustrates SMAS & dermal targets
              </div>
            </motion.div>

            {/* Soft Pulses */}
            <div className="absolute right-8 bottom-8 flex items-center justify-center">
              {[1, 2, 3].map((i) => (
                <motion.span
                  key={i}
                  className="absolute w-12 h-12 rounded-full border border-[#B87C72]/50"
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
