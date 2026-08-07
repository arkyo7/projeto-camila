import type { CSSProperties } from "react";

import { imageSrcSet } from "@/lib/images";
import { cn } from "@/lib/utils";

interface BrandImageProps {
  src?: string;
  srcSet?: string;
  sizes?: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
  objectPosition?: string;
  priority?: boolean;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  decoding?: "sync" | "async" | "auto";
  tone?: "navy" | "cream" | "blush";
  style?: CSSProperties;
}

const tones = {
  navy: "bg-navy text-gold",
  cream: "bg-cream text-gold",
  blush: "bg-blush text-nude",
};

/**
 * Renderiza a fotografia real quando disponível e, na ausência dela,
 * um placeholder premium com a paleta da marca e o monograma.
 */
export function BrandImage({
  src,
  srcSet,
  sizes,
  alt,
  width,
  height,
  className,
  imgClassName,
  objectPosition = "center",
  priority = false,
  loading,
  fetchPriority,
  decoding = "async",
  tone = "navy",
  style,
}: BrandImageProps) {
  const resolvedSrcSet = srcSet ?? imageSrcSet(src);

  return (
    <div
      className={cn("relative overflow-hidden", className)}
      style={{ aspectRatio: `${width} / ${height}`, ...style }}
    >
      {src ? (
        <img
          src={src}
          srcSet={resolvedSrcSet}
          sizes={resolvedSrcSet ? sizes : undefined}
          alt={alt}
          width={width}
          height={height}
          loading={loading ?? (priority ? "eager" : "lazy")}
          decoding={decoding}
          fetchPriority={fetchPriority ?? (priority ? "high" : undefined)}
          style={{ objectPosition }}
          className={cn("h-full w-full object-cover", imgClassName)}
        />
      ) : (
        <div
          role="img"
          aria-label={alt}
          className={cn("flex h-full w-full items-center justify-center", tones[tone])}
        >
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 15%, color-mix(in oklab, var(--gold) 22%, transparent), transparent 55%), radial-gradient(circle at 80% 85%, color-mix(in oklab, var(--gold-light) 16%, transparent), transparent 60%)",
            }}
          />
          <div aria-hidden="true" className="absolute inset-5 border border-current opacity-25" />
          
        </div>
      )}
    </div>
  );
}
