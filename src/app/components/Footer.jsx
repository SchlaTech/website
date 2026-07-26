import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-navy)] py-16 text-white">
      <div className="container-shell grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/logo.png" alt="SchlaTech logo" width={40} height={40} className="h-10 w-10" />
            <div className="flex flex-col leading-none">
              <span className="text-lg font-semibold tracking-[0.24em] text-white">
                SCHLA<span className="text-[var(--color-teal)]">TECH</span>
              </span>
              <span className="mt-1 text-[11px] uppercase tracking-[0.24em] text-slate-300">
                Manufacturing software
              </span>
            </div>
          </Link>
          <p className="mt-6 max-w-md text-base leading-7 text-slate-300">
            We help manufacturers eliminate manual work through custom software, ERP expertise, and intelligent automation.
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-gold)]">
            Insight. Action. Growth.
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Navigate</h2>
          <ul className="mt-5 space-y-3 text-base text-slate-200">
            <li><Link href="/" className="transition hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]">Home</Link></li>
            <li><Link href="/#services" className="transition hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]">Solutions</Link></li>
            <li><Link href="/portfolio" className="transition hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]">Case Studies</Link></li>
            <li><Link href="/about" className="transition hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]">About</Link></li>
            <li><Link href="/#contact" className="transition hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]">Contact</Link></li>
            <li><Link href="/acumatica-development" className="transition hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]">Acumatica Development</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-300">Contact</h2>
          <ul className="mt-5 space-y-3 text-base text-slate-200">
            <li>Holmesville, Ohio</li>
            <li><a href="mailto:matt@schlatech.com" className="transition hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]">matt@schlatech.com</a></li>
            <li><a href="tel:+13307631399" className="transition hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]">(330) 763-1399</a></li>
            <li><a href="https://instagram.com/schlatech" target="_blank" rel="noreferrer" className="transition hover:text-[var(--color-teal)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-navy)]">Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className="container-shell mt-10 border-t border-white/10 pt-6 text-sm text-slate-400">
        <p>© {year} SchlaTech. All rights reserved.</p>
      </div>
    </footer>
  );
}
