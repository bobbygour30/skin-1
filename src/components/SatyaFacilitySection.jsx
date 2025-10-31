'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import assets from '../assets/assets';

export default function SatyaFacilitySection() {
  return (
    <section className="relative bg-[#FFF8EF] py-10 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Soft accent background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(252,235,222,0.4),transparent_70%)] pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-16 max-w-7xl mx-auto">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-semibold bg-[#9E4A47] bg-clip-text text-transparent leading-tight">
            Experience Satya’s World-Class Facility
          </h2>

          <p className="text-[#828D9C] text-lg max-w-md">
            Located in DLF Phase 4, Gurgaon — clinical precision with serene design for patient comfort.
          </p>

          <div className="space-y-4 text-[#2B333C]">
            <div className="flex items-start gap-3">
              <MapPin className="text-[#9E4A47] mt-1" size={20} />
              <p>
                4301, Galleria Boulevard, opposite DLF Club,<br />
                Sector 28, DLF Phase IV, Gurugram, Haryana 122002
              </p>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="text-[#9E4A47]" size={20} />
              <a href="tel:+919910094945" className="hover:text-[#B87C72] transition">
                +91 99100 94945
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="text-[#9E4A47]" size={20} />
              <a
                href="mailto:info@satyaskinhairsolutions.com"
                className="hover:text-[#B87C72] transition"
              >
                info@satyaskinhairsolutions.com
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Globe className="text-[#9E4A47]" size={20} />
              <a
                href="https://www.satyaskinhairsolutions.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#B87C72] transition"
              >
                www.satyaskinhairsolutions.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden border border-[#DFDFDD] shadow-[0_8px_30px_rgba(0,0,0,0.08)] group">
            <img
              src={assets.place}
              alt="Satya facility interior"
              className="w-full h-[420px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {/* Soft rose overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#FCEBDE]/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
