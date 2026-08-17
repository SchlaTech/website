import Header from "../../components/Header";
import SectionHeading from "../../components/home/SectionHeading";
import Footer from "../../components/Footer";
import Link from "next/link";

export const metadata = {
  title: "Manufacturing & ERP Solutions | SchlaTech",
  description:
    "Manufacturing software, shop-floor automation, inventory workflows, and ERP integrations to reduce manual work and improve visibility.",
  alternates: { canonical: "https://schlatech.com/services/manufacturing" },
  openGraph: {
    title: "Manufacturing & ERP Solutions | SchlaTech",
    description:
      "Manufacturing software, shop-floor automation, inventory workflows, and ERP integrations to reduce manual work and improve visibility.",
    url: "https://schlatech.com/services/manufacturing",
    type: "website",
    images: [{ url: "/images/icon.png", width: 1200, height: 630, alt: "SchlaTech logo" }],
  },
};

export default function ManufacturingPage() {
  return (
    <>
      <Header
        eyebrow="Manufacturing & ERP"
        title="Software and automation for manufacturing operations"
        subtitle="Scheduling, inventory workflows, shop-floor tools, barcode and label systems, and ERP integrations built for operations."
        ctaHref="#contact"
        ctaText="Discuss Manufacturing Work"
        showCTA
      />

      <main className="mx-auto max-w-5xl px-4 py-12">
        <SectionHeading
          eyebrow="Manufacturing Software"
          title="Practical software for complex operations"
          description="We build tools that reduce manual steps, improve traceability, and connect the shop floor to your ERP."
        />

        <section className="mt-8 grid gap-8 md:grid-cols-2">
          <article className="rounded-xl border border-[var(--color-border)] bg-white p-6">
            <h3 className="mb-2 text-lg font-semibold">Shop-floor workflows</h3>
            <p className="text-[color:var(--color-muted)]">Mobile data capture, QR/Barcode scanning, and synchronized updates to your ERP.</p>
          </article>
          <article className="rounded-xl border border-[var(--color-border)] bg-white p-6">
            <h3 className="mb-2 text-lg font-semibold">Production scheduling</h3>
            <p className="text-[color:var(--color-muted)]">Scheduling, dispatch, and capacity planning tools that integrate with manufacturing data.</p>
          </article>
        </section>

        <div className="mt-10">
          <Link href="#contact" className="text-[var(--color-teal)] font-semibold">Start the conversation</Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
