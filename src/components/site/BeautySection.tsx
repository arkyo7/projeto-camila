import { MessageCircle } from "lucide-react";
import { BrandImage } from "./BrandImage";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { beautyCategories, beautyServices } from "@/data/siteContent";
import type { LocalizedText } from "@/data/types";
import { imageSizes } from "@/lib/images";
import { useI18n } from "@/i18n";
import { whatsappLink } from "@/lib/whatsapp";

export function BeautySection() {
  const { t, lang } = useI18n();
  const getText = (value: LocalizedText) => value[lang] ?? value.pt;

  return (
    <section id="beauty" className="border-y border-gold/25 bg-blush/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {/* Bloco institucional */}
        <div className="grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal className="mx-auto w-full max-w-sm lg:mx-0">
            <BrandImage
              src="/images/camila/camila-beauty-institucional.webp"
              alt={t.beauty.portraitAlt}
              width={1023}
              height={1278}
              sizes={imageSizes.twoCols}
              objectPosition="50% 30%"
              tone="blush"
              className="border border-nude/50"
            />
          </Reveal>

          <Reveal delay={90} className="min-w-0">
            <div className="mb-8 w-[180px] sm:w-[210px] lg:w-[240px]">
              <BrandImage
                src={siteConfig.logos.beauty || undefined}
                alt={t.beauty.logoAlt}
                width={640}
                height={640}
                sizes="(min-width: 1024px) 240px, (min-width: 640px) 210px, 180px"
                tone="cream"
                className="rounded-full border border-nude/50"
              />
            </div>
            <SectionHeading
              eyebrow={t.beauty.eyebrow}
              title={t.beauty.title}
              subtitle={t.beauty.subtitle}
            />
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {t.beauty.intro}
            </p>
          </Reveal>
        </div>

        {/* Procedimentos por categoria */}
        <Reveal className="mt-20">
          <h3 className="text-2xl leading-snug text-navy sm:text-3xl">
            {t.beauty.proceduresTitle}
          </h3>
          <div aria-hidden="true" className="gold-rule mt-5" />
        </Reveal>

        <ul className="mt-10 grid gap-6 lg:grid-cols-2">
          {beautyCategories.map((category, i) => (
            <Reveal as="li" key={category.id} delay={Math.min(i * 90, 500)} className="flex">
              <article className="flex w-full flex-col border border-nude/50 bg-background p-7 sm:p-8">
                <h4 className="text-lg leading-snug text-navy sm:text-xl">
                  {getText(category.name)}
                </h4>
                <div aria-hidden="true" className="gold-rule mt-3" />
                <ul className="mt-5 flex-1 space-y-3">
                  {category.procedures.map((procedure) => (
                    <li
                      key={procedure.id}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                      />
                      <span className="min-w-0">{getText(procedure.name)}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappLink(getText(category.whatsappMessage))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex w-fit items-center gap-2 border-b border-gold pb-1 text-sm font-medium text-navy transition-colors hover:text-gold"
                >
                  <MessageCircle size={15} aria-hidden="true" className="text-gold" />
                  {t.beauty.categoryCta}
                </a>
              </article>
            </Reveal>
          ))}
        </ul>

        {/* Galeria compacta */}
        <Reveal className="mt-20">
          <h3 className="text-xl leading-snug text-navy sm:text-2xl">{t.beauty.galleryTitle}</h3>
          <div aria-hidden="true" className="gold-rule mt-5" />
        </Reveal>

        <ul className="mt-8 grid gap-6 sm:grid-cols-2">
          {beautyServices.map((service, i) => (
            <Reveal as="li" key={service.id} delay={i * 90}>
              <BrandImage
                src={service.image}
                alt={getText(service.imageAlt)}
                width={800}
                height={640}
                sizes={imageSizes.twoCols}
                tone="blush"
                className="border border-nude/50"
              />
            </Reveal>
          ))}
        </ul>

        {/* Encerramento */}
        <div className="mt-16 flex flex-col items-start gap-6 border-t border-nude/50 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            {t.beauty.closingNote}
          </p>
          <a
            href={whatsappLink(t.beauty.closingMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-motion inline-flex w-fit shrink-0 items-center justify-center gap-2 bg-gold px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-navy hover:bg-gold-light"
          >
            <MessageCircle size={15} aria-hidden="true" className="text-navy" />
            {t.beauty.closingCta}
          </a>
        </div>
      </div>
    </section>
  );
}
