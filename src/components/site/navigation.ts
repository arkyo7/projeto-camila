export const navItems = [
  { id: "inicio", key: "home" },
  { id: "sobre", key: "about" },
  { id: "solucoes", key: "solutions" },
  { id: "beleza-sem-fronteiras", key: "bsf" },
  { id: "eventos", key: "events" },
  { id: "beauty", key: "beauty" },
  { id: "contato", key: "contact" },
] as const;

export type NavKey = (typeof navItems)[number]["key"];