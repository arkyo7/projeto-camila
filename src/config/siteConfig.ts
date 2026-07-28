/**
 * Configuração central do site.
 * Edite este arquivo para atualizar contatos, links e horários.
 */

export const siteConfig = {
  brand: {
    name: "Camila Maia",
    project: "Beleza Sem Fronteiras",
    beauty: "Camila Maia Beauty",
  },
  /** URL canônica do site. Preencha quando o domínio final for definido. */
  url: "",
  whatsapp: {
    display: "+39 371 569 9845",
    number: "393715699845",
  },
  instagram: {
    handle: "@abelezasemfronteiras",
    url: "https://www.instagram.com/abelezasemfronteiras/",
  },
  /** Perfis sociais separados por frente de atuação. */
  socials: {
    main: {
      handle: "@abelezasemfronteiras",
      url: "https://www.instagram.com/abelezasemfronteiras/",
    },
    beauty: {
      handle: "@camilamaia.beauty",
      url: "https://www.instagram.com/camilamaia.beauty/",
    },
    universeBeauty: {
      handle: "@universebeauty_store",
      url: "https://www.instagram.com/universebeauty_store/",
    },
  },
  /** Universe Beauty — marca liderada por Camila Maia como CEO. */
  universeBeauty: {
    name: "Universe Beauty",
    rolePt: "CEO",
    roleIt: "CEO",
    locationPt: "Vêneto, Itália",
    locationIt: "Veneto, Italia",
    /** Preencher quando a logo oficial for fornecida. */
    logo: "",
    instagramUrl: "https://www.instagram.com/universebeauty_store/",
    /** Preencher quando existir loja online. */
    shopUrl: "",
    /** Preencher quando existir catálogo. */
    catalogUrl: "",
  },
  /** Deixe vazio enquanto nenhum e-mail profissional for fornecido. */
  email: "",
  location: {
    country: "Itália",
    /** Endereço completo — preencher quando confirmado. */
    address: "",
    city: "",
  },
  /** Horários da Camila Maia Beauty (0 = domingo). */
  beautyHours: [
    { day: 1, from: "09:00", to: "18:00" },
    { day: 2, from: "09:00", to: "18:00" },
    { day: 3, from: "09:00", to: "18:00" },
    { day: 4, from: "09:00", to: "18:00" },
    { day: 5, from: "09:00", to: "18:00" },
    { day: 6, from: "09:00", to: "13:00" },
    { day: 0, from: null, to: null },
  ] as { day: number; from: string | null; to: string | null }[],
  legal: {
    privacy: "/politica-de-privacidade",
    terms: "/termos",
    notice: "/aviso-legal",
  },
  languages: ["pt", "it"] as const,
  defaultLanguage: "pt" as const,
} as const;

export type Language = (typeof siteConfig.languages)[number];