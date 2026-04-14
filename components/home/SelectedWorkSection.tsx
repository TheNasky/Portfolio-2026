import Image from "next/image";
import { selectedWorkItems } from "@/content/home-content";

export function SelectedWorkSection() {
  return (
    <section id="selected-work" className="scroll-mt-[200px] md:scroll-mt-[240px] pt-32 md:pt-40">
      <div className="space-y-3 mb-16 md:mb-20">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          Selected Work
        </h2>
        <p className="text-muted max-w-2xl">
          A selection of products I've designed and built end-to-end.
        </p>
      </div>

      <div className="space-y-32">
        {selectedWorkItems.map((project, index) => {
          const isEven = index % 2 === 0;
          const textOrder = isEven ? "md:order-1" : "md:order-2";
          const visualOrder = isEven ? "md:order-2" : "md:order-1";

          return (
            <article
              key={project.title}
              className="grid gap-12 md:grid-cols-12 md:items-center"
            >
              <div className={`space-y-6 ${textOrder} md:col-span-6`}>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">
                    {project.title}, {project.architecturalDescriptor}
                  </h3>
                  <p className="text-base leading-7 text-muted md:text-lg">
                    {project.description}
                  </p>
                </div>

                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-muted md:text-base"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-muted" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {project.authoritySignal && (
                  <p className="text-sm font-medium text-foreground/80">
                    {project.authoritySignal}
                  </p>
                )}

                <div className="flex items-center gap-5">
                  <a
                    href={project.githubLink ?? "#"}
                    target={
                      project.githubLink?.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      project.githubLink?.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
                  >
                    GitHub
                    <span className="text-xs">→</span>
                  </a>
                  {project.deployLink ? (
                    <a
                      href={project.deployLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
                    >
                      Deploy
                      <span className="text-xs">→</span>
                    </a>
                  ) : null}
                </div>
              </div>

              <div
                className={`${visualOrder} md:col-span-6`}
              >
                <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-[#0f141a]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`${project.title} preview`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center text-muted/30">
                      <span className="text-sm">Visual placeholder</span>
                    </div>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
