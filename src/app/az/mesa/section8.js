"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaWater, FaFlag, FaSeedling, FaPlane, FaCity } from "react-icons/fa";

const milestones = [
  {
    era: "2,000+ Years Ago",
    icon: <FaWater className="text-[#4096b1]" />,
    title: "Ancient Hohokam Civilization & Canals",
    desc: "The original inhabitants developed an intricate network of canal irrigation across the desert landscape, advanced engineering marvels still partly in use today."
  },
  {
    era: "1878",
    icon: <FaFlag className="text-[#f99c00]" />,
    title: "Establishment of Modern Mesa",
    desc: "Mormon pioneers led by Daniel Webster Jones settled the plateau and named it 'Mesa' (Spanish for tableland), restoring the historic canals for agricultural prosperity."
  },
  {
    era: "1911",
    icon: <FaSeedling className="text-emerald-600" />,
    title: "Roosevelt Dam & Citrus Boom",
    desc: "Completion of the Roosevelt Dam ensured continuous water security, transforming Mesa into an agricultural powerhouse celebrated for citrus, cotton, and alfalfa."
  },
  {
    era: "1941–1945",
    icon: <FaPlane className="text-[#011234]" />,
    title: "WWII Falcon Field & Aviation Era",
    desc: "Mesa's Falcon Field and Williams Air Force Base trained thousands of military aviators, triggering post-war migration and rapid technological expansion."
  },
  {
    era: "Today",
    icon: <FaCity className="text-[#f99c00]" />,
    title: "Arizona's 3rd-Largest City",
    desc: "A thriving metropolitan center celebrated for aerospace, healthcare, education, diverse cultural arts, and exceptional residential communities."
  }
];

const Section8 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-neutral-50 py-16 border-y border-neutral-200" ref={ref} id="mesa-history">
      <div className="container mx-auto px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            Heritage & Roots
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--heading-text-color)] capitalize">
            A Brief History of Mesa, AZ
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            From 2,000-year-old Hohokam waterways to Arizona’s dynamic third-largest metropolitan hub.
          </p>
        </motion.div>

        {/* Narrative Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="p-8 rounded-xl bg-white border border-neutral-200 mb-10 space-y-4 text-gray-700 text-base leading-relaxed"
        >
          <p>
            Mesa, Arizona, is one of the largest and most culturally rich cities in the state. Located in the East Valley of the Phoenix Metropolitan Area, it has a history that dates back over 2,000 years.
          </p>
          <p>
            The original inhabitants of the region were the Hohokam people, who developed an intricate system of canals to irrigate the desert landscape. Some of these ancient waterways are still in use today, showcasing the advanced engineering skills of the Hohokam civilization.
          </p>
          <p>
            The modern city of Mesa was established in 1878 by Mormon settlers led by Daniel Webster Jones. They named the city “Mesa” because of its location on a raised, flat plateau. These pioneers revived and expanded the ancient canal systems, turning the area into fertile farmland.
          </p>
          <p>
            In the early 20th century, agriculture remained the foundation of Mesa’s economy, with crops such as citrus, cotton, and alfalfa thriving in the desert climate. The completion of the Roosevelt Dam in 1911 provided a reliable water source, further supporting the city’s growth.
          </p>
          <p>
            During World War II, Mesa’s Falcon Field and Williams Air Force Base became essential training grounds for military pilots. The post-war years saw a surge in population as the city transitioned from an agricultural community to a thriving urban center.
          </p>
          <p className="font-medium text-[var(--heading-text-color)]">
            Today, Mesa is known for its diverse economy, excellent educational institutions, and vibrant cultural scene. As the third-largest city in Arizona, it continues to attract families, businesses, and visitors with its unique blend of history, natural beauty, and modern amenities.
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {milestones.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + idx * 0.1, ease: "easeOut" }}
              className="p-5 rounded-xl bg-white border border-neutral-200 hover:border-[#f99c00] transition-colors duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center text-lg">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-[#f99c00] bg-orange-50 px-2 py-0.5 rounded border border-orange-100">
                    {item.era}
                  </span>
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
