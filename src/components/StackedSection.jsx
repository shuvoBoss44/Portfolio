// src/components/StackedSection.jsx
"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const StackedSection = ({ children }) => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const filter = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px)", "blur(5px)"]
  );

  return (
    <motion.div
      ref={ref}
      className="relative w-full min-h-screen flex items-center justify-center"
      style={{
        scale,
        opacity,
        y,
        filter,
      }}
    >
      {children}
    </motion.div>
  );
};

export default StackedSection;
