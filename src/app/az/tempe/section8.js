"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaWater, FaShip, FaLandmark, FaGraduationCap, FaCity } from "react-icons/fa";

const milestones = [
  {
    era: "Ancient Era",
    icon: <FaWater className="text-[#4096b1]" />,
    title: "Ancient Hohokam Canal Civilization",
    desc: "The Hohokam people engineered extensive irrigation canals across the desert basin, laying the groundwork for modern waterways still utilized today."
  },
  {
    era: "1860s",
    icon: <FaShip className="text-[#f99c00]" />,
    title: "Hayden's Ferry & Salt River Mill",
    desc: "Pioneer Charles Trumbull Hayden established a ferry crossing on the Salt River and founded a vital flour mill, catalyzing commerce across the Valley."
  },
  {
    era: "1879",
    icon: <FaLandmark className="text-amber-700" />,
    title: "Named After the Vale of Tempe",
    desc: "Inspired by the scenic beauty of the Vale of Tempe in Greece, the community was officially named Tempe, becoming an incorporated town in 1894."
  },
  {
    era: "1885",
    icon: <FaGraduationCap className="text-red-700" />,
    title: "Founding of ASU (Territorial Normal School)",
    desc: "Established as the Arizona Territorial Normal School, it evolved into Arizona State University (ASU), one of America's largest and most innovative universities."
  },
  {
    era: "Today",
    icon: <FaCity className="text-[#011234]" />,
    title: "Vibrant Hub of Innovation & Culture",
    desc: "A thriving city boasting Tempe Town Lake, a bustling downtown along Mill Avenue, leading research hubs, and a central Phoenix metro location."
  }
];

const Section8 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-neutral-50 py-16 border-y border-neutral-200" ref={ref} id="tempe-history">
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
            A Rich History of Tempe, AZ
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            From ancient Hohokam canals and Hayden's Ferry to the academic excellence and modern innovation of Arizona State University.
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
            Tempe, Arizona, has a fascinating history that dates back thousands of years. The area was originally inhabited by the Hohokam people, who built an extensive canal system to support agriculture in the arid desert landscape. These ancient canals laid the groundwork for modern irrigation systems still used today.
          </p>
          <p>
            The city’s modern roots began in the 1860s when Charles Trumbull Hayden, a key figure in the region’s development, established a ferry service across the Salt River and founded a flour mill. This area, known as Hayden’s Ferry, would later be renamed Tempe, inspired by the Vale of Tempe in Greece. Tempe quickly became a center of commerce and education. In 1885, the Arizona Territorial Normal School was established, which eventually evolved into Arizona State University (ASU), one of the largest and most prestigious universities in the country.
          </p>
          <p>
            Today, Tempe is a bustling city known for its vibrant culture, thriving arts scene, and strong ties to education and innovation. With its central location in the Phoenix metro area, Tempe continues to attract families, students, and businesses alike.
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
