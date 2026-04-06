import type { ReactNode } from "react";
import { contactContent } from "@/content/home-content";

export function ContactSection() {
  const iconByLabel: Record<string, ReactNode> = {
    Email: (
      <svg
        className="h-4 w-4 text-accent"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M4 6h16v12H4z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="m4 7 8 6 8-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    GitHub: (
      <svg
        className="h-4 w-4 text-accent"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.44 9.8 8.21 11.39.6.11.79-.26.79-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.49 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.11-3.17 0 0 1.01-.32 3.3 1.23a11.45 11.45 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.62-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.19.69.8.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
      </svg>
    ),
    LinkedIn: (
      <svg
        className="h-4 w-4 text-accent"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    ),
    Portfolio: (
      <svg
        className="h-4 w-4 text-accent"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 7h18v13H3z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M8 7V5.5A2.5 2.5 0 0 1 10.5 3h3A2.5 2.5 0 0 1 16 5.5V7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
    Location: (
      <svg
        className="h-4 w-4 text-accent"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 21s7-5.4 7-11a7 7 0 1 0-14 0c0 5.6 7 11 7 11Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  };

  return (
    <section
      id="contact"
      className="space-y-8 border-t border-white/10 pt-12 pb-16 scroll-mt-24"
    >
      <div className="space-y-4">
        <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
          {contactContent.headline}
        </h2>
        <p className="max-w-3xl text-muted md:text-base">{contactContent.description}</p>
        <p className="text-sm font-medium text-foreground/85">{contactContent.availability}</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {contactContent.cards.map((card) => {
          const content = (
            <div className="rounded-2xl border border-white/10 bg-surface/50 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
              <div className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-black/20">
                {iconByLabel[card.label]}
              </div>
              <p className="text-sm font-medium text-foreground">{card.label}</p>
              <p className="mt-1 text-sm text-muted">{card.value}</p>
            </div>
          );

          if (!card.href) {
            return <div key={card.label}>{content}</div>;
          }

          return (
            <a
              key={card.label}
              href={card.href}
              target={card.external ? "_blank" : undefined}
              rel={card.external ? "noopener noreferrer" : undefined}
              className="block"
            >
              {content}
            </a>
          );
        })}
      </div>
    </section>
  );
}
