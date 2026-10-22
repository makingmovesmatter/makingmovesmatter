import React from 'react';
import Header from '@/app/components/header';
import Link from 'next/link';
import Image from 'next/image';
import HowItWorksSection from '@/app/components/home/HowItWorksSection';
import Faq from '@/app/components/faq';
import { FaLocationDot, FaArrowRight } from 'react-icons/fa6';

export const metadata = {
  title: "Service Areas in Arizona | Mesa Moving Experts | Making Moves Matter",
  description:
    "Explore our moving service areas across Arizona including Mesa, Chandler, Scottsdale, Tempe, Gilbert, Phoenix, Queen Creek, and San Tan Valley. Get a free quote today!",
  alternates: {
    canonical: "/az",
  },
  openGraph: {
    title: "Arizona Moving Service Areas | Making Moves Matter",
    description:
      "Reliable residential and commercial moving services across Mesa, Phoenix, Scottsdale, and the entire East Valley.",
    url: "https://mesamovingexperts.com/az",
    siteName: "Making Moves Matter",
  },
};

const CITIES = [
  {
    name: "Mesa, AZ",
    slug: "/az/mesa",
    image: "/images/mesa1.png",
    description: "Our home base! Fast, reliable local and long-distance moving services across all of Mesa.",
  },
  {
    name: "Chandler, AZ",
    slug: "/az/chandler",
    image: "/images/chendler1.png",
    description: "Full-service residential and office relocations with careful packing and safe handling in Chandler.",
  },
  {
    name: "Scottsdale, AZ",
    slug: "/az/scottsdale",
    image: "/images/scottedeal1.png",
    description: "Premium white-glove moving services for luxury homes, estates, and corporate offices in Scottsdale.",
  },
  {
    name: "Tempe, AZ",
    slug: "/az/tempe",
    image: "/images/temp1.png",
    description: "Affordable, efficient moves for college students, apartments, and growing families in Tempe.",
  },
  {
    name: "Gilbert, AZ",
    slug: "/az/gilbert",
    image: "/images/gendeal1.png",
    description: "Stress-free residential moves tailored for families and businesses in vibrant Gilbert.",
  },
  {
    name: "Phoenix, AZ",
    slug: "/az/phoenix",
    image: "/images/phoenix1.png",
    description: "Comprehensive moving solutions across the entire Phoenix metropolitan area.",
  },
  {
    name: "Queen Creek, AZ",
    slug: "/az/queen-creek",
    image: "/images/queen-creek1.png",
    description: "Reliable, friendly movers helping families relocate to and from Queen Creek.",
  },
  {
    name: "San Tan Valley, AZ",
    slug: "/az/san-tan-valley",
    image: "/images/santan1.png",
    description: "Dependable local moving, packing, and labor services throughout San Tan Valley.",
  },
];

export default function ArizonaServiceAreaPage() {
  const headerImg = "/images/homebanne.png";
  const headerText1 = "Arizona";
  const headerText2 = "Service Areas";
  const headerDesc =
    "Making Moves Matter proudly serves homeowners and businesses throughout the Valley of the Sun with trusted 5-star moving services.";

  return (
    <div>
      <Header
        headerImg={headerImg}
        headerText1={headerText1}
        headerText2={headerText2}
        headerDesc={headerDesc}
      />

      {/* Cities Grid Section */}
      <section className="py-16 md:py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <FaLocationDot /> Valley-Wide Coverage
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4">
              Where We Move You Across Arizona
            </h2>
            <p className="text-slate-600 text-base md:text-lg">
              Whether you are moving down the block or across the state, our licensed and insured moving crews are ready to deliver a smooth, seamless relocation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CITIES.map((city) => (
              <Link
                key={city.slug}
                href={city.slug}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={city.image}
                      alt={city.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <h3 className="absolute bottom-3 left-4 text-xl font-bold text-white drop-shadow">
                      {city.name}
                    </h3>
                  </div>
                  <div className="p-5">
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {city.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-2 flex items-center gap-2 text-sm font-semibold text-amber-600 group-hover:text-amber-700">
                  <span>Explore {city.name} Movers</span>
                  <FaArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <HowItWorksSection />
      <Faq />
    </div>
  );
}
