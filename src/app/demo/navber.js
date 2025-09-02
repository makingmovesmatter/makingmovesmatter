"use client";

import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaHome, FaServicestack, MdMedicalServices, FaBars} from "react-icons/fa";
import { IoReorderThreeOutline, IoMailOutline } from "react-icons/io5";
import { PiPhoneCallLight } from "react-icons/pi";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Quote from '../components/quote';
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const openQuote = () => setIsQuoteOpen(true);
  const closeQuote = () => setIsQuoteOpen(false);

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };
  
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <nav className="navbar">
        <motion.div
          className="bg-[var(--primary)]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="top-nav-section p-2 bg-[var(--primary)] text-white">
            <div className="container flex justify-between items-center">
              <motion.div
                className="social-icons flex space-x-4"
                variants={containerVariants}
              >
                <motion.a href="#" variants={itemVariants} className="text-xl hover:text-yellow-400">
                  <FaFacebookF />
                </motion.a>
                <motion.a href="#" variants={itemVariants} className="text-xl hover:text-yellow-400">
                  <FaTwitter />
                </motion.a>
                <motion.a href="#" variants={itemVariants} className="text-xl hover:text-yellow-400">
                  <FaInstagram />
                </motion.a>
              </motion.div>

              <motion.div
                className="contact-info flex space-x-6 text-sm sm:text-base"
                variants={containerVariants}
              >
                <motion.a href="tel:+1234567890" variants={itemVariants} className="flex items-center gap-2 hover:text-yellow-400">
                  <FaPhoneAlt /> <span>+1 234 567 890</span>
                </motion.a>
                <motion.a href="mailto:contact@domain.com" variants={itemVariants} className="flex items-center gap-2 hover:text-yellow-400">
                  <FaEnvelope /> <span>contact@domain.com</span>
                </motion.a>
                <motion.a href="google-map" variants={itemVariants} className="flex items-center gap-2 hover:text-yellow-400">
                  <FaMapMarkerAlt /> <span>123 Street, City</span>
                </motion.a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="bottom-nav-section absolute to-10% py-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="container flex justify-between items-center">
            <motion.div className="logo" variants={itemVariants}>
              <a href="/"><img src="/images/logo.png" /></a>
            </motion.div>

            <motion.div className="nav-links flex justify-between items-center space-x-6" variants={containerVariants}>
              <motion.a href="/services" variants={itemVariants}>
                Services <i className="fa fa-angle-down relative top-0.5" aria-hidden="true"></i>
                <div className="dropdown-menu" >
                  <a href="/commercial-services" className="flex">Commercial Services</a>
                  <a href="/long-distance-moving" className="flex">Long Distance Moving</a>
                  <a href="/furniture-assembly" className="flex">Furniture Assembly</a>
                  <a href="/local-moving" className="flex">Local Moving</a>
                  <a href="/furniture-moving" className="flex">Furniture Moving</a>
                  <a href="/packing-and-unpacking-services" className="flex">Packing And Unpacking Service</a>
                  <a href="/large-and-heavy-item-moving" className="flex">Large and Heavy Item Moving</a>
                  <a href="/storage" className="flex">Storage</a>
                  <a href="/hot-tub-relocation" className="flex">Hot Tub Relocation</a>
                </div>
              </motion.a>

              <motion.a href="/services" variants={itemVariants}>
                Service Area <i className="fa fa-angle-down relative top-0.5" aria-hidden="true"></i>
                <div className="dropdown-menu">
                  <a href="/mesa-az" className="flex">Mesa AZ</a>
                  <a href="/chandler-az" className="flex">Chandler AZ</a>
                  <a href="/scottsdale-az" className="flex">Scottsdale AZ</a>
                  <a href="/tempe-az" className="flex">Tempe AZ</a>
                  <a href="/gendale-az" className="flex">Gendale AZ</a>
                  <a href="/phoenix-az" className="flex">Phoenix AZ</a>
                </div>
              </motion.a>

              <motion.a href="/" variants={itemVariants}>
                About us
              </motion.a>

              <motion.a href="/" variants={itemVariants}>
                Contact us
              </motion.a>
            </motion.div>

            <motion.div className="quote-button nav-btn" variants={itemVariants}>
              <a href="tel:+1234567890" className="btn btn-primary">
                Call Now Today
              </a>
            </motion.div>

            <motion.div className="call-us-ctr-design" variants={itemVariants}>
              <div className="call-us-ctr-container">
                <a href="tel:4809348218" className="flex items-center gap-3">
                  <div className="call-us-icon">
                    <PiPhoneCallLight />
                  </div>

                  <div className="call-us-text">
                    <h1>Call Now</h1>
                    <p>(480) 934-8218</p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div className="email-us-ctr-design" variants={itemVariants}>
              <div className="email-us-ctr-container">
                <a href="mailto:makingmovesmatter07@gmail.com" className="flex items-center gap-3">
                  <div className="email-us-icon">
                    <IoMailOutline />
                  </div>

                  <div className="email-us-text">
                    <h1>Email Now</h1>
                    <p>makingmovesmatter07@gmail.com</p>
                  </div>
                </a>
              </div>
            </motion.div>

            <motion.div className="manu-open-button" variants={itemVariants} onClick={() => setIsMobileOpen(true)} >
              <IoReorderThreeOutline />
            </motion.div>
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div 
              className="mobile-nav fixed inset-0 z-50"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.3 }}
            >
              <div className="mobile-nav-container container h-full overflow-y-auto">
                <div className="flex justify-between items-start py-6">
                  <div className="logo">
                    <img src="/images/logo.png" alt="logo" />
                  </div>
                  <button className="text-2xl close-btn" onClick={() => setIsMobileOpen(false)}>
                    <FaXmark />
                  </button>
                </div>

                <motion.div
                  className="flex flex-col gap-4 mobile-items-container py-4"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                >
                  {/* Services */}
                  <motion.div variants={itemVariants}>
                    <button
                      onClick={() => toggleMenu("services")}
                      className="w-full flex justify-between items-center text-lg py-2"
                    >
                      <span>Services</span>
                      <i className={`fa fa-angle-down transition-transform ${openMenu === "services" ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {openMenu === "services" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col pl-4 mt-2 space-y-3 overflow-hidden mobile-sub-items"
                        >
                          <a href="/commercial-services" onClick={() => setIsMobileOpen(false)}>Commercial Services</a>
                          <a href="/long-distance-moving" onClick={() => setIsMobileOpen(false)}>Long Distance Moving</a>
                          <a href="/furniture-assembly" onClick={() => setIsMobileOpen(false)}>Furniture Assembly</a>
                          <a href="/local-moving" onClick={() => setIsMobileOpen(false)}>Local Moving</a>
                          <a href="/furniture-moving" onClick={() => setIsMobileOpen(false)}>Furniture Moving</a>
                          <a href="/packing-and-unpacking-services" onClick={() => setIsMobileOpen(false)}>
                            Packing & Unpacking
                          </a>
                          <a href="/large-and-heavy-item-moving" onClick={() => setIsMobileOpen(false)}>Large & Heavy Item</a>
                          <a href="/storage" onClick={() => setIsMobileOpen(false)}>Storage</a>
                          <a href="/hot-tub-relocation" onClick={() => setIsMobileOpen(false)}>Hot Tub Relocation</a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Service Area */}
                  <motion.div variants={itemVariants}>
                    <button
                      onClick={() => toggleMenu("areas")}
                      className="w-full flex justify-between items-center text-lg py-2"
                    >
                      <span>Service Area</span>
                      <i className={`fa fa-angle-down transition-transform ${openMenu === "areas" ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                      {openMenu === "areas" && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col pl-4 mt-2 space-y-3 overflow-hidden mobile-sub-items"
                        >
                          <a href="/mesa-az" onClick={() => setIsMobileOpen(false)}>Mesa AZ</a>
                          <a href="/chandler-az" onClick={() => setIsMobileOpen(false)}>Chandler AZ</a>
                          <a href="/scottsdale-az" onClick={() => setIsMobileOpen(false)}>Scottsdale AZ</a>
                          <a href="/tempe-az" onClick={() => setIsMobileOpen(false)}>Tempe AZ</a>
                          <a href="/glendale-az" onClick={() => setIsMobileOpen(false)}>Glendale AZ</a>
                          <a href="/phoenix-az" onClick={() => setIsMobileOpen(false)}>Phoenix AZ</a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Static Links */}
                  <motion.a href="/" variants={itemVariants} className="text-lg py-2" onClick={() => setIsMobileOpen(false)}>
                    About Us
                  </motion.a>
                  <motion.a href="/" variants={itemVariants} className="text-lg py-2" onClick={() => setIsMobileOpen(false)}>
                    Contact Us
                  </motion.a>
                </motion.div>

                {/* Button */}
                <motion.div variants={itemVariants} className="py-6 mobile-items-btn">
                  <a
                    href="tel:+1234567890"
                    className="btn btn-primary block text-center"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Call Now Today
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  )
}

export default Navbar;