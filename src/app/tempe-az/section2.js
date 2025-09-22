"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  FaHome, 
  FaStore, 
  FaBoxOpen, 
  FaWarehouse, 
  FaTruck 
} from "react-icons/fa";

const cards = [
  {
    icon: <FaHome className="iconColor text-4xl" />,
    title: "Residential Moving",
    description: "Reliable local and long-distance moves for houses, condos, and apartments"
  },
  {
    icon: <FaStore className="iconColor text-4xl" />,
    title: "Commercial and Office Relocations",
    description: "Expert moving solutions for offices, retail spaces, and more"
  },
  {
    icon: <FaBoxOpen className="iconColor text-4xl" />,
    title: "Packing and Unpacking",
    description: "Efficient packing using high-quality materials to protect valuables"
  },
  {
    icon: <FaWarehouse className="iconColor text-4xl" />,
    title: "Secure Storage Options",
    description: "Climate-controlled units available for both short and long-term storage needs"
  },
  {
    icon: <FaTruck className="iconColor text-4xl" />,
    title: "Specialty Item Moving",
    description: "Expert handling of fragile, large, and valuable items"
  }
];


const Section2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="paddingTopBottom w-full py-10 bg-white" ref={ref}>
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-[var(--heading-text-color)] capitalize py-2 text-center">
           Our Tempe Moving Services Include:
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
