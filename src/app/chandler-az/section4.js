"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  FaTheaterMasks, 
  FaLandmark, 
  FaPalette, 
  FaTrain, 
  FaSnowflake, 
  FaPaintBrush, 
  FaCity, 
  FaShoppingBag 
} from "react-icons/fa";

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
  },
  {
    icon: <FaTrain className="iconColor text-4xl" />,
    title: "Arizona Railway Museum",
    description: "Learn about the history of railroads in Arizona with interactive displays."
  },
  {
    icon: <FaSnowflake className="iconColor text-4xl" />,
    title: "Ice Den Chandler",
    description: "Enjoy ice skating and family-friendly fun year-round."
  },
  {
    icon: <FaPaintBrush className="iconColor text-4xl" />,
    title: "Crayola Experience",
    description: "A colorful, hands-on destination for kids and families."
  },
  {
    icon: <FaCity className="iconColor text-4xl" />,
    title: "Downtown Chandler",
    description: "A vibrant area filled with restaurants, shops, and live music events."
  },
  {
    icon: <FaShoppingBag className="iconColor text-4xl" />,
    title: "Chandler Fashion Center",
    description: "One of the premier shopping destinations in Arizona."
  }
];


const Section4 = () => {
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

export default Section4;
