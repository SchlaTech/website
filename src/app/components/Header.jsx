"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header({ title, subtitle, showCTA = true }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <meta
        name="description"
        content="Custom apps, training, and reporting for small businesses. Let SchlaTech help you modernize."
      />

      {/* Open Graph */}
      <meta
        property="og:title"
        content="SchlaTech – Custom Software for Small Businesses"
      />
      <meta
        property="og:description"
        content="Custom apps, training, and reporting for small businesses. Let SchlaTech help you modernize."
      />
      <meta
        property="og:image"
        content="https://schlatech.com/images/icon.png"
      />
      <meta property="og:url" content="https://schlatech.com" />
      <meta property="og:type" content="website" />
      {/* Sticky Nav */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-[#10131b] shadow-md" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/images/logo.png" alt="Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold">
              <span className="text-white">SCHLA</span>
              <span className="text-[#0097B2]">TECH</span>
            </span>
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-[#0097B2] focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <div className="hidden text-white md:flex space-x-6 items-center">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg px-4 py-4 space-y-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block text-black text-lg py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="block text-black text-lg py-2"
            >
              About
            </Link>
            <Link
              href="/#services"
              onClick={() => setIsOpen(false)}
              className="block text-black text-lg py-2"
            >
              Services
            </Link>
            <Link
              href="/portfolio"
              onClick={() => setIsOpen(false)}
              className="block text-black text-lg py-2"
            >
              Portfolio
            </Link>
            <Link
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="block text-black text-lg py-2"
            >
              Contact
            </Link>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative px-6 py-24 bg-[url('/images/comp.jpg')] bg-cover bg-center text-white min-h-[24rem] flex items-center justify-center">
        <div className="absolute inset-0 bg-gray-900/50 z-0"></div>
        <div className="relative z-10 text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">{title}</h1>
          <p className="text-xl mb-6">{subtitle}</p>
          {showCTA && (
            <Link
              href="/#contact"
              className="bg-[#0097B2] hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
            >
              Contact Us
            </Link>
          )}
        </div>
      </header>
    </>
  );
}
