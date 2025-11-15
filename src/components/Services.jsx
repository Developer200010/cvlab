import React from "react";
import {
  Code,
  Database,
  Server,
  Smartphone,
  TerminalSquare,
  Cloud,
  Rocket,
} from "lucide-react";
import { motion } from "framer-motion";

const frontendTech = [
  { name: "HTML", icon: <Code /> },
  { name: "CSS", icon: <Code /> },
  { name: "JavaScript", icon: <TerminalSquare /> },
  { name: "React", icon: <Smartphone /> },
  { name: "Tailwind CSS", icon: <Code /> },
  { name: "TypeScript", icon: <Code /> },
  { name: "Next.js (CSR)", icon: <Code /> },
];

const backendTech = [
  { name: "Node.js", icon: <Server /> },
  { name: "Express.js", icon: <Server /> },
  { name: "REST API", icon: <Cloud /> },
  { name: "MongoDB", icon: <Database /> },
  { name: "Git/GitHub", icon: <Code /> },
  { name: "JWT Auth", icon: <Code /> },
  { name: "Next.js (SSR)", icon: <Code /> },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" },
  }),
};

const Services = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-16 sm:py-20 px-4 sm:px-6"
    >
      {/* ===== HEADER ===== */}
      <motion.div
        variants={fadeUp}
        className="max-w-4xl mx-auto text-center mb-16 sm:mb-20 px-2"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-amber-400 to-teal-400 bg-clip-text text-transparent">
          My Development Expertise
        </h2>
        <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
          I craft <span className="text-amber-400">frontend experiences</span> that delight users and
          <span className="text-teal-400"> backend systems</span> that scale effortlessly.
        </p>
      </motion.div>

      {/* ===== Service Cards ===== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12 max-w-7xl mx-auto px-2">
        {/* FRONTEND CARD */}
        <motion.div
          variants={fadeUp}
          custom={0}
          className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl hover:shadow-amber-500/30 transition-all duration-500 hover:scale-[1.03] backdrop-blur-sm"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Smartphone className="text-amber-400 w-7 h-7 sm:w-8 sm:h-8" />
            <h3 className="text-2xl sm:text-3xl font-bold text-amber-400">
              Frontend Development
            </h3>
          </div>
          <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
            Building seamless, responsive, and pixel-perfect UIs with
            cutting-edge tools and libraries.
          </p>

          <ul className="grid grid-cols-2 gap-3 sm:gap-4">
            {frontendTech.map((tech, idx) => (
              <motion.li
                key={idx}
                custom={idx}
                variants={fadeUp}
                className="flex items-center space-x-3 bg-gray-800/60 p-3 rounded-xl hover:bg-amber-500/20 hover:translate-x-1 transition-all duration-300"
              >
                <span className="text-amber-400">{tech.icon}</span>
                <span className="font-medium text-sm sm:text-base">
                  {tech.name}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* BACKEND CARD */}
        <motion.div
          variants={fadeUp}
          custom={1}
          className="bg-white/5 border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl hover:shadow-teal-500/30 transition-all duration-500 hover:scale-[1.03] backdrop-blur-sm"
        >
          <div className="flex items-center space-x-3 mb-4">
            <Server className="text-teal-400 w-7 h-7 sm:w-8 sm:h-8" />
            <h3 className="text-2xl sm:text-3xl font-bold text-teal-400">
              Backend Development
            </h3>
          </div>
          <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
            Designing fast, secure, and scalable APIs & databases to power
            modern web applications.
          </p>

          <ul className="grid grid-cols-2 gap-3 sm:gap-4">
            {backendTech.map((tech, idx) => (
              <motion.li
                key={idx}
                custom={idx}
                variants={fadeUp}
                className="flex items-center space-x-3 bg-gray-800/60 p-3 rounded-xl hover:bg-teal-500/20 hover:translate-x-1 transition-all duration-300"
              >
                <span className="text-teal-400">{tech.icon}</span>
                <span className="font-medium text-sm sm:text-base">
                  {tech.name}
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* ===== Call to Action ===== */}
      <motion.div
        variants={fadeUp}
        custom={5}
        className="mt-20 sm:mt-24 text-center max-w-2xl mx-auto px-2"
      >
        <p className="text-base sm:text-lg text-gray-400 mb-6 leading-relaxed">
          Have an idea? Let’s turn it into a world-class product.
        </p>
        <motion.button
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 0px 20px rgba(251,191,36,0.6)",
          }}
          whileTap={{ scale: 0.95 }}
          className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-amber-400 to-teal-400 text-gray-900 rounded-full font-bold text-base sm:text-lg shadow-xl hover:shadow-amber-400/40 transition-all duration-300 flex items-center justify-center gap-2 mx-auto"
        >
          <Rocket className="w-5 h-5" /> Let’s Build Something Amazing
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Services;
