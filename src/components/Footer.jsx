// src/components/Footer.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const socialIconHover = {
    scale: 1.2,
    color: "#22d3ee",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  };

  return (
    <motion.footer
      id="footer"
      className="relative w-full py-12 bg-slate-950 text-gray-400 overflow-hidden"
      initial="hidden"
      whileInView="visible"
      variants={footerVariants}
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        {/* Using Flexbox for layout */}
        <div className="flex flex-col md:flex-row md:justify-between border-b border-gray-700 pb-8">
          {/* Column 1: Branding & Description */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left mb-12 md:mb-0">
            <h3 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500 mb-4">
              Shuvo.
            </h3>
            <p className="text-sm max-w-sm">
              Building powerful web platforms that blend innovative design with
              flawless functionality and clean code.
            </p>
            <div className="flex gap-4 mt-6">
              <motion.a
                href="https://github.com/shuvoBoss44"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={socialIconHover}
              >
                <FaGithub size={24} />
              </motion.a>
              <motion.a
                href="https://wa.me/+8801625490792"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ ...socialIconHover, color: "#25d366" }}
              >
                <FaWhatsapp size={24} />
              </motion.a>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="text-center md:text-left">
            <h4 className="text-xl font-bold text-white mb-4">Contact Info</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:chakmashuvo2016@gmail.com"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  chakmashuvo2016@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+8801625490792"
                  className="hover:text-cyan-400 transition-colors duration-300"
                >
                  +8801625490792
                </a>
              </li>
              <li>
                <p>RUET Gate, Rajshahi</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="mt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Shuvo Chakma. All Rights Reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
