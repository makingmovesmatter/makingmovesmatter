"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  FaWater, 
  FaMountain, 
  FaTree, 
  FaTheaterMasks, 
  FaFish, 
  FaShapes, 
  FaStore 
} from "react-icons/fa";

const cards = [
  {
    icon: <FaWater className="iconColor text-4xl" />,
    title: "Tempe Town Lake",
    description: "Enjoy kayaking, paddleboarding, and scenic lakeside strolls in the heart of Tempe."
  },
  {
    icon: <FaMountain className="iconColor text-4xl" />,
    title: "Papago Park & Hole in the Rock",
    description: "Iconic red sandstone formations with easy hiking trails and panoramic city views."
  },
  {
    icon: <FaTree className="iconColor text-4xl" />,
    title: "Kiwanis Park",
    description: "A popular 125-acre community park with a wave pool, batting cages, and lake."
  },
  {
    icon: <FaTheaterMasks className="iconColor text-4xl" />,
    title: "ASU Gammage Auditorium",
    description: "Historic Frank Lloyd Wright-designed venue hosting premier Broadway shows and concerts."
  },
  {
    icon: <FaFish className="iconColor text-4xl" />,
    title: "SEA LIFE Arizona Aquarium",
    description: "Interactive marine exhibits featuring sharks, stingrays, and sea turtles."
  },
  {
    icon: <FaShapes className="iconColor text-4xl" />,
    title: "LEGOLAND Discovery Center",
    description: "Interactive LEGO-themed family attraction with rides, 4D cinema, and play areas."
  },
  {
    icon: <FaStore className="iconColor text-4xl" />,
    title: "Mill Avenue District",
    description: "Historic downtown corridor bustling with boutique shops, casual dining, and nightlife."
  }
];

const Section4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="paddingTopBottom w-full py-10 bg-white" ref={ref}>
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-[var(--heading-text-color)] capitalize py-2 text-center">
          Explore Tempe, AZ: Top Attractions & Things to Do
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

export default Section4;
