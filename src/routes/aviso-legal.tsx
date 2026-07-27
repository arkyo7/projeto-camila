import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/aviso-legal")({
  head: () => ({
    meta: [
      { title: "Aviso legal | Camila Maia" },
      {
        name: "description",
        content:
          "Aviso legal sobre os conteúdos publicados no site de Camila Maia e do projeto Beleza Sem Fronteiras.",
      },
      { property: "og:title", content: "Aviso legal | Camila Maia" },
      {
        property: "og:description",
        content: "Informações legais sobre os conteúdos do site de Camila Maia.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/aviso-legal" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/aviso-legal" }],
  }),
  component: () => <LegalPage page="notice" />,
});