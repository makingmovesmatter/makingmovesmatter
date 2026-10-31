"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  FaPhoneAlt,
  FaChevronDown,
  FaBars,
  FaTimes,
  FaTruck,
  FaBoxOpen,
  FaHome,
  FaBuilding,
  FaWarehouse,
  FaDollyFlatbed,
  FaHotTub,
  FaCouch,
  FaMapMarkerAlt,
  FaWrench,
  FaArrowRight,
  FaShieldAlt,
  FaStar
} from "react-icons/fa";
import { openQuoteModal } from "./QuoteButton";

const servicesList = [
  { name: "Commercial Services", href: "/services/commercial-services", icon: <FaBuilding className="text-[#f99c00] text-xs flex-shrink-0" /> },
  { name: "Furniture Assembly", href: "/services/furniture-assembly", icon: <FaWrench className="text-[#f99c00] text-xs flex-shrink-0" /> },
  { name: "Furniture Moving", href: "/services/furniture-moving", icon: <FaCouch className="text-[#f99c00] text-xs flex-shrink-0" /> },
  { name: "Large and Heavy Item Moving", href: "/services/large-and-heavy-item-moving", icon: <FaDollyFlatbed className="text-[#f99c00] text-xs flex-shrink-0" /> },
  { name: "Hot Tub Relocation", href: "/services/hot-tub-relocation", icon: <FaHotTub className="text-[#f99c00] text-xs flex-shrink-0" /> },
  { name: "Long Distance Moving", href: "/services/long-distance-moving", icon: <FaTruck className="text-[#f99c00] text-xs flex-shrink-0" /> },
  { name: "Local Moving", href: "/services/local-moving", icon: <FaHome className="text-[#f99c00] text-xs flex-shrink-0" /> },
  { name: "Packing And Unpacking Services", href: "/services/packing-and-unpacking-services", icon: <FaBoxOpen className="text-[#f99c00] text-xs flex-shrink-0" /> },
  { name: "Storage", href: "/services/storage", icon: <FaWarehouse className="text-[#f99c00] text-xs flex-shrink-0" /> },
];

const serviceAreasList = [
  { name: "Mesa, AZ", href: "/az/mesa" },
  { name: "Chandler, AZ", href: "/az/chandler" },
  { name: "Scottsdale, AZ", href: "/az/scottsdale" },
  { name: "Tempe, AZ", href: "/az/tempe" },
  { name: "Gilbert, AZ", href: "/az/gilbert" },
  { name: "Phoenix, AZ", href: "/az/phoenix" },
  { name: "Queen Creek, AZ", href: "/az/queen-creek" },
  { name: "San Tan Valley, AZ", href: "/az/san-tan-valley" }
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const navRef = useRef(null);
  const timeoutRef = useRef(null);

  // Lock background scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  // Handle outside clicks to close dropdowns
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const handleMouseEnter = (menu) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 180);
  };

  const toggleMobileAccordion = (menu) => {
    setMobileAccordion(mobileAccordion === menu ? null : menu);
  };

  const closeMobileMenu = () => {
    setIsMobileOpen(false);
    setMobileAccordion(null);
  };

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 font-sans" ref={navRef}>
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-22 gap-4">

          {/* ================= 1. BRAND LOGO (LEFT) ================= */}
          <Link
            href="/"
            className="flex-shrink-0 flex items-center py-2"
            onClick={() => setActiveDropdown(null)}
          >
            <img
              src="/images/image.png"
              alt="Making Moves Matter Logo"
              className="h-15 sm:h-20 lg:h-20 w-auto object-contain"
              width={160}
              height={48}
              loading="eager"
            />
          </Link>

          {/* ================= 2. NAVIGATION LINKS (CENTER) ================= */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-8">

            {/* Services Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`text-[15px] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${activeDropdown === "services" ? "text-[#f99c00]" : "text-gray-800 hover:text-[#f99c00]"
                  }`}
                onClick={() => setActiveDropdown(activeDropdown === "services" ? null : "services")}
                aria-expanded={activeDropdown === "services"}
              >
                <span>Services</span>
                <FaChevronDown className={`text-[10px] transition-transform duration-200 ${activeDropdown === "services" ? "rotate-180 text-[#f99c00]" : "text-gray-500"
                  }`} />
              </button>

              {activeDropdown === "services" && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50"
                  onMouseEnter={() => handleMouseEnter("services")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-[430px] bg-white border border-gray-200 rounded-2xl p-5">
                    <div className="grid grid-cols-2 gap-1">
                      {servicesList.map((srv, idx) => (
                        <Link
                          key={idx}
                          href={srv.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center gap-2 px-3 py-3 text-xs font-medium text-gray-700 hover:text-[#f99c00] hover:bg-orange-50/60 rounded-lg transition-colors"
                        >
                          {srv.icon}
                          <span className="truncate">{srv.name}</span>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-2.5 pt-2.5 border-t border-gray-100 flex items-center justify-between px-2">
                      <Link
                        href="/services"
                        onClick={() => setActiveDropdown(null)}
                        className="text-xs font-bold text-[#f99c00] hover:text-[#e08b00] flex items-center gap-1 transition-colors"
                      >
                        <span>View All Services</span>
                        <FaArrowRight className="text-[10px]" />
                      </Link>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveDropdown(null);
                          openQuoteModal();
                        }}
                        className="text-[11px] font-bold text-gray-700 hover:text-[#f99c00] cursor-pointer"
                      >
                        Get Moving Quote →
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Service Areas Dropdown */}
            <div
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter("areas")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                type="button"
                className={`text-[15px] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${activeDropdown === "areas" ? "text-[#f99c00]" : "text-gray-800 hover:text-[#f99c00]"
                  }`}
                onClick={() => setActiveDropdown(activeDropdown === "areas" ? null : "areas")}
                aria-expanded={activeDropdown === "areas"}
              >
                <span>Locations</span>
                <FaChevronDown className={`text-[10px] transition-transform duration-200 ${activeDropdown === "areas" ? "rotate-180 text-[#f99c00]" : "text-gray-500"
                  }`} />
              </button>

              {/* Service Areas Dropdown Menu */}
              {activeDropdown === "areas" && (
                <div
                  className="absolute left-1/2 -translate-x-1/2 top-full pt-2 z-50"
                  onMouseEnter={() => handleMouseEnter("areas")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="w-[320px] bg-white border border-gray-200 rounded-2xl p-3.5">
          
                    <div className="grid grid-cols-2 gap-1">
                      {serviceAreasList.map((area, idx) => (
                        <Link
                          key={idx}
                          href={area.href}
                          onClick={() => setActiveDropdown(null)}
                          className="flex items-center gap-1.5 px-3 py-3 text-xs font-medium text-gray-700 hover:text-[#f99c00] hover:bg-orange-50/60 rounded-lg transition-colors"
                        >
                          <FaMapMarkerAlt className="text-[#f99c00] text-[11px] flex-shrink-0" />
                          <span className="truncate">{area.name}</span>
                        </Link>
                      ))}
                    </div>

                    <div className="mt-2.5 pt-2.5 border-t border-gray-100 px-2 text-center">
                      <Link
                        href="/az"
                        onClick={() => setActiveDropdown(null)}
                        className="text-xs font-bold text-[#f99c00] hover:text-[#e08b00] flex items-center justify-center gap-1 transition-colors"
                      >
                        <span>All Arizona Locations</span>
                        <FaArrowRight className="text-[10px]" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/about-us"
              className="text-[15px] font-semibold text-gray-800 hover:text-[#f99c00] transition-colors py-2"
            >
              About Us
            </Link>

            <Link
              href="/reviews"
              className="text-[15px] font-semibold text-gray-800 hover:text-[#f99c00] transition-colors py-2"
            >
              Reviews
            </Link>

            <Link
              href="/contact-us"
              className="text-[15px] font-semibold text-gray-800 hover:text-[#f99c00] transition-colors py-2"
            >
              Contact Us
            </Link>

          </div>


          <div className="hidden lg:flex items-center gap-5 xl:gap-7 flex-shrink-0">

            {/* Call Support 24/7 with Circular Gold Badge (Exact Reference Style) */}
            <a
              href="tel:4809348218"
              className="flex items-center gap-3 group"
              title="Call Making Moves Matter support 24/7"
            >
              {/* Circular Yellow/Gold Icon Badge */}
              <div className="w-11 h-11 xl:w-12 xl:h-12 rounded-full bg-[var(--accent-color)] text-white flex items-center justify-center text-lg xl:text-xl transition-transform group-hover:scale-105 flex-shrink-0">
                <FaPhoneAlt />
              </div>

              {/* Stacked Call Support Text */}
              <div className="text-left">
                <span className="block text-xs text-gray-500 font-medium leading-tight">
                  Call support 24/7
                </span>
                <span className="block text-[15px] xl:text-base font-bold text-[var(--accent-color)] font-sans tracking-tight leading-tight group-hover:opacity-85 transition-colors">
                  (480) 934-8218
                </span>
              </div>
            </a>


            <button
              type="button"
              onClick={openQuoteModal}
              className="px-6 xl:px-7 py-3 xl:py-3.5 rounded-full bg-[var(--accent-color)] hover:opacity-95 active:scale-[0.98] text-white font-semibold text-xs xl:text-sm tracking-wider uppercase transition-all cursor-pointer flex-shrink-0"
            >
              GET A QUOTE
            </button>

          </div>

          {/* ================= 4. MOBILE / TABLET CONTROLS (< 1024px) ================= */}
          <div className="flex lg:hidden items-center gap-2.5">

            {/* Quick Call Icon (Circular Gold Badge) */}
            <a
              href="tel:4809348218"
              className="w-12 h-12 rounded-full bg-[var(--accent-color)] text-white flex items-center justify-center text-base active:scale-95 transition-transform"
              aria-label="Call (480) 934-8218"
            >
              <FaPhoneAlt />
            </a>

            {/* Mobile Rounded Pill "GET A QUOTE" CTA */}
            <button
              type="button"
              onClick={openQuoteModal}
              className="px-5 py-3.5 rounded-full bg-[var(--accent-color)] hover:opacity-95 text-white text-xs font-semibold uppercase tracking-wider cursor-pointer active:scale-95 transition-all"
            >
              GET A QUOTE
            </button>

            {/* Hamburger Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white text-gray-800 flex items-center justify-center text-base cursor-pointer hover:bg-gray-50 active:bg-gray-100 transition-colors"
              aria-label="Open navigation menu"
            >
              <FaBars />
            </button>

          </div>

        </div>
      </div>

      {/* ================= 5. MOBILE DRAWER (CLEAN, FLAT, BEST RESPONSIVE) ================= */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 flex justify-end lg:hidden">

          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] transition-opacity"
            onClick={closeMobileMenu}
          />

          {/* Slide-over Drawer Panel */}
          <div className="relative w-full max-w-sm bg-white h-full border-l border-gray-200 flex flex-col justify-between overflow-y-auto z-10">

            <div>
              {/* Drawer Header */}
              <div className="p-4 border-b border-gray-100 flex items-center justify-between">
                <Link href="/" onClick={closeMobileMenu}>
                  <img
                    src="/images/image.png"
                    alt="Making Moves Matter"
                    className="h-15 w-auto object-contain"
                    width={130}
                    height={36}
                  />
                </Link>
                <button
                  type="button"
                  onClick={closeMobileMenu}
                  className="w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center text-sm cursor-pointer transition-colors"
                  aria-label="Close menu"
                >
                  <FaTimes />
                </button>
              </div>

              {/* Support Call Banner (Matching Yellow Headset Circle) */}
              <div className="p-3 bg-orange-50/40 border-b border-gray-100">
                <a
                  href="tel:4809348218"
                  className="flex items-center justify-between p-3 rounded-xl bg-white border border-orange-200/80 hover:border-[#f99c00] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--accent-color)] text-white flex items-center justify-center text-base flex-shrink-0">
                      <FaPhoneAlt />
                    </div>
                    <div>
                      <span className="block text-[11px] font-medium text-gray-500">
                        Call support 24/7
                      </span>
                      <span className="block font-bold text-sm text-[var(--accent-color)] font-sans tracking-tight">
                        (480) 934-8218
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-white bg-[var(--accent-color)] px-3 py-1 rounded-full uppercase tracking-wider text-[10px]">
                    Call
                  </span>
                </a>
              </div>

              {/* Navigation Links */}
              <div className="p-3 space-y-1">


                {/* Moving Services Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => toggleMobileAccordion("services")}
                    className="w-full px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 flex items-center justify-between hover:bg-orange-50/50 hover:text-[#f99c00] transition-colors cursor-pointer"
                  >
                    <span>Services</span>
                    <FaChevronDown className={`text-xs text-gray-500 transition-transform duration-200 ${mobileAccordion === "services" ? "rotate-180 text-[#f99c00]" : ""
                      }`} />
                  </button>

                  {mobileAccordion === "services" && (
                    <div className="pl-3 pr-2 py-1.5 space-y-1 bg-gray-50/80 rounded-xl my-1 border border-gray-100">
                      {servicesList.map((srv, idx) => (
                        <Link
                          key={idx}
                          href={srv.href}
                          onClick={closeMobileMenu}
                          className="flex items-center gap-2 py-2 px-2 text-xs font-medium text-gray-700 hover:text-[#f99c00] transition-colors"
                        >
                          {srv.icon}
                          <span>{srv.name}</span>
                        </Link>
                      ))}
                      <div className="pt-1.5 border-t border-gray-200/60 mt-1">
                        <Link
                          href="/services"
                          onClick={closeMobileMenu}
                          className="block text-xs font-bold text-[#f99c00] px-2 py-1"
                        >
                          View All Moving Services →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                {/* Service Areas Accordion */}
                <div>
                  <button
                    type="button"
                    onClick={() => toggleMobileAccordion("areas")}
                    className="w-full px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 flex items-center justify-between hover:bg-orange-50/50 hover:text-[#f99c00] transition-colors cursor-pointer"
                  >
                    <span>Locations</span>
                    <FaChevronDown className={`text-xs text-gray-500 transition-transform duration-200 ${mobileAccordion === "areas" ? "rotate-180 text-[#f99c00]" : ""
                      }`} />
                  </button>

                  {mobileAccordion === "areas" && (
                    <div className="pl-3 pr-2 py-1.5 space-y-1 bg-gray-50/80 rounded-xl my-1 border border-gray-100">
                      {serviceAreasList.map((area, idx) => (
                        <Link
                          key={idx}
                          href={area.href}
                          onClick={closeMobileMenu}
                          className="flex items-center gap-2 py-2 px-2 text-xs font-medium text-gray-700 hover:text-[#f99c00] transition-colors"
                        >
                          <FaMapMarkerAlt className="text-[#f99c00] text-xs flex-shrink-0" />
                          <span>{area.name}</span>
                        </Link>
                      ))}
                      <div className="pt-1.5 border-t border-gray-200/60 mt-1">
                        <Link
                          href="/az"
                          onClick={closeMobileMenu}
                          className="block text-xs font-bold text-[#f99c00] px-2 py-1"
                        >
                          All Arizona Service Areas →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href="/about-us"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 hover:bg-orange-50/50 hover:text-[#f99c00] transition-colors"
                >
                  About Us
                </Link>

                <Link
                  href="/reviews"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 hover:bg-orange-50/50 hover:text-[#f99c00] transition-colors"
                >
                  <span>Customer Reviews</span>
                  <div className="flex items-center gap-0.5 text-[#FBBC05] text-[10px]">
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                    <span className="font-bold text-gray-900 text-xs ml-1">4.9</span>
                  </div>
                </Link>

                <Link
                  href="/contact-us"
                  onClick={closeMobileMenu}
                  className="block px-3 py-2.5 rounded-lg text-sm font-semibold text-gray-800 hover:bg-orange-50/50 hover:text-[#f99c00] transition-colors"
                >
                  Contact Us
                </Link>

                <Link
                  href="/quote"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold text-[var(--accent-color)] bg-orange-50/60 hover:bg-orange-100/70 transition-colors"
                >
                  <span>Get a Free Quote</span>
                  <span className="text-[10px] bg-[var(--accent-color)] text-white px-2 py-0.5 rounded-full uppercase tracking-wider font-semibold">Instant</span>
                </Link>

              </div>
            </div>

            {/* Bottom Drawer Actions */}
            <div className="p-4 border-t border-gray-100 space-y-3 bg-white">
              <button
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  openQuoteModal();
                }}
                className="w-full py-3.5 rounded-full bg-[var(--accent-color)] hover:opacity-95 active:scale-[0.99] text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>GET A QUOTE</span>
                <FaArrowRight className="text-xs" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 font-medium">
                <FaShieldAlt className="text-[#f99c00]" />
                <span>Licensed & Insured Moving Specialists</span>
              </div>
            </div>

          </div>

        </div>
      )}
    </nav>
  );
};

export default Navbar;
