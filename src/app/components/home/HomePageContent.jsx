"use client";

import Image from "next/image";
import Link from "next/link";
import { event as gtagEvent } from "../../../lib/gtag";
import { assignVariant } from "../../../lib/ab";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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
  "Global Shop ERP",
  ".NET",
  "C#",
  "JavaScript",
  "Next.js",
  "SQL Server",
  "Power BI",
  "REST APIs",
  "Microsoft Azure",
];

const problems = [
  {
    title: "Repetitive Manual Work",
    description: "Automate time-consuming workflows and give your team time back.",
  },
  {
    title: "Disconnected Systems",
    description: "Connect applications, data, APIs, and business systems.",
  },
  {
    title: "Software That Does Not Fit",
    description: "Build around your actual workflow instead of forcing the business into generic software.",
  },
  {
    title: "Limited Visibility",
    description: "Turn operational data into useful dashboards, reporting, and decision-making tools.",
  },
  {
    title: "Error-Prone Processes",
    description: "Improve accuracy with validation, automation, integrations, and purpose-built workflows.",
  },
  {
    title: "Outdated Internal Tools",
    description: "Modernize the software your business still depends on.",
  },
];

const solutions = [
  {
    title: "Custom Software",
    description: "Purpose-built web, desktop, and mobile applications designed around the way your organization works.",
    icon: MonitorSmartphone,
  },
  {
    title: "Business Automation",
    description: "Remove repetitive work, reduce manual entry, and streamline processes across your team.",
    icon: Workflow,
  },
  {
    title: "ERP and System Integrations",
    description: "Connect your ERP, internal applications, third-party platforms, APIs, and data.",
    icon: Boxes,
  },
  {
    title: "Reporting and Analytics",
    description: "Create dashboards, KPIs, reporting tools, and clearer access to operational information.",
    icon: BarChart3,
  },
  {
    title: "Manufacturing and ERP Solutions",
    description: "Specialized software, workflows, automation, integrations, and reporting for manufacturers.",
    icon: Factory,
  },
  {
    title: "Acumatica Development",
    description: "Customizations, integrations, manufacturing enhancements, authentication, reporting, and external applications.",
    icon: Factory,
  },
];

const workflowSteps = [
  {
    title: "Diagnose the bottleneck",
    description: "We map the process, the pain points, and the business constraints before choosing a solution.",
  },
  {
    title: "Design the right fit",
    description: "We align the technology, workflows, and integrations to the way your team actually works.",
  },
  {
    title: "Build and refine",
    description: "We implement in practical stages, validate with your team, and make improvements before rollout.",
  },
];

const commonProjectTypes = [
  {
    title: "Manufacturing operations",
    description: "Scheduling, shop-floor visibility, inventory workflows, reporting, and ERP-connected automation.",
  },
  {
    title: "ERP and data connections",
    description: "Integrations between Acumatica, internal tools, external systems, and the data needed to run the business.",
  },
  {
    title: "Internal tools and modernization",
    description: "Desktop, web, and mobile applications that replace spreadsheets, manual processes, and outdated systems.",
  },
];

const faqItems = [
  {
    question: "How do you know what the right solution is?",
    answer: "We start by understanding the process, the bottleneck, and the business outcome before choosing technology or scope.",
  },
  {
    question: "Do you work outside manufacturing?",
    answer: "Yes. The same process-first approach applies to other industries and business workflows, especially when software needs to support operations.",
  },
  {
    question: "Can you work with existing ERP and systems?",
    answer: "Yes. We frequently connect existing ERP platforms, APIs, databases, and operational tools without forcing a full rip-and-replace.",
  },
  {
    question: "What does a project usually look like?",
    answer: "Most projects begin with discovery and scope definition, then move into design, implementation, and validation with clear business feedback throughout.",
  },
];

const reasons = [
  {
    title: "Built Around Your Workflow",
    description: "Software should fit the business, not the other way around.",
  },
  {
    title: "Direct Technical Partnership",
    description: "Work directly with the person analyzing and building the solution.",
  },
  {
    title: "Practical Problem Solving",
    description: "Start with the business problem before choosing the technology.",
  },
  {
    title: "Custom Software and ERP Expertise",
    description: "Bridge the gaps between your existing systems and the software you actually need.",
  },
  {
    title: "Manufacturing Experience",
    description: "Benefit from hands-on experience with complex operational and ERP environments.",
  },
  {
    title: "Long-Term Thinking",
    description: "Build maintainable software that can evolve with the organization.",
  },
];

const caseStudies = [
  {
    title: "Cutbill Builder",
    problem: "A manual multi-hour process reduced to seconds.",
    solution: "SchlaTech created a desktop tool that automates cutbill calculations, validates inputs, and exports the required production files.",
    impact: "The team eliminated repetitive manual work and cut a process that used to take hours into a quick, consistent workflow.",
    technologies: ["WPF", "C#", "SQL", "Manufacturing Automation"],
  },
  {
    title: "Manufacturing Operator Workstation",
    problem: "Production employees needed a secure interface on the shop floor that could run without exposing Windows and without constant local maintenance.",
    solution: "SchlaTech built a locked-down touchscreen workstation with centralized automatic updates, simplified workflows, and manufacturing-specific interfaces for operators across many sites.",
    impact: "The platform was deployed across 50+ locations and improved the operator experience while reducing maintenance overhead.",
    technologies: ["WPF", "Prism", "MVVM", "Windows", "SQL"],
  },
  {
    title: "Mill Inventory Mobile Application",
    problem: "Inventory was still being recorded in the yard and entered into the ERP later, delaying visibility and increasing the risk of errors.",
    solution: "SchlaTech created an Android app that lets operators record inventory in the field using QR code scanning and immediate ERP integration.",
    impact: "The operation gained real-time inventory visibility, better traceability, and faster receiving and processing.",
    technologies: ["Android", "QR Codes", "REST API", "ERP Integration"],
  },
];

export default function HomePageContent() {
  const [ctaVariant, setCtaVariant] = useState(false);

  useEffect(() => {
    try {
      const variant = assignVariant();
      const isAlt = variant === "alt";
      // Cookie/URL-based assignment can only be read client-side, so this must
      // run post-mount rather than as a lazy useState initializer (that would
      // desync from the server-rendered markup and cause a hydration mismatch).
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCtaVariant(isAlt);
      // Report assignment/view to analytics if available
      gtagEvent({ action: "ab_assign", category: "experiment", label: variant });
      gtagEvent({ action: "ab_view", category: "experiment", label: variant });
    } catch (e) {
      /* noop */
    }
  }, []);

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
                CUSTOM SOFTWARE BUILT AROUND YOUR BUSINESS
              </p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                We Build Software People Actually Want to Use.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-100 sm:text-xl">
                SchlaTech builds custom software, automation, integrations, and business systems that eliminate repetitive work, connect disconnected tools, and solve problems off-the-shelf software cannot.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#contact"
                  aria-label={ctaVariant ? "Get a free project estimate" : "Schedule a 15-minute discovery call"}
                  onClick={() => gtagEvent({ action: "click_cta", category: "hero", label: ctaVariant ? "free_estimate" : "discovery_call" })}
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-teal)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-teal-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]"
                >
                  {ctaVariant ? "Get a free project estimate" : "Schedule a 15-minute discovery call"}
                </Link>
                <Link
                  href="/portfolio"
                  onClick={() => gtagEvent({ action: "click_view_work", category: "hero", label: "View Our Work" })}
                  className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]"
                >
                  View Our Work
                </Link>
              </div>
              <p className="mt-8 text-sm font-medium uppercase tracking-[0.24em] text-slate-200">
                Custom Software • Automation • ERP • Integrations • Reporting
              </p>
            </motion.div>
          </div>
        </section>

        <section className="border-b border-[var(--color-border)] bg-white">
          <div className="container-shell py-8">
            <div className="flex flex-wrap items-center justify-center gap-3 md:justify-start">
              <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Technology and Platform Experience
              </span>
            </div>
            <div className="mt-5 flex flex-wrap items-center justify-center gap-3 md:justify-start">
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
              eyebrow="Built for the Problems Businesses Deal With Every Day"
              title="Practical software for the work that slows your team down"
              description="SchlaTech focuses on the business problem first, then builds the right technology around it so teams can work faster, cleaner, and with fewer manual bottlenecks."
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
            <div className="rounded-[2rem] border border-[var(--color-border)] bg-[color:var(--color-surface)] p-8 shadow-[var(--shadow-soft)] lg:p-10">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <SectionHeading
                  eyebrow="How we help"
                  title="A practical path from process problem to working solution"
                  description="We don't start with a technology stack first. We start with the workflow, the bottleneck, and the business outcome you are trying to improve."
                  align="left"
                />
                <Link
                  href="#contact"
                  aria-label={ctaVariant ? "Get a free estimate" : "Schedule a discovery call"}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-teal)] transition hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
                >
                  {ctaVariant ? "Get a free estimate" : "Schedule a discovery call"}
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {workflowSteps.map((step, index) => (
                  <article
                    key={step.title}
                    className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]"
                  >
                    <div className="mb-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-teal)]/10 text-sm font-semibold text-[var(--color-teal)]">
                      0{index + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-[var(--color-navy)]">{step.title}</h3>
                    <p className="mt-3 text-base leading-7 text-[color:var(--color-muted)]">{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Solutions"
              title="The systems and tools businesses need to operate better"
              description="SchlaTech works across custom applications, automation, ERP work, data visibility, and connected systems that make daily work easier to run."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {solutions.map((solution) => (
                <FeatureCard
                  key={solution.title}
                  title={solution.title}
                  description={solution.description}
                  linkHref={solution.title === "Acumatica Development" ? "/acumatica-development" : solution.title === "Manufacturing and ERP Solutions" ? "/#manufacturing" : "/#services"}
                  icon={solution.icon}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="manufacturing" className="border-y border-[var(--color-border)] bg-[color:var(--color-surface)] py-20 sm:py-24">
          <div className="container-shell">
            <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-teal)]">
                  Manufacturing and ERP expertise
                </p>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-4xl">
                  Deep Experience in Manufacturing and ERP
                </h2>
                <p className="mt-5 text-lg leading-8 text-[color:var(--color-muted)]">
                  Manufacturing is one of SchlaTech’s strongest areas of expertise. We have built software around production scheduling, inventory, shop-floor workflows, ERP customization, reporting, authentication, barcoding, printing, and system integration.
                </p>
                <p className="mt-4 text-base leading-7 text-[color:var(--color-muted)]">
                  That experience gives us a practical understanding of complex operations, but the same problem-first approach applies to software projects across other industries as well.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link href="/#services" className="inline-flex items-center justify-center rounded-full bg-[var(--color-teal)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-teal-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]">
                    Explore Manufacturing Solutions
                  </Link>
                  <Link href="/acumatica-development" className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-navy)] transition hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2">
                    Acumatica Development
                  </Link>
                </div>
              </div>
              <div className="rounded-[2rem] border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-soft)]">
                <ul className="space-y-4 text-base text-[color:var(--color-muted)]">
                  <li className="flex items-start gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-teal)]" /><span>Production scheduling and planning tools</span></li>
                  <li className="flex items-start gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-teal)]" /><span>Inventory workflows and mobile data capture</span></li>
                  <li className="flex items-start gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-teal)]" /><span>Acumatica customizations and integrations</span></li>
                  <li className="flex items-start gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-teal)]" /><span>Barcode, QR, printing, and shop-floor automation</span></li>
                  <li className="flex items-start gap-3"><span className="mt-2 h-2.5 w-2.5 rounded-full bg-[var(--color-teal)]" /><span>Operational reporting and dashboard visibility</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--color-border)] bg-[color:var(--color-surface)] py-20 sm:py-24">
          <div className="container-shell">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <SectionHeading
                eyebrow="Real software. Measurable results."
                title="Results that matter to the business"
                description="The goal is always practical improvement: fewer manual steps, better data, clearer workflows, and systems that people actually want to use."
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
              <MetricBlock value="250+" description="Hours saved annually by automating a weekly process" />
              <MetricBlock value="50+" description="Workstation locations deployed across distributed operations" />
              <MetricBlock value="6-hour process reduced to seconds" description="A multi-step manual operation transformed into a one-click workflow" />
              <MetricBlock value="Connected field-to-ERP workflow" description="Inventory and operational data captured in the field and synced back to the system" />
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Featured case studies"
              title="Software that solves real process problems"
              description="Each engagement starts with a business bottleneck and ends with a more usable solution, better visibility, or reduced manual effort."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {caseStudies.map((study) => (
                <article
                  key={study.title}
                  className="flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[color:var(--color-surface)] p-7 shadow-[var(--shadow-soft)]"
                >
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">
                    Challenge
                  </p>
                  <h3 className="mt-4 text-xl font-semibold text-[var(--color-navy)]">{study.title}</h3>

                  <div className="mt-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">
                      Solution
                    </p>
                    <p className="mt-2 text-base leading-7 text-[color:var(--color-muted)]">{study.solution}</p>
                  </div>

                  <div className="mt-5">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">
                      Result
                    </p>
                    <p className="mt-2 flex-1 text-base leading-7 text-[color:var(--color-muted)]">{study.impact}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {study.technologies.map((technology) => (
                      <span
                        key={`${study.title}-${technology}`}
                        className="rounded-full border border-[var(--color-border)] bg-white px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-[var(--color-navy)]"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/portfolio"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-teal)] transition hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
                  >
                    Explore the full story
                    <ArrowRight size={16} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--color-surface)] py-20 sm:py-24">
          <div className="container-shell">
            <div className="rounded-[2rem] border border-[var(--color-border)] bg-white p-8 shadow-[var(--shadow-soft)] lg:p-10">
              <SectionHeading
                eyebrow="Typical project types"
                title="The kinds of problems we solve most often"
                description="The work usually falls into a few repeatable categories: workflow automation, ERP and data integration, and custom tools that make operations easier to run."
                align="left"
              />

              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {commonProjectTypes.map((item) => (
                  <article key={item.title} className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[color:var(--color-surface)] p-6">
                    <h3 className="text-xl font-semibold text-[var(--color-navy)]">{item.title}</h3>
                    <p className="mt-3 text-base leading-7 text-[color:var(--color-muted)]">{item.description}</p>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-teal)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-teal-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
                >
                  Talk through your project
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-navy)] transition hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
                >
                  See our work
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--color-surface)] py-20 sm:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Why Businesses Work With SchlaTech"
              title="A practical partner for custom software and operational improvement"
              description="We focus on tools that fit the business, support your team, and stand up to real day-to-day use."
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
            <SectionHeading
              eyebrow="FAQs"
              title="Common questions before a project begins"
              description="These are the conversations that usually happen before the first line of code gets written."
            />
            <div className="mt-10 grid gap-6 lg:grid-cols-2">
              {faqItems.map((item) => (
                <article key={item.question} className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[color:var(--color-surface)] p-6">
                  <h3 className="text-lg font-semibold text-[var(--color-navy)]">{item.question}</h3>
                  <p className="mt-3 text-base leading-7 text-[color:var(--color-muted)]">{item.answer}</p>
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
                  Business Problems Meet Software Engineering
                </h2>
                <p className="mt-5 text-lg leading-8 text-[color:var(--color-muted)]">
                  SchlaTech was founded by Matt Schlabach, a software engineer with experience building custom business applications, ERP customizations, integrations, automation tools, reporting systems, mobile applications, and manufacturing software.
                </p>
                <p className="mt-5 text-lg leading-8 text-[color:var(--color-muted)]">
                  Much of that experience comes from solving complex manufacturing and ERP problems, but SchlaTech’s approach is broader: understand the workflow, identify the bottleneck, and build the right solution.
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Custom software",
                    "Business automation",
                    "Acumatica development",
                    "ERP integrations",
                    "Manufacturing systems",
                    "SQL and reporting",
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
                What Is Costing Your Team Hours Every Week?
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-200">
                Tell us where your process is getting stuck. We will help determine whether custom software, automation, integration, or improvements to your existing systems can solve it.
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
                  View Our Work
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
                  <p className="mt-4 text-sm text-[color:var(--color-muted)]">
                    Prefer a quick call? Email <a href="mailto:matt@schlatech.com" className="font-semibold text-[var(--color-navy)] hover:text-[var(--color-teal)]">matt@schlatech.com</a> or call <a href="tel:+13307631399" className="font-semibold text-[var(--color-navy)] hover:text-[var(--color-teal)]">(330) 763-1399</a> to schedule a 15-minute discovery call.
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
