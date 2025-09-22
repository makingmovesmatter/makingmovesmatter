'use client';

import React, { useRef } from "react";
import Quote from "../quote";
import { motion, useInView } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

const Section5 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="w-full py-16 section-quote" style={{backgroundImage: "url('/images/howworks.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat:'norepeat'}}>
      <div className="container mx-auto flex flex-col md:flex-row gap-10 px-4 z-10">
        {/* Animated Text Content */}
        <div className="md:w-2/3 w-full" ref={ref}>
          {[
            {
              type: "heading",
              content: "Professional Movers You Can Count On",
            },
            {
              type: "paragraph",
              content:
                "Whether you prefer speaking with a real person or handling everything online, getting started is simple. Choose the option that works best for you—we're here to help every step of the way.",
            },
            {
              type: "heading",
              content: "Call Us for a Quick Moving Quote",
            },
            {
              type: "paragraph",
              content:
                "Talk directly to one of our moving specialists and get a fast, accurate quote over the phone—quick and hassle-free.",
            },
            {
              type: "heading",
              content: "Request a Quote Online",
            },
            {
              type: "paragraph",
              content:
                "Prefer to keep it online? Fill out our short form and receive a custom quote directly in your inbox.",
            },
            {
              type: "paragraph",
              content:
                "For a more detailed quote, schedule a visit and we’ll send a team member to assess your needs and provide a personalized estimate on the spot.",
            },
            
          ].map((block, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={fadeUp}
              className="mb-4"
            >
              {block.type === "heading" && (
                <h2 className="text-4xl font-bold text-[var(--accent-color)] capitalize py-4">
                  {block.content}
                </h2>
              )}
              {block.type === "subheading" && (
                <h4 className="text-2xl font-bold text-[var(--accent-color)] capitalize pt-4 pb-2">
                  {block.content}
                </h4>
              )}
              {block.type === "paragraph" && (
                <p className="text-[var(--light-color)] text-md">
                  {block.content}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="content-center nva">
          <Quote />
        </div>
      </div>
    </div>
  );
};

export default Section5;
