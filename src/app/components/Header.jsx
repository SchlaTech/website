"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/#contact", label: "Contact" },
];

export default function Header({
  title,
  subtitle,
  showHero = true,
  showCTA = true,
  eyebrow = "SchlaTech",
  ctaHref = "/#contact",
  ctaText = "Discuss Your Project",
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActiveLink = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/#services") {
      return pathname === "/";
    }
    if (href === "/#contact") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-[var(--color-border)] bg-white/95 shadow-[var(--shadow-soft)] backdrop-blur"
            : "bg-white/80 backdrop-blur"
        }`}
      >
        <div className="container-shell flex h-20 items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2">
            <Image src="/images/logo.png" alt="SchlaTech logo" width={40} height={40} className="h-10 w-10" />
            <div className="flex flex-col leading-none">
              <span className="text-lg font-semibold tracking-[0.24em] text-[var(--color-navy)]">
                SCHLA<span className="text-[var(--color-teal)]">TECH</span>
              </span>
              <span className="mt-1 text-[11px] uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
                Manufacturing software
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-6 md:flex">
              {navLinks.map((link) => {
                const active = isActiveLink(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 ${
                      active ? "text-[var(--color-teal)]" : "text-[var(--color-navy)] hover:text-[var(--color-teal)]"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href={ctaHref}
                className="inline-flex items-center rounded-full bg-[var(--color-teal)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[color:var(--color-teal-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
              >
                {ctaText}
              </Link>
            </div>
            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-navy)] transition hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={isOpen}
              onClick={() => setIsOpen((value) => !value)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="border-t border-[var(--color-border)] bg-white px-4 py-4 md:hidden">
            <div className="container-shell flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-lg px-3 py-2 text-base font-medium text-[var(--color-navy)] transition hover:bg-[color:var(--color-surface)] hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href={ctaHref}
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[var(--color-teal)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[color:var(--color-teal-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
              >
                {ctaText}
              </Link>
            </div>
          </div>
        ) : null}
      </nav>

      {showHero ? (
        <header className="relative isolate overflow-hidden bg-[var(--color-navy)] text-white">
          <div className="absolute inset-0">
            <Image
              src="/images/comp.jpg"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,33,58,0.92)_0%,rgba(16,33,58,0.8)_45%,rgba(16,33,58,0.55)_100%)]" />
          </div>
          <div className="relative container-shell py-24 sm:py-28 lg:py-32">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-gold)]">
                {eyebrow}
              </p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {title}
              </h1>
              {subtitle ? <p className="mt-6 text-lg leading-8 text-slate-100">{subtitle}</p> : null}
              {showCTA ? (
                <Link
                  href={ctaHref}
                  className="mt-8 inline-flex items-center rounded-full bg-[var(--color-teal)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-teal-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]"
                >
                  {ctaText}
                </Link>
              ) : null}
            </div>
          </div>
        </header>
      ) : null}
    </>
  );
}
