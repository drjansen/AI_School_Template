const stages = [
  {
    grade: "Grades 1–3",
    title: "Wonder Portfolio",
    color: "border-teal-500/40 bg-teal-500/5",
    accent: "text-teal-400",
    items: [
      "Personal reading logs and reflections",
      "Math investigation journals",
      "First science observation reports",
      "Creative writing samples",
    ],
  },
  {
    grade: "Grades 4–6",
    title: "Explorer Portfolio",
    color: "border-cyan-500/40 bg-cyan-500/5",
    accent: "text-cyan-400",
    items: [
      "Cross-subject project documentation",
      "First bilingual presentations",
      "Community service reflection",
      "Initial computational thinking exercises",
    ],
  },
  {
    grade: "Grades 7–9",
    title: "Builder Portfolio",
    color: "border-violet-500/40 bg-violet-500/5",
    accent: "text-violet-400",
    items: [
      "Research essays with citations",
      "AI-assisted project logs with integrity reflections",
      "STEM lab reports",
      "Leadership and collaboration evidence",
    ],
  },
  {
    grade: "Grades 10–11",
    title: "Scholar Portfolio",
    color: "border-amber-500/40 bg-amber-500/5",
    accent: "text-amber-400",
    items: [
      "Pre-capstone independent study",
      "AP-equivalent project work",
      "University application drafts",
      "Extracurricular and leadership documentation",
    ],
  },
  {
    grade: "Grade 12",
    title: "Capstone Thesis",
    color: "border-rose-500/40 bg-rose-500/5",
    accent: "text-rose-400",
    items: [
      "Original research or creative thesis (5,000–10,000 words)",
      "AI tool use documented and ethically justified",
      "Oral defense before faculty panel",
      "Published to university application portfolio",
    ],
    highlight: true,
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Student Portfolio & Capstone
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Thirteen years of work.{" "}
            <span className="text-gradient">One defining portfolio.</span>
          </h2>
          <p className="text-slate-400 text-lg">
            From the first creative writing sample in Grade 1 to the original research thesis
            in Grade 12, every Eldarin student builds a longitudinal portfolio that tells
            a story no other applicant can copy.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-violet-500/50 to-rose-500/50 hidden lg:block" aria-hidden="true" />

          <div className="space-y-6 lg:pl-12">
            {stages.map((stage) => (
              <div
                key={stage.grade}
                className={`relative rounded-2xl border p-6 lg:p-8 ${stage.color} ${stage.highlight ? "ring-2 ring-rose-500/30" : ""}`}
              >
                {/* Dot on timeline */}
                <div
                  className={`absolute -left-16 top-8 w-4 h-4 rounded-full border-2 border-slate-950 ${stage.highlight ? "bg-rose-500" : "bg-slate-600"} hidden lg:block`}
                  aria-hidden="true"
                />

                <div className="lg:flex gap-8 items-start">
                  <div className="lg:w-48 flex-shrink-0 mb-4 lg:mb-0">
                    <div className={`text-xs font-semibold uppercase tracking-wider mb-1 ${stage.accent}`}>
                      {stage.grade}
                    </div>
                    <h3 className="text-white font-bold text-xl">{stage.title}</h3>
                    {stage.highlight && (
                      <span className="inline-block mt-2 text-xs px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30 font-semibold">
                        University Submission
                      </span>
                    )}
                  </div>
                  <ul className="flex-1 grid sm:grid-cols-2 gap-2">
                    {stage.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <svg className={`w-4 h-4 mt-0.5 flex-shrink-0 ${stage.accent}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-slate-300 text-sm">{item}</span>
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
