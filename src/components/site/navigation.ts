export const navItems = [
  { id: "inicio", key: "home" },
  { id: "sobre-o-projeto", key: "aboutProject" },
  { id: "idealizadora", key: "founder" },
  { id: "eventos", key: "nextEvent" },
  { id: "contato", key: "contact" },
] as const;


export type NavKey = (typeof navItems)[number]["key"];
