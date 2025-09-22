import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// ✅ SEO Metadata
export const metadata = {
  title: "Whispra - Coming Soon 🚀",
  description:
    "Whispra is launching soon! Stay tuned and be the first to know when we go live.",
  keywords: ["Whispra", "Coming Soon", "New Launch", "Stay Tuned"],
  authors: [{ name: "Whispra Team" }],
  creator: "Whispra",
  metadataBase: new URL("https://whispra.life/"), // <-- apna domain dalna
  openGraph: {
    title: "Whispra - Coming Soon 🚀",
    description:
      "Whispra is launching soon! Stay tuned and be the first to know when we go live.",
    url: "https://whispra.life/",
    siteName: "Whispra",
    images: [
      {
        url: "/bgcover.jpg", // public folder wali image
        width: 1200,
        height: 630,
        alt: "Whispra Coming Soon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Whispra - Coming Soon 🚀",
    description:
      "Whispra is launching soon! Stay tuned and be the first to know when we go live.",
    images: ["/bgcover.jpg"],
    creator: "@whispra", // apna twitter handle dal sakta hai
  },
  robots: {
    index: true,
    follow: true,
  },
  // ✅ Favicon / App icons
  icons: {
    icon: "/logoforwhispra.png", // <-- public folder me daal
    shortcut: "/logoforwhispra.png", // optional
    apple: "/logoforwhispra.png", // optional: iOS ke liye
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
