import { ArrowRight } from "lucide-react";
import { BrandImage } from "./BrandImage";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { bsfGallery } from "@/data/siteContent";
import { useI18n } from "@/i18n";
import { whatsappLink } from "@/lib/whatsapp";

export function BsfSection() {
  const { t } = useI18n();

  return (
    <section id="beleza-sem-fronteiras" className="relative overflow-hidden bg-navy py-20 lg:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 0%, color-mix(in oklab, var(--gold) 14%, transparent), transparent 50%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.bsf.eyebrow}
          title={t.bsf.title}
          tone="light"
        />
        <p className="mt-8 max-w-3xl font-serif text-2xl leading-snug text-gold-light sm:text-3xl">
          {t.bsf.headline}
        </p>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-cream/70">
          {t.bsf.text}
        </p>

        <ul className="mt-12 grid gap-px border border-cream/10 sm:grid-cols-2 lg:grid-cols-4">
          {t.bsf.pillars.map((pillar, i) => (
            <Reveal
              as="li"
              key={pillar.title}
              delay={i * 70}
              className="border-b border-cream/10 p-7 last:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:border-b-0 lg:border-r lg:[&:nth-child(2n)]:border-r lg:last:border-r-0"
            >
              <h3 className="text-xl text-cream">{pillar.title}</h3>
              <div aria-hidden="true" className="gold-rule mt-3" />
              <p className="mt-4 text-sm leading-relaxed text-cream/60">
                {pillar.description}
              </p>
            </Reveal>
          ))}
        </ul>

        <div
          className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-3"
          aria-label={t.bsf.galleryLabel}
          role="group"
        >
          {bsfGallery.map((image, i) => (
            <Reveal key={image.id} delay={i * 60}>
              <BrandImage
                src={image.src}
                alt={image.alt}
                width={640}
                height={480}
                tone="navy"
                className="border border-cream/10"
              />
            </Reveal>
          ))}
        </div>

        <a
          href={whatsappLink(t.bsf.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center justify-center gap-2 bg-gold px-7 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-gold-light"
        >
          {t.bsf.cta}
          <ArrowRight size={16} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}