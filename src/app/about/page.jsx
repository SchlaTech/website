import Link from "next/link";
import React from "react";
import { Box, Database, ShieldCheck, Smartphone } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components

export default function AboutPage() {
  return (
    <>
      <Header
        title="Why SchlaTech"
        subtitle="Practical software and ERP know-how that solve manufacturing problems."
      />

      <main className="mx-auto max-w-5xl px-4 py-12">
        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">We solve the problems manufacturers actually have</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            SchlaTech focuses on measurable outcomes: reduced touch time, fewer errors, stronger security, and clearer visibility across operations. We combine deep ERP experience with pragmatic software engineering to deliver solutions that are easy to adopt and maintain.
          </p>
        </section>

        <section className="grid gap-8 md:grid-cols-3 mb-12">
          <article className="rounded-xl border p-6 bg-white">
            <h3 className="text-lg font-semibold mb-2">Business-first approach</h3>
            <p className="text-slate-700">We start with your process, not a technology. Our designs fit how your team works today and improve what matters most.</p>
          </article>
          <article className="rounded-xl border p-6 bg-white">
            <h3 className="text-lg font-semibold mb-2">ERP and Acumatica expertise</h3>
            <p className="text-slate-700">Years of Acumatica and ERP integrations means fewer surprises and faster delivery when your systems and data need to work together.</p>
          </article>
          <article className="rounded-xl border p-6 bg-white">
            <h3 className="text-lg font-semibold mb-2">Maintainable, practical software</h3>
            <p className="text-slate-700">We build tools your team can own: readable code, sensible architecture, and support strategies that keep systems running long-term.</p>
          </article>
        </section>

        <section className="bg-slate-50 rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-4">What we deliver</h3>
          <ul className="grid gap-4 md:grid-cols-2">
            <li className="text-slate-700">Acumatica integrations, customizations, and Generic Inquiries</li>
            <li className="text-slate-700">Secure OAuth / Microsoft Entra ID authentication migrations</li>
            <li className="text-slate-700">Shop floor automation, Kiosk/Workstation deployments, and label printing</li>
            <li className="text-slate-700">Reporting, dashboards, and operational analytics (Power BI, SQL)</li>
            <li className="text-slate-700">Mobile and desktop apps for field and plant operations</li>
            <li className="text-slate-700">Performance and reliability improvements for high-throughput environments</li>
          </ul>
        </section>

        <section className="mb-12">
          <h3 className="text-2xl font-semibold mb-4">Featured success stories</h3>
          <p className="text-slate-700">A few examples of how we turn business problems into operational improvements.</p>
          <div className="mt-6 space-y-6">
            <div className="rounded-lg border bg-white p-5">
              <h4 className="font-semibold">Acumatica OAuth / Microsoft Entra ID Migration</h4>
              <p className="text-sm text-slate-600 mt-2">Problem: Legacy Windows auth blocked secure remote access and future-proofing.</p>
              <p className="text-sm text-slate-600">Solution: Migrated to OAuth 2.0 and Microsoft Entra ID; preserved workflows and updated integrations.</p>
              <p className="text-sm text-slate-600 font-semibold mt-2">Impact: Modern authentication, stronger security, and simpler deployments.</p>
            </div>
            <div className="rounded-lg border bg-white p-5">
              <h4 className="font-semibold">Production Scheduling Dashboard</h4>
              <p className="text-sm text-slate-600 mt-2">Problem: Planners jumped between ERP screens and spreadsheets, slowing decisions.</p>
              <p className="text-sm text-slate-600">Solution: Consolidated scheduling data into a single interface with mass-updates and conflict detection.</p>
              <p className="text-sm text-slate-600 font-semibold mt-2">Impact: Faster planning, fewer errors, and clearer visibility.</p>
            </div>
            <div className="rounded-lg border bg-white p-5">
              <h4 className="font-semibold">Cutbill Builder</h4>
              <p className="text-sm text-slate-600 mt-2">Problem: Manual cutbill creation took hours and introduced costly mistakes.</p>
              <p className="text-sm text-slate-600">Solution: Desktop app automated cut calculations and exported production-ready files.</p>
              <p className="text-sm text-slate-600 font-semibold mt-2">Impact: Reduced a multi-hour task to seconds and saved 250+ hours per year.</p>
            </div>
          </div>
          <div className="mt-6">
            <Link href="/portfolio" className="text-[#0097B2] font-semibold">Explore all case studies →</Link>
          </div>
        </section>

        <section className="bg-white rounded-xl p-6 mb-12">
          <h3 className="text-2xl font-semibold mb-3">Technologies we use</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Acumatica",
              "OAuth 2.0",
              "Microsoft Entra ID",
              ".NET",
              "C#",
              "SQL Server",
              "REST APIs",
              "WPF",
              "Android",
              "Power BI",
              "Label Printing",
            ].map((t) => (
              <span key={t} className="rounded-full border px-3 py-1 text-sm text-slate-700">{t}</span>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto px-4 py-12">
          <h3 className="text-2xl font-semibold mb-6">Meet the founder</h3>
          <div className="flex flex-col gap-6 md:flex-row md:items-start">
            <div className="md:w-48 flex-shrink-0">
              <img src="/images/matt.jpg" alt="Matt Schlabach" className="rounded-xl w-48 h-48 object-cover shadow" />
            </div>
            <div className="md:flex-1">
              <p className="text-lg text-slate-700 mb-3">
                Matt Schlabach leads SchlaTech with a practical, outcome-driven mindset. He pairs hands-on ERP and manufacturing domain knowledge with pragmatic software engineering to deliver solutions that reduce friction and scale with the business.
              </p>

              <p className="text-slate-700 mb-4">Expertise</p>
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-slate-700">
                  <Box className="w-4 h-4 text-slate-600" />
                  Acumatica customizations & integrations
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-slate-600" />
                  OAuth / Microsoft Entra ID
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-slate-700">
                  <Smartphone className="w-4 h-4 text-slate-600" />
                  Desktop & mobile manufacturing apps (WPF, Android)
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-slate-700">
                  <Database className="w-4 h-4 text-slate-600" />
                  SQL Server, reporting & Power BI
                </span>
              </div>

              <div className="mt-6">
                <p className="text-sm text-slate-600">Matt works directly with clients on architecture, Acumatica projects, and manufacturing automation—helping teams get from problem to production-ready solution.</p>
                <div className="mt-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded bg-[#0097B2] px-4 py-2 text-white font-semibold">Request a consult</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-4">Our process</h3>
          <p className="text-slate-700">We follow a simple, predictable process so projects move from problem to production without surprises.</p>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border p-4 bg-white">
              <h4 className="font-semibold">1. Discover</h4>
              <p className="text-sm text-slate-600 mt-2">On-site or remote workshops to understand your process, constraints, and goals. We focus on measurable outcomes.</p>
            </div>
            <div className="rounded-lg border p-4 bg-white">
              <h4 className="font-semibold">2. Plan</h4>
              <p className="text-sm text-slate-600 mt-2">Technical design, prioritized backlog, and a clear estimate. We identify the minimal viable deliverables that reduce risk.</p>
            </div>
            <div className="rounded-lg border p-4 bg-white">
              <h4 className="font-semibold">3. Build & validate</h4>
              <p className="text-sm text-slate-600 mt-2">Iterative development with regular demos, user acceptance testing, and a pilot rollout to validate value before full deployment.</p>
            </div>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg border p-4 bg-white">
              <h4 className="font-semibold">4. Deploy</h4>
              <p className="text-sm text-slate-600 mt-2">We handle deployment, training, and initial support to ensure a smooth handoff and immediate ROI.</p>
            </div>
            <div className="rounded-lg border p-4 bg-white">
              <h4 className="font-semibold">5. Support & improve</h4>
              <p className="text-sm text-slate-600 mt-2">Ongoing support, small enhancements, and performance tuning so your solution continues to deliver value.</p>
            </div>
          </div>
        </section>

        <section className="bg-white rounded-xl p-8 mb-12">
          <h3 className="text-2xl font-semibold mb-4">Frequently asked questions</h3>
          <div className="grid gap-6">
            <div>
              <p className="font-semibold">How long does a typical project take?</p>
              <p className="text-slate-700">Small enhancements: 1–4 weeks. Medium projects (integrations, dashboards): 4–12 weeks. Larger ERP work is phased with pilot deliverables to reduce risk.</p>
            </div>

            <div>
              <p className="font-semibold">Do you work with Acumatica?</p>
              <p className="text-slate-700">Yes — Acumatica customizations, Generic Inquiries, REST API integrations, and migration projects are core capabilities.</p>
            </div>

            <div>
              <p className="font-semibold">How do you handle authentication and security?</p>
              <p className="text-slate-700">We implement modern authentication (OAuth 2.0, Microsoft Entra ID), secure API patterns, and follow least-privilege principles.</p>
            </div>

            <div>
              <p className="font-semibold">What happens after launch?</p>
              <p className="text-slate-700">We provide documentation, training, and initial support. Ongoing maintenance is available via retainer or T&M.</p>
            </div>

            <div>
              <p className="font-semibold">Can you build shop-floor apps and integrations?</p>
              <p className="text-slate-700">Yes — we build desktop and mobile apps, barcode/QR workflows, label printing, and direct ERP integration.</p>
            </div>

            <div>
              <p className="font-semibold">How do we get started?</p>
              <p className="text-slate-700">Start with a discovery call. We scope a pilot that demonstrates measurable value quickly and reduces execution risk.</p>
            </div>
          </div>
        </section>

        <section className="bg-[#0097B2] text-white rounded-xl text-center py-12 px-6">
          <h2 className="text-2xl font-bold mb-4">Have a manufacturing or ERP problem to solve?</h2>
          <p className="text-lg mb-6">Tell us about the bottleneck and we’ll show you how to fix it.</p>
          <a href="/#form" className="inline-block bg-white text-[#0097B2] font-semibold px-6 py-3 rounded hover:bg-blue-100 transition">Contact Us</a>
        </section>

        <Footer />
      </main>
    </>
  );
}
