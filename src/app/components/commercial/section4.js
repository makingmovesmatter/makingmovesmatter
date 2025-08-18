"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaShieldAlt, FaTasks, FaBusinessTime, FaClipboardList, FaDollarSign } from "react-icons/fa";

const cards = [
  {
    icon: <FaShieldAlt className="text-red-500 text-4xl" />,
    title: "Licensed & Insured",
    description: "We are a fully licensed and insured commercial moving company in Mesa, AZ, giving you peace of mind."
  },
  {
    icon: <FaTasks className="text-red-500 text-4xl" />,
    title: "Efficient & Organized",
    description: "Our team works quickly and methodically to keep your move on schedule and within budget."
  },
  {
    icon: <FaBusinessTime className="text-red-500 text-4xl" />,
    title: "Minimized Business Downtime",
    description: "We focus on efficiency to ensure a smooth transition, so your business operations are not disrupted."
  },
  {
    icon: <FaClipboardList className="text-red-500 text-4xl" />,
    title: "Custom Moving Plans",
    description: "Every business is unique, and we provide tailored moving solutions to meet your specific needs."
  },
  {
    icon: <FaDollarSign className="text-red-500 text-4xl" />,
    title: "Affordable & Transparent Pricing",
    description: "No hidden fees—just honest, upfront quotes from trusted Mesa commercial movers."
  }
];

const Section4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="paddingTopBottom w-full py-10 bg-white" ref={ref}>
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-[var(--black-color)] capitalize py-2 text-center">
          Why Choose Making Moves Matter as Your Mesa Commercial Movers?
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