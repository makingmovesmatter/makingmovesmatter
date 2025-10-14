"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaMountain, FaSeedling, FaBiking, FaLandmark, FaPalette, FaTractor, FaHome, FaPaw, FaChild, FaHotjar, FaCity
} from "react-icons/fa";

const cards = [
  { icon: <FaMountain className="text-green-600 text-4xl" />, title: "San Tan Mountain Regional Park", description: "Hiking and biking with scenic desert views and wildlife." },
  { icon: <FaSeedling className="text-green-600 text-4xl" />, title: "Local Farms & Olive Mills", description: "Enjoy agritourism and fresh local produce in the valley." },
  { icon: <FaBiking className="text-green-600 text-4xl" />, title: "Community Parks", description: "Family-friendly parks, playgrounds, and walking trails." },
  { icon: <FaLandmark className="text-blue-600 text-4xl" />, title: "Heritage Sites", description: "Explore local history and community landmarks." },
  { icon: <FaPalette className="text-blue-600 text-4xl" />, title: "Arts & Culture", description: "Community arts, local galleries, and cultural events." },
  { icon: <FaTractor className="text-blue-600 text-4xl" />, title: "Agritainment Activities", description: "Seasonal festivals, corn mazes, and family farm experiences." },
  { icon: <FaPaw className="text-orange-600 text-4xl" />, title: "Equestrian Centers", description: "Horse shows, rodeos, and family-friendly western fun." },
  { icon: <FaChild className="text-orange-600 text-4xl" />, title: "Neighborhood Trails", description: "Safe walking and biking trails for kids and families." },
  { icon: <FaHotjar className="text-purple-600 text-4xl" />, title: "Hot Air Balloon Rides", description: "Take in breathtaking aerial views of San Tan Valley." },
  { icon: <FaCity className="text-purple-600 text-4xl" />, title: "Downtown Activities", description: "Shopping, dining, and community events for all ages." },
];

const Section4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="paddingTopBottom w-full py-10 bg-white" ref={ref}>
      <div className="container mx-auto px-5">
        <h2 className="text-4xl font-bold text-[var(--heading-text-color)] text-center py-2">
          Explore San Tan Valley, AZ
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
                <h3 className="text-xl font-semibold text-[var(--heading-text-color)] mb-1">{card.title}</h3>
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