export type ContactInterest = 
  | "bsf_participation" 
  | "bsf_events" 
  | "consultoria" 
  | "palestra" 
  | "patrocinio" 
  | "parceria" 
  | "imprensa" 
  | "outro";

export interface SiteEvent {
  id: string;
  name: Record<string, string>;
  date: Record<string, string>;
  city: Record<string, string>;
  country: Record<string, string>;
  description: Record<string, string>;
  image: string;
  imageAlt: Record<string, string>;
  status: "open" | "waitlist" | "closed";
}

export interface PastEvent {
  id: string;
  name: Record<string, string>;
  date: Record<string, string>;
  location: Record<string, string>;
  image: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: Record<string, string>;
  content: Record<string, string>;
  image?: string;
}

export interface Sponsor {
  id: string;
  name: string;
  logo?: string;
  category?: string;
  url?: string;
  type: "sponsor" | "partner";
}
