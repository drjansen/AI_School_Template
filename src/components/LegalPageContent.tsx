"use client";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/context/LanguageContext";

type Section = { heading: string; body: string[] };
type LegalDoc = {
  title: string;
  effective: string;
  backHome: string;
  sections: Section[];
};

interface LegalPageContentProps {
  docKey: "terms" | "privacy";
}

export default function LegalPageContent({ docKey }: LegalPageContentProps) {
  const { t } = useLanguage();
  const doc: LegalDoc = t.legal[docKey];

  return (
    <>
      <Navbar />
      <main className="relative z-10 min-h-screen">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-10 pt-32 pb-24">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center text-xs font-semibold uppercase tracking-widest mb-10 transition-colors font-sans-ui"
            style={{ color: "rgba(212,175,55,0.65)" }}
          >
            {doc.backHome}
          </Link>

          {/* Title */}
          <h1
            className="font-serif-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-3 leading-tight"
          >
            {doc.title}
          </h1>
          <p className="text-white/35 text-sm mb-14 font-sans-ui font-light">
            {doc.effective}
          </p>

          {/* Divider */}
          <div
            className="h-px mb-14"
            style={{ background: "linear-gradient(90deg, rgba(212,175,55,0.35) 0%, transparent 100%)" }}
          />

          {/* Sections */}
          <div className="space-y-10">
            {doc.sections.map((section, i) => (
              <section key={i}>
                <h2
                  className="text-base font-semibold mb-4 font-sans-ui"
                  style={{ color: "rgba(212,175,55,0.80)" }}
                >
                  {section.heading}
                </h2>
                <div className="space-y-2">
                  {section.body.map((para, j) => (
                    <p
                      key={j}
                      className="text-white/60 text-sm leading-relaxed font-light font-sans-ui"
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Bottom back link */}
          <div
            className="border-t mt-16 pt-8"
            style={{ borderTopColor: "rgba(212,175,55,0.12)" }}
          >
            <Link
              href="/"
              className="text-xs font-semibold uppercase tracking-widest transition-colors font-sans-ui"
              style={{ color: "rgba(212,175,55,0.55)" }}
            >
              {doc.backHome}
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
