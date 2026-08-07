import { Link } from "@tanstack/react-router";
import { Instagram, MessageCircle } from "lucide-react";

import { navItems } from "./navigation";
import { siteConfig } from "@/config/siteConfig";
import { useI18n } from "@/i18n";
import { whatsappLink } from "@/lib/whatsapp";

export function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-soft pb-24 pt-16 text-cream/70 sm:pb-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="min-w-0">
            <div className="flex items-center gap-3 text-cream">
              
              <span className="font-serif text-lg">Beleza Sem Fronteiras</span>
            </div>
            <p className="mt-5 text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>

          <nav aria-label={t.footer.navTitle} className="min-w-0">
            <h2 className="text-[0.65rem] uppercase tracking-[0.22em] text-gold">
              {t.footer.navTitle}
            </h2>
            <ul className="mt-5 space-y-2.5 text-sm">
              {navItems.map((item) => (
                <li key={item.id}>
                  <Link to="/" hash={item.id} className="transition-colors hover:text-gold">
                    {t.nav[item.key]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0">
            <h2 className="text-[0.65rem] uppercase tracking-[0.22em] text-gold">
              {t.footer.contactTitle}
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={whatsappLink(t.bsf.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <MessageCircle size={15} aria-hidden="true" className="text-gold" />
                  WhatsApp
                </a>

              </li>
              <li>
                <a
                  href={siteConfig.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-gold"
                >
                  <Instagram size={15} aria-hidden="true" className="text-gold" />
                  {siteConfig.instagram.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-cream/10 pt-7 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Camila Maia. {t.footer.rights}
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link to="/politica-de-privacidade" className="transition-colors hover:text-gold">
                {t.footer.privacy}
              </Link>
            </li>
            <li>
              <Link to="/termos" className="transition-colors hover:text-gold">
                {t.footer.terms}
              </Link>
            </li>
            <li>
              <Link to="/aviso-legal" className="transition-colors hover:text-gold">
                {t.footer.notice}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
