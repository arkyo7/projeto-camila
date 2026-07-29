import type { ReactNode } from "react";
import { I18nProvider } from "@/i18n";
import { Footer } from "./Footer";
import { Header } from "./Header";
export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <I18nProvider>
      <div className="flex min-h-screen flex-col bg-background">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </I18nProvider>
  );
}
