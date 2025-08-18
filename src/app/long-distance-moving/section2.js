"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaTruck, FaStore, FaBuilding, FaWarehouse, FaChair, FaBoxOpen, FaClock, FaHome, FaShieldAlt } from "react-icons/fa";

const cards = [
  {
    icon: <FaBoxOpen className="text-red-500 text-4xl" />,
    title: "Full-Service Packing and Moving",
    description:
      "Our packing and moving services in Mesa ensure your items are securely packed for transport. We use high-quality packing materials to protect your belongings throughout the journey."
  },
  {
    icon: <FaHome className="text-red-500 text-4xl" />,
    title: "Residential Long-Distance Movers in Mesa",
    description:
      "Moving your home to another city or state? Our residential movers handle every aspect of your move with care and efficiency."
  },
  {
    icon: <FaBuilding className="text-red-500 text-4xl" />,
    title: "Apartment and Condo Moving",
    description:
      "Our experienced apartment movers in Mesa specialize in long-distance moves for multi-unit buildings, navigating stairs and elevators with ease."
  },
  {
    icon: <FaStore className="text-red-500 text-4xl" />,
    title: "Office and Commercial Long-Distance Moving",
    description:
      "Relocating a business? Our Mesa office movers offer organized, efficient moving solutions to ensure a seamless transition with minimal disruption."
  },
  {
    icon: <FaChair className="text-red-500 text-4xl" />,
    title: "Furniture Movers in Mesa, AZ",
    description:
      "We carefully disassemble, wrap, and transport large or heavy furniture to your new location."
  },
  {
    icon: <FaWarehouse className="text-red-500 text-4xl" />,
    title: "Storage Solutions for Long-Distance Moves",
    description:
      "If your new home isn’t ready yet, we offer secure storage solutions in Mesa to keep your belongings safe until you’re ready for delivery."
  },
  {
    icon: <FaShieldAlt className="text-red-500 text-4xl" />,
    title: "How to Avoid Long-Distance Moving Scams",
    description:
      "Verify licensing, get written estimates, watch for red flags, and research company reputation to protect yourself from fraudulent movers."
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
