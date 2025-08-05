import React, { useState } from "react";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Your projects array
const projects = [
     {
        title: "ShoppyGlobal",
        tech: ["HTML", "CSS", "JS", "LocalStorage", "react"],
        link: "https://shoppy-global-cv.vercel.app/",
        image: "/images/project8.png",
        description: "ShoppyGlobe is a fully functional e-commerce frontend application built with React, Redux Toolki, and Tailwind CSS It features cart management, product filtering, sorting, pagination, and a full checkout flow.",
    },
    {
        title: "BMD",
        tech: ["HTML", "CSS", "JS", "LocalStorage", "react"],
        link: "https://bms123cv.vercel.app/",
        image: "/images/project7.png",
        description: "This is a responsive and interactive Book Management Dashboard built with React, Redux Toolkit, and Tailwind CSS. It allows users to browse, search, categorize, and manage books, as well as add them to a cart for easy tracking.",
    },
    {
        title: "SMS",
        tech: ["HTML", "CSS", "JS", "LocalStorage"],
        link: "https://smscv.netlify.app/",
        image: "/images/project4.png",
        description: "A responsive student registration app with localStorage.",
    },
    {
        title: "WeathrX",
        tech: ["HTML", "CSS", "JS"],
        link: "https://weatherxcv.netlify.app/",
        image: "/images/project5.png",
        description: "Weather app with real-time location-based data.",
    },
    {
        title: "Doozie",
        tech: ["React", "Tailwind"],
        link: "https://dooziecv.vercel.app/",
        image: "/images/project6.png",
        description: "Minimal and powerful task manager built in React.",
    },
    {
        title: "GitHubUserDetails",
        tech: ["JS", "HTML", "CSS"],
        link: "https://gitusers123.netlify.app/",
        image: "/images/project1.png",
        description: "GitHub user search and repo viewer.",
    },
    {
        title: "movieSite",
        tech: ["React", "Tailwind"],
        link: "https://movieinfosite1.netlify.app/",
        image: "/images/project2.png",
        description: "A clean movie info browser using an open API.",
    },
    {
        title: "Blockly-Editor",
        tech: ["React", "JS"],
        link: "https://blocklyeditor002.netlify.app/",
        image: "/images/project3.png",
        description: "Drag and drop block editor for coding.",
    },
];

const Projects = () => {
    const [startIndex, setStartIndex] = useState(0);
    const visibleCount = 3;
    const total = projects.length;

    const next = () =>
        setStartIndex((prev) => (prev + visibleCount >= total ? 0 : prev + visibleCount));
    const prev = () =>
        setStartIndex((prev) =>
            prev - visibleCount < 0 ? total - visibleCount : prev - visibleCount
        );

    const visibleProjects = projects.slice(startIndex, startIndex + visibleCount);

    return (
        <section className="min-h-screen bg-gray-900 text-white px-6 py-12">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-bold text-center text-amber-400 mb-6"
                >
                    🧩 Featured Projects
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-center text-gray-300 mb-8"
                >
                    Slide through a few of my best builds powered by modern web tech.
                </motion.p>

                {/* Carousel Row */}
                <div className="relative">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-300">
                        {visibleProjects.map((project, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-amber-500/30 hover:scale-[1.02] transition-all duration-300"
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-44 object-cover"
                                />
                                <div className="p-4 space-y-2">
                                    <h3 className="text-teal-400 text-xl font-semibold">{project.title}</h3>
                                    <p className="text-sm text-gray-300">{project.description}</p>
                                    <ul className="flex flex-wrap gap-2 text-xs text-gray-200">
                                        {project.tech.map((tech, i) => (
                                            <li key={i} className="bg-gray-700 px-2 py-1 rounded-full">
                                                {tech}
                                            </li>
                                        ))}
                                    </ul>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-amber-400 hover:underline text-sm"
                                    >
                                        View Project <ExternalLink size={14} />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Controls */}
                    {/* Controls */}
                    <div className="lg:absolute flex justify-between items-center w-full top-0 lg:top-1/2 lg:-translate-y-1/2 px-2 z-20 mt-4 lg:mt-0">
                        <button
                            onClick={prev}
                            className="bg-black/40 p-2 rounded-full hover:bg-black/60"
                            aria-label="Previous"
                        >
                            <ChevronLeft className="text-white" />
                        </button>
                        <button
                            onClick={next}
                            className="bg-black/40 p-2 rounded-full hover:bg-black/60"
                            aria-label="Next"
                        >
                            <ChevronRight className="text-white" />
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;
