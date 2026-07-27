import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SiteLayout } from "./SiteLayout";
import { useI18n } from "@/i18n";

export function LegalPage({ page }: { page: "privacy" | "terms" | "notice" }) {
  const { t } = useI18n();
  const content = t.legal[page];

  return (
    <SiteLayout>
      <article className="mx-auto max-w-3xl px-5 pb-24 pt-36 sm:px-8">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-gold"
        >
          <ArrowLeft size={15} aria-hidden="true" />
          {t.legal.back}
        </Link>
        <h1 className="mt-8 text-4xl leading-tight text-navy">{content.title}</h1>
        <div aria-hidden="true" className="gold-rule mt-6" />
        {content.body.map((paragraph) => (
          <p key={paragraph} className="mt-6 text-base leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </article>
    </SiteLayout>
  );
}