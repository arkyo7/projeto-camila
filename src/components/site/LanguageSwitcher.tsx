import { ChevronDown, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { languageOptions, useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({
  tone = "dark",
  className,
}: {
  tone?: "dark" | "light";
  className?: string;
}) {
  const { lang, setLang, t } = useI18n();
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const current = languageOptions.find((option) => option.code === lang) ?? languageOptions[0];

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (event: MouseEvent | TouchEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) setOpen(false);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("touchstart", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("touchstart", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const trigger =
    tone === "light"
      ? "border-cream/20 text-cream/80 hover:border-gold hover:text-gold"
      : "border-border text-muted-foreground hover:border-gold hover:text-navy";

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={`${t.nav.language}: ${current.label}`}
        className={cn(
          "inline-flex items-center gap-1.5 border px-2.5 py-2 text-xs tracking-[0.14em] transition-colors",
          trigger,
        )}
      >
        <Globe size={15} aria-hidden="true" />
        <span>{current.code2}</span>
        <ChevronDown
          size={13}
          aria-hidden="true"
          className={cn("transition-transform", open && "rotate-180")}
        />
      </button>

      {open ? (
        <ul
          role="listbox"
          aria-label={t.nav.languageOpen}
          className="absolute right-0 top-[calc(100%+0.5rem)] z-50 min-w-[11rem] border border-border bg-background py-1 shadow-lg"
        >
          {languageOptions.map((option) => (
            <li key={option.code} role="none">
              <button
                type="button"
                role="option"
                aria-selected={option.code === lang}
                onClick={() => {
                  setLang(option.code);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center justify-between gap-4 px-4 py-2.5 text-left text-sm transition-colors hover:bg-cream",
                  option.code === lang ? "text-navy font-medium" : "text-muted-foreground",
                )}
              >
                <span>{option.label}</span>
                <span className="text-[0.65rem] tracking-[0.18em] text-gold">{option.code2}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}