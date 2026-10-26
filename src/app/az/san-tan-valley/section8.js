"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaMountain, FaLandmark, FaTractor, FaUsers, FaCity } from "react-icons/fa";

const milestones = [
  {
    era: "Ancient Roots",
    icon: <FaMountain className="text-emerald-600" />,
    title: "Akimel O'odham Foothills",
    desc: "Indigenous desert dwellers revered the San Tan Mountain ridges, cultivating traditional crops and utilizing seasonal wash waters."
  },
  {
    era: "Late 1800s",
    icon: <FaLandmark className="text-[#f99c00]" />,
    title: "Charles Poston & Poston Butte",
    desc: "Charles Debrille Poston, the 'Father of Arizona,' established his presence here, leaving a historic legacy at iconic Poston Butte."
  },
  {
    era: "Early 1900s",
    icon: <FaTractor className="text-amber-700" />,
    title: "Pinal County Cattle & Ranching",
    desc: "For decades, northern Pinal County remained an expansive open landscape of family cattle ranches, desert homesteads, and citrus groves."
  },
  {
    era: "2009",
    icon: <FaUsers className="text-[#011234]" />,
    title: "Official Adoption of San Tan Valley",
    desc: "Following a residential boom, residents voted in 2009 to adopt the unified name 'San Tan Valley' after the surrounding mountain range."
  },
  {
    era: "Today",
    icon: <FaCity className="text-[#4096b1]" />,
    title: "Vibrant Community of 100,000+",
    desc: "A thriving family and golf oasis offering panoramic mountain views, master-planned neighborhoods, and a relaxed desert lifestyle."
  }
];

const Section8 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-neutral-50 py-16 border-y border-neutral-200" ref={ref} id="san-tan-valley-history">
      <div className="container mx-auto px-5">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            Heritage & Mountain Peaks
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] capitalize">
            A Rich History of San Tan Valley, AZ
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            From sacred indigenous mountain trails and pioneer homesteads to one of Arizona’s most dynamic family communities.
          </p>
        </motion.div>

        {/* Narrative Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-8 rounded-xl bg-white border border-neutral-200 mb-10 space-y-4 text-gray-700 text-base leading-relaxed"
        >
          <p>
            San Tan Valley, Arizona, framed by the rugged San Tan Mountains, holds a captivating history that bridges ancient Native American traditions, territorial pioneer legends, and modern residential expansion. For centuries, the Akimel O’odham and ancient desert peoples considered the mountain range sacred, traveling its foothills and utilizing natural washes for seasonal cultivation.
          </p>
          <p>
            In the late 19th century, Charles Debrille Poston, known throughout state history as the “Father of Arizona” for his tireless advocacy for territorial status, lived in the area. Poston Butte, a prominent local hill where Poston was laid to rest, remains an enduring historical landmark and hiking destination for valley residents.
          </p>
          <p>
            Throughout the early and mid-20th century, the fertile valley remained largely open cattle country, dotted with family-owned homesteads, citrus orchards, and pecan groves. Water from the nearby Gila River and canal networks supported farming across northern Pinal County.
          </p>
          <p>
            The turn of the 21st century sparked a monumental transformation. Seeking affordable desert living with resort-style amenities, thousands of families arrived as master-planned neighborhoods like Johnson Ranch, San Tan Heights, Copper Basin, and Skyline Ranch took shape. In 2009, community members officially voted to adopt the unified name “San Tan Valley.”
          </p>
          <p>
            Today, San Tan Valley has grown into a bustling community of more than 100,000 residents. Boasting premier golf courses, scenic access to San Tan Mountain Regional Park, excellent schools, and panoramic Sonoran Desert vistas, San Tan Valley offers a welcoming, active lifestyle that continues to attract families and businesses alike.
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
