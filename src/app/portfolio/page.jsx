import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const caseStudies = [
  {
    title: "Acumatica OAuth / Microsoft Entra ID Migration",
    problem:
      "An external manufacturing application relied on legacy Windows Authentication, making future security and remote access increasingly difficult.",
    solution:
      "SchlaTech migrated the application to OAuth 2.0 and Microsoft Entra ID while preserving the existing user workflow and aligning the app with modern Microsoft identity standards.",
    impact:
      "The client gained modern authentication, stronger security, easier deployment, and a more future-ready architecture for its Acumatica-connected system.",
    technologies: ["Acumatica", "OAuth 2.0", "Microsoft Entra ID", ".NET", "REST APIs"],
  },
  {
    title: "Production Scheduling Dashboard",
    problem:
      "Production planners were forced to move between multiple ERP screens while manually reviewing sales orders, dates, and production constraints.",
    solution:
      "SchlaTech built a scheduling dashboard that consolidates production planning information into a single interface, helping planners review orders and update dates faster.",
    impact:
      "The result was faster planning, fewer scheduling errors, and better visibility for high-priority work.",
    technologies: ["Acumatica", "C#", "SQL Server", "REST API"],
  },
  {
    title: "Product Configuration Copy Utility",
    problem:
      "Creating similar configurable products required repeated manual configuration work, which slowed new product setup and increased inconsistency risk.",
    solution:
      "SchlaTech created a utility that copies existing product configurations while allowing selective updates so teams can launch similar products without rebuilding the setup manually.",
    impact:
      "This reduced repetitive setup work, accelerated new-product launches, and improved configuration consistency.",
    technologies: ["Acumatica", "Manufacturing Configuration", "C#", "SQL"],
  },
  {
    title: "Shop Floor Printing Automation",
    problem:
      "Manufacturing documents like move tickets, labels, and work-center paperwork needed manual intervention and often followed inconsistent routing paths.",
    solution:
      "SchlaTech implemented automated printing workflows that route production documents to the correct printers based on work center and process rules.",
    impact:
      "The operation saw less manual print handling, better production flow, and fewer routing errors on the shop floor.",
    technologies: ["Acumatica", "Manufacturing", "Label Printing", "Custom Actions"],
  },
  {
    title: "Cutbill Builder",
    problem:
      "Weekly cutbill generation consumed several hours of manual calculations and exports while leaving room for costly mistakes before production could begin.",
    solution:
      "SchlaTech designed a desktop application that automates cutbill calculations using configurable business rules and exports the required files directly for plant equipment.",
    impact:
      "The process dropped from several hours to seconds, saving more than 250 hours annually and improving consistency across the production schedule.",
    technologies: ["WPF", "C#", "SQL", "Manufacturing Automation"],
  },
  {
    title: "Manufacturing Operator Workstation",
    problem:
      "Production employees needed a secure interface on the shop floor that could run without exposing Windows and without constant local maintenance.",
    solution:
      "SchlaTech built a locked-down touchscreen workstation with centralized automatic updates, simplified workflows, and manufacturing-specific interfaces for operators across many sites.",
    impact:
      "The platform was deployed across 50+ locations and improved the operator experience while reducing maintenance overhead.",
    technologies: ["WPF", "Prism", "MVVM", "Windows", "SQL"],
  },
  {
    title: "Mill Inventory Mobile Application",
    problem:
      "Inventory was still being recorded in the yard and entered into the ERP later, delaying visibility and increasing the risk of errors.",
    solution:
      "SchlaTech created an Android app that lets operators record inventory in the field using QR code scanning and immediate ERP integration.",
    impact:
      "The operation gained real-time inventory visibility, better traceability, and faster receiving and processing.",
    technologies: ["Android", "QR Codes", "REST API", "ERP Integration"],
  },
  {
    title: "Set Load Date Scheduler",
    problem:
      "Production planners had no efficient way to assign and update load dates across large numbers of manufacturing orders.",
    solution:
      "SchlaTech built a scheduling interface with filtering, mass updates, production point calculations, and optimized loading workflows designed to improve planner productivity.",
    impact:
      "The workflow became faster, more scalable, and much easier for planners to manage at volume.",
    technologies: ["Acumatica", "Generic Inquiries", "REST API", "SQL", "Manufacturing"],
  },
];

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components

export default function PortfolioPage() {
  return (
    <>
      <Header
        title={"Our Work in Action"}
        subtitle={"Real manufacturing problems, practical software, measurable business impact."}
      />
      <main className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#0097B2]">Featured case studies</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900">Success stories built for manufacturers</h2>
        </div>

        <div className="space-y-8">
          {caseStudies.map((study) => (
            <article
              key={study.title}
              className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)] sm:p-8"
            >
              <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                <div>
                  <h3 className="text-2xl font-semibold text-slate-900">{study.title}</h3>

                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0097B2]">Business problem</p>
                    <p className="mt-2 text-base leading-7 text-slate-700">{study.problem}</p>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0097B2]">Technical solution</p>
                    <p className="mt-2 text-base leading-7 text-slate-700">{study.solution}</p>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#0097B2]">Business impact</p>
                    <p className="mt-2 text-base leading-7 text-slate-700">{study.impact}</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Technology</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {study.technologies.map((technology) => (
                      <span
                        key={`${study.title}-${technology}`}
                        className="rounded-full border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-700"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-2">Do you have a problem that looks like this?</h3>
          <p className="text-gray-600 mb-4">Manufacturing, ERP, automation, and integration challenges are exactly where SchlaTech adds value.</p>
          <Link
            href="/#contact"
            className="inline-block px-6 py-3 bg-[#0097B2] text-white font-semibold rounded-xl shadow hover:bg-[#007d99] transition"
          >
            Talk to SchlaTech
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
