export const siteConfig = {
  brand: {
    name: "Beleza Sem Fronteiras",
  },
  url: "",
  whatsapp: {
    display: "+39 371 569 9845",
    number: "393715699845",
  },
  instagram: {
    handle: "@abelezasemfronteiras",
    url: "https://www.instagram.com/abelezasemfronteiras/",
  },
  socials: {
    main: {
      handle: "@abelezasemfronteiras",
      url: "https://www.instagram.com/abelezasemfronteiras/",
    },
  },
  email: "",
  location: {
    country: "",
    address: "",
    city: "",
  },
  legal: {
    privacy: "/politica-de-privacidade",
    terms: "/termos",
    notice: "/aviso-legal",
  },
  logos: {
    bsf: "",
  },
  media: {
    podcast: { url: "https://www.youtube.com/watch?v=RPm1bQXO7aU", image: "" },
    magazine: {
      url: "https://heyzine.com/flip-book/818ff816f3.html#page/32",
      image: "/images/camila/revista-eurritmia.webp",
    },
  },
  languages: ["pt", "it", "es", "en"] as const,
  defaultLanguage: "pt" as const,
} as const;

export type Language = (typeof siteConfig.languages)[number];
