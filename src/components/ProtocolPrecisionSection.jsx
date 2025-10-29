import React from 'react';
import { motion } from 'framer-motion';

export default function ProtocolPrecisionSection({ imageSrc = 'https://t4.ftcdn.net/jpg/01/34/13/91/360_F_134139194_RaH3m1Tc0qxLw9FiluKfiqK5b6xB142J.jpg' }) {
  const container = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { staggerChildren: 0.08 } },
  };
  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section className="bg-linear-to-br from-white via-amber-50/40 to-white text-gray-900 py-10 px-6 sm:px-10 lg:px-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left Content */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="space-y-8"
        >
          {/* Section Title */}
          <motion.div variants={fadeUp} className="relative inline-block">
            <div className="absolute -inset-1 bg-linear-to-r from-amber-400/40 to-yellow-200/40 rounded-lg blur-md"></div>
            <h2 className="relative text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              Where{" "}
              <span className="bg-linear-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
                Protocols
              </span>{" "}
              Meet Precision
            </h2>
          </motion.div>

          {/* Description */}
          <motion.p variants={fadeUp} className="text-gray-700 leading-relaxed max-w-xl">
            Device-grade ultrasound with calibrated energy mapping, facial vector planning, and nerve-safe zones. We personalize shot count and depth by age, laxity, and facial anatomy.
          </motion.p>

          {/* Feature Grid */}
          <motion.div variants={fadeUp} className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {[
              { title: '3-Layer Mapping', subtitle: '1.5 / 3.0 / 4.5 mm' },
              { title: 'Pain-Managed Comfort', subtitle: 'Protocols for safe experience' },
              { title: 'Ethical Indications', subtitle: 'No over-treat approach' },
              { title: 'Doctor-Performed', subtitle: 'Nurse-assisted precision' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.04 }}
                className="bg-white rounded-xl p-4 border border-amber-100 shadow-[0_4px_20px_rgba(212,175,55,0.15)] hover:shadow-[0_6px_25px_rgba(212,175,55,0.25)] transition-all duration-300"
                transition={{ type: 'spring', stiffness: 280, damping: 18, delay: index * 0.05 }}
              >
                <div className="font-semibold text-gray-900">{item.title}</div>
                <div className="text-sm text-gray-600">{item.subtitle}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Metrics */}
          {/* Metrics */}
<motion.div
  variants={fadeUp}
  className="
    mt-10 
    flex flex-wrap 
    justify-center sm:justify-start 
    gap-4 sm:gap-6 
    items-stretch
  "
>
  <MetricBadge value="23+" label="Years" />
  <MetricBadge value="Class-100" label="OTs" />
  <MetricBadge value="40+" label="Countries" />
</motion.div>

        </motion.div>

        {/* Right: Image + Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl shadow-2xl bg-linear-to-br from-white to-amber-50/50 border border-amber-100">
            <motion.img
              src={imageSrc}
              alt="Ultrasound device in clinical setting"
              className="w-full h-80 md:h-112 object-cover"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 160 }}
            />

            {/* Floating Annotation */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="absolute left-6 top-6 bg-white/80 backdrop-blur-md rounded-xl px-4 py-2 shadow-lg border border-amber-100"
            >
              <div className="text-xs font-semibold text-gray-900">Clinical-Grade Ultrasound</div>
              <div className="text-[11px] text-gray-600">Safe, precise, medical protocols</div>
            </motion.div>

            {/* Animated golden ring */}
            <motion.div
              className="absolute right-6 bottom-6 w-20 h-20 rounded-full border-[2.5px] border-gradient-to-r from-amber-400 to-yellow-600 shadow-[0_0_20px_rgba(212,175,55,0.25)]"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 12, ease: 'linear' }}
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* --- MetricBadge with theme --- */
function MetricBadge({ value, label }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center justify-center bg-white rounded-xl px-5 py-3 border border-amber-100 shadow-[0_4px_20px_rgba(212,175,55,0.15)] transition-all duration-300"
    >
      <div className="text-2xl font-extrabold bg-linear-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
        {value}
      </div>
      <div className="text-xs text-gray-700 font-medium">{label}</div>
    </motion.div>
  );
}
