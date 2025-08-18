"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[var(--red-gray-background)] text-[var(--white-color)] pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 mb-10">
          {/* Our Services */}
          <div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide text-[var(--white-color)]">
              Our Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/residential" className="hover:underline">
                  Residential
                </Link>
              </li>
              <li>
                <Link href="/commercial-services" className="hover:underline">
                  Commercial
                </Link>
              </li>
              <li>
                <Link href="/moving-labor" className="hover:underline">
                  Moving Labor
                </Link>
              </li>
              <li>
                <Link href="/in-state-moves" className="hover:underline">
                  Direct Service
                </Link>
              </li>
              <li>
                <Link
                  href="/packing-and-unpacking-services"
                  className="hover:underline"
                >
                  Packing/Unpacking
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide text-[var(--white-color)]">
              Company Info
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about-us" className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/moving-services" className="hover:underline">
                  Moving Services
                </Link>
              </li>
              <li>
                <Link href="/arizona-movers" className="hover:underline">
                  Service Area
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline">
                  Our Blog
                </Link>
              </li>
              <li>
                <Link href="/movers" className="hover:underline">
                  Movers Near You
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:underline">
                  Locations
                </Link>
              </li>
            </ul>
          </div>

          {/* Logo or Extra Info (optional) */}
          <div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide text-[var(--white-color)]">
              Making Moves Matter
            </h3>
            <p className="text-sm text-[var(--white-color)]">
              Trusted moving services in Scottsdale and beyond. Your move made
              easier, faster, and safer with our professional team.
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-50 pt-4 text-xs text-[var(--white-color)] text-center">
          All Content Copyright ©2025 Making Moves Matter
          <span className="mx-2">|</span>
          <Link href="#" className="hover:underline">
            Accessibility Statement
          </Link>
          <span className="mx-2">|</span>
          <Link href="#" className="hover:underline">
            Privacy Policy
          </Link>
          <span className="mx-2">|</span>
          <Link href="#" className="hover:underline">
            Sitemap
          </Link>
          <span className="mx-2">|</span>
          <Link href="#" className="hover:underline">
            Location Sitemap
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
