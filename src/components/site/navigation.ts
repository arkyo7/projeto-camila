export const navItems = [
  { id: "inicio", key: "home" },
  { id: "sobre-o-projeto", key: "aboutProject" },
  { id: "eventos", key: "nextEvent" },
  { id: "edicoes", key: "pastEditions" },
  { id: "idealizadora", key: "founder" },
  { id: "palestras-e-parcerias", key: "talks" },
  { id: "contato", key: "contact" },
] as const;

export type NavKey = (typeof navItems)[number]["key"];
