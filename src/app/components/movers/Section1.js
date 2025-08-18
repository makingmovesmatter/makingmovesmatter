"use client";
import React, { useState } from "react";

const Section1 = () => {
  const [location, setLocation] = useState("Dhaka");

  const handleSearch = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div
      className="w-full py-16 bg-gray-50"
      style={{ backgroundImage: "url('/images/blog.jpeg')" }}
    >
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold pb-5 uppercase text-[var(--white-color)]">
          Find Movers Near You
        </h2>
        <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-md">
          {/* Search Field Inside Map */}
          <div className="absolute top-0 left-0 h-full z-10 bg-white p-4 rounded-md shadow-lg w-[300px]">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Find a location near you
            </h2>
            <input
              type="text"
              value={location}
              onChange={handleSearch}
              placeholder="Enter city or area"
              className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm"
            />
          </div>

          {/* Google Map */}
          <iframe
            title="Google Map"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(
              location
            )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
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

export default Section1;
