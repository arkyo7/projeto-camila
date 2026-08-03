import type {
  BeautyCategory,
  BeautyService,
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

/** Serviços confirmados da Camila Maia Beauty. Preço e duração ficam ocultos enquanto vazios. */
export const beautyServices: BeautyService[] = [
  {
    id: "lashes",
    image: "/images/camila/beauty-02.webp",
    name: {
      pt: "Cílios",
      it: "Ciglia",
      es: "Pestañas",
      en: "Lashes",
    },
    description: {
      pt: "Atendimentos dedicados à valorização do olhar, realizados de forma personalizada de acordo com o estilo e a necessidade de cada cliente.",
      it: "Trattamenti dedicati a valorizzare lo sguardo, personalizzati in base allo stile e alle esigenze di ogni cliente.",
      es: "Tratamientos dedicados a realzar la mirada, personalizados según el estilo y las necesidades de cada clienta.",
      en: "Beauty treatments designed to enhance the eyes, personalized to each client's style and needs.",
    },
    imageAlt: {
      pt: "Resultado de atendimento profissional de cílios realizado por Camila Maia.",
      it: "Risultato di un trattamento professionale per le ciglia realizzato da Camila Maia.",
      es: "Resultado de un tratamiento profesional de pestañas realizado por Camila Maia.",
      en: "Result of a professional lash treatment performed by Camila Maia.",
    },
    whatsappMessage: {
      pt: "Olá, Camila! Conheci seu trabalho pelo site e gostaria de receber informações sobre os atendimentos de cílios.",
      it: "Ciao Camila! Ho conosciuto il tuo lavoro attraverso il sito e vorrei ricevere informazioni sui trattamenti per le ciglia.",
      es: "¡Hola, Camila! Conocí tu trabajo a través del sitio y me gustaría recibir información sobre los servicios de pestañas.",
      en: "Hello, Camila! I discovered your work through the website and would like more information about your lash services.",
    },
  },
  {
    id: "eyebrows",
    image: "/images/camila/beauty-01.webp",
    name: {
      pt: "Sobrancelhas",
      it: "Sopracciglia",
      es: "Cejas",
      en: "Eyebrows",
    },
    description: {
      pt: "Design e cuidados pensados para harmonizar as sobrancelhas com os traços do rosto e valorizar a expressão de cada cliente.",
      it: "Design e trattamenti pensati per armonizzare le sopracciglia con i lineamenti del viso e valorizzare l’espressione di ogni cliente.",
      es: "Diseño y cuidados pensados para armonizar las cejas con los rasgos del rostro y realzar la expresión de cada clienta.",
      en: "Design and care tailored to harmonize the eyebrows with the facial features and enhance each client's expression.",
    },
    imageAlt: {
      pt: "Resultado de design e cuidado profissional de sobrancelhas realizado por Camila Maia.",
      it: "Risultato di un trattamento professionale per le sopracciglia realizzato da Camila Maia.",
      es: "Resultado de un diseño y cuidado profesional de cejas realizado por Camila Maia.",
      en: "Result of professional eyebrow design and care performed by Camila Maia.",
    },
    whatsappMessage: {
      pt: "Olá, Camila! Conheci seu trabalho pelo site e gostaria de receber informações sobre os atendimentos de sobrancelhas.",
      it: "Ciao Camila! Ho conosciuto il tuo lavoro attraverso il sito e vorrei ricevere informazioni sui trattamenti per le sopracciglia.",
      es: "¡Hola, Camila! Conocí tu trabajo a través del sitio y me gustaría recibir información sobre los servicios de cejas.",
      en: "Hello, Camila! I discovered your work through the website and would like more information about your eyebrow services.",
    },
  },
];

/** Eventos já realizados. Manter vazio até termos informações confirmadas. */
export const pastEvents: PastEvent[] = [];

/** Categorias de procedimentos da Camila Maia Beauty & Benessere. */
export const beautyCategories: BeautyCategory[] = [
  {
    id: "lashes",
    name: { pt: "Cílios", it: "Ciglia", es: "Pestañas", en: "Lashes" },
    procedures: [
      {
        id: "lash-extension",
        name: {
          pt: "Extensão de cílios — diversas técnicas",
          it: "Extension ciglia — diverse tecniche",
          es: "Extensión de pestañas — diversas técnicas",
          en: "Lash extensions — various techniques",
        },
      },
      {
        id: "lash-lifting",
        name: {
          pt: "Lash Lifting",
          it: "Lash Lifting",
          es: "Lash Lifting",
          en: "Lash Lifting",
        },
      },
    ],
    whatsappMessage: {
      pt: "Olá, Camila! Conheci a Camila Maia Beauty & Benessere pelo site e gostaria de informações sobre os procedimentos de cílios.",
      it: "Ciao Camila! Ho conosciuto Camila Maia Beauty & Benessere dal sito e vorrei informazioni sui trattamenti per le ciglia.",
      es: "¡Hola, Camila! Conocí Camila Maia Beauty & Benessere por el sitio y me gustaría información sobre los procedimientos de pestañas.",
      en: "Hello, Camila! I discovered Camila Maia Beauty & Benessere through the website and would like information about your lash procedures.",
    },
  },
  {
    id: "eyebrows",
    name: { pt: "Sobrancelhas", it: "Sopracciglia", es: "Cejas", en: "Eyebrows" },
    procedures: [
      {
        id: "brow-design",
        name: {
          pt: "Design de sobrancelhas personalizado",
          it: "Design sopracciglia personalizzato",
          es: "Diseño de cejas personalizado",
          en: "Personalized eyebrow design",
        },
      },
      {
        id: "brow-henna",
        name: {
          pt: "Design de sobrancelhas com henna",
          it: "Design sopracciglia con henné",
          es: "Diseño de cejas con henna",
          en: "Eyebrow design with henna",
        },
      },
      {
        id: "brow-reconstruction",
        name: {
          pt: "Reconstrução de sobrancelhas",
          it: "Ricostruzione delle sopracciglia",
          es: "Reconstrucción de cejas",
          en: "Eyebrow reconstruction",
        },
      },
      {
        id: "brow-lamination",
        name: {
          pt: "Brow Lamination",
          it: "Brow Lamination",
          es: "Brow Lamination",
          en: "Brow Lamination",
        },
      },
    ],
    whatsappMessage: {
      pt: "Olá, Camila! Conheci a Camila Maia Beauty & Benessere pelo site e gostaria de informações sobre os procedimentos de sobrancelhas.",
      it: "Ciao Camila! Ho conosciuto Camila Maia Beauty & Benessere dal sito e vorrei informazioni sui trattamenti per le sopracciglia.",
      es: "¡Hola, Camila! Conocí Camila Maia Beauty & Benessere por el sitio y me gustaría información sobre los procedimientos de cejas.",
      en: "Hello, Camila! I discovered Camila Maia Beauty & Benessere through the website and would like information about your eyebrow procedures.",
    },
  },
  {
    id: "facial",
    name: {
      pt: "Tratamentos Faciais",
      it: "Trattamenti Viso",
      es: "Tratamientos Faciales",
      en: "Facial Treatments",
    },
    procedures: [
      {
        id: "deep-cleansing",
        name: {
          pt: "Limpeza de pele",
          it: "Pulizia del viso",
          es: "Limpieza facial",
          en: "Deep facial cleansing",
        },
      },
      {
        id: "pele-de-seda",
        name: {
          pt: "Método Pele de Seda",
          it: "Metodo Pele de Seda",
          es: "Método Pele de Seda",
          en: "Pele de Seda method",
        },
      },
      {
        id: "bb-glow",
        name: { pt: "BB Glow", it: "BB Glow", es: "BB Glow", en: "BB Glow" },
      },
    ],
    whatsappMessage: {
      pt: "Olá, Camila! Conheci a Camila Maia Beauty & Benessere pelo site e gostaria de informações sobre os tratamentos faciais.",
      it: "Ciao Camila! Ho conosciuto Camila Maia Beauty & Benessere dal sito e vorrei informazioni sui trattamenti viso.",
      es: "¡Hola, Camila! Conocí Camila Maia Beauty & Benessere por el sitio y me gustaría información sobre los tratamientos faciales.",
      en: "Hello, Camila! I discovered Camila Maia Beauty & Benessere through the website and would like information about your facial treatments.",
    },
  },
  {
    id: "micropigmentation",
    name: {
      pt: "Micropigmentação",
      it: "Trucco Semipermanente",
      es: "Micropigmentación",
      en: "Micropigmentation",
    },
    procedures: [
      {
        id: "lip-micro",
        name: {
          pt: "Micropigmentação labial",
          it: "Trucco semipermanente labbra",
          es: "Micropigmentación labial",
          en: "Lip micropigmentation",
        },
      },
      {
        id: "brow-micro",
        name: {
          pt: "Micropigmentação de sobrancelhas",
          it: "Trucco semipermanente sopracciglia",
          es: "Micropigmentación de cejas",
          en: "Eyebrow micropigmentation",
        },
      },
      {
        id: "microblading",
        name: {
          pt: "Técnica Microblading",
          it: "Tecnica Microblading",
          es: "Técnica Microblading",
          en: "Microblading technique",
        },
      },
      {
        id: "shadow",
        name: {
          pt: "Técnica Esfumada — Shadow",
          it: "Tecnica Sfumata — Shadow",
          es: "Técnica Difuminada — Shadow",
          en: "Shadow technique",
        },
      },
    ],
    whatsappMessage: {
      pt: "Olá, Camila! Conheci a Camila Maia Beauty & Benessere pelo site e gostaria de informações sobre os procedimentos de micropigmentação.",
      it: "Ciao Camila! Ho conosciuto Camila Maia Beauty & Benessere dal sito e vorrei informazioni sul trucco semipermanente.",
      es: "¡Hola, Camila! Conocí Camila Maia Beauty & Benessere por el sitio y me gustaría información sobre los procedimientos de micropigmentación.",
      en: "Hello, Camila! I discovered Camila Maia Beauty & Benessere through the website and would like information about your micropigmentation procedures.",
    },
  },
  {
    id: "integrative",
    name: {
      pt: "Terapias Integrativas",
      it: "Terapie Integrative",
      es: "Terapias Integrativas",
      en: "Integrative Therapies",
    },
    procedures: [
      {
        id: "access-bars",
        name: {
          pt: "Barras de Access",
          it: "Access Bars",
          es: "Barras de Access",
          en: "Access Bars",
        },
      },
      {
        id: "energetic-facelift",
        name: {
          pt: "Face Lift Energético — Access Consciousness",
          it: "Face Lift Energetico — Access Consciousness",
          es: "Face Lift Energético — Access Consciousness",
          en: "Energetic Face Lift — Access Consciousness",
        },
      },
    ],
    whatsappMessage: {
      pt: "Olá, Camila! Conheci a Camila Maia Beauty & Benessere pelo site e gostaria de informações sobre as terapias integrativas.",
      it: "Ciao Camila! Ho conosciuto Camila Maia Beauty & Benessere dal sito e vorrei informazioni sulle terapie integrative.",
      es: "¡Hola, Camila! Conocí Camila Maia Beauty & Benessere por el sitio y me gustaría información sobre las terapias integrativas.",
      en: "Hello, Camila! I discovered Camila Maia Beauty & Benessere through the website and would like information about your integrative therapies.",
    },
  },
];

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
