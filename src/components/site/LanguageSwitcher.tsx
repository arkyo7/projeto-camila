import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const { lang, setLang, t } = useI18n();
  const base = tone === "light" ? "text-cream/60" : "text-muted-foreground";
  const active = tone === "light" ? "text-gold-light" : "text-navy";

  return (
    <div
      className={cn("flex items-center gap-1 text-xs tracking-[0.18em]", className)}
      role="group"
      aria-label={t.nav.language}
    >
      <button
        type="button"
        onClick={() => setLang("pt")}
        aria-pressed={lang === "pt"}
        className={cn(
          "px-1 py-1 transition-colors hover:text-gold",
          lang === "pt" ? cn(active, "font-semibold underline underline-offset-4 decoration-gold") : base,
        )}
      >
        PT
      </button>
      <span aria-hidden="true" className={cn(base, "opacity-50")}>
        |
      </span>
      <button
        type="button"
        onClick={() => setLang("it")}
        aria-pressed={lang === "it"}
        className={cn(
          "px-1 py-1 transition-colors hover:text-gold",
          lang === "it" ? cn(active, "font-semibold underline underline-offset-4 decoration-gold") : base,
        )}
      >
        IT
      </button>
    </div>
  );
}