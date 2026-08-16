import Header from "../../components/Header";
import SectionHeading from "../../components/home/SectionHeading";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Custom Software | SchlaTech",
  description: "Custom web, desktop, and mobile applications built around your workflows and business needs.",
  alternates: { canonical: "https://schlatech.com/services/custom-software" },
  openGraph: {
    title: "Custom Software | SchlaTech",
    description: "Custom web, desktop, and mobile applications built around your workflows and business needs.",
    url: "https://schlatech.com/services/custom-software",
    type: "website",
    images: [{ url: "/images/icon.png", width: 1200, height: 630, alt: "SchlaTech logo" }],
  },
};

export default function CustomSoftwarePage() {
  return (
    <>
      <Header
        eyebrow="Custom Software"
        title="Build software that matches how your team works"
        subtitle="Purpose-built applications that replace spreadsheets, reduce manual entry, and integrate with your business systems."
        ctaHref="#contact"
        ctaText="Talk about a project"
        showCTA
      />

      <main className="mx-auto max-w-5xl px-4 py-12">
        <SectionHeading
          eyebrow="Custom Applications"
          title="Tools designed for your processes"
          description="We design, build, and maintain custom apps that solve the problems off-the-shelf software can't." 
        />

        <section className="mt-8 grid gap-8 md:grid-cols-2">
          <article className="rounded-xl border bg-white p-6">
            <h3 className="mb-2 text-lg font-semibold">Internal tools</h3>
            <p className="text-[color:var(--color-muted)]">Replace fragile spreadsheets and manual processes with reliable internal tools.</p>
          </article>
          <article className="rounded-xl border bg-white p-6">
            <h3 className="mb-2 text-lg font-semibold">Customer-facing apps</h3>
            <p className="text-[color:var(--color-muted)]">Web and mobile experiences that serve customers or partners with secure, maintainable interfaces.</p>
          </article>
        </section>

        <div className="mt-10">
          <Link href="#contact" className="text-[var(--color-teal)] font-semibold">Get started</Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
