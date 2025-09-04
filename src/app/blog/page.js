import React from "react";
import Section1 from "./section1";
import Header from "../components/header";

const Blog = () => {

  const headerImg =
    "/images/blogBanner.png";
  const headerText1 = "Watch";
  const headerText2 = "Our Blog" ;
  const headerDesc = "Understand how Making Moves Matter provides safe, reliable, stress-free moving services." ;


  return (
    <div>
      <Header headerImg={headerImg} headerText1={headerText1} headerText2={headerText2} headerDesc ={headerDesc} />
      <Section1 />
    </div>
  );
};

export default Blog;


export const metadata = {
  title: "Blog | Mesamovingexperts.com",
  description: "Since 2015, EZ Haul Movers LLC has been an award-winning and reputable moving service provider. Check out our latest blogs and articles now.",

  metadataBase: new URL("https://mesamovingexperts.com"),

  alternates: {
    canonical: "/blog/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "Blog | Mesamovingexperts.com",
    description: "Since 2015, EZ Haul Movers LLC has been an award-winning and reputable moving service provider. Check out our latest blogs and articles now.",
    url: "https://mesamovingexperts.com/blog/",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/logo.png",
        width: 300,
        height: 198,
        alt: "Reliable Hot Tub Relocation Services in Mesa AZ",
      },
    ],
    locale: "en_US",
    type: "article",
    publishedTime: "2021-11-15T17:16:46+00:00",
    modifiedTime: "2025-01-29T20:49:06+00:00",
  },

  twitter: {
    card: "summary_large_image",
    title: "Blog | Mesamovingexperts.com",
    description: "Since 2015, EZ Haul Movers LLC has been an award-winning and reputable moving service provider. Check out our latest blogs and articles now.",
    images: ["/images/logo.png"],
    creator: "@MesaMoving",
  },

  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "icon",
        url: "/images/logo.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "apple-touch-icon",
        url: "/images/logo.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        rel: "msapplication-TileImage",
        url: "/images/logo.png",
        sizes: "270x270",
        type: "image/png",
      },
    ],
  },

  keywords: [
    "moving blog",
    "moving tips",
    "relocation advice",
    "Mesa moving experts",
    "moving company blog",
    "packing tips",
    "moving guides",
  ],

  authors: [{ name: "Mesa Moving Experts", url: "https://mesamovingexperts.com" }],
  category: "Moving Services",
  
  other: {
    "article:modified_time": "2025-01-29T20:49:06+00:00",
    "twitter:label1": "Est. reading time",
    "twitter:data1": "1 minute"
  }
};