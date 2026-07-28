export interface Service {
  id: string;
  icon: string;
  waKey: string;
}

export interface SiteEvent {
  id: string;
  name: string;
  date: string;
  city: string;
  country: string;
  description?: string;
  image?: string;
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
