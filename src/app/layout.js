import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
    "SchlaTech builds custom software, automation, integrations, and ERP solutions for businesses that need technology built around real workflows. We work across operations, manufacturing, and process improvement.",
  alternates: {
    canonical: "https://schlatech.com",
  },
  openGraph: {
    title: "SchlaTech | Custom Software, Automation, and ERP Solutions",
    description:
      "SchlaTech builds custom software, automation, integrations, and ERP solutions for businesses that need technology built around real workflows. We work across operations, manufacturing, and process improvement.",
    url: "https://schlatech.com",
    siteName: "SchlaTech",
    type: "website",
    images: [{ url: "/images/icon.png", width: 1200, height: 630, alt: "SchlaTech logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "SchlaTech | Custom Software, Automation, and ERP Solutions",
    description:
      "SchlaTech builds custom software, automation, integrations, and ERP solutions for businesses that need technology built around real workflows. We work across operations, manufacturing, and process improvement.",
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
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} strategy="afterInteractive" />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');`,
              }}
            />
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}
