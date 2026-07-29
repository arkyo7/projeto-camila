import type { GalleryImage, PastEvent, SiteEvent, Testimonial } from "./types";

/**
 * Conteúdo estruturado do site.
 * Listas vazias fazem com que a seção correspondente seja ocultada automaticamente.
 */

/** Próximos eventos. Nunca cadastrar datas fictícias. */
export const upcomingEvents: SiteEvent[] = [
  {
    id: "barcelona-2027",
    name: {
      pt: "Beleza Sem Fronteiras — Barcelona 2027",
      it: "Beleza Sem Fronteiras — Barcellona 2027",
    },
    date: {
      pt: "21, 22 e 23 de maio de 2027",
      it: "21, 22 e 23 maggio 2027",
    },
    city: {
      pt: "Barcelona",
      it: "Barcellona",
    },
    country: {
      pt: "Espanha",
      it: "Spagna",
    },
    description: {
      pt: "Três dias de negócios, inovação, networking e crescimento estratégico no Mediterrâneo. Uma experiência criada para conectar mulheres inspiradoras e profissionais da beleza.",
      it: "Tre giorni di business, innovazione, networking e crescita strategica nel Mediterraneo. Un’esperienza pensata per connettere donne ispiratrici e professioniste della bellezza.",
    },
    image: "/images/camila/bsf-barcelona-2027.webp",
    imageAlt: {
      pt: "Barcelona, próximo destino do Beleza Sem Fronteiras em maio de 2027",
      it: "Barcellona, prossima destinazione di Beleza Sem Fronteiras a maggio 2027",
    },
    status: "waitlist",
  },
];

/** Eventos já realizados. Manter vazio até termos informações confirmadas. */
export const pastEvents: PastEvent[] = [];

/** Depoimentos reais. Enquanto vazio, a seção permanece oculta. */
export const testimonials: Testimonial[] = [];

/** Galeria editorial do projeto Beleza Sem Fronteiras. */
export const bsfGallery: GalleryImage[] = [
  {
    id: "evento-01",
    src: "/images/camila/evento-01.webp",
    alt: "Camila Maia e participantes em um encontro do Beleza Sem Fronteiras",
  },
  {
    id: "evento-02",
    src: "/images/camila/evento-02.webp",
    alt: "Participantes reunidos durante uma premiação do Beleza Sem Fronteiras",
  },
  {
    id: "evento-03",
    src: "/images/camila/evento-03.webp",
    alt: "Camila Maia apresentando conteúdo para profissionais da beleza",
  },
  {
    id: "evento-04",
    src: "/images/camila/evento-04.webp",
    alt: "Camila Maia durante uma palestra do Beleza Sem Fronteiras",
  },
  {
    id: "evento-05",
    src: "/images/camila/evento-05.webp",
    alt: "Conexões e networking entre participantes de uma experiência profissional",
  },
  {
    id: "evento-06",
    src: "/images/camila/evento-06.webp",
    alt: "Mulheres reunidas em uma experiência promovida pelo Beleza Sem Fronteiras",
  },
];

/** Fotografias dos serviços da Camila Maia Beauty. */
export const beautyGallery: GalleryImage[] = [
  {
    id: "beauty-01",
    src: "/images/camila/beauty-01.webp",
    alt: "Resultado profissional de design e embelezamento de sobrancelhas",
  },
  {
    id: "beauty-02",
    src: "/images/camila/beauty-02.webp",
    alt: "Resultado profissional de extensão e valorização dos cílios",
  },
];

/** Parceiros, selos e certificações. Manter vazio até confirmação. */
export const partners: {
  id: string;
  name: string;
  logo?: string;
}[] = [];

/**
 * Patrocinadores e parceiros do Beleza Sem Fronteiras.
 * Cadastrar apenas marcas confirmadas e autorizadas.
 * Enquanto a lista estiver vazia, a seção não é exibida.
 */
export interface Sponsor {
  id: string;
  name: string;
  /** Caminho do logo oficial (ex.: "/images/patrocinadores/marca.png"). */
  logo?: string;
  /** Categoria opcional (ex.: "Cosméticos"). */
  category?: string;
  /** Link para o site ou Instagram oficial. */
  url?: string;
  type: "sponsor" | "partner";
}

export const sponsors: Sponsor[] = [];

/**
 * Texto opcional sobre parcerias/patrocínios da Universe Beauty.
 * Enquanto vazio, nenhuma informação de patrocínio é exibida no site.
 */
export const universeBeautyPartnershipText = "";

/** Produtos em destaque da Universe Beauty. Vazio = nada é exibido. */
export const universeBeautyHighlights: {
  id: string;
  name: string;
  image?: string;
}[] = [];
