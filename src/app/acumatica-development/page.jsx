import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const capabilities = [
  {
    title: "Custom Screens and Workflows",
    description:
      "Build purpose specific screens, actions, processing tools, validations, and workflows for the way your teams work.",
  },
  {
    title: "Manufacturing Enhancements",
    description:
      "Extend production, material, BOM, scheduling, shop floor, inventory, and manufacturing workflows.",
  },
  {
    title: "REST API and External Applications",
    description:
      "Connect Acumatica to custom desktop, web, mobile, equipment, and third party applications.",
  },
  {
    title: "OAuth and Microsoft Entra ID Authentication",
    description:
      "Modernize external application authentication rather than relying on legacy Windows authentication.",
  },
  {
    title: "Reports, Generic Inquiries, and Dashboards",
    description:
      "Create clearer access to operational, manufacturing, inventory, scheduling, and management information.",
  },
  {
    title: "Configuration and Data Utilities",
    description:
      "Build tools for copying configurations, validating information, transforming data, and reducing repetitive ERP administration.",
  },
  {
    title: "Printing and Label Automation",
    description:
      "Improve document, label, move ticket, pick ticket, and work center printing workflows.",
  },
  {
    title: "Performance and Usability Improvements",
    description:
      "Address slow processes, awkward workflows, large data sets, bulk updates, and external applications that do not perform well.",
  },
];

const featuredWork = [
  {
    title: "Production Scheduling Application",
    problem: "Teams needed a clearer way to review demand, schedule activity, update dates, and manage large result sets without relying on repeated manual work.",
    solution: "SchlaTech built a connected scheduling application that surfaced the right information in a practical workflow.",
    outcome: "The result is a more usable process for scheduling and coordination across the manufacturing operation.",
  },
  {
    title: "OAuth Authentication Migration",
    problem: "An external manufacturing application still depended on legacy Windows authentication and was creating friction for users and administrators.",
    solution: "The application was modernized to use OAuth and Microsoft Entra ID authentication while preserving the business workflow.",
    outcome: "The system remains easier to manage and better aligned with current access practices.",
  },
  {
    title: "Product Configuration Copy Utility",
    problem: "Copying product configuration information required repeated manual handling and carried a risk of missing rules or data.",
    solution: "SchlaTech created a purpose built utility that copied product configuration information while preserving the required rules and data.",
    outcome: "The business gained a more reliable way to support configuration work without extra manual effort.",
  },
  {
    title: "Shop Floor and Printing Workflows",
    problem: "Manufacturing transactions and supporting documents still depended on disconnected steps and manual printing routines.",
    solution: "SchlaTech connected the workflow with supporting applications for work center printing, labels, move documents, and pick tickets.",
    outcome: "The process became more consistent and easier for teams to follow on the floor.",
  },
];

const integrations = [
  "REST API",
  "OData",
  "Microsoft Entra ID",
  "Custom .NET applications",
  "Web and mobile applications",
  "SQL and reporting systems",
  "Barcode and QR scanning",
  "Label and document printing",
  "Manufacturing equipment and workflow tools",
  "Data imports, exports, and validation",
];

const reasons = [
  {
    title: "Manufacturing Experience",
    description:
      "Acumatica work is approached with an understanding of production, inventory, scheduling, material movement, printing, and shop floor needs.",
  },
  {
    title: "Custom Software Capability",
    description:
      "When the right solution extends beyond Acumatica, SchlaTech can build the connected application rather than forcing everything into the ERP.",
  },
  {
    title: "Direct Technical Partnership",
    description:
      "Work directly with the person analyzing, designing, and building the solution.",
  },
  {
    title: "Practical Long Term Solutions",
    description:
      "Prioritize maintainability, usability, reliability, and measurable business value over unnecessary complexity.",
  },
];

const processSteps = [
  {
    title: "Understand the Workflow",
    description:
      "Review the current process, users, systems, workarounds, and desired outcome.",
  },
  {
    title: "Design the Right Approach",
    description:
      "Determine whether the best answer is an Acumatica customization, integration, report, external application, or combination.",
  },
  {
    title: "Build and Validate",
    description:
      "Develop iteratively and test against real operational scenarios.",
  },
  {
    title: "Deploy and Support",
    description:
      "Release carefully, document the solution, and support future improvements.",
  },
];

const faqs = [
  {
    question: "Can SchlaTech customize Acumatica manufacturing screens and workflows?",
    answer:
      "Yes. SchlaTech builds purpose specific Acumatica screens, actions, workflows, and supporting tools for manufacturing operations that need more than standard out of the box behavior.",
  },
  {
    question: "Can you connect an external application to Acumatica?",
    answer:
      "Yes. SchlaTech develops integrations with Acumatica through REST APIs, data services, custom .NET applications, and other business systems that need to work together.",
  },
  {
    question: "Can you help migrate an application from Windows authentication to OAuth?",
    answer:
      "Yes. SchlaTech has worked on authentication modernization projects that replace older Windows based access patterns with OAuth and Microsoft Entra ID for external applications.",
  },
  {
    question: "Can you build tools that work alongside Acumatica rather than inside it?",
    answer:
      "Yes. In many cases the most practical solution is a connected application or workflow tool that sits alongside Acumatica and supports the process without forcing everything into the ERP.",
  },
  {
    question: "Can you improve Acumatica reporting and Generic Inquiries?",
    answer:
      "Yes. SchlaTech can build reports, Generic Inquiries, dashboards, and supporting tools that make manufacturing and operational information easier to access and use.",
  },
  {
    question: "Do you work with existing Acumatica partners or internal ERP teams?",
    answer:
      "Yes. SchlaTech can support development work, integrations, and business application improvements alongside an existing ERP partner or internal team when the need is focused on custom software and workflow efficiency.",
  },
];

export const metadata = {
  title: "Acumatica Development for Manufacturers | SchlaTech",
  description:
    "SchlaTech provides Acumatica customizations, integrations, manufacturing enhancements, OAuth authentication, reporting, automation, and external applications built around your operation.",
  alternates: {
    canonical: "https://schlatech.com/acumatica-development",
  },
  openGraph: {
    title: "Acumatica Development for Manufacturers | SchlaTech",
    description:
      "SchlaTech provides Acumatica customizations, integrations, manufacturing enhancements, OAuth authentication, reporting, automation, and external applications built around your operation.",
    url: "https://schlatech.com/acumatica-development",
    type: "website",
    images: [{ url: "/images/icon.png", width: 1200, height: 630, alt: "SchlaTech logo" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Acumatica Development for Manufacturers | SchlaTech",
    description:
      "SchlaTech provides Acumatica customizations, integrations, manufacturing enhancements, OAuth authentication, reporting, automation, and external applications built around your operation.",
    images: ["/images/icon.png"],
  },
};

function SectionHeading({ eyebrow, title, description, align = "center" }) {
  const alignClass = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col gap-3 max-w-3xl ${alignClass}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-teal)]">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-4xl">{title}</h2>
      {description ? <p className="text-lg leading-8 text-[color:var(--color-muted)]">{description}</p> : null}
    </div>
  );
}

export default function AcumaticaDevelopmentPage() {
  return (
    <>
      <Header
        showHero
        eyebrow="Acumatica development for manufacturers"
        title="Extend Acumatica Around the Way Your Business Operates"
        subtitle="SchlaTech builds Acumatica customizations, integrations, manufacturing enhancements, reports, and connected applications that reduce manual work and close the gaps between your ERP and your operation."
        supportingLine="Customizations • Integrations • Manufacturing • Reporting • Authentication"
        ctaHref="#contact"
        ctaText="Discuss Your Acumatica Project"
        secondaryCtaHref="/portfolio"
        secondaryCtaText="View Manufacturing Work"
        showCTA
      />
      <main className="pt-8">
        <section className="bg-white py-20 sm:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Acumatica should support your workflow, not limit it"
              title="Practical ERP work for manufacturers that need more than out of the box"
              description="Every manufacturer has processes that do not fit neatly inside a standard ERP implementation. Teams often rely on spreadsheets, duplicate entry, manual exports, disconnected applications, and workarounds because the ERP does not fully reflect how the business actually operates."
            />
            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-[color:var(--color-muted)]">
              SchlaTech helps manufacturers extend Acumatica with practical solutions that fit existing processes, improve visibility, and reduce the amount of work required outside the system.
            </p>
          </div>
        </section>

        <section className="bg-[color:var(--color-surface)] py-20 sm:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Acumatica solutions built around real operations"
              title="Capabilities that support manufacturers day to day"
              description="From user workflows to integrations and reporting, the work is focused on solving practical business problems rather than just adding another layer to the ERP."
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {capabilities.map((capability) => (
                <article key={capability.title} className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-soft)]">
                  <h3 className="text-lg font-semibold text-[var(--color-navy)]">{capability.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[color:var(--color-muted)]">{capability.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Examples of Acumatica and manufacturing work"
              title="Focused work that supports operations, reporting, and workflow reliability"
              description="These examples reflect the kind of practical engineering and integration work SchlaTech brings to Acumatica based environments."
            />
            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              {featuredWork.map((item) => (
                <article key={item.title} className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[color:var(--color-surface)] p-7 shadow-[var(--shadow-soft)]">
                  <h3 className="text-xl font-semibold text-[var(--color-navy)]">{item.title}</h3>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">Operational problem</p>
                  <p className="mt-2 text-base leading-7 text-[color:var(--color-muted)]">{item.problem}</p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">Solution approach</p>
                  <p className="mt-2 text-base leading-7 text-[color:var(--color-muted)]">{item.solution}</p>
                  <p className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">Practical outcome</p>
                  <p className="mt-2 text-base leading-7 text-[color:var(--color-muted)]">{item.outcome}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--color-surface)] py-20 sm:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Connect Acumatica to the rest of your operation"
              title="Integration work that helps information move reliably"
              description="Acumatica is often only one part of the manufacturing software environment. SchlaTech builds connected solutions that move information reliably between the ERP, internal applications, shop floor systems, mobile devices, reporting tools, and outside services."
            />
            <div className="mt-12 flex flex-wrap gap-3">
              {integrations.map((item) => (
                <span key={item} className="rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm font-medium text-[var(--color-navy)]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Acumatica expertise with manufacturing context"
              title="Why manufacturers work with SchlaTech"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {reasons.map((reason) => (
                <article key={reason.title} className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[color:var(--color-surface)] p-7 shadow-[var(--shadow-soft)]">
                  <h3 className="text-lg font-semibold text-[var(--color-navy)]">{reason.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[color:var(--color-muted)]">{reason.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[color:var(--color-surface)] py-20 sm:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="A practical path from bottleneck to solution"
              title="How the work typically unfolds"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {processSteps.map((step, index) => (
                <article key={step.title} className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-soft)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-teal)]">Step {index + 1}</p>
                  <h3 className="mt-3 text-lg font-semibold text-[var(--color-navy)]">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-[color:var(--color-muted)]">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20 sm:py-24">
          <div className="container-shell">
            <SectionHeading
              eyebrow="Frequently asked questions"
              title="Clear answers about Acumatica development work"
              description="SchlaTech focuses on development, integrations, manufacturing software, and workflow improvements without presenting itself as a generic ERP reseller."
            />
            <div className="mt-12 space-y-4">
              {faqs.map((faq) => (
                <details key={faq.question} className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[color:var(--color-surface)] p-5 shadow-[var(--shadow-soft)]">
                  <summary className="cursor-pointer list-none text-left text-lg font-semibold text-[var(--color-navy)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2">
                    {faq.question}
                  </summary>
                  <p className="mt-3 text-base leading-7 text-[color:var(--color-muted)]">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[var(--color-navy)] py-20 text-white sm:py-24">
          <div className="container-shell">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[var(--shadow-soft)] sm:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">Acumatica project planning</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Where is Acumatica creating extra work for your team?
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
                Tell us about the customization, integration, report, authentication issue, or manufacturing workflow that is slowing your operation down.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link href="#contact" className="inline-flex items-center justify-center rounded-full bg-[var(--color-teal)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-teal-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]">
                  Discuss Your Acumatica Project
                </Link>
                <Link href="/portfolio" className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]">
                  View Our Work
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
