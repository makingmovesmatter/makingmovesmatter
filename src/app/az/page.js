import React from 'react';
import Header from '@/app/components/header';
import Link from 'next/link';
import Image from 'next/image';
import HowItWorksSection from '@/app/components/home/HowItWorksSection';
import Faq from '@/app/components/faq';
import ArizonaHubSchema from './ArizonaHubSchema';
import CityGridSection from './CityGridSection';
import {
  FaShieldHalved,
  FaStar,
  FaTruckFast,
  FaClock,
  FaBoxesPacking,
  FaPhoneVolume,
  FaArrowRight,
  FaCheck,
  FaSun,
  FaTemperatureHigh,
  FaWarehouse,
  FaDolly,
  FaRoute,
  FaLocationDot
} from 'react-icons/fa6';
import { openQuoteModal } from '@/app/components/QuoteButton';

export const metadata = {
  title: "Movers in Arizona | Top-Rated Valley-Wide Moving Services | Making Moves Matter",
  description:
    "Best moving company in Arizona. Making Moves Matter serves Mesa, Chandler, Scottsdale, Tempe, Gilbert, Phoenix, Queen Creek & San Tan Valley. 4.9★ rated, licensed & insured movers. Get your free guaranteed flat-rate quote!",
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/az",
  },
  openGraph: {
    title: "Arizona Moving Company | Valley-Wide Service Areas | Making Moves Matter",
    description:
      "Full-service residential & commercial moving across Mesa, Phoenix, Scottsdale, Chandler, Gilbert, Tempe, Queen Creek, and San Tan Valley. Upfront pricing, licensed & insured.",
    url: "https://mesamovingexperts.com/az",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/az-fleet-hero.png",
        width: 1200,
        height: 675,
        alt: "Making Moves Matter Arizona Moving Trucks Fleet",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

const DISPATCH_MATRIX = [
  { city: "Mesa, AZ", distance: "HQ Hub", transit: "5 - 15 Mins", crews: "Daily Active", url: "/az/mesa" },
  { city: "Tempe, AZ", distance: "8 Miles", transit: "15 - 25 Mins", crews: "Daily Active", url: "/az/tempe" },
  { city: "Gilbert, AZ", distance: "10 Miles", transit: "15 - 25 Mins", crews: "Daily Active", url: "/az/gilbert" },
  { city: "Chandler, AZ", distance: "12 Miles", transit: "20 - 30 Mins", crews: "Daily Active", url: "/az/chandler" },
  { city: "Scottsdale, AZ", distance: "14 Miles", transit: "20 - 35 Mins", crews: "Daily Active", url: "/az/scottsdale" },
  { city: "Phoenix, AZ", distance: "18 Miles", transit: "25 - 40 Mins", crews: "Daily Active", url: "/az/phoenix" },
  { city: "Queen Creek, AZ", distance: "18 Miles", transit: "25 - 35 Mins", crews: "Daily Active", url: "/az/queen-creek" },
  { city: "San Tan Valley, AZ", distance: "24 Miles", transit: "30 - 45 Mins", crews: "Daily Active", url: "/az/san-tan-valley" },
];

const ARIZONA_ZIPCODES = [
  { city: "Mesa", zips: ["85201", "85202", "85203", "85204", "85205", "85206", "85207", "85208", "85209", "85210", "85212", "85213", "85215"] },
  { city: "Chandler", zips: ["85224", "85225", "85226", "85248", "85249", "85286"] },
  { city: "Scottsdale", zips: ["85250", "85251", "85254", "85255", "85257", "85258", "85259", "85260", "85262", "85266"] },
  { city: "Tempe", zips: ["85281", "85282", "85283", "85284"] },
  { city: "Gilbert", zips: ["85233", "85234", "85295", "85296", "85297", "85298"] },
  { city: "Phoenix", zips: ["85003", "85004", "85006", "85008", "85012", "85016", "85018", "85020", "85022", "85028", "85032", "85044", "85048"] },
  { city: "Queen Creek", zips: ["85142", "85140"] },
  { city: "San Tan Valley", zips: ["85140", "85142", "85143"] },
];

export default function ArizonaServiceAreaPage() {
  const headerImg = "/images/az-fleet-hero.png";
  const headerText1 = "Arizona";
  const headerText2 = "Moving Services";
  const headerDesc =
    "Premier residential, commercial, and specialty relocations across the Phoenix East Valley. Guaranteed flat rates, licensed and insured moving crews, and 15+ years of trusted Arizona service.";

  return (
    <main className="w-full bg-white overflow-hidden font-sans">

      {/* 1. SEO Structured Data */}
      <ArizonaHubSchema />

      {/* 2. Branded Hero Header with Quick Quote Calculator */}
      <Header
        headerImg={headerImg}
        headerText1={headerText1}
        headerText2={headerText2}
        headerDesc={headerDesc}
      />

      {/* 4. Interactive Branded City Cards Grid (Newly Recreated Branded Photos) */}
      <CityGridSection />

      {/* 5. Valley Dispatch Matrix & Transit Distance Table */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-color)] bg-orange-100 px-3 py-1 rounded-full">
              East Valley Logistics Hub
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-3 mb-3">
              Valley-Wide Transit Times & Crew Availability
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Operating centrally from Mesa, Arizona, our fleet is deployed daily across the entire Phoenix metropolitan area, guaranteeing punctual arrival windows and coordinated multi-stop relocations.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-900 text-white text-xs uppercase tracking-wider">
                  <tr>
                    <th className="py-4 px-6 font-bold">Service Area</th>
                    <th className="py-4 px-6 font-bold">Distance from Mesa HQ</th>
                    <th className="py-4 px-6 font-bold">Avg. Arrival Window</th>
                    <th className="py-4 px-6 font-bold">Crew Deployment</th>
                    <th className="py-4 px-6 font-bold text-right">Dedicated Page</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                  {DISPATCH_MATRIX.map((row, idx) => (
                    <tr key={idx} className="hover:bg-orange-50/50 transition-colors">
                      <td className="py-3.5 px-6 font-bold text-slate-900 flex items-center gap-2">
                        <FaLocationDot className="text-[var(--accent-color)] text-xs" />
                        <span>{row.city}</span>
                      </td>
                      <td className="py-3.5 px-6">{row.distance}</td>
                      <td className="py-3.5 px-6">{row.transit}</td>
                      <td className="py-3.5 px-6">
                        <span className="inline-flex items-center gap-1.5 text-xs text-emerald-700 bg-emerald-50 font-bold px-2.5 py-0.5 rounded-full border border-emerald-200">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          {row.crews}
                        </span>
                      </td>
                      <td className="py-3.5 px-6 text-right">
                        <Link
                          href={row.url}
                          className="inline-flex items-center gap-1 text-xs font-bold text-[var(--accent-color)] hover:underline"
                        >
                          <span>View City Guide</span>
                          <FaArrowRight className="text-[10px]" />
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Why Choose Making Moves Matter for Arizona Moves (5 Pillars) */}
      <section className="py-16 md:py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-color)] bg-orange-100 px-3 py-1 rounded-full">
              Why We Are Arizona's Preferred Movers
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mt-3 mb-4">
              Built for Arizona's Unique Moving Challenges
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Relocating in the desert requires specialized expertise—from handling extreme summer heat to navigating tight master-planned HOA streets. Here is how we ensure your belongings stay protected:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

            <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-slate-50/60 hover:border-[var(--accent-color)] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-color)] text-white flex items-center justify-center text-xl mb-5">
                <FaTemperatureHigh />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Desert Heat Protection
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Arizona summer temperatures exceed 115°F. We use heavy thermal moving quilts and climate-conscious loading so delicate wood veneers, fine leather, and sensitive electronics never suffer heat warping.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-slate-50/60 hover:border-[var(--accent-color)] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-color)] text-white flex items-center justify-center text-xl mb-5">
                <FaBoxesPacking />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                White-Glove Furniture Padding
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Every single piece of wooden or upholstered furniture is wrapped in durable padding and shrink-wrap before leaving your home. Door jambs, banisters, and tile flooring are protected with heavy-duty neoprene runners.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-slate-50/60 hover:border-[var(--accent-color)] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-color)] text-white flex items-center justify-center text-xl mb-5">
                <FaRoute />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Zero Hidden Travel Fees
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Unlike fly-by-night operators that surprise customers with fuel surcharges, stair fees, or heavy-lift add-ons, our guaranteed estimates are 100% transparent and all-inclusive.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-slate-50/60 hover:border-[var(--accent-color)] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-color)] text-white flex items-center justify-center text-xl mb-5">
                <FaWarehouse />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Climate-Controlled Storage
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Need extra time between closing dates? Our Mesa warehouse offers 24/7 video monitoring and strict humidity/temperature regulation to keep your household possessions safe for any duration.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-slate-50/60 hover:border-[var(--accent-color)] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-color)] text-white flex items-center justify-center text-xl mb-5">
                <FaDolly />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Pianos, Safes & Heavy Items
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                We possess commercial rigging gear, piano boards, heavy-load trailers, and stair-climbing dollies required to transport gun safes, upright and grand pianos, pool tables, and hot tubs safely.
              </p>
            </div>

            <div className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-slate-50/60 hover:border-[var(--accent-color)] transition-colors">
              <div className="w-12 h-12 rounded-xl bg-[var(--accent-color)] text-white flex items-center justify-center text-xl mb-5">
                <FaShieldHalved />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Full Cargo Valuation Coverage
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Rest easy knowing your belongings are protected by a verified, bonded, and fully licensed Arizona moving company adhering to all federal and state moving regulations.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Comprehensive Moving Relocation Workflow */}
      <HowItWorksSection />

      {/* 8. Arizona Moving Guide & Seasonal Relocation Tips (SEO Content) */}
      <section className="py-16 md:py-20 bg-slate-50 border-t border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-color)] bg-orange-100 px-3 py-1 rounded-full">
                Arizona Moving Guide
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-3 mb-4">
                Expert Tips for Moving in the Valley of the Sun
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Arizona's arid climate and dynamic residential growth require careful planning. Here are top recommendations from our moving dispatch team:
              </p>

              <div className="space-y-3.5">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent-color)] text-white flex items-center justify-center text-xs mt-0.5 flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Schedule Early Morning Load Times</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Between May and September, we recommend 7:00 AM dispatch starts so heavy loading is finished before afternoon peak heat index.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent-color)] text-white flex items-center justify-center text-xs mt-0.5 flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Transfer Utilities in Advance (APS / SRP)</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Make sure air conditioning and electricity are active at your new home at least 24 hours prior to move-in day so indoor rooms are cool and comfortable during delivery.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[var(--accent-color)] text-white flex items-center justify-center text-xs mt-0.5 flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">HOA Moving Truck Permissions</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Communities in Scottsdale, Chandler, and Gilbert often have specific hours for moving truck parking. Notify your community association early to reserve loading zones.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 w-full rounded-2xl overflow-hidden border border-slate-200">
              <Image
                src="/images/az-fleet-hero.png"
                alt="Making Moves Matter Fleet Ready Across Arizona"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-300 block mb-1">
                  Arizona Fleet Readiness
                </span>
                <p className="text-lg font-bold text-white leading-snug">
                  Clean, GPS-tracked 26ft air-ride commercial vehicles ready to dispatch anywhere in the Valley.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 9. Arizona Zip Code & Neighborhood Directory (Local SEO) */}
      <section className="py-16 md:py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--accent-color)] bg-orange-100 px-3 py-1 rounded-full">
              Full Postal Coverage
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight mt-3 mb-2">
              Arizona Zip Codes We Serve Daily
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              Our crews provide complete local and long-distance moving solutions across every postal code in the Phoenix East Valley:
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {ARIZONA_ZIPCODES.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50">
                <h4 className="font-bold text-slate-900 text-sm mb-2 flex items-center gap-1.5">
                  <FaLocationDot className="text-[var(--accent-color)] text-xs" />
                  <span>{item.city}, AZ</span>
                </h4>
                <div className="flex flex-wrap gap-1">
                  {item.zips.map((zip, i) => (
                    <span key={i} className="text-[11px] font-mono bg-white px-1.5 py-0.5 rounded border border-slate-200 text-slate-600">
                      {zip}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 10. FAQ Accordion Section */}
      <Faq />

      {/* 11. High-Converting Bottom CTA Banner */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-slate-950 via-[#011234] to-slate-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--accent-color)] bg-orange-500/10 border border-orange-500/30 px-3 py-1 rounded-full mb-4">
            Instant Free Quote • No Obligation
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight mb-4">
            Ready for a Smooth, Worry-Free Move in Arizona?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Lock in your preferred moving date with Arizona's highest-rated movers. Upfront guaranteed rates, full insurance protection, and friendly, prompt customer service.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:4809348218"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-slate-900 font-bold text-sm flex items-center justify-center gap-2 transition-colors"
            >
              <FaPhoneVolume className="text-[var(--accent-color)] text-base" />
              <span>Call (480) 934-8218</span>
            </a>

            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[var(--accent-color)] hover:opacity-95 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <span>Explore All Moving Services</span>
              <FaArrowRight className="text-xs" />
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <FaCheck className="text-emerald-400" /> Free Rescheduling
            </span>
            <span className="flex items-center gap-1.5">
              <FaCheck className="text-emerald-400" /> Full Cargo Protection
            </span>
            <span className="flex items-center gap-1.5">
              <FaCheck className="text-emerald-400" /> 15+ Years Valley Experience
            </span>
          </div>
        </div>
      </section>

    </main>
  );
}
