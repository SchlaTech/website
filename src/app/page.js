"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  const submitForm = (e) => {
    e.preventDefault();
    alert("Thank you! Your request has been submitted.");
  };

  return (
    <>
      <Header
        title="Smarter Software for Smarter Business"
        subtitle="Custom software, automation & dashboards tailored to your business needs."
      />
      {/* SERVICES SECTION */}
<section
  id="services"
  className="px-6 py-20 bg-slate-100 transition-colors text-black"
>
  <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
  <div className="max-w-3xl mx-auto text-center mb-12 space-y-6">
    <p className="text-lg leading-relaxed">
      At SchlaTech, we believe technology should make work simpler, faster, and
      more reliable, not more complicated. That’s why we partner with businesses
      to design software and systems that remove bottlenecks, eliminate
      repetitive tasks, and give teams tools they can actually trust.
    </p>
    <p className="text-lg leading-relaxed">
      From custom applications to reporting, training, and long-term support,
      everything we build is focused on solving real problems, creating
      measurable efficiencies, and giving your business room to grow.
    </p>
  </div>

  <div className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto">
    {[
      {
        title: "Custom Software Solutions",
        desc: "Tailor-made systems built around your business needs.",
        image: "/images/Custom.jpg",
      },
      {
        title: "Process Automation",
        desc: "Save time and money by automating repetitive tasks.",
        image: "/images/Auto.jpg",
      },
      {
        title: "Interactive Dashboards",
        desc: "Turn raw data into insights with user-friendly visualizations.",
        image: "/images/Dash.jpg",
      },
      {
        title: "Business Tech Audits",
        desc: "Comprehensive reviews to optimize your current digital tools.",
        image: "/images/Audit.jpg",
      },
    ].map((service, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: idx * 0.2 }}
        className="p-6 bg-white rounded-xl shadow hover:shadow-md transition"
      >
        <div className="w-full h-40 mb-4 rounded-md overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            width={600}
            height={160}
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
        <p>{service.desc}</p>
      </motion.div>
    ))}
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
