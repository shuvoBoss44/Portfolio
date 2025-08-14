// src/components/HeroSection.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Typed from "typed.js";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaGitlab,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiTailwindcss,
  SiPostman,
  SiVercel,
  SiNextdotjs,
} from "react-icons/si";

// Array of icons to display in the background
const codingIcons = [
  { icon: FaReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: FaNodeJs, name: "Node.js" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiJavascript, name: "JavaScript" },
  { icon: SiTailwindcss, name: "Tailwind CSS" },
  { icon: FaHtml5, name: "HTML5" },
  { icon: FaCss3Alt, name: "CSS3" },
  { icon: FaGitAlt, name: "Git" },
  { icon: FaGithub, name: "GitHub" },
  { icon: FaGitlab, name: "GitLab" },
  { icon: SiPostman, name: "Postman" },
  { icon: SiVercel, name: "Vercel" },
];

// Helper function to generate random icon properties
const generateRandomIconProps = () => {
  return codingIcons.map(() => ({
    animationDuration: `${(Math.random() * 5 + 15).toFixed(2)}s`,
    delay: `${(Math.random() * 5).toFixed(2)}s`,
    size: `${(Math.random() * 2 + 1).toFixed(2)}rem`,
    positionX: `${(Math.random() * 100).toFixed(2)}%`,
    positionY: `${(Math.random() * 100).toFixed(2)}%`,
    rotation: (Math.random() * 360).toFixed(2),
    opacity: (Math.random() * 0.2 + 0.05).toFixed(2),
  }));
};

const HeroSection = () => {
  const typedRef = useRef(null);
  const sectionRef = useRef(null);
  const [iconProps, setIconProps] = useState([]);

  useEffect(() => {
    // Generate random icon props only on the client side
    setIconProps(generateRandomIconProps());

    let typed;
    if (typedRef.current) {
      typed = new Typed(typedRef.current, {
        strings: ["a Full Stack Developer", "Expert in MERN Stack"],
        typeSpeed: 80,
        backSpeed: 50,
        backDelay: 1500,
        loop: true,
        smartBackspace: true,
      });
    }
    return () => {
      if (typed) {
        typed.destroy();
      }
    };
  }, []);

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, staggerChildren: 0.3, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    hover: { scale: 1.05, boxShadow: "0px 8px 24px rgba(13, 202, 240, 0.4)" },
    tap: { scale: 0.95 },
  };

  const socialIconVariants = {
    hover: { scale: 1.15, y: -2 },
    tap: { scale: 0.95 },
  };

  return (
    <motion.section
      id="home"
      ref={sectionRef}
      className="relative w-full min-h-screen bg-gradient-to-br from-slate-950 via-sky-950 to-slate-900 text-white flex items-center justify-center overflow-hidden"
    >
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 flex flex-col lg:flex-row items-center justify-between z-10">
        <motion.div
          className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-5xl font-extrabold leading-tight tracking-tight"
            variants={textVariants}
          >
            <span className="block">Hey, I'm</span>
            <span className="block min-w-[280px] sm:min-w-[400px] lg:min-w-[600px] text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-500 to-cyan-500 bg-[length:200%_200%]">
              Shuvo Chakma
            </span>
            <span className="sm:inline-block min-w-[280px] sm:min-w-[400px] lg:min-w-[600px] text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500">
              <span ref={typedRef}></span>
            </span>
          </motion.h1>
          <motion.p
            className="mt-6 text-md sm:text-xl lg:text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 font-mono font-semibold"
            variants={textVariants}
          >
            Building full-stack web applications from front to back with MERN
            stack expertise.
          </motion.p>

          {/* --- Consolidated Socials & Buttons for better mobile spacing --- */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center gap-6 sm:gap-4 lg:gap-8 justify-center lg:justify-start"
            variants={textVariants}
          >
            <div className="flex gap-4">
              <motion.a
                href="https://github.com/shuvoBoss44"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#ffff] text-3xl hover:opacity-80 transition-colors duration-300"
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="https://wa.me/8801625490792"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#25D366] text-3xl hover:opacity-80 transition-colors duration-300"
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <FaWhatsapp />
              </motion.a>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#projects"
                className="px-8 py-3 bg-gradient-to-r from-sky-500 to-cyan-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Explore My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="px-8 py-3 border-2 border-sky-400 text-sky-400 font-semibold rounded-full hover:bg-sky-400 hover:text-white transition-all duration-300"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          className="relative w-[350px] h-[350px] md:w-[400px] md:h-[400px] lg:w-[450px] lg:h-[450px] flex justify-center items-center"
          initial={{ opacity: 0, scale: 0.9, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          whileHover={{
            scale: 1.03,
            transition: { duration: 0.3, ease: "easeOut" },
          }}
        >
          {/* Enhanced gradient fill background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-teal-400/40 via-violet-500/40 to-rose-400/40 rounded-full blur-3xl opacity-40"
            animate={{
              opacity: [0.4, 0.7, 0.4],
              background: [
                "radial-gradient(circle at 30% 30%, #5eead4, #8b5cf6, #f43f5e)",
                "radial-gradient(circle at 70% 70%, #f43f5e, #5eead4, #8b5cf6)",
                "radial-gradient(circle at 30% 30%, #5eead4, #8b5cf6, #f43f5e)",
              ],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />

          {/* Subtle inner gradient glow */}
          <motion.div
            className="absolute inset-3 bg-gradient-to-r from-white/20 to-transparent rounded-full blur-xl opacity-30"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
          />

          {/* Main image container with refined shadow and border */}
          <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl ring-1 ring-white/25">
            <Image
              src="https://res.cloudinary.com/doqjgif3u/image/upload/v1755126029/Adobe_Express_-_file_fksfgf.png"
              alt="Portfolio Image"
              fill
              style={{ objectFit: "contain" }}
              className="transition-transform duration-500 ease-in-out hover:scale-105 hover:rotate-1"
              sizes="(max-width: 768px) 350px, (max-width: 1024px) 400px, 450px"
              priority
            />
            {/* Gradient fill overlay for depth */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-teal-500/10 rounded-full"
              animate={{ opacity: [0.3, 0.5, 0.3] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </div>

      {/* Floating background coding icons */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {iconProps.length > 0 &&
          codingIcons.map((item, index) => {
            const Icon = item.icon;
            const props = iconProps[index];

            return (
              <motion.div
                key={index}
                className="absolute text-sky-400"
                style={{
                  top: props.positionY,
                  left: props.positionX,
                  opacity: props.opacity,
                }}
                initial={{ rotate: props.rotation }}
                animate={{
                  y: ["-20px", "20px"],
                  x: ["-20px", "20px"],
                  rotate: [props.rotation, props.rotation + 360],
                }}
                transition={{
                  y: {
                    duration: parseFloat(props.animationDuration) * 0.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                  x: {
                    duration: parseFloat(props.animationDuration),
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                  rotate: {
                    duration: parseFloat(props.animationDuration),
                    repeat: Infinity,
                    ease: "linear",
                  },
                  delay: parseFloat(props.delay),
                }}
              >
                <Icon style={{ fontSize: props.size }} />
              </motion.div>
            );
          })}
      </div>
    </motion.section>
  );
};

export default HeroSection;
