"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { event as gtagEvent } from "../../lib/gtag";

const solutionsLinks = [
  { href: "/#services", label: "Custom Software" },
  { href: "/#services", label: "Business Automation" },
  { href: "/#services", label: "ERP and Integrations" },
  { href: "/#services", label: "Reporting and Analytics" },
  { href: "/acumatica-development", label: "Acumatica Development" },
];

const industriesLinks = [
  { href: "/#manufacturing", label: "Manufacturing" },
  { href: "/#services", label: "Other Industries" },
];

export default function Header({
  title,
  subtitle,
  showHero = true,
  showCTA = true,
  eyebrow = "SchlaTech",
  ctaHref = "/#contact",
  ctaText = "Discuss Your Project",
  secondaryCtaHref = null,
  secondaryCtaText = "View Our Work",
  supportingLine = null,
}) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isMobileSolutionsOpen, setIsMobileSolutionsOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const solutionsDropdownRef = useRef(null);
  const industriesDropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (solutionsDropdownRef.current && !solutionsDropdownRef.current.contains(event.target)) {
        setIsSolutionsOpen(false);
      }
      if (industriesDropdownRef.current && !industriesDropdownRef.current.contains(event.target)) {
        setIsIndustriesOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsSolutionsOpen(false);
        setIsIndustriesOpen(false);
        setIsOpen(false);
        setIsMobileSolutionsOpen(false);
        setIsMobileIndustriesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
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
    if (href === "/#manufacturing") {
      return pathname === "/";
    }
    if (href === "/portfolio") {
      return pathname === "/portfolio";
    }
    return pathname.startsWith(href);
  };

  const handleMobileSolutionToggle = () => {
    setIsMobileSolutionsOpen((value) => !value);
    setIsMobileIndustriesOpen(false);
  };

  const handleMobileIndustryToggle = () => {
    setIsMobileIndustriesOpen((value) => !value);
    setIsMobileSolutionsOpen(false);
  };

  const handleToggleKeyDown = (event, toggleFn) => {
    if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
      event.preventDefault();
      toggleFn();
    }
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
            <Image src="/images/altLogo.png" alt="SchlaTech logo" width={40} height={40} className="h-10 w-10" />
            <div className="flex flex-col leading-none">
              <span className="text-lg font-semibold tracking-[0.24em] text-[var(--color-navy)]">
                SCHLA<span className="text-[var(--color-teal)]">TECH</span>
              </span>
              <span className="mt-1 text-[11px] uppercase tracking-[0.24em] text-[color:var(--color-muted)]">
                Custom software
              </span>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <div className="hidden items-center gap-6 md:flex">
              <Link href="/" className={`text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 ${isActiveLink("/") ? "text-[var(--color-teal)]" : "text-[var(--color-navy)] hover:text-[var(--color-teal)]"}`}>
                Home
              </Link>

              <div
                ref={solutionsDropdownRef}
                className="relative"
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setIsSolutionsOpen(false);
                  }
                }}
              >
                <button
                  type="button"
                  className={`inline-flex items-center gap-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 ${isSolutionsOpen ? "text-[var(--color-teal)]" : "text-[var(--color-navy)] hover:text-[var(--color-teal)]"}`}
                  aria-expanded={isSolutionsOpen}
                  aria-haspopup="true"
                  onClick={() => setIsSolutionsOpen((value) => !value)}
                  onKeyDown={(event) => handleToggleKeyDown(event, () => setIsSolutionsOpen((value) => !value))}
                  onFocus={() => setIsSolutionsOpen(true)}
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                >
                  Solutions
                  <ChevronDown size={16} className={`transition ${isSolutionsOpen ? "rotate-180" : "rotate-0"}`} />
                </button>

                {isSolutionsOpen ? (
                  <div
                    className="absolute left-0 top-full mt-3 w-64 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-3 shadow-[var(--shadow-hover)]"
                    onMouseEnter={() => setIsSolutionsOpen(true)}
                    onMouseLeave={() => setIsSolutionsOpen(false)}
                  >
                    <ul className="space-y-1">
                      {solutionsLinks.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-navy)] transition hover:bg-[color:var(--color-surface)] hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
                            onClick={() => setIsSolutionsOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>

              <div
                ref={industriesDropdownRef}
                className="relative"
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) {
                    setIsIndustriesOpen(false);
                  }
                }}
              >
                <button
                  type="button"
                  className={`inline-flex items-center gap-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 ${isIndustriesOpen ? "text-[var(--color-teal)]" : "text-[var(--color-navy)] hover:text-[var(--color-teal)]"}`}
                  aria-expanded={isIndustriesOpen}
                  aria-haspopup="true"
                  onClick={() => setIsIndustriesOpen((value) => !value)}
                  onKeyDown={(event) => handleToggleKeyDown(event, () => setIsIndustriesOpen((value) => !value))}
                  onFocus={() => setIsIndustriesOpen(true)}
                  onMouseEnter={() => setIsIndustriesOpen(true)}
                >
                  Industries
                  <ChevronDown size={16} className={`transition ${isIndustriesOpen ? "rotate-180" : "rotate-0"}`} />
                </button>

                {isIndustriesOpen ? (
                  <div
                    className="absolute left-0 top-full mt-3 w-52 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-3 shadow-[var(--shadow-hover)]"
                    onMouseEnter={() => setIsIndustriesOpen(true)}
                    onMouseLeave={() => setIsIndustriesOpen(false)}
                  >
                    <ul className="space-y-1">
                      {industriesLinks.map((link) => (
                        <li key={link.label}>
                          <Link
                            href={link.href}
                            className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-navy)] transition hover:bg-[color:var(--color-surface)] hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
                            onClick={() => setIsIndustriesOpen(false)}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>

              <Link
                href="/portfolio"
                onClick={() => gtagEvent({ action: "click_case_studies", category: "navigation", label: "Case Studies" })}
                className={`text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 ${isActiveLink("/portfolio") ? "text-[var(--color-teal)]" : "text-[var(--color-navy)] hover:text-[var(--color-teal)]"}`}
              >
                Case Studies
              </Link>
              <Link
                href="/about"
                onClick={() => gtagEvent({ action: "click_about", category: "navigation", label: "About" })}
                className={`text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 ${isActiveLink("/about") ? "text-[var(--color-teal)]" : "text-[var(--color-navy)] hover:text-[var(--color-teal)]"}`}
              >
                About
              </Link>
              <Link
                href="/#contact"
                onClick={() => gtagEvent({ action: "click_contact", category: "navigation", label: "Contact link" })}
                className={`text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 ${isActiveLink("/#contact") ? "text-[var(--color-teal)]" : "text-[var(--color-navy)] hover:text-[var(--color-teal)]"}`}
              >
                Contact
              </Link>
              <Link
                href={ctaHref}
                onClick={() => gtagEvent({ action: "click_cta", category: "navigation", label: ctaText })}
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
              onKeyDown={(event) => handleToggleKeyDown(event, () => setIsOpen((value) => !value))}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="border-t border-[var(--color-border)] bg-white px-4 py-4 md:hidden">
            <div className="container-shell flex flex-col gap-2">
              <Link href="/" onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-2 text-base font-medium text-[var(--color-navy)] transition hover:bg-[color:var(--color-surface)] hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2">
                Home
              </Link>
              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-base font-medium text-[var(--color-navy)] transition hover:bg-[color:var(--color-surface)] hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
                  aria-expanded={isMobileSolutionsOpen}
                  onClick={handleMobileSolutionToggle}
                  onKeyDown={(event) => handleToggleKeyDown(event, handleMobileSolutionToggle)}
                >
                  Solutions
                  <ChevronDown size={16} className={`transition ${isMobileSolutionsOpen ? "rotate-180" : "rotate-0"}`} />
                </button>
                {isMobileSolutionsOpen ? (
                  <div className="mt-2 space-y-1 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[color:var(--color-surface)] p-2">
                    {solutionsLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => {
                          setIsOpen(false);
                          setIsMobileSolutionsOpen(false);
                        }}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-navy)] transition hover:bg-white hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
              <div>
                <button
                  type="button"
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-base font-medium text-[var(--color-navy)] transition hover:bg-[color:var(--color-surface)] hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
                  aria-expanded={isMobileIndustriesOpen}
                  onClick={handleMobileIndustryToggle}
                  onKeyDown={(event) => handleToggleKeyDown(event, handleMobileIndustryToggle)}
                >
                  Industries
                  <ChevronDown size={16} className={`transition ${isMobileIndustriesOpen ? "rotate-180" : "rotate-0"}`} />
                </button>
                {isMobileIndustriesOpen ? (
                  <div className="mt-2 space-y-1 rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[color:var(--color-surface)] p-2">
                    {industriesLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        onClick={() => {
                          setIsOpen(false);
                          setIsMobileIndustriesOpen(false);
                        }}
                        className="block rounded-lg px-3 py-2 text-sm font-medium text-[var(--color-navy)] transition hover:bg-white hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
              <Link
                href="/portfolio"
                onClick={() => {
                  setIsOpen(false);
                  gtagEvent({ action: "click_case_studies", category: "navigation", label: "Case Studies" });
                }}
                className="rounded-lg px-3 py-2 text-base font-medium text-[var(--color-navy)] transition hover:bg-[color:var(--color-surface)] hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
              >
                Case Studies
              </Link>
              <Link
                href="/about"
                onClick={() => {
                  setIsOpen(false);
                  gtagEvent({ action: "click_about", category: "navigation", label: "About" });
                }}
                className="rounded-lg px-3 py-2 text-base font-medium text-[var(--color-navy)] transition hover:bg-[color:var(--color-surface)] hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
              >
                About
              </Link>
              <Link
                href="/#contact"
                onClick={() => {
                  setIsOpen(false);
                  gtagEvent({ action: "click_contact", category: "navigation", label: "Contact link" });
                }}
                className="rounded-lg px-3 py-2 text-base font-medium text-[var(--color-navy)] transition hover:bg-[color:var(--color-surface)] hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
              >
                Contact
              </Link>
              <Link
                href={ctaHref}
                onClick={() => {
                  setIsOpen(false);
                  gtagEvent({ action: "click_cta", category: "navigation", label: ctaText });
                }}
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
              {supportingLine ? (
                <p className="mt-4 text-sm font-medium uppercase tracking-[0.24em] text-slate-200">{supportingLine}</p>
              ) : null}
              {showCTA ? (
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={ctaHref}
                    onClick={() => gtagEvent({ action: "click_cta", category: "hero", label: ctaText })}
                    className="inline-flex items-center justify-center rounded-full bg-[var(--color-teal)] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[color:var(--color-teal-dark)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]"
                  >
                    {ctaText}
                  </Link>
                  {secondaryCtaHref ? (
                    <Link
                      href={secondaryCtaHref}
                      onClick={() => gtagEvent({ action: "click_secondary_cta", category: "hero", label: secondaryCtaText })}
                      className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]"
                    >
                      {secondaryCtaText}
                    </Link>
                  ) : null}
                </div>
              ) : null}
            </div>
          </div>
        </header>
      ) : null}
    </>
  );
}
