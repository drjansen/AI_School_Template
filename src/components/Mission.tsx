"use client";
import { useLanguage } from "@/context/LanguageContext";

const pillarIcons = [
  <svg key="ai" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
  </svg>,
  <svg key="book" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
  </svg>,
  <svg key="shield" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>,
  <svg key="globe" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
  </svg>,
];

const pillarAccents = ["#d4af37", "#7b9eff", "#a78bfa", "#34d399"];

export default function Mission() {
  const { t } = useLanguage();

  return (
    <section
      id="mission"
      className="py-28 lg:py-36 section-dark"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="eyebrow-gold mb-5">{t.mission.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            {t.mission.h2a}{" "}
            <span className="text-gradient-gold">{t.mission.h2b}</span>
          </h2>
          <p className="text-white/45 text-lg leading-relaxed font-light font-sans-ui">
            {t.mission.subheading}
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {t.mission.pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="card-gold-trim rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `${pillarAccents[i]}18`,
                  color: pillarAccents[i],
                  border: `1px solid ${pillarAccents[i]}30`,
                }}
              >
                {pillarIcons[i]}
              </div>
              <h3 className="text-white font-semibold text-base mb-2.5 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed font-light font-sans-ui">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Portrait of a Graduate */}
        <div
          className="mt-16 relative overflow-hidden rounded-3xl p-10 lg:p-14 deco-frame"
          style={{
            background:
              "linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(12,20,52,0.95) 60%, rgba(8,18,42,0.98) 100%)",
            border: "1px solid rgba(212,175,55,0.18)",
          }}
        >
          {/* Circuit-dot grid */}
          <div
            className="absolute inset-0 opacity-[0.035] circuit-grid"
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-4xl">
            <p className="eyebrow-gold mb-5">{t.mission.graduate.eyebrow}</p>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8 tracking-tight">
              {t.mission.graduate.h3a}{" "}
              <span className="text-gradient-gold">{t.mission.graduate.h3b}</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {t.mission.graduate.traits.map((trait) => (
                <div key={trait} className="flex items-center gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#d4af37" }}
                    aria-hidden="true"
                  />
                  <span className="text-white/70 text-sm font-medium font-sans-ui">{trait}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
