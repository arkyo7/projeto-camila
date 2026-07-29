import { MapPin, MessageCircle } from "lucide-react";
import { BeautyHours } from "./BeautyHours";
import { BrandImage } from "./BrandImage";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { siteConfig } from "@/config/siteConfig";
import { beautyServices } from "@/data/siteContent";
import type { LocalizedText } from "@/data/types";
import { useI18n } from "@/i18n";
import { whatsappLink } from "@/lib/whatsapp";

export function BeautySection() {
  const { t, lang } = useI18n();
  const getText = (value: LocalizedText) => value[lang] ?? value.pt;
  const hasAddress = Boolean(siteConfig.location.city && siteConfig.location.country);
  const location = [siteConfig.location.city, siteConfig.location.country]
    .filter(Boolean)
    .join(", ");

  return (
    <section id="beauty" className="border-y border-gold/25 bg-blush/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.beauty.eyebrow}
          title={t.beauty.title}
          subtitle={t.beauty.subtitle}
        />

        <p className="mt-8 max-w-3xl text-base leading-relaxed text-muted-foreground">
          {t.beauty.intro}
        </p>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {beautyServices.map((service, i) => {
            const duration = service.duration ? getText(service.duration) : "";
            return (
              <Reveal as="li" key={service.id} delay={i * 80} className="flex">
                <article className="flex w-full flex-col border border-nude/50 bg-background transition-colors hover:border-gold/60">
                  <BrandImage
                    src={service.image}
                    alt={getText(service.imageAlt)}
                    width={800}
                    height={1000}
                    tone="blush"
                    className="border-b border-nude/40"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-xl leading-snug text-navy">{getText(service.name)}</h3>
                    <div aria-hidden="true" className="gold-rule mt-3" />
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {getText(service.description)}
                    </p>

                    {duration ? (
                      <p className="mt-4 text-sm text-muted-foreground">
                        <span className="text-navy">{t.beauty.durationLabel}:</span> {duration}
                      </p>
                    ) : null}
                    {service.price ? (
                      <p className="mt-1 text-sm text-muted-foreground">
                        <span className="text-navy">{t.beauty.priceLabel}:</span> {service.price}
                      </p>
                    ) : null}

                    <a
                      href={whatsappLink(getText(service.whatsappMessage))}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center justify-center gap-2 border border-navy/20 px-6 py-3.5 text-sm font-medium text-navy transition-colors hover:border-navy"
                    >
                      <MessageCircle size={15} aria-hidden="true" className="text-gold" />
                      {t.beauty.serviceCta}
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>

        <div className="mt-14 border border-nude/50 bg-background p-7 sm:p-9">
          <h3 className="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
            {t.beauty.differentialsTitle}
          </h3>
          <ul className="mt-5 grid gap-3 md:grid-cols-3">
            {t.beauty.differentials.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                <span
                  aria-hidden="true"
                  className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-gold"
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-4 border-t border-nude/50 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex items-start gap-2 text-sm leading-relaxed text-muted-foreground">
              <MapPin size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-gold" />
              {hasAddress ? location : t.beauty.locationNote}
            </p>
            <a
              href={whatsappLink(t.beauty.scheduleMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center justify-center gap-2 bg-gold px-6 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-gold-light"
            >
              {t.beauty.scheduleCta}
            </a>
          </div>

          {siteConfig.showBeautyHours ? (
            <div className="mt-8 border-t border-nude/50 pt-7">
              <h3 className="text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
                {t.beauty.hoursTitle}
              </h3>
              <div className="mt-5 max-w-md">
                <BeautyHours />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
