import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/politica-de-privacidade")({
  head: () => ({
    meta: [
      { title: "Política de Privacidade | Camila Maia" },
      {
        name: "description",
        content:
          "Como os dados enviados pelo site de Camila Maia são utilizados para responder às solicitações de contato.",
      },
      { property: "og:title", content: "Política de Privacidade | Camila Maia" },
      {
        property: "og:description",
        content: "Informações sobre o uso dos dados enviados pelo site de Camila Maia.",
      },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/politica-de-privacidade" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/politica-de-privacidade" }],
  }),
  component: () => <LegalPage page="privacy" />,
});