"use client";
import React from "react";
import { FaTruck, FaBox, FaClock, FaShieldAlt, FaHandsHelping, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  // Parent container variants for staggered animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // delay between children
      },
    },
  };

  // Variants for each child
  const childVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      className="why-choose-us py-11"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container why-choose-us-container">
        {/* Title & Subtitle */}
        <motion.div className="why-choose-us-text py-8 text-center md:text-left">
          <motion.div className="section-title mb-4" variants={childVariants}>
            <h1>
              <span>Why We’re Unrivalled ‍</span>
              <br /> in Masa AZ
            </h1>
          </motion.div>

          <motion.div className="section-subtitle" variants={childVariants}>
            <p>
              Save money, reduce your carbon footprint, and enjoy cutting-edge solar technology designed for maximum efficiency.
            </p>
          </motion.div>
        </motion.div>

        {/* Cards */}
        <motion.div className="why-choose-us-content grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          <motion.div className="why-choose-us-card a p-6 rounded-xl shadow-lg items-start" variants={childVariants}>
            <div className="icon text-3xl text-primary"><FaTruck /></div>
            <div className="text">
              <h1 className="font-semibold text-lg">Melbourne-Based Expertise</h1>
              <p>Over 15 years of local experience creating energy independence.</p>
            </div>
          </motion.div>

          <motion.div className="why-choose-us-card b p-6 rounded-xl shadow-lg gap-4 items-start" variants={childVariants}>
            <div className="icon text-3xl text-primary"><FaBox /></div>
            <div className="text">
              <h1>Secure Packaging</h1>
              <p>Our team uses top-grade materials to pack your valuables securely.</p>
            </div>
          </motion.div>

          <motion.div className="why-choose-us-card a p-6 rounded-xl shadow-lg gap-4 items-start" variants={childVariants}>
            <div className="icon text-3xl text-primary"><FaClock /></div>
            <div className="text">
              <h1>On-Time Delivery</h1>
              <p>We guarantee timely pickup and delivery with real-time updates.</p>
            </div>
          </motion.div>

          <motion.div className="why-choose-us-card b p-6 rounded-xl shadow-lg  gap-4 items-start" variants={childVariants}>
            <div className="icon text-3xl text-primary"><FaShieldAlt /></div>
            <div className="text">
              <h1>Full Insurance</h1>
              <p>Your belongings are fully protected throughout the moving process.</p>
            </div>
          </motion.div>

          <motion.div className="why-choose-us-card a p-6 rounded-xl shadow-lg  gap-4 items-start" variants={childVariants}>
            <div className="icon text-3xl text-primary"><FaHandsHelping /></div>
            <div className="text">
              <h1>Professional Assistance</h1>
              <p>Our trained team provides support every step of the way.</p>
            </div>
          </motion.div>

          <motion.div className="why-choose-us-card b p-6 rounded-xl shadow-lg gap-4 items-start" variants={childVariants}>
            <div className="icon text-3xl text-primary"><FaStar /></div>
            <div className="text">
              <h1>Trusted Services</h1>
              <p>Our clients consistently rate us 5 stars for excellence and reliability.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default WhyChooseUs;
