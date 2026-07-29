export const navItems = [
  { id: "inicio", key: "home" },
  { id: "sobre", key: "about" },
  { id: "destaques", key: "highlights" },
  { id: "contato", key: "contact" },
] as const;

export type NavKey = (typeof navItems)[number]["key"];