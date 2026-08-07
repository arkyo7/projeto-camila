import { BrandImage } from "./BrandImage";
import { JourneyTimeline } from "./JourneyTimeline";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { imageSizes } from "@/lib/images";
import { useI18n } from "@/i18n";

export function AboutSection() {
  const { t } = useI18n();

  return (
    <section id="idealizadora" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
        <Reveal className="relative">
          <div
            aria-hidden="true"
            className="absolute -bottom-5 -left-5 hidden h-32 w-32 border-b border-l border-gold sm:block"
          />
          <BrandImage
            src="/images/camila/camila-sobre.webp"
            alt={t.about.photoAlt}
            width={800}
            height={960}
            sizes={imageSizes.twoCols}
            tone="cream"
            className="relative border border-gold/20"
            objectPosition="center 55%"
            imgClassName="md:!object-[center_50%]"
          />
        </Reveal>

        <Reveal delay={100} className="min-w-0">
          <SectionHeading eyebrow={t.about.eyebrow} title={t.about.title} />
          {t.about.paragraphs.map((p) => (
            <p key={p} className="mt-5 text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
          <blockquote className="mt-9 border-l-2 border-gold pl-6 text-xl leading-relaxed text-navy sm:text-2xl">
            {t.about.quote}
          </blockquote>
        </Reveal>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-8 lg:mt-24">
        <Reveal>
          <SectionHeading eyebrow={t.about.timeline.eyebrow} title={t.about.timeline.title} />
        </Reveal>
        <JourneyTimeline
          className="mt-12"
          ariaLabel={t.about.timeline.title}
          items={t.about.timeline.items}
        />
      </div>
    </section>
  );
}
