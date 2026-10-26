"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaMountain,
  FaTree,
  FaBug,
  FaPalette,
  FaLandmark,
  FaStore,
  FaFish,
  FaTrain,
  FaDragon,
  FaDraftingCompass,
  FaShoppingBag,
  FaSun,
  FaPhoneAlt
} from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const activities = [
  // Explore the Outdoors
  {
    category: "outdoors",
    icon: <FaTree className="text-emerald-600 text-2xl" />,
    title: "McDowell Sonoran Preserve",
    description: "Hike or bike through over 30,000 acres of stunning protected desert landscapes and scenic mountain vistas.",
    cta: "Book Your Move",
    action: "quote"
  },
  {
    category: "outdoors",
    icon: <FaMountain className="text-[#f99c00] text-2xl" />,
    title: "Camelback Mountain",
    description: "A challenging and iconic hike rewarding adventurers with breathtaking 360-degree panoramic views of the entire Valley.",
    cta: "Call Us Now",
    action: "call"
  },
  {
    category: "outdoors",
    icon: <FaBug className="text-[#4096b1] text-2xl" />,
    title: "Butterfly Wonderland",
    description: "Experience North America’s largest indoor butterfly pavilion featuring thousands of freely fluttering tropical butterflies.",
    cta: "Get Free Quote",
    action: "quote"
  },

  // Arts, Culture & History
  {
    category: "culture",
    icon: <FaPalette className="text-purple-600 text-2xl" />,
    title: "Scottsdale Museum of Contemporary Art (SMoCA)",
    description: "Enjoy cutting-edge modern art, visionary design showcases, and thought-provoking international architecture exhibits.",
    cta: "Book Your Move",
    action: "quote"
  },
  {
    category: "culture",
    icon: <FaLandmark className="text-[#011234] text-2xl" />,
    title: "Western Spirit: Scottsdale’s Museum of the West",
    description: "Explore the rich history, legendary artwork, and living culture of the 19 states of the American West.",
    cta: "Call Your Movers",
    action: "call"
  },
  {
    category: "culture",
    icon: <FaStore className="text-amber-600 text-2xl" />,
    title: "Old Town Scottsdale",
    description: "Discover world-class art galleries, boutique souvenir shops, historic saloons, and award-winning dining in this historic district.",
    cta: "Call Us Now",
    action: "call"
  },

  // Family-Friendly Fun
  {
    category: "family",
    icon: <FaFish className="text-[#4096b1] text-2xl" />,
    title: "OdySea Aquarium",
    description: "A state-of-the-art aquarium featuring interactive touch pools, underwater tunnels, penguins, and marine life exhibits.",
    cta: "Book Now",
    action: "quote"
  },
  {
    category: "family",
    icon: <FaTrain className="text-red-600 text-2xl" />,
    title: "McCormick-Stillman Railroad Park",
    description: "A fun family destination with miniature train rides, historic locomotives, carousel rides, and expansive shaded playgrounds.",
    cta: "Call Your Movers",
    action: "call"
  },
  {
    category: "family",
    icon: <FaDragon className="text-emerald-700 text-2xl" />,
    title: "Arizona Boardwalk",
    description: "Home to exciting entertainment attractions like Pangaea: Land of the Dinosaurs, Laser + Mirror Maze, and waterfront dining.",
    cta: "Get Free Quote",
    action: "quote"
  },

  // Unique Experiences
  {
    category: "unique",
    icon: <FaDraftingCompass className="text-[#f99c00] text-2xl" />,
    title: "Taliesin West",
    description: "Visit Frank Lloyd Wright’s legendary desert masterpiece, UNESCO World Heritage site, and former winter home and architectural laboratory.",
    cta: "Book Your Move",
    action: "quote"
  },
  {
    category: "unique",
    icon: <FaShoppingBag className="text-[#011234] text-2xl" />,
    title: "Scottsdale Fashion Square",
    description: "Shop premier luxury brands, upscale department stores, and dine at celebrated destination restaurants in the Southwest’s largest luxury mall.",
    cta: "Call Us Now",
    action: "call"
  },
  {
    category: "unique",
    icon: <FaSun className="text-amber-500 text-2xl" />,
    title: "Hot Air Balloon Rides",
    description: "Enjoy breathtaking, unforgettable sunrise views floating gracefully above the majestic Sonoran Desert landscape.",
    cta: "Book Your Move",
    action: "quote"
  }
];

const Section9 = () => {
  const [filter, setFilter] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const filtered = filter === "all" ? activities : activities.filter((a) => a.category === filter);

  return (
    <section className="w-full bg-white py-16" ref={ref} id="things-to-do-scottsdale">
      <div className="container mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            Explore Your New City
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] capitalize">
            Fun Things to Do in Scottsdale, AZ
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            After your move with the best Scottsdale moving company, explore everything this vibrant city has to offer.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {[
              { id: "all", label: "All Attractions (12)" },
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
