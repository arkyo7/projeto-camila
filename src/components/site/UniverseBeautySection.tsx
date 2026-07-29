import { ArrowUpRight, Instagram, MapPin } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { siteConfig } from "@/config/siteConfig";
import { universeBeautyPartnershipText } from "@/data/siteContent";
import { useI18n } from "@/i18n";
import { whatsappLink } from "@/lib/whatsapp";

export function UniverseBeautySection() {
  const { t } = useI18n();
  const ub = siteConfig.universeBeauty;
  const location = t.universe.location;
  const role = t.universe.role;

  return (
    <section id="universe-beauty" className="border-t border-gold/20 bg-cream py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div aria-hidden="true" className="mx-auto mb-12 h-px w-16 bg-gold/50" />
        <div className="grid gap-10 border border-gold/25 bg-background p-8 sm:p-12 lg:grid-cols-[0.45fr_0.55fr] lg:items-center lg:gap-16">
          <Reveal className="min-w-0">
            <div className="flex aspect-[4/3] w-full items-center justify-center border border-gold/20 bg-navy">
              {ub.logo ? (
                <img
                  src={ub.logo}
                  alt={t.universe.logoAlt}
                  loading="lazy"
                  decoding="async"
                  className="max-h-[60%] max-w-[60%] object-contain"
                />
              ) : (
                <div className="text-center">
                  <p
                    aria-hidden="true"
                    className="font-serif text-6xl tracking-[0.12em] text-gold sm:text-7xl"
                  >
                    UB
                  </p>
                  <p className="mt-4 text-[0.62rem] uppercase tracking-[0.28em] text-cream/60">
                    {ub.name}
                  </p>
                </div>
              )}
            </div>
          </Reveal>

          <Reveal delay={100} className="min-w-0">
            <SectionHeading eyebrow={t.universe.eyebrow} title={t.universe.title} />

            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t.universe.text}
            </p>

            <p className="mt-5 flex items-center gap-2 text-sm text-navy">
              <MapPin size={16} aria-hidden="true" className="text-gold" />
              {location}
              <span aria-hidden="true" className="text-muted-foreground">
                •
              </span>
              <span className="text-muted-foreground">{role}</span>
            </p>

            {universeBeautyPartnershipText ? (
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {universeBeautyPartnershipText}
              </p>
            ) : null}

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={ub.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-motion inline-flex items-center gap-2 bg-navy px-6 py-3.5 text-sm font-medium text-cream hover:bg-navy-soft"
              >
                <Instagram size={16} aria-hidden="true" />
                {t.universe.primaryCta}
              </a>
              <a
                href={whatsappLink(t.universe.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-motion btn-fill-gold inline-flex items-center gap-2 border border-gold bg-transparent px-6 py-3.5 text-sm font-medium text-navy"
              >
                {t.universe.secondaryCta}
                <ArrowUpRight size={15} aria-hidden="true" className="btn-arrow" />
              </a>
              {ub.shopUrl ? (
                <a
                  href={ub.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-b border-gold pb-1 text-sm font-medium text-navy transition-colors hover:text-gold"
                >
                  {t.universe.shopCta}
                </a>
              ) : null}
              {ub.catalogUrl ? (
                <a
                  href={ub.catalogUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-b border-gold pb-1 text-sm font-medium text-navy transition-colors hover:text-gold"
                >
                  {t.universe.catalogCta}
                </a>
              ) : null}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
