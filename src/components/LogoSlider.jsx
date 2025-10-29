'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function LogoSlider() {
  const [isPaused, setIsPaused] = useState(false);

  const certificates = [
    { name: 'ISHRS', logo: 'https://31stannual.org/wp-content/uploads/2023/01/ishrs-logo-min.png' },
    { name: 'AAAM', logo: 'https://www.bostrom.com/wp-content/uploads/2021/04/AAAM_Logo_RGB_2016-380x285-1.jpg' },
    { name: 'AIMI', logo: 'https://mma.prnewswire.com/media/1172541/AiMi_Logo_dark__1_Logo.jpg?p=facebook' },
    { name: 'IADVL', logo: 'https://www.vhv.rs/dpng/d/46-461064_indian-association-of-dermatologists-venereologists-hd-png-download.png' },
    { name: 'CDSI', logo: 'https://www.cdsi-simi.com/wp-content/uploads/2022/04/blue-logo.png' },
    { name: 'ACD', logo: 'https://www.creativefabrica.com/wp-content/uploads/2019/07/Monogram-ACD-Logo-Design-by-Greenlines-Studios.jpg' },
  ];

  const duplicatedCertificates = [...certificates, ...certificates];

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-white via-amber-50 to-white py-10 px-6 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div className="order-2 lg:order-1 space-y-8">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight tracking-tight">
                “Our legacy is written not in words,<br />but in results.”
              </h1>

              <div className="space-y-5 text-base sm:text-lg text-gray-700">
                {[
                  {
                    title: 'Member of ISHRS',
                    desc: 'Advancing the art and science of hair restoration globally.',
                  },
                  {
                    title: 'Certified by AAAM',
                    desc: 'Advanced aesthetic and cosmetic medicine excellence.',
                  },
                  {
                    title: 'International affiliation',
                    desc: 'With Italy’s leading hair implantology society.',
                  },
                  {
                    title: 'Registered & certified by IADVL',
                    desc: 'For dermatological expertise and ethical care.',
                  },
                  {
                    title: 'Recognized member of CDSI',
                    desc: 'Promoting safe and scientific skin aesthetics.',
                  },
                  {
                    title: 'Accredited by ACD',
                    desc: 'For excellence in clinical and procedural dermatology.',
                  },
                ].map((item, index) => (
                  <p key={index} className="flex items-start gap-3">
                    <span className="text-amber-500 font-bold mt-1">•</span>
                    <span>
                      <strong className="text-gray-900">{item.title}</strong> — {item.desc}
                    </span>
                  </p>
                ))}
              </div>

              <p className="text-lg sm:text-xl font-medium text-gray-800 italic pt-6 border-t border-gray-200">
                Our work meets global standards of artistry, ethics, and scientific precision.
              </p>
            </div>

            {/* Right: Certificate Slider */}
            <div
              className="order-1 lg:order-2 relative"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Luxurious Glow */}
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.12),transparent_70%)] blur-3xl"></div>

              <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-[0_0_40px_rgba(212,175,55,0.15)] p-10 border border-amber-100">
                
                {/* Luxurious Section Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-center mb-10 relative">
                  <span className="bg-linear-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
                    Certified Excellence
                  </span>
                  <span className="absolute left-1/2 -bottom-2 w-16 h-0.5 bg-amber-400 -translate-x-1/2 rounded-full"></span>
                </h3>

                {/* Smooth Infinite Slider */}
                <div className="overflow-hidden rounded-2xl">
                  <motion.div
                    className={`flex ${isPaused ? '' : 'animate-slide'}`}
                    style={{
                      animationPlayState: isPaused ? 'paused' : 'running',
                    }}
                  >
                    {duplicatedCertificates.map((cert, index) => (
                      <motion.div
                        key={`${cert.name}-${index}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: (index % certificates.length) * 0.1, duration: 0.5 }}
                        className="shrink-0 mx-3 sm:mx-4 flex items-center justify-center"
                        style={{ minWidth: '140px' }}
                      >
                        <div className="group relative">
                          <div className="bg-white rounded-2xl p-4 transition-all duration-500 transform group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.3)] border border-amber-100">
                            <div className="bg-gray-50 rounded-xl w-24 h-20 sm:w-28 sm:h-24 flex items-center justify-center overflow-hidden">
                              <img
                                src={cert.logo}
                                alt={cert.name}
                                className="w-full h-full object-contain p-2 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                              />
                            </div>
                            <p className="text-center text-xs font-semibold text-gray-700 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              {cert.name}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                {/* Subtle indicator */}
                <div className="flex justify-center mt-6 space-x-1">
                  <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse delay-75"></div>
                  <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse delay-150"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-slide {
          animation: slide 18s linear infinite;
        }

        @media (max-width: 640px) {
          .animate-slide {
            animation: slide 14s linear infinite;
          }
        }

        .group:hover {
          z-index: 10;
        }
      `}</style>
    </>
  );
}
