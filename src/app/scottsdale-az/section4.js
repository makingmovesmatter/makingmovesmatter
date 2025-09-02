"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { 
  FaMountain, 
  FaLeaf, 
  FaLandmark, 
  FaPaintBrush, 
  FaStore, 
  FaChild, 
  FaFish, 
  FaTrain, 
  FaUniversity, 
  FaShoppingBag
} from "react-icons/fa";
import { GiBalloons} from "react-icons/gi"; 

const cards = [
  // Explore the Outdoors
  {
    icon: <FaLeaf className="iconColor text-4xl" />,
    title: "McDowell Sonoran Preserve",
    description: "Hike or bike through over 30,000 acres of stunning desert landscapes."
  },
  {
    icon: <FaMountain className="iconColor text-4xl" />,
    title: "Camelback Mountain",
    description: "A challenging hike with breathtaking views of the Valley."
  },
  {
    icon: <FaLeaf className="iconColor text-4xl" />,
    title: "Butterfly Wonderland",
    description: "Experience North America’s largest indoor butterfly pavilion."
  },

  // Arts, Culture & History
  {
    icon: <FaPaintBrush className="iconColor text-4xl" />,
    title: "Scottsdale Museum of Contemporary Art (SMoCA)",
    description: "Enjoy cutting-edge art and architecture exhibits."
  },
  {
    icon: <FaLandmark className="iconColor text-4xl" />,
    title: "Western Spirit: Scottsdale’s Museum of the West",
    description: "Explore the rich history and culture of the American West."
  },
  {
    icon: <FaStore className="iconColor text-4xl" />,
    title: "Old Town Scottsdale",
    description: "Discover art galleries, boutique shops, and local eateries in this charming historic district."
  },

  // Family-Friendly Fun
  {
    icon: <FaFish className="iconColor text-4xl" />,
    title: "OdySea Aquarium",
    description: "A state-of-the-art aquarium featuring interactive marine life exhibits."
  },
  {
    icon: <FaTrain className="iconColor text-4xl" />,
    title: "McCormick-Stillman Railroad Park",
    description: "A fun destination for train rides, playgrounds, and family activities."
  },
  {
    icon: <FaChild className="iconColor text-4xl" />,
    title: "Arizona Boardwalk",
    description: "Home to attractions like Pangaea: Land of the Dinosaurs and more."
  },

  // Unique Experiences
  {
    icon: <FaUniversity className="iconColor text-4xl" />,
    title: "Taliesin West",
    description: "Visit Frank Lloyd Wright’s desert masterpiece and former home."
  },
  {
    icon: <FaShoppingBag className="iconColor text-4xl" />,
    title: "Scottsdale Fashion Square",
    description: "Shop luxury brands and dine at upscale restaurants."
  },
  {
    icon: <GiBalloons  className="iconColor text-4xl" />, // ✅ Fixed icon
    title: "Hot Air Balloon Rides",
    description: "Enjoy breathtaking views of the desert landscape at sunrise."
  }
];

const Section4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="paddingTopBottom w-full py-10 bg-white" ref={ref}>
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-[var(--black-color)] capitalize py-2 text-center">
          Top Things to Do in Scottsdale
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