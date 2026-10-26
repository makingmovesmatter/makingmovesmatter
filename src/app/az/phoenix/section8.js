"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaWater, FaSeedling, FaTrain, FaLandmark, FaCity } from "react-icons/fa";

const milestones = [
  {
    era: "300 – 1450 AD",
    icon: <FaWater className="text-[#4096b1]" />,
    title: "Hohokam Canal Civilization",
    desc: "The Hohokam engineered an ancient canal network so advanced that modern civil engineers still use parts of it in Phoenix's current irrigation infrastructure."
  },
  {
    era: "1867",
    icon: <FaSeedling className="text-emerald-600" />,
    title: "Jack Swilling & Darrell Duppa",
    desc: "Swilling restored canal irrigation in the Salt River Valley. Pioneer Darrell Duppa suggested 'Phoenix,' symbolizing rebirth from ancient ashes like the mythical bird."
  },
  {
    era: "1881 – 1887",
    icon: <FaTrain className="text-[#f99c00]" />,
    title: "Incorporation & Railroad Era",
    desc: "Phoenix officially incorporated in 1881. The 1887 arrival of the Southern Pacific Railroad opened nationwide markets for cotton, citrus, and cattle."
  },
  {
    era: "1911 – 1912",
    icon: <FaLandmark className="text-[#011234]" />,
    title: "Roosevelt Dam & State Capital",
    desc: "Completion of the Roosevelt Dam in 1911 secured reliable desert water. In 1912, Arizona gained statehood and Phoenix became the permanent capital."
  },
  {
    era: "Today",
    icon: <FaCity className="text-[#f99c00]" />,
    title: "5th-Largest US Metropolis",
    desc: "With 300+ days of annual sunshine, Phoenix has evolved into a premier national hub for technology, business, culture, and thriving residential communities."
  }
];

const Section8 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section className="w-full bg-neutral-50 py-16 border-y border-neutral-200" ref={ref} id="phoenix-history">
      <div className="container mx-auto px-5">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/70 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            Heritage & Desert Roots
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] capitalize">
            A Rich History of Phoenix, AZ
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            From ancient Hohokam canals and pioneer rebirth to America’s fifth-largest vibrant metropolis.
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
            Phoenix, the capital of Arizona, boasts a deep and fascinating history. The region was initially home to the Hohokam people, an innovative civilization that thrived between 300 and 1450 AD. They built an extensive canal system to irrigate the dry desert landscape, a system so advanced that modern engineers have incorporated parts of it into Phoenix’s current irrigation network.
          </p>
          <p>
            After the Hohokam mysteriously abandoned the area, the land remained largely uninhabited until the mid-19th century. In 1867, Jack Swilling, a former Confederate soldier, saw the potential for agriculture in the Salt River Valley. Inspired by the ancient canal system, he worked to bring water back to the region, creating a foundation for modern farming.
          </p>
          <p>
            The settlement, initially called Swilling’s Mill, was later renamed Phoenix. The name, suggested by pioneer Darrell Duppa, symbolized the city’s rise from the ashes of the ancient Hohokam civilization, much like the mythical phoenix bird.
          </p>
          <p>
            Phoenix officially became a city in 1881, and its growth accelerated with the arrival of the Southern Pacific Railroad in 1887, connecting the city to national markets. Agriculture, including cotton, citrus, and cattle, drove the local economy during the early years.
          </p>
          <p>
            In 1912, when Arizona achieved statehood, Phoenix was designated the state capital. The construction of the Roosevelt Dam in 1911, which controlled the Salt River and provided a reliable water supply, further fueled the city’s development.
          </p>
          <p>
            During and after World War II, Phoenix transformed into an industrial hub. Military bases, aircraft manufacturing plants, and the post-war economic boom attracted thousands of new residents. The city grew rapidly, transitioning from a modest agricultural town to a sprawling metropolitan area.
          </p>
          <p>
            Today, Phoenix is the fifth-largest city in the United States and a hub for technology, business, and culture. Known for its desert beauty, warm climate, and vibrant community, it continues to attract families, businesses, and tourists alike. With over 300 days of sunshine each year, Phoenix is a welcoming place to call home.
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
