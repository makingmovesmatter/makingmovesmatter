"use client";
import { motion } from "framer-motion";
import { 
  FaPhoneAlt, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram 
} from "react-icons/fa";

const Footer = () => {
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
    <footer className="bg-gray-900 text-[var(--white)] pt-12 pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Top contact info */}
        <motion.div
          className="flex flex-wrap justify-center gap-11 pb-8 border-b border-gray-700"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.a 
            href="tel:+1234567890" 
            variants={itemVariants} 
            className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors text-xl"
          >
            <FaPhoneAlt className="text-[var(--primary)] " /> 
            <span>+1 234 567 890</span>
          </motion.a>
          <motion.a 
            href="mailto:contact@domain.com" 
            variants={itemVariants} 
            className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors text-xl"
          >
            <FaEnvelope className="text-[var(--primary)] " /> 
            <span>contact@domain.com</span>
          </motion.a>
          <motion.a 
            href="google-map" 
            variants={itemVariants} 
            className="flex items-center gap-2 hover:text-[var(--primary)] transition-colors text-xl"
          >
            <FaMapMarkerAlt className="text-[var(--primary)] " /> 
            <span>123 Street, City</span>
          </motion.a>
        </motion.div>

        {/* Main footer content */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 py-12 gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Company info */}
          <motion.div variants={itemVariants}>
            <h3 className="text-[var(--primary)] text-2xl font-bold mb-4">Mesa Moving Experts</h3>
            <p className="text-gray-400 mb-6 leading-relaxed text-lg">
              Mesa Moving Experts is a full-service moving company that provides local and long-distance moving services, packing and unpacking, storage solutions, and more.
            </p>

            <a 
              href="tel:+1234567890" 
              className="btn btn-primary relative top-5 bottom-5 pb-9" 
            >
              Call Us Now
            </a>
          </motion.div>

          {/* Services links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[var(--primary)] text-2xl font-semibold mb-4 lg:mt-0 mt-4">Services</h4>
            <ul className="space-y-3">
              {["Commercial Services","Long Distance Moving","Furniture Assembly","Local Moving","Furniture Moving" ,"Packing And Unpacking Services" ,"Large and Heavy Item Moving","Storage" ,"Hot Tub Relocation"].map((service, i) => (
                <motion.li key={i} variants={itemVariants}>
                  <a href={`/${service.toLowerCase().replace(/\s+/g, "-")}`} className="text-gray-400 hover:text-[var(--primary)] transition-colors text-lg">
                    {service}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h4 className="text-[var(--primary)] text-2xl font-semibold mb-4">Service Area</h4>
            <ul className="space-y-3">
              {["Mesa-Az","Chandler AZ","Scottsdale AZ","Tempe AZ","Gendale AZ","Phoenix AZ"].map((link, i) => (
                <motion.li key={i} variants={itemVariants}>
                  <a href={`/${link.toLowerCase().replace(/\s+/g, "-")}`} className="text-gray-400 hover:text-[var(--primary)] transition-colors text-lg">
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>


          {/* Social media + newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="text-[var(--primary)] text-2xl font-semibold mb-4">Follow Us On</h4>
            <motion.div
              className="flex space-x-4 mb-6"
              variants={containerVariants}
            >
              {[FaFacebookF, FaTwitter, FaInstagram].map((Icon, i) => (
                <motion.a 
                  key={i}
                  href="#"
                  variants={itemVariants}
                  className="bg-gray-800 text-lg hover:bg-[var(--primary)] text-[var(--primary)] hover:text-gray-900 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon />
                </motion.a>
              ))}
            </motion.div>
            
            <div className="mt-4">
              <p className="text-gray-400 mb-2 text-lg">You can easily contact us by submitting a quote form</p>
              <div>
                 <a href="#" className="btn btn-secondary relative top-8">
                    Submit Quote
                 </a>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Copyright */}
        <motion.div 
          className="text-center pt-8 border-t border-gray-800 text-gray-500 text-lg"
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          © {new Date().getFullYear()} Mesa Moving Experts. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
