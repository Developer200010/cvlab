import React from "react";
import { ExternalLink } from "lucide-react";
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

const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.45, ease: "easeOut" } }),
};

export default function Certificates() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-12 px-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h3 className="text-center text-2xl sm:text-3xl font-extrabold mb-8 text-amber-300">
          My Certificates
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, idx) => (
            <motion.article
              key={cert.title + idx}
              custom={idx}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              whileHover={{ translateY: -6 }}
              className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg shadow-2xl overflow-hidden transition-all duration-400"
            >
              <div className="relative w-full h-48 sm:h-56 lg:h-52 overflow-hidden bg-gray-800">
                <img
                  src={cert.img}
                  alt={cert.title}
                  className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="p-5 flex flex-col gap-3">
                <div>
                  <p className="text-sm text-gray-300">{cert.title}</p>
                </div>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xs px-3 py-1 bg-gray-800/60 rounded-full text-gray-200">
                    Verified
                  </span>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-amber-400 hover:text-teal-400 font-semibold transition-all"
                    aria-label={`Open ${cert.title}`}
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">See Certificate</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
