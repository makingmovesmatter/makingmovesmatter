"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  FaHiking, 
  FaWater, 
  FaTree, 
  FaChild, 
  FaSwimmer, 
  FaStore, 
  FaMountain 
} from "react-icons/fa";

const cards = [
  {
    icon: <FaHiking className="iconColor text-4xl" />,
    title: "Usery Mountain Regional Park",
    description: "Enjoy hiking, camping, and stunning desert views."
  },
  {
    icon: <FaWater className="iconColor text-4xl" />,
    title: "Salt River Tubing",
    description: "Float down the scenic Salt River for a fun and refreshing experience."
  },
  {
    icon: <FaTree className="iconColor text-4xl" />,
    title: "Riverview Park",
    description: "A family-friendly park with playgrounds, fishing ponds, and walking trails."
  },
  {
    icon: <FaChild className="iconColor text-4xl" />,
    title: "i.d.e.a. Museum",
    description: "Interactive exhibits for children to explore art, science, and technology."
  },
  {
    icon: <FaSwimmer className="iconColor text-4xl" />,
    title: "Golfland Sunsplash",
    description: "A popular water park and family entertainment center."
  },
  {
    icon: <FaStore className="iconColor text-4xl" />,
    title: "Downtown Mesa",
    description: "Enjoy charming shops, local eateries, and vibrant street art."
  },
  {
    icon: <FaMountain className="iconColor text-4xl" />,
    title: "Superstition Mountains",
    description: "Explore the legendary Lost Dutchman’s Gold Mine and scenic hiking trails."
  }
];


const Section4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="paddingTopBottom w-full py-10 bg-white" ref={ref}>
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-[var(--heading-text-color)] capitalize py-2 text-center">
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
