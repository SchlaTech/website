import React from 'react';

export default function AboutPage() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-[url('/images/about-hero.jpg')] bg-cover bg-center py-24 px-6 text-white">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-5xl font-bold">About SchlaTech</h1>
          <p className="mt-4 text-xl">Empowering small businesses with smart software solutions.</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          SchlaTech was founded with a mission to help small and growing businesses thrive in a digital world. 
          We specialize in building tailored software tools that streamline operations, simplify tasks, and solve real-world problems.
        </p>
      </section>

      {/* Mission & Vision */}
      <section className="bg-slate-100 py-16 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
            <p className="text-gray-700 text-lg">
              To empower businesses—especially those in rural and underserved communities—by equipping them with 
              the technology they need to grow, succeed, and serve others with excellence.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
            <p className="text-gray-700 text-lg">
              We envision a world where technology is approachable, useful, and human-centered. 
              At SchlaTech, our goal is to bridge the gap between great ideas and functional software.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-semibold mb-4">Meet the Founder</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img src="/images/matt.jpg" alt="Matt Schlabach" className="rounded-full w-40 h-40 object-cover shadow-lg" />
          <p className="text-lg text-gray-700 leading-relaxed">
            Matt Schlabach is a seasoned software engineer and passionate entrepreneur based in Holmes County, Ohio.
            With a heart for ministry and a mind for technology, he launched SchlaTech to help others thrive—both in business and in life.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white text-center py-12 px-6">
        <h2 className="text-3xl font-bold mb-4">Ready to take your business to the next level?</h2>
        <p className="text-lg mb-6">Let’s build something great together.</p>
        <a href="/contact" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded hover:bg-blue-100 transition">
          Contact Us
        </a>
      </section>
    </main>
  );
}
