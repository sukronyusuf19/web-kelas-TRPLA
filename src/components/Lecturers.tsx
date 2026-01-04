// src/components/Lecturers.tsx → Rasio foto 3:4 (portrait)

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Instagram, User } from "lucide-react";

const lecturers = [
  {
    name: "Azhar Basyir Rantawi, S.TP., M.Eng",
    position: "Ketua Program Studi TRPL",
    expertise: "Software Engineering & IoT",
    photo: "/Lecturers/azhar.jpg",
    email: "azhar.basyir@cwe.ac.id",
    phone: "+62 812-3456-7890",
    instagram: "https://instagram.com/azharbasyir",
  },
  {
    name: "M. Aditia Purnama, S.Kom., M.Kom",
    position: "Dosen Pengampu - Pemrograman Web",
    expertise: "Full-Stack JavaScript & DevOps",
    photo: "/Lecturers/purnama.jpg",
    email: "aditia.purnama@cwe.ac.id",
    phone: "+62 812-7890-123",
    instagram: "https://instagram.com/aditiapurnama",
  },
  {
    name: "Aditya Waras Utama, S.Kom., M.Kom",
    position: "Dosen Pengampu - Basis Data & Cloud",
    expertise: "Database Design & Cloud Computing",
    photo: "/Lecturers/aditya.jpg",
    email: "aditya.waras@cwe.ac.id",
    phone: "+62 813-5678-9012",
    instagram: "https://instagram.com/adityawaras",
  },
  {
    name: "Laksmi Anindyati, S.Kom., M.T",
    position: "Dosen Pengampu - Mobile & Cybersecurity",
    expertise: "Flutter & Ethical Hacking",
    photo: "/Lecturers/laksmi.jpg",
    email: "laksmi.anindyati@cwe.ac.id",
    phone: "+62 821-9876-5432",
    instagram: "https://instagram.com/laksmianindyati",
  },
  {
    name: "Amanda, S.Kom., M.Kom",
    position: "Dosen Pengampu - Algoritma & Struktur Data",
    expertise: "Algorithm Design & Competitive Programming",
    photo: "/Lecturers/amanda.jpg",
    email: "amanda@cwe.ac.id",
    phone: "+62 856-7890-1234",
    instagram: "https://instagram.com/amanda.trpl",
  },
];

export const Lecturers = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="lecturers" className="py-16 px-4 md:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Judul */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent">
            Dosen Pengampu TRPL A
          </h2>
          <div className="w-24 h-1 mx-auto mt-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {lecturers.map((lecturer, i) => (
            <motion.div
              key={i}
              initial={{ y: 80, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.7, ease: "easeOut" }}
              whileHover={{ y: -12, scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="
                group relative overflow-hidden rounded-3xl
                bg-white/10 dark:bg-gray-900/70 backdrop-blur-xl
                border border-white/20 dark:border-white/10
                shadow-xl hover:shadow-2xl hover:shadow-purple-500/40
                transition-all duration-300
                flex flex-col h-full
              "
            >
              {/* Glow Effect */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-purple-600/30 to-transparent blur-3xl" />
              </div>

              {/* Foto Rasio 3:4 (Portrait) */}
              <div className="px-6 pt-8 pb-2 md:px-8 md:pt-10">
                {lecturer.photo ? (
                  <div
                    className="
                    mx-auto w-full max-w-[220px] aspect-[3/4] 
                    rounded-2xl overflow-hidden 
                    border-4 border-white/30 
                    group-hover:border-purple-400 
                    transition-all duration-500 
                    shadow-2xl
                  "
                  >
                    <img
                      src={lecturer.photo}
                      alt={lecturer.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                ) : (
                  <div
                    className="
                    mx-auto w-full max-w-[220px] aspect-[3/4] 
                    rounded-2xl bg-gradient-to-br from-purple-500/30 to-blue-500/30 
                    flex items-center justify-center border-4 border-white/30
                  "
                  >
                    <User className="w-32 h-32 text-white/70" />
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="p-5 md:p-6 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 dark:text-white text-base md:text-lg leading-tight">
                    {lecturer.name}
                  </h3>
                  <p className="text-purple-600 dark:text-purple-400 font-medium text-sm mt-2">
                    {lecturer.position}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 text-xs mt-3 line-clamp-2 px-2">
                    {lecturer.expertise}
                  </p>
                </div>

                {/* Contact Icons */}
                <div className="flex justify-center gap-5 md:gap-7 mt-6">
                  <a
                    href={`mailto:${lecturer.email}`}
                    className="text-blue-500 hover:scale-125 transition"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                  <a
                    href={`tel:${lecturer.phone}`}
                    className="text-emerald-500 hover:scale-125 transition"
                  >
                    <Phone className="w-6 h-6" />
                  </a>
                  {lecturer.instagram && (
                    <a
                      href={lecturer.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-pink-500 hover:scale-125 transition"
                    >
                      <Instagram className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
