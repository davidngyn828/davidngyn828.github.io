import { site } from "../data/site";

export function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I&apos;ve built and led</h2>
        <p className="section-lead">
          Recent roles spanning AI product delivery, full-stack systems, and
          client-facing software.
        </p>

        <ol className="mt-12 list-none space-y-0 p-0">
          {site.experience.map((job, index) => (
            <li
              key={job.company}
              className="grid gap-4 border-t border-[var(--line)] py-9 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.6fr)] md:gap-10"
            >
              <div>
                <p className="m-0 font-[family-name:var(--font-display)] text-xl font-bold tracking-[-0.03em]">
                  {job.company}
                </p>
                <p className="mt-1 text-sm text-[var(--muted)]">
                  {job.period}
                  <span className="mx-2 text-[var(--line)]">·</span>
                  {job.location}
                </p>
                <p className="mt-3 text-sm font-semibold text-[var(--accent)]">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>
              <div>
                <h3 className="m-0 text-lg font-semibold tracking-[-0.02em]">
                  {job.role}
                </h3>
                <ul className="mt-4 space-y-2.5 pl-0 text-[var(--ink-soft)]">
                  {job.highlights.map((item) => (
                    <li key={item} className="relative list-none pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-[var(--accent)] before:content-['']">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
