export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}) {
  const alignClass = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col gap-3 max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-teal)]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-semibold tracking-tight text-[var(--color-navy)] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-lg leading-8 text-[color:var(--color-muted)]">{description}</p>
      ) : null}
    </div>
  );
}
