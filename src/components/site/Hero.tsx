import { ArrowRight } from "lucide-react";
import { BrandImage } from "./BrandImage";
import { useI18n } from "@/i18n";
import { whatsappLink } from "@/lib/whatsapp";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="inicio" className="relative overflow-hidden bg-navy">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(circle at 15% 10%, color-mix(in oklab, var(--gold) 12%, transparent), transparent 45%)",
        }}
      />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16 lg:pb-28 lg:pt-40">
        <div className="min-w-0">
          <p className="text-[0.65rem] font-medium uppercase leading-relaxed tracking-[0.24em] text-gold sm:text-xs">
            {t.hero.eyebrow}
          </p>
          <h1 className="mt-6 text-[2rem] leading-[1.12] text-cream sm:text-5xl lg:text-[3.4rem]">
            {t.hero.headline}
          </h1>
          <div aria-hidden="true" className="gold-rule mt-7" />
          <p className="mt-7 max-w-xl text-base leading-relaxed text-cream/70">
            {t.hero.subheadline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#solucoes"
              className="inline-flex items-center justify-center gap-2 bg-gold px-7 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-gold-light"
            >
              {t.hero.ctaPrimary}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a
              href={whatsappLink(t.paths.cards[1].message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-cream/25 px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:border-gold hover:text-gold"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>

          <a
            href="#beauty"
            className="mt-6 inline-block text-sm text-cream/55 underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold"
          >
            {t.hero.ctaTertiary}
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 hidden h-40 w-40 border-l border-t border-gold/50 sm:block"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-4 -right-4 hidden h-40 w-40 border-b border-r border-gold/50 sm:block"
          />
          <BrandImage
            src="/images/camila/camila-hero.webp"
            alt="Camila Maia, consultora e palestrante do mercado da beleza"
            width={860}
            height={1080}
            priority
            tone="navy"
            className="relative"
            imgClassName="!object-[center_20%] md:!object-[center_25%]"
          />
          <div className="relative mt-[-1px] border border-gold/25 bg-navy-soft px-6 py-5">
            <p className="font-serif text-xl text-cream">{t.hero.badgeName}</p>
            <p className="mt-1 text-sm leading-relaxed text-cream/60">
              {t.hero.badgeRole}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}