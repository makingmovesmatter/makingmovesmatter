"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaTree,
  FaBiking,
  FaTheaterMasks,
  FaLandmark,
  FaPalette,
  FaTrain,
  FaSkating,
  FaPaintBrush,
  FaStore,
  FaShoppingBag,
  FaPhoneAlt,
  FaCompass
} from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const activities = [
  // Outdoor Parks & Trails
  {
    category: "outdoors",
    icon: <FaTree className="text-emerald-600 text-2xl" />,
    title: "Veterans Oasis Park",
    description: "Enjoy scenic trails, wildlife viewing, fishing lake, and beautiful Sonoran desert landscapes.",
    cta: "Call Us Now",
    action: "call"
  },
  {
    category: "outdoors",
    icon: <FaTree className="text-[#f99c00] text-2xl" />,
    title: "Tumbleweed Park",
    description: "A large community park perfect for picnics, sports complexes, festivals, and family outings.",
    cta: "Call Your Movers",
    action: "call"
  },
  {
    category: "outdoors",
    icon: <FaBiking className="text-[#4096b1] text-2xl" />,
    title: "Chandler Paseo Trail",
    description: "Ideal for biking, walking, and jogging along a picturesque canal route through the heart of the city.",
    cta: "Book Now",
    action: "quote"
  },

  // Arts, Culture & History
  {
    category: "culture",
    icon: <FaTheaterMasks className="text-[#011234] text-2xl" />,
    title: "Chandler Center for the Arts",
    description: "A premier regional venue for Broadway theater performances, symphonies, world-class concerts, and art exhibitions.",
    cta: "Book Your Move",
    action: "quote"
  },
  {
    category: "culture",
    icon: <FaLandmark className="text-[#f99c00] text-2xl" />,
    title: "Chandler Museum",
    description: "Discover the city’s rich agricultural and tech innovation history through engaging interactive exhibits.",
    cta: "Call Us Now",
    action: "call"
  },
  {
    category: "culture",
    icon: <FaPalette className="text-purple-600 text-2xl" />,
    title: "Vision Gallery",
    description: "Explore inspiring contemporary works and seasonal exhibits from celebrated local and regional artists.",
    cta: "Get Free Quote",
    action: "quote"
  },

  // Family-Friendly Fun
  {
    category: "family",
    icon: <FaTrain className="text-red-600 text-2xl" />,
    title: "Arizona Railway Museum",
    description: "Learn about the history of railroads in the American Southwest with vintage trains and interactive displays.",
    cta: "Call Your Movers",
    action: "call"
  },
  {
    category: "family",
    icon: <FaSkating className="text-[#4096b1] text-2xl" />,
    title: "Ice Den Chandler",
    description: "Enjoy ice skating, youth hockey leagues, and family-friendly indoor recreation year-round.",
    cta: "Book Now",
    action: "quote"
  },
  {
    category: "family",
    icon: <FaPaintBrush className="text-[#f99c00] text-2xl" />,
    title: "Crayola Experience",
    description: "A colorful, vibrant, hands-on creative wonderland spanning 20,000 square feet of activities for kids and families.",
    cta: "Call Us Now",
    action: "call"
  },
  {
    category: "family",
    icon: <FaStore className="text-amber-600 text-2xl" />,
    title: "Downtown Chandler",
    description: "A historic, vibrant square filled with craft microbreweries, award-winning restaurants, local boutiques, and live music.",
    cta: "Book Your Move",
    action: "quote"
  },
  {
    category: "family",
    icon: <FaShoppingBag className="text-[#011234] text-2xl" />,
    title: "Chandler Fashion Center",
    description: "One of the premier retail and dining destinations in Arizona featuring top department stores and open-air promenades.",
    cta: "Get Free Quote",
    action: "quote"
  }
];

const Section9 = () => {
  const [filter, setFilter] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const filtered = filter === "all" ? activities : activities.filter((a) => a.category === filter);

  return (
    <section className="w-full bg-white py-16" ref={ref} id="things-to-do-chandler">
      <div className="container mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            Explore Your New City
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] capitalize">
            Fun Things to Do in Chandler, AZ
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            After your move with the best Chandler moving company, take some time to explore the city’s many attractions.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {[
              { id: "all", label: "All Attractions (11)" },
              { id: "outdoors", label: "Outdoor Parks & Trails" },
              { id: "culture", label: "Arts, Culture & History" },
              { id: "family", label: "Family-Friendly Fun" }
            ].map((btn) => (
              <button
                key={btn.id}
                type="button"
                onClick={() => setFilter(btn.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${filter === btn.id
                    ? "bg-[#f99c00] text-white shadow-sm"
                    : "bg-neutral-100 text-gray-700 hover:bg-neutral-200"
                  }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: idx * 0.05, ease: "easeOut" }}
              className="p-6 rounded-xl bg-neutral-50 border border-neutral-200 hover:border-[#f99c00] hover:bg-white transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-orange-50 border border-orange-100 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[var(--heading-text-color)] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 border-t border-neutral-200/80">
                {item.action === "call" ? (
                  <a
                    href="tel:4809348218"
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#011234] hover:text-[#f99c00] transition-colors"
                  >
                    <FaPhoneAlt className="text-[11px] text-[#f99c00]" />
                    {item.cta}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={openQuoteModal}
                    className="inline-flex items-center gap-2 text-xs font-bold text-[#f99c00] hover:text-[#e08b00] transition-colors cursor-pointer"
                  >
                    {item.cta} →
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Section9;
