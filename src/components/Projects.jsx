"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import ProjectImageCarousel from "./ProjectImageCarousel";

// Projects data
const projects = [
  {
    id: 1,
    title: "Social Media App",
    description:
      "A full-stack social media application named ShuvoMedia. It features user authentication, profile management, friend functionality, real-time chat and video call functionality. It also includes a dynamic feed with posts, comments, and likes, built with React, Node.js, MongoDB, tailwind css and daisyUI.",
    images: [
      "https://res.cloudinary.com/doqjgif3u/image/upload/v1755122841/Screenshot_2025-08-14_at_4.03.58_AM-front_hqqiuv.png",
      "https://res.cloudinary.com/doqjgif3u/image/upload/v1755123052/Screenshot_2025-08-14_at_4.09.38_AM-front_lmbcmu.png",
      "https://res.cloudinary.com/doqjgif3u/image/upload/v1755123194/Screenshot_2025-08-14_at_4.12.16_AM-portrait_vaeinl.png",
      "https://res.cloudinary.com/doqjgif3u/image/upload/v1755123464/Screenshot_2025-08-14_at_4.16.38_AM-left_zxshsm.png",
    ],
    githubUrl: "https://github.com/shuvoBoss44/ShuvoChat",
    liveUrl: "https://shuvomedia.netlify.app",
  },
  {
    id: 2,
    title: "Students of ECE-23 Series, RUET",
    description:
      "It is a big project of my department Electrical and Computer Engineering,RUET students of 23 series. Here all information of ECE-23 is given. It includes student profiles, their notes and resources and many more. It has user authentication for note uploading and profile management. I built it using MERN stack with Tailwind css.",
    images: [
      "https://res.cloudinary.com/doqjgif3u/image/upload/v1755123733/Screenshot_2025-08-14_at_4.21.23_AM-front_df9awy.png",
      "https://res.cloudinary.com/doqjgif3u/image/upload/v1755125068/Screenshot_2025-08-14_at_4.43.04_AM-portrait_opjwqt.png",
      "https://res.cloudinary.com/doqjgif3u/image/upload/v1755124003/Screenshot_2025-08-14_at_4.25.49_AM-portrait_eazha4.png",
      "https://res.cloudinary.com/doqjgif3u/image/upload/v1755124151/Screenshot_2025-08-14_at_4.28.29_AM-portrait_whwkyd.png",
      "https://res.cloudinary.com/doqjgif3u/image/upload/v1755124271/Screenshot_2025-08-14_at_4.30.34_AM-portrait_rjybjo.png",
      "https://res.cloudinary.com/doqjgif3u/image/upload/v1755124467/Screenshot_2025-08-14_at_4.33.38_AM-left_srvkbl.png",
      "https://res.cloudinary.com/doqjgif3u/image/upload/v1755124632/Screenshot_2025-08-14_at_4.36.29_AM-right_qryi1g.png",
    ],
    githubUrl: "https://github.com/shuvoBoss44/ECE-23",
    liveUrl: "https://ece-23.vercel.app",
  },
  {
    id: 3,
    title: "Bazar Hisab",
    description:
      "A comprehensive calculation system of daily bazar expenses, users fund management and expenses transaction history. It features user authentication, profile management, and a dynamic dashboard for expense tracking. I built it using MERN stack with Tailwind css. As it is a personal project and for limited users, I cannot provide a live demo link.",
    images: [
      "https://res.cloudinary.com/doqjgif3u/image/upload/v1755125223/Screenshot_2025-08-14_at_4.46.23_AM-portrait_t3wcrv.png",
      "https://res.cloudinary.com/doqjgif3u/image/upload/v1755125341/Screenshot_2025-08-14_at_4.48.22_AM-portrait_huuben.png",
      "https://res.cloudinary.com/doqjgif3u/image/upload/v1755125542/Screenshot_2025-08-14_at_4.51.30_AM-front_o0labl.png",
      "https://res.cloudinary.com/doqjgif3u/image/upload/v1755125670/Screenshot_2025-08-14_at_4.53.42_AM-left_zsxbey.png",
    ],
    githubUrl: "https://github.com/shuvoBoss44/Bazar-Hisab",
    liveUrl: "",
  },
];

const ProjectsSection = () => {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [modalState, setModalState] = useState({ isOpen: false, url: "" });

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

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

  const projectContainerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 50, damping: 10, duration: 1 },
    },
  };

  const projectImageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.3 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
    hover: { scale: 1.05, boxShadow: "0px 8px 24px rgba(13, 202, 240, 0.4)" },
    tap: { scale: 0.95 },
  };

  const handleLiveLinkClick = (e, url) => {
    e.preventDefault();
    setModalState({ isOpen: true, url });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, url: "" });
  };

  return (
    <section
      id="projects"
      className="min-h-screen w-full py-20 bg-gray-950 text-white"
    >
      <div className="container mx-auto px-6 lg:px-12 z-10 relative">
        {/* Animated Section Title */}
        <div ref={ref} className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-500 to-cyan-500 bg-[length:200%_200%] animate-gradient inline-block"
            variants={titleVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            My Key Projects
          </motion.h2>
          <motion.div
            className="h-1 w-24 mx-auto mt-4 rounded-full bg-gradient-to-r from-sky-400 to-cyan-500"
            initial={{ width: "0%" }}
            animate={isInView ? { width: "6rem" } : { width: "0%" }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>

        {/* Projects List */}
        {displayedProjects.map((project, index) => {
          const isEven = project.id % 2 === 0;

          return (
            <motion.div
              key={project.id}
              className={`flex flex-col-reverse items-center gap-8 mb-20 md:flex-row ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={projectContainerVariants}
            >
              {/* Text Content */}
              <div className="w-full md:w-1/2 text-center md:text-left p-4">
                <h3 className="text-3xl font-bold mb-4 text-sky-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed text-justify">
                  {project.description}
                </p>
                <div className="flex gap-6 justify-center md:justify-start">
                  {project.liveUrl ? (
                    // Corrected the live link structure to be clickable
                    <a
                      href="#"
                      onClick={e => handleLiveLinkClick(e, project.liveUrl)}
                      className="flex items-center text-blue-300 hover:text-white transition-transform hover:scale-110"
                    >
                      <FiExternalLink className="mr-2 text-xl" /> Live Demo
                    </a>
                  ) : (
                    <div className="text-gray-500">Live Demo Unavailable</div>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-transform hover:scale-110"
                  >
                    <FaGithub className="mr-2 text-xl" /> GitHub
                  </a>
                </div>
              </div>

              {/* Image Carousel */}
              <motion.div
                className="relative w-full md:w-1/2 h-64 sm:h-80 md:h-96 rounded-xl shadow-2xl group"
                variants={projectImageVariants}
              >
                <ProjectImageCarousel
                  images={project.images}
                  title={project.title}
                />
              </motion.div>
            </motion.div>
          );
        })}

        {/* See All Button */}
        {!showAllProjects && projects.length > 3 && (
          <motion.div
            className="text-center mt-12"
            variants={buttonVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.button
              onClick={() => setShowAllProjects(true)}
              className="px-8 py-3 bg-gradient-to-r from-sky-500 to-cyan-600 text-white font-semibold rounded-full shadow-lg transition-all duration-300"
              whileHover="hover"
              whileTap="tap"
            >
              See All Projects
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Custom Modal */}
      {modalState.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950 bg-opacity-75 backdrop-blur-sm">
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl max-w-sm mx-auto text-center border border-gray-700">
            <h3 className="text-xl font-bold mb-4 text-white">
              Live Demo Notice
            </h3>
            <p className="text-gray-300 mb-6">
              This project is hosted on a free service, so initial loading times
              may be slightly longer.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={closeModal}
                className="px-6 py-2 bg-gray-700 text-gray-300 rounded-md hover:bg-gray-600 transition-colors"
              >
                Cancel
              </button>
              <a
                href={modalState.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeModal}
                className="px-6 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-500 transition-colors"
              >
                Continue
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
