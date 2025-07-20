import React from "react";
import {
  Code,
  Database,
  Server,
  Smartphone,
  TerminalSquare,
  Cloud,
} from "lucide-react";
import { motion } from "framer-motion";

const frontendTech = [
  { name: "HTML", icon: <Code /> },
  { name: "CSS", icon: <Code /> },
  { name: "JavaScript", icon: <TerminalSquare /> },
  { name: "React", icon: <Smartphone /> },
  { name: "Tailwind CSS", icon: <Code /> },
  { name: "TypeScript", icon: <Code /> },
];

const backendTech = [
  { name: "Node.js", icon: <Server /> },
  { name: "Express.js", icon: <Server /> },
  { name: "REST API", icon: <Cloud /> },
  { name: "MongoDB", icon: <Database /> },
  { name: "Git/GitHub", icon: <Code /> },
  { name: "JWT Auth", icon: <Code /> },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const Services = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="min-h-screen bg-gray-900 text-white p-8"
    >
      <motion.div
        variants={fadeUp}
        className="max-w-7xl mx-auto text-center mb-12"
      >
        <h2 className="text-4xl font-bold mb-4 text-amber-400">
          🚀 My Services
        </h2>
        <p className="text-gray-300 text-lg">
          I specialize in building robust web solutions using modern technologies
          — from elegant frontends to powerful backend systems.
        </p>
      </motion.div>

      {/* Tech Cards */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Frontend */}
        <motion.div
          variants={fadeUp}
          custom={0}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-500"
        >
          <h3 className="text-2xl font-semibold mb-4 text-teal-400">
            Frontend Development
          </h3>
          <ul className="grid grid-cols-2 gap-4">
            {frontendTech.map((tech, idx) => (
              <motion.li
                key={idx}
                custom={idx}
                variants={fadeUp}
                className="flex items-center space-x-3 bg-gray-700 p-3 rounded-xl hover:bg-teal-600 transition"
              >
                <span className="text-amber-400">{tech.icon}</span>
                <span className="text-white font-medium">{tech.name}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Backend */}
        <motion.div
          variants={fadeUp}
          custom={1}
          className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:scale-105 transition duration-500"
        >
          <h3 className="text-2xl font-semibold mb-4 text-teal-400">
            Backend Development
          </h3>
          <ul className="grid grid-cols-2 gap-4">
            {backendTech.map((tech, idx) => (
              <motion.li
                key={idx}
                custom={idx}
                variants={fadeUp}
                className="flex items-center space-x-3 bg-gray-700 p-3 rounded-xl hover:bg-amber-500 transition"
              >
                <span className="text-white">{tech.icon}</span>
                <span className="text-white font-medium">{tech.name}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Call to Action */}
      <motion.div variants={fadeUp} custom={6} className="mt-16 text-center">
        <p className="text-lg text-gray-400 mb-4">
          Looking for someone who can bring your ideas to life?
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-6 py-3 bg-amber-400 text-gray-900 rounded-xl font-semibold hover:bg-amber-500 transition duration-300 shadow-lg"
        >
          Let’s Build Something Amazing
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default Services;
