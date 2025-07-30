import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "SchlaTech",
  description: "Custom software for small businesses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Custom apps, training, and reporting for small businesses. Let SchlaTech help you modernize."
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="SchlaTech – Custom Software for Small Businesses"
      />
      <meta
        property="og:description"
        content="Custom apps, training, and reporting for small businesses. Let SchlaTech help you modernize."
      />
      <meta
        property="og:image"
        content="https://schlatech.com/images/icon.png"
      />
      <meta property="og:url" content="https://schlatech.com" />
      <meta property="og:type" content="website" />

      {/* <!-- Twitter (some iOS apps use it too) --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="SchlaTech" />
      <meta
        name="twitter:description"
        content="Custom software solutions for small businesses"
      />
      <meta
        name="twitter:image"
        content="https://schlatech.com/images/logo-share.png"
      />

      {/* <!-- Apple-specific --> */}
      <meta name="apple-mobile-web-app-title" content="SchlaTech" />
      <link rel="apple-touch-icon" href="/images/logo-share.png"></link>
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
