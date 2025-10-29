'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { PlayCircle, UserCheck } from 'lucide-react';

export default function DermatologistSection() {
  return (
    <section className="relative bg-white py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Background Accent Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(245,231,209,0.25),transparent_70%)] pointer-events-none" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Doctor Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          {/* Floating animation */}
          <motion.img
            src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg"
            alt="Dr. Shail Gupta - Dermatologist at Satya"
            className="w-[90%] max-w-md rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] object-cover"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Soft Glow Behind Image */}
          <div className="absolute -z-10 w-72 h-72 bg-amber-100/40 blur-3xl rounded-full top-1/2 -translate-y-1/2" />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <p className="text-amber-700 font-medium uppercase tracking-wide mb-2">
            Dermatologist at Satya
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 leading-tight">
            Meet the Team Behind the Lift
          </h2>
          <p className="mt-5 text-neutral-700 text-lg leading-relaxed max-w-xl">
            <span className="font-semibold text-amber-700">
              Dr. Shail Gupta — MBBS, MD;
            </span>{' '}
            Founder, Satya Skin & Hair Solutions. With two decades of experience
            in dermatology and aesthetic medicine, our protocols balance
            <span className="text-amber-700 font-medium"> safety, ethics, and artistry </span>
            for long-term skin health.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-wrap gap-4">
            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-linear-to-r from-amber-200/40 via-amber-100/40 to-white border border-amber-300 text-amber-700 font-medium shadow-sm hover:shadow-md transition-all"
            >
              <PlayCircle size={20} />
              Watch HIFU Overview
            </motion.a>

            <motion.a
              href="#"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-amber-700 text-white font-medium shadow-md hover:bg-amber-800 transition-all"
            >
              <UserCheck size={20} />
              Get My Assessment
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
