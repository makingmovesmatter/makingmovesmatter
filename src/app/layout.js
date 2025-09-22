import { Montserrat } from "next/font/google";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/navber";
import Footer from "./components/footer";
import CallNowButton from "./components/CallNowButton";
import QuoteButton from "./components/QuoteButton";
import Purchase from "./components/Purchase";
import BackToTop from "./components/BackToTop";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Montserrat font
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

// Geist fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Residential Moving Company in Mesa AZ | Making Moves Matter",
  description:
    "Mesa Moving Experts is a top-rated residential moving company in Mesa, AZ. We provide professional moving services including packing, unpacking, loading, storage, and office relocation.",
  metadataBase: new URL("https://mesamovingexperts.com"),
  alternates: { canonical: "/" },
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
    title: "Residential Moving Company in Mesa AZ | Making Moves Matter",
    description:
      "Mesa Moving Experts in Mesa, AZ provides residential and commercial moving services, packing, unpacking, and secure storage solutions.",
    url: "https://mesamovingexperts.com",
    siteName: "Mesa Moving Experts",
    images: [
      {
        url: "/images/logo.png",
        width: 400,
        height: 400,
        alt: "Mesa Moving Experts Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Residential Moving Company in Mesa AZ | Making Moves Matter",
    description:
      "Mesa Moving Experts in Mesa, AZ provides residential and commercial moving services, packing, unpacking, and secure storage solutions.",
    images: ["/images/logo.png"],
    creator: "@MesaMoving",
  },
  icons: {
    icon: [
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/images/logo.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "icon",
        url: "/images/logo.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "icon",
        url: "/images/logo.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  keywords: [
    "residential moving company Mesa AZ",
    "Mesa moving experts",
    "local movers Mesa AZ",
    "packing and unpacking services",
    "office relocation Mesa AZ",
    "long distance moving Mesa AZ",
    "affordable movers Mesa",
  ],
  authors: [{ name: "Mesa Moving Experts", url: "https://mesamovingexperts.com" }],
  category: "Moving Services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-US" data-arp>
      <head>
        <link
          rel="stylesheet"
          href="https://site-assets.fontawesome.com/releases/v6.7.2/css/all.css"
        />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        {/* Google Tag Manager Script */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TG3LZZGJ');`}
        </Script>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TG3LZZGJ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Navbar />
        {children}
        <SpeedInsights />
        <Footer />
        <CallNowButton />
        <QuoteButton />
        <Purchase />
        <BackToTop />
      </body>
    </html>
  );
}