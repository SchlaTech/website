import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FeatureCard({
  title,
  description,
  linkHref,
  linkLabel = "Explore this solution",
  icon: Icon,
}) {
  return (
    <article className="group flex h-full flex-col rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-white p-7 shadow-[var(--shadow-soft)] transition duration-200 hover:-translate-y-1 hover:border-[var(--color-teal)]/40 hover:shadow-[var(--shadow-hover)]">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[color:var(--color-accent)] text-[var(--color-navy)]">
        {Icon ? <Icon size={20} strokeWidth={1.8} /> : null}
      </div>
      <h3 className="text-xl font-semibold text-[var(--color-navy)]">{title}</h3>
      <p className="mt-3 flex-1 text-base leading-7 text-[color:var(--color-muted)]">{description}</p>
      <Link
        href={linkHref}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-teal)] transition hover:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-teal)] focus-visible:ring-offset-2"
      >
        {linkLabel}
        <ArrowRight size={16} />
      </Link>
    </article>
  );
}
