import { ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { sponsors } from "@/data/siteContent";
import { useI18n } from "@/i18n";

/**
 * Patrocinadores e parceiros do Beleza Sem Fronteiras.
 * A seção só aparece quando existe pelo menos um registro em `sponsors`.
 */
export function SponsorsSection() {
  const { t } = useI18n();

  if (sponsors.length === 0) return null;

  return (
    <section id="patrocinadores" className="bg-background py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.sponsors.eyebrow}
          title={t.sponsors.title}
          subtitle={t.sponsors.subtitle}
        />

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {sponsors.map((sponsor, i) => {
            const typeLabel =
              sponsor.type === "sponsor" ? t.sponsors.types.sponsor : t.sponsors.types.partner;

            const content = (
              <>
                <div className="flex h-24 items-center justify-center bg-cream px-4">
                  {sponsor.logo ? (
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      loading="lazy"
                      decoding="async"
                      className="max-h-16 max-w-full object-contain"
                    />
                  ) : (
                    <span className="font-serif text-xl text-navy">{sponsor.name}</span>
                  )}
                </div>
                <div className="flex items-start justify-between gap-3 p-5">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-medium text-navy">{sponsor.name}</p>
                    <p className="mt-1 text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                      {sponsor.category ? `${typeLabel} • ${sponsor.category}` : typeLabel}
                    </p>
                  </div>
                  {sponsor.url ? (
                    <ArrowUpRight size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-gold" />
                  ) : null}
                </div>
              </>
            );

            return (
              <Reveal as="li" key={sponsor.id} delay={i * 60}>
                {sponsor.url ? (
                  <a
                    href={sponsor.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.sponsors.linkAria.replace("{brand}", sponsor.name)}
                    className="block h-full border border-border transition-colors hover:border-gold"
                  >
                    {content}
                  </a>
                ) : (
                  <div className="h-full border border-border">{content}</div>
                )}
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}