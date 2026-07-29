import { BrandImage } from "./BrandImage";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { testimonials } from "@/data/siteContent";
import { useI18n } from "@/i18n";

export function TestimonialsSection() {
  const { t } = useI18n();

  // Sem depoimentos reais cadastrados, a seção não é exibida.
  if (testimonials.length === 0) return null;

  return (
    <section id="depoimentos" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow={t.testimonials.eyebrow} title={t.testimonials.title} />
        </Reveal>
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal as="li" key={item.id} delay={Math.min(i * 90, 540)}>
              <figure className="interactive-card flex h-full flex-col border border-border bg-card p-7">
                <blockquote className="flex-1 text-base leading-relaxed text-navy">
                  “{item.quote}”
                </blockquote>
                {item.result ? <p className="mt-5 text-sm text-gold">{item.result}</p> : null}
                <figcaption className="mt-6 flex items-center gap-4 border-t border-border pt-5">
                  <BrandImage
                    src={item.photo}
                    alt={item.name}
                    width={96}
                    height={96}
                    tone="cream"
                    className="h-12 w-12 shrink-0 rounded-full"
                  />
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium text-navy">
                      {item.name}
                    </span>
                    <span className="block truncate text-xs text-muted-foreground">
                      {item.role} — {item.location}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
