'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

export default function AftercareSection() {
  const points = [
    'SPF 50 daily; avoid intense heat for 48 hours',
    'Gentle cleanser, ceramide moisturiser; no actives for 72 hours',
    'Hydration boost: hyaluronic or polynucleotide boosters (optional)',
    'Review at 8–12 weeks; maintenance 9–12 months',
  ];

  return (
    <section className="relative bg-white py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Soft champagne glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,231,209,0.35),transparent_70%)] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight">
            Aftercare that{' '}
            <span className="bg-linear-to-r from-amber-600/70 to-amber-400/60 bg-clip-text text-transparent">
              Protects Your Glow
            </span>
          </h2>
          <p className="mt-4 text-neutral-600 text-lg max-w-md">
            Simple care keeps collagen building and skin calm.
          </p>

          <div className="mt-8 space-y-4">
            {points.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-3"
              >
                <CheckCircle
                  className="text-amber-600 mt-1 shrink-0"
                  size={20}
                />
                <p className="text-neutral-700 text-base leading-relaxed">
                  {item}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="inline-block mt-10 px-6 py-3 rounded-full border border-amber-200 bg-amber-50/40 text-amber-700 font-medium shadow-sm hover:shadow-md transition-all"
          >
            Post-HIFU skincare essentials
          </motion.div>
        </motion.div>

        {/* Right: Animated Image */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Floating animation */}
          <motion.img
            src="https://plus.unsplash.com/premium_photo-1682096433084-b68c0cf072b8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2xvd2luZyUyMHNraW58ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000"
            alt="Aftercare glow illustration"
            className="w-[90%] max-w-md rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          {/* Soft light behind image */}
          <div className="absolute -z-10 w-72 h-72 bg-amber-100/40 blur-3xl rounded-full top-1/2 -translate-y-1/2" />
        </motion.div>
      </div>
    </section>
  );
}
