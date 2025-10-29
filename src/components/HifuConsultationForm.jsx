'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Send } from 'lucide-react';

export default function HifuConsultationForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    contact: '',
    concern: '',
    message: '',
    file: null,
    virtualConsult: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted! Our team will contact you shortly.');
  };

  return (
    <section className="relative bg-white py-10 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* background gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(245,231,209,0.25),transparent_70%)] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-semibold bg-linear-to-r from-neutral-800 via-amber-600/70 to-neutral-900 bg-clip-text text-transparent">
          Find Out If HIFU Is Right for You
        </h2>
        <p className="text-neutral-600 mt-4 text-lg max-w-2xl mx-auto">
          Upload your pictures and describe your concern — our experts will review and respond within 24 hours.
        </p>
      </motion.div>

      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-2xl mx-auto bg-white/70 backdrop-blur-md rounded-2xl border border-amber-100 shadow-[0_8px_24px_rgba(0,0,0,0.05)] p-8 md:p-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none text-neutral-800"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 mb-1">
              Email / WhatsApp
            </label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="email or +91…"
              className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none text-neutral-800"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Select Concern
          </label>
          <select
            name="concern"
            value={formData.concern}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none text-neutral-800"
          >
            <option value="">Choose an option</option>
            <option value="jawline">Jawline & Lower Face</option>
            <option value="neck">Neck & Submental</option>
            <option value="brow">Brow / Upper Face</option>
            <option value="fullface">Full Face & Neck</option>
          </select>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Upload Photos
          </label>
          <div className="flex items-center gap-4">
            <label
              htmlFor="file-upload"
              className="flex items-center gap-2 px-4 py-3 border border-amber-300 rounded-lg cursor-pointer hover:bg-amber-50 transition-all text-amber-700 font-medium"
            >
              <Upload size={18} /> Choose File
            </label>
            <input
              id="file-upload"
              type="file"
              name="file"
              onChange={handleChange}
              className="hidden"
            />
            <span className="text-sm text-neutral-500">
              {formData.file ? formData.file.name : 'No file chosen'}
            </span>
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-neutral-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us about your skin goals"
            rows="4"
            className="w-full px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-400 outline-none text-neutral-800"
          />
        </div>

        <div className="flex items-center gap-3 mb-8">
          <input
            type="checkbox"
            name="virtualConsult"
            checked={formData.virtualConsult}
            onChange={handleChange}
            id="virtualConsult"
            className="w-5 h-5 text-amber-600 border-amber-300 rounded focus:ring-amber-400"
          />
          <label
            htmlFor="virtualConsult"
            className="text-neutral-700 text-sm md:text-base"
          >
            I want a virtual consultation
          </label>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full flex justify-center items-center gap-2 bg-amber-700 text-white py-3.5 rounded-full font-medium shadow-md hover:bg-amber-800 transition-all"
        >
          <Send size={18} /> Submit My Details
        </motion.button>

        <p className="text-xs text-neutral-500 text-center mt-5">
          By submitting, you agree to be contacted by our counselor within 24 hours.
        </p>
      </motion.form>
    </section>
  );
}
