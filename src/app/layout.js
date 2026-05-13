import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Providers } from "./providers";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollButtons from "@/components/ScrollButtons";
import PageLoader from "@/components/PageLoader";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const personalDetails = {
  name: "RM Redoan",
  alternateName: ["Redoan Mollik", "RM REDOAN", "Redoan"],
  jobTitle: "MERN Stack Developer",
  url: "https://my-portfolio-lake-chi-f0cf9xubd5.vercel.app",
  email: "redoanmollik582@gmail.com",
  location: "Dhaka, Bangladesh",
  sameAs: [
    "https://www.linkedin.com/in/redoan-mollik",
    "https://github.com/redoan285",
    "https://www.facebook.com/share/1BWpUSYkyg/"
  ]
};

export const metadata = {
  metadataBase: new URL(personalDetails.url),
  applicationName: "RM Redoan Portfolio",
  title: {
    default: "RM Redoan | MERN Stack Developer - Dhaka, Bangladesh",
    template: "%s | RM Redoan"
  },
  description: "RM Redoan is a passionate MERN Stack Developer and CSE student from Dhaka, Bangladesh. Specialized in building modern, responsive, and user-friendly web applications using React, Next.js, and Node.js.",
  keywords: [
    "RM Redoan", "Redoan Mollik", "MERN Stack Developer", "Full Stack Developer",
    "CSE Student", "Dhaka Developer", "Bangladesh Developer", "React Developer",
    "Next.js Developer", "Web Developer", "Software Engineer"
  ],
  authors: [{ name: "RM Redoan", url: personalDetails.url }],
  creator: "RM Redoan",
  publisher: "RM Redoan",
  category: "technology",

  openGraph: {
    type: "profile",
    locale: "en_US",
    url: personalDetails.url,
    title: "RM Redoan | MERN Stack Developer - Dhaka, Bangladesh",
    description: "RM Redoan – MERN Stack Developer & CSE Student from Dhaka, Bangladesh. Building high-performance web applications with React, Next.js & Node.js.",
    siteName: "RM Redoan Portfolio",
    firstName: "RM",
    lastName: "Redoan",
    username: "redoan285",
    images: [
      {
        url: `${personalDetails.url}/og-image.png`,
        alt: "RM Redoan - MERN Stack Developer Bangladesh",
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RM Redoan | MERN Stack Developer",
    description: "RM Redoan – MERN Stack Developer & CSE Student from Dhaka, Bangladesh.",
    images: [`${personalDetails.url}/og-image.png`],
    creator: "@redoan285",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
    ],
    shortcut: "/icon.png",
    apple: [
      { url: "/icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${personalDetails.url}/#person`,
        "name": personalDetails.name,
        "alternateName": personalDetails.alternateName,
        "givenName": "RM",
        "familyName": "Redoan",
        "jobTitle": [
          "MERN Stack Developer",
          "Full-Stack Developer",
          "CSE Student"
        ],
        "url": personalDetails.url,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Dhaka",
          "addressCountry": "BD"
        },
        "sameAs": personalDetails.sameAs,
        "description": "RM Redoan is a passionate MERN Stack Developer and CSE student from Dhaka, Bangladesh.",
        "email": personalDetails.email,
        "knowsAbout": [
          "React", "Next.js", "Node.js", "JavaScript", "Tailwind CSS", "MongoDB", "Express.js"
        ],
        "nationality": {
          "@type": "Country",
          "name": "Bangladesh"
        }
      },
      {
        "@type": "WebSite",
        "@id": `${personalDetails.url}/#website`,
        "url": personalDetails.url,
        "name": "RM Redoan",
        "description": "Professional Portfolio of RM Redoan",
        "publisher": { "@id": `${personalDetails.url}/#person` },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": `${personalDetails.url}/#webpage`,
        "url": personalDetails.url,
        "name": "RM Redoan | MERN Stack Developer",
        "isPartOf": { "@id": `${personalDetails.url}/#website` },
        "about": { "@id": `${personalDetails.url}/#person` },
        "description": "RM Redoan – MERN Stack Developer & CSE Student from Dhaka, Bangladesh."
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon.png" sizes="any" />
        <link rel="shortcut icon" href="/icon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block" />
        <link rel="image_src" href={`${personalDetails.url}/og-image.png`} />
      </head>
      <body suppressHydrationWarning className={`${plusJakartaSans.variable} ${inter.variable} bg-background text-on-background font-body-md overflow-x-hidden`}>
        <Providers>
          <PageLoader />
          <CustomCursor />
          <ScrollProgress />
          <SmoothScroll>
            {children}
            <ScrollButtons />
          </SmoothScroll>
        </Providers>
        <Script
          id="person-schema"
          strategy="afterInteractive"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
