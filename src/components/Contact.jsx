import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const Contact = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-4 sm:px-6 py-16 sm:py-20 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full mx-auto">
        {/* ===== Header ===== */}
        <motion.div variants={fadeUp} className="text-center mb-16 px-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold bg-gradient-to-r from-amber-400 to-teal-400 bg-clip-text text-transparent flex items-center justify-center gap-2">
            <Send className="w-8 h-8 text-amber-400" />
            Let's Connect
          </h2>
          <p className="text-gray-300 text-sm sm:text-base lg:text-lg mt-4 max-w-2xl mx-auto leading-relaxed">
            Got a project in mind, an idea to discuss, or just want to say hi?  
            Drop me a message — I’d love to hear from you.
          </p>
        </motion.div>

        {/* ===== Contact Section ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 items-start">
          {/* ==== Contact Info ==== */}
          <motion.div
            variants={fadeUp}
            custom={1}
            className="space-y-8 bg-white/5 backdrop-blur-lg border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl hover:shadow-amber-500/20 transition-all duration-500"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-amber-400 mb-4">
              Contact Info
            </h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
              Whether it's a full-scale project, a quick collaboration, or a friendly hello — my inbox is always open.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4 bg-gray-800/60 p-4 rounded-xl hover:bg-amber-500/20 transition-all">
                <Mail className="text-amber-400 w-6 h-6" />
                <span className="text-sm sm:text-base break-all">chickencoder3@gmail.com</span>
              </div>
              <div className="flex items-center gap-4 bg-gray-800/60 p-4 rounded-xl hover:bg-teal-500/20 transition-all">
                <Phone className="text-teal-400 w-6 h-6" />
                <span className="text-sm sm:text-base">+91 6901088383</span>
              </div>
              <div className="flex items-center gap-4 bg-gray-800/60 p-4 rounded-xl hover:bg-pink-500/20 transition-all">
                <MapPin className="text-pink-400 w-6 h-6" />
                <span className="text-sm sm:text-base">Assam, India</span>
              </div>
            </div>
          </motion.div>

          {/* ==== Contact Form ==== */}
          <motion.form
            variants={fadeUp}
            custom={2}
            className="space-y-6 bg-white/5 backdrop-blur-lg border border-white/10 p-6 sm:p-8 rounded-3xl shadow-2xl hover:shadow-teal-500/20 transition-all duration-500"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! (simulated)");
            }}
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-teal-400 mb-4">
              Send a Message
            </h3>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white outline-none focus:ring-2 ring-amber-400 placeholder-gray-500 text-sm sm:text-base transition-all"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-300">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white outline-none focus:ring-2 ring-teal-400 placeholder-gray-500 text-sm sm:text-base transition-all"
                required
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-300">
                Your Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-xl bg-gray-800 text-white outline-none focus:ring-2 ring-pink-400 placeholder-gray-500 text-sm sm:text-base transition-all"
                required
              ></textarea>
            </div>

            <motion.button
              whileHover={{
                scale: 1.08,
                boxShadow: "0px 0px 20px rgba(251,191,36,0.6)",
              }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-amber-400 to-teal-400 text-gray-900 font-bold rounded-full text-base sm:text-lg shadow-lg hover:shadow-amber-400/40 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" /> Send Message
            </motion.button>
          </motion.form>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
