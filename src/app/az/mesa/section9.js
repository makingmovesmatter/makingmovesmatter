"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaHiking, FaWater, FaTree, FaChild, FaSwimmer, FaStore, FaMountain, FaCompass } from "react-icons/fa";

const activities = [
  {
    category: "outdoors",
    icon: <FaHiking className="text-[#f99c00] text-3xl" />,
    title: "Usery Mountain Regional Park",
    description: "Enjoy hiking, camping, and stunning desert views along miles of scenic scenic desert trails."
  },
  {
    category: "outdoors",
    icon: <FaWater className="text-[#4096b1] text-3xl" />,
    title: "Salt River Tubing",
    description: "Float down the scenic Salt River for a fun and refreshing experience surrounded by wild horses and desert peaks."
  },
  {
    category: "outdoors",
    icon: <FaTree className="text-emerald-600 text-3xl" />,
    title: "Riverview Park",
    description: "A family-friendly park with playgrounds, community fishing ponds, and tree-lined walking trails."
  },
  {
    category: "family",
    icon: <FaChild className="text-[#f99c00] text-3xl" />,
    title: "i.d.e.a. Museum",
    description: "Interactive exhibits for children to explore art, science, and technology through hands-on creative play."
  },
  {
    category: "family",
    icon: <FaSwimmer className="text-[#4096b1] text-3xl" />,
    title: "Golfland Sunsplash",
    description: "A popular premier water park and family entertainment center featuring giant water slides and mini-golf."
  },
  {
    category: "unique",
    icon: <FaStore className="text-amber-600 text-3xl" />,
    title: "Downtown Mesa",
    description: "Enjoy charming shops, local eateries, cultural galleries, and vibrant street art in the historic center."
  },
  {
    category: "unique",
    icon: <FaMountain className="text-[#011234] text-3xl" />,
    title: "Superstition Mountains",
    description: "Explore the legendary Lost Dutchman’s Gold Mine, dramatic canyon vistas, and iconic hiking trails."
  }
];

const Section9 = () => {
  const [filter, setFilter] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const filtered = filter === "all" ? activities : activities.filter((a) => a.category === filter);

  return (
    <section className="w-full bg-white py-16" ref={ref} id="things-to-do-mesa">
      <div className="container mx-auto px-5">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            Explore Your New City
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[var(--heading-text-color)] capitalize">
            Fun Things to Do in Mesa, AZ
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            After your move with the best Mesa moving company, it’s time to explore all that this dynamic city has to offer.
          </p>

          {/* Interactive Category Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {[
              { id: "all", label: "All Attractions" },
              { id: "outdoors", label: "Explore the Outdoors" },
              { id: "family", label: "Family-Friendly Fun" },
              { id: "unique", label: "Unique Experiences" }
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 border cursor-pointer ${
                  filter === btn.id
                    ? "bg-[#011234] text-white border-[#011234]"
                    : "bg-white text-gray-700 border-neutral-200 hover:border-gray-400"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
              className="bg-neutral-50/80 rounded-xl border border-neutral-200 p-6 flex items-start gap-4 hover:border-[#f99c00] transition-colors duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-white border border-neutral-200 flex items-center justify-center flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#f99c00]">
                  {item.category === "outdoors" ? "Outdoors" : item.category === "family" ? "Family Fun" : "Unique Experience"}
                </span>
                <h3 className="text-lg font-bold text-[var(--heading-text-color)] mt-0.5 mb-1.5">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section9;
