import { CalendarDays, MapPin } from "lucide-react";
import { BrandImage } from "./BrandImage";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { pastEvents, upcomingEvents } from "@/data/siteContent";
import { useI18n } from "@/i18n";
import { whatsappLink } from "@/lib/whatsapp";

export function EventsSection() {
  const { t } = useI18n();

  return (
    <section id="eventos" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={t.events.eyebrow} title={t.events.title} />

        <h3 className="mt-14 text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
          {t.events.upcomingTitle}
        </h3>

        {upcomingEvents.length > 0 ? (
          <ul className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {upcomingEvents.map((event, i) => (
              <Reveal as="li" key={event.id} delay={i * 80} className="flex">
                <article className="flex w-full flex-col border border-border bg-card">
                  <BrandImage
                    src={event.image}
                    alt={event.name}
                    width={720}
                    height={480}
                    tone="cream"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <span className="self-start border border-gold px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-navy">
                      {t.events.status[event.status]}
                    </span>
                    <h4 className="mt-4 text-xl text-navy">{event.name}</h4>
                    <p className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                      <CalendarDays size={15} aria-hidden="true" className="text-gold" />
                      {event.date}
                    </p>
                    <p className="mt-1.5 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin size={15} aria-hidden="true" className="text-gold" />
                      {event.city}, {event.country}
                    </p>
                    {event.description ? (
                      <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {event.description}
                      </p>
                    ) : null}
                    <a
                      href={
                        event.link ??
                        whatsappLink(`${t.events.emptyMessage} (${event.name})`)
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-7 inline-flex items-center justify-center border border-navy px-5 py-2.5 text-sm font-medium text-navy transition-colors hover:bg-navy hover:text-cream"
                    >
                      {t.events.eventCta}
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        ) : (
          <Reveal className="mt-6 border border-gold/30 bg-background px-7 py-14 text-center">
            <p className="font-serif text-2xl text-navy sm:text-3xl">
              {t.events.emptyTitle}
            </p>
            <div aria-hidden="true" className="gold-rule mx-auto mt-6" />
            <a
              href={whatsappLink(t.events.emptyMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center justify-center bg-navy px-7 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-navy-soft"
            >
              {t.events.emptyCta}
            </a>
          </Reveal>
        )}

        {pastEvents.length > 0 ? (
          <>
            <h3 className="mt-20 text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
              {t.events.pastTitle}
            </h3>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pastEvents.map((event, i) => (
                <Reveal as="li" key={event.id} delay={i * 70}>
                  <article className="border border-border bg-card">
                    <BrandImage
                      src={event.image}
                      alt={event.name}
                      width={720}
                      height={520}
                      tone="cream"
                    />
                    <div className="p-6">
                      <h4 className="text-lg text-navy">{event.name}</h4>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {event.place} — {event.year}
                      </p>
                      {event.description ? (
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                          {event.description}
                        </p>
                      ) : null}
                    </div>
                  </article>
                </Reveal>
              ))}
            </ul>
          </>
        ) : null}
      </div>
    </section>
  );
}