"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHome, FaStore, FaBoxOpen, FaWarehouse, FaTruck } from "react-icons/fa";

const cards = [
  {
    icon: <FaHome className="iconColor text-4xl" />,
    title: "Residential Moving",
    description: "Local and long-distance moves for houses, apartments, and condos"
  },
  {
    icon: <FaStore className="iconColor text-4xl" />,
    title: "Commercial and Office Relocations",
    description: "Efficient moves for businesses of all sizes"
  },
  {
    icon: <FaBoxOpen className="iconColor text-4xl" />,
    title: "Packing and Unpacking",
    description: "Full-service packing solutions using high-quality materials"
  },
  {
    icon: <FaWarehouse className="iconColor text-4xl" />,
    title: "Secure Storage Options",
    description: "Climate-controlled storage for both short-term and long-term needs"
  },
  {
    icon: <FaTruck className="iconColor text-4xl" />,
    title: "Specialty Item Moving",
    description: "Careful handling of large, fragile, and valuable items"
  }
];


const Section2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="paddingTopBottom w-full py-10 bg-white" ref={ref}>
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-[var(--black-color)] capitalize py-2 text-center">
          Our Scottsdale Moving Services Include:
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
                <h1 className="text-xl font-semibold text-[var(--black-color)] mb-1">
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
