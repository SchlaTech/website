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
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
