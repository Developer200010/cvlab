import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowDownRight,
  Bot,
  BrainCircuit,
  Github,
  Hand,
  Linkedin,
  Mail,
  Rocket,
  Sparkles,
  Workflow,
} from "lucide-react";
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

const socialLinkClass =
  "p-3 bg-white/10 border border-white/10 rounded-full hover:bg-amber-400 hover:text-black hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-amber-400/40";

const Home = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="page-atmosphere relative isolate min-h-screen overflow-hidden text-white flex items-center px-4 sm:px-6 pt-28 pb-16 sm:py-20"
    >
      <div className="pointer-events-none absolute -top-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-blue-600/15 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-teal-400/10 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:72px_72px] [mask-image:linear-gradient(to_bottom,black,transparent_85%)]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20">
        {/* ==== LEFT: IMAGE ==== */}
        <motion.div
          variants={fadeUp}
          custom={0}
          className="flex justify-center md:justify-start [perspective:1400px]"
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[380px]">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-amber-400/30 via-blue-500/10 to-teal-400/30 blur-2xl" />
            <motion.div
              whileHover={{ scale: 1.035, rotateY: -5, rotateX: 3, y: -8 }}
              transition={{ type: "spring", stiffness: 180, damping: 18 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-950/60 border border-white/15 bg-white/5 transition-all duration-500"
            >
              <img
                src={profileImg}
                alt="Chandan Vishwakarma"
                className="w-full h-auto object-cover object-top transition-all duration-700"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/15 via-transparent to-blue-950/50" />
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

            <div className="absolute -right-4 top-8 hidden sm:flex items-center gap-2 rounded-full border border-white/15 bg-slate-950/75 px-3 py-2 text-xs font-semibold text-teal-300 shadow-xl backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_12px_rgba(94,234,212,0.9)]" />
              Available for opportunities
            </div>
          </div>
        </motion.div>

        {/* ==== RIGHT: TEXT ==== */}
        <div className="relative max-w-2xl text-center md:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-amber-300 shadow-[0_0_24px_rgba(251,191,36,0.08)]">
            <Sparkles className="h-3.5 w-3.5" />
            AI-assisted full-stack developer
          </div>

          {/* Intro Heading */}
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-4xl sm:text-5xl lg:text-[4.25rem] font-extrabold leading-[1.05] flex flex-wrap items-center gap-2 justify-center md:justify-start"
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
            className="text-base sm:text-lg text-gray-300 max-w-xl mx-auto md:mx-0 leading-relaxed mt-6"
          >
            I’m a{" "}
            <span className="text-amber-400 font-semibold">
              Full-Stack Developer
            </span>{" "}
            passionate about building modern, scalable web applications. My
            mission is to craft seamless user experiences and powerful backend
            systems that empower businesses to grow.
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={2.5}
            className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-left"
          >
            <div className="rounded-2xl border border-teal-300/15 bg-teal-300/[0.06] p-3 transition hover:-translate-y-1 hover:bg-teal-300/10">
              <BrainCircuit className="mb-2 h-5 w-5 text-teal-300" />
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-teal-200">RAG systems</p>
              <p className="mt-1 text-xs text-gray-400">Knowledge-aware assistants</p>
            </div>
            <div className="rounded-2xl border border-blue-300/15 bg-blue-300/[0.06] p-3 transition hover:-translate-y-1 hover:bg-blue-300/10">
              <Workflow className="mb-2 h-5 w-5 text-blue-300" />
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-blue-200">Automation</p>
              <p className="mt-1 text-xs text-gray-400">Smart workflows that scale</p>
            </div>
            <div className="rounded-2xl border border-amber-300/15 bg-amber-300/[0.06] p-3 transition hover:-translate-y-1 hover:bg-amber-300/10">
              <Bot className="mb-2 h-5 w-5 text-amber-300" />
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-amber-200">Coding agents</p>
              <p className="mt-1 text-xs text-gray-400">Tools that ship faster</p>
            </div>
          </motion.div>

          {/* Typewriter Effect */}
          <motion.div variants={fadeUp} custom={3} className="mt-7 flex items-center gap-3 overflow-hidden whitespace-nowrap border-l-2 border-teal-400/60 pl-4">
            <TypedText
              className="text-[clamp(0.9rem,2.2vw,1.35rem)] font-mono font-semibold min-h-[32px] text-teal-400"
              strings={[
                "Building RAG Systems & AI Assistants",
                "Automating Workflows with Intelligent Agents",
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
                  scale: 1.05,
                  boxShadow: "0px 12px 35px rgba(20,184,166,0.28)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group px-8 sm:px-10 py-3.5 sm:py-4 bg-gradient-to-r from-amber-400 via-yellow-300 to-teal-400 text-gray-950 font-bold rounded-full shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto md:mx-0 text-base sm:text-lg"
              >
                <Rocket className="w-5 h-5" /> View My Projects
                <ArrowDownRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeUp}
            custom={5}
            className="flex items-center justify-center md:justify-start space-x-4 sm:space-x-6 pt-8"
          >
            <a
              href="https://github.com/Developer200010"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className={socialLinkClass}
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/chandan-vishwakarma-38ba942bb/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className={socialLinkClass}
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:chandanvishw11002@gmail.com"
              aria-label="Email Chandan"
              className={socialLinkClass}
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
