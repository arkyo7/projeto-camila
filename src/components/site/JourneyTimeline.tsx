import { Reveal } from "./Reveal";
import { cn } from "@/lib/utils";

export interface JourneyStep {
  marker: string;
  title: string;
  description: string;
}

export function JourneyTimeline({
  items,
  ariaLabel,
  className,
}: {
  items: readonly JourneyStep[];
  ariaLabel: string;
  className?: string;
}) {
  return (
    <ol
      aria-label={ariaLabel}
      className={cn(
        "relative grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10 lg:gap-y-12",
        className,
      )}
    >
      {items.map((item, index) => (
        <Reveal
          as="li"
          key={item.title}
          delay={Math.min(index * 90, 540)}
          className="relative min-w-0"
        >
          <div className="timeline-item">
          <div className="flex items-center gap-3">
            <span
              aria-hidden="true"
              className="h-2 w-2 shrink-0 rotate-45 border border-gold bg-gold/40"
            />
            <span
              aria-hidden="true"
              className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent"
            />
          </div>
          <p className="mt-4 text-[0.68rem] font-medium uppercase tracking-[0.24em] text-gold">
            {item.marker}
          </p>
          <h3 className="mt-2 text-xl leading-snug text-navy">{item.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
