import { site } from "../data/site";

export function Education() {
  const { education } = site;

  return (
    <section id="education" className="section border-t border-[var(--line)]">
      <div className="container grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-end">
        <div>
          <p className="section-label">Education</p>
          <h2 className="section-title">Foundation</h2>
        </div>
        <div>
          <p className="m-0 font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.03em] md:text-3xl">
            {education.school}
          </p>
          <p className="mt-3 text-lg text-[var(--ink-soft)]">{education.degree}</p>
          <p className="mt-1 text-[var(--muted)]">{education.years}</p>
        </div>
      </div>
    </section>
  );
}
