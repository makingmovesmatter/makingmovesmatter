"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  FaBoxOpen, 
  FaBoxes, 
  FaTruckLoading, 
  FaChair, 
  FaGem, 
  FaCheckCircle, 
  FaClock 
} from "react-icons/fa";

const cards = [
  {
    icon: <FaBoxOpen className="iconColor text-4xl" />,
    title: "Full-Service Packing",
    description:
      "We carefully pack household items, furniture, and fragile belongings using top-quality materials."
  },
  {
    icon: <FaBoxes className="iconColor text-4xl" />,
    title: "Partial Packing Services",
    description:
      "Only need help with certain items? Our Mesa packing specialists can assist with specific rooms or delicate items."
  },
  {
    icon: <FaTruckLoading className="iconColor text-4xl" />,
    title: "Unpacking Services",
    description:
      "Once you arrive at your new home, our unpacking services in Mesa make settling in easy by carefully unpacking and organizing your belongings."
  },
  {
    icon: <FaChair className="iconColor text-4xl" />,
    title: "Furniture Wrapping and Protection",
    description:
      "Our furniture movers in Mesa use premium padding, shrink wrap, and moving blankets to protect your furniture from scratches and damage."
  },
  {
    icon: <FaGem className="iconColor text-4xl" />,
    title: "Specialty Item Packing",
    description:
      "From antiques to artwork and electronics, our expert Mesa packing team ensures your most valuable and fragile items are packed with care."
  },
  {
    icon: <FaCheckCircle className="iconColor text-4xl" />,
    title: "Why Choose Our Packing Services?",
    description:
      "Experienced & trained packers, high-quality materials, customizable solutions, time-saving convenience, and safe, efficient unpacking."
  }
];

const Section2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="paddingTopBottom w-full py-10 bg-white" ref={ref}>
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-[var(--black-color)] capitalize py-2 text-center">
          Our Mesa Hot Tub Relocation Services Include:
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
