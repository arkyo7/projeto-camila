import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/termos")({
  head: () => ({
    meta: [
      { title: "Termos e condições | Camila Maia" },
      {
        name: "description",
        content:
          "Termos e condições de uso do site de Camila Maia e das informações sobre consultorias, palestras e atendimentos.",
      },
      { property: "og:title", content: "Termos e condições | Camila Maia" },
      {
        property: "og:description",
        content: "Condições de uso do site de Camila Maia.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/termos" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/termos" }],
  }),
  component: () => <LegalPage page="terms" />,
});
