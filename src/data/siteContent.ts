import type {
  GalleryImage,
  PastEvent,
  SiteEvent,
  Testimonial,
} from "./types";

/**
 * Conteúdo estruturado do site.
 * Listas vazias fazem com que a seção correspondente seja ocultada automaticamente.
 */

/** Próximos eventos. Nunca cadastrar datas fictícias. */
export const upcomingEvents: SiteEvent[] = [];

/** Eventos já realizados. Manter vazio até termos informações confirmadas. */
export const pastEvents: PastEvent[] = [];

/** Depoimentos reais. Enquanto vazio, a seção permanece oculta. */
export const testimonials: Testimonial[] = [];

/** Galeria editorial do projeto Beleza Sem Fronteiras. */
export const bsfGallery: GalleryImage[] = [
  {
    id: "evento-01",
    src: "/images/camila/evento-01.png",
    alt: "Camila Maia e participantes em um encontro do Beleza Sem Fronteiras",
  },
  {
    id: "evento-02",
    src: "/images/camila/evento-02.png",
    alt: "Participantes reunidos durante uma premiação do Beleza Sem Fronteiras",
  },
  {
    id: "evento-03",
    src: "/images/camila/evento-03.png",
    alt: "Camila Maia apresentando conteúdo para profissionais da beleza",
  },
  {
    id: "evento-04",
    src: "/images/camila/evento-04.png",
    alt: "Camila Maia durante uma palestra do Beleza Sem Fronteiras",
  },
  {
    id: "evento-05",
    src: "/images/camila/evento-05.png",
    alt: "Conexões e networking entre participantes de uma experiência profissional",
  },
  {
    id: "evento-06",
    src: "/images/camila/evento-06.png",
    alt: "Mulheres reunidas em uma experiência promovida pelo Beleza Sem Fronteiras",
  },
];

/** Fotografias dos serviços da Camila Maia Beauty. */
export const beautyGallery: GalleryImage[] = [
  {
    id: "beauty-01",
    src: "/images/camila/beauty-01.png",
    alt: "Resultado profissional de design e embelezamento de sobrancelhas",
  },
  {
    id: "beauty-02",
    src: "/images/camila/beauty-02.png",
    alt: "Resultado profissional de extensão e valorização dos cílios",
  },
];

/** Parceiros, selos e certificações. Manter vazio até confirmação. */
export const partners: {
  id: string;
  name: string;
  logo?: string;
}[] = [];
