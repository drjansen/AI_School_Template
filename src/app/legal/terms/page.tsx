import type { Metadata } from "next";
import { brand } from "@/config/brand";
import LegalPageContent from "@/components/LegalPageContent";

export const metadata: Metadata = {
  title: `Terms of Service | ${brand.name}`,
  description: `Terms of Service and trademark notice for ${brand.name} — Alternative Educational Institution, Seoul, Republic of Korea.`,
  robots: { index: true, follow: false },
};

export default function TermsPage() {
  return <LegalPageContent docKey="terms" />;
}
