"use client";

import Quote from './quote';
import { motion } from 'framer-motion';
import { PiPhoneCallLight } from "react-icons/pi";
import {IoMailOutline } from "react-icons/io5";


const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: 'easeOut' } }
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const Header = ({ headerImg, headerText1, headerText2, headerDesc }) => {
  return (
    <>
      <header 
        className="w-full bg-cover bg-center bg-no-repeat min-h-[80vh] relative flex justify-center items-center"
        style={{ backgroundImage: `url(${headerImg})` }}
      >
        <div className="container z-10 w-full h-full py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto my-12">
            <motion.div 
              className="text-white flex flex-col lg:flex-row justify-between items-center gap-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div className="mb-8 lg:mb-0 lg:w-1/2" variants={fadeInUp}>
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:leading-18 font-black">
                  <span className="block text-maain-color capitalize">{headerText1}</span>
                  <span className="block capitalize">{headerText2}</span>
                </h1>
                <div className="text-xl font-normal mt-5 capitalize">
                   {headerDesc}
                </div>


                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-black">
                   <motion.div className="call-us-ctr-design">
                    <div className="call-us-ctr-container">
                      <a href="tel:4809348218" className="flex items-center gap-3">
                        <div className="call-us-icon">
                          <PiPhoneCallLight />
                        </div>
      
                        <div className="call-us-text">
                          <h1>Call Now</h1>
                        </div>
                      </a>
                    </div>
                  </motion.div>
      
                  <motion.div className="email-us-ctr-design">
                    <div className="email-us-ctr-container">
                      <a href="mailto:makingmovesmatter07@gmail.com" className="flex items-center gap-3">
                        <div className="email-us-icon">
                          <IoMailOutline />
                        </div>
      
                        <div className="email-us-text">
                          <h1>Email Now</h1>
                        </div>
                      </a>
                    </div>
                  </motion.div>
                </div>




              </motion.div>

              <motion.div variants={fadeInUp} className='w-full lg:w-1/2 nva'>
                <Quote />
              </motion.div>

            </motion.div>
          </div>
        </div>
      </header>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className='bg-[#ff9100] text-white py-4'
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'LICENSED AND INSURED',
              'TRAINED PROFESSIONALS',
              'PROFESSIONAL EQUIPMENT',
              'UPFRONT PRICING'
            ].map((text, idx) => (
              <div key={idx} className="flex justify-center sm:justify-start gap-2">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="w-full h-8 bg-[#ff9100] opacity-50" style={{
        clipPath: 'polygon(0 0, 100% 0, 100% 50%, 0 100%)'
      }}></div>
    </>
  );
};

export default Header;
