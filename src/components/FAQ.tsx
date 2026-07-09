"use client";
import { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 lg:py-36 section-dark">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="eyebrow-gold mb-5">{t.faq.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            {t.faq.h2a}{" "}
            <span className="text-gradient-gold">{t.faq.h2b}</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2" role="list">
          {t.faq.items.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden transition-colors"
              style={{
                border: `1px solid ${openIndex === index ? "rgba(212,175,55,0.28)" : "rgba(255,255,255,0.06)"}`,
                background: openIndex === index
                  ? "rgba(212,175,55,0.04)"
                  : "rgba(12,20,52,0.60)",
              }}
              role="listitem"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
                aria-expanded={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white/80 font-medium text-sm leading-relaxed font-sans-ui">
                  {faq.q}
                </span>
                <svg
                  className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  style={{ color: openIndex === index ? "#d4af37" : "rgba(255,255,255,0.30)" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-white/40 text-sm leading-relaxed font-light font-sans-ui">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
