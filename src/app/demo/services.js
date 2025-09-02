"use client";

import { motion } from "framer-motion";

const Services = () => {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // delay between each card
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="section-one pb-16">
      <div className="container">

        <motion.div
          className="contetnt-one flex justify-between items-center py-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <div className="left-side">
            <div className="section-title capitalize">
              <h1>Our best <span>services</span></h1>
            </div>
            <div className="section-subtitle">
              <p>
                We are a one stop solution and customized service provider for all
                moving need for our all customers
              </p>
            </div>
          </div>

          <div className="right-side mt-10">
            <a href="/" className="btn btn-primary">
              View All
            </a>
          </div>
        </motion.div>

        {/* Service Cards */}
        <motion.div
          className="content-two py-6 service-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >

          <motion.div className="service-card relative" variants={cardVariants}>
            <div className="feacher-card">
              <div className="card-text">Commercial</div>
            </div>
            <div className="card-banner-text">
              <img src="/images/image copy 2.png" alt="commercial-service" />
              <p>Expert relocation for offices, retail stores, and businesses, ensuring minimal downtime.</p>
            </div>
          </motion.div>

          <motion.div className="service-card relative" variants={cardVariants}>
            <div className="feacher-card">
              <div className="card-text">Commercial</div>
            </div>
            <div className="card-banner-text">
              <img src="/images/image copy 2.png" alt="commercial-service" />
              <p>Expert relocation for offices, retail stores, and businesses, ensuring minimal downtime.</p>
            </div>
          </motion.div>


          <motion.div className="service-card relative" variants={cardVariants}>
            <div className="feacher-card">
              <div className="card-text">Commercial</div>
            </div>
            <div className="card-banner-text">
              <img src="/images/image copy 2.png" alt="commercial-service" />
              <p>Expert relocation for offices, retail stores, and businesses, ensuring minimal downtime.</p>
            </div>
          </motion.div>


          <motion.div className="service-card relative" variants={cardVariants}>
            <div className="feacher-card">
              <div className="card-text">Commercial</div>
            </div>
            <div className="card-banner-text">
              <img src="/images/image copy 2.png" alt="commercial-service" />
              <p>Expert relocation for offices, retail stores, and businesses, ensuring minimal downtime.</p>
            </div>
          </motion.div>


          <motion.div className="service-card relative" variants={cardVariants}>
            <div className="feacher-card">
              <div className="card-text">Commercial</div>
            </div>
            <div className="card-banner-text">
              <img src="/images/image copy 2.png" alt="commercial-service" />
              <p>Expert relocation for offices, retail stores, and businesses, ensuring minimal downtime.</p>
            </div>
          </motion.div>


          <motion.div className="service-card relative" variants={cardVariants}>
            <div className="feacher-card">
              <div className="card-text">Commercial</div>
            </div>
            <div className="card-banner-text">
              <img src="/images/image copy 2.png" alt="commercial-service" />
              <p>Expert relocation for offices, retail stores, and businesses, ensuring minimal downtime.</p>
            </div>
          </motion.div>

          
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
