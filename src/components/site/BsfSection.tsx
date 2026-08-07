import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronDown, ChevronLeft, ChevronRight, X } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { useI18n } from "@/i18n";
import { whatsappLink } from "@/lib/whatsapp";
import { pastEvents, bsfGallery } from "@/data/siteContent";
import type { PastEvent } from "@/data/types";

interface BsfEdition extends PastEvent {
  images: { src: string; alt: string }[];
}

const galleryCopy = {
  pt: {
    heading: "Edições realizadas",
    intro: "Conheça alguns dos momentos que marcaram cada encontro pelo mundo.",
    open: "Ver fotos",
    close: "Fechar galeria",
    previous: "Foto anterior",
    next: "Próxima foto",
    counter: "foto",
    pending: "A seleção de fotos desta edição será publicada em breve.",
  },
  it: {
    heading: "Edizioni realizzate",
    intro: "Scopri alcuni dei momenti che hanno segnato ogni incontro nel mondo.",
    open: "Vedi foto",
    close: "Chiudi galleria",
    previous: "Foto precedente",
    next: "Foto successiva",
    counter: "foto",
    pending: "La selezione di foto di questa edizione sarà pubblicata a breve.",
  },
  es: {
    heading: "Ediciones realizadas",
    intro: "Conoce algunos de los momentos que marcaron cada encuentro por el mundo.",
    open: "Ver fotos",
    close: "Cerrar galería",
    previous: "Foto anterior",
    next: "Foto siguiente",
    counter: "foto",
    pending: "La selección de fotos de esta edición se publicará próximamente.",
  },
  en: {
    heading: "Past editions",
    intro: "Discover some of the moments that shaped each gathering around the world.",
    open: "View photos",
    close: "Close gallery",
    previous: "Previous photo",
    next: "Next photo",
    counter: "photo",
    pending: "The photo selection for this edition will be published soon.",
  },
} as const;

function EditionGallery({
  edition,
  copy,
}: {
  edition: BsfEdition;
  copy: (typeof galleryCopy)[keyof typeof galleryCopy];
}) {
  const [activeImage, setActiveImage] = useState(0);
  const { lang } = useI18n();

  useEffect(() => setActiveImage(0), [edition.id]);

  if (edition.images.length === 0) {
    return (
      <div
        id={`galeria-${edition.id}`}
        className="animate-in fade-in slide-in-from-top-6 border border-cream/15 bg-navy-soft/50 p-8 duration-700 sm:p-10"
      >
        <p className="text-[0.65rem] uppercase tracking-[0.24em] text-gold">
          {edition.location[lang]}
        </p>
        <h3 className="mt-2 text-2xl text-cream sm:text-3xl">{edition.name[lang]}</h3>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-cream/60">{copy.pending}</p>
      </div>
    );
  }

  const previous = () =>
    setActiveImage((current) => (current - 1 + edition.images.length) % edition.images.length);
  const next = () => setActiveImage((current) => (current + 1) % edition.images.length);

  return (
    <div
      id={`galeria-${edition.id}`}
      className="animate-in fade-in slide-in-from-top-6 border border-cream/15 bg-navy-soft/50 p-4 duration-700 sm:p-6 lg:p-8"
    >
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.24em] text-gold">
            {edition.location[lang]}
          </p>
          <h3 className="mt-2 text-2xl text-cream sm:text-3xl">{edition.name[lang]}</h3>
        </div>
        <p className="shrink-0 text-xs uppercase tracking-[0.18em] text-cream/50">
          {activeImage + 1} / {edition.images.length} {copy.counter}
        </p>
      </div>

      <div className="relative">
        <div className="flex h-[30rem] max-h-[72svh] gap-2 overflow-hidden sm:h-[36rem] sm:max-h-[42rem] sm:gap-3">
          {edition.images.map((image, index) => {
            const isActive = activeImage === index;
            return (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveImage(index)}
                aria-label={`${copy.open}: ${edition.name[lang]}, ${index + 1}`}
                aria-pressed={isActive}
                className={`relative min-w-0 overflow-hidden border transition-[flex-basis,opacity,border-color] duration-700 ease-out focus-visible:z-10 ${
                  isActive
                    ? "basis-[82%] border-gold bg-navy opacity-100 sm:basis-[64%]"
                    : "basis-[6%] border-cream/10 opacity-55 hover:opacity-80 sm:basis-[8%]"
                }`}
              >
                <img
                  src={image.src}
                  alt={isActive ? image.alt : ""}
                  loading="lazy"
                  decoding="async"
                  className={`h-full w-full ${isActive ? "object-contain" : "object-cover"}`}
                />
                {!isActive ? (
                  <span className="absolute inset-0 bg-navy/20" aria-hidden="true" />
                ) : null}
              </button>
            );
          })}
        </div>

        <button
          type="button"
          onClick={previous}
          aria-label={copy.previous}
          className="btn-motion absolute left-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center border border-cream/20 bg-navy/85 text-cream hover:border-gold hover:text-gold"
        >
          <ChevronLeft size={20} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label={copy.next}
          className="btn-motion absolute right-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center border border-cream/20 bg-navy/85 text-cream hover:border-gold hover:text-gold"
        >
          <ChevronRight size={20} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

export function BsfSection() {
  const { t, lang } = useI18n();
  const copy = galleryCopy[lang];
  const [openEdition, setOpenEdition] = useState<string | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);

  // Mapeia eventos passados para a estrutura esperada pela galeria
  const editions: BsfEdition[] = pastEvents.map((event) => ({
    ...event,
    // Atribuímos imagens específicas para algumas edições conhecidas, 
    // fallback para galeria geral filtrada se necessário.
    images: event.id === "holanda" 
      ? bsfGallery.filter(img => img.id.includes("holanda")) 
      : []
  }));

  const selectedEdition = editions.find((edition) => edition.id === openEdition) ?? null;

  useEffect(() => {
    if (!openEdition || !window.matchMedia("(max-width: 767px)").matches) return;

    const frame = window.requestAnimationFrame(() => {
      galleryRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [openEdition]);

  const toggleEdition = (id: string) => {
    setOpenEdition((current) => (current === id ? null : id));
  };

  return (
    <section id="sobre-o-projeto" className="relative overflow-hidden bg-navy py-16 lg:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 0%, color-mix(in oklab, var(--gold) 14%, transparent), transparent 50%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <SectionHeading eyebrow={t.bsf.eyebrow} title={t.bsf.title} tone="light" />
        </Reveal>

        <Reveal delay={90} className="mt-8 max-w-3xl">
          <p className="font-serif text-2xl leading-snug text-gold-light sm:text-3xl">
            {t.bsf.headline}
          </p>
        </Reveal>

        <Reveal delay={180} className="mt-6 max-w-2xl">
          <p className="text-base leading-relaxed text-cream/70">{t.bsf.text}</p>
        </Reveal>

        <ul className="mt-12 grid gap-px border border-cream/10 sm:grid-cols-2 lg:grid-cols-4">
          {t.bsf.pillars.map((pillar, i) => (
            <Reveal
              as="li"
              key={pillar.title}
              delay={Math.min(i * 90, 540)}
              className="border-b border-cream/10 p-7 last:border-b-0 sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:border-b-0 lg:border-r lg:[&:nth-child(2n)]:border-r lg:last:border-r-0"
            >
              <h3 className="text-xl text-cream">{pillar.title}</h3>
              <div aria-hidden="true" className="gold-rule mt-3" />
              <p className="mt-4 text-sm leading-relaxed text-cream/60">{pillar.description}</p>
            </Reveal>
          ))}
        </ul>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {editions.map((edition, index) => {
            const isOpen = openEdition === edition.id;
            return (
              <Reveal key={edition.id} delay={Math.min(index * 90, 360)}>
                <button
                  type="button"
                  onClick={() => toggleEdition(edition.id)}
                  aria-expanded={isOpen}
                  aria-controls={`galeria-${edition.id}`}
                  className={`interactive-card group relative block aspect-[4/5] w-full overflow-hidden border text-left ${
                    isOpen ? "border-gold" : "border-cream/10"
                  }`}
                >
                  <img
                    src={edition.image}
                    alt={`Capa ${edition.name[lang]}`}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.025]"
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-navy/90 via-transparent to-transparent"
                  />
                  <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                    <span>
                      <span className="block font-serif text-xl text-cream">
                        {edition.name[lang]}
                      </span>
                      <span className="mt-1 block text-[0.62rem] uppercase tracking-[0.2em] text-gold-light">
                        {isOpen ? copy.close : copy.open}
                      </span>
                    </span>
                    {isOpen ? (
                      <X size={19} className="shrink-0 text-gold" aria-hidden="true" />
                    ) : (
                      <ChevronDown size={19} className="shrink-0 text-gold" aria-hidden="true" />
                    )}
                  </span>
                </button>
              </Reveal>
            );
          })}
        </div>

        {selectedEdition ? (
          <div
            ref={galleryRef}
            className="mt-6 scroll-mt-5 sm:scroll-mt-8"
            key={selectedEdition.id}
          >
            <EditionGallery edition={selectedEdition} copy={copy} />
          </div>
        ) : null}

        <a
          href={whatsappLink(t.bsf.message)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-motion mt-12 inline-flex items-center justify-center gap-2 bg-gold px-7 py-3.5 text-sm font-medium text-navy hover:bg-gold-light"
        >
          {t.bsf.cta}
          <ArrowRight size={16} aria-hidden="true" className="btn-arrow" />
        </a>
      </div>
    </section>
  );
}
