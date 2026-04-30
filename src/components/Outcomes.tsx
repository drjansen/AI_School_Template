const operatingLayers = [
  {
    title: "Academic Operating Layer",
    description: "Curriculum architecture, scope/sequence, K-culture studio design, AI integration standards, pacing guides, and grade-band learning progressions.",
    icon: "📚",
    accent: "#d4af37",
  },
  {
    title: "Assessment & Integrity Layer",
    description: "Rubric-based grading, portfolio requirements, oral defenses, AI-use disclosure, proctored writing checkpoints, and authentic evidence standards.",
    icon: "✅",
    accent: "#7b9eff",
  },
  {
    title: "AI Enablement Layer",
    description: "Approved AI tools, account management, classroom usage guardrails, logging practices, and student-facing AI-use policies. Powered by Moodle LMS.",
    icon: "🤖",
    accent: "#67e8f9",
  },
  {
    title: "Adaptive Literacy Layer",
    description: "AI-powered Adaptive Literacy Skills Development (ALSD) — diagnostic baseline, targeted instruction, measurable growth, and intervention triggers. Not test prep.",
    icon: "📈",
    accent: "#34d399",
  },
  {
    title: "Character & Student Life Layer",
    description: "Culture rituals, stewardship model, behavior systems, wellbeing supports, and the values framework that defines the Eldarin community.",
    icon: "🌟",
    accent: "#a78bfa",
  },
  {
    title: "Operations & Governance Layer",
    description: "Operation Committee processes, safeguarding, background checks, compliance checklists, incident response, data privacy, and documentation cadence.",
    icon: "🏛",
    accent: "#fbbf24",
  },
];

const kpis = [
  "Literacy growth (termly) by grade band",
  "% of students meeting writing benchmarks",
  "Portfolio completion rates via Moodle",
  "AI-disclosure compliance per submitted work",
  "% of graduates aligned to domestic K-culture / AI pathways",
  "Capstone thesis completion and oral defense rate",
  "Student confidence and engagement surveys",
  "Intervention response time post-diagnostic flag",
];

export default function Outcomes() {
  return (
    <section id="outcomes" className="py-28 lg:py-36 section-mid">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="eyebrow-gold mb-5">Eldarin Operating Model</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            How Eldarin{" "}
            <span className="text-gradient-gold">works at every level</span>
          </h2>
          <p className="text-white/45 text-lg font-light leading-relaxed font-sans-ui">
            The Eldarin Operating Model is the integrated set of methods, platforms, policies,
            and routines that make outcomes consistent and repeatable — from classroom to
            governance to student wellbeing.
          </p>
        </div>

        {/* Operating layers grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {operatingLayers.map((layer) => (
            <div
              key={layer.title}
              className="card-glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                style={{
                  background: `${layer.accent}10`,
                  border: `1px solid ${layer.accent}25`,
                }}
                aria-hidden="true"
              >
                {layer.icon}
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
          <p className="eyebrow-gold mb-6">Quality & Impact Metrics</p>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 tracking-tight">
            Measured outcomes.{" "}
            <span className="text-gradient-gold">Evidence-driven education.</span>
          </h3>
          <div className="grid sm:grid-cols-2 gap-3">
            {kpis.map((kpi) => (
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
            KPIs are reviewed each term and published in the Institute&apos;s annual quality report.
          </p>
        </div>
      </div>
    </section>
  );
}
