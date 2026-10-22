"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaBoxOpen,
  FaCouch,
  FaShieldAlt,
  FaTruckLoading,
  FaHome,
  FaBuilding,
  FaIdBadge,
  FaCalendarAlt,
  FaTruck,
  FaHeadset,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaBoxOpen className="iconColor text-4xl" />,
    title: "Professional Packing and Unpacking",
    description:
      "Our experienced movers carefully pack and unpack your belongings using high-quality packing materials to keep everything protected throughout the move.",
  },
  {
    icon: <FaCouch className="iconColor text-4xl" />,
    title: "Furniture Disassembly and Reassembly",
    description:
      "We safely disassemble large furniture before transport and reassemble it once everything arrives at your new home.",
  },
  {
    icon: <FaShieldAlt className="iconColor text-4xl" />,
    title: "Protective Blanket Wrapping",
    description:
      "Every piece of furniture is wrapped with protective moving blankets to help prevent scratches and damage during transportation.",
  },
  {
    icon: <FaTruckLoading className="iconColor text-4xl" />,
    title: "Secure Loading and Unloading",
    description:
      "Our trained movers carefully load and unload your belongings to ensure a safe and efficient moving experience.",
  },
  {
    icon: <FaHome className="iconColor text-4xl" />,
    title: "Apartment, Condo & Residential Moves",
    description:
      "Whether you're moving from an apartment, condo, or family home, we provide dependable residential long-distance moving services.",
  },
  {
    icon: <FaBuilding className="iconColor text-4xl" />,
    title: "Commercial & Office Relocations",
    description:
      "We relocate offices and businesses efficiently while minimizing downtime and keeping your move organized.",
  },
  {
    icon: <FaIdBadge className="iconColor text-4xl" />,
    title: "Licensed & Insured Professionals",
    description:
      "Our licensed and insured movers provide reliable service and complete peace of mind throughout your relocation.",
  },
  {
    icon: <FaCalendarAlt className="iconColor text-4xl" />,
    title: "Flexible Scheduling",
    description:
      "We work around your preferred moving dates to make your relocation as convenient as possible.",
  },
  {
    icon: <FaTruck className="iconColor text-4xl" />,
    title: "Safe Transportation",
    description:
      "Your belongings are transported safely using professional equipment and proven long-distance moving practices.",
  },
  {
    icon: <FaHeadset className="iconColor text-4xl" />,
    title: "Dedicated Customer Support",
    description:
      "Our friendly team keeps you informed and provides assistance throughout every stage of your move.",
  },
];

const Section2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="paddingTopBottom w-full py-10 bg-white" ref={ref}>
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-[var(--heading-text-color)] capitalize py-2 text-center">
          Our Long Distance Moving Services Include
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