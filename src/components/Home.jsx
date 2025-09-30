import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, Rocket, Hand } from "lucide-react";
import TypedText from "../components/TypedText";
import profileImg from "../../public/img.png";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" },
  }),
};

const Home = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white flex items-center px-4 sm:px-6 py-16 sm:py-20"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20">
        {/* ==== LEFT: IMAGE ==== */}
        <motion.div
          variants={fadeUp}
          custom={0}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[380px]">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 150 }}
              className="rounded-3xl overflow-hidden shadow-2xl border border-white/10 backdrop-blur-md bg-white/5 hover:shadow-amber-500/30 transition-all duration-500"
            >
              <img
                src={profileImg}
                alt="Chandan Vishwakarma"
                className="w-full h-auto object-cover object-top transition-all duration-500"
              />
            </motion.div>

            {/* Name & Role (Always visible) */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-5 sm:p-6 rounded-b-3xl">
              <h2 className="text-xl sm:text-2xl font-bold text-amber-400">
                Chandan Vishwakarma
              </h2>
              <p className="text-sm sm:text-base text-gray-300">
                Full-Stack Developer
              </p>
            </div>
          </div>
        </motion.div>

        {/* ==== RIGHT: TEXT ==== */}
        <div className="space-y-6 sm:space-y-8 text-center md:text-left">
          {/* Intro Heading */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight flex flex-wrap items-center gap-2 justify-center md:justify-start"
          >
            <Hand className="w-8 h-8 sm:w-10 sm:h-10 text-amber-400" />
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-amber-400 to-teal-400 bg-clip-text text-transparent">
              Chandan
            </span>
          </motion.h1>

          {/* Short Intro */}
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-base sm:text-lg text-gray-300 max-w-lg mx-auto md:mx-0 leading-relaxed"
          >
            I’m a{" "}
            <span className="text-amber-400 font-semibold">
              Full-Stack Developer
            </span>{" "}
            passionate about building modern, scalable web applications. My
            mission is to craft seamless user experiences and powerful backend
            systems that empower businesses to grow.
          </motion.p>

          {/* Typewriter Effect */}
          <motion.div variants={fadeUp} custom={3}>
            <TypedText
              className="text-xl sm:text-2xl lg:text-3xl font-semibold min-h-[40px] text-teal-400"
              strings={[
                "Crafting Interactive Web Experiences",
                "Building Scalable APIs with Node.js",
                "Designing Pixel-Perfect Interfaces",
                "Turning Ideas Into Real-World Products",
              ]}
            />
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={fadeUp} custom={4} className="pt-2 sm:pt-4">
            <Link to="/projects">
              <motion.button
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 0px 25px rgba(251,191,36,0.7)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-amber-400 to-teal-400 text-gray-900 font-bold rounded-full shadow-xl hover:shadow-amber-400/40 transition-all duration-300 flex items-center gap-2 mx-auto md:mx-0 text-base sm:text-lg"
              >
                <Rocket className="w-5 h-5" /> View My Projects
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeUp}
            custom={5}
            className="flex items-center justify-center md:justify-start space-x-4 sm:space-x-6 pt-4 sm:pt-6"
          >
            <a
              href="https://github.com/Developer200010"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-amber-400 hover:text-black transition-all duration-300 shadow-md hover:shadow-amber-400/40"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/chandan-vishwakarma-38ba942bb/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-amber-400 hover:text-black transition-all duration-300 shadow-md hover:shadow-amber-400/40"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:chandanvishw11002@gmail.com"
              className="p-3 bg-white/10 rounded-full hover:bg-amber-400 hover:text-black transition-all duration-300 shadow-md hover:shadow-amber-400/40"
            >
              <Mail size={22} />
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Home;
