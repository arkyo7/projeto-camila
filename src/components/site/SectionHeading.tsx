import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  tone = "dark",
  id,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
  id?: string;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      {eyebrow ? (
        <p
          className={cn(
            "text-[0.7rem] font-medium uppercase tracking-[0.28em]",
            tone === "light" ? "text-gold-light" : "text-gold",
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        id={id}
        className={cn(
          "mt-3 text-3xl leading-[1.15] sm:text-4xl lg:text-[2.75rem]",
          tone === "light" ? "text-cream" : "text-navy",
        )}
      >
        {title}
      </h2>
      <div aria-hidden="true" className={cn("gold-rule mt-5", align === "center" && "mx-auto")} />
      {subtitle ? (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed",
            tone === "light" ? "text-cream/75" : "text-muted-foreground",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
