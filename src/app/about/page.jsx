import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ArrowRight, Box, Database, ShieldCheck, Smartphone } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components

export const metadata = {
  title: "About SchlaTech | Custom Software and ERP Partner",
  description:
    "Learn how SchlaTech helps businesses with custom software, ERP integrations, business automation, and process improvement built around real workflows.",
  alternates: {
    canonical: "https://schlatech.com/about",
  },
  openGraph: {
    title: "About SchlaTech | Custom Software and ERP Partner",
    description:
      "Learn how SchlaTech helps businesses with custom software, ERP integrations, business automation, and process improvement built around real workflows.",
    url: "https://schlatech.com/about",
    type: "website",
    images: [{ url: "/images/icon.png", width: 1200, height: 630, alt: "SchlaTech logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "About SchlaTech | Custom Software and ERP Partner",
    description:
      "Learn how SchlaTech helps businesses with custom software, ERP integrations, business automation, and process improvement built around real workflows.",
    images: ["/images/icon.png"],
  },
};

const successStories = [
  {
    title: "Acumatica OAuth / Microsoft Entra ID Migration",
    problem: "Legacy Windows auth blocked secure remote access and future-proofing.",
    solution: "Migrated to OAuth 2.0 and Microsoft Entra ID while preserving workflows and updating integrations.",
    impact: "Modern authentication, stronger security, and simpler deployments.",
  },
  {
    title: "Production Scheduling Dashboard",
    problem: "Planners jumped between screens and spreadsheets, slowing decisions.",
    solution: "Consolidated planning data into a single interface with conflict detection and streamlined updates.",
    impact: "Faster planning, fewer errors, and clearer visibility.",
  },
  {
    title: "Cutbill Builder",
    problem: "Manual cutbill creation took hours and introduced costly mistakes.",
    solution: "Desktop application automated calculations and exported production-ready files.",
    impact: "Reduced a multi-hour task to seconds and saved 250+ hours per year.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header
        title="Software Should Fit the Way Your Business Works"
        subtitle="SchlaTech builds custom applications, automation, integrations, reporting tools, and ERP solutions around real workflows and real business needs."
      />

      <main>
        <section className="bg-white py-16 sm:py-20">
          <div className="container-shell mx-auto max-w-5xl">
            <h2 className="mb-4 text-3xl font-semibold text-[var(--color-navy)]">A practical approach to custom software</h2>
            <p className="text-lg leading-relaxed text-[color:var(--color-muted)]">
              SchlaTech was built around a simple idea: businesses should not have to live with inefficient processes just because existing software does not support a better way.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[color:var(--color-muted)]">
              We build custom applications, automation, integrations, reporting tools, and ERP solutions around real workflows and real business needs.
            </p>
          </div>
        </section>

        <section className="bg-[color:var(--color-surface)] py-16 sm:py-20">
          <div className="container-shell mx-auto max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              <article className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]">
                <h3 className="mb-2 text-lg font-semibold text-[var(--color-navy)]">Business-first approach</h3>
                <p className="text-[color:var(--color-muted)]">We start with the process, the bottleneck, and the business outcome before we choose the technology.</p>
              </article>
              <article className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]">
                <h3 className="mb-2 text-lg font-semibold text-[var(--color-navy)]">ERP and Acumatica expertise</h3>
                <p className="text-[color:var(--color-muted)]">We understand how ERP, integrations, data, and operational workflows fit together in real organizations.</p>
              </article>
              <article className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]">
                <h3 className="mb-2 text-lg font-semibold text-[var(--color-navy)]">Maintainable, practical software</h3>
                <p className="text-[color:var(--color-muted)]">We build systems that are clear, reliable, and useful to the people who depend on them every day.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="container-shell mx-auto max-w-5xl">
            <h3 className="mb-4 text-2xl font-semibold text-[var(--color-navy)]">Where we have deep experience</h3>
            <p className="text-[color:var(--color-muted)]">
              Manufacturing and ERP systems are a major part of our background. That includes Acumatica, Global Shop ERP, production scheduling, inventory, shop-floor applications, reporting, integrations, authentication, and workflow automation.
            </p>
            <p className="mt-4 text-[color:var(--color-muted)]">
              That experience has shaped how we approach every project: understand the operation first, then build technology that supports it.
            </p>
          </div>
        </section>

        <section className="bg-[color:var(--color-surface)] py-16 sm:py-20">
          <div className="container-shell mx-auto max-w-5xl">
            <h3 className="mb-4 text-2xl font-semibold text-[var(--color-navy)]">What we deliver</h3>
            <ul className="grid gap-4 md:grid-cols-2">
              <li className="text-[color:var(--color-muted)]">Custom software built around your workflow</li>
              <li className="text-[color:var(--color-muted)]">Business automation and process improvement</li>
              <li className="text-[color:var(--color-muted)]">ERP and API integrations between internal and external systems</li>
              <li className="text-[color:var(--color-muted)]">Custom reporting and dashboard solutions</li>
              <li className="text-[color:var(--color-muted)]">Acumatica customizations, middleware, and connected applications</li>
              <li className="text-[color:var(--color-muted)]">Mobile, web, and desktop tools for operational teams</li>
            </ul>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="container-shell mx-auto max-w-5xl">
            <h3 className="mb-4 text-2xl font-semibold text-[var(--color-navy)]">Featured success stories</h3>
            <p className="text-[color:var(--color-muted)]">A few examples of how we turn business problems into operational improvements.</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {successStories.map((story) => (
                <article key={story.title} className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[color:var(--color-surface)] p-6 shadow-[var(--shadow-soft)]">
                  <h4 className="text-lg font-semibold text-[var(--color-navy)]">{story.title}</h4>
                  <p className="mt-3 text-sm text-[color:var(--color-muted)]">{story.problem}</p>
                  <p className="mt-2 text-sm text-[color:var(--color-muted)]">{story.solution}</p>
                  <p className="mt-3 text-sm font-semibold text-[var(--color-navy)]">{story.impact}</p>
                </article>
              ))}
            </div>
            <div className="mt-8">
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-teal)] transition hover:gap-3"
              >
                Explore all case studies
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--color-surface)] py-16 sm:py-20">
          <div className="container-shell mx-auto max-w-5xl">
            <h3 className="mb-3 text-2xl font-semibold text-[var(--color-navy)]">Technologies we use</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Acumatica",
                "Global Shop ERP",
                ".NET",
                "C#",
                "JavaScript",
                "Next.js",
                "SQL Server",
                "Power BI",
                "REST APIs",
                "Microsoft Azure",
              ].map((t) => (
                <span key={t} className="rounded-full border border-[var(--color-border)] bg-white px-3 py-1 text-sm text-[color:var(--color-muted)]">{t}</span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="container-shell mx-auto max-w-5xl">
            <h3 className="mb-6 text-2xl font-semibold text-[var(--color-navy)]">Meet the founder</h3>
            <div className="flex flex-col gap-6 md:flex-row md:items-start">
              <div className="md:w-48 md:flex-shrink-0">
                <Image src="/images/matt.jpg" alt="Matt Schlabach" width={192} height={192} className="h-48 w-48 rounded-[var(--radius-lg)] object-cover shadow-[var(--shadow-soft)]" />
              </div>
              <div className="md:flex-1">
                <p className="mb-3 text-lg text-[color:var(--color-muted)]">
                  Matt Schlabach leads SchlaTech with a practical, outcome-driven mindset. He brings together custom software engineering, ERP experience, business process knowledge, and hands-on problem solving to help teams improve the work they do every day.
                </p>

                <p className="mb-4 text-[color:var(--color-muted)]">Specialties</p>
                <div className="mt-2 grid gap-2 sm:grid-cols-2">
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-3 py-1 text-sm text-[color:var(--color-muted)]">
                    <Box className="h-4 w-4 text-[color:var(--color-muted)]" />
                    Custom software
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-3 py-1 text-sm text-[color:var(--color-muted)]">
                    <ShieldCheck className="h-4 w-4 text-[color:var(--color-muted)]" />
                    Business automation
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-3 py-1 text-sm text-[color:var(--color-muted)]">
                    <Smartphone className="h-4 w-4 text-[color:var(--color-muted)]" />
                    Acumatica development
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-3 py-1 text-sm text-[color:var(--color-muted)]">
                    <Database className="h-4 w-4 text-[color:var(--color-muted)]" />
                    ERP integrations and reporting
                  </span>
                </div>

                <div className="mt-6">
                  <p className="text-sm text-[color:var(--color-muted)]">Matt works directly with clients on architecture, requirements, integrations, and custom development to make sure the solution reflects the real work of the business.</p>
                  <div className="mt-4">
                    <Link href="/#contact" className="inline-flex items-center justify-center rounded-full bg-[var(--color-teal)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[color:var(--color-teal-dark)]">Request a consult</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--color-surface)] py-16 sm:py-20">
          <div className="container-shell mx-auto max-w-5xl">
            <h3 className="mb-4 text-2xl font-semibold text-[var(--color-navy)]">How we work</h3>
            <p className="text-[color:var(--color-muted)]">We follow a simple, predictable process so projects move from problem to production without surprises.</p>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-soft)]">
                <h4 className="font-semibold text-[var(--color-navy)]">1. Diagnose the bottleneck</h4>
                <p className="mt-2 text-sm text-[color:var(--color-muted)]">We map the process, the pain points, and the business constraints before choosing a solution.</p>
              </div>
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-soft)]">
                <h4 className="font-semibold text-[var(--color-navy)]">2. Design the right fit</h4>
                <p className="mt-2 text-sm text-[color:var(--color-muted)]">We align the technology, workflows, and integrations to the way your team actually works.</p>
              </div>
              <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-soft)]">
                <h4 className="font-semibold text-[var(--color-navy)]">3. Build and refine</h4>
                <p className="mt-2 text-sm text-[color:var(--color-muted)]">We implement in practical stages, validate with your team, and make improvements before rollout.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-navy)] py-20 text-white sm:py-24">
          <div className="container-shell">
            <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[var(--shadow-soft)] backdrop-blur sm:p-10">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">Have a process problem to solve?</h2>
              <p className="mt-5 text-lg leading-8 text-slate-200">Tell us about the bottleneck and we will help you determine the right path forward.</p>
              <div className="mt-8">
                <Link
                  href="/#form"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-teal)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-teal-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
