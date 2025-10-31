'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Youtube } from 'lucide-react';

export default function HifuMediaShowcase() {
  const videos = [
    {
      title: 'HIFU Live Demo',
      description:
        'Watch an authentic treatment session performed by our expert dermatologists.',
      thumbnail:
        'https://media.istockphoto.com/id/501398614/photo/face-skin-care-facial-hydro-microdermabrasion-peeling-treatment.jpg?s=612x612&w=0&k=20&c=8sB-63Okl1ZlF1aHNRtJb7aVzf3qCezOnphkgnW_shY=',
      link: '#',
    },
    {
      title: 'Jawline Lift Case',
      description:
        'Explore before-after progress and contour refinement through HIFU.',
      thumbnail:
        'https://media.allure.com/photos/66e1c5700f65602ac1573b07/16:9/w_3500,h_1969,c_limit/Nefertiti%20Lift.jpg',
      link: '#',
    },
    {
      title: 'Neck Tightening Tips',
      description:
        'Post-procedure skincare insights for lasting lift and glow.',
      thumbnail:
        'https://emface.net.nz/wp-content/uploads/2025/08/emface-banner-5.jpg',
      link: '#',
    },
  ];

  return (
    <section className="relative bg-[#FFF8EF] py-10 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Soft rose glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(158,74,71,0.1),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-semibold bg-[#9E4A47] bg-clip-text text-transparent p-3">
          See Real Procedures & Journeys
        </h2>
        <p className="text-[#828D9C] mt-4 text-lg max-w-2xl mx-auto">
          Watch on our YouTube & Instagram channels.
        </p>
      </motion.div>

      {/* Social Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        viewport={{ once: true }}
        className="relative z-10 flex justify-center gap-6 mb-14"
      >
        <a
          href="#"
          className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#DFDFDD] bg-[#FFF8EF] hover:bg-[#FCEBDE] transition-all shadow-sm"
        >
          <Instagram className="text-[#9E4A47]" size={20} />
          <span className="font-medium text-[#2B333C]">Instagram</span>
        </a>
        <a
          href="#"
          className="flex items-center gap-2 px-5 py-3 rounded-full border border-[#DFDFDD] bg-[#FFF8EF] hover:bg-[#FCEBDE] transition-all shadow-sm"
        >
          <Youtube className="text-[#9E4A47]" size={20} />
          <span className="font-medium text-[#2B333C]">YouTube</span>
        </a>
      </motion.div>

      {/* Video / Case Cards */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {videos.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="group bg-[#FFF8EF] rounded-2xl border border-[#DFDFDD] shadow-[0_6px_20px_rgba(0,0,0,0.05)] overflow-hidden transition-all"
          >
            <div className="relative overflow-hidden">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#9E4A47]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-[#2B333C] group-hover:text-[#9E4A47] transition-colors">
                {item.title}
              </h3>
              <p className="text-[#828D9C] mt-2 text-sm leading-relaxed">
                {item.description}
              </p>
              <a
                href={item.link}
                className="inline-block mt-4 text-[#9E4A47] font-medium hover:underline"
              >
                Watch Now →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
