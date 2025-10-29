'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube, Facebook, Linkedin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-linear-to-b from-white via-neutral-50 to-neutral-100 text-neutral-700 border-t border-amber-100 pt-16 pb-8 overflow-hidden">
      {/* Champagne top glow */}
      <div className="absolute inset-x-0 -top-6 h-12 bg-linear-to-b from-amber-100/60 via-transparent to-transparent blur-lg pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12"
        >
          {/* Column 1: About */}
          <div>
            <h3 className="text-2xl font-semibold text-neutral-900 mb-3">Satya Skin & Hair Solutions</h3>
            <p className="text-sm leading-relaxed text-neutral-600 max-w-sm">
              Our facility is committed to delivering the highest quality patient care in medical & aesthetic dermatology.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-neutral-900 mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['Why HIFU', 'Procedure', 'FAQ', 'Book Consultation'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-amber-700 transition-colors duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Follow */}
          <div>
            <h4 className="text-lg font-semibold text-neutral-900 mb-3">Follow</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="flex items-center gap-2 hover:text-amber-700 transition"><Instagram size={18} /> Instagram</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-amber-700 transition"><Youtube size={18} /> YouTube</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-amber-700 transition"><Facebook size={18} /> Facebook</a></li>
              <li><a href="#" className="flex items-center gap-2 hover:text-amber-700 transition"><Linkedin size={18} /> LinkedIn</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-semibold text-neutral-900 mb-3">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="text-amber-700" size={16} />
                <a href="tel:+919910094945" className="hover:text-amber-700 transition">+91 99100 94945</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="text-amber-700" size={16} />
                <a href="mailto:info@satyaskinhairsolutions.com" className="hover:text-amber-700 transition">
                  info@satyaskinhairsolutions.com
                </a>
              </li>
              <li>
                <a
                  href="https://www.satyaskinhairsolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-700 transition"
                >
                  www.satyaskinhairsolutions.com
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-amber-100 my-6"></div>

        {/* Bottom copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center text-sm text-neutral-500"
        >
          <p>© 2025 Satya Skin & Hair Solutions. All rights reserved.</p>
          <p className="mt-2 md:mt-0 text-xs text-neutral-400">
            Designed with precision & care — Satya Aesthetics
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
