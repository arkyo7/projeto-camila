import { cn } from "@/lib/utils";

/** Monograma geométrico da marca (CM) usado como logo e detalhe decorativo. */
export function Monogram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      role="img"
      aria-hidden="true"
      focusable="false"
      className={cn("h-8 w-8", className)}
    >
      <rect
        x="1.5"
        y="1.5"
        width="45"
        height="45"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
        opacity="0.5"
      />
      <path
        d="M31 17.5c-1.9-2.2-4.4-3.4-7.2-3.4-5.4 0-9.3 4.2-9.3 9.9s3.9 9.9 9.3 9.9c2.8 0 5.3-1.2 7.2-3.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M33 34V14l0 0"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
