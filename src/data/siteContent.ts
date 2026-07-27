import type { GalleryImage, PastEvent, SiteEvent, Testimonial } from "./types";

/**
 * Conteúdo estruturado do site.
 * Listas vazias fazem com que a seção correspondente seja ocultada automaticamente.
 */

/** Próximos eventos. Nunca cadastrar datas fictícias. */
export const upcomingEvents: SiteEvent[] = [];

/** Eventos já realizados (galeria histórica). */
export const pastEvents: PastEvent[] = [];

/** Depoimentos reais. Enquanto vazio, a seção fica oculta. */
export const testimonials: Testimonial[] = [];

/** Galeria editorial do Beleza Sem Fronteiras. `src` vazio gera placeholder premium. */
export const bsfGallery: GalleryImage[] = [
  { id: "evento-01", alt: "Encontro do Beleza Sem Fronteiras" },
  { id: "evento-02", alt: "Palestra de Camila Maia" },
  { id: "evento-03", alt: "Networking entre profissionais da beleza" },
  { id: "evento-04", alt: "Experiência profissional internacional" },
  { id: "evento-05", alt: "Participantes de um encontro" },
  { id: "evento-06", alt: "Bastidores de um evento" },
];

/** Imagens da Camila Maia Beauty. */
export const beautyGallery: GalleryImage[] = [
  { id: "beauty-01", alt: "Atendimento de olhar e cílios" },
  { id: "beauty-02", alt: "Design de sobrancelhas" },
  { id: "beauty-03", alt: "Atendimento personalizado de beleza" },
];

/** Parceiros, selos e certificações — manter vazio até confirmação. */
export const partners: { id: string; name: string; logo?: string }[] = [];