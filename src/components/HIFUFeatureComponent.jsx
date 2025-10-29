'use client';

import React from 'react';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function HIFUFeatureComponent({ imageSrc = 'https://img.freepik.com/free-photo/view-from-rejuvenation-beautiful-woman-enjoying-cosmetology-procedures-beauty-salon-dermatology-hands-blue-glows-healthcare-therapy-botox_197531-2783.jpg' }) {
  return (
    <section className="bg-linear-to-br from-white via-amber-50/40 to-white text-gray-900 py-20 px-6 sm:px-8 lg:px-16 relative overflow-hidden">
      {/* Soft gold glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.15),transparent_70%)] -z-10"></div>

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
            Why Choose{' '}
            <span className="bg-linear-to-r from-amber-600 via-yellow-500 to-amber-400 bg-clip-text text-transparent">
              HIFU
            </span>{' '}
            at Satya
          </motion.h2>

          {/* Intro */}
          <motion.p variants={fadeUp} className="text-gray-700 max-w-xl leading-relaxed">
            High-Intensity Focused Ultrasound precisely targets the SMAS and deep dermis to
            trigger collagen remodeling — achieving natural, lifted contours without surgery,
            needles, or downtime.
          </motion.p>

          {/* Feature badges */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {[
              'Instant tightening feel',
              'No downtime',
              'Safe for Indian skin',
              'Precise depth cartridges',
            ].map((t, i) => (
              <motion.div
                key={t}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-3 bg-white rounded-full border border-amber-100 shadow-[0_2px_8px_rgba(212,175,55,0.12)] px-5 py-2 text-sm font-medium transition-all"
                transition={{
                  type: 'spring',
                  stiffness: 280,
                  damping: 18,
                  delay: i * 0.05,
                }}
              >
                <span className="w-2 h-2 rounded-full bg-amber-500 inline-block" aria-hidden />
                <span className="text-gray-800">{t}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Key details grid */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl">
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
              href="#book"
              className="inline-flex items-center gap-3 bg-linear-to-r from-amber-600 to-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg hover:scale-[1.03] transition-transform focus:outline-none focus:ring-2 focus:ring-amber-400"
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

            <a href="#learn" className="text-amber-700 underline text-sm font-medium">
              Learn more
            </a>
          </motion.div>
        </motion.div>

        {/* RIGHT SECTION */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(212,175,55,0.2)] bg-linear-to-br from-white via-amber-50 to-white">
            <motion.img
              src={imageSrc}
              alt="HIFU treatment preview"
              className="w-full h-80 object-cover md:h-96"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 160 }}
            />

            {/* Floating badge */}
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 90, delay: 0.15 }}
              className="absolute left-6 top-6 bg-white/90 backdrop-blur-sm rounded-xl px-3 py-1.5 shadow-md border border-amber-100 flex items-center gap-2"
            >
              <svg
                className="w-5 h-5 text-amber-700"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden
              >
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="1.4" />
              </svg>
              <div className="text-xs">
                <div className="font-semibold text-amber-800">Clinically Proven</div>
                <div className="text-gray-600 text-[11px]">Safe for Indian skin</div>
              </div>
            </motion.div>

            {/* Animated ultrasound waves */}
            <WaveAnimation className="absolute right-4 bottom-4" />
          </div>
        </motion.div>
      </div>

      {/* Secondary Section */}
      <div className="max-w-5xl mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left: What is HIFU */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="space-y-4"
        >
          <motion.h3 variants={fadeUp} className="text-2xl font-semibold text-amber-700">
            What is HIFU Facial?
          </motion.h3>
          <motion.p variants={fadeUp} className="text-gray-700 leading-relaxed">
            A non-surgical tightening procedure using focused ultrasound to heat specific
            skin layers — triggering collagen renewal and natural lift. Ideal for mild
            laxity, double chin, jawline definition, and neck tightening.
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              'Mild-to-moderate sagging',
              'Soft jowls & jawline definition',
              'Neck bands & laxity',
              'Brow lifting effect',
            ].map((x) => (
              <li key={x} className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 mt-1 text-amber-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-gray-800">{x}</span>
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Right: Who should avoid */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="space-y-4 bg-white rounded-2xl p-6 shadow-[0_4px_30px_rgba(212,175,55,0.1)] border border-amber-100"
        >
          <motion.h4 variants={fadeUp} className="text-xl font-semibold text-amber-700">
            Who Should Avoid?
          </motion.h4>
          <motion.p variants={fadeUp} className="text-gray-700 leading-relaxed">
            Avoid HIFU if you have active acne, infection, or open wounds in the area. Also
            avoid during pregnancy or if you have implanted metal/electronic devices near
            the treatment site.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-4 grid grid-cols-1 gap-3">
            <WarningRow text="Active acne or open wounds" />
            <WarningRow text="Metal implants or pacemaker nearby" />
            <WarningRow text="Pregnancy (precaution)" />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6">
            <div className="rounded-lg border border-dashed border-amber-200 p-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center shadow-sm">
                  <svg
                    className="w-6 h-6 text-amber-700"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 3v6"
                      stroke="currentColor"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-gray-800">
                    Free 15-minute assessment
                  </div>
                  <div className="text-sm text-gray-600">
                    Meet our dermatologists to determine your ideal plan.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* FOOTER CTA */}
      <div className="max-w-5xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-linear-to-r from-amber-600 to-yellow-500 text-white rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg"
        >
          <div>
            <div className="text-lg font-semibold">Ready for a natural lift?</div>
            <div className="text-sm text-amber-100">
              Book a consultation today and begin your transformation.
            </div>
          </div>

          <div className="flex gap-3">
            <a
              href="#book"
              className="inline-flex items-center gap-3 bg-white text-amber-700 px-5 py-3 rounded-lg shadow font-medium hover:scale-105 transition"
            >
              Book Now
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/40 rounded-lg px-4 py-3"
            >
              Call Clinic
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* --- Sub Components --- */
function DetailCard({ title, subtitle, icon }) {
  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-amber-100 flex gap-4 items-start hover:shadow-[0_4px_20px_rgba(212,175,55,0.1)] transition">
      <div className="w-12 h-12 rounded-lg bg-amber-50 flex items-center justify-center text-amber-700">
        {icon === 'pulse' ? (
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M3 12h3l2 6 4-18 2 12 1-4h3"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
          >
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
        <div className="font-semibold text-gray-800">{title}</div>
        <div className="text-sm text-gray-600">{subtitle}</div>
      </div>
    </div>
  );
}

function WarningRow({ text }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-3 h-3 rounded-full bg-amber-400 mt-1" />
      <div className="text-gray-800">{text}</div>
    </div>
  );
}

function WaveAnimation({ className = '' }) {
  return (
    <motion.div
      className={`flex items-center justify-center p-2 rounded-full bg-white/80 ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <svg width="84" height="48" viewBox="0 0 84 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="goldWave" x1="0" x2="1">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#f6d365" stopOpacity="0.6" />
          </linearGradient>
        </defs>
        <motion.g
          initial={{ scale: 0.9 }}
          animate={{ scale: [0.95, 1.02, 0.98] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          <motion.path
            d="M6 36 C 18 8, 30 8, 42 36"
            stroke="url(#goldWave)"
            strokeWidth="2.2"
            strokeLinecap="round"
            fill="transparent"
          />
          <motion.path
            d="M18 36 C 30 10, 42 10, 54 36"
            stroke="url(#goldWave)"
            strokeWidth="1.6"
            strokeLinecap="round"
            fill="transparent"
            opacity="0.8"
          />
          <motion.path
            d="M30 36 C 42 12, 54 12, 66 36"
            stroke="url(#goldWave)"
            strokeWidth="1.2"
            strokeLinecap="round"
            fill="transparent"
            opacity="0.6"
          />
        </motion.g>
      </svg>
    </motion.div>
  );
}
