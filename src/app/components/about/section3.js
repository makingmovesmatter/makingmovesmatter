import Script from "next/script";
import React from "react";

const Section3 = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Load Trustindex script */}
      <Script
        src="https://cdn.trustindex.io/loader.js?411b643509dc8448e8662e3a164"
        strategy="afterInteractive"
      />

      {/* Correct widget container as required by Trustindex */}
      <div
        className="trustindex-widget"
        data-id="411b643509dc8448e8662e3a164"
        style={{ maxWidth: "100%", overflow: "hidden" }}
      ></div>
    </div>
  );
};

export default Section3;
