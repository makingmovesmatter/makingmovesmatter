"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaMapMarkedAlt,
  FaMountain,
  FaTruck,
  FaRoute,
  FaRoad,
  FaLocationArrow,
} from "react-icons/fa";

const routes = [
  {
    icon: <FaMapMarkedAlt className="iconColor text-4xl" />,
    title: "Arizona to California",
    description:
      "Reliable long-distance moving services to Los Angeles, San Diego, Sacramento, Riverside, San Francisco, and communities throughout California.",
  },
  {
    icon: <FaMountain className="iconColor text-4xl" />,
    title: "Arizona to Colorado",
    description:
      "Professional interstate movers serving Denver, Colorado Springs, Fort Collins, Boulder, and destinations across Colorado.",
  },
  {
    icon: <FaTruck className="iconColor text-4xl" />,
    title: "Arizona to Texas",
    description:
      "Dependable long-distance moving services to Dallas, Houston, Austin, Fort Worth, San Antonio, and surrounding Texas communities.",
  },
  {
    icon: <FaRoute className="iconColor text-4xl" />,
    title: "Arizona to New Mexico",
    description:
      "Affordable interstate moving solutions to Albuquerque, Santa Fe, Las Cruces, and cities throughout New Mexico.",
  },
  {
    icon: <FaRoad className="iconColor text-4xl" />,
    title: "Arizona to Nevada",
    description:
      "Safe and efficient moving services to Las Vegas, Henderson, Reno, Carson City, and nearby Nevada communities.",
  },
  {
    icon: <FaLocationArrow className="iconColor text-4xl" />,
    title: "Arizona to Utah",
    description:
      "Professional long-distance movers helping families relocate to Salt Lake City, Provo, Ogden, St. George, and beyond.",
  },
];

const SectionThree = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="w-full !py-20 bg-[#fafafa]" ref={ref}>
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-[var(--heading-text-color)]">
            We Specialize in Long Distance Moves From Arizona To
          </h2>

          <p className="text-gray-600 mt-5 leading-8">
            Whether you're relocating to a neighboring state or across the
            Southwest, Making Moves Matter provides dependable interstate moving
            services tailored to your destination. If your destination isn't
            listed below, contact us for a customized long-distance moving quote
            anywhere within the continental United States.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {routes.map((route, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="bg-white rounded-xl border border-gray-200 p-8 transition-all duration-300"
            >
              <div className="mb-5">{route.icon}</div>

              <h3 className="text-2xl font-semibold text-[var(--heading-text-color)] mb-3">
                {route.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {route.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionThree;