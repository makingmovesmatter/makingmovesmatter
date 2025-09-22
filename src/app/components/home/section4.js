'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaHome } from 'react-icons/fa';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

const content = [
  {
    title: 'Professional Movers You Can Count On',
    text: `At Smart Move Moving & Storage, we’ve been helping families and businesses move with confidence for over 30 years. Whether you’re relocating to a high-rise, a suburban home, or a new office space, our team knows how to handle the real-world challenges of moving. We show up on time, work efficiently, and treat your belongings with the same care we’d give our own.

    Planning a move? Let us handle the heavy lifting—so you can focus on what’s next. Contact us today to reserve your moving date.`,
  },
  {
    title: 'Professional Movers You Can Count On',
    text: `We’re fully insured and compliant with all transportation regulations, which means your move is protected from start to finish. When you choose Smart Move, you get peace of mind, not just muscle.`,
  },
  {
    title: 'Skilled Movers Trained in Safety and Respect',
    text: `Our crews are trained in safe handling, efficient packing, and professional moving techniques. We come equipped with the right tools and take the time to wrap, pad, and protect your belongings—no shortcuts, no careless mistakes.`,
  },
  {
    title: 'Honest, Upfront Pricing—No Surprises',
    text: `We believe in doing things the right way. That means no hidden fees, no vague quotes—just clear, straightforward pricing you can trust before the first box is moved.`,
  },
];

const Section4 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <div className="w-full py-16">
      <div className="container mx-auto px-4" ref={ref}>
        {content.map((item, i) => (
          <motion.div
            key={i}
            custom={i}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            variants={fadeUp}
            className="mb-10"
          >
            <h2 className={`text-2xl md:text-3xl font-bold text-[var(--heading-text-color)] capitalize py-2`}>
              {item.title}
            </h2>
            <p className="text-[var(--heading-text-color)] text-md whitespace-pre-line">{item.text}</p>
            {i < content.length - 1 && <hr className="mt-6" />}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Section4;