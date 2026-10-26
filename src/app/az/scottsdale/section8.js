"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaWater, FaLandmark, FaPaintBrush, FaHotel, FaCity } from "react-icons/fa";

const milestones = [
  {
    era: "Pre-1450",
    icon: <FaWater className="text-[#4096b1]" />,
    title: "Ancient Hohokam Canal Civilization",
    desc: "The Hohokam people engineered an intricate canal network across the desert basin, establishing sustainable agriculture long before modern settlement."
  },
  {
    era: "1888",
    icon: <FaLandmark className="text-[#f99c00]" />,
    title: "Founded by Chaplain Winfield Scott",
    desc: "U.S. Army Chaplain Winfield Scott purchased 640 acres in what is now Downtown Scottsdale, planting citrus groves and laying the town's foundation."
  },
  {
    era: "Early 1900s",
    icon: <FaPaintBrush className="text-purple-600" />,
    title: "Colony of Artists, Writers & Visionaries",
    desc: "Scottsdale attracted renowned authors, painters, and Frank Lloyd Wright, drawn to the Sonoran Desert's dramatic light, red rocks, and open landscape."
  },
  {
    era: "Mid-1900s",
    icon: <FaHotel className="text-[#011234]" />,
    title: "Upscale Resorts & 'The West’s Most Western Town'",
    desc: "The town officially incorporated in 1951, adopting its famed slogan while world-class destination resorts and vibrant art galleries flourished."
  },
  {
    era: "Today",
    icon: <FaCity className="text-[#f99c00]" />,
    title: "World-Class Luxury & Cultural Destination",
    desc: "One of America’s premier lifestyle hubs, blending Old West charm with world-class championship golf, fine dining, and modern sophistication."
  }
];

const Section8 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-neutral-50 py-16 border-y border-neutral-200" ref={ref} id="scottsdale-history">
      <div className="container mx-auto px-5">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            Heritage & Roots
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] capitalize">
            A Rich History of Scottsdale, AZ
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            From ancient Sonoran waterways and Old West roots to an internationally acclaimed sanctuary of art, architecture, and luxury living.
          </p>
        </motion.div>

        {/* Narrative Block with User's Exact Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-8 rounded-xl bg-white border border-neutral-200 mb-10 space-y-4 text-gray-700 text-base leading-relaxed"
        >
          <p>
            Scottsdale, often referred to as “The West’s Most Western Town,” has a fascinating history that blends Native American heritage, cowboy culture, and modern luxury living. The area was originally inhabited by the Hohokam people, who created an intricate canal system that enabled them to farm the arid desert landscape. After the Hohokam civilization faded, the region remained largely undeveloped until the late 1800s when Army Chaplain Winfield Scott purchased land in what is now downtown Scottsdale. His investment laid the foundation for the town’s development.
          </p>
          <p>
            Throughout the early 20th century, Scottsdale attracted artists, writers, and visionaries drawn to the area’s natural beauty and open landscapes. By the mid-1900s, the town became known for its upscale resorts and vibrant art scene.
          </p>
          <p>
            Today, Scottsdale is one of Arizona’s premier destinations, known for its luxurious lifestyle, world-class golf courses, fine dining, and thriving arts and cultural scene. It seamlessly blends Old West charm with modern sophistication, making it a unique and highly desirable place to live and work.
          </p>
        </motion.div>

        {/* Visual Milestones Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
              className="p-5 rounded-xl bg-white border border-neutral-200 hover:border-[#f99c00] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00]">
                    {item.era}
                  </span>
                  <span className="text-lg">{item.icon}</span>
                </div>
                <h3 className="font-bold text-sm text-[var(--heading-text-color)] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Section8;
