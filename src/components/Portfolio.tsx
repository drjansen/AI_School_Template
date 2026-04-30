const stages = [
  {
    grade: "Grades 1–3",
    title: "Wonder Portfolio",
    accentColor: "#67e8f9",
    borderColor: "rgba(103,232,249,0.18)",
    bgColor: "rgba(103,232,249,0.04)",
    items: [
      "Personal reading logs and reflections",
      "Math investigation journals",
      "First science observation reports",
      "Creative writing and K-culture awareness samples",
    ],
  },
  {
    grade: "Grades 4–6",
    title: "Explorer Portfolio",
    accentColor: "#7b9eff",
    borderColor: "rgba(123,158,255,0.18)",
    bgColor: "rgba(123,158,255,0.04)",
    items: [
      "Cross-subject project documentation",
      "Bilingual presentations (Korean + English)",
      "Community contribution reflections",
      "First K-culture observation and analysis",
    ],
  },
  {
    grade: "Grades 7–9",
    title: "Builder Portfolio",
    accentColor: "#a78bfa",
    borderColor: "rgba(167,139,250,0.18)",
    bgColor: "rgba(167,139,250,0.04)",
    items: [
      "Research essays with citations and AI-disclosure notes",
      "AI-assisted project logs with integrity reflections",
      "K-culture studio production samples",
      "Leadership and collaboration evidence",
    ],
  },
  {
    grade: "Grades 10–11",
    title: "Scholar Portfolio",
    accentColor: "#fbbf24",
    borderColor: "rgba(251,191,36,0.18)",
    bgColor: "rgba(251,191,36,0.04)",
    items: [
      "Pre-capstone independent study and research",
      "Advanced academic project work",
      "Adaptive literacy growth evidence (ALSD records)",
      "K-culture and AI industry engagement documentation",
    ],
  },
  {
    grade: "Grade 12",
    title: "Capstone Thesis",
    accentColor: "#34d399",
    borderColor: "rgba(52,211,153,0.30)",
    bgColor: "rgba(52,211,153,0.05)",
    items: [
      "Original research or creative thesis (5,000–10,000 words)",
      "AI tool use documented and ethically justified",
      "Oral defense before faculty panel",
      "Final portfolio submitted as evidence of academic growth",
    ],
    highlight: true,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-28 lg:py-36 section-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="eyebrow-gold mb-5">Student Portfolio & Capstone</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Years of learning.{" "}
            <span className="text-gradient-gold">One defining portfolio.</span>
          </h2>
          <p className="text-white/45 text-lg font-light leading-relaxed font-sans-ui">
            From the first creative writing sample to the original capstone thesis,
            every Eldarin student builds a longitudinal portfolio documenting authentic
            academic growth, character development, and K-culture contribution.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px hidden lg:block"
            style={{
              background: "linear-gradient(to bottom, rgba(212,175,55,0.35), rgba(123,158,255,0.25), rgba(52,211,153,0.30))",
            }}
            aria-hidden="true"
          />

          <div className="space-y-5 lg:pl-12">
            {stages.map((stage) => (
              <div
                key={stage.grade}
                className="relative rounded-2xl p-6 lg:p-8"
                style={{
                  background: stage.bgColor,
                  border: `1px solid ${stage.borderColor}`,
                  boxShadow: stage.highlight
                    ? `0 0 0 1px ${stage.accentColor}30, 0 4px 24px ${stage.accentColor}10`
                    : "none",
                }}
              >
                {/* Dot on timeline */}
                <div
                  className="absolute -left-16 top-8 w-3.5 h-3.5 rounded-full hidden lg:block"
                  style={{
                    background: stage.highlight ? stage.accentColor : "rgba(255,255,255,0.15)",
                    border: "2px solid rgba(8,18,42,0.9)",
                  }}
                  aria-hidden="true"
                />

                <div className="lg:flex gap-8 items-start">
                  <div className="lg:w-48 flex-shrink-0 mb-4 lg:mb-0">
                    <div
                      className="text-xs font-semibold uppercase tracking-widest mb-1.5 font-sans-ui"
                      style={{ color: stage.accentColor }}
                    >
                      {stage.grade}
                    </div>
                    <h3 className="text-white font-bold text-lg">{stage.title}</h3>
                    {stage.highlight && (
                      <span
                        className="inline-block mt-2 text-xs px-2.5 py-0.5 rounded-full font-semibold font-sans-ui"
                        style={{
                          background: `${stage.accentColor}15`,
                          color: stage.accentColor,
                          border: `1px solid ${stage.accentColor}35`,
                        }}
                      >
                        Capstone Submission
                      </span>
                    )}
                  </div>
                  <ul className="flex-1 grid sm:grid-cols-2 gap-2">
                    {stage.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                          style={{ background: stage.accentColor }}
                          aria-hidden="true"
                        />
                        <span className="text-white/55 text-sm font-light font-sans-ui">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
