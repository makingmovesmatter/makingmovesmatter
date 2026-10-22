import React from "react";
import Header from "@/app/components/header";
import Link from "next/link";
import Image from "next/image";
import HowItWorksSection from "@/app/components/home/HowItWorksSection";
import Faq from "@/app/components/faq";
import { FaTruck, FaArrowRight, FaShieldHalved, FaBoxesPacking, FaWarehouse, FaCouch, FaBuilding, FaRoad } from "react-icons/fa6";

export const metadata = {
  title: "Professional Moving Services in Arizona | Making Moves Matter",
  description:
    "Comprehensive residential, commercial, local, long-distance, furniture moving, and packing services across Arizona. Top-rated 5-star movers in Mesa.",
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Moving Services | Making Moves Matter",
    description:
      "Explore all professional moving services by Making Moves Matter. Fast, licensed, and insured movers in Arizona.",
    url: "https://mesamovingexperts.com/services",
    siteName: "Making Moves Matter",
  },
};

const SERVICES = [
  {
    title: "Local Moving",
    slug: "/services/local-moving",
    description: "Fast, affordable, and dependable moving services across Mesa, Phoenix, and nearby East Valley communities.",
    image: "/images/localmoving1.png",
    tag: "Most Popular",
  },
  {
    title: "Long Distance Moving",
    slug: "/services/long-distance-moving",
    description: "Carefully planned interstate and cross-country moves with dedicated trucks, GPS tracking, and guaranteed delivery dates.",
    image: "/images/longdistance.png",
    tag: "Cross Country",
  },
  {
    title: "Commercial Services",
    slug: "/services/commercial-services",
    description: "Office, retail, and corporate relocation planned to minimize operational downtime and protect vital business assets.",
    image: "/images/commarcial1.png",
    tag: "Business & Office",
  },
  {
    title: "Furniture Moving",
    slug: "/services/furniture-moving",
    description: "Expert protection and transport for delicate antiques, heavy sofas, sectionals, and large bedroom suites.",
    image: "/images/farniturMovindBanner.png",
    tag: "Heavy Care",
  },
  {
    title: "Furniture Assembly",
    slug: "/services/furniture-assembly",
    description: "Precision teardown and rebuild of bed frames, modular desks, workout equipment, and modular storage units.",
    image: "/images/furniture-assembly1.png",
    tag: "Assembly & Setup",
  },
  {
    title: "Packing & Unpacking Services",
    slug: "/services/packing-and-unpacking-services",
    description: "Full or partial packing using commercial-grade boxes, bubble wrap, custom crating, and wardrobe boxes.",
    image: "/images/pakingunpaking1.png",
    tag: "Full Service",
  },
  {
    title: "Large & Heavy Item Moving",
    slug: "/services/large-and-heavy-item-moving",
    description: "Specialized equipment and safety rigging for pianos, gun safes, appliances, and oversized machinery.",
    image: "/images/largeavy2.png",
    tag: "Specialty Items",
  },
  {
    title: "Storage Solutions",
    slug: "/services/storage",
    description: "Clean, temperature-controlled, secure storage facilities for short-term transitions or extended warehousing.",
    image: "/images/storage1.png",
    tag: "Secure Storage",
  },
  {
    title: "Hot Tub Relocation",
    slug: "/services/hot-tub-relocation",
    description: "Specialized spa trailers, dollies, and experienced movers to transport hot tubs and spas damage-free.",
    image: "/images/hottub1.png",
    tag: "Specialized",
  },
  {
    title: "Residential Moving",
    slug: "/services/residential",
    description: "Careful household relocations for single-family homes, luxury estates, townhomes, and apartments.",
    image: "/images/localmoving2.png",
    tag: "Homes & Condos",
  },
  {
    title: "In-State Moves",
    slug: "/services/in-state-moves",
    description: "Direct-delivery relocations between Phoenix, Tucson, Flagstaff, Sedona, and throughout Arizona.",
    image: "/images/longdistances.png",
    tag: "Statewide",
  },
  {
    title: "Moving Labor",
    slug: "/services/moving-labor",
    description: "Hire our strong, experienced movers by the hour for loading, unloading PODS, trucks, or moving furniture on-site.",
    image: "/images/farnitureoving1.png",
    tag: "Hourly Labor",
  },
];

export default function ServicesPage() {
  const headerImg = "/images/homebanne.png";
  const headerText1 = "Our Moving";
  const headerText2 = "Services";
  const headerDesc =
    "From local residential moves to corporate relocations and white-glove specialty handling, Making Moves Matter provides reliable, stress-free moving solutions across Arizona.";

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Moving Services by Making Moves Matter",
    "itemListElement": SERVICES.map((service, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": service.title,
      "description": service.description,
      "url": `https://mesamovingexperts.com${service.slug}`,
    })),
  };

  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />

      <Header
        headerImg={headerImg}
        headerText1={headerText1}
        headerText2={headerText2}
        headerDesc={headerDesc}
      />

      {/* Services Grid Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-red-100 text-[var(--red-gray-color)] px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <FaTruck /> Full-Service Arizona Movers
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Comprehensive Moving Solutions Tailored to You
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Every move is unique. Whether you need an entire house packed and moved across the state or just a single heavy item transported across town, our licensed professionals have you covered.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={service.slug}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <span className="absolute top-4 right-4 bg-white/95 text-slate-800 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                      {service.tag}
                    </span>
                    <h3 className="absolute bottom-3 left-4 text-2xl font-bold text-white drop-shadow">
                      {service.title}
                    </h3>
                  </div>
                  <div className="p-6">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-slate-100 text-sm font-semibold text-[var(--red-gray-color)] group-hover:text-red-700">
                  <span>Learn More & Pricing</span>
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* Bottom CTA Banner */}
          <div className="mt-16 bg-gradient-to-r from-[#990000] to-[#660000] text-white rounded-2xl p-8 md:p-12 shadow-lg text-center flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">Need a Custom Moving Plan?</h3>
              <p className="text-white/80 text-sm md:text-base">
                Call our friendly moving coordinators today at (480) 934-8218 for a transparent, no-obligation moving quote with zero hidden fees.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                href="/contact-us"
                className="bg-white text-[var(--red-gray-color)] font-bold px-6 py-3 rounded-lg shadow hover:bg-slate-100 transition-colors"
              >
                Get Free Quote
              </Link>
              <a
                href="tel:4809348218"
                className="border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white/10 transition-colors"
              >
                (480) 934-8218
              </a>
            </div>
          </div>
        </div>
      </section>

      <HowItWorksSection />
      <Faq />
    </div>
  );
}
