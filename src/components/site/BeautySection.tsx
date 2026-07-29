import { MapPin, MessageCircle } from "lucide-react";
import { BrandImage } from "./BrandImage";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { siteConfig } from "@/config/siteConfig";
import { beautyServices } from "@/data/siteContent";
import type { LocalizedText } from "@/data/types";
import { imageSizes } from "@/lib/images";
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
        <Reveal>
          <SectionHeading
            eyebrow={t.beauty.eyebrow}
            title={t.beauty.title}
            subtitle={t.beauty.subtitle}
          />
        </Reveal>

        <Reveal delay={90} className="mt-8 max-w-3xl">
          <p className="text-base leading-relaxed text-muted-foreground">{t.beauty.intro}</p>
        </Reveal>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2">
          {beautyServices.map((service, i) => {
            const duration = service.duration ? getText(service.duration) : "";
            return (
              <Reveal as="li" key={service.id} delay={i * 90} className="flex">
                <article className="interactive-card flex w-full flex-col border border-nude/50 bg-background">
                  <BrandImage
                    src={service.image}
                    alt={getText(service.imageAlt)}
                    width={800}
                    height={1000}
                    sizes={imageSizes.twoCols}
                    tone="blush"
                    className="card-media border-b border-nude/40"
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
                      className="btn-motion mt-7 inline-flex items-center justify-center gap-2 bg-gold px-6 py-4 text-sm font-medium uppercase tracking-[0.14em] text-navy hover:bg-gold-light"
                    >
                      <MessageCircle size={15} aria-hidden="true" className="text-navy" />
                      {t.beauty.serviceCta}
                    </a>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>

        <div className="mt-16 border border-gold/30 bg-background p-8 sm:p-12">
          <Reveal>
            <h3 className="max-w-2xl text-2xl leading-snug text-navy sm:text-3xl">
              {t.beauty.differentialsTitle}
            </h3>
            <div aria-hidden="true" className="gold-rule mt-5" />
          </Reveal>

          <ul className="mt-10 grid gap-8 md:grid-cols-3">
            {t.beauty.differentials.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={i * 90}
                className="border-t border-gold/30 pt-5"
              >
                <h4 className="text-base text-navy">{item.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </Reveal>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-5 border-t border-nude/50 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex max-w-xl items-start gap-2 text-sm leading-relaxed text-muted-foreground">
              <MapPin size={16} aria-hidden="true" className="mt-0.5 shrink-0 text-gold" />
              {hasAddress ? location : t.beauty.locationNote}
            </p>
            <a
              href={whatsappLink(t.beauty.scheduleMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-motion inline-flex w-fit shrink-0 items-center justify-center gap-2 bg-gold px-7 py-3.5 text-sm font-medium uppercase tracking-[0.14em] text-navy hover:bg-gold-light"
            >
              <MessageCircle size={15} aria-hidden="true" className="text-navy" />
              {t.beauty.scheduleCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
