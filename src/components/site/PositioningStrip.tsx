import { Eye, Globe2, HeartHandshake, MessageCircle, Sparkles, WandSparkles } from "lucide-react";
import { useI18n } from "@/i18n";

const icons = [HeartHandshake, Eye, WandSparkles, Globe2, MessageCircle];

export function PositioningStrip() {
  const { t } = useI18n();

  return (
    <section className="border-y border-gold/20 bg-cream">
      <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-8 sm:px-8 md:grid-cols-5 md:gap-6">
        {t.pillars.items.map((item, i) => {
          const Icon = icons[i] ?? Sparkles;
          return (
            <li
              key={item}
              className="flex min-w-0 items-center gap-3 py-3 md:flex-col md:items-start md:gap-3"
            >
              <Icon size={20} strokeWidth={1.4} aria-hidden="true" className="shrink-0 text-gold" />
              <span className="min-w-0 text-sm leading-snug text-navy">{item}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
