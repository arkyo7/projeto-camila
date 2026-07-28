import { Clock, Instagram, MapPin } from "lucide-react";
import { BeautyHours } from "./BeautyHours";
import { BrandImage } from "./BrandImage";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { siteConfig } from "@/config/siteConfig";
import { beautyGallery } from "@/data/siteContent";
import { useI18n } from "@/i18n";
import { whatsappLink } from "@/lib/whatsapp";

export function BeautySection() {
  const { t } = useI18n();
  const location = [siteConfig.location.city, siteConfig.location.country]
    .filter(Boolean)
    .join(", ");

  return (
    <section id="beauty" className="bg-blush/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.beauty.eyebrow}
          title={t.beauty.title}
          subtitle={t.beauty.subtitle}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="min-w-0">
            <ul className="grid gap-4 sm:grid-cols-3">
              {t.beauty.categories.map((category, i) => (
                <Reveal as="li" key={category.title} delay={i * 70}>
                  <article className="h-full border border-nude/50 bg-background p-6">
                    <h3 className="text-lg leading-snug text-navy">{category.title}</h3>
                    <div aria-hidden="true" className="gold-rule mt-3" />
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {category.description}
                    </p>
                  </article>
                </Reveal>
              ))}
            </ul>

            <div className="mt-6 grid grid-cols-3 gap-4">
              {beautyGallery.map((image, i) => (
                <Reveal key={image.id} delay={i * 60}>
                  <BrandImage
                    src={image.src}
                    alt={image.alt}
                    width={480}
                    height={560}
                    tone="blush"
                    className="border border-nude/40"
                  />
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal delay={120} className="min-w-0">
            <div className="border border-nude/50 bg-background p-7">
              <h3 className="flex items-center gap-2 text-lg text-navy">
                <Clock size={17} aria-hidden="true" className="text-gold" />
                {t.beauty.hoursTitle}
              </h3>
              <div className="mt-5">
                <BeautyHours />
              </div>

              <h3 className="mt-8 flex items-center gap-2 text-lg text-navy">
                <MapPin size={17} aria-hidden="true" className="text-gold" />
                {t.beauty.locationTitle}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{location}</p>

              <a
                href={whatsappLink(t.beauty.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-full items-center justify-center bg-navy px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-navy-soft"
              >
                {t.beauty.cta}
              </a>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {t.beauty.instagramText}
              </p>
              <a
                href={siteConfig.socials.beauty.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.contact.socialAria.replace("{brand}", "Camila Maia Beauty")}
                className="mt-3 inline-flex items-center gap-2 border-b border-nude pb-1 text-sm font-medium text-navy transition-colors hover:text-nude"
              >
                <Instagram size={15} aria-hidden="true" className="text-gold" />
                {siteConfig.socials.beauty.handle}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
