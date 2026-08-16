import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components

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
    default: "SchlaTech | Custom Software, Automation, and ERP Solutions",
    template: "%s | SchlaTech",
  },
  description:
    "SchlaTech builds custom software, automation, integrations, and business systems that solve real operational problems, with deep experience in manufacturing and ERP.",
  alternates: {
    canonical: "https://schlatech.com",
  },
  openGraph: {
    title: "SchlaTech | Custom Software, Automation, and ERP Solutions",
    description:
      "SchlaTech builds custom software, automation, integrations, and business systems that solve real operational problems, with deep experience in manufacturing and ERP.",
    url: "https://schlatech.com",
    siteName: "SchlaTech",
    type: "website",
    images: [{ url: "/images/icon.png", width: 1200, height: 630, alt: "SchlaTech logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SchlaTech | Custom Software, Automation, and ERP Solutions",
    description:
      "SchlaTech builds custom software, automation, integrations, and business systems that solve real operational problems, with deep experience in manufacturing and ERP.",
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
