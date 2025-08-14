// src/components/SkillsSection.jsx
"use client";

import React, { useRef } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiC,
  SiCplusplus,
} from "react-icons/si";
import { motion, useInView } from "framer-motion";

// Skills data organized by category with original brand colors
const skillsData = [
  {
    category: "Programming Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "C++", icon: SiCplusplus, color: "#00599C" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    ],
  },
  {
    category: "Styling & UI",
    skills: [
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    ],
  },
  {
    category: "Backend & Database",
    skills: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section id="skills" className="w-full py-20 bg-gray-950 text-white">
      <div className="container mx-auto px-6 lg:px-12 z-10 relative">
        <div ref={ref} className="mb-12 text-center">
          <motion.h2
            className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-500 inline-block"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            My Skills
          </motion.h2>

          <motion.div
            className="h-1 w-24 mx-auto mt-4 rounded-full bg-gradient-to-r from-sky-400 to-cyan-500"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "6rem" } : { width: "0%" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        {skillsData.map((skillCategory, index) => (
          <div key={index} className="mb-12">
            <h3 className="text-2xl font-bold text-gray-300 mb-6 text-center md:text-left">
              {skillCategory.category}
            </h3>
            {/* The parent div no longer has a motion stagger effect */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {skillCategory.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skillIndex}
                  className="flex flex-col items-center p-6 bg-gray-800 rounded-lg shadow-lg border border-gray-700 hover:border-sky-500 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  // The delay is removed so all cards appear at once
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true, amount: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <skill.icon
                    className="text-2xl md:3xl mb-3"
                    style={{ color: skill.color }}
                  />
                  <p className="text-sm font-semibold text-gray-300 text-center">
                    {skill.name}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
