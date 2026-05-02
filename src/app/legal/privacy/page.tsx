import type { Metadata } from "next";
import { brand } from "@/config/brand";
import LegalPageContent from "@/components/LegalPageContent";

export const metadata: Metadata = {
  title: `Privacy Policy | ${brand.name}`,
  description: `Privacy Policy for ${brand.name} — how we handle your personal data in accordance with Korean PIPA.`,
  robots: { index: true, follow: false },
};

export default function PrivacyPage() {
  return <LegalPageContent docKey="privacy" />;
}
