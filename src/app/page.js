"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  const submitForm = (e) => {
    e.preventDefault();
    alert("Thank you! Your request has been submitted.");
  };

  return (
    <>
      <Header
        title="Smarter Software for Smarter Business"
        subtitle="Insight. Action. Growth. | Custom software, automation & dashboards tailored to your business needs."
      />
      {/* SERVICES SECTION */}
      <section
        id="services"
        className="px-6 py-20 bg-slate-100 transition-colors text-black"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-left mb-6">What We Do</h2>
          <p className="text-left max-w-2xl mb-12">
            {
              "We work with small businesses to streamline operations through tailored technology solutions. Whether it’s building custom applications, generating reports, tech reviews, or implementing digital tools, I bridge the gap between traditional business and modern tech, especially for communities that need practical, no-nonsense solutions."
            }
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Custom Software Solutions",
                desc: "Tailor-made systems built around your business needs.",
                icon: "",
              },
              {
                title: "Process Automation",
                desc: "Save time and money by automating repetitive tasks.",
                icon: "",
              },
              {
                title: "Interactive Dashboards",
                desc: "Turn raw data into insights with user-friendly visualizations.",
                icon: "",
              },
              {
                title: "Business Tech Audits",
                desc: "Comprehensive reviews to optimize your current digital tools.",
                icon: "",
              },
            ].map((service, idx) => (
              <div
                key={idx}
                className="p-6 bg-white rounded-xl shadow hover:shadow-md transition"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <section
        id="form"
        className="px-6 py-20 bg-white transition-colors text-black"
      >
        <h2 className="text-3xl font-bold text-center mb-12">Work With Us</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <img
                  src="/images/location.png"
                  alt="location"
                  className="w-5 h-5"
                  width={5}
                  height={5}
                />
                Holmesville, Ohio
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="/images/phone.png"
                  alt="phone"
                  className="w-5 h-5"
                  width={5}
                  height={5}
                />
                <a
                  href="tel:+3307631399"
                  className="hover:text-blue-400 transition"
                >
                  (330) 763-1399
                </a>
              </li>
              <li className="flex items-center gap-2">
                <img
                  src="/images/email.png"
                  alt="email"
                  className="w-5 h-5"
                  width={5}
                  height={5}
                />
                <a
                  href="mailto:matt@schlatech.com"
                  className="hover:text-blue-400 transition"
                >
                  matt@schlatech.com
                </a>
              </li>
            </ul>
          </div>

          {/* Form */}
          <div>
            <p className="mb-4 text-sm" id="contact">
              {
                "Ready to take your business to the next level? Fill out the form below, and we'll get back to you shortly."
              }
            </p>
            <form
              action="https://formsubmit.co/matt@schlatech.com"
              method="POST"
              className="flex flex-col space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                className="p-3 rounded bg-gray-100 text-black"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="p-3 rounded bg-gray-100 text-black"
              />
              <textarea
                name="needs"
                placeholder="Business Needs..."
                required
                className="p-3 rounded bg-gray-100 text-black"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#0097B2] hover:bg-blue-600 rounded font-semibold text-white transition"
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
      {/* FOOTER */}
    </>
  );
}
