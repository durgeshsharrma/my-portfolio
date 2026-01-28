import React, { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect scroll and change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);

    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-[7vw] md:px-[7vw] lg:px-[7vw] ${isScrolled ? "bg-[#050414]/80 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-5"
        }`}
    >
      <div className="text-white flex justify-between items-center">
        {/* Logo */}
        <div className="text-lg font-semibold cursor-pointer">
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Durgesh</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Sharma</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <motion.li
              key={item.id}
              whileHover={{ scale: 1.1, color: "#8245ec" }}
              className={`cursor-pointer transition-colors ${activeSection === item.id ? "text-[#8245ec]" : ""
                }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </motion.li>
          ))}
        </ul>

        {/* Social Icons */}
        <div className="hidden md:flex space-x-4">
          <motion.a
            href="https://github.com/durgeshsharrma"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: 10, color: "#8245ec" }}
            className="text-gray-300"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/durgesh-sharma-62a25b222/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, rotate: -10, color: "#8245ec" }}
            className="text-gray-300"
          >
            <Linkedin size={24} />
          </motion.a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-[#8245ec]">
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Items */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-[#050414]/95 backdrop-blur-xl border-b border-white/10 overflow-hidden md:hidden shadow-2xl"
          >
            <ul className="flex flex-col items-center space-y-6 py-8 text-gray-300">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className={`cursor-pointer hover:text-white text-xl ${activeSection === item.id ? "text-[#8245ec]" : ""
                    }`}
                >
                  <button onClick={() => handleMenuItemClick(item.id)}>
                    {item.label}
                  </button>
                </motion.li>
              ))}
              <div className="flex space-x-6 mt-4">
                <a
                  href="https://github.com/durgeshsharrma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <Github size={28} />
                </a>
                <a
                  href="https://www.linkedin.com/in/durgesh-sharma-62a25b222/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <Linkedin size={28} />
                </a>
              </div>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
