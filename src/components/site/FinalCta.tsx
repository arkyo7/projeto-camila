import { ArrowRight } from "lucide-react";
import { Monogram } from "./Monogram";
import { useI18n } from "@/i18n";
import { whatsappLink } from "@/lib/whatsapp";

export function FinalCta() {
  const { t } = useI18n();

  return (
    <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
      <div className="pointer-events-none absolute -right-10 top-1/2 -translate-y-1/2">
        <Monogram className="h-72 w-72 text-gold/10" />
      </div>
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <h2 className="text-3xl leading-[1.15] text-cream sm:text-4xl lg:text-[2.9rem]">
          {t.finalCta.headline}
        </h2>
        <div aria-hidden="true" className="gold-rule mx-auto mt-6" />
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-cream/70">
          {t.finalCta.text}
        </p>
        <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink(t.float.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gold px-7 py-3.5 text-sm font-medium text-navy transition-colors hover:bg-gold-light"
          >
            {t.finalCta.primary}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a
            href="#beleza-sem-fronteiras"
            className="inline-flex items-center justify-center border border-cream/25 px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:border-gold hover:text-gold"
          >
            {t.finalCta.secondary}
          </a>
        </div>
      </div>
    </section>
  );
}