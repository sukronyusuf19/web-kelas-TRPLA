// src/components/Achievements.tsx → Versi FULL WIDTH di Desktop + Tetap Rapi di Mobile

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Award, Star, Zap, Medal, Target } from "lucide-react";

const achievements = [
  {
    icon: Trophy,
    title: "Hackathon Champion",
    date: "Maret 2025",
    description: "Juara 1 National Software Development Competition",
  },
  {
    icon: Award,
    title: "Best Final Project",
    date: "Februari 2025",
    description:
      "Penghargaan proyek akhir terbaik berkat platform e-commerce inovatif",
  },
  {
    icon: Star,
    title: "Kontribusi Open Source",
    date: "Januari 2025",
    description: "Berkontribusi pada framework JavaScript besar di GitHub",
  },
  {
    icon: Zap,
    title: "Innovation Award",
    date: "Desember 2024",
    description: "Penghargaan atas pengembangan chatbot berbasis AI",
  },
  {
    icon: Medal,
    title: "UI/UX Excellence",
    date: "November 2024",
    description: "Juara desain terbaik kompetisi regional",
  },
  {
    icon: Target,
    title: "Outstanding Teamwork",
    date: "Oktober 2024",
    description: "Kerja sama tim luar biasa dalam proyek lintas divisi",
  },
];

export const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="achievements"
      className="py-16 px-4 md:py-24 overflow-hidden"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        {/* Judul */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
            Prestasi & Timeline
          </h2>
          <div className="w-32 h-1.5 mx-auto mt-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Garis tengah hanya di desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-purple-500/40 via-pink-500/30 to-blue-500/40 hidden lg:block" />

          <div className="space-y-12 md:space-y-16">
            {achievements.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                {/* Kartu Kiri atau Kanan (bergantian) */}
                <div
                  className={`${
                    index % 2 === 0
                      ? "lg:text-right lg:pr-12"
                      : "lg:col-start-2 lg:text-left lg:pl-12"
                  }`}
                >
                  <motion.div
                    whileHover={{ scale: 1.03, y: -8 }}
                    className="inline-block w-full max-w-xl mx-auto lg:mx-0 bg-white/10 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 dark:border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl hover:shadow-purple-500/40 transition-all duration-500"
                  >
                    <div
                      className={`flex items-start gap-5 ${
                        index % 2 === 0
                          ? "lg:flex-row-reverse lg:text-right"
                          : ""
                      }`}
                    >
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center shadow-xl">
                          <item.icon className="w-9 h-9 md:w-11 md:h-11 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                          {item.title}
                        </h3>
                        <p className="text-purple-600 dark:text-purple-400 font-semibold text-sm md:text-base mt-1">
                          {item.date}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm md:text-lg mt-4 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Placeholder sisi kosong */}
                <div className={index % 2 === 0 ? "hidden lg:block" : ""} />
                <div className={index % 2 === 1 ? "hidden lg:block" : ""} />

                {/* Dot Tengah (hanya desktop besar) */}
                <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-xl opacity-70" />
                  <div className="relative w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 rounded-full rounded-full shadow-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Version: garis kiri + icon */}
        <div className="lg:hidden mt-8 space-y-10">
          {achievements.map((item, index) => (
            <motion.div
              key={`mobile-${index}`}
              initial={{ x: -40, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0 w-14 h-14 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full blur-lg opacity-60" />
                <div className="relative w-full h-full bg-gradient-to-br from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
              </div>
              <div className="flex-1 bg-white/10 dark:bg-gray-900/70 backdrop-blur-xl border border-white/20 rounded-2xl p-5 shadow-xl">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 text-sm font-medium mt-1">
                  {item.date}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-3">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
