import { site } from "../data/site";

export function Work() {
  return (
    <section id="work" className="section border-y border-[var(--line)] bg-[color-mix(in_srgb,var(--bg-elevated)_70%,transparent)]">
      <div className="container">
        <p className="section-label">Selected work</p>
        <h2 className="section-title">Projects worth a closer look</h2>
        <p className="section-lead">
          A sample of products and systems I&apos;ve built — from APIs and
          platforms to product experiments.
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {site.projects.map((project, index) => (
            <article key={project.title} className="group">
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="block outline-none"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-[linear-gradient(145deg,#0d1b22_0%,#1a3d3a_48%,#0a6b63_100%)] transition-transform duration-500 ease-out group-hover:scale-[1.015] group-focus-visible:ring-2 group-focus-visible:ring-[var(--accent)]">
                  {project.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full flex-col justify-between p-6 text-[#e8f2f0]">
                      <span className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.14em] uppercase opacity-70">
                        Project {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.04em]">
                        {project.title}
                      </span>
                    </div>
                  )}
                </div>
                <div className="mt-5">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="m-0 font-[family-name:var(--font-display)] text-2xl font-bold tracking-[-0.03em]">
                      {project.title}
                    </h3>
                    <span className="shrink-0 text-sm font-semibold text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1">
                      View →
                    </span>
                  </div>
                  <p className="mt-2 text-[var(--ink-soft)]">{project.description}</p>
                  <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 p-0 text-sm text-[var(--muted)]">
                    {project.tags.map((tag) => (
                      <li key={tag} className="list-none">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
