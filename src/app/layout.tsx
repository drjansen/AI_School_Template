import type { Metadata } from "next";
import "./globals.css";
import { brand } from "@/config/brand";
import GlobalBackground from "@/components/GlobalBackground";
import GlobalDebug from "@/components/GlobalDebug";

export const metadata: Metadata = {
  title: `${brand.name} — ${brand.tagline}`,
  description: brand.description,
  keywords: ["AI school", "K-12 academy", "South Korea", "international school", "AI curriculum", "Western university", "Eldarin School"],
  openGraph: {
    title: `${brand.name} — ${brand.tagline}`,
    description: brand.description,
    type: "website",
    url: `https://${brand.domain}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased text-slate-100" style={{ backgroundColor: "#05080f" }}>
        {/* Site-wide animated WebGL background — fixed behind all content */}
        <GlobalBackground />
        {children}
        {/* Dev-only background mode indicator — activate with ?debug=bg */}
        <GlobalDebug />
      </body>
    </html>
  );
}
