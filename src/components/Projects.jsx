import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Puzzle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "CVtube",
    tech: ["MERN stack", "Cloudinary", "streamifier", "multer", "Tailwind"],
    link: "https://cvtube200010.vercel.app/",
    image: "/images/project12.png",
    description:
      "CVtube is a full-stack video-sharing platform inspired by YouTube🎥.",
  },
  {
    title: "ILETS PRO",
    tech: ["React", "Framer-motion", "Tailwind"],
    link: "https://ilets-pro-cv.vercel.app/",
    image: "/images/project11.png",
    description:
      "A sleek landing page for an IELTS institute with hero, feature, and testimonials sections.",
  },
  {
    title: "AceWithAi",
    tech: [
      "HTML",
      "Tailwind",
      "React",
      "Node.js",
      "Express.js",
      "Mongodb",
      "JWT",
    ],
    link: "https://awacv.vercel.app/",
    image: "/images/project10.png",
    description:
      "AceWithAI helps users practice, evaluate, and track progress — with secure authentication and personalized dashboards.",
  },
  {
    title: "QuirkLog",
    tech: ["React", "Tailwind", "Node.js", "Cloudinary"],
    link: "https://quirklogcv.vercel.app/",
    image: "/images/project9.png",
    description:
      "A modern blogging platform to explore, create, and share stories.",
  },
  {
    title: "ShoppyGlobal",
    tech: ["React", "Redux Toolkit", "Tailwind"],
    link: "https://shoppy-global-cv.vercel.app/",
    image: "/images/project8.png",
    description:
      "A complete e-commerce frontend with cart, filtering, pagination, and checkout flow.",
  },
  {
    title: "BMD",
    tech: ["React", "Redux Toolkit", "Tailwind"],
    link: "https://bms123cv.vercel.app/",
    image: "/images/project7.png",
    description:
      "Book Management Dashboard with search, categorization, and responsive design.",
  },
  {
    title: "SMS",
    tech: ["HTML", "CSS", "JS", "LocalStorage"],
    link: "https://smscv.netlify.app/",
    image: "/images/project4.png",
    description:
      "A responsive student registration app powered by localStorage.",
  },
  {
    title: "WeathrX",
    tech: ["HTML", "CSS", "JS"],
    link: "https://weatherxcv.netlify.app/",
    image: "/images/project5.png",
    description:
      "A clean weather app showing real-time forecasts based on location.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
  }),
  exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
};

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 3;
  const total = projects.length;

  const next = () => setStartIndex((prev) => (prev + visibleCount) % total);
  const prev = () => setStartIndex((prev) => (prev - visibleCount + total) % total);

  const visibleProjects = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleProjects.push(projects[(startIndex + i) % total]);
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 px-4 sm:px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        {/* ===== Header ===== */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-2xl sm:text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-amber-400 to-teal-400 bg-clip-text text-transparent"
        >
          <Puzzle className="w-10 h-10 text-amber-400 text-2xl sm:text-4xl" />
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg mb-16"
        >
          A showcase of my best work — full-stack apps, elegant UI, and interactive experiences.
        </motion.p>

        {/* ===== Projects Grid ===== */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={startIndex}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {visibleProjects.map((project, i) => (
                <motion.div
                  key={project.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg shadow-2xl hover:shadow-amber-500/30 overflow-hidden transition-all duration-500"
                >
                  {/* Image */}
                  <div className="overflow-hidden relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 sm:h-56 lg:h-60 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Info */}
                  <div className="p-6 flex flex-col space-y-4 text-left">
                    <h3 className="text-2xl font-bold text-amber-400 group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-800/70 px-3 py-1 rounded-full text-xs text-gray-200 hover:bg-amber-500/20 transition"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto inline-flex items-center gap-2 text-amber-400 hover:text-teal-400 transition-all font-semibold"
                    >
                      View Project <ExternalLink size={18} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ===== Navigation Buttons ===== */}
          <div className="flex justify-center gap-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.1, background: "linear-gradient(to right, #f59e0b, #14b8a6)" }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              className="p-3 sm:p-4 rounded-full bg-gradient-to-r from-amber-500/30 to-teal-500/30 hover:from-amber-500 hover:to-teal-500 transition-all shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, background: "linear-gradient(to right, #f59e0b, #14b8a6)" }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              className="p-3 sm:p-4 rounded-full bg-gradient-to-r from-amber-500/30 to-teal-500/30 hover:from-amber-500 hover:to-teal-500 transition-all shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
