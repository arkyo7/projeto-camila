import type { Language } from "@/config/siteConfig";

/** Texto localizado. PT é obrigatório e serve de fallback. */
export type LocalizedText = { pt: string } & Partial<Record<Language, string>>;

export interface Service {
  id: string;
  icon: string;
  waKey: string;
}

export interface SiteEvent {
  id: string;
  name: LocalizedText;
  date: LocalizedText;
  city: LocalizedText;
  country: LocalizedText;
  description?: LocalizedText;
  image?: string;
  imageAlt?: LocalizedText;
  status: "open" | "waitlist" | "closed";
  link?: string;
}

export interface PastEvent {
  id: string;
  name: string;
  place: string;
  year: string;
  description?: string;
  image?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  quote: string;
  result?: string;
  photo?: string;
}

export interface GalleryImage {
  id: string;
  src?: string;
  alt: string;
}

export interface BeautyService {
  id: string;
  name: LocalizedText;
  description: LocalizedText;
  image: string;
  imageAlt: LocalizedText;
  whatsappMessage: LocalizedText;
  price?: string;
  duration?: LocalizedText;
}

export interface FAQ {
  question: string;
  answer: string;
}

export type ContactInterest =
  | "consultoria"
  | "palestra"
  | "bsf"
  | "beauty"
  | "universe"
  | "parcerias"
  | "outro";
