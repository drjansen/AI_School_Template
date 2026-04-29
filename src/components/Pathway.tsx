const levels = [
  {
    badge: "Elementary",
    grades: "Grades 1–6",
    color: "from-teal-500 to-cyan-500",
    borderColor: "border-teal-500/30",
    bgColor: "bg-teal-500/10",
    accentColor: "text-teal-400",
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
    color: "from-sky-500 to-indigo-600",
    borderColor: "border-sky-500/30",
    bgColor: "bg-sky-500/10",
    accentColor: "text-sky-400",
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
    color: "from-amber-500 to-orange-500",
    borderColor: "border-amber-500/30",
    bgColor: "bg-amber-500/10",
    accentColor: "text-amber-400",
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
    <section id="pathway" className="py-24 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">
            The Complete K–12 Pathway
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Thirteen years.{" "}
            <span className="text-gradient">One unified mission.</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Every stage of learning at Eldarin School is intentionally connected — what a
            Grade 3 student learns about data and patterns directly supports what a Grade 11
            student does in their AI Modeling Lab.
          </p>
        </div>

        {/* Levels */}
        <div className="space-y-8">
          {levels.map((level, index) => (
            <div
              key={level.badge}
              className={`relative overflow-hidden rounded-3xl border ${level.borderColor} bg-slate-900/60 p-8 lg:p-10`}
            >
              <div className="lg:flex gap-10">
                {/* Left */}
                <div className="lg:w-72 flex-shrink-0 mb-6 lg:mb-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${level.color}`}
                    >
                      {level.badge}
                    </span>
                    <span className={`text-sm font-medium ${level.accentColor}`}>{level.grades}</span>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{level.description}</p>
                  <div className={`mt-4 p-3 rounded-xl ${level.bgColor} border ${level.borderColor}`}>
                    <p className="text-xs text-slate-300 font-medium leading-relaxed">
                      <span className={`font-semibold ${level.accentColor}`}>Outcome: </span>
                      {level.outcome}
                    </p>
                  </div>
                </div>

                {/* Right: features */}
                <div className="flex-1 grid sm:grid-cols-2 gap-3">
                  {level.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <svg
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${level.accentColor}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step number */}
              <div
                className="absolute top-6 right-6 lg:top-8 lg:right-8 w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-500 font-bold text-sm"
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
