import { Check, ChevronsUpDown } from "lucide-react";
import { useMemo, useState } from "react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { countries, findCountry, matchesCountry } from "@/data/countries";
import { useI18n } from "@/i18n";
import { cn } from "@/lib/utils";

interface CountrySelectProps {
  id: string;
  value?: string;
  onChange: (code: string) => void;
  /** "country" mostra o nome do país; "dial" mostra apenas o código telefônico. */
  variant?: "country" | "dial";
  placeholder?: string;
  invalid?: boolean;
  describedBy?: string;
  className?: string;
  ariaLabel?: string;
}

export function CountrySelect({
  id,
  value,
  onChange,
  variant = "country",
  placeholder,
  invalid,
  describedBy,
  className,
  ariaLabel,
}: CountrySelectProps) {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  const selected = findCountry(value);
  const results = useMemo(
    () => countries.filter((c) => matchesCountry(c, query)).slice(0, 60),
    [query],
  );

  const label = (code: string) => findCountry(code)?.names[lang] ?? code;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          id={id}
          type="button"
          role="combobox"
          aria-expanded={open}
          aria-label={ariaLabel}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          className={cn(
            "mt-2 flex h-11 w-full min-w-0 items-center justify-between gap-2 border border-input bg-background px-3 text-left text-sm text-foreground transition-colors hover:border-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60",
            invalid && "border-destructive",
            className,
          )}
        >
          <span className={cn("truncate", !selected && "text-muted-foreground")}>
            {selected
              ? variant === "dial"
                ? `+${selected.dial}`
                : `${selected.names[lang]} — +${selected.dial}`
              : (placeholder ?? t.contact.fields.countryPlaceholder)}
          </span>
          <ChevronsUpDown size={14} aria-hidden="true" className="shrink-0 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="start"
        className="w-[min(20rem,calc(100vw-2.5rem))] rounded-none border-border p-0"
      >
        <Command shouldFilter={false}>
          <CommandInput
            value={query}
            onValueChange={setQuery}
            placeholder={t.contact.fields.countrySearch}
          />
          <CommandList className="max-h-64">
            <CommandEmpty>{t.contact.fields.countryEmpty}</CommandEmpty>
            <CommandGroup>
              {results.map((country) => (
                <CommandItem
                  key={country.code}
                  value={country.code}
                  onSelect={() => {
                    onChange(country.code);
                    setQuery("");
                    setOpen(false);
                  }}
                  className="rounded-none text-sm"
                >
                  <span className="truncate">
                    {label(country.code)} — +{country.dial}
                  </span>
                  {country.code === value ? (
                    <Check size={14} aria-hidden="true" className="ml-auto text-gold" />
                  ) : null}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
