export type Language = "pt" | "it" | "es" | "en";

export interface LocalizedText extends Record<Language, string> {}

export interface SiteEvent {
  id: string;
  name: LocalizedText;
  date: LocalizedText;
  city: LocalizedText;
  country: LocalizedText;
  description?: LocalizedText;
  image: string;
  imageAlt?: LocalizedText;
  status: "open" | "waitlist" | "closed";
}

export interface PastEvent {
  id: string;
  name: LocalizedText;
  date: LocalizedText;
  location: LocalizedText;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  photo: string;
  role: string;
  location: string;
  result?: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo: string;
  url: string;
  type: "sponsor" | "partner";
  category?: string;
}


export type ContactInterest =
  | "bsf_participation"
  | "bsf_events"
  | "talks"
  | "consulting"
  | "sponsorship"
  | "partnership"
  | "press"
  | "other";
