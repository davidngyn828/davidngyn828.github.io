import { site } from "../data/site";

export function Skills() {
  return (
    <section className="section">
      <div className="container">
        <p className="section-label">Capabilities</p>
        <h2 className="section-title">What I bring to a team</h2>
        <ul className="mt-10 grid list-none gap-3 p-0 sm:grid-cols-2 lg:grid-cols-4">
          {site.skills.map((skill) => (
            <li
              key={skill}
              className="border-t border-[var(--line)] pt-4 text-base font-medium tracking-[-0.01em]"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
