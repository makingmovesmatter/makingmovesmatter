"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaWater,
  FaTree,
  FaChild,
  FaLandmark,
  FaTheaterMasks,
  FaStore,
  FaGolfBall,
  FaBaseballBall,
  FaGamepad,
  FaSeedling,
  FaShoppingBasket,
  FaPalette,
  FaPhoneAlt
} from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const activities = [
  // Explore the Outdoors
  {
    category: "outdoors",
    icon: <FaWater className="text-[#4096b1] text-2xl" />,
    title: "Riparian Preserve at Water Ranch",
    description: "Peaceful walking trails, 300+ species of migratory birds, fishing lake, and untouched Sonoran desert natural beauty.",
    cta: "Book Your Move",
    action: "quote"
  },
  {
    category: "outdoors",
    icon: <FaTree className="text-emerald-600 text-2xl" />,
    title: "Freestone Park",
    description: "Great for family picnics, lake fishing, miniature train rides, batting cages, tennis courts, and a community skate park.",
    cta: "Call Us Now",
    action: "call"
  },
  {
    category: "outdoors",
    icon: <FaChild className="text-[#f99c00] text-2xl" />,
    title: "Gilbert Regional Park",
    description: "Massive destination park featuring interactive playgrounds, splash pads, pickleball courts, and walking trails for all ages.",
    cta: "Get Free Quote",
    action: "quote"
  },

  // Arts, Culture & History
  {
    category: "culture",
    icon: <FaLandmark className="text-[#011234] text-2xl" />,
    title: "Gilbert Historical Museum",
    description: "Dive into local Gilbert history and agricultural roots in HD SOUTH, housed inside the historic 1913 Gilbert elementary school.",
    cta: "Call Your Movers",
    action: "call"
  },
  {
    category: "culture",
    icon: <FaTheaterMasks className="text-purple-600 text-2xl" />,
    title: "Hale Centre Theatre",
    description: "Top-notch live theater performances, Broadway-caliber musicals, and family comedies in an intimate theater-in-the-round venue.",
    cta: "Book Your Move",
    action: "quote"
  },
  {
    category: "culture",
    icon: <FaStore className="text-amber-700 text-2xl" />,
    title: "Downtown Gilbert (Heritage District)",
    description: "Celebrated dining, seasonal street festivals, historic water tower landmark, and vibrant local culinary culture in one walkable hub.",
    cta: "Call Us Now",
    action: "call"
  },

  // Family-Friendly Fun
  {
    category: "family",
    icon: <FaGolfBall className="text-emerald-700 text-2xl" />,
    title: "Topgolf Gilbert",
    description: "High-tech driving range bays, interactive climate-controlled golf games, sports lounge, and entertainment for all skill levels.",
    cta: "Book Now",
    action: "quote"
  },
  {
    category: "family",
    icon: <FaBaseballBall className="text-[#f99c00] text-2xl" />,
    title: "Discovery Park",
    description: "A favorite destination for sports lovers and kids featuring baseball diamonds, basketball courts, multi-use fields, and playgrounds.",
    cta: "Call Your Movers",
    action: "call"
  },
  {
    category: "family",
    icon: <FaGamepad className="text-red-600 text-2xl" />,
    title: "Main Event Gilbert",
    description: "Energetic family entertainment center packed with state-of-the-art bowling lanes, multi-level laser tag, and modern arcade games.",
    cta: "Get Free Quote",
    action: "quote"
  },

  // Unique Local Experiences
  {
    category: "unique",
    icon: <FaSeedling className="text-emerald-600 text-2xl" />,
    title: "Agritopia",
    description: "A nationally acclaimed planned community with an organic certified farm, farm-to-table dining, and charming artisan shops.",
    cta: "Book Your Move",
    action: "quote"
  },
  {
    category: "unique",
    icon: <FaShoppingBasket className="text-[#f99c00] text-2xl" />,
    title: "Gilbert Farmers Market",
    description: "Fresh local produce, grass-fed meats, artisan baked goods, and handmade crafts held every Saturday in the Heritage District.",
    cta: "Call Us Now",
    action: "call"
  },
  {
    category: "unique",
    icon: <FaPalette className="text-purple-600 text-2xl" />,
    title: "Gilbert Art Walk",
    description: "Seasonal showcases of local art, fine jewelry, live music, and handcrafted creativity celebrating Arizona's artist community.",
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
    <section className="w-full bg-white py-16" ref={ref} id="things-to-do-gilbert">
      <div className="container mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            Explore Your New City
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] capitalize">
            Fun Things to Do in Gilbert, AZ
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            After a stress-free move with our Gilbert movers, you’ll have plenty of time to enjoy all the fun and beauty this town offers.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {[
              { id: "all", label: "All Attractions (12)" },
              { id: "outdoors", label: "Explore the Outdoors" },
              { id: "culture", label: "Arts, Culture & History" },
              { id: "family", label: "Family-Friendly Fun" },
              { id: "unique", label: "Unique Local Experiences" }
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
