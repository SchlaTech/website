export default function MetricBlock({ value, description }) {
  return (
    <div className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[color:var(--color-surface)] p-8 shadow-[var(--shadow-soft)]">
      <p className="text-4xl font-semibold tracking-tight text-[var(--color-teal)] sm:text-5xl">
        {value}
      </p>
      <p className="mt-4 text-base leading-7 text-[color:var(--color-muted)]">{description}</p>
    </div>
  );
}
