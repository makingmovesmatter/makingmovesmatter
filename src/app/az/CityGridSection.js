"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaLocationDot,
  FaArrowRight,
  FaPhone,
  FaStar,
  FaTruck,
  FaBoxOpen,
  FaCheck
} from 'react-icons/fa6';
import { openQuoteModal } from '@/app/components/QuoteButton';

export const CITIES_DATA = [
  {
    name: "Mesa, AZ",
    slug: "/az/mesa",
    image: "/images/mesa-moving-branded.jpg",
    badge: "Company Headquarters",
    badgeColor: "bg-blue-600 text-white",
    region: "East Valley Core",
    distance: "0 miles (Mesa Hub)",
    tagline: "Our primary hub! Rapid dispatch, guaranteed flat-rate quotes, and full moving solutions across all Mesa districts.",
    highlights: ["Residential & Apartment Moves", "Commercial Office Moving", "Climate-Controlled Storage"],
    popularAreas: ["Eastmark", "Red Mountain", "Falcon Field", "Dobson Ranch"],
    phone: "(480) 934-8218"
  },
  {
    name: "Chandler, AZ",
    slug: "/az/chandler",
    image: "/images/chandler-moving-branded.jpg",
    badge: "Family & Tech Corridor",
    badgeColor: "bg-amber-600 text-white",
    region: "East Valley Core",
    distance: "12 miles from HQ",
    tagline: "Top-rated movers for single-family residences, master-planned communities, and modern tech corporate relocations.",
    highlights: ["Ocotillo & Fulton Ranch Specialist", "Commercial IT/Office Relocations", "Full Packing & Unpacking"],
    popularAreas: ["Ocotillo", "Sun Lakes", "Fulton Ranch", "Downtown Chandler"],
    phone: "(480) 934-8218"
  },
  {
    name: "Scottsdale, AZ",
    slug: "/az/scottsdale",
    image: "/images/scottsdale-moving-branded.jpg",
    badge: "White-Glove & Luxury",
    badgeColor: "bg-slate-900 text-white",
    region: "Scottsdale & Central",
    distance: "14 miles from HQ",
    tagline: "Premium white-glove relocation for luxury estates, custom architecture, fine art, grand pianos, and executive suites.",
    highlights: ["Luxury Estate Handling", "Grand Piano & Fine Art Crating", "DC Ranch & Silverleaf Moves"],
    popularAreas: ["DC Ranch", "Silverleaf", "Old Town", "Gainey Ranch"],
    phone: "(480) 934-8218"
  },
  {
    name: "Tempe, AZ",
    slug: "/az/tempe",
    image: "/images/tempe-moving-branded.jpg",
    badge: "Urban Condos & Families",
    badgeColor: "bg-red-700 text-white",
    region: "East Valley Core",
    distance: "8 miles from HQ",
    tagline: "Fast, punctual movers specialized in modern high-rises, multi-story apartments, townhomes, and South Tempe families.",
    highlights: ["Apartment & High-Rise Moves", "Retail & Commercial Space Moves", "Fast Schedule Availability"],
    popularAreas: ["Downtown Tempe", "South Tempe", "The Lakes", "ASU District"],
    phone: "(480) 934-8218"
  },
  {
    name: "Gilbert, AZ",
    slug: "/az/gilbert",
    image: "/images/gilbert-moving-branded.jpg",
    badge: "Family Neighborhood Specialist",
    badgeColor: "bg-emerald-700 text-white",
    region: "East Valley Core",
    distance: "10 miles from HQ",
    tagline: "Stress-free residential moving tailored for expanding families, delicate furniture protection, and seamless local transitions.",
    highlights: ["Agritopia & Morrison Ranch Moves", "Multi-Bedroom Family Homes", "Heavy Gun Safes & Pianos"],
    popularAreas: ["Morrison Ranch", "Agritopia", "Power Ranch", "Val Vista Lakes"],
    phone: "(480) 934-8218"
  },
  {
    name: "Phoenix, AZ",
    slug: "/az/phoenix",
    image: "/images/phoenix-moving-branded.jpg",
    badge: "Metropolitan Coverage",
    badgeColor: "bg-indigo-700 text-white",
    region: "Scottsdale & Central",
    distance: "18 miles from HQ",
    tagline: "Comprehensive valley-wide moving solutions across Central Phoenix, Arcadia, Biltmore, North Valley, and Ahwatukee.",
    highlights: ["Arcadia & Biltmore Specialists", "Commercial Building Relocations", "Statewide & Interstate Transport"],
    popularAreas: ["Arcadia", "Biltmore", "Downtown Phoenix", "Ahwatukee Foothills"],
    phone: "(480) 934-8218"
  },
  {
    name: "Queen Creek, AZ",
    slug: "/az/queen-creek",
    image: "/images/queen-creek-moving-branded.jpg",
    badge: "Ranch & Acreage Moves",
    badgeColor: "bg-amber-700 text-white",
    region: "Southeast Valley",
    distance: "18 miles from HQ",
    tagline: "Dependable, friendly moving crews experienced in custom desert properties, ranch homes, and new construction developments.",
    highlights: ["Custom Ranch & Acreage Properties", "Heavy Workshop & Patio Equipment", "New Construction Transitions"],
    popularAreas: ["Queen Creek Station", "Cortina", "Hastings Farms", "Montelena"],
    phone: "(480) 934-8218"
  },
  {
    name: "San Tan Valley, AZ",
    slug: "/az/san-tan-valley",
    image: "/images/san-tan-valley-moving-branded.jpg",
    badge: "Affordable Full-Service",
    badgeColor: "bg-teal-700 text-white",
    region: "Southeast Valley",
    distance: "24 miles from HQ",
    tagline: "Affordable, high-care local moving, professional packing, and labor services across Johnson Ranch and copper basin.",
    highlights: ["Single-Family Residential Moves", "Full Packing Supplies & Service", "Same-Week Schedule Openings"],
    popularAreas: ["Johnson Ranch", "San Tan Heights", "Copper Basin", "Skyline Ranch"],
    phone: "(480) 934-8218"
  }
];

const FILTER_TABS = [
  { id: "all", label: "All Valley Cities (8)" },
  { id: "East Valley Core", label: "East Valley Core (4)" },
  { id: "Scottsdale & Central", label: "Scottsdale & Phoenix (2)" },
  { id: "Southeast Valley", label: "Southeast Valley (2)" },
];

export default function CityGridSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredCities = activeFilter === "all"
    ? CITIES_DATA
    : CITIES_DATA.filter((city) => city.region === activeFilter);

  return (
    <section className="py-16 md:py-24 bg-white" id="service-areas-grid">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 bg-orange-100/80 text-[var(--accent-color)] border border-orange-200/80 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
            <FaLocationDot className="text-sm" /> 100% Phoenix East Valley Coverage
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-tight mb-4">
            Where We Move You Across Arizona
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            From our central Mesa headquarters to all surrounding cities, our dedicated full-time moving crews deliver guaranteed flat rates, punctual arrivals, and zero hidden fees.
          </p>
        </div>

        {/* Filter Navigation Tabs (High CTR) */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${activeFilter === tab.id
                  ? "bg-[var(--accent-color)] text-white shadow-sm scale-105"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 8 Branded City Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {filteredCities.map((city) => (
            <div
              key={city.slug}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200 flex flex-col justify-between hover:border-[var(--accent-color)] transition-all duration-300"
            >
              <div>
                {/* City Card Image Container with Branded Fleet Photo */}
                <div className="relative h-56 sm:h-52 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={city.image}
                    alt={`Making Moves Matter moving truck in ${city.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  {/* Subtle Top Badge */}
                  <div className="absolute top-3 left-3 z-10">
                    <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider bg-white/80`}>
                      {city.badge}
                    </span>
                  </div>

                  {/* Dark Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />

                  {/* City Name & Distance Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white drop-shadow-md">
                        {city.name}
                      </h3>
                      <span className="text-[11px] font-medium text-amber-300 block">
                        {city.distance}
                      </span>
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-white bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full border border-white/20">
                      <FaStar className="text-amber-400 text-[10px]" />
                      <span className="font-bold">4.9</span>
                    </div>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-5">
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    {city.tagline}
                  </p>

                  {/* Key Highlights Checklist */}
                  <div className="space-y-1.5 mb-4">
                    {city.highlights.map((h, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                        <FaCheck className="text-[var(--accent-color)] text-[10px] flex-shrink-0" />
                        <span className="truncate">{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Popular Neighborhoods Pill Tag */}
                  <div className="pt-2 border-t border-slate-100">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                      Neighborhoods Served:
                    </span>
                    <p className="text-[11px] text-slate-600 line-clamp-1">
                      {city.popularAreas.join(" • ")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons: High-CTR Dual CTAs */}
              <div className="p-5 pt-0 space-y-2">
                <Link
                  href={city.slug}
                  className="w-full py-2.5 px-4 rounded-xl bg-[var(--accent-color)] text-white text-xs font-bold flex items-center justify-center gap-2 transition-colors group-hover:bg-[var(--accent-color)]"
                >
                  <span>Explore {city.name} Movers</span>
                  <FaArrowRight className="text-[10px] group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="flex items-center gap-2">
                  <a
                    href="tel:4809348218"
                    className="flex-1 py-2 px-3 rounded-lg border border-slate-200 hover:border-[var(--accent-color)] text-slate-700 hover:text-[var(--accent-color)] text-[11px] font-bold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <FaPhone className="text-[10px] text-[var(--accent-color)]" />
                    <span>Call Dispatch</span>
                  </a>
                  <button
                    type="button"
                    onClick={openQuoteModal}
                    className="flex-1 py-2 px-3 rounded-lg bg-orange-50 hover:bg-orange-100 border border-orange-200 text-[var(--accent-color)] text-[11px] font-bold text-center cursor-pointer transition-colors"
                  >
                    Free Quote
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-slate-900 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-full bg-[var(--accent-color)] text-white flex items-center justify-center text-xl flex-shrink-0">
              <FaTruck />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Moving Between Arizona Cities or Across the State?
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-0.5">
                We handle inter-city moves across the Valley daily with guaranteed arrival windows and no double-booking.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              type="button"
              onClick={openQuoteModal}
              className="flex-1 sm:flex-none py-3 px-6 rounded-full bg-[var(--accent-color)] hover:opacity-95 text-white font-bold text-xs sm:text-sm uppercase tracking-wider cursor-pointer transition-all text-center whitespace-nowrap"
            >
              Get Free Estimate
            </button>
            <a
              href="tel:4809348218"
              className="flex-1 sm:flex-none py-3 px-6 rounded-full border border-white/30 hover:border-white text-white font-bold text-xs sm:text-sm text-center transition-colors whitespace-nowrap"
            >
              (480) 934-8218
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
