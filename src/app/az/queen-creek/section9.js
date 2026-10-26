"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaMountain,
  FaWater,
  FaBicycle,
  FaSeedling,
  FaAppleAlt,
  FaHorse,
  FaGamepad,
  FaFutbol,
  FaChild,
  FaTheaterMasks,
  FaShoppingBag,
  FaPhoneAlt
} from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const attractions = [
  // Explore the Outdoors
  {
    category: "outdoors",
    icon: <FaMountain className="text-[#f99c00] text-2xl" />,
    title: "San Tan Mountain Regional Park",
    description: "Over 10,000 acres of preserved Sonoran Desert with rugged hiking trails, wildlife watching, and mountain summit vistas.",
    cta: "Book Your Move",
    action: "quote"
  },
  {
    category: "outdoors",
    icon: <FaWater className="text-[#4096b1] text-2xl" />,
    title: "Mansel Carter Oasis Park",
    description: "A 48-acre destination park featuring a 5-acre fishing lake, interactive splash pads, lighted sports courts, and picnic ramadas.",
    cta: "Call Us Now",
    action: "call"
  },
  {
    category: "outdoors",
    icon: <FaBicycle className="text-emerald-600 text-2xl" />,
    title: "Queen Creek Wash Trail",
    description: "Miles of paved multi-use trails perfect for equestrian horseback riding, morning cycling, and desert trail walking.",
    cta: "Get Free Quote",
    action: "quote"
  },

  // Agritourism & Heritage
  {
    category: "agritourism",
    icon: <FaSeedling className="text-emerald-700 text-2xl" />,
    title: "Queen Creek Olive Mill",
    description: "Arizona's only family-owned olive farm offering olive oil press tours, gourmet Italian tastings, and shaded grove dining.",
    cta: "Call Your Movers",
    action: "call"
  },
  {
    category: "agritourism",
    icon: <FaAppleAlt className="text-red-600 text-2xl" />,
    title: "Schnepf Farms",
    description: "Famed historic family farm offering u-pick organic produce, seasonal peach festivals, corn mazes, and miniature train rides.",
    cta: "Book Your Move",
    action: "quote"
  },
  {
    category: "agritourism",
    icon: <FaHorse className="text-amber-700 text-2xl" />,
    title: "Horseshoe Park & Equestrian Centre",
    description: "A 38-acre world-class equestrian arena hosting high-energy rodeos, English and Western horse shows, and livestock events.",
    cta: "Call Us Now",
    action: "call"
  },

  // Family-Friendly Fun
  {
    category: "family",
    icon: <FaGamepad className="text-[#f99c00] text-2xl" />,
    title: "Pecan Lake Entertainment",
    description: "High-energy adventure park boasting an indoor surf simulator, 18-hole putting golf course, ropes course, and arcade games.",
    cta: "Book Now",
    action: "quote"
  },
  {
    category: "family",
    icon: <FaFutbol className="text-emerald-600 text-2xl" />,
    title: "Barney Family Sports Complex",
    description: "State-of-the-art indoor sports facility featuring artificial turf fields, basketball courts, and adult and youth recreation leagues.",
    cta: "Call Your Movers",
    action: "call"
  },
  {
    category: "family",
    icon: <FaChild className="text-[#011234] text-2xl" />,
    title: "Founder's Park & Splash Pad",
    description: "Community hub with a skate park, ball diamonds, and a 4,000-square-foot splash park to cool down during sunny desert afternoons.",
    cta: "Get Free Quote",
    action: "quote"
  },

  // Unique Local Experiences
  {
    category: "unique",
    icon: <FaTheaterMasks className="text-purple-600 text-2xl" />,
    title: "Queen Creek Performing Arts Center",
    description: "777-seat cultural venue bringing Broadway touring shows, youth theater musicals, comedy, and classical concerts to town.",
    cta: "Book Your Move",
    action: "quote"
  },
  {
    category: "unique",
    icon: <FaShoppingBag className="text-[#011234] text-2xl" />,
    title: "Queen Creek Marketplace & Town Center",
    description: "Walkable shopping, dining, and open-air entertainment center with popular retail outlets, local cafes, and casual eateries.",
    cta: "Get Free Quote",
    action: "quote"
  }
];

const Section9 = () => {
  const [filter, setFilter] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const filtered = filter === "all" ? attractions : attractions.filter((a) => a.category === filter);

  return (
    <section className="w-full bg-white py-16" ref={ref} id="things-to-do-queen-creek">
      <div className="container mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            Explore Your New Hometown
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] capitalize">
            Fun Things to Do in Queen Creek, AZ
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            After a smooth, stress-free move with our Queen Creek moving experts, you’ll have plenty of time to enjoy all the beauty, farm-fresh agritourism, and recreation this town offers.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {[
              { id: "all", label: "All Attractions (11)" },
              { id: "outdoors", label: "Explore the Outdoors" },
              { id: "agritourism", label: "Agritourism & Heritage" },
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
