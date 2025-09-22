"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaTheaterMasks, FaLandmark, FaPalette } from "react-icons/fa";

const cards = [
  {
    icon: <FaTheaterMasks className="iconColor text-4xl" />,
    title: "Chandler Center for the Arts",
    description: "A venue for theater performances, concerts, and art exhibitions."
  },
  {
    icon: <FaLandmark className="iconColor text-4xl" />,
    title: "Chandler Museum",
    description: "Discover the city’s rich history through engaging exhibits."
  },
  {
    icon: <FaPalette className="iconColor text-4xl" />,
    title: "Vision Gallery",
    description: "Explore works from local and regional artists."
  }
];

const Section2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="paddingTopBottom w-full py-10 bg-white" ref={ref}>
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-[var(--heading-text-color)] capitalize py-2 text-center">
           Arts, Culture & History:
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="flex items-start gap-4 bg-white rounded-md shadow-md p-6"
            >
              <div>{card.icon}</div>
              <div>
                <h1 className="text-xl font-semibold text-[var(--heading-text-color)] mb-1">
                  {card.title}
                </h1>
                <p className="text-gray-600 text-sm">{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section2;
