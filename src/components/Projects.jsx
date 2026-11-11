import React, { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, Puzzle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    title: "MeeGrowth",
    tech: ["React.js", "Express.js", "Node.js", "MongoDB", "GCP"],
    link: "https://meegrowth.com/",
    image: null,
    description:
      "A full-stack business listing platform with subscription-based onboarding, admin approvals, product and service listings, social posts, likes, comments, sharing, and GCP deployment.",
  },
  {
    title: "Kittu Home Lands",
    tech: ["Flutter", "Dart", "Firebase", "GCP"],
    link: "https://kittuhomelands.com/",
    image: "/images/kittu-home-lands.png",
    description:
      "A property listing and selling application that helps buyers discover properties while enabling sellers and agents to manage categorized listings and property details.",
  },
  {
    title: "pdf-merger",
    tech: ["HTML", "CSS", "JS", "NEXT.JS"],
    link: "https://pdf-merger-mu-seven.vercel.app/",
    image: "/images/project14.png",
    description:
      "A clean weather app showing real-time forecasts based on location.",
  },
   {
    title: "CodeMentor AI",
    tech: ["Next.js", "openRouter LLM", "HTML", "Tailwind", "Vercel", "AI"],
    link: "https://code-mentor-ai-one.vercel.app/",
    image: "/images/project13.png",
    description:
      "CodeMentor AI is an AI-powered coding assistant that helps developers by providing code suggestions, explanations, and debugging tips in real-time.",
  },
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
  const pageCount = Math.ceil(total / visibleCount);
  const currentPage = Math.floor(startIndex / visibleCount);

  const next = () =>
    setStartIndex(((currentPage + 1) % pageCount) * visibleCount);
  const prev = () =>
    setStartIndex(((currentPage - 1 + pageCount) % pageCount) * visibleCount);
  const goToPage = (page) => setStartIndex(page * visibleCount);

  const visibleProjects = projects.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="page-atmosphere min-h-screen text-white pt-28 pb-20 px-4 sm:px-6 relative overflow-hidden">
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
                  className="group flex h-full flex-col bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg shadow-2xl hover:shadow-amber-500/30 overflow-hidden transition-all duration-500"
                >
                  {/* Image */}
                  <div className="overflow-hidden relative">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 sm:h-56 lg:h-60 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    ) : (
                      <div
                        role="img"
                        aria-label={`${project.title} project preview`}
                        className="w-full h-48 sm:h-56 lg:h-60 flex items-center justify-center bg-gradient-to-br from-emerald-500 via-teal-500 to-cyan-700 group-hover:scale-110 transition-transform duration-700"
                      >
                        <div className="text-center">
                          <div className="mx-auto mb-3 w-16 h-16 rounded-2xl border border-white/40 bg-white/15 flex items-center justify-center shadow-xl">
                            <span className="text-3xl font-black text-white">MG</span>
                          </div>
                          <span className="text-2xl font-extrabold tracking-wide text-white">
                            MeeGrowth
                          </span>
                        </div>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Info */}
                  <div className="flex flex-1 flex-col p-6 text-left">
                    <h3 className="text-2xl font-bold text-amber-400 group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-4 min-h-[84px] text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex min-h-[60px] flex-wrap content-start gap-2">
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
                      className="mt-auto inline-flex min-h-6 items-center gap-2 pt-4 text-amber-400 hover:text-teal-400 transition-all font-semibold"
                    >
                      View Project <ExternalLink size={18} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* ===== Navigation Buttons ===== */}
          <div className="mt-12 flex flex-col items-center gap-5">
            <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.1, background: "linear-gradient(to right, #f59e0b, #14b8a6)" }}
              whileTap={{ scale: 0.95 }}
              onClick={prev}
              aria-label="Previous projects page"
              className="p-3 sm:p-4 rounded-full bg-gradient-to-r from-amber-500/30 to-teal-500/30 hover:from-amber-500 hover:to-teal-500 transition-all shadow-lg"
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1, background: "linear-gradient(to right, #f59e0b, #14b8a6)" }}
              whileTap={{ scale: 0.95 }}
              onClick={next}
              aria-label="Next projects page"
              className="p-3 sm:p-4 rounded-full bg-gradient-to-r from-amber-500/30 to-teal-500/30 hover:from-amber-500 hover:to-teal-500 transition-all shadow-lg"
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </motion.button>
            </div>

            <div className="flex items-center gap-3" aria-label="Project pagination">
              {Array.from({ length: pageCount }, (_, page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => goToPage(page)}
                  aria-label={`Go to projects page ${page + 1}`}
                  aria-current={currentPage === page ? "page" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentPage === page
                      ? "w-8 bg-gradient-to-r from-amber-400 to-teal-400"
                      : "w-2 bg-white/25 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>

            <span className="font-mono text-xs font-semibold tracking-[0.2em] text-gray-400">
              PAGE {String(currentPage + 1).padStart(2, "0")} / {String(pageCount).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
