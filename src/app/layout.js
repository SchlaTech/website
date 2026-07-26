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

export const metadata = {
  metadataBase: new URL("https://schlatech.com"),
  title: {
    default: "SchlaTech | Manufacturing Software, ERP Solutions and Automation",
    template: "%s | SchlaTech",
  },
  description:
    "SchlaTech helps manufacturers eliminate manual work through custom software, Acumatica and Global Shop ERP solutions, automation, reporting, and system integrations.",
  alternates: {
    canonical: "https://schlatech.com",
  },
  openGraph: {
    title: "SchlaTech | Manufacturing Software, ERP Solutions and Automation",
    description:
      "SchlaTech helps manufacturers eliminate manual work through custom software, Acumatica and Global Shop ERP solutions, automation, reporting, and system integrations.",
    url: "https://schlatech.com",
    siteName: "SchlaTech",
    type: "website",
    images: [{ url: "/images/icon.png", width: 1200, height: 630, alt: "SchlaTech logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SchlaTech | Manufacturing Software, ERP Solutions and Automation",
    description:
      "SchlaTech helps manufacturers eliminate manual work through custom software, Acumatica and Global Shop ERP solutions, automation, reporting, and system integrations.",
    images: ["/images/icon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/images/icon.png",
    apple: "/images/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[var(--color-background)] text-[var(--color-foreground)] antialiased">
        {children}
      </body>
    </html>
  );
}
