import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Optional: replace with any icon library
import logo from "../../public/logo.svg"
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white w-full p-4 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <div id="logo" className="text-2xl font-bold text-white flex">
          <img src={logo} alt="" width={40} height={40}/><span>𝓒𝓥 𝓛𝓪𝓫</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-lg">
          <Link to="/" className="hover:text-amber-400 transition">Home</Link>
          <Link to="/services" className="hover:text-amber-400 transition">Services</Link>
          <Link to="/projects" className="hover:text-amber-400 transition">Projects</Link>
          <Link to="/contact" className="hover:text-amber-400 transition">Contact</Link>
          <Link to="/certificate" className="hover:text-amber-400 transition">Certificate</Link>
        </nav>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden mt-4">
          <ul className="flex flex-col items-center space-y-4 text-lg bg-gray-800 py-4 rounded-xl">
            <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-amber-400">Home</Link>
            <Link to="/services" onClick={() => setIsOpen(false)} className="hover:text-amber-400">Services</Link>
            <Link to="/projects" onClick={() => setIsOpen(false)} className="hover:text-amber-400">Projects</Link>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-amber-400">Contact</Link>
            <Link to="/certificate" onClick={() => setIsOpen(false)} className="hover:text-amber-400">Certificate</Link>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
