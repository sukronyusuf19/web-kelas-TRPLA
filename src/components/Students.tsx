import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Github, Instagram, Mail, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const studentData = [
  {
    name: "Ahmad Zulkifli",
    role: "IoT Developer",
    skills: ["Python", "Node.js", "C++"],
    nim: "202515003",
    avatar: "/avatar/student1.jpg",
    instagram: "https://instagram.com/ahmdzlkfl1_",
    github: "https://github.com/ahmadzulkifli",
    email: "mailto:ahmad.zulkifli@example.com",
  },
  {
    name: "Alvi Hawari Ritonga",
    role: "Frontend Developer",
    skills: ["React", "TypeScript", "Tailwind CSS"],
    nim: "202515007",
    avatar: "/avatar/student2.jpg",
    instagram: "https://www.instagram.com/alhawarirtg_vi?igsh=aDk0djZ4MGFzZml2",
    github: "https://github.com/alvihawari",
    email: "mailto:alvi.hawari@example.com",
  },
  {
    name: "Ahmad Sukron Yusuf",
    role: "Cybersecurity Specialist",
    skills: ["Python", "C", "linux"],
    nim: "202515002",
    avatar: "/avatar/student3.jpg",
    instagram:
      "https://www.instagram.com/sukron.yusuff?igsh=MWtnemZ5Y2UwZ253bA==",
    github: "https://github.com/Yusuf19102007",
    email: "mailto:ahmad.sukron@example.com",
  },
  {
    name: "Farah Anindya Zahra",
    role: "UI/UX Designer",
    skills: ["Figma", "Adobe XD", "Prototyping"],
    nim: "202515024",
    avatar: "/avatar/student4.jpg",
    instagram: "https://www.instagram.com/aanindyazahraa?igsh=eWhkNmF1djZoYnQ3",
    github: "https://github.com/farahanindya",
    email: "mailto:farah.anindya@example.com",
  },
  {
    name: "Anggina Sri Rahayu",
    role: "Mobile Developer",
    skills: ["Flutter", "Dart", "Firebase"],
    nim: "202515009",
    avatar: "/avatar/student5.jpg",
    instagram:
      "https://www.instagram.com/naginaa.ryu?igsh=MTZoeWZ1cHU0aGNlYg==",
    github: "https://github.com/angginasri",
    email: "mailto:anggina.sri@example.com",
  },
  {
    name: "Ahmad Azri",
    role: "Full Stack Developer",
    skills: ["React", "Node.js", "PostgreSQL"],
    nim: "202515001",
    avatar: "/avatar/student6.jpg",
    instagram:
      "https://www.instagram.com/azridomani?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    github: "https://github.com/ahmadazri",
    email: "mailto:ahmad.azri@example.com",
  },
  {
    name: "Mifta Salsabilah Lubis",
    role: "Data Analyst",
    skills: ["Python", "Pandas", "SQL"],
    nim: "202515036",
    avatar: "/avatar/student7.jpg",
    instagram:
      "https://www.instagram.com/miftahsalsabilaa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    github: "https://github.com/miftasalsabilah",
    email: "mailto:mifta.salsabilah@example.com",
  },
  {
    name: "Jeni Puspitaria",
    role: "Frontend Developer",
    skills: ["Vue.js", "JavaScript", "CSS"],
    nim: "202515030",
    avatar: "/avatar/student8.jpg",
    instagram: "https://instagram.com/jenipuspitaria",
    github:
      "https://www.instagram.com/jenipsptria?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    email: "mailto:jeni.puspitaria@example.com",
  },
  {
    name: "Gadiza Sahgira",
    role: "DevOps Engineer",
    skills: ["Docker", "Kubernetes", "AWS"],
    nim: "202515027",
    avatar: "/avatar/student9.jpg",
    instagram:
      "https://www.instagram.com/dizaaaaaaaw?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    github: "https://github.com/gadizasahgira",
    email: "mailto:gadiza.sahgira@example.com",
  },
  {
    name: "Miftahul Nurul Qolbi",
    role: "Backend Developer",
    skills: ["Laravel", "PHP", "MySQL"],
    nim: "202515037",
    avatar: "/avatar/student10.jpg",
    instagram:
      "https://www.instagram.com/miftahulnurulqolbi?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    github: "https://github.com/miftahulnurul",
    email: "mailto:miftahul.nurul@example.com",
  },
  {
    name: "Muhammad Deta Pratama",
    role: "DBA (Database Administrator)",
    skills: ["Oracle database", "Microsoft SQL Server", "MySQL"],
    nim: "202515038",
    avatar: "/avatar/student11.jpg",
    instagram:
      "https://www.instagram.com/m.deta_/?utm_source=ig_web_button_share_sheet",
    github: "https://github.com/muhammaddeta",
    email: "mailto:muhammad.deta@example.com",
  },
  {
    name: "Albib Azrianda",
    role: "Mobile Developer",
    skills: ["React Native", "JavaScript", "Redux"],
    nim: "202515004",
    avatar: "/avatar/student12.jpg",
    instagram:
      "https://www.instagram.com/albib.azrianda/?utm_source=ig_web_button_share_sheet",
    github: "https://github.com/albibazrianda",
    email: "mailto:albib.azrianda@example.com",
  },
  {
    name: "Aliyya Raeni Chayara",
    role: "UI/UX Designer",
    skills: ["Sketch", "User Research", "Wireframing"],
    nim: "202515005",
    avatar: "/avatar/student13.jpg",
    instagram:
      "hhttps://www.instagram.com/aliiyyaarnchyr?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    github: "https://github.com/aliyyaraeni",
    email: "mailto:aliyya.raeni@example.com",
  },
  {
    name: "Alya Rahmadani",
    role: "Frontend Developer",
    skills: ["Angular", "TypeScript", "SCSS"],
    nim: "202515008",
    avatar: "/avatar/student14.jpg",
    instagram: "https://www.instagram.com/ci_amwy?igsh=MTdldDFqemVuM3hkOA==",
    github: "https://github.com/alyarahmadani",
    email: "mailto:alya.rahmadani@example.com",
  },
  {
    name: "Azam Er Syifaullah",
    role: "Backend Developer",
    skills: ["Django", "Python", "PostgreSQL"],
    nim: "202515012",
    avatar: "/avatar/student15.jpg",
    instagram:
      "https://www.instagram.com/azamsyifaullah?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    github: "https://github.com/azamersyifa",
    email: "mailto:azam.syifaullah@example.com",
  },
  {
    name: "Berkah Ihsanul Fatahillah",
    role: "Full Stack Developer",
    skills: ["Vue.js", "Node.js", "MongoDB"],
    nim: "202515016",
    avatar: "/avatar/student16.jpg",
    instagram:
      "https://www.instagram.com/berkah_if?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    github: "https://github.com/berkahihsanul",
    email: "mailto:berkah.ihsanul@example.com",
  },
  {
    name: "Dendi Ramadhan",
    role: "IoT Developer",
    skills: ["Arduino", "C++", "ESP32"],
    nim: "202515018",
    avatar: "/avatar/student17.jpg",
    instagram:
      "hhttps://www.instagram.com/dendiramadhan627?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    github: "https://github.com/dendiramadhan",
    email: "mailto:dendi.ramadhan@example.com",
  },
  {
    name: "Arif Rifai",
    role: "Frontend Developer",
    skills: ["React", "Tailwind CSS", "JavaScript"],
    nim: "202515010",
    avatar: "/avatar/student18.jpg",
    instagram:
      "https://www.instagram.com/aochi_36?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
    github: "https://github.com/arifrifai",
    email: "mailto:arif.rifai@example.com",
  },
  {
    name: "Ahmad Rifansyah Harahap",
    role: "DevOps Engineer",
    skills: ["Jenkins", "Terraform", "AWS"],
    nim: "202515013",
    avatar: "/avatar/student19.jpg",
    instagram: "https://www.instagram.com/arh235_?igsh=bmY4NzZlMjd3cWZ4",
    github: "https://github.com/ahmadrifansyah",
    email: "mailto:ahmad.rifansyah@example.com",
  },
  {
    name: "Allika Aullia",
    role: "Mobile Developer",
    skills: ["Flutter", "Firebase", "Dart"],
    nim: "202515006",
    avatar: "/avatar/student20.jpg",
    instagram: "https://www.instagram.com/allikaaul_?igsh=MW5lNWFzcXJjbGxq",
    github: "https://github.com/allikaaullia",
    email: "mailto:allika.aullia@example.com",
  },
  {
    name: "Baiti Rahma",
    role: "Data Analyst",
    skills: ["Python", "Tableau", "SQL"],
    nim: "202515014",
    avatar: "/avatar/student21.jpg",
    instagram:
      "https://www.instagram.com/baitirahmaaa?igsh=MTkxbWpsdmw2emJkaQ==",
    github: "https://github.com/baitirahma",
    email: "mailto:baiti.rahma@example.com",
  },
  {
    name: "Khairo Ummah Dalimunthe",
    role: "Backend Developer",
    skills: ["Express", "Node.js", "MySQL"],
    nim: "202515032",
    avatar: "/avatar/student22.jpg",
    instagram: "https://www.instagram.com/khairodlmnth_?igsh=a3U2N2FqdHk3bDlr",
    github: "https://github.com/khairoummah",
    email: "mailto:khairo.ummah@example.com",
  },
  {
    name: "Luthfi Ikrima",
    role: "Frontend Developer",
    skills: ["React", "TypeScript", "Chakra UI"],
    nim: "202515034",
    avatar: "/avatar/student23.jpg",
    instagram: "https://www.instagram.com/luthfiimaa?igsh=MWFidDU3Y3EybXc4eQ==",
    github: "https://github.com/luthfiikrima",
    email: "mailto:luthfi.ikrima@example.com",
  },
  {
    name: "Fathi Nabil Rafa Ruza",
    role: "Ahli GIS (Geographic Information System) ",
    skills: ["CAD (Computer-Aided Design)", "GIS (ArcGIS, QGIS)", "AutoCAD"],
    nim: "202515025",
    avatar: "/avatar/student24.jpg",
    instagram:
      "https://www.instagram.com/fathi_nabill.rr?igsh=cWkyZ3RlYzcyZXU2",
    github: "https://github.com/fathinabil",
    email: "mailto:fathi.nabil@example.com",
  },
  {
    name: "Hariyando Silalahi",
    role: "Full Stack Developer",
    skills: ["Angular", "Spring Boot", "PostgreSQL"],
    nim: "202515028",
    avatar: "/avatar/student25.jpg",
    instagram:
      "https://www.instagram.com/handriyan263?igsh=MXJ6azA1d3RqZjUxZA==",
    github: "https://github.com/hariyando",
    email: "mailto:hariyando.silalahi@example.com",
  },
  {
    name: "Dava Nurfauzan",
    role: "Mobile Developer",
    skills: ["React Native", "TypeScript", "Firebase"],
    nim: "202515017",
    avatar: "/avatar/student26.jpg",
    instagram: "https://www.instagram.com/davaanrfzn?igsh=MWZ0N2tsbng4Njdu",
    github: "https://github.com/davanurfauzan",
    email: "mailto:dava.nurfauzan@example.com",
  },
  {
    name: "Dery Aprianda",
    role: "Backend Developer",
    skills: ["Laravel", "PHP", "Redis"],
    nim: "202515019",
    avatar: "/avatar/student27.jpg",
    instagram:
      "https://www.instagram.com/deryapriyanda?igsh=MTgwMTVqZHMzc2Yxcg==",
    github: "https://github.com/deryaprianda",
    email: "mailto:dery.aprianda@example.com",
  },
  {
    name: "Dika Prasetyawan",
    role: "Frontend Developer",
    skills: ["Vue.js", "JavaScript", "Tailwind CSS"],
    nim: "202515020",
    avatar: "/avatar/student28.jpg",
    instagram:
      "https://www.instagram.com/dika.ha.716?igsh=MWxsY3pvNjBrbzRweg==",
    github: "https://github.com/dikaprasetyawan",
    email: "mailto:dika.prasetyawan@example.com",
  },
  {
    name: "Fadilla Dwi Ramadhani",
    role: "UI/UX Designer",
    skills: ["Figma", "User Testing", "Prototyping"],
    nim: "202515023",
    avatar: "/avatar/student29.jpg",
    instagram: "https://www.instagram.com/fadilladwr04?igsh=N2w4cmJlN3BqajN2",
    github: "https://github.com/fadilladwi",
    email: "mailto:fadilla.dwi@example.com",
  },
  {
    name: "M. Irfan",
    role: "Network Engineer",
    skills: ["Docker", "CI/CD", "Azure"],
    nim: "202515035",
    avatar: "/avatar/student30.jpg",
    instagram: "https://www.instagram.com/irfanames?igsh=dTdsZXJrajhqdnBq",
    github: "https://github.com/mirfan",
    email: "mailto:m.irfan@example.com",
  },
  {
    name: "Irsan Pujangga",
    role: "IoT Developer",
    skills: ["Python", "Raspberry Pi", "MQTT"],
    nim: "202515029",
    avatar: "/avatar/student31.jpg",
    instagram: "https://www.instagram.com/irsnpjngga_?igsh=NjFxeXNsa3R0N2Zu",
    github: "https://github.com/irsanpujangga12-cmd",
    email: "mailto:irsan.pujangga@example.com",
  },
  {
    name: "Mya Aprilia Melani",
    role: "Frontend Developer",
    skills: ["React", "CSS", "JavaScript"],
    nim: "202315039",
    avatar: "/avatar/student32.jpg",
    instagram: "https://www.instagram.com/myaacozy_?igsh=MnkwODh3cXYwb2M4",
    github: "https://github.com/myaaprilia",
    email: "mailto:mya.aprilia@example.com",
  },
];

export const Students = () => {
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const displayedStudents = showAll ? studentData : studentData.slice(0, 8);

  return (
    <section id="students" className="py-20 px-4 relative" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Mahasiswa TRPL A
          </h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {displayedStudents.map((student, index) => (
            <motion.div
              key={student.nim}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-card/70 backdrop-blur-[25px] border-2 border-accent-purple/20 rounded-3xl p-6 shadow-elegant hover:shadow-purple transition-all group"
            >
              <div className="relative mb-4">
                <div className="w-24 h-24 mx-auto rounded-full border-2 border-accent-blue overflow-hidden bg-gradient-primary p-1">
                  {student.avatar ? (
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-full h-full rounded-full bg-white object-cover"
                    />
                  ) : (
                    <div className="w-full h-full rounded-full bg-secondary flex items-center justify-center">
                      <User className="w-12 h-12 text-accent-blue" />
                    </div>
                  )}
                </div>
              </div>

              <h3 className="text-xl font-bold text-text-primary text-center mb-1">
                {student.name}
              </h3>
              <p className="text-sm text-muted-foreground text-center mb-2">
                {student.nim}
              </p>
              <div className="flex justify-center mb-4">
                <span className="px-3 py-1 bg-accent-purple/20 text-accent-purple text-xs font-medium rounded-full">
                  {student.role}
                </span>
              </div>

              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {student.skills.slice(0, 3).map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 bg-accent-blue/10 text-accent-blue text-xs rounded-full border border-accent-blue/20 hover:bg-accent-blue/20 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 justify-center">
                <motion.a
                  href={student.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="w-8 h-8 rounded-full bg-accent-blue/10 flex items-center justify-center hover:bg-accent-blue hover:text-white transition-all"
                >
                  <Github className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={student.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  className="w-8 h-8 rounded-full bg-accent-purple/10 flex items-center justify-center hover:bg-accent-purple hover:text-white transition-all"
                >
                  <Instagram className="w-4 h-4" />
                </motion.a>
                <motion.a
                  href={student.email}
                  whileHover={{ scale: 1.2 }}
                  className="w-8 h-8 rounded-full bg-accent-purple/10 flex items-center justify-center hover:bg-accent-purple hover:text-white transition-all"
                >
                  <Mail className="w-4 h-4" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center"
        >
          <Button
            size="lg"
            onClick={() => setShowAll(!showAll)}
            className="bg-card/70 backdrop-blur-[25px] border-2 border-accent-blue text-accent-blue hover:bg-gradient-primary hover:text-white hover:scale-110 rounded-full text-lg px-8 transition-all shadow-elegant"
          >
            {showAll ? "Tampilkan Lebih Sedikit" : "Lihat Semua 32 Mahasiswa"}
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
