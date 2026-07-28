import { createFileRoute } from "@tanstack/react-router";
import { AboutSection } from "@/components/site/AboutSection";
import { BeautySection } from "@/components/site/BeautySection";
import { BsfSection } from "@/components/site/BsfSection";
import { ContactSection } from "@/components/site/ContactSection";
import { EventsSection } from "@/components/site/EventsSection";
import { FaqSection } from "@/components/site/FaqSection";
import { FinalCta } from "@/components/site/FinalCta";
import { Hero } from "@/components/site/Hero";
import { PathsSection } from "@/components/site/PathsSection";
import { PositioningStrip } from "@/components/site/PositioningStrip";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SolutionsSection } from "@/components/site/SolutionsSection";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { UniverseBeautySection } from "@/components/site/UniverseBeautySection";
import { siteConfig } from "@/config/siteConfig";

const title = "Camila Maia | Consultoria, Palestras e Beleza Sem Fronteiras";
const description =
  "Consultoria, palestras, eventos e conexões para mulheres brasileiras empreendedoras da beleza e da estética. Conheça Camila Maia e o projeto Beleza Sem Fronteiras.";

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
              jobTitle: "Consultora e palestrante",
              description: "Consultora, palestrante e idealizadora do Beleza Sem Fronteiras.",
              sameAs: [siteConfig.instagram.url],
              areaServed: siteConfig.location.country,
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
              "@type": "Service",
              serviceType: "Consultoria, mentoria e palestras",
              provider: { "@type": "Person", name: "Camila Maia" },
              description:
                "Consultorias individuais, mentorias e palestras para profissionais da beleza e da estética.",
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
      <PositioningStrip />
      <PathsSection />
      <AboutSection />
      <SolutionsSection />
      <UniverseBeautySection />
      <BsfSection />
      <EventsSection />
      <TestimonialsSection />
      <BeautySection />
      <FaqSection />
      <ContactSection />
      <FinalCta />
    </SiteLayout>
  );
}
