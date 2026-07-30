import { site } from "../data/site";

const nav = [
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--line)] bg-[color-mix(in_srgb,var(--bg)_82%,transparent)] backdrop-blur-md">
      <div className="container flex items-center justify-between gap-4 py-3.5">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] text-lg font-bold tracking-[-0.03em]"
        >
          {site.name}
        </a>
        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--ink-soft)] transition-colors hover:text-[var(--ink)]"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <a href={`mailto:${site.email}`} className="btn btn-primary text-sm">
          Hire me
        </a>
      </div>
    </header>
  );
}
