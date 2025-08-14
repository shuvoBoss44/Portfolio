// src/components/TechStackSlider.jsx

"use client";

import React from "react";
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
} from "react-icons/si";
import { motion } from "framer-motion";

const techIcons = [
  { icon: FaReact, name: "React", color: "#61DAFB" },
  { icon: SiNextdotjs, name: "Next.js", color: "#FFFFFF" },
  { icon: FaNodeJs, name: "Node.js", color: "#339933" },
  { icon: SiExpress, name: "Express", color: "#FFFFFF" },
  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
  { icon: SiTailwindcss, name: "Tailwind CSS", color: "#06B6D4" },
  { icon: FaHtml5, name: "HTML5", color: "#E34F26" },
  { icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
];

const TechStackSlider = () => {
  const sliderContent = [...techIcons, ...techIcons];

  return (
    <div className="relative w-full overflow-hidden py-3 md:py-5 bg-gray-950 text-white">
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-r from-gray-950 via-transparent to-gray-950"></div>

      <motion.div
        className="flex animate-scroll"
        style={{ width: `${sliderContent.length * 150}px` }}
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{
          x: {
            duration: 30,
            ease: "linear",
            repeat: Infinity,
          },
        }}
      >
        {sliderContent.map((tech, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-24 md:w-36 flex flex-col items-center justify-center p-2 md:p-4"
          >
            <tech.icon
              className="text-4xl lg:text-5xl opacity-80"
              style={{ color: tech.color }}
            />
            <span className="mt-2 text-sm text-gray-300">{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStackSlider;
