// src/components/ContactSection.jsx
"use client";
import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaGithub, FaWhatsapp } from "react-icons/fa"; // Updated imports

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "0px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const formVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // State for submission status

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(`Error: ${data.message || "Something went wrong."}`);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("Error: Failed to send message. Please try again later.");
    }
  };

  return (
    <motion.section
      id="contact"
      className="relative w-full py-20 bg-slate-950 text-white overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          ref={ref}
          className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="mb-12 text-center lg:text-left">
              <motion.h2
                className="text-4xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-purple-500 to-cyan-500 inline-block"
                variants={titleVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
              >
                Contact Me
              </motion.h2>

              <motion.div
                className="h-1 w-24 mx-auto lg:mx-0 mt-4 rounded-full bg-gradient-to-r from-sky-400 to-cyan-500"
                initial={{ width: "0%" }}
                animate={isInView ? { width: "6rem" } : { width: "0%" }}
                transition={{ duration: 1, delay: 0.5 }}
              />
            </div>

            <motion.p
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl mx-auto lg:mx-0 font-mono"
              variants={itemVariants}
            >
              Have a project in mind or just want to say hello? Feel free to
              reach out. I'm always open to new opportunities and
              collaborations.
            </motion.p>

            {/* Updated Social Media Icons with responsive sizes */}
            <motion.div
              className="flex justify-center lg:justify-start gap-6 mt-12"
              variants={containerVariants}
            >
              <motion.a
                href="https://github.com/shuvoBoss44"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover={{ scale: 1.2, color: "#22d3ee" }}
                className="text-gray-400 transition-colors duration-300 text-3xl md:text-4xl"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                href="https://wa.me/+8801625490792"
                target="_blank"
                rel="noopener noreferrer"
                variants={iconVariants}
                whileHover={{ scale: 1.2, color: "#25d366" }}
                className="text-gray-400 transition-colors duration-300 text-3xl md:text-4xl"
              >
                <FaWhatsapp />
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            // Adjusted padding for better mobile fit
            className="lg:w-1/2 w-full p-6 sm:p-8 rounded-xl bg-slate-900 shadow-2xl"
            variants={formVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label htmlFor="name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="email" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                />
              </motion.div>

              <motion.div variants={itemVariants}>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-slate-800 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  required
                ></textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-sky-400 via-purple-500 to-cyan-500  text-white font-bold text-lg hover:bg-cyan-500 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                variants={itemVariants}
              >
                Send Message
              </motion.button>
              {status && (
                <p className="mt-4 text-center text-sm font-mono">{status}</p>
              )}
            </form>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ContactSection;
