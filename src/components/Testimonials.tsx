"use client";
import { useLanguage } from "@/context/LanguageContext";

const testimonialMeta = [
  { name: "Ji-yeon Park", role: "graduate" as const, initials: "JP", accentColor: "#d4af37" },
  { name: "Hyun-soo Lim", role: "parent" as const, initials: "HL", accentColor: "#67e8f9" },
  { name: "Min-jun Choi", role: "student" as const, initials: "MC", accentColor: "#7b9eff" },
  { name: "Soo-jin Kim", role: "parent" as const, initials: "SK", accentColor: "#34d399" },
  { name: "Da-eun Yoon", role: "student" as const, initials: "DY", accentColor: "#a78bfa" },
  { name: "Jae-won Oh", role: "parent" as const, initials: "JO", accentColor: "#fbbf24" },
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section id="testimonials" className="py-28 lg:py-36 section-mid">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="eyebrow-gold mb-5">{t.testimonials.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            {t.testimonials.h2a}{" "}
            <span className="text-gradient-gold">{t.testimonials.h2b}</span>
          </h2>
          <p className="text-white/25 text-sm italic font-sans-ui">
            {t.testimonials.disclaimerShort}
          </p>
        </div>

        {/* Disclaimer banner */}
        <div
          className="mb-10 rounded-xl px-5 py-3.5 flex items-start gap-3"
          style={{
            background: "rgba(212,175,55,0.05)",
            border: "1px solid rgba(212,175,55,0.18)",
          }}
          role="note"
          aria-label={t.testimonials.noteLabel}
        >
          <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#d4af37" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
          </svg>
          <p className="text-amber-200/60 text-sm font-light font-sans-ui">
            <strong className="font-semibold text-amber-200/80">{t.testimonials.noteLabel}:</strong>{" "}
            {t.testimonials.noteFull}
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonialMeta.map((meta, i) => (
            <figure
              key={meta.name}
              className="card-glass rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label={t.testimonials.starsLabel} role="img">
                {Array.from({ length: 5 }).map((_, j) => (
                  <svg key={j} className="w-3.5 h-3.5" style={{ color: "#d4af37" }} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-white/50 text-sm leading-relaxed italic flex-1 mb-5 font-light font-sans-ui">
                &ldquo;{t.testimonials.quotes[i]}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 font-sans-ui"
                  style={{
                    background: `${meta.accentColor}20`,
                    border: `1px solid ${meta.accentColor}40`,
                    color: meta.accentColor,
                  }}
                  aria-hidden="true"
                >
                  {meta.initials}
                </div>
                <div>
                  <div className="text-white/80 text-sm font-semibold">{meta.name}</div>
                  <div className="text-white/30 text-xs font-sans-ui">{t.testimonials.roles[meta.role]}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
