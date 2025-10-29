"use client";
import { motion } from "framer-motion";
import {
  LuAward,
  LuUsers,
  LuShieldCheck,
  LuHospital,
} from "react-icons/lu";
import { PiStarThin } from "react-icons/pi";

const stats = [
  { label: "23+ Years of Medical Excellence", icon: LuAward },
  { label: "1,200+ Global Reviews (4.9★)", icon: PiStarThin },
  { label: "IADVL & ACD Accredited", icon: LuShieldCheck },
  { label: "Class-100 Operation Theatres", icon: LuHospital },
];

export default function ShowCase() {
  return (
    <section className="relative py-10 px-6 md:px-20  overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-linear-to-br from-[#faf7f2] via-white to-[#fff9ed]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_90%,rgba(212,175,55,0.08),transparent_70%)]" />

      {/* Grid content */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 z-10 max-w-7xl mx-auto">
        {stats.map(({ label, icon: Icon }, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.15,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              y: -8,
              scale: 1.04,
              transition: { type: "spring", stiffness: 200 },
            }}
            className="group relative p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-[#e8dcc2]/60 shadow-[0_8px_25px_rgba(212,175,55,0.12)] hover:shadow-[0_12px_40px_rgba(212,175,55,0.25)] transition-all duration-500"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-linear-to-br from-[#fff4d9]/40 to-white rounded-3xl" />

            {/* Icon section */}
            <motion.div
              animate={{
                rotate: [0, 3, -3, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
              className="relative z-10 mb-5 flex items-center justify-center w-20 h-20 rounded-full bg-linear-to-br from-[#f3e3b1] via-[#e8d28b] to-[#fff9ed] shadow-[0_0_20px_rgba(212,175,55,0.35)] text-[#7b652d]"
            >
              <Icon size={38} />
            </motion.div>

            {/* Label */}
            <p className="relative z-10 text-[#3a2d14] font-medium text-base md:text-lg tracking-wide leading-snug">
              {label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
