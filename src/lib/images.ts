/**
 * Mapa de variantes responsivas geradas em `public/images/camila`.
 * A chave é o caminho original usado no código; o valor é o srcSet completo.
 */
const SRC_SETS: Record<string, string> = {
  "/images/camila/beauty-01.webp":
    "/images/camila/beauty-01-480w.webp 480w, /images/camila/beauty-01-720w.webp 720w, /images/camila/beauty-01.webp 900w",
  "/images/camila/beauty-02.webp":
    "/images/camila/beauty-02-480w.webp 480w, /images/camila/beauty-02-720w.webp 720w, /images/camila/beauty-02.webp 900w",
  "/images/camila/bsf-barcelona-2027.webp":
    "/images/camila/bsf-barcelona-2027-480w.webp 480w, /images/camila/bsf-barcelona-2027-720w.webp 720w, /images/camila/bsf-barcelona-2027-960w.webp 960w, /images/camila/bsf-barcelona-2027.webp 1122w",
  "/images/camila/camila-hero.webp":
    "/images/camila/camila-hero-640w.webp 640w, /images/camila/camila-hero-960w.webp 960w, /images/camila/camila-hero.webp 1121w",
  "/images/camila/camila-sobre.webp":
    "/images/camila/camila-sobre-640w.webp 640w, /images/camila/camila-sobre-960w.webp 960w, /images/camila/camila-sobre.webp 1000w",
  "/images/camila/evento-01.webp":
    "/images/camila/evento-01-480w.webp 480w, /images/camila/evento-01-720w.webp 720w, /images/camila/evento-01.webp 900w",
  "/images/camila/evento-02.webp":
    "/images/camila/evento-02-480w.webp 480w, /images/camila/evento-02-720w.webp 720w, /images/camila/evento-02-960w.webp 960w, /images/camila/evento-02.webp 1200w",
  "/images/camila/evento-03.webp":
    "/images/camila/evento-03-480w.webp 480w, /images/camila/evento-03-720w.webp 720w, /images/camila/evento-03.webp 900w",
  "/images/camila/evento-04.webp":
    "/images/camila/evento-04-480w.webp 480w, /images/camila/evento-04-720w.webp 720w, /images/camila/evento-04.webp 900w",
  "/images/camila/evento-05.webp":
    "/images/camila/evento-05-480w.webp 480w, /images/camila/evento-05-720w.webp 720w, /images/camila/evento-05.webp 900w",
  "/images/camila/evento-06.webp":
    "/images/camila/evento-06-480w.webp 480w, /images/camila/evento-06-720w.webp 720w, /images/camila/evento-06.webp 900w",
  "/images/camila/revista-eurritmia.webp":
    "/images/camila/revista-eurritmia-480w.webp 480w, /images/camila/revista-eurritmia-720w.webp 720w, /images/camila/revista-eurritmia-960w.webp 960w, /images/camila/revista-eurritmia.webp 1672w",
};

/** Presets de `sizes` usados nos principais contextos de layout. */
export const imageSizes = {
  hero: "(min-width: 1024px) 45vw, (min-width: 640px) 70vw, 100vw",
  twoCols: "(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw",
  gallery: "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
} as const;

/** Retorna o srcSet responsivo de uma imagem conhecida, se existir. */
export function imageSrcSet(src?: string): string | undefined {
  if (!src) return undefined;
  return SRC_SETS[src];
}
