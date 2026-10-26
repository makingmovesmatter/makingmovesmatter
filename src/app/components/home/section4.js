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
    title: 'Professional Movers You Can Count On in Mesa, AZ',
    text: `At Making Moves Matter, we’ve been helping Arizona families and businesses relocate with confidence for over 15 years. Whether you’re moving to an East Valley master-planned community, a downtown condo, or a high-rise office space, our team understands the local logistics and summer heat challenges. We arrive promptly, work diligently, and treat every possession with the utmost care.

Planning an upcoming move? Let our experienced crews handle the heavy lifting and tight stairwells so you can focus on enjoying your new space. Call or request a fast, free estimate today.`,
  },
  {
    title: 'Fully Licensed, Bonded & Insured Protection',
    text: `We maintain active state licensing and comprehensive valuation coverage, guaranteeing that your furniture, delicate heirlooms, and electronics are safeguarded every mile of the journey. When you hire Making Moves Matter, you gain true peace of mind—not just muscle.`,
  },
  {
    title: 'Skilled Crews Trained in Modern Moving Techniques',
    text: `Every team member undergoes rigorous background screening and hands-on training in blanket-wrapping, stretch-wrapping, door-jamb protection, and secure truck loading. We arrive equipped with heavy-duty dollies, neoprene floor runners, and specialty straps to prevent scuffs, dents, or delays.`,
  },
  {
    title: 'Transparent, All-Inclusive Pricing with Zero Hidden Fees',
    text: `We stand for integrity and clear communication. Your upfront quote details labor, equipment, and travel without surprise surcharges, fuel gimmicks, or unexpected elevator fees. You will know exactly what to expect before moving day arrives.`,
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