import { ArrowUpRight, BookOpen, Mic, Sparkles } from "lucide-react";
import { useState } from "react";
import { BrandImage } from "./BrandImage";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { siteConfig } from "@/config/siteConfig";
import { useI18n } from "@/i18n";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

/**
 * Destaques da trajetória: podcast, publicação na revista e o projeto
 * Voz Sem Fronteiras (apresentado apenas como projeto realizado).
 * Links e imagens ficam em `siteConfig.media` e `siteConfig.logos`.
 */
export function HighlightsSection() {
  const { t } = useI18n();
  const { podcast, magazine } = siteConfig.media;
  const [magazineOpen, setMagazineOpen] = useState(false);

  return (
    <section id="destaques" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.highlights.eyebrow}
          title={t.highlights.title}
          subtitle={t.highlights.subtitle}
        />

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          <Reveal as="li" className="flex">
            <article className="flex w-full flex-col border border-border bg-background">
              <BrandImage
                src={podcast.image || undefined}
                alt={t.highlights.podcast.imageAlt}
                width={720}
                height={405}
                tone="navy"
                className="border-b border-border"
              />
              <div className="flex flex-1 flex-col p-7">
                <p className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.24em] text-gold">
                  <Mic size={14} aria-hidden="true" />
                  {t.highlights.podcast.category}
                </p>
                <h3 className="mt-4 text-xl leading-snug text-navy">
                  {t.highlights.podcast.title}
                </h3>
                <div aria-hidden="true" className="gold-rule mt-4" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t.highlights.podcast.description}
                </p>
                {podcast.url ? (
                  <a
                    href={podcast.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center justify-center gap-2 bg-navy px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-navy-soft"
                  >
                    {t.highlights.podcast.cta}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </article>
          </Reveal>

          <Reveal as="li" delay={80} className="flex">
            <article className="flex w-full flex-col border border-border bg-background">
              <BrandImage
                src={magazine.image || undefined}
                alt={t.highlights.magazine.imageAlt}
                width={720}
                height={405}
                tone="cream"
                className="border-b border-border"
                imgClassName="object-contain bg-cream p-2"
              />
              <div className="flex flex-1 flex-col p-7">
                <p className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.24em] text-gold">
                  <BookOpen size={14} aria-hidden="true" />
                  {t.highlights.magazine.category}
                </p>
                <h3 className="mt-4 text-xl leading-snug text-navy">
                  {t.highlights.magazine.title}
                </h3>
                <div aria-hidden="true" className="gold-rule mt-4" />
                <p className="mt-4 text-sm text-navy">
                  {t.highlights.magazine.publication}
                  <span className="block text-sm italic text-muted-foreground">
                    “{t.highlights.magazine.article}”
                  </span>
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t.highlights.magazine.description}
                </p>
                {magazine.url ? (
                  <a
                    href={magazine.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex items-center justify-center gap-2 bg-navy px-6 py-3 text-sm font-medium text-cream transition-colors hover:bg-navy-soft"
                  >
                    {t.highlights.magazine.cta}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                ) : null}
              </div>
            </article>
          </Reveal>

          <Reveal as="li" delay={160} className="flex">
            <article className="flex w-full flex-col border border-border bg-background">
              <div className="flex h-[203px] items-center justify-center border-b border-border bg-navy p-6">
                {siteConfig.logos.voice ? (
                  <img
                    src={siteConfig.logos.voice}
                    alt={t.highlights.voice.imageAlt}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain"
                  />
                ) : (
                  <p
                    aria-hidden="true"
                    className="px-6 text-center font-serif text-2xl leading-snug text-gold"
                  >
                    Voz Sem Fronteiras
                  </p>
                )}
              </div>
              <div className="flex flex-1 flex-col p-7">
                <p className="flex items-center gap-2 text-[0.65rem] uppercase tracking-[0.24em] text-gold">
                  <Sparkles size={14} aria-hidden="true" />
                  {t.highlights.voice.category}
                </p>
                <h3 className="mt-4 text-xl leading-snug text-navy">{t.highlights.voice.title}</h3>
                <div aria-hidden="true" className="gold-rule mt-4" />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t.highlights.voice.description}
                </p>
                <span className="mt-7 self-start border border-border px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-muted-foreground">
                  {t.highlights.voice.badge}
                </span>
              </div>
            </article>
          </Reveal>
        </ul>

      </div>
    </section>
  );
}
