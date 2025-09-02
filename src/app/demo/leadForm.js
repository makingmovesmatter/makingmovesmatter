"use client";
import React from "react";
import { motion } from "framer-motion";
import Quote from "./quote";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3, // delay between each child animation
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const LeadForm = () => {
  return (
    <motion.div
      className="lead-form py-11"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container lead-form-container lg:flex justify-between items-center">
        {/* Left Text Content */}
        <motion.div className="text-content" variants={containerVariants}>
          <motion.div className="lead-text" variants={containerVariants}>
            <motion.div className="section-title mb-3" variants={itemVariants}>
              <h1>
                Richout <span>By</span>
                <br />
                <span>Submitting </span> Quote
              </h1>
            </motion.div>
            <motion.div className="section-subtitle" variants={itemVariants}>
              <p>
                Easily connect with us by submitting your quote request. Our
                team will review your details and provide a quick, accurate, and
                personalized moving solution.
              </p>
            </motion.div>
          </motion.div>

          {/* Steps */}
          <motion.div className="lead-step py-8" variants={containerVariants}>
            <div className="lead-step-container">
              {[
                {
                  number: "01",
                  title: "Submit Your Quote",
                  desc: "Fill out our simple online form with your moving details. Submitting a quote is quick, easy, and the first step toward a smooth, stress-free move.",
                },
                {
                  number: "02",
                  title: "Get a Personalized Estimate",
                  desc: "Our experts carefully review your request and calculate an accurate estimate based on your needs, ensuring you receive the best possible moving solution.",
                },
                {
                  number: "03",
                  title: "Confirm Your Booking",
                  desc: "Once you approve the estimate, confirm your booking. Our team schedules your move, making sure everything is ready and aligned with your preferred date.",
                },

              ].map((step, i) => (
                <motion.div
                  key={i}
                  className="leade-step-card"
                  variants={itemVariants}
                >
                  <div className="step-number">
                    <h1>{step.number}</h1>
                  </div>
                  <div className="step-tex">
                    <h1>{step.title}</h1>
                    <p>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Right Contact Form */}
        <motion.div className="leade-contact-form" variants={itemVariants}>
          <Quote />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LeadForm;