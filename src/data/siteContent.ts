import type {
  GalleryImage,
  PastEvent,
  SiteEvent,
  Testimonial,
} from "./types";

/**
 * Conteúdo estruturado do site Beleza Sem Fronteiras.
 * Listas vazias fazem com que a seção correspondente seja ocultada automaticamente.
 */

/** Próximos eventos. Nunca cadastrar datas fictícias. */
export const upcomingEvents: SiteEvent[] = [
  {
    id: "barcelona-2027",
    name: {
      pt: "Beleza Sem Fronteiras — Barcelona 2027",
      it: "Beleza Sem Fronteiras — Barcellona 2027",
      es: "Beleza Sem Fronteiras — Barcelona 2027",
      en: "Beleza Sem Fronteiras — Barcelona 2027",
    },
    date: {
      pt: "21, 22 e 23 de maio de 2027",
      it: "21, 22 e 23 maggio 2027",
      es: "21, 22 y 23 de mayo de 2027",
      en: "May 21, 22 and 23, 2027",
    },
    city: {
      pt: "Barcelona",
      it: "Barcellona",
      es: "Barcelona",
      en: "Barcelona",
    },
    country: {
      pt: "Espanha",
      it: "Spagna",
      es: "España",
      en: "Spain",
    },
    description: {
      pt: "Três dias de negócios, inovação, networking e crescimento estratégico no Mediterrâneo. Uma experiência criada para conectar mulheres inspiradoras e profissionais da beleza.",
      it: "Tre giorni di business, innovazione, networking e crescita strategica nel Mediterraneo. Un’esperienza pensata per connettere donne ispiratrici e professioniste della bellezza.",
      es: "Tres días de negocios, innovación, networking y crecimiento estratégico en el Mediterráneo. Una experiencia creada para conectar a mujeres inspiradoras y profesionales de la belleza.",
      en: "Three days of business, innovation, networking, and strategic growth in the Mediterranean. An experience created to connect inspiring women and beauty professionals.",
    },
    image: "/images/camila/bsf-barcelona-2027.webp",
    imageAlt: {
      pt: "Barcelona, próximo destino do Beleza Sem Fronteiras em maio de 2027",
      it: "Barcellona, prossima destinazione di Beleza Sem Fronteiras a maggio 2027",
      es: "Barcelona, próximo destino de Beleza Sem Fronteiras en mayo de 2027.",
      en: "Barcelona, the next destination of Beleza Sem Fronteiras in May 2027.",
    },
    status: "waitlist",
  },
];

/** Eventos já realizados. */
export const pastEvents: PastEvent[] = [
  {
    id: "holanda",
    name: {
      pt: "Beleza Sem Fronteiras — Holanda",
      it: "Beleza Sem Fronteiras — Olanda",
      es: "Beleza Sem Fronteiras — Holanda",
      en: "Beleza Sem Fronteiras — Netherlands",
    },
    date: {
      pt: "Edição Realizada",
      it: "Edizione Realizzata",
      es: "Edición Realizada",
      en: "Past Edition",
    },
    location: {
      pt: "Holanda",
      it: "Olanda",
      es: "Países Bajos",
      en: "Netherlands",
    },
    image: "/images/camila/bsf-holanda.jpg",
  },
  {
    id: "sardenha",
    name: {
      pt: "Beleza Sem Fronteiras — Sardenha",
      it: "Beleza Sem Fronteiras — Sardegna",
      es: "Beleza Sem Fronteiras — Cerdeña",
      en: "Beleza Sem Fronteiras — Sardinia",
    },
    date: {
      pt: "Edição Realizada",
      it: "Edizione Realizzata",
      es: "Edición Realizada",
      en: "Past Edition",
    },
    location: {
      pt: "Sardenha, Itália",
      it: "Sardegna, Italia",
      es: "Cerdeña, Italia",
      en: "Sardinia, Italy",
    },
    image: "/images/camila/bsf-sardenha.jpg",
  },
  {
    id: "fortaleza",
    name: {
      pt: "Beleza Sem Fronteiras — Fortaleza",
      it: "Beleza Sem Fronteiras — Fortaleza",
      es: "Beleza Sem Fronteiras — Fortaleza",
      en: "Beleza Sem Fronteiras — Fortaleza",
    },
    date: {
      pt: "Edição Realizada",
      it: "Edizione Realizzata",
      es: "Edición Realizada",
      en: "Past Edition",
    },
    location: {
      pt: "Fortaleza, Brasil",
      it: "Fortaleza, Brasile",
      es: "Fortaleza, Brasil",
      en: "Fortaleza, Brazil",
    },
    image: "/images/camila/bsf-fortaleza.jpg",
  },
  {
    id: "milao",
    name: {
      pt: "Beleza Sem Fronteiras — Milão",
      it: "Beleza Sem Fronteiras — Milano",
      es: "Beleza Sem Fronteiras — Milán",
      en: "Beleza Sem Fronteiras — Milan",
    },
    date: {
      pt: "Edição Realizada",
      it: "Edizione Realizzata",
      es: "Edición Realizada",
      en: "Past Edition",
    },
    location: {
      pt: "Milão, Itália",
      it: "Milano, Italia",
      es: "Milán, Italia",
      en: "Milan, Italy",
    },
    image: "/images/camila/bsf-milao.jpg",
  },
];

/** Depoimentos reais. Enquanto vazio, a seção permanece oculta. */
export const testimonials: Testimonial[] = [];

/** Galeria editorial do projeto Beleza Sem Fronteiras. */
export const bsfGallery: GalleryImage[] = [
  {
    id: "bsf-holanda-01",
    src: "/images/camila/bsf-holanda-01.jpg",
    alt: "Registro do evento Beleza Sem Fronteiras na Holanda",
  },
  {
    id: "bsf-holanda-02",
    src: "/images/camila/bsf-holanda-02.jpg",
    alt: "Profissionais reunidas no Beleza Sem Fronteiras Holanda",
  },
  {
    id: "bsf-holanda-03",
    src: "/images/camila/bsf-holanda-03.jpg",
    alt: "Networking no Beleza Sem Fronteiras Holanda",
  },
  {
    id: "bsf-holanda-04",
    src: "/images/camila/bsf-holanda-04.jpg",
    alt: "Experiência Beleza Sem Fronteiras na Holanda",
  },
  {
    id: "bsf-holanda-05",
    src: "/images/camila/bsf-holanda-05.jpg",
    alt: "Encontro de profissionais da beleza na Holanda",
  },
  {
    id: "bsf-holanda-06",
    src: "/images/camila/bsf-holanda-06.jpg",
    alt: "Conexões internacionais no Beleza Sem Fronteiras",
  },
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

/** Patrocinadores e parceiros do Beleza Sem Fronteiras. */
export const sponsors: Sponsor[] = [];
