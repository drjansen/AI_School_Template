const levels = [
  {
    badge: "Elementary",
    grades: "Grades 1–6",
    accentColor: "#67e8f9",
    borderColor: "rgba(103,232,249,0.18)",
    bgAccent: "rgba(103,232,249,0.05)",
    description:
      "Building curiosity, language foundations, and a first introduction to computational thinking. Children develop bilingual literacy, mathematical intuition, and a wonder-first approach to learning.",
    features: [
      "Korean–English bilingual immersion",
      "STEM exploration through play and projects",
      "Introduction to logical and computational thinking",
      "AI Awareness: What is AI? How does it help people?",
      "Character and values development",
      "Reading, writing, and communication foundations",
    ],
    outcome: "Students enter middle school as confident readers, curious thinkers, and early AI-aware learners.",
  },
  {
    badge: "Middle School",
    grades: "Grades 7–9",
    accentColor: "#7b9eff",
    borderColor: "rgba(123,158,255,0.18)",
    bgAccent: "rgba(123,158,255,0.05)",
    description:
      "Deepening subject mastery while introducing applied AI across disciplines. Students begin research methodology, academic writing, and use AI tools with guided ethical oversight.",
    features: [
      "Integrated STEM + AI Lab modules",
      "Academic essay and research writing",
      "Pre-AP subject preparation",
      "AI Tools for Research: citation integrity and bias awareness",
      "Introduction to data literacy and basic statistics",
      "Community leadership and global citizenship projects",
    ],
    outcome: "Students enter high school with strong academic fundamentals and responsible AI habits.",
  },
  {
    badge: "High School",
    grades: "Grades 10–12",
    accentColor: "#a78bfa",
    borderColor: "rgba(167,139,250,0.18)",
    bgAccent: "rgba(167,139,250,0.05)",
    description:
      "Intensive university-preparation with AP-equivalent courses, AI-integrated capstone research, university counseling, and a senior thesis project that sets graduates apart from every other applicant.",
    features: [
      "Applied Calculus AB/BC + AI Modeling Lab",
      "Applied English Literature + AI Rhetoric Studio",
      "AP-equivalent science and humanities tracks",
      "University counseling from Grade 10",
      "Capstone senior thesis with original research",
      "Standardized test preparation (SAT, TOEFL, IELTS)",
      "Interview and personal statement coaching",
    ],
    outcome: "Graduates apply to and attend top-tier universities in the US, UK, Canada, and Australia.",
  },
];

export default function Pathway() {
  return (
    <section id="pathway" className="py-28 lg:py-36 section-mid">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="eyebrow mb-5">The Complete K–12 Pathway</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Thirteen years.{" "}
            <span className="text-gradient">One unified mission.</span>
          </h2>
          <p className="text-white/45 text-lg font-light leading-relaxed">
            Every stage of learning at Eldarin School is intentionally connected — what a
            Grade 3 student learns about data and patterns directly supports what a Grade 11
            student does in their AI Modeling Lab.
          </p>
        </div>

        {/* Levels */}
        <div className="space-y-5">
          {levels.map((level, index) => (
            <div
              key={level.badge}
              className="relative overflow-hidden rounded-2xl p-8 lg:p-10"
              style={{
                background: `linear-gradient(135deg, ${level.bgAccent} 0%, rgba(9,13,24,0.92) 100%)`,
                border: `1px solid ${level.borderColor}`,
              }}
            >
              <div className="lg:flex gap-10">
                {/* Left */}
                <div className="lg:w-72 flex-shrink-0 mb-6 lg:mb-0">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold text-white"
                      style={{ background: `${level.accentColor}25`, color: level.accentColor, border: `1px solid ${level.accentColor}40` }}
                    >
                      {level.badge}
                    </span>
                    <span
                      className="text-sm font-medium"
                      style={{ color: level.accentColor }}
                    >
                      {level.grades}
                    </span>
                  </div>
                  <p className="text-white/45 text-sm leading-relaxed font-light">
                    {level.description}
                  </p>
                  <div
                    className="mt-4 p-3.5 rounded-xl"
                    style={{
                      background: `${level.accentColor}0c`,
                      border: `1px solid ${level.accentColor}28`,
                    }}
                  >
                    <p className="text-xs text-white/60 leading-relaxed">
                      <span
                        className="font-semibold"
                        style={{ color: level.accentColor }}
                      >
                        Outcome:{" "}
                      </span>
                      {level.outcome}
                    </p>
                  </div>
                </div>

                {/* Right: features */}
                <div className="flex-1 grid sm:grid-cols-2 gap-2.5">
                  {level.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: level.accentColor }}
                        aria-hidden="true"
                      />
                      <span className="text-white/60 text-sm font-light">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step number */}
              <div
                className="absolute top-6 right-6 lg:top-8 lg:right-8 w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold"
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
          ))}
        </div>
      </div>
    </section>
  );
}
