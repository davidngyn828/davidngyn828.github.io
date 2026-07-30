import { site } from "../data/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--line)] py-8">
      <div className="container flex flex-col gap-3 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p className="m-0">
          © {year} {site.name}. {site.location}.
        </p>
        <p className="m-0">Senior Full Stack AI Engineer</p>
      </div>
    </footer>
  );
}
