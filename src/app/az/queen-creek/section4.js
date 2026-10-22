"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaMountain,
  FaSeedling,
  FaBiking,
  FaLandmark,
  FaPalette,
  FaTractor,
  FaHome,
  FaPaw,
  FaChild,
  FaHotjar,
  FaCity,
} from "react-icons/fa";

const cards = [
  // Explore the Outdoors
  {
    icon: <FaMountain className="text-green-600 text-4xl" />,
    title: "San Tan Mountain Regional Park",
    description:
      "Enjoy scenic desert trails, mountain views, and wildlife in Queen Creek’s favorite outdoor escape.",
  },
  {
    icon: <FaSeedling className="text-green-600 text-4xl" />,
    title: "Queen Creek Olive Mill",
    description:
      "Tour Arizona’s only working olive farm and mill, and enjoy local dining in a beautiful setting.",
  },
  {
    icon: <FaBiking className="text-green-600 text-4xl" />,
    title: "Mansel Carter Oasis Park",
    description:
      "A family-friendly park featuring splash pads, trails, sports fields, and scenic picnic areas.",
  },

  // Local Culture & History
  {
    icon: <FaLandmark className="text-blue-600 text-4xl" />,
    title: "Schnepf Farms",
    description:
      "A Queen Creek classic — known for its seasonal festivals, farm-to-table food, and u-pick gardens.",
  },
  {
    icon: <FaPalette className="text-blue-600 text-4xl" />,
    title: "Queen Creek Performing Arts Center",
    description:
      "Experience live music, theatre, and community shows right in the heart of town.",
  },
  {
    icon: <FaTractor className="text-blue-600 text-4xl" />,
    title: "Agritainment & Farm Tours",
    description:
      "From corn mazes to petting zoos, Queen Creek’s farms bring fun and learning together.",
  },

  // Family-Friendly Fun
  {
    icon: <FaPaw className="text-orange-600 text-4xl" />,
    title: "Horseshoe Park & Equestrian Centre",
    description:
      "A premier venue for rodeos, horse shows, and family-friendly western events.",
  },
  {
    icon: <FaChild className="text-orange-600 text-4xl" />,
    title: "Pocket Parks & Neighborhood Trails",
    description:
      "Dozens of small parks and walking trails perfect for family time and outdoor fun.",
  },

  // Unique Experiences
  {
    icon: <FaHotjar className="text-purple-600 text-4xl" />,
    title: "Sunset Hot Air Balloon Rides",
    description:
      "Take in breathtaking aerial views of the San Tan Valley and Queen Creek countryside.",
  },
  {
    icon: <FaCity className="text-purple-600 text-4xl" />,
    title: "Downtown Queen Creek",
    description:
      "A growing hub for shopping, dining, and entertainment with a welcoming small-town vibe.",
  },
];

const Section4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="paddingTopBottom w-full py-10 bg-white" ref={ref}>
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-[var(--heading-text-color)] capitalize py-2 text-center">
          Explore the Best of Queen Creek, AZ
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