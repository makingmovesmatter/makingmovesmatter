"use client";

import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[var(--red-gray-background)] text-[var(--white-color)] pt-10 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8 mb-10">
          {/* Our Services */}
          <div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide text-[var(--white-color)]">
              <a href="/services" className="hover:underline">Moving Services</a>
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:!underline"><a href="/services/commercial-services">Commercial Services</a></li>
              <li className="hover:!underline"><a href="/services/long-distance-moving">Long Distance Moving</a></li>
              <li className="hover:!underline"><a href="/services/furniture-assembly">Furniture Assembly</a></li>
              <li className="hover:!underline"><a href="/services/local-moving">Local Moving</a></li>
              <li className="hover:!underline"><a href="/services/furniture-moving">Furniture Moving</a></li>
              <li className="hover:!underline"><a href="/services/packing-and-unpacking-services">Packing And Unpacking Services</a></li>
              <li className="hover:!underline"><a href="/services/large-and-heavy-item-moving">Large and Heavy Item Moving</a></li>
              <li className="hover:!underline"><a href="/services/storage">Storage</a></li>
              <li className="hover:!underline"><a href="/services/hot-tub-relocation">Hot Tub Relocation</a></li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide text-[var(--white-color)]">
              <a href="/az" className="hover:underline">Service Area</a>
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:!underline"><a href="/az/mesa">Mesa, AZ</a></li>
              <li className="hover:!underline"><a href="/az/chandler">Chandler, AZ</a></li>
              <li className="hover:!underline"><a href="/az/scottsdale">Scottsdale, AZ</a></li>
              <li className="hover:!underline"><a href="/az/tempe">Tempe, AZ</a></li>
              <li className="hover:!underline"><a href="/az/gilbert">Gilbert, AZ</a></li>
              <li className="hover:!underline"><a href="/az/phoenix">Phoenix, AZ</a></li>
              <li className="hover:!underline"><a href="/az/queen-creek">Queen Creek, AZ</a></li>
              <li className="hover:!underline"><a href="/az/san-tan-valley">San Tan Valley, AZ</a></li>
            </ul>
          </div>



          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide text-[var(--white-color)]">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:!underline"><a href="/blog">Blog</a></li>
              <li className="hover:!underline"><a href="/about-us">About Us</a></li>
              <li className="hover:!underline"><a href="/reviews">Reviews</a></li>
              <li className="hover:!underline"><a href="/contact-us">Contact Us</a></li>
              <li className="hover:!underline"><a href="tel:4809348218">Call: (480) 934-8218</a></li>
              <li className="hover:!underline"><a href="mailto:makingmovesmatter07@gmail.com">Email: makingmovesmatter07@gmail.com</a></li>
              <li className="hover:!underline">445 S Dobson Rd, Mesa 85202</li>
            </ul>
          </div>

          {/* Logo or Extra Info (optional) */}
          <div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide text-[var(--white-color)]">
              Making Moves Matter
            </h3>
            <p className="text-sm text-[var(--white-color)]">
              Trusted moving services in Mesa and beyond. Your move made
              easier, faster, and safer with our professional team.
            </p>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-500 pt-4 text-xs text-[var(--white-color)] text-center">
          All Content Copyright ©2025 Making Moves Matter
        </div>
      </div>
    </footer>
  );
};

export default Footer;
