import Header from "../components/header";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ContactSection from "../components/contact/contactsection";

export default function ContactUsPage() {
  const headerImg =
    "/images/contact.png";
  const headerText1 = "Contact";
  const headerText2 = "With Us" ;
  const headerDesc = "fast, friendly, and reliable moving assistance" ;
  return (
    <div>
      <Header headerImg={headerImg} headerText1={headerText1} headerText2={headerText2} headerDesc ={headerDesc} />
      <div className="mt-4  text-md bg-white">
        <div className="flex justify-center items-center space-x-2 ">
          <Link href="/" className="hover:underline">
            <FaHome className="text-[var(--accent-color)]" />
          </Link>
          <span>
            <MdOutlineKeyboardArrowRight />
          </span>
          <span className="text-black cursor-default">Contact Us</span>
        </div>
      </div>
      <ContactSection />
    </div>
  );
}

export const metadata = {
  title: "Contact Us | Mesa Moving Experts | Making Moves Matter",
  description:
    "Contact Mesa Moving Experts for professional moving services in Mesa, AZ. Call us today or fill out our contact form to schedule stress-free moving and packing services.",
  keywords: [
    "Mesa moving company",
    "Contact movers Mesa AZ",
    "Moving services in Mesa",
    "Mesa AZ packing services",
    "Local movers contact",
  ],
  authors: [{ name: "Mesa Moving Experts", url: "https://mesamovingexperts.com" }],
  creator: "Mesa Moving Experts",
  publisher: "Mesa Moving Experts",
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: {
    canonical: "/contact-us/",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
  },
  openGraph: {
    title: "Contact Us | Mesa Moving Experts | Making Moves Matter",
    description:
      "Contact Mesa Moving Experts for professional moving services in Mesa, AZ. Call us today or fill out our contact form to schedule stress-free moving and packing services.",
    url: "https://mesamovingexperts.com/contact-us/",
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
    type: "website",
    publishedTime: "2021-11-15T15:59:24+00:00",
    modifiedTime: "2025-08-17T01:10:08+00:00",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Mesa Moving Experts | Making Moves Matter",
    description:
      "Need help with your move in Mesa, AZ? Contact Mesa Moving Experts today to get fast support and schedule your move.",
    images: ["/images/logo.png"],
    creator: "@mesamoving",
  },
  other: {
    "article:modified_time": "2025-08-17T01:10:08+00:00",
    "twitter:label1": "Est. reading time",
    "twitter:data1": "1 minute",
    "contact:contact_type": "customer support",
    "contact:email": "info@mesamovingexperts.com",
    "contact:phone_number": "+1-4809348218",
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
        url: "/images/logo.png",
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