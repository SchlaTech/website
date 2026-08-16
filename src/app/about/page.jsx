import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Box, Database, ShieldCheck, Smartphone } from "lucide-react";
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

export default function AboutPage() {
  return (
    <>
      <Header
        title="Software Should Fit the Way Your Business Works"
        subtitle="SchlaTech builds custom applications, automation, integrations, reporting tools, and ERP solutions around real workflows and real business needs."
      />

      <main className="mx-auto max-w-5xl px-4 py-12">
        <section className="mb-12">
          <h2 className="mb-4 text-3xl font-semibold">A practical approach to custom software</h2>
          <p className="text-lg leading-relaxed text-slate-700">
            SchlaTech was built around a simple idea: businesses should not have to live with inefficient processes just because existing software does not support a better way.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-slate-700">
            We build custom applications, automation, integrations, reporting tools, and ERP solutions around real workflows and real business needs.
          </p>
        </section>

        <section className="mb-12 grid gap-8 md:grid-cols-3">
          <article className="rounded-xl border bg-white p-6">
            <h3 className="mb-2 text-lg font-semibold">Business-first approach</h3>
            <p className="text-slate-700">We start with the process, the bottleneck, and the business outcome before we choose the technology.</p>
          </article>
          <article className="rounded-xl border bg-white p-6">
            <h3 className="mb-2 text-lg font-semibold">ERP and Acumatica expertise</h3>
            <p className="text-slate-700">We understand how ERP, integrations, data, and operational workflows fit together in real organizations.</p>
          </article>
          <article className="rounded-xl border bg-white p-6">
            <h3 className="mb-2 text-lg font-semibold">Maintainable, practical software</h3>
            <p className="text-slate-700">We build systems that are clear, reliable, and useful to the people who depend on them every day.</p>
          </article>
        </section>

        <section className="mb-12 rounded-xl bg-slate-50 p-8">
          <h3 className="mb-4 text-2xl font-semibold">Where we have deep experience</h3>
          <p className="text-slate-700">
            Manufacturing and ERP systems are a major part of our background. That includes Acumatica, Global Shop ERP, production scheduling, inventory, shop-floor applications, reporting, integrations, authentication, and workflow automation.
          </p>
          <p className="mt-4 text-slate-700">
            That experience has shaped how we approach every project: understand the operation first, then build technology that supports it.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="mb-4 text-2xl font-semibold">What we deliver</h3>
          <ul className="grid gap-4 md:grid-cols-2">
            <li className="text-slate-700">Custom software built around your workflow</li>
            <li className="text-slate-700">Business automation and process improvement</li>
            <li className="text-slate-700">ERP and API integrations between internal and external systems</li>
            <li className="text-slate-700">Custom reporting and dashboard solutions</li>
            <li className="text-slate-700">Acumatica customizations, middleware, and connected applications</li>
            <li className="text-slate-700">Mobile, web, and desktop tools for operational teams</li>
          </ul>
        </section>

        <section className="mb-12 rounded-xl bg-white p-6">
          <h3 className="mb-3 text-2xl font-semibold">Mission</h3>
          <p className="text-slate-700">
            Build practical software that helps organizations work more efficiently, reduce unnecessary complexity, and solve problems their existing systems cannot.
          </p>
          <h3 className="mt-6 mb-3 text-2xl font-semibold">Vision</h3>
          <p className="text-slate-700">
            Become a trusted long-term software partner for organizations that need technology built around the way they actually work.
          </p>
        </section>

        <section className="mb-12">
          <h3 className="mb-4 text-2xl font-semibold">Featured success stories</h3>
          <p className="text-slate-700">A few examples of how we turn business problems into operational improvements.</p>
          <div className="mt-6 space-y-6">
            <div className="rounded-lg border bg-white p-5">
              <h4 className="font-semibold">Acumatica OAuth / Microsoft Entra ID Migration</h4>
              <p className="mt-2 text-sm text-slate-600">Problem: Legacy Windows auth blocked secure remote access and future-proofing.</p>
              <p className="text-sm text-slate-600">Solution: Migrated to OAuth 2.0 and Microsoft Entra ID while preserving workflows and updating integrations.</p>
              <p className="mt-2 text-sm font-semibold text-slate-600">Impact: Modern authentication, stronger security, and simpler deployments.</p>
            </div>
            <div className="rounded-lg border bg-white p-5">
              <h4 className="font-semibold">Production Scheduling Dashboard</h4>
              <p className="mt-2 text-sm text-slate-600">Problem: Planners jumped between screens and spreadsheets, slowing decisions.</p>
              <p className="text-sm text-slate-600">Solution: Consolidated planning data into a single interface with conflict detection and streamlined updates.</p>
              <p className="mt-2 text-sm font-semibold text-slate-600">Impact: Faster planning, fewer errors, and clearer visibility.</p>
            </div>
            <div className="rounded-lg border bg-white p-5">
              <h4 className="font-semibold">Cutbill Builder</h4>
              <p className="mt-2 text-sm text-slate-600">Problem: Manual cutbill creation took hours and introduced costly mistakes.</p>
              <p className="text-sm text-slate-600">Solution: Desktop application automated calculations and exported production-ready files.</p>
              <p className="mt-2 text-sm font-semibold text-slate-600">Impact: Reduced a multi-hour task to seconds and saved 250+ hours per year.</p>
            </div>
          </div>
          <div className="mt-6">
            <Link href="/portfolio" className="font-semibold text-[#0097B2]">Explore all case studies →</Link>
          </div>
        </section>

        <section className="mb-12 rounded-xl bg-white p-6">
          <h3 className="mb-3 text-2xl font-semibold">Technologies we use</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Acumatica",
              "Global Shop ERP",
              ".NET",
              "C#",
              "SQL Server",
              "Power BI",
              "REST APIs",
              "Microsoft Azure",
            ].map((t) => (
              <span key={t} className="rounded-full border px-3 py-1 text-sm text-slate-700">{t}</span>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-4 py-12">
          <h3 className="mb-6 text-2xl font-semibold">Meet the founder</h3>
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="md:w-48 md:flex-shrink-0">
              <Image src="/images/matt.jpg" alt="Matt Schlabach" width={192} height={192} className="h-48 w-48 rounded-xl object-cover shadow" />
            </div>
            <div className="md:flex-1">
              <p className="mb-3 text-lg text-slate-700">
                Matt Schlabach leads SchlaTech with a practical, outcome-driven mindset. He brings together custom software engineering, ERP experience, business process knowledge, and hands-on problem solving to help teams improve the work they do every day.
              </p>

              <p className="mb-4 text-slate-700">Specialties</p>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-slate-700">
                  <Box className="h-4 w-4 text-slate-600" />
                  Custom software
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-slate-700">
                  <ShieldCheck className="h-4 w-4 text-slate-600" />
                  Business automation
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-slate-700">
                  <Smartphone className="h-4 w-4 text-slate-600" />
                  Acumatica development
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-slate-700">
                  <Database className="h-4 w-4 text-slate-600" />
                  ERP integrations and reporting
                </span>
              </div>

              <div className="mt-6">
                <p className="text-sm text-slate-600">Matt works directly with clients on architecture, requirements, integrations, and custom development to make sure the solution reflects the real work of the business.</p>
                <div className="mt-4">
                  <Link href="/#contact" className="inline-flex items-center gap-2 rounded bg-[#0097B2] px-4 py-2 font-semibold text-white">Request a consult</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 rounded-xl bg-white p-8">
          <h3 className="mb-4 text-2xl font-semibold">How we work</h3>
          <p className="text-slate-700">We follow a simple, predictable process so projects move from problem to production without surprises.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border bg-white p-4">
              <h4 className="font-semibold">1. Discover</h4>
              <p className="mt-2 text-sm text-slate-600">We learn about your process, constraints, and goals to define the right problem to solve.</p>
            </div>
            <div className="rounded-lg border bg-white p-4">
              <h4 className="font-semibold">2. Plan</h4>
              <p className="mt-2 text-sm text-slate-600">We outline a practical technical approach, high-value scope, and realistic delivery plan.</p>
            </div>
            <div className="rounded-lg border bg-white p-4">
              <h4 className="font-semibold">3. Build & validate</h4>
              <p className="mt-2 text-sm text-slate-600">We iterate quickly, validate the workflow, and adjust based on actual use before full rollout.</p>
            </div>
          </div>
        </section>

        <section className="mb-12 rounded-xl bg-[#0097B2] px-6 py-12 text-center text-white">
          <h2 className="mb-4 text-2xl font-bold">Have a process problem to solve?</h2>
          <p className="mb-6 text-lg">Tell us about the bottleneck and we will help you determine the right path forward.</p>
          <Link href="/#form" className="inline-block rounded bg-white px-6 py-3 font-semibold text-[#0097B2] transition hover:bg-blue-100">Contact Us</Link>
        </section>

        <Footer />
      </main>
    </>
  );
}
