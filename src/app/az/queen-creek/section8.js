"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaSeedling, FaWater, FaTractor, FaLandmark, FaCity } from "react-icons/fa";

const milestones = [
  {
    era: "Ancient Roots",
    icon: <FaSeedling className="text-emerald-600" />,
    title: "Akimel O'odham Farming",
    desc: "Indigenous peoples cultivated the fertile soils along the Queen Creek wash for centuries using seasonal river runoff and desert irrigation."
  },
  {
    era: "1919",
    icon: <FaWater className="text-[#4096b1]" />,
    title: "Creek Naming & Early Homesteads",
    desc: "Named after the historic Silver Queen Mine in Superior, the wash brought vital water to early homesteaders settling along the foothills."
  },
  {
    era: "1940s",
    icon: <FaTractor className="text-amber-700" />,
    title: "Ellsworth Family Farming Era",
    desc: "Leo Ellsworth and family developed Queen Creek Land & Cattle Company, transforming the region into a major cotton, potato, and dairy center."
  },
  {
    era: "1989",
    icon: <FaLandmark className="text-[#011234]" />,
    title: "Official Town Incorporation",
    desc: "Residents voted to incorporate as the Town of Queen Creek in 1989 to protect their rural agricultural heritage and govern local growth."
  },
  {
    era: "Today",
    icon: <FaCity className="text-[#f99c00]" />,
    title: "Top-Rated Family Destination",
    desc: "Celebrated for world-famous agritourism, equestrian lifestyle, master-planned neighborhoods, and a thriving modern town center."
  }
];

const Section8 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-neutral-50 py-16 border-y border-neutral-200" ref={ref} id="queen-creek-history">
      <div className="container mx-auto px-5">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            Heritage & Foothills Roots
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] capitalize">
            A Rich History of Queen Creek, AZ
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            From historic cotton farming and creek-side homesteads to one of Arizona’s most sought-after family communities.
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
            Queen Creek, Arizona, nestled in the scenic foothills of the San Tan Mountains, boasts a deep agricultural heritage and a spirited Western identity. For hundreds of years before European settlement, the Akimel O’odham (Pima) people cultivated the rich alluvial soils along the creek wash, relying on desert river cycles to nourish their crops.
          </p>
          <p>
            The town takes its name from Queen Creek Canyon, which originates near the famed Silver Queen Mine in Superior. In the early 20th century, pioneering homesteaders recognized the vast agricultural potential of the valley floor. In 1919, homesteaders and early agriculturalists began planting cotton, alfalfa, citrus, and vegetables across the fertile plain.
          </p>
          <p>
            During the 1920s through the 1940s, the Ellsworth family established the Queen Creek Land & Cattle Company, introducing extensive cotton farming, potato processing, and dairy operations. The area grew into a close-knit rural community known as the Ellsworth community before adopting Queen Creek as its permanent identity.
          </p>
          <p>
            To guide their own economic destiny and safeguard their proud rural character, the residents of Queen Creek officially voted to incorporate on September 5, 1989. Over the subsequent decades, the town thoughtfully expanded its infrastructure, building top-rated schools, parks, and equestrian facilities while embracing its agricultural roots.
          </p>
          <p>
            Today, Queen Creek is recognized nationwide as one of Arizona’s most desirable, family-friendly towns. With beloved agritourism destinations like Schnepf Farms and the Queen Creek Olive Mill, picturesque parks, and thriving master-planned neighborhoods, Queen Creek offers a rich quality of life where heritage and modern living thrive side by side.
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
