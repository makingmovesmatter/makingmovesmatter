"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaUserMd, FaWater, FaPlane, FaMicrochip, FaCity } from "react-icons/fa";

const milestones = [
  {
    era: "1912",
    icon: <FaUserMd className="text-[#f99c00]" />,
    title: "Founded by Dr. Alexander John Chandler",
    desc: "Arizona's first veterinary surgeon purchased 18,000 acres southeast of Phoenix, envisioning a thriving modern desert community."
  },
  {
    era: "1920",
    icon: <FaWater className="text-[#4096b1]" />,
    title: "Innovative Salt River Irrigation & Incorporation",
    desc: "Canals channeled Salt River water to transform arid desert into fertile farmland supporting cotton, alfalfa, and citrus, officially incorporating in 1920."
  },
  {
    era: "Mid-20th Century",
    icon: <FaPlane className="text-emerald-600" />,
    title: "Williams Air Force Base & Growth",
    desc: "The establishment of Williams AFB spurred significant residential growth and post-war economic development throughout the region."
  },
  {
    era: "1980s",
    icon: <FaMicrochip className="text-[#011234]" />,
    title: "Arrival of Intel & High-Tech Boom",
    desc: "Major technology innovators, spearheaded by Intel's flagship campuses, transformed Chandler from farmland into the heart of the 'Silicon Desert'."
  },
  {
    era: "Today",
    icon: <FaCity className="text-[#f99c00]" />,
    title: "Silicon Desert Innovation Hub",
    desc: "A world-class technology center boasting a historic walkable downtown, premier schools, luxury master-planned neighborhoods, and unmatched quality of life."
  }
];

const Section8 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-neutral-50 py-16 border-y border-neutral-200" ref={ref} id="chandler-history">
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
            A Brief History of Chandler, AZ
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            From visionary desert agriculture to Arizona’s world-renowned Silicon Desert innovation capital.
          </p>
        </motion.div>

        {/* Narrative Narrative Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-8 rounded-xl bg-white border border-neutral-200 mb-10 space-y-4 text-gray-700 text-base leading-relaxed"
        >
          <p>
            Chandler, Arizona, has a rich history rooted in innovation and agriculture. The city was founded in 1912 by Dr. Alexander John Chandler, Arizona’s first veterinary surgeon. He purchased land southeast of Phoenix and envisioned a thriving community that would capitalize on the desert’s potential for farming and development.
          </p>
          <p>
            Dr. Chandler’s efforts paid off when he developed an innovative irrigation system using water from the Salt River. This system transformed the arid desert landscape into fertile farmland, supporting crops such as cotton, alfalfa, and citrus. The town officially incorporated in 1920 and began to grow as more settlers were attracted to the area’s agricultural success.
          </p>
          <p>
            In the mid-20th century, Chandler shifted from an agricultural hub to a center of technological innovation. The establishment of the Williams Air Force Base and the arrival of major technology companies, including Intel, spurred economic growth and transformed the city into a thriving urban area.
          </p>
          <p>
            Today, Chandler is known as a hub for innovation and technology, often referred to as part of the “Silicon Desert.” With a vibrant downtown, excellent schools, and diverse recreational opportunities, it remains one of the most desirable places to live in Arizona. After your move with the best Chandler moving company, take some time to explore the city’s many attractions.
          </p>
        </motion.div>

        {/* Interactive Milestones Timeline */}
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
