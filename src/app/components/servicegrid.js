"use client";

import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ServiceGrid = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full bg-white py-14 mt-16 mb-16" ref={ref}>
      <div className="container mx-auto px-5 flex flex-col lg:flex-row items-stretch gap-10">
        
        
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-bold text-[var(--heading-text-color)] mb-4">
           How Making Moves Matter Works
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            At Making Moves Matter, we simplify your moving experience with a clear, step-by-step process designed for convenience and peace of mind. First, you reach out to us for a free, customized quote tailored to your unique moving needs. Once you approve, our team schedules your move at a time that works best for you.
            <br /> <br />

            Throughout the entire process, we maintain open communication, keeping you updated and informed. After safely delivering your possessions, we assist with unloading and placement to ensure your new space feels like home right away. <br /> <br />

            Our commitment to transparency, reliability, and personalized service means you can trust Making Moves Matter to make your move smooth, efficient, and stress-free from start to finish. <br /> <br />
          </p>
        </motion.div>


        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
        >
          <div className="relative w-full h-full min-h-[400px] rounded-lg overflow-hidden shadow-md">
              <video
              className="absolute inset-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src="/videos/home-video.mp4"
              />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceGrid;
