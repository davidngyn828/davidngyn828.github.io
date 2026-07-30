import { site } from "../data/site";

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container overflow-hidden rounded-sm bg-[var(--ink)] px-6 py-14 text-[#eef4f6] sm:px-10 md:px-14 md:py-16">
        <p className="mb-3 text-xs font-bold tracking-[0.16em] uppercase text-[#8fd0c6]">
          Contact
        </p>
        <h2 className="m-0 max-w-[16ch] font-[family-name:var(--font-display)] text-[clamp(2rem,5vw,3.4rem)] font-bold leading-[1.05] tracking-[-0.04em]">
          Let&apos;s build something clients remember.
        </h2>
        <p className="mt-4 max-w-xl text-base text-[#b7c5cb] sm:text-lg">
          Open to full-time roles, contract work, and serious product
          collaborations. Reach out and I&apos;ll get back quickly.
        </p>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="m-0 text-xs font-semibold tracking-[0.12em] uppercase text-[#7f939c]">
              Email
            </p>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 inline-block break-all text-[0.95rem] font-medium underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
          </div>
          <div>
            <p className="m-0 text-xs font-semibold tracking-[0.12em] uppercase text-[#7f939c]">
              Phone
            </p>
            <a
              href={`tel:+1${site.phone}`}
              className="mt-2 inline-block text-[0.95rem] font-medium underline-offset-4 hover:underline"
            >
              {site.phoneDisplay}
            </a>
          </div>
          <div>
            <p className="m-0 text-xs font-semibold tracking-[0.12em] uppercase text-[#7f939c]">
              LinkedIn
            </p>
            <a
              href={site.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-[0.95rem] font-medium underline-offset-4 hover:underline"
            >
              /david-nguyen
            </a>
          </div>
          <div>
            <p className="m-0 text-xs font-semibold tracking-[0.12em] uppercase text-[#7f939c]">
              GitHub
            </p>
            <a
              href={site.links.github}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-[0.95rem] font-medium underline-offset-4 hover:underline"
            >
              @daxidngyn
            </a>
          </div>
        </div>

        <div className="mt-10">
          <a
            href={`mailto:${site.email}?subject=Project%20inquiry`}
            className="btn bg-[#eef4f6] text-[var(--ink)] hover:bg-[#8fd0c6]"
          >
            Email David
          </a>
        </div>
      </div>
    </section>
  );
}
