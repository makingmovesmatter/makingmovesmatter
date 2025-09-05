import React from 'react'
import Section1 from './section1'
import Section2 from './section2'
import Header from '../components/header';
import HowItWorksSection from '../components/home/HowItWorksSection';
import Faq from '../components/faq';

const page = () => {
  const headerImg =
    "/images/about.png";
  const headerText1 = "About";
  const headerText2 = "Our Service" ;
  const headerDesc = "Making Moves Matter provides safe, reliable, stress-free moving services." ;
  return (
    <div>
      <Header headerImg={headerImg} headerText1={headerText1} headerText2={headerText2} headerDesc ={headerDesc} />
      <Section1 />
      <HowItWorksSection />
      
      <Section2 />
      <Faq />
    </div>
  )
}

export default page




export const metadata = {
  title: "About Us | Mesa Moving Experts | Making Moves Matter",
  description:
    "Learn more about Mesa Moving Experts — trusted movers in Mesa, AZ. We provide reliable local and long-distance moving, packing, and storage services with a customer-first approach.",
  keywords: [
    "About Mesa Moving Experts",
    "Mesa moving company story",
    "Professional movers Mesa AZ",
    "Trusted moving company Arizona",
    "Local and long distance movers Mesa",
  ],
  authors: [{ name: "Mesa Moving Experts", url: "https://mesamovingexperts.com" }],
  creator: "Mesa Moving Experts",
  publisher: "Mesa Moving Experts",
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/about-us/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "About Us | Mesa Moving Experts | Making Moves Matter",
    description:
      "Discover who we are at Mesa Moving Experts. Our team provides professional moving, packing, and storage services in Mesa, AZ with years of experience.",
    url: "https://mesamovingexperts.com/about-us/",
    siteName: "Making Moves Matter",
    images: [
      {
        url: "/images/logo.png",
        width: 500,
        height: 300,
        alt: "Mesa Moving Experts Logo",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "profile",
    publishedTime: "2021-11-15T16:30:12+00:00",
    modifiedTime: "2025-08-16T15:57:01+00:00",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Mesa Moving Experts | Making Moves Matter",
    description:
      "Get to know Mesa Moving Experts — Arizona’s trusted movers for residential and commercial relocations. Experience stress-free moving with our expert team.",
    images: ["/images/logo.png"],
    creator: "@mesamoving",
  },
  other: {
    "article:modified_time": "2025-08-16T15:57:01+00:00",
    "twitter:label1": "Est. reading time",
    "twitter:data1": "3 minutes",
    "profile:first_name": "Mesa",
    "profile:last_name": "Moving Experts",
    "organization:role": "Professional Moving Company",
  },
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/images/logo.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "manifest",
        url: "/images/logo.pngt",
      },
      {
        rel: "mask-icon",
        url: "/images/logo.png",
        color: "#5bbad5",
      },
      {
        rel: "msapplication-TileImage",
        url: "/images/logo.png",
      },
    ],
  },
  themeColor: "#ffffff",
};
