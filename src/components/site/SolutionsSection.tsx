import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useI18n } from "@/i18n";
import { whatsappLink } from "@/lib/whatsapp";

export function SolutionsSection() {
  const { t } = useI18n();

  return (
    <section id="solucoes" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.solutions.eyebrow}
          title={t.solutions.title}
          subtitle={t.solutions.subtitle}
        />

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {t.solutions.items.map((item, i) => (
            <Reveal as="li" key={item.title} delay={i * 90} className="flex">
              <article className="flex w-full flex-col border border-border bg-card p-8 transition-colors hover:border-gold">
                <span className="font-serif text-3xl text-gold/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-2xl leading-snug text-navy">{item.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
                <p className="mt-7 text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                  {t.solutions.themesLabel}
                </p>
                <ul className="mt-3 flex-1 space-y-2">
                  {item.themes.map((theme) => (
                    <li key={theme} className="flex gap-2 text-sm text-navy/80">
                      <Check
                        size={15}
                        aria-hidden="true"
                        className="mt-1 shrink-0 text-gold"
                      />
                      <span className="min-w-0">{theme}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(item.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 border-b border-gold pb-1 text-sm font-medium text-navy transition-colors hover:text-gold"
                >
                  {item.button}
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </article>
            </Reveal>
          ))}
        </ul>

        <p className="mt-10 max-w-2xl text-xs leading-relaxed text-muted-foreground">
          {t.solutions.note}
        </p>
      </div>
    </section>
  );
}