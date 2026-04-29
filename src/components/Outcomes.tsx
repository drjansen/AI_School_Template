const universities = [
  "University of Toronto", "University of British Columbia", "McGill University",
  "University of Edinburgh", "University of Manchester", "King's College London",
  "UC Berkeley (Transfer)", "University of Michigan", "Georgia Tech",
  "University of Melbourne", "University of Sydney", "Waseda University",
];

const services = [
  {
    title: "Longitudinal Counseling",
    description: "University advising begins in Grade 10, not Grade 12. Students build their application narrative over three years.",
    icon: "🎯",
    accent: "#7b9eff",
  },
  {
    title: "Essay & Writing Coaching",
    description: "Professional writing support for personal statements, supplemental essays, and scholarship applications.",
    icon: "✍️",
    accent: "#67e8f9",
  },
  {
    title: "Standardized Test Prep",
    description: "Structured preparation for SAT, ACT, TOEFL, and IELTS integrated into the regular academic schedule.",
    icon: "📊",
    accent: "#a78bfa",
  },
  {
    title: "Interview Preparation",
    description: "Mock interviews with feedback from counselors experienced with Western admissions processes.",
    icon: "🎤",
    accent: "#34d399",
  },
  {
    title: "Financial Aid Guidance",
    description: "Navigating scholarship and financial aid options across the US, UK, Canada, and Australia.",
    icon: "💡",
    accent: "#fbbf24",
  },
  {
    title: "Post-Acceptance Transition",
    description: "Support after acceptance — enrollment management, orientation prep, and alumni networking.",
    icon: "🌏",
    accent: "#67e8f9",
  },
];

export default function Outcomes() {
  return (
    <section id="outcomes" className="py-28 lg:py-36 section-mid">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="eyebrow mb-5">University Outcomes & Counseling</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Every student with a{" "}
            <span className="text-gradient">clear destination</span>
          </h2>
          <p className="text-white/45 text-lg font-light leading-relaxed">
            Our university counseling is integrated into the curriculum from day one.
            Students arrive at Grade 12 ready — not scrambling.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {services.map((service) => (
            <div
              key={service.title}
              className="card-glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-4"
                style={{
                  background: `${service.accent}10`,
                  border: `1px solid ${service.accent}25`,
                }}
                aria-hidden="true"
              >
                {service.icon}
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{service.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed font-light">{service.description}</p>
            </div>
          ))}
        </div>

        {/* University list */}
        <div
          className="rounded-2xl p-8 lg:p-12 text-center"
          style={{
            background: "rgba(13,18,33,0.80)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div
            className="mb-6 rounded-xl px-5 py-3 flex items-start gap-3 text-left"
            style={{
              background: "rgba(251,191,36,0.06)",
              border: "1px solid rgba(251,191,36,0.20)",
            }}
            role="note"
            aria-label="Disclaimer"
          >
            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#fbbf24" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
            </svg>
            <p className="text-amber-200/70 text-sm font-light">
              <strong className="font-semibold text-amber-200/90">Illustrative only:</strong>{" "}
              The universities listed below are target destinations based on our curriculum design. Eldarin School has no formal affiliation, partnership, or endorsement relationship with any of these institutions.
            </p>
          </div>
          <p className="eyebrow mb-8">Target University Destinations (Illustrative)</p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {universities.map((uni) => (
              <span
                key={uni}
                className="px-3.5 py-1.5 rounded-full text-sm font-medium text-white/50"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {uni}
              </span>
            ))}
          </div>
          <p className="text-white/20 text-xs mt-6">
            * For illustrative purposes only. No formal affiliation implied.
          </p>
        </div>
      </div>
    </section>
  );
}
