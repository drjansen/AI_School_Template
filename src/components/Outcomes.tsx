"use client";
import { useLanguage } from "@/context/LanguageContext";

const layerAccents = ["#d4af37", "#7b9eff", "#67e8f9", "#34d399", "#a78bfa", "#fbbf24"];
const layerIcons = ["📚", "✅", "🤖", "📈", "🌟", "🏛"];

export default function Outcomes() {
  const { t } = useLanguage();

  return (
    <section id="outcomes" className="py-28 lg:py-36 section-mid">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="eyebrow-gold mb-5">{t.outcomes.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            {t.outcomes.h2a}{" "}
            <span className="text-gradient-gold">{t.outcomes.h2b}</span>
          </h2>
          <p className="text-white/45 text-lg font-light leading-relaxed font-sans-ui">
            {t.outcomes.sub}
          </p>
        </div>

        {/* Operating layers grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {t.outcomes.layers.map((layer, i) => (
            <div
              key={layer.title}
              className="card-glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                style={{
                  background: `${layerAccents[i]}10`,
                  border: `1px solid ${layerAccents[i]}25`,
                }}
                aria-hidden="true"
              >
                {layerIcons[i]}
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{layer.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-light font-sans-ui">{layer.description}</p>
            </div>
          ))}
        </div>

        {/* KPI Dashboard */}
        <div
          className="rounded-2xl p-8 lg:p-12 deco-frame"
          style={{
            background: "rgba(12,20,52,0.85)",
            border: "1px solid rgba(212,175,55,0.15)",
          }}
        >
          <p className="eyebrow-gold mb-6">{t.outcomes.kpiEyebrow}</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 tracking-tight">
            {t.outcomes.kpiH3a}{" "}
            <span className="text-gradient-gold">{t.outcomes.kpiH3b}</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {t.outcomes.kpis.map((kpi) => (
              <div key={kpi} className="flex items-start gap-3">
                <div
                  className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                  style={{ background: "#d4af37" }}
                  aria-hidden="true"
                />
                <span className="text-white/55 text-sm font-light font-sans-ui">{kpi}</span>
              </div>
            ))}
          </div>
          <p className="text-white/20 text-xs mt-8 font-sans-ui">
            {t.outcomes.kpiFootnote}
          </p>
        </div>
      </div>
    </section>
  );
}
