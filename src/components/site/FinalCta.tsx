import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { useI18n } from "@/i18n";
import { whatsappLink } from "@/lib/whatsapp";

export function FinalCta() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal as="div">
          <h2 className="text-3xl leading-[1.15] text-cream sm:text-4xl lg:text-[2.9rem]">
            {t.hero.headline}
          </h2>
          <div aria-hidden="true" className="gold-rule mx-auto mt-6" />
        </Reveal>
        <Reveal as="div" delay={90}>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/70">
            {t.hero.subheadline}
          </p>
          <div className="mt-10 flex justify-center">
            <a
              href={whatsappLink(t.hero.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-motion inline-flex items-center justify-center gap-2 bg-gold px-7 py-3.5 text-sm font-medium text-navy hover:bg-gold-light"
            >
              {t.hero.ctaSecondary}
              <ArrowRight size={16} aria-hidden="true" className="btn-arrow" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
