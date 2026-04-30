"use client";
import { useLanguage } from "@/context/LanguageContext";

const coursesMeta = [
  { icon: "🎬", iconColor: "#d4af37", tagColor: { bg: "rgba(212,175,55,0.08)", text: "#d4af37", border: "rgba(212,175,55,0.25)" } },
  { icon: "📖", iconColor: "#34d399", tagColor: { bg: "rgba(52,211,153,0.08)", text: "#34d399", border: "rgba(52,211,153,0.22)" } },
  { icon: "∫",  iconColor: "#7b9eff", tagColor: { bg: "rgba(123,158,255,0.08)", text: "#7b9eff", border: "rgba(123,158,255,0.22)" } },
  { icon: "✍", iconColor: "#67e8f9", tagColor: { bg: "rgba(103,232,249,0.08)", text: "#67e8f9", border: "rgba(103,232,249,0.22)" } },
  { icon: "📜", iconColor: "#a78bfa", tagColor: { bg: "rgba(167,139,250,0.08)", text: "#a78bfa", border: "rgba(167,139,250,0.22)" } },
  { icon: "⚙️", iconColor: "#67e8f9", tagColor: { bg: "rgba(103,232,249,0.08)", text: "#67e8f9", border: "rgba(103,232,249,0.22)" } },
];

export default function Curriculum() {
  const { t } = useLanguage();

  return (
    <section id="curriculum" className="py-28 lg:py-36 section-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="eyebrow-gold mb-5">{t.curriculum.eyebrow}</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            {t.curriculum.h2a}{" "}
            <span className="text-gradient-gold">{t.curriculum.h2b}</span>
          </h2>
          <p className="text-white/45 text-lg font-light leading-relaxed font-sans-ui">
            {t.curriculum.sub}
          </p>
        </div>

        {/* Moodle + ALSD callout */}
        <div
          className="mb-12 rounded-2xl p-6 lg:p-8 grid sm:grid-cols-2 gap-6"
          style={{
            background: "rgba(12,20,52,0.80)",
            border: "1px solid rgba(212,175,55,0.18)",
          }}
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-base"
                style={{ background: "rgba(212,175,55,0.10)", border: "1px solid rgba(212,175,55,0.25)" }}
                aria-hidden="true"
              >
                🎓
              </div>
              <h3 className="text-white font-semibold text-sm">{t.curriculum.moodleTitle}</h3>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-light font-sans-ui">
              {t.curriculum.moodleDesc}
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-base"
                style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)" }}
                aria-hidden="true"
              >
                📈
              </div>
              <h3 className="text-white font-semibold text-sm">{t.curriculum.alsdTitle}</h3>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-light font-sans-ui">
              {t.curriculum.alsdDesc}
            </p>
          </div>
        </div>

        {/* Course grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {t.curriculum.courses.map((course, i) => {
            const meta = coursesMeta[i];
            return (
              <article
                key={course.course}
                className="card-glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
              >
                {/* Icon + tag */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                    style={{
                      background: `${meta.iconColor}12`,
                      border: `1px solid ${meta.iconColor}28`,
                    }}
                    aria-hidden="true"
                  >
                    {meta.icon}
                  </div>
                  <span
                    className="text-xs font-semibold px-2.5 py-1 rounded-full font-sans-ui"
                    style={{
                      background: meta.tagColor.bg,
                      color: meta.tagColor.text,
                      border: `1px solid ${meta.tagColor.border}`,
                    }}
                  >
                    {course.tag}
                  </span>
                </div>

                <div className="text-xs text-white/25 font-medium mb-1 tracking-wide font-sans-ui">
                  {course.level}
                </div>
                <div
                  className="text-xs font-semibold uppercase tracking-widest mb-2 font-sans-ui"
                  style={{ color: meta.iconColor }}
                >
                  {course.subject}
                </div>
                <h3 className="text-white font-semibold text-sm mb-3 leading-snug">
                  {course.course}
                </h3>
                <p className="text-white/40 text-sm leading-relaxed mb-5 flex-1 font-light font-sans-ui">
                  {course.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1.5">
                  {course.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-0.5 rounded-md text-white/40 font-sans-ui"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.06)",
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
