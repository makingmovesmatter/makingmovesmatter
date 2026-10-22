'use client';

import React, { useState } from 'react';
import { FaStar, FaGoogle, FaShieldAlt, FaClock, FaHandshake, FaArrowRight } from 'react-icons/fa';
import { FaMessage } from 'react-icons/fa6';
import Link from 'next/link';
import GoogleReviewCard, { GoogleGIcon, VerifiedBadge } from '../components/GoogleReviewCard';

const REVIEWS_DATA = [
  {
    id: 1,
    author_name: "Rachelle Greene",
    time: "3 months ago",
    rating: 5,
    category: "Residential",
    text: "I'm happy to share that Making Moves Matter is a very professional company.. I scheduled a consult, my assignment was accepted promptly and the moving team arrived right on schedule, taking incredible care of all our belongings without a single scratch!",
    avatar_color: "#5E35B1",
    isVerified: true,
  },
  {
    id: 2,
    author_name: "Mary Stone",
    time: "2 months ago",
    rating: 5,
    category: "Residential",
    text: "Andrew, Markell and Robert were amazing! I had an emergency move that I booked the night before and they got the job done in under two hours! I highly recommend this company for responsiveness and safety of your items.",
    avatar_color: "#1E88E5",
    isVerified: true,
  },
  {
    id: 3,
    author_name: "Graciela Marroquin",
    time: "4 months ago",
    rating: 5,
    category: "Storage",
    text: "Huge shout out & thank you to Caleb & Frank on a job well done, in sorting, moving and repacking my storage units! Was amazed to see Caleb’s quality work and his ability to strategize the best way to utilize the storage units.",
    avatar_color: "#00897B",
    isVerified: true,
  },
  {
    id: 4,
    author_name: "Shangyi Lei",
    time: "4 months ago",
    rating: 5,
    category: "Residential",
    text: "Making Moves Matter is absolutely the best and most reasonably priced moving company in Tempe! David and Markell were amazing from start to finish. They were extremely careful with packing and transporting all of my furniture and boxes.",
    avatar_color: "#D81B60",
    isVerified: true,
  },
  {
    id: 5,
    author_name: "Troy McMillan",
    time: "5 months ago",
    rating: 5,
    category: "Long Distance",
    text: "Andrew and his crew helped me move from Las Vegas to Glendale, AZ, and they did a perfect job, nothing was damaged. The guys were easy to talk to, and the whole process was easy. I really appreciated their help.",
    avatar_color: "#F57C00",
    isVerified: true,
  },
  {
    id: 6,
    author_name: "Cintia Rodriguez",
    time: "2 months ago",
    rating: 5,
    category: "Residential",
    text: "I can't recommend this moving company enough. I was completely exhausted, running on very little sleep, and already overwhelmed with the stress of moving when I got a flat tire. To make matters worse, it was raining. They handled everything with absolute grace.",
    avatar_color: "#3949AB",
    isVerified: true,
  },
  {
    id: 7,
    author_name: "David K.",
    time: "1 month ago",
    rating: 5,
    category: "Commercial",
    text: "We relocated our boutique office in Scottsdale with Making Moves Matter. The crew wrapped every desk, monitor, and file cabinet with precision. Zero downtime for our staff, finished 45 minutes ahead of estimate. Incredible team!",
    avatar_color: "#00ACC1",
    isVerified: true,
  },
  {
    id: 8,
    author_name: "Sarah Jenkins",
    time: "3 weeks ago",
    rating: 5,
    category: "Residential",
    text: "From the initial quote over the phone to the final box placed in our new home, the experience was 10/10. The movers were polite, strong, and took extra care around our newly painted baseboards and hardwood floors.",
    avatar_color: "#43A047",
    isVerified: true,
  },
  {
    id: 9,
    author_name: "Marcus Vance",
    time: "2 months ago",
    rating: 5,
    category: "Storage",
    text: "Used their packing and secure storage service during our home renovation. Everything was boxed securely and cataloged. When returned 3 months later, not a single piece was dusty or damaged. Truly top-tier movers in Mesa!",
    avatar_color: "#E53935",
    isVerified: true,
  },
  {
    id: 10,
    author_name: "Linda Carter",
    time: "5 months ago",
    rating: 5,
    category: "Residential",
    text: "Downsizing after 30 years in the same home was very emotional, but this crew made it seamless. They were patient, courteous, and handled antique family heirlooms with genuine care. Bless these young men!",
    avatar_color: "#8E24AA",
    isVerified: true,
  },
  {
    id: 11,
    author_name: "Jason Miller",
    time: "6 months ago",
    rating: 5,
    category: "Long Distance",
    text: "Moved from Mesa to Denver. Everything arrived right on schedule, exactly as packed. Communication was constant throughout the journey. Transparent pricing with no surprise add-ons. 100% recommend!",
    avatar_color: "#1E88E5",
    isVerified: true,
  },
  {
    id: 12,
    author_name: "Elena Rostova",
    time: "1 month ago",
    rating: 5,
    category: "Packing",
    text: "Their packing team is lightning fast and meticulous. They packed our entire 4-bedroom house in half a day with heavy duty boxes and bubble wrap. Worth every single penny!",
    avatar_color: "#FB8C00",
    isVerified: true,
  }
];

const CATEGORIES = ["All", "Residential", "Commercial", "Long Distance", "Storage", "Packing"];

const GOOGLE_REVIEW_LINK = "https://www.google.com/maps/place//data=!4m3!3m2!1s0xb69fbad24f48ec5:0x94a02e5409598218!12e1?source=g.page.m._&laa=merchant-review-solicitation";

const ReviewsClient = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredReviews = selectedCategory === "All"
    ? REVIEWS_DATA
    : REVIEWS_DATA.filter(r => r.category === selectedCategory);

  return (
    <div className="w-full mt-10">
      {/* Reviews Grid Section */}
      <section className="container mx-auto px-4 pb-20">
        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10 mt-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div key={review.id} className="h-full">
              <GoogleReviewCard review={review} />
            </div>
          ))}
        </div>

        {/* Load more / More on Google CTA */}
        <div className="mt-14 text-center mb-15">
          <a
            href={GOOGLE_REVIEW_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-semibold px-7 py-3.5 rounded-full text-sm transition-all shadow-sm hover:shadow"
          >
            <GoogleGIcon className="w-5 h-5" />
            See all 204+ reviews on Google Maps
            <FaArrowRight className="w-3.5 h-3.5 text-slate-500 ml-1" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ReviewsClient;
