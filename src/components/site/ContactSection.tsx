import { AsYouType, isValidPhoneNumber, parsePhoneNumberFromString } from "libphonenumber-js";
import { Check, Copy, Instagram, MessageCircle } from "lucide-react";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { CountrySelect } from "./CountrySelect";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/config/siteConfig";
import { findCountry } from "@/data/countries";
import type { ContactInterest } from "@/data/types";
import { useI18n } from "@/i18n";
import { whatsappLink } from "@/lib/whatsapp";

const interestKeys: ContactInterest[] = [
  "beauty",
  "bsf",
  "universe",
  "consultoria",
  "palestra",
  "parcerias",
  "outro",
];

type FieldName = "name" | "email" | "phone" | "country" | "interest" | "message" | "consent";

export function ContactSection() {
  const { t, lang } = useI18n();
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "ready">("idle");
  const [preparedMessage, setPreparedMessage] = useState("");
  const [copied, setCopied] = useState(false);
  const [country, setCountry] = useState("");
  const [dialCountry, setDialCountry] = useState("");
  const [phone, setPhone] = useState("");
  const [consent, setConsent] = useState(false);

  function handleCountryChange(code: string) {
    setCountry(code);
    setDialCountry(code);
  }

  function handlePhoneChange(value: string) {
    const cleaned = value.replace(/[^\d\s().-]/g, "").replace(/\s{2,}/g, " ");
    const iso = findCountry(dialCountry)?.code;
    setPhone(iso ? new AsYouType(iso as never).input(cleaned) : cleaned);
  }

  const schema = z.object({
    name: z.string().trim().min(2, t.contact.errors.name).max(120),
    email: z.string().trim().email(t.contact.errors.email).max(200),
    country: z.string().min(2, t.contact.errors.country),
    interest: z.string().min(1, t.contact.errors.interest),
    message: z.string().trim().min(5, t.contact.errors.message).max(1200),
    consent: z.literal(true, { message: t.contact.errors.consent }),
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const parsed = schema.safeParse({
      name: String(data.get("name") ?? ""),
      email: String(data.get("email") ?? ""),
      country,
      interest: String(data.get("interest") ?? ""),
      message: String(data.get("message") ?? ""),
      consent,
    });

    const dial = findCountry(dialCountry);
    const e164 = dial
      ? parsePhoneNumberFromString(`+${dial.dial}${phone.replace(/\D/g, "")}`)?.number
      : undefined;
    const phoneValid = Boolean(dial && phone.trim() && e164 && isValidPhoneNumber(e164 as string));

    if (!parsed.success || !phoneValid) {
      const next: Partial<Record<FieldName, string>> = {};
      if (!parsed.success) {
        for (const issue of parsed.error.issues) {
          const key = issue.path[0] as FieldName;
          if (!next[key]) next[key] = issue.message;
        }
      }
      if (!phoneValid) next.phone = t.contact.errors.phoneInvalid;
      setErrors(next);
      setStatus("idle");
      return;
    }

    setErrors({});
    const v = parsed.data;
    const l = t.contact.labels;
    const subject = t.contact.interests[v.interest as ContactInterest] ?? v.interest;
    const body = [
      t.contact.intro,
      "",
      `${l.subject}: ${subject}`,
      `${l.name}: ${v.name}`,
      `${l.email}: ${v.email}`,
      `${l.country}: ${findCountry(v.country)?.names[lang] ?? v.country}`,
      `${l.phone}: ${e164}`,
      "",
      `${l.message}: ${v.message}`,
    ].join("\n");

    setPreparedMessage(body);
    setCopied(false);
    setStatus("ready");

    const whatsappUrl = whatsappLink(body);
    try {
      const openedWindow = window.open(whatsappUrl, "_blank");
      if (openedWindow) {
        openedWindow.opener = null;
      } else {
        window.location.href = whatsappUrl;
      }
    } catch {
      // mantém o usuário na página com o bloco de fallback visível
    }
  }

  async function copyMessage() {
    try {
      await navigator.clipboard.writeText(preparedMessage);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  const fieldClass = "mt-2";

  const socialEntries = [
    { label: t.contact.socials.main, ...siteConfig.socials.main },
    { label: t.contact.socials.beauty, ...siteConfig.socials.beauty },
    { label: t.contact.socials.universe, ...siteConfig.socials.universeBeauty },
  ];

  return (
    <section id="contato" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t.contact.eyebrow}
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <form
            noValidate
            onSubmit={handleSubmit}
            className="min-w-0 border border-border bg-background p-6 sm:p-9"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="min-w-0">
                <Label htmlFor="name">{t.contact.fields.name}</Label>
                <Input
                  id="name"
                  name="name"
                  autoComplete="name"
                  maxLength={120}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={fieldClass}
                />
                {errors.name ? (
                  <p id="name-error" role="alert" className="mt-1.5 text-xs text-destructive">
                    {errors.name}
                  </p>
                ) : null}
              </div>

              <div className="min-w-0">
                <Label htmlFor="email">{t.contact.fields.email}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  maxLength={200}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={fieldClass}
                />
                {errors.email ? (
                  <p id="email-error" role="alert" className="mt-1.5 text-xs text-destructive">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div className="min-w-0">
                <Label htmlFor="country">{t.contact.fields.country}</Label>
                <CountrySelect
                  id="country"
                  value={country}
                  onChange={handleCountryChange}
                  invalid={Boolean(errors.country)}
                  describedBy={errors.country ? "country-error" : undefined}
                />
                {errors.country ? (
                  <p id="country-error" role="alert" className="mt-1.5 text-xs text-destructive">
                    {errors.country}
                  </p>
                ) : null}
              </div>

              <div className="min-w-0">
                <Label htmlFor="phone">{t.contact.fields.phone}</Label>
                <div
                  className={`mt-2 flex h-11 min-w-0 items-stretch border border-input bg-background transition-colors focus-within:border-gold ${
                    errors.phone ? "border-destructive" : ""
                  }`}
                >
                  <div className="w-[5.5rem] shrink-0 border-r border-input">
                    <CountrySelect
                      id="phone-code"
                      variant="dial"
                      unstyled
                      value={dialCountry}
                      onChange={setDialCountry}
                      ariaLabel={t.contact.fields.phoneCode}
                      placeholder="+00"
                      invalid={Boolean(errors.phone)}
                      describedBy={errors.phone ? "phone-error" : undefined}
                    />
                  </div>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel-national"
                    maxLength={24}
                    value={phone}
                    onChange={(event) => handlePhoneChange(event.target.value)}
                    placeholder={t.contact.fields.phoneNumber}
                    aria-label={t.contact.fields.phoneNumber}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className="h-full min-w-0 flex-1 rounded-none border-0 bg-transparent shadow-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-gold/60"
                  />
                </div>
                {errors.phone ? (
                  <p id="phone-error" role="alert" className="mt-1.5 text-xs text-destructive">
                    {errors.phone}
                  </p>
                ) : null}
              </div>

              <div className="min-w-0 sm:col-span-2">
                <Label htmlFor="interest">{t.contact.fields.interest}</Label>
                <select
                  id="interest"
                  name="interest"
                  defaultValue=""
                  aria-invalid={Boolean(errors.interest)}
                  aria-describedby={errors.interest ? "interest-error" : undefined}
                  className="mt-2 h-10 w-full border border-input bg-background px-3 text-sm text-foreground focus-visible:outline-none"
                >
                  <option value="" disabled>
                    {t.contact.fields.interestPlaceholder}
                  </option>
                  {interestKeys.map((key) => (
                    <option key={key} value={key}>
                      {t.contact.interests[key]}
                    </option>
                  ))}
                </select>
                {errors.interest ? (
                  <p id="interest-error" role="alert" className="mt-1.5 text-xs text-destructive">
                    {errors.interest}
                  </p>
                ) : null}
              </div>

              <div className="min-w-0 sm:col-span-2">
                <Label htmlFor="message">{t.contact.fields.message}</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  maxLength={1200}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  className={fieldClass}
                />
                {errors.message ? (
                  <p id="message-error" role="alert" className="mt-1.5 text-xs text-destructive">
                    {errors.message}
                  </p>
                ) : null}
              </div>
            </div>

            <div className="mt-6 flex items-start gap-3">
              <Checkbox
                id="consent"
                name="consent"
                checked={consent}
                onCheckedChange={(value) => setConsent(value === true)}
                aria-describedby={errors.consent ? "consent-error" : undefined}
                className="mt-0.5"
              />
              <div className="min-w-0">
                <Label htmlFor="consent" className="text-sm font-normal leading-relaxed">
                  {t.contact.fields.consent}
                </Label>
                {errors.consent ? (
                  <p id="consent-error" role="alert" className="mt-1.5 text-xs text-destructive">
                    {errors.consent}
                  </p>
                ) : null}
              </div>
            </div>

            <Button
              type="submit"
              disabled={status === "sending"}
              className="btn-motion mt-8 w-full rounded-none bg-navy px-7 py-6 text-sm font-medium text-cream hover:bg-navy-soft sm:w-auto"
            >
              {status === "sending" ? t.contact.preparing : t.contact.submit}
            </Button>

            <div aria-live="polite" className="mt-5">
              {status === "ready" ? (
                <div className="border border-gold/40 bg-cream p-5 text-sm">
                  <p className="text-navy">{t.contact.ready}</p>
                  <p className="mt-2 text-muted-foreground">{t.contact.fallback}</p>
                  <pre className="mt-4 max-h-40 overflow-auto whitespace-pre-wrap break-words border border-border bg-background p-3 text-xs text-muted-foreground">
                    {preparedMessage}
                  </pre>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={copyMessage}
                      className="inline-flex items-center gap-2 border border-navy px-4 py-2 text-xs font-medium text-navy transition-colors hover:bg-navy hover:text-cream"
                    >
                      {copied ? (
                        <Check size={14} aria-hidden="true" />
                      ) : (
                        <Copy size={14} aria-hidden="true" />
                      )}
                      {copied ? t.contact.copied : t.contact.copy}
                    </button>
                    <a
                      href={whatsappLink(preparedMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 border border-gold bg-gold px-4 py-2 text-xs font-medium text-navy transition-colors hover:bg-gold-light"
                    >
                      {t.contact.openManually}
                    </a>
                  </div>
                </div>
              ) : null}
            </div>
          </form>

          <aside className="min-w-0 border border-border bg-background p-7">
            <h3 className="text-lg text-navy">{t.contact.directTitle}</h3>
            <div aria-hidden="true" className="gold-rule mt-3" />
            <ul className="mt-6 space-y-4 text-sm">
              <li>
                <a
                  href={whatsappLink(t.float.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-navy transition-colors hover:text-gold"
                >
                  <MessageCircle size={17} aria-hidden="true" className="text-gold" />
                  {siteConfig.whatsapp.display}
                </a>
              </li>
            </ul>

            <h3 className="mt-8 text-lg text-navy">{t.contact.socialsTitle}</h3>
            <div aria-hidden="true" className="gold-rule mt-3" />
            <ul className="mt-6 space-y-5 text-sm">
              {socialEntries.map((entry) => (
                <li key={entry.url} className="min-w-0">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
                    {entry.label}
                  </p>
                  <a
                    href={entry.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={t.contact.socialAria.replace("{brand}", entry.label)}
                    className="mt-1.5 inline-flex items-center gap-3 text-navy transition-colors hover:text-gold"
                  >
                    <Instagram size={17} aria-hidden="true" className="text-gold" />
                    {entry.handle}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  );
}
