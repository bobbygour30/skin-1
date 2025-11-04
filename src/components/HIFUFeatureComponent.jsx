"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import ConsultationPopup from "./ConsultationPopup";
import assets from "../assets/assets";

const container = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function HIFUFeatureComponent({
  imageSrc = "https://img.freepik.com/free-photo/view-from-rejuvenation-beautiful-woman-enjoying-cosmetology-procedures-beauty-salon-dermatology-hands-blue-glows-healthcare-therapy-botox_197531-2783.jpg",
  videoSrc = assets.gif, // Replace with your actual video
}) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section
      id="whyhifu"
      className="bg-linear-to-br from-[#FFF8EF] via-[#FCEBDE]/60 to-[#FFF8EF] text-[#2B333C] py-10 px-6 sm:px-8 lg:px-16 relative overflow-hidden"
    >
      {/* Soft blush glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,124,114,0.12),transparent_70%)] -z-10"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SECTION */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
          className="space-y-6"
        >
          {/* Title */}
          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          >
            Why Choose{" "}
            <span className="bg-[#9E4A47] bg-clip-text text-transparent">
              HIFU
            </span>{" "}
            at Satya
          </motion.h2>

          {/* Intro */}
          <motion.p
            variants={fadeUp}
            className="text-[#2B333C]/80 max-w-xl leading-relaxed"
          >
            High-Intensity Focused Ultrasound precisely targets the SMAS and
            deep dermis to trigger collagen remodeling — achieving natural,
            lifted contours without surgery, needles, or downtime.
          </motion.p>

          {/* Feature badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {[
              "Instant tightening feel",
              "No downtime",
              "Safe for Indian skin",
              "Precise depth cartridges",
            ].map((t, i) => (
              <motion.div
                key={t}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-[#FFF8EF] rounded-full border border-[#DFDFDD] shadow-[0_2px_8px_rgba(184,124,114,0.12)] px-5 py-2 text-sm font-medium transition-all"
                transition={{
                  type: "spring",
                  stiffness: 280,
                  damping: 18,
                  delay: i * 0.05,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full bg-[#9E4A47] inline-block"
                  aria-hidden
                />
                <span className="text-[#2B333C]">{t}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Key details grid */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl"
          >
            <DetailCard
              title="Instant + Progressive Lift"
              subtitle="Immediate firmness; enhanced lift over 8–12 weeks"
              icon="pulse"
            />
            <DetailCard
              title="Precision Depth"
              subtitle="Cartridges: 1.5–4.5 mm for targeted layers"
              icon="target"
            />
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} className="flex gap-4 items-center">
            <a
              onClick={() => setShowPopup(true)}
              href="#book"
              className="cursor-pointer inline-flex items-center gap-3 bg-linear-to-r from-[#9E4A47] to-[#B87C72] text-white px-6 py-3 rounded-lg shadow-lg hover:scale-[1.03] transition-transform focus:outline-none focus:ring-2 focus:ring-[#B87C72]/40"
            >
              Book a Consultation
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <path
                  d="M5 12h14M12 5l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="#learn"
              className="text-[#9E4A47] underline text-sm font-medium"
            >
              Learn more
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SECTION - VIDEO */}
<motion.div
  initial={{ opacity: 0, scale: 0.98 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  viewport={{ once: true, amount: 0.3 }}
  className="relative"
>
  <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(158,74,71,0.2)] bg-linear-to-br from-[#FFF8EF] via-[#FCEBDE] to-[#FFF8EF]">
    
    {/* CORRECTED VIDEO WITH SINGLE TRANSITION */}
    {videoSrc ? (
      <motion.video
        src={videoSrc}
        poster={imageSrc}
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-80 object-cover md:h-96"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.03 }}
        transition={{
          type: "spring",
          stiffness: 160,
          duration: 0.6,
          ease: "easeOut",
        }}
      />
    ) : (
      <motion.img
        src={imageSrc}
        alt="HIFU treatment preview"
        className="w-full h-80 object-cover md:h-96"
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        whileHover={{ scale: 1.03 }}
        transition={{
          type: "spring",
          stiffness: 160,
          duration: 0.6,
          ease: "easeOut",
        }}
      />
    )}

    {/* Floating badge */}
    <motion.div
      initial={{ y: 12, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 90, delay: 0.15 }}
      viewport={{ once: true }}
      className="absolute left-6 top-6 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-md border border-[#DFDFDD] flex items-center gap-2"
    >
      <svg className="w-5 h-5 text-[#9E4A47]" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.4" />
      </svg>
      <div className="text-xs">
        <div className="font-semibold text-[#9E4A47]">Clinically Proven</div>
        <div className="text-[#828D9C] text-[11px]">Safe for Indian skin</div>
      </div>
    </motion.div>
  </div>
</motion.div>
      </div>

      {/* SECONDARY SECTION */}
      <div className="max-w-5xl mx-auto mt-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="space-y-4"
        >
          <motion.h3
            variants={fadeUp}
            className="text-2xl font-semibold text-[#9E4A47]"
          >
            What is HIFU Facial?
          </motion.h3>
          <motion.p
            variants={fadeUp}
            className="text-[#2B333C]/80 leading-relaxed"
          >
            A non-surgical tightening procedure using focused ultrasound to heat
            specific skin layers — triggering collagen renewal and natural lift.
          </motion.p>

          <motion.ul
            variants={fadeUp}
            className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3"
          >
            {[
              "Mild-to-moderate sagging",
              "Soft jowls & jawline definition",
              "Neck bands & laxity",
              "Brow lifting effect",
            ].map((x) => (
              <li key={x} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-1 text-[#9E4A47]"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[#2B333C]">{x}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>

      {/* FOOTER CTA */}
      <div className="max-w-5xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-linear-to-r from-[#9E4A47] to-[#B87C72] text-white rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg"
        >
          <div>
            <div className="text-lg font-semibold">
              Ready for a natural lift?
            </div>
            <div className="text-sm text-[#FCEBDE]">
              Book a consultation today and begin your transformation.
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-3 bg-white text-[#9E4A47] px-5 py-3 rounded-lg shadow font-medium hover:scale-105 transition"
            >
              Book Now
            </a>
            <a
              href="tel:+919910094945"
              className="inline-flex items-center gap-2 border border-white/40 rounded-lg px-4 py-3"
            >
              Call Clinic
            </a>
          </div>
        </motion.div>
      </div>

      <ConsultationPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </section>
  );
}

/* --- Sub Components --- */
function DetailCard({ title, subtitle, icon }) {
  return (
    <div className="bg-[#FFF8EF] rounded-xl p-4 shadow-sm border border-[#DFDFDD] flex gap-4 items-start hover:shadow-[0_4px_20px_rgba(158,74,71,0.1)] transition">
      <div className="w-12 h-12 rounded-lg bg-[#FCEBDE] flex items-center justify-center text-[#9E4A47]">
        {icon === "pulse" ? (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 12h3l2 6 4-18 2 12 1-4h3"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <circle
              cx="12"
              cy="12"
              r="4"
              stroke="currentColor"
              strokeWidth="1.4"
            />
          </svg>
        )}
      </div>
      <div>
        <div className="font-semibold text-[#2B333C]">{title}</div>
        <div className="text-sm text-[#828D9C]">{subtitle}</div>
      </div>
    </div>
  );
}