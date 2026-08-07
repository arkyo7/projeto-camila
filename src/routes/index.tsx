import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/site/AboutSection";
import { BsfSection } from "@/components/site/BsfSection";
import { ContactSection } from "@/components/site/ContactSection";
import { EventsSection } from "@/components/site/EventsSection";
import { HighlightsSection } from "@/components/site/HighlightsSection";
import { Hero } from "@/components/site/Hero";
import { SiteLayout } from "@/components/site/SiteLayout";
import { siteConfig } from "@/config/siteConfig";

const title = "Beleza Sem Fronteiras | Eventos e conexões para profissionais da beleza";
const description =
  "O Beleza Sem Fronteiras conecta profissionais brasileiras da beleza e da estética por meio de encontros, experiências, palestras, networking e oportunidades no Brasil e no exterior.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              name: "Beleza Sem Fronteiras",
              description:
                "Projeto de conexões, eventos e experiências para profissionais brasileiras da beleza e da estética.",
              founder: { 
                "@type": "Person", 
                name: "Camila Maia",
                jobTitle: "Idealizadora, consultora e palestrante"
              },
              sameAs: [siteConfig.instagram.url],
            },
            {
              "@type": "Event",
              "name": "Beleza Sem Fronteiras — Barcelona 2027",
              "startDate": "2027-05-21",
              "endDate": "2027-05-23",
              "location": {
                "@type": "Place",
                "name": "Barcelona",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Barcelona",
                  "addressCountry": "ES"
                }
              }
            }
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <SiteLayout>
      <Hero />
      <AboutSection />
      <BsfSection />
      <EventsSection />
      <HighlightsSection />
      <ContactSection />
    </SiteLayout>
  );
}
