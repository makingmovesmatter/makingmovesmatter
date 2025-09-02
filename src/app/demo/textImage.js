"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const TextImage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.section
      ref={ref}
      className="image-text py-14"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-stretch gap-10 px-5">
        

        <motion.div
          className="right-side w-full lg:w-1/2 flex flex-col justify-center"
          variants={itemVariants}
        >
          <motion.div className="section-title mb-6" variants={itemVariants}>
            <h1 className="text-3xl md:text-4xl font-bold leading-snug">
              <span className="text-primary">How Making</span> Moves <br /> Matter{" "}
              <span className="text-primary">Works</span>
            </h1>
          </motion.div>

          <motion.div className="section-subtitle text-gray-700 text-base md:text-lg leading-relaxed" variants={itemVariants}>
            <p>
              At Making Moves Matter, we simplify your moving experience with a
              clear, step-by-step process designed for convenience and peace of
              mind. First, you reach out to us for a free, customized quote tailored
              to your unique moving needs. Once you approve, our team schedules your
              move at a time that works best for you.
              <br /><br />
              Throughout the process, we maintain open communication, keeping you
              updated and informed. After safely delivering your possessions, we
              assist with unloading and placement to ensure your new space feels
              like home right away.
            </p>
          </motion.div>

          <motion.div className="section-button mt-8" variants={itemVariants}>
            <a
              href="/"
              className="btn btn-primary px-6 py-3 text-lg rounded-xl shadow-md"
            >
              Send A Quote
            </a>
          </motion.div>
        </motion.div>


       <motion.div
          className="left-side w-full lg:w-1/2 flex"
          variants={itemVariants}
        >
          <div className="relative w-full h-[400px] lg:h-full flex-1 rounded-lg shadow-lg">
            <Image
              src="/images/image copy 3.png"
              alt="Side Image"
              className="side-image"
              fill
              style={{ objectFit: "cover", height: "100%" }}
              priority
            />
          </div>
       </motion.div>


      </div>
    </motion.section>
  );
};

export default TextImage;