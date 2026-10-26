"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaMountain,
  FaHiking,
  FaTree,
  FaGolfBall,
  FaSpa,
  FaShoppingBasket,
  FaGraduationCap,
  FaChild,
  FaSun,
  FaCompass,
  FaUtensils,
  FaPhoneAlt
} from "react-icons/fa";
import { openQuoteModal } from "../../components/QuoteButton";

const attractions = [
  // Explore the Outdoors
  {
    category: "outdoors",
    icon: <FaMountain className="text-[#f99c00] text-2xl" />,
    title: "San Tan Mountain Regional Park",
    description: "Over 10,000 acres of preserved Sonoran Desert trails, including Goldmine and Hedgehog Trails with panoramic valley summits.",
    cta: "Book Your Move",
    action: "quote"
  },
  {
    category: "outdoors",
    icon: <FaHiking className="text-emerald-600 text-2xl" />,
    title: "Poston Butte Trail & Monument",
    description: "A rewarding foothill hike leading to the pyramid monument of Charles Poston, offering 360-degree desert sunrise views.",
    cta: "Call Us Now",
    action: "call"
  },
  {
    category: "outdoors",
    icon: <FaTree className="text-[#4096b1] text-2xl" />,
    title: "Rock Peak Wash Trailhead",
    description: "Tranquil trail entrance winding through native saguaro forests, seasonal washes, and untouched Sonoran desert habitat.",
    cta: "Get Free Quote",
    action: "quote"
  },

  // Golf & Resort Living
  {
    category: "golf",
    icon: <FaGolfBall className="text-emerald-700 text-2xl" />,
    title: "The Golf Club at Johnson Ranch",
    description: "An 18-hole championship layout boasting front-nine desert vistas and back-nine mountain terrain challenges.",
    cta: "Call Your Movers",
    action: "call"
  },
  {
    category: "golf",
    icon: <FaSpa className="text-purple-600 text-2xl" />,
    title: "Encanterra Country Club & Spa",
    description: "Tom Lehman-designed championship golf course, Mediterranean-style clubhouse, tennis courts, and luxury wellness spa.",
    cta: "Book Your Move",
    action: "quote"
  },

  // Family-Friendly Fun
  {
    category: "family",
    icon: <FaShoppingBasket className="text-[#f99c00] text-2xl" />,
    title: "San Tan Valley Farmers Market",
    description: "Vibrant Saturday morning open-air market offering farm-fresh produce, artisanal baked goods, honey, and food trucks.",
    cta: "Call Us Now",
    action: "call"
  },
  {
    category: "family",
    icon: <FaGraduationCap className="text-[#011234] text-2xl" />,
    title: "CAC San Tan Campus Events",
    description: "Modern educational and community hub hosting family stargazing astronomy nights, arts programs, and youth workshops.",
    cta: "Book Now",
    action: "quote"
  },
  {
    category: "family",
    icon: <FaChild className="text-amber-600 text-2xl" />,
    title: "Copper Basin Community Park",
    description: "Expansive neighborhood park featuring children's playgrounds, lighted basketball courts, soccer fields, and picnic ramadas.",
    cta: "Call Your Movers",
    action: "call"
  },

  // Unique Local Experiences
  {
    category: "unique",
    icon: <FaSun className="text-amber-500 text-2xl" />,
    title: "Desert Sunrise Hot Air Ballooning",
    description: "Float peacefully over the San Tan and Superstition Mountain peaks at sunrise for unforgettable aerial desert panoramas.",
    cta: "Book Your Move",
    action: "quote"
  },
  {
    category: "unique",
    icon: <FaCompass className="text-[#011234] text-2xl" />,
    title: "Historic Territorial Florence Drives",
    description: "Located just south of San Tan Valley, explore preserved 19th-century adobe architecture, antique shops, and museums.",
    cta: "Get Free Quote",
    action: "quote"
  },
  {
    category: "unique",
    icon: <FaUtensils className="text-emerald-700 text-2xl" />,
    title: "Nearby Queen Creek Olive Mill",
    description: "Located just minutes north along Gary Road, enjoy artisanal olive oil tastings, gelato, and shaded orchard patio dining.",
    cta: "Book Your Move",
    action: "quote"
  }
];

const Section9 = () => {
  const [filter, setFilter] = useState("all");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  const filtered = filter === "all" ? attractions : attractions.filter((a) => a.category === filter);

  return (
    <section className="w-full bg-white py-16" ref={ref} id="things-to-do-san-tan-valley">
      <div className="container mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-50 border border-orange-200 text-[#f99c00] font-semibold text-xs tracking-wider uppercase mb-3">
            Explore Your New Hometown
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--heading-text-color)] capitalize">
            Fun Things to Do in San Tan Valley, AZ
          </h2>
          <p className="text-gray-600 text-base mt-3 max-w-none">
            After a stress-free move with our San Tan Valley movers, you’ll have plenty of time to enjoy all the scenic trails, championship golf, and family activities this community offers.
          </p>

          {/* Interactive Filter Pills */}
          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {[
              { id: "all", label: "All Attractions (11)" },
              { id: "outdoors", label: "Explore the Outdoors" },
              { id: "golf", label: "Golf & Resort Living" },
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
