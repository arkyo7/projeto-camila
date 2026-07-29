export const navItems = [
  { id: "inicio", key: "home" },
  { id: "sobre", key: "about" },
  { id: "beauty", key: "beauty" },
  { id: "beleza-sem-fronteiras", key: "bsf" },
  { id: "universe-beauty", key: "universe" },
  { id: "destaques", key: "highlights" },
  { id: "contato", key: "contact" },
] as const;

export type NavKey = (typeof navItems)[number]["key"];