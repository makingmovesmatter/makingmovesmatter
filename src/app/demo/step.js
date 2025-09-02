"use client";
import React from "react";
import { motion } from "framer-motion";

const Step = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // delay between each step
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="step py-11">
      <div className="container step-container">
        {/* Section Title & Button */}
        <motion.div
          className="step-text flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div className="section-title" variants={cardVariants}>
            <h1>
              <span>Our 4-Step </span>Process
              <br />Behind <span> Success</span>
            </h1>
          </motion.div>

          <motion.a
            href="/"
            className="btn btn-primary"
            variants={cardVariants}
          >
            Send A Quote
          </motion.a>
        </motion.div>

        {/* Step Cards */}
        <motion.div
          className="four-step-container py-11 flex flex-col gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Step 1 */}
          <motion.div className="step-card flex gap-5" variants={cardVariants}>
            <div className="number">01.</div>
            <div className="text">
              <h1>On-Site Strategy Session or Virtual Assessment</h1>
              <p>
                We'll evaluate your energy profile, site specifics, and tailor a system that delivers peak savings and performance.
              </p>
            </div>
          </motion.div>

          {/* Step 2 */}
          <motion.div className="step-card flex gap-5" variants={cardVariants}>
            <div className="number">02.</div>
            <div className="text">
              <h1>Custom Solar & Energy Design</h1>
              <p>
                System plans perfected for aesthetics, ROI, and power yield—supported by clear pricing and optional grant guidance.
              </p>
            </div>
          </motion.div>

          {/* Step 3 */}
          <motion.div className="step-card flex gap-5" variants={cardVariants}>
            <div className="number">03.</div>
            <div className="text">
              <h1>Certified In-House Installation</h1>
              <p>
                Zero subcontractors. Every installation is fastidiously executed by our licensed team—on time, on budget, and built to meet the strictest standards.
              </p>
            </div>
          </motion.div>

          {/* Step 4 */}
          <motion.div className="step-card flex gap-5" variants={cardVariants}>
            <div className="number">04.</div>
            <div className="text">
              <h1>Real-Time Monitoring & Lifetime Support</h1>
              <p>
                Track performance, detect issues, and optimise energy use with our smart tools—and enjoy support that keeps your system delivering for decades.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Step;
