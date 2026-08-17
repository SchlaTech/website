import Header from "../../components/Header";
import SectionHeading from "../../components/home/SectionHeading";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Integrations & APIs | SchlaTech",
  description: "Connect ERP, internal systems, external services, and APIs to create reliable data flows and automation.",
  alternates: { canonical: "https://schlatech.com/services/integrations" },
  openGraph: {
    title: "Integrations & APIs | SchlaTech",
    description: "Connect ERP, internal systems, external services, and APIs to create reliable data flows and automation.",
    url: "https://schlatech.com/services/integrations",
    type: "website",
    images: [{ url: "/images/icon.png", width: 1200, height: 630, alt: "SchlaTech logo" }],
  },
};

export default function IntegrationsPage() {
  return (
    <>
      <Header
        eyebrow="Integrations & APIs"
        title="Reliable connections between systems"
        subtitle="APIs, middleware, and integrations that keep data consistent and automate cross-system workflows."
        ctaHref="#contact"
        ctaText="Discuss integrations"
        showCTA
      />

      <main className="mx-auto max-w-5xl px-4 py-12">
        <SectionHeading
          eyebrow="Integrations"
          title="Bring systems together"
          description="From ERP connectors to external APIs, we build integrations that are robust, observable, and maintainable."
        />

        <section className="mt-8 grid gap-8 md:grid-cols-2">
          <article className="rounded-xl border border-[var(--color-border)] bg-white p-6">
            <h3 className="mb-2 text-lg font-semibold">ERP integration</h3>
            <p className="text-[color:var(--color-muted)]">Sync data, surface KPIs, and automate workflows between the ERP and other systems.</p>
          </article>
          <article className="rounded-xl border border-[var(--color-border)] bg-white p-6">
            <h3 className="mb-2 text-lg font-semibold">APIs and middleware</h3>
            <p className="text-[color:var(--color-muted)]">Design and implement APIs, queues, and middleware to manage reliable data flow and error handling.</p>
          </article>
        </section>

        <div className="mt-10">
          <Link href="#contact" className="text-[var(--color-teal)] font-semibold">Start integrating</Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
