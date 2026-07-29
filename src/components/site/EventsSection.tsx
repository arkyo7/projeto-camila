import { CalendarDays, MapPin } from "lucide-react";
import { BrandImage } from "./BrandImage";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { pastEvents, upcomingEvents } from "@/data/siteContent";
import type { LocalizedText } from "@/data/types";
import { useI18n } from "@/i18n";
import { whatsappLink } from "@/lib/whatsapp";

export function EventsSection() {
  const { t, lang } = useI18n();
  const featured = upcomingEvents.length === 1;

  const getText = (value: LocalizedText) => value[lang] ?? value.pt;

  return (
    <section id="eventos" className="border-t border-gold/20 bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div aria-hidden="true" className="mx-auto mb-12 h-px w-16 bg-gold/50" />
        <SectionHeading eyebrow={t.events.eyebrow} title={t.events.title} />

        <h3 className="mt-14 text-sm font-medium uppercase tracking-[0.22em] text-muted-foreground">
          {t.events.upcomingTitle}
        </h3>

        {upcomingEvents.length > 0 ? (
          <ul className={featured ? "mt-6" : "mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3"}>
            {upcomingEvents.map((event, i) => {
              const name = getText(event.name);
              const date = getText(event.date);
              const city = getText(event.city);
              const country = getText(event.country);
              const description = event.description ? getText(event.description) : "";
              const imageAlt = event.imageAlt ? getText(event.imageAlt) : name;

              const statusLabel =
                featured && event.status === "waitlist"
                  ? t.events.interestLabel
                  : t.events.status[event.status];

              const buttonText = featured ? t.events.interestCta : t.events.eventCta;

              const whatsappMessage = t.events.interestMessage.replace("{event}", name);

              return (
                <Reveal as="li" key={event.id} delay={i * 90} className="flex">
                  <article
                    className={
                      featured
                        ? "interactive-card grid w-full overflow-hidden border border-gold/30 bg-card lg:grid-cols-[0.9fr_1.1fr] lg:items-stretch"
                        : "interactive-card flex w-full flex-col border border-border bg-card"
                    }
                  >
                    <BrandImage
                      src={event.image}
                      alt={imageAlt}
                      width={featured ? 1200 : 720}
                      height={featured ? 1500 : 480}
                      tone="cream"
                      className={featured ? "border-0" : undefined}
                      imgClassName="object-cover"
                    />

                    <div
                      className={
                        featured
                          ? "flex flex-col justify-center p-7 sm:p-10 lg:p-12"
                          : "flex flex-1 flex-col p-7"
                      }
                    >
                      {featured ? (
                        <p className="text-[0.65rem] font-medium uppercase tracking-[0.24em] text-gold">
                          {t.events.nextDestination}
                        </p>
                      ) : null}

                      <span
                        className={`self-start border border-gold px-3 py-1 text-[0.65rem] uppercase tracking-[0.18em] text-navy ${
                          featured ? "mt-5" : ""
                        }`}
                      >
                        {statusLabel}
                      </span>

                      <h4
                        className={
                          featured
                            ? "mt-5 font-serif text-3xl leading-tight text-navy sm:text-4xl"
                            : "mt-4 text-xl text-navy"
                        }
                      >
                        {name}
                      </h4>

                      <p className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarDays size={16} aria-hidden="true" className="shrink-0 text-gold" />
                        {date}
                      </p>

                      <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin size={16} aria-hidden="true" className="shrink-0 text-gold" />
                        {city}, {country}
                      </p>

                      {description ? (
                        <p className="mt-6 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
                          {description}
                        </p>
                      ) : null}

                      <a
                        href={event.link ?? whatsappLink(whatsappMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${buttonText}: ${name}`}
                        className="btn-motion mt-8 inline-flex w-full items-center justify-center bg-navy px-6 py-3.5 text-sm font-medium text-cream hover:bg-navy-soft sm:w-auto sm:self-start"
                      >
                        {buttonText}
                      </a>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </ul>
        ) : (
          <Reveal className="mt-6 border border-gold/30 bg-background px-7 py-14 text-center">
            <p className="font-serif text-2xl text-navy sm:text-3xl">{t.events.emptyTitle}</p>

            <div aria-hidden="true" className="gold-rule mx-auto mt-6" />

            <a
              href={whatsappLink(t.events.emptyMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-motion mt-8 inline-flex items-center justify-center bg-navy px-7 py-3.5 text-sm font-medium text-cream hover:bg-navy-soft"
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
                <Reveal as="li" key={event.id} delay={i * 90}>
                  <article className="interactive-card border border-border bg-card">
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
