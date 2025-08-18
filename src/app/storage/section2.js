"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  FaHome, 
  FaBuilding, 
  FaStore, 
  FaChair, 
  FaBoxOpen, 
  FaClock 
} from "react-icons/fa";

const cards = [
  {
    icon: <FaHome className="text-red-500 text-4xl" />,
    title: "Residential Movers in Mesa",
    description:
      "Moving into a new home? Our residential movers in Mesa ensure your household items are transported safely and efficiently, whether you’re moving across town or to a nearby neighborhood."
  },
  {
    icon: <FaBuilding className="text-red-500 text-4xl" />,
    title: "Apartment Movers in Mesa",
    description:
      "Our skilled apartment movers in Mesa handle stairs, elevators, and tight spaces with ease, making your move quick and hassle-free."
  },
  {
    icon: <FaStore className="text-red-500 text-4xl" />,
    title: "Office and Commercial Moving",
    description:
      "Need to relocate your business? Our Mesa office movers provide organized and efficient local moving services to minimize downtime and keep your business running smoothly."
  },
  {
    icon: <FaChair className="text-red-500 text-4xl" />,
    title: "Furniture Movers in Mesa, AZ",
    description:
      "Heavy or delicate furniture? No problem! Our furniture movers in Mesa, AZ carefully wrap, transport, and reassemble your items with precision and care."
  },
  {
    icon: <FaBoxOpen className="text-red-500 text-4xl" />,
    title: "Packing and Unpacking Services",
    description:
      "Save time with our packing and unpacking services in Mesa. We use high-quality packing materials to protect your belongings during the move."
  },
  {
    icon: <FaClock className="text-red-500 text-4xl" />,
    title: "Same-Day and Last-Minute Moving",
    description:
      "Need to move quickly? Our same-day movers in Mesa provide fast, reliable service to accommodate urgent relocation needs."
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
