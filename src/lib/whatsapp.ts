import { siteConfig } from "@/config/siteConfig";

export function whatsappLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsapp.number}?text=${encodeURIComponent(message)}`;
}
