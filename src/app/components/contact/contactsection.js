import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="w-full py-16 bg-gray-50">
      <div className="container mx-auto px-4 flex flex-col md:flex-row gap-10">
        {/* Contact Info */}
        <div className="md:w-3/12 w-full">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">
            Have questions or need help? Reach out to us and we’ll be happy to
            assist you.
          </p>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-center gap-2">
              <strong>Phone:</strong>{" "}
              <a href="tel:+14809348218" className="text-[var(--accent-color)] hover:underline">
                (480) 934-8218
              </a>
            </p>
            <p className="flex items-center gap-2">
              <strong>Email:</strong>{" "}
              <a
                href="mailto:makingmovesmatter07@gmail.com"
                className="text-[var(--accent-color)] hover:underline"
              >
                makingmovesmatter07@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <strong>Address:</strong> 445 S Dobson Rd 85202
            </p>
          </div>
        </div>

        {/* Google Map */}
        <div className="md:w-9/12 w-full h-[300px] md:h-[500px]">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13322.55388583929!2d-111.871682!3d33.406595!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x872b080fd540880b%3A0x5314661663a9e443!2s445%20S%20Dobson%20Rd%20%231065%2C%20Mesa%2C%20AZ%2085202!5e0!3m2!1sen!2sus!4v1757011207056!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;