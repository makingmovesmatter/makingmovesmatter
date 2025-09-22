"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaTree, FaSwimmer, FaLandmark, FaTheaterMasks, FaCity, FaGolfBall, FaFutbol, FaGamepad, FaSeedling, FaShoppingBasket, FaPaintBrush } from "react-icons/fa";

const cards = [
  // Explore the Outdoors
  {
    icon: <FaTree className="text-green-600 text-4xl" />,
    title: "Riparian Preserve at Water Ranch",
    description: "Peaceful trails, bird watching, and natural beauty"
  },
  {
    icon: <FaTree className="text-green-600 text-4xl" />,
    title: "Freestone Park",
    description: "Perfect for picnics, skateboarding, and community events"
  },
  {
    icon: <FaSwimmer className="text-green-600 text-4xl" />,
    title: "Gilbert Regional Park",
    description: "Playgrounds, splash pads, and walking trails for all ages"
  },

  // Arts, Culture & History
  {
    icon: <FaLandmark className="text-blue-600 text-4xl" />,
    title: "Gilbert Historical Museum",
    description: "Discover local history and agricultural roots"
  },
  {
    icon: <FaTheaterMasks className="text-blue-600 text-4xl" />,
    title: "Hale Centre Theatre",
    description: "Top-notch live performances in a cozy venue"
  },
  {
    icon: <FaCity className="text-blue-600 text-4xl" />,
    title: "Downtown Gilbert (Heritage District)",
    description: "Dining, events, and local culture in one lively hub"
  },

  // Family-Friendly Fun
  {
    icon: <FaGolfBall className="text-orange-600 text-4xl" />,
    title: "Topgolf Gilbert",
    description: "Golf, games, and entertainment for all ages"
  },
  {
    icon: <FaFutbol className="text-orange-600 text-4xl" />,
    title: "Discovery Park",
    description: "Sports fields, playgrounds, and family fun"
  },
  {
    icon: <FaGamepad className="text-orange-600 text-4xl" />,
    title: "Main Event",
    description: "Bowling, arcade games, and laser tag excitement"
  },

  // Unique Local Experiences
  {
    icon: <FaSeedling className="text-purple-600 text-4xl" />,
    title: "Agritopia",
    description: "Farm-to-table community with artisan shops and local charm"
  },
  {
    icon: <FaShoppingBasket className="text-purple-600 text-4xl" />,
    title: "Gilbert Farmers Market",
    description: "Fresh produce and local goods every weekend"
  },
  {
    icon: <FaPaintBrush className="text-purple-600 text-4xl" />,
    title: "Gilbert Art Walk",
    description: "Seasonal showcases of art, creativity, and culture"
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
