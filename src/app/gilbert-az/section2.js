"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHome, FaStore, FaBoxOpen, FaWarehouse, FaTruck, FaDolly } from "react-icons/fa";

const cards = [
  {
    icon: <FaHome className="iconColor text-4xl" />,
    title: "Residential Moving",
    description: "Local and long-distance moves for houses, apartments, and condos"
  },
  {
    icon: <FaStore className="iconColor text-4xl" />,
    title: "Commercial & Office Relocations",
    description: "Efficient and organized moves for businesses of all sizes"
  },
  {
    icon: <FaBoxOpen className="iconColor text-4xl" />,
    title: "Packing & Unpacking",
    description: "Full-service packing solutions with high-quality materials"
  },
  {
    icon: <FaWarehouse className="iconColor text-4xl" />,
    title: "Secure Storage Options",
    description: "Clean, climate-controlled storage for short or long-term needs"
  },
  {
    icon: <FaTruck className="iconColor text-4xl" />,
    title: "Specialty Item Moving",
    description: "Careful handling of large, fragile, and valuable belongings"
  },
  {
    icon: <FaDolly className="iconColor text-4xl" />,
    title: "Heavy Item Moving",
    description: "From safes to hot tubs, we’ve got the muscle and technique"
  },
  {
    icon: <FaTruck className="iconColor text-4xl" />,
    title: "Local & Long-Distance Moving",
    description: "Reliable moving services across town or across state lines"
  }
];

const Section2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="paddingTopBottom w-full py-10 bg-white" ref={ref}>
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-[var(--heading-text-color)] capitalize py-2 text-center">
           Gilbert Moving Services Include:
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
