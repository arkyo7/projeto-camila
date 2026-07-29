import { siteConfig } from "@/config/siteConfig";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

export function BeautyHours({ tone = "light" }: { tone?: "light" | "dark" }) {
  const { t } = useI18n();

  return (
    <ul className="space-y-2 text-sm">
      {siteConfig.beautyHours.map((entry) => (
        <li
          key={entry.day}
          className={cn(
            "flex items-baseline justify-between gap-4 border-b pb-2",
            tone === "dark"
              ? "border-cream/10 text-cream/70"
              : "border-border text-muted-foreground",
          )}
        >
          <span className="min-w-0 truncate">{t.beauty.days[entry.day]}</span>
          <span
            className={cn(
              "shrink-0 tabular-nums",
              tone === "dark" ? "text-cream" : "text-navy",
              !entry.from && "opacity-60",
            )}
          >
            {entry.from ? `${entry.from} – ${entry.to}` : t.beauty.closed}
          </span>
        </li>
      ))}
    </ul>
  );
}
