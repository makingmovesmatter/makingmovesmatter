"use client";
import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

const Reviews = () => {
  // Slick settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows:false,
    autoplaySpeed:2000,
  };

  // Parent container (stagger)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // delay between children
      },
    },
  };

  // Child items
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="reviews-section py-16 mb-20">
      <div className="container review-container">
        {/* Animate each item separately with stagger */}
        <motion.div
          className="section-text text-center max-w-2xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="section-title mb-3" variants={itemVariants}>
            <h1>
              See Our Client <span>Experience</span>
            </h1>
          </motion.div>

          <motion.div className="section-subtitle" variants={itemVariants}>
            <p>
              See our client experience through real stories, genuine feedback, and
              trusted results showcasing our dedication, quality service, and lasting
              relationships.
            </p>
          </motion.div>

          <motion.a
            href="/"
            className="btn btn-primary relative top-8 inline-block"
            variants={itemVariants}
          >
            Get A Quote
          </motion.a>
        </motion.div>

        {/* Slick Slider */}
        <motion.div
          className="reviews-content mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <Slider {...settings}>
            {[
              {
                text: "Fantastic service! Everything was handled professionally and exceeded our expectations. Highly recommend!",
                author: "Sarah Johnson",
              },
              {
                text: "The team provided excellent support and delivered our project ahead of schedule. Great experience!",
                author: "David Lee",
              },
              {
                text: "Amazing results! Their dedication and creativity truly stand out. Will definitely work with them again.",
                author: "Emma Williams",
              },
              {
                text: "Outstanding experience! Communication was smooth and the quality was top-notch. Highly trusted team.",
                author: "Michael Brown",
              },
            ].map((review, i) => (
              <motion.div
                key={i}
                className="review-card bg-white p-6 rounded-2xl mx-3"
                variants={cardVariants}
              >
                <p className="text-gray-600">“{review.text}”</p>
                <h4 className="mt-4 font-semibold">— {review.author}</h4>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews;
