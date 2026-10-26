"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaWater,
  FaMountain,
  FaTree,
  FaSeedling,
  FaPalette,
  FaLandmark,
  FaTheaterMasks,
  FaFish,
  FaCubes,
  FaChild,
  FaStore,
  FaShoppingBag,
  FaLeaf,
  FaPhoneAlt
} from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const activities = [
  // Explore the Outdoors
  {
    category: "outdoors",
    icon: <FaWater className="text-[#4096b1] text-2xl" />,
    title: "Tempe Town Lake",
    description: "Enjoy kayaking, paddleboarding, rowing, or scenic waterfront strolls and sunset jogs along miles of paved shoreline trails.",
    cta: "Book Your Move",
    action: "quote"
  },
  {
    category: "outdoors",
    icon: <FaMountain className="text-[#f99c00] text-2xl" />,
    title: "Papago Park",
    description: "Stunning desert landscapes with easy hiking trails, Hole-in-the-Rock viewpoints, fishing lagoons, and dramatic red sandstone buttes.",
    cta: "Call Us Now",
    action: "call"
  },
  {
    category: "outdoors",
    icon: <FaTree className="text-emerald-600 text-2xl" />,
    title: "Kiwanis Park",
    description: "Expansive 125-acre family-friendly park with paved bike trails, picnic ramadas, an indoor wave pool, batting cages, and playgrounds.",
    cta: "Book Your Move",
    action: "quote"
  },
  {
    category: "outdoors",
    icon: <FaMountain className="text-amber-700 text-2xl" />,
    title: "Hayden Butte Preserve",
    description: "Hike the iconic 'A' Mountain trail right in downtown Tempe to experience panoramic 360-degree Valley views and ancient petroglyphs.",
    cta: "Call Your Movers",
    action: "call"
  },
  {
    category: "outdoors",
    icon: <FaSeedling className="text-emerald-700 text-2xl" />,
    title: "Desert Botanical Garden",
    description: "Explore 50,000+ stunning desert plants, world-class botanical trails, and seasonal art installations just minutes away.",
    cta: "Get Free Quote",
    action: "quote"
  },

  // Arts, Culture & History
  {
    category: "culture",
    icon: <FaPalette className="text-purple-600 text-2xl" />,
    title: "ASU Art Museum",
    description: "Engage with thought-provoking contemporary art collections, Latin American craft works, and innovative rotating university exhibitions.",
    cta: "Book Your Move",
    action: "quote"
  },
  {
    category: "culture",
    icon: <FaLandmark className="text-[#011234] text-2xl" />,
    title: "Tempe History Museum",
    description: "Learn about the city’s Hohokam origins, agricultural roots, Hayden's Ferry heritage, and community evolution through interactive galleries.",
    cta: "Call Us Now",
    action: "call"
  },
  {
    category: "culture",
    icon: <FaTheaterMasks className="text-[#f99c00] text-2xl" />,
    title: "Gammage Auditorium",
    description: "A legendary Frank Lloyd Wright-designed architectural masterpiece hosting premier Broadway tours, symphonies, and global concert performances.",
    cta: "Book Your Move",
    action: "quote"
  },

  // Family-Friendly Fun
  {
    category: "family",
    icon: <FaFish className="text-[#4096b1] text-2xl" />,
    title: "SEA LIFE Arizona Aquarium",
    description: "Interactive 26,000-square-foot aquarium with a 360-degree ocean walk-through tunnel, touch pools, sharks, rays, and rescued sea turtles.",
    cta: "Call Your Movers",
    action: "call"
  },
  {
    category: "family",
    icon: <FaCubes className="text-red-600 text-2xl" />,
    title: "Legoland Discovery Center",
    description: "The ultimate indoor Lego playground for kids, featuring interactive rides, 4D cinema experiences, and themed brick-building zones.",
    cta: "Book Now",
    action: "quote"
  },
  {
    category: "family",
    icon: <FaChild className="text-amber-500 text-2xl" />,
    title: "Tempe Beach Park",
    description: "Splash pads, expansive grass fields, and shaded riverside paths that host major food festivals, marathon finishes, and outdoor fun.",
    cta: "Get Free Quote",
    action: "quote"
  },

  // Unique Experiences
  {
    category: "unique",
    icon: <FaStore className="text-[#011234] text-2xl" />,
    title: "Downtown Tempe (Mill Avenue)",
    description: "Eclectic independent shops, vibrant restaurants, street performers, and an energetic nightlife scene in the walkable university core.",
    cta: "Call Us Now",
    action: "call"
  },
  {
    category: "unique",
    icon: <FaShoppingBag className="text-[#f99c00] text-2xl" />,
    title: "Tempe Marketplace",
    description: "Major open-air retail and entertainment center featuring outdoor fireplaces, live concert stages, laser light shows, and top dining spots.",
    cta: "Book Your Move",
    action: "quote"
  },
  {
    category: "unique",
    icon: <FaLeaf className="text-emerald-600 text-2xl" />,
    title: "Desert Arboretum Park",
    description: "Relax with a tranquil stroll through peaceful desert gardens, native trees, and tranquil waterways hidden in the ASU Research Park.",
    cta: "Call Your Movers",
    action: "call"
  }
];

const Section9 = () => {
  const [filter, setFilter] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const filtered = filter === "all" ? activities : activities.filter((a) => a.category === filter);

  return (
    <section className="w-full bg-white py-16" ref={ref} id="things-to-do-tempe">
      <div className="container mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            Explore Your New City
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] capitalize">
            Fun Things to Do in Tempe, AZ
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            After your move with the best Tempe moving company, take time to explore everything this dynamic city has to offer.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {[
              { id: "all", label: "All Attractions (14)" },
              { id: "outdoors", label: "Explore the Outdoors" },
              { id: "culture", label: "Arts, Culture & History" },
              { id: "family", label: "Family-Friendly Fun" },
              { id: "unique", label: "Unique Experiences" }
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
