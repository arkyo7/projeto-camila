export const navItems = [
  { id: "inicio", key: "home" },
  { id: "beauty", key: "services" },
  { id: "sobre", key: "about" },
  { id: "beleza-sem-fronteiras", key: "projects" },
  { id: "destaques", key: "highlights" },
  { id: "contato", key: "contact" },
] as const;

export type NavKey = (typeof navItems)[number]["key"];
