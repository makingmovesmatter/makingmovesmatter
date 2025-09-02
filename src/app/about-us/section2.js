"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaShieldAlt, FaStar, FaBoxes, FaDollarSign, FaComments } from "react-icons/fa";

const cards = [
  {
    icon: <FaShieldAlt className="iconColor text-4xl" />,
    title: "Fully Insured",
    description: "With our insured moving company, we aim to provide our customers with legitimate relocation services."
  },
  {
    icon: <FaStar className="iconColor text-4xl" />,
    title: "Reputable",
    description: "We enjoy our reputation as a reliable provider of the best moving services at affordable prices."
  },
  {
    icon: <FaBoxes className="iconColor text-4xl" />,
    title: "Packing Supplies",
    description: "We provide ultimate quality packing supplies and assistance in packing the belongings of our customers."
  },
  {
    icon: <FaDollarSign className="iconColor text-4xl" />,
    title: "Free Moving Quotes",
    description: "We offer free-of-charge moving quotes that will meet the needs of our customers."
  },
  {
    icon: <FaComments className="iconColor text-4xl" />,
    title: "Grievance Redressal",
    description: "If you have grievances against our services or company, you can freely contact us."
  }
];


const Section2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="paddingTopBottom w-full py-10 bg-white" ref={ref}>
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-[var(--black-color)] capitalize py-2 text-center">
           Why Choose Us
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
