"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaTruck, FaBoxOpen, FaMapMarkedAlt, FaClipboardList, FaClock, FaShieldAlt } from "react-icons/fa";

const cards = [
  {
    icon: <FaTruck className="iconColor  text-4xl" />,
    title: "Fast & Reliable",
    description: "We ensure timely pickup and delivery with real-time updates."
  },
  {
    icon: <FaBoxOpen className="iconColor text-4xl" />,
    title: "Safe Packing",
    description: "Our team uses top-grade materials to pack your valuables securely."
  },
  {
    icon: <FaMapMarkedAlt className="iconColor text-4xl" />,
    title: "Local & Long Distance",
    description: "Whether across town or the country, we’ve got you covered."
  },
  {
    icon: <FaClipboardList className="iconColor text-4xl" />,
    title: "Transparent Quotes",
    description: "Get clear, upfront pricing without any hidden fees."
  },
  {
    icon: <FaClock className="iconColor text-4xl" />,
    title: "Flexible Scheduling",
    description: "We work around your schedule for maximum convenience."
  },
  {
    icon: <FaShieldAlt className="iconColor text-4xl" />,
    title: "Fully Insured",
    description: "Your belongings are protected every step of the way."
  }
];

const Section7 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="paddingTopBottom w-full py-10 bg-white" ref={ref}>
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-[var(--black-color)] capitalize py-2 text-center">
          Why Choose Us
        </h2>
        <p className="text-center">
           We are providing best service that help lorem text just for example
        </p>

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

export default Section7;
