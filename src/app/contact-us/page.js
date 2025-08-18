import Header from "../components/header";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import ContactSection from "../components/contact/contactsection";

export default function ContactUsPage() {
  const headerImg =
    "https://images.ctfassets.net/hrltx12pl8hq/2RwJp3f9UiCnfWBEunwxOQ/f11257994853124d7b1a6a935e678c13/0_hero.webp?fit=fill&w=600&h=400";
  return (
    <div className="min-h-screen bg-white px-6 py-12">
      <Header headerImg={headerImg} />
      <div className="mt-4  text-md bg-white">
        <div className="flex justify-center items-center space-x-2 ">
          <Link href="/" className="hover:underline">
            <FaHome className="text-red-500" />
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
  title: "Contact Us | Mesamovingexperts.com",
  description:
    "If you have any queries regarding our services or want to schedule our moving services in Mesa AZ, you can contact us by calling or filling out the form.",
  robots:
    "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  keywords: [
    "Mesa Moving Experts",
    "Mesa AZ Movers",
    "Contact Mesa Movers",
    "Moving Services in Mesa",
    "Hot Tub Movers Mesa AZ",
  ],
  openGraph: {
    title: "Contact Us | Mesamovingexperts.com",
    description:
      "If you have any queries regarding our services or want to schedule our moving services in Mesa AZ, you can contact us by calling or filling out the form.",
    url: "https://mesamovingexperts.com/contact-us/",
    siteName: "Making Moves Matter",
    locale: "en_US",
    type: "article",
    images: [
      {
        url: "https://mesamovingexperts.com/wp-content/uploads/2021/11/Logo.jpg",
        width: 300,
        height: 198,
        alt: "Mesa Moving Experts Logo",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Mesamovingexperts.com",
    description:
      "If you have any queries regarding our services or want to schedule our moving services in Mesa AZ, you can contact us by calling or filling out the form.",
  },
  alternates: {
    canonical: "https://mesamovingexperts.com/contact-us/",
  },
};
