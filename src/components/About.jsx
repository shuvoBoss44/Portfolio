// src/components/AboutSection.jsx
"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Typed from "typed.js";

const AboutSection = () => {
  const ref = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const titleWords = "About Me".split(" ");

  const titleContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const titleWordVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: "easeOut",
        duration: 0.6,
      },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
      },
    },
  };

  const image1Variants = {
    hidden: { opacity: 0, x: -50, y: -50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const image2Variants = {
    hidden: { opacity: 0, x: 50, y: 50 },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  };

  const aboutText = `I’m Shuvo Chakma, an engineering student at Rajshahi University of Engineering and Technology (RUET) with a strong passion for programming, problem-solving, and creating innovative digital experiences. My academic path took me from Gazipur Residential Model School and College to Dhaka Commerce College, and eventually into the world of engineering, where I strive to harness technology to create solutions and inspire innovation.
Since 2021, I’ve been actively involved in web development, building projects ranging from practical tools to fully interactive websites. Notable works include a student profile web app for my ECE-23 batch and a shopping calculator, both designed with usability and clean UI in mind. My skills span C, C++, JavaScript, React, Next Js and various modern development tools.`;

  useEffect(() => {
    let typed;
    if (isInView && textRef.current) {
      typed = new Typed(textRef.current, {
        strings: [aboutText],
        typeSpeed: 3,
        loop: false,
        showCursor: true,
        cursorChar: "|",
        smartBackspace: true,
      });
    }

    // This is the cleanup function that will destroy the Typed.js instance
    return () => {
      if (typed) {
        typed.destroy();
      }
    };
  }, [isInView, aboutText]);

  return (
    <div
      id="about"
      className="min-h-screen relative w-full py-10 bg-slate-900 text-white overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 z-10 relative">
        <div className="mb-12 text-center">
          <motion.h2
            className="text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-500 to-cyan-500 bg-[length:200%_200%] animate-gradient inline-block"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            About Me
          </motion.h2>

          <motion.div
            className="h-1 w-24 mx-auto mt-4 rounded-full bg-gradient-to-r from-sky-400 to-cyan-500"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "6rem" } : { width: "0%" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        <motion.div
          ref={ref}
          className="flex flex-col lg:flex-row items-center flex-col-reverse justify-between gap-16 lg:gap-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Text Content */}
          <motion.div className="lg:w-1/2 text-center lg:text-left">
            <motion.div
              className="text-base sm:text-lg text-gray-400 max-w-xl mx-auto lg:mx-0 text-justify font-mono"
              variants={textVariants}
            >
              <span ref={textRef} className="whitespace-pre-wrap"></span>
            </motion.div>
          </motion.div>

          {/* V-Shape Image Layout */}
          <motion.div className="lg:w-1/2 flex justify-center items-center relative h-[250px] sm:h-[350px] lg:h-[500px]">
            <motion.div
              className="absolute top-0 left-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] rounded-lg overflow-hidden shadow-2xl border-4 border-sky-500"
              variants={image1Variants}
            >
              <Image
                src="https://res.cloudinary.com/doqjgif3u/image/upload/v1755127636/WhatsApp_Image_2025-08-14_at_05.16.53_nmzvu2.jpg"
                alt="Shuvo Chakma - Profile"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
            <motion.div
              className="absolute bottom-0 right-0 w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] lg:w-[300px] lg:h-[300px] rounded-lg overflow-hidden shadow-2xl border-4 border-sky-500"
              variants={image2Variants}
            >
              <Image
                src="https://res.cloudinary.com/doqjgif3u/image/upload/v1755127809/WhatsApp_Image_2025-02-17_at_19.49.36_2_kdpjnr.jpg"
                alt="Shuvo Chakma - About Me"
                fill
                style={{ objectFit: "cover" }}
                className="transition-transform duration-700 hover:scale-110"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutSection;
