"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { IoLocation } from "react-icons/io5";

const cards = [
  {
    icon: <IoLocation className="iconColor text-4xl" />,
    title: "Masa AZ",
    description: "We ensure timely pickup and delivery with real-time updates."
  },
  {
    icon: <IoLocation className="iconColor text-4xl" />,
    title: "Chandler, AZ",
    description: "Our team uses top-grade materials to pack your valuables securely."
  },
  {
    icon: <IoLocation className="iconColor text-4xl" />,
    title: "Scottsdale, AZ",
    description: "Whether across town or the country, we’ve got you covered."
  },
  {
    icon: <IoLocation className="iconColor text-4xl" />,
    title: "Tempe, AZ",
    description: "Get clear, upfront pricing without any hidden fees."
  },
  {
    icon: <IoLocation className="iconColor text-4xl" />,
    title: "Gilbert, AZ",
    description: "We work around your schedule for maximum convenience."
  },
  {
    icon: <IoLocation className="iconColor text-4xl" />,
    title: "Phoenix, AZ",
    description: "Your belongings are protected every step of the way."
  }
];

const Section3 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="paddingTopBottom w-full py-10 bg-white" ref={ref}>
      <div className="container mx-auto px-5">
        <h2 className="text-5xl font-bold text-[var(--heading-text-color)] capitalize py-2 text-center">
         Areas We Serve
        </h2>
        <p className="text-center">
           We provide professional moving services across multiple regions and are always expanding into new areas. Whether you’re relocating across town or moving to a new state, our team is ready to help. Explore our current service areas below to see if we’re available near you.
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

export default Section3;