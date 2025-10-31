'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageCircle } from 'lucide-react';

export default function HifuFAQSection() {
  const faqs = [
    {
      question: 'Is HIFU safe for Indian skin?',
      answer:
        'Yes. Ultrasound bypasses the surface, so there’s no heat on melanin — making it safe year-round when performed correctly.',
    },
    {
      question: 'Will it hurt?',
      answer:
        'Most clients describe the sensation as mild tingling or a short pulse of warmth under the skin. Comfort levels vary, but topical numbing or cool gel makes it very tolerable.',
    },
    {
      question: 'When will I see results?',
      answer:
        'You may notice subtle firmness immediately after treatment, but true lift builds gradually over 8–12 weeks as collagen rebuilds beneath the skin.',
    },
    {
      question: 'How long do results last?',
      answer:
        'Typically 9–12 months, depending on your skin’s baseline laxity, collagen levels, and lifestyle factors such as sun exposure and skincare routine.',
    },
    {
      question: 'How many sessions do I need?',
      answer:
        'Most people benefit from one full-face session yearly, with optional touch-ups on specific areas every 6–9 months.',
    },
    {
      question: 'HIFU vs. fillers vs. threads?',
      answer:
        'HIFU tightens skin from within using collagen stimulation, while fillers add volume and threads reposition sagging tissue. Many clients combine them strategically for natural balance.',
    },
    {
      question: 'Who should avoid HIFU?',
      answer:
        'Those with active infections, open wounds, pacemakers, or metal implants in the treatment area should avoid HIFU until cleared by their doctor.',
    },
    {
      question: 'Any downtime or side effects?',
      answer:
        'None. You might feel slight tenderness or mild redness for a few hours — both subside quickly. You can return to your routine immediately.',
    },
    {
      question: 'Post-care do’s and don’ts?',
      answer:
        'Use SPF 50 daily, avoid steam and intense heat for 48 hours, and stick to gentle cleansers and ceramide moisturizers for 3 days. Hydrating serums are encouraged after 72 hours.',
    },
    {
      question: 'Cost and packages?',
      answer:
        'Packages vary by area treated — full face, neck, or combined zones. Your dermatologist will suggest an optimal plan during your assessment.',
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id='faq' className="relative bg-[#FFF8EF] py-14 px-6 md:px-16 lg:px-24 overflow-hidden">
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(252,235,222,0.5),transparent_70%)] pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="relative z-10 text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-semibold bg-[#9E4A47] bg-clip-text text-transparent p-3">
          Everything You Should Know
        </h2>
      </motion.div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto divide-y divide-[#DFDFDD] border-y border-[#DFDFDD]/70 relative z-10">
        {faqs.map((faq, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            viewport={{ once: true }}
            className="py-5"
          >
            <button
              className="flex justify-between items-center w-full text-left group"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="text-lg md:text-xl font-medium text-[#2B333C] group-hover:text-[#9E4A47] transition-colors">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-3 text-[#9E4A47]"
              >
                <ChevronDown size={22} />
              </motion.div>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  key="content"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <p className="mt-3 text-[#828D9C] text-base leading-relaxed bg-[#FCEBDE]/50 rounded-lg p-4 border border-[#DFDFDD] shadow-sm">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* CTA Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="relative z-10 mt-20 max-w-2xl mx-auto bg-linear-to-r from-[#FCEBDE] to-[#FFF8EF] border border-[#DFDFDD] rounded-2xl shadow-[0_8px_24px_rgba(158,74,71,0.1)] p-8 text-center"
      >
        <h3 className="text-xl font-semibold text-[#2B333C] mb-2">
          Still have questions?
        </h3>
        <p className="text-[#828D9C] mb-6">
          Chat directly with our dermatologist for guidance tailored to your skin.
        </p>
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#9E4A47] text-white font-medium shadow-md hover:bg-[#B87C72] transition-all"
        >
          <MessageCircle size={20} />
          Chat with a Doctor
        </motion.a>
      </motion.div>
    </section>
  );
}
