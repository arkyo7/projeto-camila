import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/site/AboutSection";
import { BeautySection } from "@/components/site/BeautySection";
import { BsfSection } from "@/components/site/BsfSection";
import { ContactSection } from "@/components/site/ContactSection";
import { EventsSection } from "@/components/site/EventsSection";
import { FinalCta } from "@/components/site/FinalCta";
import { HighlightsSection } from "@/components/site/HighlightsSection";
import { Hero } from "@/components/site/Hero";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SponsorsSection } from "@/components/site/SponsorsSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { UniverseBeautySection } from "@/components/site/UniverseBeautySection";
import { siteConfig } from "@/config/siteConfig";

const title = "Camila Maia Beauty & Benessere | Beleza, Estética Facial e Bem-Estar";
const description =
  "Procedimentos personalizados de beleza, estética facial e bem-estar com Camila Maia: cílios, sobrancelhas, tratamentos faciais, micropigmentação e terapias integrativas.";

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
              "@type": "Person",
              name: "Camila Maia",
              jobTitle: "Empreendedora e profissional da beleza",
              description:
                "Profissional da beleza à frente da Camila Maia Beauty e idealizadora do Beleza Sem Fronteiras.",
              sameAs: [siteConfig.instagram.url],
            },
            {
              "@type": "Organization",
              name: "Beleza Sem Fronteiras",
              description:
                "Projeto de conexões, eventos e experiências para profissionais brasileiras da beleza e da estética.",
              founder: { "@type": "Person", name: "Camila Maia" },
              sameAs: [siteConfig.instagram.url],
            },
            {
              "@type": "Organization",
              name: "Universe Beauty",
              description: "Marca de beleza liderada por Camila Maia como CEO.",
              sameAs: [siteConfig.socials.universeBeauty.url],
              areaServed: "Veneto, Italy",
              employee: { "@type": "Person", name: "Camila Maia" },
            },
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
      <BeautySection />
      <AboutSection />
      <TestimonialsSection />
      <BsfSection />
      <SponsorsSection />
      <EventsSection />
      <UniverseBeautySection />
      <HighlightsSection />
      <ContactSection />
      <FinalCta />
    </SiteLayout>
  );
}
