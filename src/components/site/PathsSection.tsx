import {
  ArrowUpRight,
  CalendarHeart,
  Compass,
  Mic2,
  Sparkles,
  Users,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useI18n } from "@/i18n";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const cardIcons = [Compass, Mic2, Users, CalendarHeart, Sparkles];

export function PathsSection() {
  const { t } = useI18n();

  return (
    <section id="caminhos" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          title={t.paths.title}
          subtitle={t.paths.subtitle}
          align="center"
        />

        <ul className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {t.paths.cards.map((card, i) => {
            const Icon = cardIcons[i] ?? Compass;
            const isBeauty = i === 3;
            const href = card.href || whatsappLink(card.message);
            return (
              <Reveal as="li" key={card.title} delay={i * 80} className="flex">
                <article
                  className={cn(
                    "group flex w-full flex-col border p-7 transition-all duration-300 hover:-translate-y-1",
                    isBeauty
                      ? "border-nude/50 bg-blush/35 hover:border-nude"
                      : "border-border bg-card hover:border-gold",
                  )}
                >
                  <Icon
                    size={24}
                    strokeWidth={1.3}
                    aria-hidden="true"
                    className={isBeauty ? "text-nude" : "text-gold"}
                  />
                  <p className="mt-6 text-[0.65rem] uppercase tracking-[0.22em] text-muted-foreground">
                    {card.eyebrow}
                  </p>
                  <h3 className="mt-2 text-xl leading-snug text-navy">
                    {card.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "mt-7 inline-flex items-center gap-2 border-b pb-1 text-sm font-medium transition-colors",
                      isBeauty
                        ? "border-nude text-navy hover:text-nude"
                        : "border-gold text-navy hover:text-gold",
                    )}
                  >
                    {card.button}
                    <ArrowUpRight size={15} aria-hidden="true" />
                  </a>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}