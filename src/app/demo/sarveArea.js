"use client";
import React from "react";
import { PiMapPinAreaLight } from "react-icons/pi";
import { motion } from "framer-motion";

const SarveArea = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // delay between items
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="sarve-area py-16">
      <div className="container sarve-container">
        {/* Title + Button */}
        <motion.div
          className="sarve-text step-text flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-title" variants={itemVariants}>
            <h1>
              <span>Moving</span> Made Easy
              <br /> Across These <span>Areas</span>
            </h1>
          </motion.div>

          <motion.a href="#" className="btn btn-primary" variants={itemVariants}>
            Contact Us
          </motion.a>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="sarve-content py-11 grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {[
            { title: "Masa Az", text: "We ensure timely pickup and delivery with real-time updates." },
            { title: "Chandler AZ", text: "Our team uses top-grade materials to pack your valuables securely." },
            { title: "Scottsdale AZ", text: "Whether across town or the country, we’ve got you covered." },
            { title: "Tempe AZ", text: "Get clear, upfront pricing without any hidden fees." },
            { title: "Gilbert AZ", text: "We work around your schedule for maximum convenience." },
            { title: "Phoenix AZ", text: "Your belongings are protected every step of the way." },
          ].map((area, i) => (
            <motion.div key={i} className="sarve-card bg-white p-6 rounded-xl shadow-lg" variants={itemVariants}>
              <div className="sarve-icon mb-4">
                <PiMapPinAreaLight className="text-3xl text-primary" />
              </div>
              <div className="sarve-text mb-4">
                <h1 className="font-semibold text-lg">{area.title}</h1>
                <p className="text-gray-600">{area.text}</p>
              </div>
              <div className="sarve-button">
                <a href="/" className="map-btn btn btn-outline">
                  View Map
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default SarveArea;