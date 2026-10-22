"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaTruckMoving,
  FaCheckCircle,
} from "react-icons/fa";

const destinations = [
  {
    title: "Arizona to California Movers",
    cities: [
      "Los Angeles",
      "San Diego",
      "Orange County",
      "Sacramento",
      "Riverside",
      "San Francisco",
    ],
    description1:
      "California is one of our most requested long-distance routes. Whether you're relocating to Los Angeles, San Diego, Orange County, Sacramento, Riverside, San Francisco, or anywhere in between, Making Moves Matter provides dependable interstate moving services you can count on.",
    description2:
      "Our team carefully packs, loads, transports, and delivers your belongings while keeping you informed every step of the way.",
  },
  {
    title: "Arizona to Colorado Movers",
    cities: [
      "Denver",
      "Colorado Springs",
      "Fort Collins",
      "Boulder",
    ],
    description1:
      "Planning a move to Colorado? Whether you're relocating to Denver, Colorado Springs, Fort Collins, Boulder, or another city, our professional movers have the experience to safely transport your household across state lines.",
    description2:
      "From apartments to large family homes, we make your Colorado move simple and worry-free.",
  },
  {
    title: "Arizona to Texas Movers",
    cities: [
      "Dallas",
      "Fort Worth",
      "Austin",
      "Houston",
      "San Antonio",
    ],
    description1:
      "Texas continues to attract thousands of Arizona residents every year. We proudly provide long-distance moving services to Dallas, Fort Worth, Austin, Houston, San Antonio, and surrounding communities.",
    description2:
      "Whether you're moving for work or family, our experienced movers help ensure your belongings arrive safely and on schedule.",
  },
  {
    title: "Arizona to New Mexico Movers",
    cities: [
      "Albuquerque",
      "Santa Fe",
      "Las Cruces",
    ],
    description1:
      "If you're relocating to Albuquerque, Santa Fe, Las Cruces, or anywhere else in New Mexico, Making Moves Matter offers affordable interstate moving services with careful handling and dependable transportation.",
    description2:
      "Our goal is to make your move as smooth and stress-free as possible.",
  },
  {
    title: "Arizona to Nevada Movers",
    cities: [
      "Las Vegas",
      "Henderson",
      "Reno",
      "Carson City",
    ],
    description1:
      "Whether you're moving to Las Vegas, Henderson, Reno, or Carson City, our experienced team provides efficient long-distance moving services tailored to your schedule.",
    description2:
      "We understand the logistics of Arizona-to-Nevada moves and work hard to deliver exceptional customer service from beginning to end.",
  },
  {
    title: "Arizona to Utah Movers",
    cities: [
      "Salt Lake City",
      "Provo",
      "Ogden",
      "St. George",
    ],
    description1:
      "Moving to Salt Lake City, Provo, Ogden, St. George, or another Utah community? Making Moves Matter has the equipment, experience, and professional movers needed to complete your relocation safely and efficiently.",
    description2:
      "We'll handle the heavy lifting so you can focus on settling into your new home.",
  },
];

const SectionFour = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full !py-20 bg-white" ref={ref}>
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-14"
        >
          <h2 className="text-4xl font-bold text-[var(--heading-text-color)]">
            Popular Long Distance Moving Routes
          </h2>

          <p className="text-gray-600 mt-5 leading-8">
            Wherever you're moving from Arizona, our experienced movers provide
            dependable interstate moving services with careful planning, safe
            transportation, and outstanding customer support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {destinations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="bg-white border border-gray-200 rounded-xl transition-all duration-300 p-8"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-14 h-14 rounded-full bg-[var(--primary-color)]/10 flex items-center justify-center">
                  <FaTruckMoving className="iconColor text-2xl" />
                </div>

                <h3 className="text-2xl font-bold text-[var(--heading-text-color)]">
                  {item.title}
                </h3>
              </div>

              <p className="text-gray-600 leading-7 mb-5">
                {item.description1}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {item.cities.map((city, cityIndex) => (
                  <div
                    key={cityIndex}
                    className="flex items-center gap-2 text-sm text-gray-700"
                  >
                    <FaMapMarkerAlt className="iconColor text-sm" />
                    <span>{city}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-600 leading-7 mb-6">
                {item.description2}
              </p>

              <div className="flex items-center gap-2 font-medium text-[var(--heading-text-color)]">
                <FaCheckCircle className="iconColor" />
                <span>Professional • Licensed • Reliable</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionFour;