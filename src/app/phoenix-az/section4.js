"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaMountain, FaSeedling, FaBiking, FaLandmark, FaPalette, FaPaintBrush, FaHome, FaPaw, FaChild, FaHotjar, FaCity } from "react-icons/fa";

const cards = [
  // Explore the Outdoors
  {
    icon: <FaMountain className="text-green-600 text-4xl" />,
    title: "Camelback Mountain",
    description: "A challenging hike with rewarding panoramic views of Phoenix"
  },
  {
    icon: <FaSeedling className="text-green-600 text-4xl" />,
    title: "Desert Botanical Garden",
    description: "Unique desert flora collections and scenic walking trails"
  },
  {
    icon: <FaBiking className="text-green-600 text-4xl" />,
    title: "Papago Park",
    description: "Great for hiking, biking, and enjoying the desert landscape"
  },

  // Arts, Culture & History
  {
    icon: <FaLandmark className="text-blue-600 text-4xl" />,
    title: "Heard Museum",
    description: "Discover Native American history, culture, and art exhibits"
  },
  {
    icon: <FaPalette className="text-blue-600 text-4xl" />,
    title: "Phoenix Art Museum",
    description: "Explore classical and contemporary art from around the globe"
  },
  {
    icon: <FaPaintBrush className="text-blue-600 text-4xl" />,
    title: "Roosevelt Row Arts District",
    description: "Immerse yourself in Phoenix’s vibrant street art and culture"
  },
  {
    icon: <FaHome className="text-blue-600 text-4xl" />,
    title: "Heritage Square",
    description: "Historic homes, museums, and charming local eateries"
  },

  // Family-Friendly Fun
  {
    icon: <FaPaw className="text-orange-600 text-4xl" />,
    title: "Phoenix Zoo",
    description: "Home to hundreds of animal species and family activities"
  },
  {
    icon: <FaChild className="text-orange-600 text-4xl" />,
    title: "Children’s Museum of Phoenix",
    description: "Interactive exhibits and hands-on fun for kids of all ages"
  },

  // Unique Experiences
  {
    icon: <FaHotjar className="text-purple-600 text-4xl" />,
    title: "Hot Air Balloon Rides",
    description: "Breathtaking views of the Sonoran Desert at sunrise"
  },
  {
    icon: <FaCity className="text-purple-600 text-4xl" />,
    title: "Old Town Scottsdale",
    description: "Dining, nightlife, shopping, and culture just minutes away"
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
