import { ArrowUpRight, BookOpen, Mic } from "lucide-react";
import { BrandImage } from "./BrandImage";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { siteConfig } from "@/config/siteConfig";
import { imageSizes } from "@/lib/images";
import { useI18n } from "@/i18n";

/**
 * Destaques da trajetória: podcast e publicação na revista.
 */
export function HighlightsSection() {
  const { t } = useI18n();
  const { podcast, magazine } = siteConfig.media;

  return (
    <section id="destaques" className="bg-cream py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading
            eyebrow={t.highlights.eyebrow}
            title={t.highlights.title}
            subtitle={t.highlights.subtitle}
          />
        </Reveal>

        <ul className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal as="li" className="flex">
            <article className="interactive-card flex w-full flex-col border border-border bg-background">
              <BrandImage
                src="/images/camila/capa-podcast-camila-maia-web.webp"
                alt={t.highlights.podcast.imageAlt}
                width={720}
                height={405}
                sizes={imageSizes.gallery}
                tone="navy"
                className="card-media border-b border-border"
                imgClassName="object-cover object-center"
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
                    className="btn-motion mt-7 inline-flex items-center justify-center gap-2 bg-navy px-6 py-3 text-sm font-medium text-cream hover:bg-navy-soft"
                  >
                    {t.highlights.podcast.cta}
                    <ArrowUpRight size={15} aria-hidden="true" className="btn-arrow" />
                  </a>
                ) : null}
              </div>
            </article>
          </Reveal>

          <Reveal as="li" delay={90} className="flex">
            <article className="interactive-card flex w-full flex-col border border-border bg-background">
              <BrandImage
                src={magazine.image || undefined}
                alt={t.highlights.magazine.imageAlt}
                width={720}
                height={405}
                sizes={imageSizes.gallery}
                tone="cream"
                className="card-media border-b border-border"
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
                    className="btn-motion mt-7 inline-flex items-center justify-center gap-2 bg-navy px-6 py-3 text-sm font-medium text-cream hover:bg-navy-soft"
                  >
                    {t.highlights.magazine.cta}
                    <ArrowUpRight size={15} aria-hidden="true" className="btn-arrow" />
                  </a>
                ) : null}
              </div>
            </article>
          </Reveal>
        </ul>
      </div>
    </section>
  );
}
