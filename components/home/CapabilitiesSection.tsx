import {
  engineeringCapabilitySections,
  techStackItems,
} from "@/content/home-content";

export function CapabilitiesSection() {
  const marqueeItems = [...techStackItems, ...techStackItems];

  return (
    <section id="capabilities" className="space-y-12 scroll-mt-24">
      <div className="space-y-3">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Systems & Engineering
        </h2>
        <p className="max-w-3xl text-muted">
          I design and build production systems where architecture, reliability,
          and performance matter as much as features.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-medium tracking-tight md:text-2xl">Tech Stack</h3>
        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-surface/40 py-3">
          <div className="tech-marquee-track flex min-w-max items-center gap-3 px-4">
            {marqueeItems.map((item, idx) => (
              <span
                key={`${item}-${idx}`}
                className="inline-flex items-center rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-muted opacity-80 transition-opacity hover:opacity-100 md:text-sm"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {engineeringCapabilitySections.map((section) => (
          <article
            key={section.title}
            className="rounded-2xl border border-white/10 bg-surface/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-lg hover:shadow-black/20 md:p-7"
          >
            <h3 className="text-xl font-medium tracking-tight">{section.title}</h3>
            <ul className="mt-5 space-y-2.5">
              <li className="flex items-start gap-3 text-muted">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted/70" />
                <span className="text-sm leading-6 md:text-base">{section.intro}</span>
              </li>
              {section.points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-muted">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted/70" />
                  <span className="text-sm leading-6 md:text-base">{point}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
