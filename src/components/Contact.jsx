import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center text-amber-400 mb-6"
        >
          📬 Let's Connect
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center text-gray-300 mb-12"
        >
          Have a project in mind or just want to say hi? Feel free to drop a message.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl">
              <Mail className="text-amber-400" />
              <span>chickencoder3@gmail.com</span>
            </div>
            <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl">
              <Phone className="text-teal-400" />
              <span>+91 6901088383</span>
            </div>
            <div className="flex items-center gap-4 bg-gray-800 p-4 rounded-xl">
              <MapPin className="text-pink-400" />
              <span>Assam, India</span>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6 bg-gray-800 p-6 rounded-2xl shadow-xl"
            onSubmit={(e) => {
              e.preventDefault();
              alert("Message sent! (simulated)");
            }}
          >
            <div>
              <label className="block mb-1 text-sm font-medium">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 ring-amber-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 ring-teal-400"
                required
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white outline-none focus:ring-2 ring-pink-400"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-2 bg-amber-400 text-gray-900 rounded-lg font-semibold hover:bg-amber-500 transition"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
