/*
HIFUStepByStep.jsx (Updated)
- Removed “Step x of 4”, “Details” button, and small index number.
- Refined internal padding and alignment for cleaner visual hierarchy.
*/

import React from 'react';
import { motion } from 'framer-motion';

const GOLD = 'bg-gradient-to-r from-[#FBF7EF] to-[#FBF1DD]';
const ACCENT = 'ring-1 ring-[#c9ac6a]/20';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function HIFUStepByStep() {
  const steps = [
    {
      id: '01',
      title: 'Consult & Assessment',
      desc: 'Facial laxity grading, photos, and vector planning. Contraindication check.',
    },
    {
      id: '02',
      title: 'Mapping & Nerve‑Safe Marking',
      desc: 'Depth cartridges selected per zone; energy, lines and shots planned.',
    },
    {
      id: '03',
      title: 'HIFU Delivery',
      desc: 'Ultrasound passes along vectors; comfort managed; immediate tightening feel.',
    },
    {
      id: '04',
      title: 'Aftercare & Follow‑up',
      desc: 'SPF, gentle skincare, optional adjunct boosters; review at 8–12 weeks.',
    },
  ];

  return (
    <section className="py-10 px-6 sm:px-10 lg:px-20 bg-linear-to-b from-white via-[#FFFBF7] to-white">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-extrabold text-gray-900"
          >
            <span>Precision Meets Science — </span>
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#6b5e43] to-[#c9ac6a]">Step by Step</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="mt-3 text-gray-600 max-w-2xl mx-auto"
          >
            <p>Guided protocol with clinical precision — each step is deliberate, safe and personalised to you.</p>
          </motion.div>
        </header>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative"
        >
          <div className="hidden lg:block absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none" aria-hidden>
              <defs>
                <linearGradient id="gshimmer" x1="0%" x2="100%">
                  <stop offset="0%" stopColor="#fff9f2" stopOpacity="0" />
                  <stop offset="40%" stopColor="#f7efe0" stopOpacity="1" />
                  <stop offset="100%" stopColor="#fff9f2" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0 60 C 250 0, 450 120, 600 60 C 750 0, 950 120, 1200 60" fill="none" stroke="url(#gshimmer)" strokeWidth="4" strokeLinecap="round" />
              <g>
                {[150, 420, 780, 1060].map((cx, i) => (
                  <circle key={i} cx={cx} cy="60" r="6" fill="#c9ac6a" opacity="0.9" />
                ))}
              </g>
            </svg>
          </div>

          <div className="grid lg:grid-cols-4 gap-6 relative z-10">
            {steps.map((s) => (
              <motion.article
                key={s.id}
                variants={cardVariant}
                className={`relative overflow-hidden rounded-2xl ${GOLD} ${ACCENT} border border-transparent hover:border-[#c9ac6a]/30 transition-transform hover:scale-[1.02]`}
                whileHover={{ boxShadow: '0 18px 50px rgba(201,172,106,0.12)' }}
              >
                <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
                  <span className="text-[96px] font-extrabold text-[#c9ac6a] select-none" style={{ opacity: 0.08 }}>
                    {s.id}
                  </span>
                </div>

                <div className="p-8 relative flex flex-col justify-center h-full">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/90 shadow">
                      <div className="w-10 h-10 rounded-md flex items-center justify-center bg-linear-to-br from-[#f9f4ea] to-[#f6e9d2] border border-[#e6d9b8]">
                        <span className="text-sm font-semibold text-[#6b5e43]">{s.id}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 leading-snug">{s.title}</h3>
                      <p className="mt-3 text-sm text-gray-600 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-8 -top-8 w-28 h-28 rounded-full opacity-30 bg-linear-to-br from-[#fff6e6] to-[#fff1d8] blur-3xl pointer-events-none" />
              </motion.article>
            ))}
          </div>

          <div className="lg:hidden mt-6">
            <div className="relative pl-8">
              <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-linear-to-b from-[#f5eddc] to-white" aria-hidden />
              <div className="flex flex-col gap-8">
                {steps.map((s) => (
                  <div key={s.id} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#c9ac6a] flex items-center justify-center text-white text-xs font-semibold mt-1">{s.id}</div>
                    <div>
                      <div className="font-semibold text-gray-900">{s.title}</div>
                      <div className="text-sm text-gray-600 mt-1">{s.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
