import { site } from "../data/site";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[min(100svh,920px)] overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(10,107,99,0.18)_0%,transparent_42%,rgba(13,27,34,0.08)_100%)]" />
        <div className="hero-orb-a absolute -right-[12%] top-[-8%] h-[70%] w-[58%] rounded-[40%_60%_55%_45%] bg-[radial-gradient(circle_at_35%_35%,#9ec9c2_0%,#6fa39b_38%,transparent_72%)] opacity-70 blur-[2px]" />
        <div className="hero-orb-b absolute bottom-[-18%] left-[-10%] h-[55%] w-[50%] rounded-full bg-[radial-gradient(circle_at_50%_40%,#8eb4c4_0%,transparent_70%)] opacity-55" />
        <svg
          className="absolute inset-x-0 bottom-0 h-[42%] w-full opacity-[0.22]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            className="text-[var(--ink)]"
            d="M0,224L80,208C160,192,320,160,480,165.3C640,171,800,213,960,224C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          />
        </svg>
      </div>

      <div className="container relative flex min-h-[min(100svh,920px)] flex-col justify-center pb-24 pt-16">
        <p className="reveal section-label mb-5">{site.location}</p>
        <h1 className="reveal reveal-delay-1 m-0 max-w-[14ch] font-[family-name:var(--font-display)] text-[clamp(3.2rem,12vw,6.4rem)] font-extrabold leading-[0.92] tracking-[-0.055em]">
          {site.name}
        </h1>
        <p className="reveal reveal-delay-2 mt-5 font-[family-name:var(--font-display)] text-[clamp(1.2rem,2.6vw,1.7rem)] font-semibold tracking-[-0.02em] text-[var(--accent)]">
          {site.title}
        </p>
        <p className="reveal reveal-delay-2 mt-4 max-w-xl text-lg text-[var(--ink-soft)]">
          {site.summary}
        </p>
        <div className="reveal reveal-delay-3 mt-9 flex flex-wrap gap-3">
          <a href={`mailto:${site.email}`} className="btn btn-primary">
            Start a conversation
          </a>
          <a href="#work" className="btn btn-ghost">
            View selected work
          </a>
        </div>
      </div>

    </section>
  );
}
