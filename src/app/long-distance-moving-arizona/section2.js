"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaTruck,
  FaStore,
  FaBuilding,
  FaWarehouse,
  FaChair,
  FaBoxOpen,
  FaClock,
  FaHome,
  FaShieldAlt,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaTruck className="iconColor text-4xl" />,
    title: "Professional Packing and Unpacking",
    description:
      "Our experienced movers carefully pack, protect, and unpack your belongings using high-quality materials to ensure everything arrives safely at your new destination.",
  },
  {
    icon: <FaChair className="iconColor text-4xl" />,
    title: "Furniture Disassembly and Reassembly",
    description:
      "We professionally disassemble large furniture before transport and reassemble it at your new home, making your move easier and more efficient.",
  },
  {
    icon: <FaShieldAlt className="iconColor text-4xl" />,
    title: "Blanket Wrapping and Furniture Protection",
    description:
      "Every piece of furniture is wrapped with protective moving blankets and secured properly to minimize the risk of scratches or damage during transit.",
  },
  {
    icon: <FaBoxOpen className="iconColor text-4xl" />,
    title: "Loading and Unloading Services",
    description:
      "Our trained movers handle all heavy lifting, carefully loading and unloading your belongings to ensure a smooth and stress-free moving experience.",
  },
  {
    icon: <FaHome className="iconColor text-4xl" />,
    title: "Residential Moving",
    description:
      "Whether you're moving from an apartment, condo, or large family home, we provide dependable residential long-distance moving services throughout Arizona.",
  },
  {
    icon: <FaBuilding className="iconColor text-4xl" />,
    title: "Commercial and Office Relocations",
    description:
      "We help businesses relocate efficiently with organized commercial moving services designed to minimize downtime and keep your operations running smoothly.",
  },
  {
    icon: <FaClock className="iconColor text-4xl" />,
    title: "Scheduled Delivery & Dedicated Support",
    description:
      "Enjoy scheduled delivery windows, licensed and insured movers, and dedicated customer support throughout every stage of your long-distance move.",
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