import React from "react";
import { Award, ExternalLink, Check } from "lucide-react";
import { motion } from "framer-motion";

const certificates = [
  {
    title: "Full-Stack Web Development",
    img: "/certificates/1.jpg",
    link: "https://trainings.internshala.com/s/v/3808951/9b33fee4",
  },
  {
    title: "NSDC",
    img: "/certificates/2.jpg",
    link: "https://trainings.internshala.com/s/v/3811040/be573287",
  },
  {
    title: "DSA Part 1",
    img: "/certificates/5.jpg",
    link: "https://trainings.internshala.com/certificate/preview/dsa-one-fsd-pgc-v4/coc/dashbaord/",
  },
  {
    title: "DSA Part 2",
    img: "/certificates/6.jpg",
    link: "https://trainings.internshala.com/certificate/preview/dsa-two-fsd-pgc-v4/coc/dashboard/",
  },
  {
    title: "Next.js",
    img: "/certificates/3.jpg",
    link: "https://www.udemy.com/certificate/UC-ae9f78d2-bb95-467c-a195-c1643dc43b0d/",
  },
  {
    title: "AI Mastery",
    img: "/certificates/4.jpg",
    link: "https://www.udemy.com/certificate/UC-bac27ff0-3701-44e1-b65e-b38b8344937f/",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 22, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  hover: {
    y: -8,
    scale: 1.03,
    rotateZ: 0.7,
    transition: { type: "spring", stiffness: 260, damping: 22 },
  },
  tap: { scale: 0.98 },
};

const imgVariants = {
  hidden: { scale: 0.98, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.6, ease: "circOut" } },
};

export default function Certificates() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        {/* Header with icon + subtle entrance motion */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
           <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 text-2xl sm:text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-amber-400 to-teal-400 bg-clip-text text-transparent"
        >
          <Award className="w-10 h-10 text-amber-400 text-2xl sm:text-4xl" />
          Featured Projects
        </motion.h2>
        </motion.div>

        {/* grid with staggered children animations */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certificates.map((cert, idx) => (
            <motion.article
              key={cert.title + idx}
              variants={cardVariants}
              whileHover="hover"
              whileTap="tap"
              className="group bg-white/4 backdrop-blur-md border border-white/8 rounded-xl shadow-[0_8px_30px_rgba(0,0,0,0.6)] overflow-hidden flex flex-col"
            >
              {/* image area */}
              <div className="relative w-full h-56 sm:h-64 md:h-56 lg:h-52 bg-gray-900 flex items-center justify-center">
                <motion.img
                  variants={imgVariants}
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-contain p-4 transform transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />

                {/* subtle overlay that appears on hover */}
                <div className="absolute inset-0 pointer-events-none">
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.45 }}
                    className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                  />
                </div>
              </div>

              {/* info area */}
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm text-gray-300">{cert.title}</p>
                    <p className="mt-1 text-xs text-gray-400">Issued · Verified</p>
                  </div>

                  {/* animated verified badge */}
                  <motion.span
                    className="inline-flex items-center gap-2 bg-emerald-600/10 text-emerald-300 px-3 py-1 rounded-full text-xs"
                    animate={{ scale: [1, 1.06, 1], rotate: [0, -6, 0] }}
                    transition={{ repeat: Infinity, repeatType: "loop", duration: 3.5 }}
                    aria-hidden
                  >
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                    Verified
                  </motion.span>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-300 hover:text-teal-300 font-semibold transition-colors"
                    aria-label={`Open ${cert.title}`}
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">See Certificate</span>
                  </a>

                  {/* subtle chevron / micro interaction on hover */}
                  <motion.div
                    initial={{ x: 0 }}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 260, damping: 22 }}
                    className="opacity-0 group-hover:opacity-100 text-gray-300"
                    aria-hidden
                  >
                    ➜
                  </motion.div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
