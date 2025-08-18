'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

// Example icons from react-icons (you can swap with your own)
import { FaTruck, FaBoxOpen, FaShieldAlt } from 'react-icons/fa';

const cardsData = [
  {
    icon: <FaTruck size={60} className="text-white" />,
    title: 'Reliable Transport',
    description: 'Safe and timely delivery of your belongings, no matter the distance.',
  },
  {
    icon: <FaBoxOpen size={60} className="text-white" />,
    title: 'Expert Packing',
    description: 'Professional packing to protect your items from start to finish.',
  },
  {
    icon: <FaShieldAlt size={60} className="text-white" />,
    title: 'Trusted Service',
    description: 'Transparent pricing and friendly communication every step of the way.',
  },
];

export default function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.3, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <section className="w-full min-h-[200px] bg-cover bg-center flex justify-center items-center" style={{ backgroundImage: "url('https://mesamovingexperts.com/wp-content/uploads/2021/11/slide2-3.jpg')" }}>

      <div
        ref={ref}
        className="max-w-6xl mx-auto px-6 py-16 flex flex-col md:flex-row gap-10"

      >
        {cardsData.map(({ icon, title, description }, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            animate={controls}
            variants={cardVariants}
            className="flex items-center gap-6 flex-1 blurcard"
          >
            <div className="flex-shrink-0">{icon}</div>

            <div>
              <h3 className="text-xl font-semibold text-white">{title}</h3>
              <p className="mt-2 text-white">{description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
