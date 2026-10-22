'use client';
import React from "react";
import Slider from "react-slick";
import { FaMessage, FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import GoogleReviewCard from "../GoogleReviewCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components for the slider
const PrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-[-12px] md:left-[-35px] top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-[0_2px_10px_rgba(0,0,0,0.1)] z-10 text-gray-500 hover:text-gray-900 hover:scale-105 active:scale-95 transition-all border border-gray-100 flex items-center justify-center cursor-pointer"
    aria-label="Previous review"
  >
    <FaChevronLeft className="w-4 h-4" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-[-12px] md:right-[-35px] top-1/2 -translate-y-1/2 bg-white rounded-full w-10 h-10 shadow-[0_2px_10px_rgba(0,0,0,0.1)] z-10 text-gray-500 hover:text-gray-900 hover:scale-105 active:scale-95 transition-all border border-gray-100 flex items-center justify-center cursor-pointer"
    aria-label="Next review"
  >
    <FaChevronRight className="w-4 h-4" />
  </button>
);

const customReviews = [
  {
    id: 1,
    author_name: "Rachelle Greene",
    time: "3 months ago",
    rating: 5,
    text: "I'm happy to share that Making Moves Matter is a very professional company.. I scheduled a consult, my assignment was accepted promptly and the moving team arrived right on schedule, taking incredible care of all our belongings!",
    avatar_color: "#5E35B1",
    isVerified: true,
  },
  {
    id: 2,
    author_name: "Mary Stone",
    time: "2 months ago",
    rating: 5,
    text: "Andrew, Markell and Robert were amazing! I had an emergency move that I booked the night before and they got the job done in under two hours! I highly recommend this company for responsiveness and safety of your items.",
    avatar_color: "#1E88E5",
    isVerified: true,
  },
  {
    id: 3,
    author_name: "Graciela Marroquin",
    time: "4 months ago",
    rating: 5,
    text: "Huge shout out & thank you to Caleb & Frank on a job well done, in sorting, moving and repacking my storage units! Was amazed to see Caleb’s quality work and his ability to strategize the best way to utilize the storage units.",
    avatar_color: "#00897B",
    isVerified: true,
  },
  {
    id: 4,
    author_name: "Shangyi Lei",
    time: "4 months ago",
    rating: 5,
    text: "Making Moves Matter is absolutely the best and most reasonably priced moving company in Tempe! David and Markell were amazing from start to finish. They were extremely careful with packing and transporting all of my furniture and boxes.",
    avatar_color: "#D81B60",
    isVerified: true,
  },
  {
    id: 5,
    author_name: "Troy McMillan",
    time: "5 months ago",
    rating: 5,
    text: "Andrew and his crew helped me move from Las Vegas to Glendale, AZ, and they did a perfect job, nothing was damaged. The guys were easy to talk to, and the whole process was easy. I really appreciated their help.",
    avatar_color: "#F57C00",
    isVerified: true,
  },
  {
    id: 6,
    author_name: "Cintia Rodriguez",
    time: "2 months ago",
    rating: 5,
    text: "I can't recommend this moving company enough. I was completely exhausted, running on very little sleep, and already overwhelmed with the stress of moving when I got a flat tire. To make matters worse, it was raining. They handled everything with absolute grace.",
    avatar_color: "#3949AB",
    isVerified: true,
  }
];

const Section2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section className="py-16 md:py-20 border-y border-slate-100">
      <div className="mx-auto container px-5">
        {/* Header Section */}
        <div className="flex justify-center items-center flex-col mb-12 mt-15">
          <h2 className="text-3xl md:text-[40px] font-bold text-[#1E293B] capitalize pb-3 text-center">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 text-center max-w-xl text-sm md:text-base mb-6">
            Real feedback from satisfied customers who trusted us with their moves across Arizona and beyond.
          </p>
          <a 
            href="https://www.google.com/maps/place//data=!4m3!3m2!1s0xb69fbad24f48ec5:0x94a02e5409598218!12e1?source=g.page.m._&laa=merchant-review-solicitation" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex text-white gap-2 items-center bg-[#FBBF24] hover:bg-[#f59e0b] text-slate-900 px-6 py-3 rounded-full font-semibold transition-all shadow-sm hover:shadow text-sm cursor-pointer"
          >
            <FaMessage className="text-white" /> Leave a Review
          </a>
        </div>

        {/* Slick Slider Section */}
        <div className="relative px-2 sm:px-6 md:px-10 mb-20">
          <Slider {...settings} className="google-reviews-slider">
            {customReviews.map((review) => (
              <div key={review.id} className="px-3 py-3 h-full">
                <GoogleReviewCard review={review} />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style jsx global>{`
        .google-reviews-slider .slick-track {
          display: flex !important;
          align-items: stretch;
        }
        .google-reviews-slider .slick-slide {
          height: auto !important;
          display: flex !important;
        }
        .google-reviews-slider .slick-slide > div {
          width: 100%;
          display: flex;
          height: 100%;
        }
        .google-reviews-slider .slick-dots {
          bottom: -32px;
        }
        .google-reviews-slider .slick-dots li button:before {
          font-size: 8px;
          color: #94a3b8;
          opacity: 0.6;
        }
        .google-reviews-slider .slick-dots li.slick-active button:before {
          color: #f59e0b;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Section2;