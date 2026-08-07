import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { LanguageSwitcher } from "./LanguageSwitcher";

import { navItems } from "./navigation";
import { useI18n } from "@/i18n";
import { whatsappLink } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export function Header() {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || open ? "border-b border-cream/10 bg-navy/98" : "bg-transparent",
      )}
    >
      <div className="mx-auto grid h-20 max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 sm:px-8 lg:grid-cols-[auto_1fr_auto]">
        <Link
          to="/"
          hash="inicio"
          className="flex min-w-0 items-center gap-3 text-cream"
          aria-label="Beleza Sem Fronteiras"
        >
          
          <span className="min-w-0 truncate font-serif text-lg leading-tight tracking-wide">
            Beleza Sem Fronteiras
          </span>
        </Link>

        <nav aria-label={t.nav.home} className="hidden justify-center lg:flex lg:gap-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to="/"
              hash={item.id}
              className="whitespace-nowrap text-sm text-cream/75 transition-colors hover:text-gold"
            >
              {t.nav[item.key]}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <LanguageSwitcher tone="light" />
          <a
            href={whatsappLink(t.bsf.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-motion hidden border border-gold bg-gold px-6 py-2.5 text-sm font-medium tracking-tight text-navy hover:bg-gold-light sm:inline-flex"
          >
            {t.nav.cta}
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            className="relative z-[70] inline-flex h-10 w-10 items-center justify-center border border-cream/20 text-cream transition-colors hover:border-gold hover:text-gold lg:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-menu" className="border-t border-cream/10 bg-navy lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {navItems.map((item) => (
              <Link
                key={item.id}
                to="/"
                hash={item.id}
                onClick={() => setOpen(false)}
                className="border-b border-cream/10 py-3.5 text-base text-cream/85 transition-colors hover:text-gold"
              >
                {t.nav[item.key]}
              </Link>
            ))}
            <a
              href={whatsappLink(t.bsf.message)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-5 inline-flex items-center justify-center bg-gold px-5 py-3 text-sm font-medium text-navy"
            >
              {t.nav.cta}
            </a>

          </nav>
        </div>
      ) : null}
    </header>
  );
}
