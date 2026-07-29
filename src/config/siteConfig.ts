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
    logo: "/images/camila/universe-beauty-logo.webp",
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
  legal: {
    privacy: "/politica-de-privacidade",
    terms: "/termos",
    notice: "/aviso-legal",
  },
  /**
   * Logotipos oficiais das marcas. Preencher assim que os arquivos forem
   * fornecidos; enquanto vazios, o site exibe blocos tipográficos neutros.
   */
  logos: {
    beauty: "",
    bsf: "",
    universeBeauty: "/images/camila/universe-beauty-logo.webp",
    voice: "/images/camila/voz-sem-fronteiras.png",
  },
  /**
   * Destaques da trajetória. Links e imagens oficiais.
   * Enquanto vazios, os botões correspondentes ficam ocultos.
   */
  media: {
    podcast: { url: "https://www.youtube.com/watch?v=RPm1bQXO7aU", image: "" },
    magazine: {
      url: "https://heyzine.com/flip-book/818ff816f3.html#page/32",
      image: "/images/camila/revista-eurritmia.png",
    },
  },
  languages: ["pt", "it", "es", "en"] as const,
  defaultLanguage: "pt" as const,
} as const;

export type Language = (typeof siteConfig.languages)[number];
