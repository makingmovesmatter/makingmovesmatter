"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaTruck, FaStore, FaBuilding, FaWarehouse, FaChair, FaBoxOpen, FaClock } from "react-icons/fa";

const cards = [
    {
    icon: <FaTruck className="iconColor text-4xl" />,
    title: "Office Movers in Mesa",
    description: "Our skilled Mesa office movers handle everything from cubicles and desks to computers and conference tables, ensuring a smooth office transition."
  },
  {
    icon: <FaStore className="iconColor text-4xl" />,
    title: "Retail & Storefront Moving",
    description: "Relocating a retail space? We move store fixtures, inventory, and displays with precision to get your business running quickly."
  },
  {
    icon: <FaBuilding className="iconColor text-4xl" />,
    title: "Corporate Relocation Services",
    description: "Full-service corporate office moves, including packing, moving, and office setup for smooth expansion or relocation."
  },
  {
    icon: <FaWarehouse className="iconColor text-4xl" />,
    title: "Warehouse & Industrial Moving",
    description: "We have the equipment and expertise to relocate warehouses and industrial facilities with minimal disruption."
  },
  {
    icon: <FaChair className="iconColor text-4xl" />,
    title: "Furniture & Equipment Moving",
    description: "We expertly transport desks, workstations, filing cabinets, and office electronics to your new location."
  },
  {
    icon: <FaBoxOpen className="iconColor text-4xl" />,
    title: "Packing & Unpacking Services for Businesses",
    description: "Protect valuable business assets with our professional packing and unpacking services, ensuring safe delivery."
  },
  {
    icon: <FaClock className="iconColor text-4xl" />,
    title: "After-Hours & Weekend Moves",
    description: "To minimize downtime, we offer flexible moving times, including after-hours and weekend relocations."
  }
];

const Section2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="paddingTopBottom w-full py-10 bg-white" ref={ref}>
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-[var(--heading-text-color)] capitalize py-2 text-center">
          Our Mesa Commercial Moving Services Include:
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
