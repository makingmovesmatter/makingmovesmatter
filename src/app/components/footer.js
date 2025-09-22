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
              Moving Services
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:!underline"><a href="/commercial-services">Commercial Services</a></li>
              <li className="hover:!underline"><a href="/long-distance-moving">Long Distance Moving</a></li>
              <li className="hover:!underline"><a href="/furniture-assembly">Furniture Assembly</a></li>
              <li className="hover:!underline"><a href="/local-moving">Local Moving</a></li>
              <li className="hover:!underline"><a href="/furniture-moving">Furniture Moving</a></li>
              <li className="hover:!underline"><a href="/packing-and-unpacking-services">Packing And Unpacking Servicesy</a></li>
              <li className="hover:!underline"><a href="/large-and-heavy-item-moving">Large and Heavy Item Moving</a></li>
              <li className="hover:!underline"><a href="/storage">Storage</a></li>
              <li className="hover:!underline"><a href="/hot-tub-relocation">Hot Tub Relocation</a></li>
            </ul>
          </div>

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 uppercase tracking-wide text-[var(--white-color)]">
              Service Area
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="hover:!underline"><a href="/mesa-az">Mesa, AZ</a></li>
              <li className="hover:!underline"><a href="/chandler-az">Chandler, AZ</a></li>
              <li className="hover:!underline"><a href="/scottsdale-az">Scottsdale, AZ</a></li>
              <li className="hover:!underline"><a href="/tempe-az">Tempe, AZ</a></li>
              <li className="hover:!underline"><a href="/gendale-az">Gilbert, AZ</a></li>
              <li className="hover:!underline"><a href="/phoenix-az">Phoenix, AZ</a></li>
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
              <li className="hover:!underline"><a href="/contact-us">Contact Us</a></li>
              <li className="hover:!underline"><a href="tel:4809348218">Call at (480) 934-8218</a></li>
              <li className="hover:!underline"><a href="mailto:makingmovesmatter07@gmail.com">Email at makingmovesmatter07@gmail.com</a></li>
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
