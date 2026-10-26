"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaTrain, FaTractor, FaLandmark, FaCity, FaUsers } from "react-icons/fa";

const milestones = [
  {
    era: "1902",
    icon: <FaTrain className="text-[#f99c00]" />,
    title: "William 'Bobby' Gilbert & Railway",
    desc: "William 'Bobby' Gilbert provided land for the Arizona Eastern Railway line connecting Phoenix to Florence, establishing the town's roots."
  },
  {
    era: "Early 1900s",
    icon: <FaTractor className="text-amber-700" />,
    title: "'Hay Shipping Capital of the World'",
    desc: "Gilbert became a bustling agricultural shipping center, providing high-quality alfalfa hay to support livestock and farms across the state."
  },
  {
    era: "1920",
    icon: <FaLandmark className="text-[#011234]" />,
    title: "Official Incorporation",
    desc: "The town officially incorporated in July 1920, establishing a close-knit agricultural community centered around farming and local commerce."
  },
  {
    era: "1980s",
    icon: <FaCity className="text-[#4096b1]" />,
    title: "Suburban Boom & Economic Expansion",
    desc: "With the expansion of the Phoenix metro area, Gilbert experienced rapid growth, building top-rated schools, parks, and vibrant neighborhoods."
  },
  {
    era: "Today",
    icon: <FaUsers className="text-emerald-700" />,
    title: "Top-Rated Family Town & Heritage",
    desc: "Recognized as one of America's best and safest places to live, blending modern amenities with proud preservation of its agricultural roots."
  }
];

const Section8 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-neutral-50 py-16 border-y border-neutral-200" ref={ref} id="gilbert-history">
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
            A Rich History of Gilbert, AZ
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            From the "Hay Shipping Capital of the World" to one of Arizona's most vibrant and desirable family communities.
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
            Gilbert, Arizona, has grown from a humble agricultural community into one of the fastest-growing and most desirable towns in the state. Known as the “Hay Shipping Capital of the World” during its early years, Gilbert played a vital role in supporting the state’s farming industry.
          </p>
          <p>
            The town’s roots trace back to 1902 when a man named William “Bobby” Gilbert provided land for a railway line connecting Phoenix to Florence. This railway spurred growth and development, transforming the area into a bustling agricultural hub.
          </p>
          <p>
            Incorporated in 1920, Gilbert remained a small farming town for much of the 20th century. However, with the expansion of the Phoenix metropolitan area, Gilbert experienced rapid growth starting in the 1980s. It evolved into a thriving suburban community with a strong economy, excellent schools, and a high quality of life.
          </p>
          <p>
            Today, Gilbert is recognized for its family-friendly atmosphere, beautiful parks, and vibrant downtown area. Despite its modern developments, the town proudly preserves its agricultural heritage through events and historic landmarks.
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
