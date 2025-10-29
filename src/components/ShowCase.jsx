"use client";
import { motion } from "framer-motion";
import { FaUsers, FaStar, FaCheckCircle, FaHospital } from "react-icons/fa";

const stats = [
  { label: "23+ Years Experience", icon: FaUsers },
  { label: "1,200+ Global Reviews (4.9★)", icon: FaStar },
  { label: "IADVL & ACD Accredited", icon: FaCheckCircle },
  { label: "Class-100 OTs", icon: FaHospital },
];

const ShowCase = () => {
  return (
    <section className="relative bg-linear-to-br from-white via-amber-50 to-white py-20 px-8 md:px-20 rounded-3xl max-w-7xl mx-auto my-20 overflow-hidden shadow-[0_0_30px_rgba(212,175,55,0.15)]">
      {/* Subtle golden light accents */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,175,55,0.08),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.08),transparent_60%)]"></div>

      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 text-center z-10">
        {stats.map(({ label, icon: Icon }, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center space-y-5 p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-[0_8px_25px_rgba(212,175,55,0.1)] hover:shadow-[0_12px_35px_rgba(212,175,55,0.25)] transition-all duration-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: index * 0.3,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{
              scale: 1.07,
              y: -5,
              transition: { type: "spring", stiffness: 250 },
            }}
            whileTap={{ scale: 0.97 }}
          >
            {/* Icon glow animation */}
            <motion.div
              className="p-6 rounded-full bg-linear-to-tr from-amber-200 via-amber-300 to-amber-100 text-amber-800 shadow-[0_0_25px_rgba(212,175,55,0.3)]"
              animate={{
                scale: [1, 1.12, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 3.5,
                ease: "easeInOut",
                delay: index * 0.3,
              }}
            >
              <Icon size={40} />
            </motion.div>

            {/* Label */}
            <p className="text-gray-800 font-semibold text-sm md:text-base tracking-wide">
              {label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ShowCase;
