import type { Metadata } from "next";
import "./globals.css";
import { brand } from "@/config/brand";
import GlobalBackground from "@/components/GlobalBackground";
import GlobalDebug from "@/components/GlobalDebug";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: `${brand.name} — ${brand.tagline}`,
  description: brand.description,
  keywords: ["AI education", "K-culture", "alternative educational institution", "South Korea", "AI curriculum", "Korean university pathways", "Eldarin Institute", "eldarin.ai"],
  openGraph: {
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.description,
    type: "website",
    url: `https://${brand.domain}`,
  },
  alternates: {
    canonical: `https://${brand.domain}`,
    languages: {
      ko: `https://${brand.domain}`,
      en: `https://${brand.domain}`,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Default lang="ko" (Korean is primary). LanguageProvider updates
  // document.documentElement.lang on the client when the user toggles.
  return (
    <html lang="ko" className="scroll-smooth">
      <body className="font-sans antialiased text-slate-100" style={{ backgroundColor: "#08122a" }}>
        <LanguageProvider>
          {/* Site-wide animated WebGL background — fixed behind all content */}
          <GlobalBackground />
          {children}
          {/* Dev-only background mode indicator — activate with ?debug=bg */}
          <GlobalDebug />
        </LanguageProvider>
      </body>
    </html>
  );
}
