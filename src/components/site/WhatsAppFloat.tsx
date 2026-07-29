import { MessageCircle } from "lucide-react";
import { useI18n } from "@/i18n";
import { whatsappLink } from "@/lib/whatsapp";

export function WhatsAppFloat() {
  const { t } = useI18n();

  return (
    <a
      href={whatsappLink(t.float.message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.float.label}
      className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] z-40 inline-flex items-center gap-2 rounded-full bg-navy px-4 py-3 text-cream shadow-lg transition-colors hover:bg-navy-soft sm:px-5"
    >
      <MessageCircle size={20} strokeWidth={1.6} aria-hidden="true" className="text-gold" />
      <span className="hidden text-sm font-medium sm:inline">{t.float.label}</span>
    </a>
  );
}
