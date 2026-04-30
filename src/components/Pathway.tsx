"use client";
import { useLanguage } from "@/context/LanguageContext";

const pathwayMeta = [
  {
    accentColor: "#d4af37",
    borderColor: "rgba(212,175,55,0.22)",
    bgAccent: "rgba(212,175,55,0.05)",
    korean: "K문화 / K-콘텐츠 계열",
    universities: [
      { ko: "서원대학교", en: "Seowon University" },
      { ko: "충북대학교", en: "Chungbuk National University" },
      { ko: "신라대학교", en: "Silla University" },
      { ko: "유원대학교", en: "U1 University" },
      { ko: "숙명여자대학교", en: "Sookmyung Women's University" },
      { ko: "동덕여자대학교", en: "Dongduk Women's University" },
      { ko: "경희대학교", en: "Kyung Hee University" },
    ],
  },
  {
    accentColor: "#7b9eff",
    borderColor: "rgba(123,158,255,0.22)",
    bgAccent: "rgba(123,158,255,0.05)",
    korean: "AI / 인공지능 계열",
    universities: [
      { ko: "고려대학교", en: "Korea University" },
      { ko: "중앙대학교", en: "Chung-Ang University" },
      { ko: "서울시립대학교", en: "University of Seoul" },
      { ko: "서강대학교", en: "Sogang University" },
      { ko: "숙명여자대학교", en: "Sookmyung Women's University" },
      { ko: "이화여자대학교", en: "Ewha Womans University" },
      { ko: "세종대학교", en: "Sejong University" },
    ],
  },
  {
    accentColor: "#a78bfa",
    borderColor: "rgba(167,139,250,0.22)",
    bgAccent: "rgba(167,139,250,0.05)",
    korean: "AI × K-콘텐츠 융합",
    universities: [
      { ko: "경기대학교", en: "Kyonggi University" },
      { ko: "서울여자대학교", en: "Seoul Women's University" },
      { ko: "서경대학교", en: "Seokyeong University" },
      { ko: "한양대학교 ERICA", en: "Hanyang University ERICA" },
      { ko: "영산대학교", en: "Youngsan University" },
    ],
  },
];

export default function Pathway() {
  const { t } = useLanguage();

  return (
    <section id="pathway" className="py-28 lg:py-36 section-mid">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="eyebrow-gold mb-5">{t.pathway.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            {t.pathway.h2a}{" "}
            <span className="text-gradient-gold">{t.pathway.h2b}</span>
          </h2>
          <p className="text-white/45 text-lg font-light leading-relaxed font-sans-ui">
            {t.pathway.sub}
          </p>
        </div>

        {/* Compliance note */}
        <div
          className="mb-10 rounded-xl px-5 py-3.5 flex items-start gap-3"
          style={{
            background: "rgba(212,175,55,0.05)",
            border: "1px solid rgba(212,175,55,0.18)",
          }}
          role="note"
          aria-label={t.pathway.complianceLabel}
        >
          <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#d4af37" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
          </svg>
          <p className="text-amber-200/70 text-sm font-light font-sans-ui">
            <strong className="font-semibold text-amber-200/90">{t.pathway.complianceLabel}</strong>{" "}
            {t.pathway.complianceNote}
          </p>
        </div>

        {/* Pathways */}
        <div className="space-y-5">
          {t.pathway.pathways.map((pathway, index) => {
            const meta = pathwayMeta[index];
            return (
              <div
                key={pathway.badge}
                className="relative overflow-hidden rounded-2xl p-8 lg:p-10"
                style={{
                  background: `linear-gradient(135deg, ${meta.bgAccent} 0%, rgba(8,18,42,0.92) 100%)`,
                  border: `1px solid ${meta.borderColor}`,
                }}
              >
                <div className="lg:flex gap-10">
                  {/* Left */}
                  <div className="lg:w-80 flex-shrink-0 mb-6 lg:mb-0">
                    <div className="flex items-center gap-3 mb-3 flex-wrap">
                      <span
                        className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ background: `${meta.accentColor}22`, color: meta.accentColor, border: `1px solid ${meta.accentColor}40` }}
                      >
                        {pathway.badge}
                      </span>
                    </div>
                    <p className="text-white/30 text-xs mb-2 font-sans-ui tracking-wide">{meta.korean}</p>
                    <p className="text-white/45 text-sm leading-relaxed font-light font-sans-ui">
                      {pathway.description}
                    </p>
                    <div
                      className="mt-4 p-3.5 rounded-xl"
                      style={{
                        background: `${meta.accentColor}08`,
                        border: `1px solid ${meta.accentColor}22`,
                      }}
                    >
                      <p className="text-xs text-white/60 leading-relaxed font-sans-ui">
                        <span
                          className="font-semibold"
                          style={{ color: meta.accentColor }}
                        >
                          {t.pathway.alignmentLabel}{" "}
                        </span>
                        {pathway.outcome}
                      </p>
                    </div>
                    {/* Sample universities */}
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {meta.universities.map((uni) => (
                        <span
                          key={uni.ko}
                          lang="ko"
                          title={uni.en}
                          aria-label={`${uni.ko} (${uni.en})`}
                          className="text-xs px-2 py-0.5 rounded-md font-sans-ui"
                          style={{
                            background: "rgba(255,255,255,0.04)",
                            border: "1px solid rgba(255,255,255,0.07)",
                            color: "rgba(255,255,255,0.40)",
                          }}
                        >
                          {uni.ko}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right: features */}
                  <div className="flex-1 grid sm:grid-cols-2 gap-2.5">
                    {pathway.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2.5">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ background: meta.accentColor }}
                          aria-hidden="true"
                        />
                        <span className="text-white/60 text-sm font-light font-sans-ui">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step number */}
                <div
                  className="absolute top-6 right-6 lg:top-8 lg:right-8 w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold font-sans-ui"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.25)",
                  }}
                  aria-hidden="true"
                >
                  0{index + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom disclaimer */}
        <p className="text-center text-white/20 text-xs mt-8 font-sans-ui">
          {t.pathway.disclaimer}
        </p>
      </div>
    </section>
  );
}
