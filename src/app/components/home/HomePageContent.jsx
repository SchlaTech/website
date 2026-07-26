"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  Boxes,
  Factory,
  MonitorSmartphone,
  Workflow,
} from "lucide-react";
import Header from "../Header";
import Footer from "../Footer";
import SectionHeading from "./SectionHeading";
import FeatureCard from "./FeatureCard";
import MetricBlock from "./MetricBlock";

const technologyItems = [
  "Acumatica",
  "Global Shop ERP",
  ".NET",
  "C#",
  "SQL Server",
  "Power BI",
  "REST APIs",
  "Microsoft Azure",
];

const problems = [
  {
    title: "Repetitive Manual Work",
    description: "Replace time consuming steps with reliable automation.",
  },
  {
    title: "Disconnected Systems",
    description: "Connect your ERP, applications, machines, and data.",
  },
  {
    title: "Limited ERP Functionality",
    description: "Extend existing systems without forcing your team into awkward workarounds.",
  },
  {
    title: "Poor Production Visibility",
    description: "Give teams clearer scheduling, inventory, and performance information.",
  },
  {
    title: "Error Prone Data Entry",
    description: "Improve accuracy with validation, integrations, scanning, and purpose built workflows.",
  },
  {
    title: "Outdated Internal Tools",
    description: "Modernize applications your business still depends on.",
  },
];

const solutions = [
  {
    title: "Acumatica and ERP Solutions",
    description:
      "Customizations, integrations, reports, workflows, authentication, manufacturing enhancements, and external applications.",
    icon: Factory,
  },
  {
    title: "Manufacturing Automation",
    description:
      "Production scheduling, shop floor workflows, barcode scanning, label printing, and repetitive task automation.",
    icon: Workflow,
  },
  {
    title: "Custom Business Applications",
    description:
      "Purpose built desktop, web, and mobile software designed around your actual operation.",
    icon: MonitorSmartphone,
  },
  {
    title: "Reporting and Analytics",
    description:
      "Dashboards, KPIs, operational reporting, and clearer access to the data your team needs.",
    icon: BarChart3,
  },
  {
    title: "Global Shop ERP Solutions",
    description:
      "Custom reporting, SQL based tools, integrations, data workflows, and supporting applications for Global Shop environments.",
    icon: Boxes,
  },
];

const reasons = [
  {
    title: "Manufacturing Experience",
    description:
      "Solutions shaped by real production, inventory, scheduling, and shop floor challenges.",
  },
  {
    title: "Built Around Your Workflow",
    description:
      "Software should fit the business, not force the business into a generic process.",
  },
  {
    title: "Direct Technical Partnership",
    description:
      "Work directly with the person understanding and building your solution.",
  },
  {
    title: "ERP and Custom Software Expertise",
    description:
      "Bridge the gaps between your ERP, internal tools, equipment, and business processes.",
  },
  {
    title: "Practical Technology",
    description:
      "Choose tools based on reliability and business value, not trends.",
  },
  {
    title: "Long Term Support",
    description:
      "Build maintainable solutions that can grow as the business changes.",
  },
];

const caseStudies = [
  {
    title: "Cutbill Builder",
    challenge: "A weekly cutbill process took several hours of manual work and left room for errors.",
    solution:
      "SchlaTech built a configurable application that automated the calculation and export workflow.",
    result: "The process was reduced from hours to seconds and saves more than 250 hours each year.",
  },
  {
    title: "Kiosk Ordering System",
    challenge:
      "Showroom locations needed a secure, reliable touchscreen tool that stayed current without manual updates.",
    solution:
      "SchlaTech delivered a locked down application with automatic update checks and a simple customer experience.",
    result: "The system was deployed across more than 50 showroom locations.",
  },
  {
    title: "Mill Inventory App",
    challenge:
      "Log receiving and inventory entry were still manual, creating delays and tracking gaps.",
    solution:
      "SchlaTech developed an Android app that uses QR scanning and guided entry for field and ERP workflows.",
    result:
      "The team now captures inventory data more quickly and keeps the ERP workflow connected from the yard to the office.",
  },
];

export default function HomePageContent() {
  return (
    <>
      <Header showHero={false} />
      <main className="pt-24">
        <section className="relative isolate overflow-hidden bg-[var(--color-navy)] text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/comp.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,33,58,0.95)_0%,rgba(16,33,58,0.8)_45%,rgba(16,33,58,0.55)_100%)]" />
          </div>

          <div className="relative container-shell py-24 sm:py-28 lg:py-32">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="max-w-4xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                Manufacturing software that fits your business
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="block sm:inline">We Build Software</span>{" "}
                <span className="block sm:inline">Manufacturers Actually Want to Use.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
                SchlaTech helps manufacturers eliminate repetitive work, connect disconnected systems,
                and improve visibility through custom software, ERP solutions, and practical automation.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-teal)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-teal-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]"
                >
                  Discuss Your Project
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]"
                >
                  View Our Work
                </Link>
              </div>
              <p className="mt-8 text-sm font-medium uppercase tracking-[0.24em] text-slate-200">
                Custom software • ERP solutions • Automation • Reporting
              </p>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-[var(--color-border)] bg-white">
          <div className="container-shell py-8">
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
              {technologyItems.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[var(--color-border)] bg-[color:var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-navy)]"
                >
                  {item}
                </span>
              ))}
              <Link
                href="/acumatica-development"
                className="rounded-full border border-[var(--color-teal)]/20 bg-[color:var(--color-accent)] px-4 py-2 text-sm font-semibold text-[var(--color-teal)] transition hover:bg-[color:var(--color-accent)]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
              >
                Acumatica development
              </Link>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 bg-[color:var(--color-surface)] py-20 sm:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Built for the problems manufacturers face every day"
              title="Practical software for the work that slows your team down"
              description="When spreadsheets, manual entry, disconnected applications, and limited ERP functionality slow your team down, SchlaTech builds practical solutions around the way your business actually works."
            />
            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {problems.map((problem, index) => (
                <motion.article
                  key={problem.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[var(--color-teal)]" />
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--color-navy)]">{problem.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[color:var(--color-muted)]">
                        {problem.description}
                      </p>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Manufacturing software solutions"
              title="Solutions built around your operation"
              description="From ERP extensions to shop floor automation, each engagement is designed to remove friction and improve the way your business runs."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {solutions.map((solution) => (
                <FeatureCard
                  key={solution.title}
                  title={solution.title}
                  description={solution.description}
                  linkHref={solution.title === "Acumatica and ERP Solutions" ? "/acumatica-development" : "/portfolio"}
                  icon={solution.icon}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--color-border)] bg-[color:var(--color-surface)] py-20 sm:py-24">
          <div className="container-shell">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Real software. Measurable results."
                title="Results that matter to day to day operations"
                description="These examples reflect the kind of work SchlaTech has delivered for manufacturers that need reliable tools and measurable payoff."
                align="left"
              />
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-teal)] transition hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
              >
                View Our Case Studies
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <MetricBlock value="250+" description="Hours saved annually by automating a weekly cutbill process" />
              <MetricBlock value="50+" description="Touchscreen systems deployed across showroom locations" />
              <MetricBlock value="6 Hours to Seconds" description="A manual production task transformed into a one click workflow" />
              <MetricBlock value="One Connected Workflow" description="Inventory data captured in the field and sent directly to the ERP" />
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Software built around real operations"
              title="Case studies from manufacturing and field environments"
              description="These projects show how SchlaTech combines ERP knowledge, software development, and practical automation to solve real business problems."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <article
                  key={study.title}
                  className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[color:var(--color-surface)] p-7 shadow-[var(--shadow-soft)]"
                >
                  <h3 className="text-xl font-semibold text-[var(--color-navy)]">{study.title}</h3>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">
                    Challenge
                  </p>
                  <p className="mt-2 text-base leading-7 text-[color:var(--color-muted)]">{study.challenge}</p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">
                    Solution
                  </p>
                  <p className="mt-2 text-base leading-7 text-[color:var(--color-muted)]">{study.solution}</p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">
                    Result
                  </p>
                  <p className="mt-2 flex-1 text-base leading-7 text-[color:var(--color-muted)]">{study.result}</p>
                  <Link
                    href="/portfolio"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-teal)] transition hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
                  >
                    View project details
                    <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--color-surface)] py-20 sm:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Why manufacturers work with SchlaTech"
              title="A practical partner for business systems and process improvement"
              description="We focus on tools that fit the business, support your team, and stand up to real day to day use."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {reasons.map((reason) => (
                <article key={reason.title} className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-soft)]">
                  <h3 className="text-lg font-semibold text-[var(--color-navy)]">{reason.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[color:var(--color-muted)]">{reason.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="container-shell">
            <div className="grid gap-10 rounded-[2rem] border border-[var(--color-border)] bg-[linear-gradient(135deg,rgba(255,255,255,1),rgba(247,249,252,1))] p-8 shadow-[var(--shadow-soft)] lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-teal)]">
                  Founder perspective
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-4xl">
                  Manufacturing knowledge meets software expertise
                </h2>
                <p className="mt-5 text-lg leading-8 text-[color:var(--color-muted)]">
                  SchlaTech was founded by Matt Schlabach, a software engineer with hands on experience building ERP customizations, manufacturing applications, automation tools, reporting systems, and shop floor software. SchlaTech combines technical depth with a practical understanding of how manufacturers actually operate.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Acumatica development",
                    "Global Shop ERP",
                    "Manufacturing automation",
                    "Custom .NET applications",
                    "SQL and reporting",
                    "ERP integrations",
                  ].map((specialty) => (
                    <li key={specialty} className="rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm text-[var(--color-navy)]">
                      {specialty}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/about"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-teal)] transition hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
                >
                  Learn More About SchlaTech
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="flex items-center justify-center">
                <div className="overflow-hidden rounded-[1.5rem] border border-[var(--color-border)] bg-white p-3 shadow-[var(--shadow-soft)]">
                  <Image
                    src="/images/matt.jpg"
                    alt="Matt Schlabach"
                    width={360}
                    height={420}
                    className="h-auto w-full rounded-[1rem] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[var(--color-navy)] py-20 text-white sm:py-24">
          <div className="container-shell">
            <div className="max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[var(--shadow-soft)] backdrop-blur sm:p-10">
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                What process is costing your team time every week?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-200">
                Tell us where your operation is getting stuck. We will help you determine whether custom software, ERP improvements, or automation can solve it.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-teal)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-teal-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]"
                >
                  Discuss Your Project
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]"
                >
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="scroll-mt-24 bg-white py-20 sm:py-24">
          <a id="form" className="sr-only" aria-hidden="true" />
          <div className="container-shell">
            <div className="grid gap-10 rounded-[2rem] border border-[var(--color-border)] bg-[color:var(--color-surface)] p-8 shadow-[var(--shadow-soft)] lg:grid-cols-[0.9fr_1.1fr] lg:p-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-teal)]">
                  Contact SchlaTech
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-4xl">
                  Start a conversation about the work that is slowing your team down
                </h2>
                <p className="mt-5 text-lg leading-8 text-[color:var(--color-muted)]">
                  Share the process, system, or problem you want to improve. We will help you evaluate practical options and outline the best path forward.
                </p>
                <div className="mt-8 space-y-3 text-sm text-[color:var(--color-muted)]">
                  <p>Holmesville, Ohio</p>
                  <a href="mailto:matt@schlatech.com" className="block font-semibold text-[var(--color-navy)] transition hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2">
                    matt@schlatech.com
                  </a>
                  <a href="tel:+13307631399" className="block font-semibold text-[var(--color-navy)] transition hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2">
                    (330) 763-1399
                  </a>
                </div>
              </div>
              <form
                action="https://formsubmit.co/matt@schlatech.com"
                method="POST"
                className="flex flex-col gap-4"
              >
                <input type="hidden" name="_subject" value="SchlaTech Website Inquiry" />
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-medium text-[var(--color-navy)]">
                    Name
                    <input name="name" type="text" required className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white px-4 py-3 text-base text-[var(--color-navy)] outline-none transition focus:border-[var(--color-teal)] focus:ring-2 focus:ring-[var(--color-teal)]/20" />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-medium text-[var(--color-navy)]">
                    Email
                    <input name="email" type="email" required className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white px-4 py-3 text-base text-[var(--color-navy)] outline-none transition focus:border-[var(--color-teal)] focus:ring-2 focus:ring-[var(--color-teal)]/20" />
                  </label>
                </div>
                <label className="flex flex-col gap-2 text-sm font-medium text-[var(--color-navy)]">
                  What needs attention?
                  <textarea name="needs" rows="5" required className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-white px-4 py-3 text-base text-[var(--color-navy)] outline-none transition focus:border-[var(--color-teal)] focus:ring-2 focus:ring-[var(--color-teal)]/20" />
                </label>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-teal)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-teal-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
                >
                  Send inquiry
                  <ArrowRight size={16} />
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
