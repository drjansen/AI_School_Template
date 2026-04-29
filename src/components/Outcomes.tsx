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
  },
  {
    title: "Essay & Writing Coaching",
    description: "Professional writing support for personal statements, supplemental essays, and scholarship applications.",
    icon: "✍️",
  },
  {
    title: "Standardized Test Prep",
    description: "Structured preparation for SAT, ACT, TOEFL, and IELTS integrated into the regular academic schedule.",
    icon: "📊",
  },
  {
    title: "Interview Preparation",
    description: "Mock interviews with feedback from counselors experienced with Western admissions processes.",
    icon: "🎤",
  },
  {
    title: "Financial Aid Guidance",
    description: "Navigating scholarship and financial aid options across the US, UK, Canada, and Australia.",
    icon: "💡",
  },
  {
    title: "Post-Acceptance Transition",
    description: "Support after acceptance — enrollment management, orientation prep, and alumni networking.",
    icon: "🌏",
  },
];

export default function Outcomes() {
  return (
    <section id="outcomes" className="py-24 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">
            University Outcomes & Counseling
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Every student with a{" "}
            <span className="text-gradient">clear destination</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Our university counseling is integrated into the curriculum from day one.
            Students arrive at Grade 12 ready — not scrambling.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-slate-900/70 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors"
            >
              <div className="text-3xl mb-4" aria-hidden="true">{service.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* University logos placeholder */}
        <div className="rounded-3xl bg-slate-900/60 border border-slate-800 p-8 lg:p-12 text-center">
          <p className="text-slate-400 text-sm font-semibold uppercase tracking-widest mb-8">
            Target University Partners & Destinations (Illustrative)
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {universities.map((uni) => (
              <span
                key={uni}
                className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-sm font-medium"
              >
                {uni}
              </span>
            ))}
          </div>
          <p className="text-slate-600 text-xs mt-6">
            * Placeholder — for illustrative purposes. No formal affiliation implied.
          </p>
        </div>
      </div>
    </section>
  );
}
