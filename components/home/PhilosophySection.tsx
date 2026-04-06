import { philosophyItems } from "@/content/home-content";

export function PhilosophySection() {
  return (
    <section id="approach" className="space-y-16 scroll-mt-24">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
          Engineering Approach
        </h2>
        <p className="text-muted max-w-2xl">
          A structured approach from problem framing to production infrastructure.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 md:gap-6 md:items-stretch">
        {philosophyItems.map((item) => (
          <article
            key={item.number}
            className="group flex flex-col rounded-2xl border border-white/10 bg-surface/50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-lg hover:shadow-black/20 md:p-8"
          >
            <div className="flex flex-col space-y-6 flex-1">
              <div className="space-y-4">
                <div className="space-y-2">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                    {item.number} — {item.label}
                  </p>
                  <h3 className="text-lg font-medium tracking-tight md:text-xl">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm leading-7 text-muted md:text-base">
                  {item.description}
                </p>
              </div>

              <ul className="space-y-2">
                {item.points.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-sm text-muted md:text-base"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
