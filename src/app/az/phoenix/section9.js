"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaMountain,
  FaSeedling,
  FaBicycle,
  FaLandmark,
  FaPalette,
  FaPaintBrush,
  FaUtensils,
  FaPaw,
  FaChild,
  FaSun,
  FaCocktail,
  FaPhoneAlt
} from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const attractions = [
  // Explore the Outdoors
  {
    category: "outdoors",
    icon: <FaMountain className="text-[#f99c00] text-2xl" />,
    title: "Camelback Mountain",
    description: "A challenging but rewarding hike with stunning views of the city and the Sonoran Desert skyline.",
    cta: "Book Your Move",
    action: "quote"
  },
  {
    category: "outdoors",
    icon: <FaSeedling className="text-emerald-600 text-2xl" />,
    title: "Desert Botanical Garden",
    description: "Explore a unique collection of desert flora, vibrant cacti species, and scenic trails nestled in Papago Park.",
    cta: "Call Us Now",
    action: "call"
  },
  {
    category: "outdoors",
    icon: <FaBicycle className="text-[#4096b1] text-2xl" />,
    title: "Papago Park",
    description: "Great for hiking, biking, and enjoying the desert landscape, featuring Hole-in-the-Rock and tranquil lagoon trails.",
    cta: "Get Free Quote",
    action: "quote"
  },

  // Arts, Culture & History
  {
    category: "culture",
    icon: <FaLandmark className="text-[#011234] text-2xl" />,
    title: "Heard Museum",
    description: "Discover Native American history, world-renowned tribal art exhibits, traditional jewelry, and rich cultural heritage.",
    cta: "Call Your Movers",
    action: "call"
  },
  {
    category: "culture",
    icon: <FaPalette className="text-purple-600 text-2xl" />,
    title: "Phoenix Art Museum",
    description: "Enjoy contemporary and classical art from around the world with comprehensive international galleries and fashion design exhibits.",
    cta: "Book Your Move",
    action: "quote"
  },
  {
    category: "culture",
    icon: <FaPaintBrush className="text-pink-600 text-2xl" />,
    title: "Roosevelt Row Arts District",
    description: "Immerse yourself in Phoenix’s vibrant street art scene, monthly First Friday art walks, craft breweries, and trendy indie cafes.",
    cta: "Call Us Now",
    action: "call"
  },
  {
    category: "culture",
    icon: <FaUtensils className="text-amber-700 text-2xl" />,
    title: "Heritage Square",
    description: "Explore historic homes, restored 19th-century Victorian architecture, and charming local eateries in the heart of downtown.",
    cta: "Get Free Quote",
    action: "quote"
  },

  // Family-Friendly Fun
  {
    category: "family",
    icon: <FaPaw className="text-emerald-700 text-2xl" />,
    title: "Phoenix Zoo",
    description: "A family-friendly destination featuring hundreds of animal species, immersive habitats, safari train rides, and splash zones.",
    cta: "Book Now",
    action: "quote"
  },
  {
    category: "family",
    icon: <FaChild className="text-[#f99c00] text-2xl" />,
    title: "Children’s Museum of Phoenix",
    description: "Hands-on fun for kids of all ages featuring over 300 interactive play experiences, climbing structures, and creative studios.",
    cta: "Call Your Movers",
    action: "call"
  },

  // Unique Experiences
  {
    category: "unique",
    icon: <FaSun className="text-amber-500 text-2xl" />,
    title: "Hot Air Balloon Rides",
    description: "Experience breathtaking views of the Sonoran Desert at sunrise with peaceful panoramic mountain horizons.",
    cta: "Book Your Move",
    action: "quote"
  },
  {
    category: "unique",
    icon: <FaCocktail className="text-[#011234] text-2xl" />,
    title: "Old Town Scottsdale",
    description: "Just minutes from Phoenix, offering excellent dining, nightlife, world-class art galleries, and high-end shopping.",
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
    <section className="w-full bg-white py-16" ref={ref} id="things-to-do-phoenix">
      <div className="container mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            Explore Your New City
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] capitalize">
            Fun Things to Do in Phoenix
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            After your move with the best Phoenix moving company, it’s time to explore the city’s many attractions.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {[
              { id: "all", label: "All Attractions (11)" },
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
