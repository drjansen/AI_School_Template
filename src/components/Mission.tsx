const pillars = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI as First-Class Literacy",
    description:
      "We treat AI fluency the same way we treat reading and mathematics — a foundational skill every student must master, not an elective. Every grade level integrates responsible AI use.",
    color: "from-violet-500 to-purple-600",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Global University Outcomes",
    description:
      "From the first day of elementary school, every lesson, project, and portfolio entry is deliberately designed to open doors at top universities across the US, UK, Canada, and beyond.",
    color: "from-cyan-500 to-teal-600",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Ethics, Agency & Leadership",
    description:
      "Students learn to lead AI, not be led by it. Our curriculum embeds ethics, critical evaluation, and source integrity — producing graduates who are responsible stewards of powerful technology.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Research-Grade Portfolio",
    description:
      "Every student builds a cumulative portfolio from Elementary through Grade 12 — capstones, research papers, AI projects, and community initiatives that demonstrate depth to admissions committees.",
    color: "from-rose-500 to-pink-600",
  },
];

export default function Mission() {
  return (
    <section id="mission" className="py-24 lg:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Why Eldarin School
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            A school built for the world your child will{" "}
            <span className="text-gradient">actually inherit</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Most schools prepare students for today. Eldarin School prepares students for 2035 and beyond —
            a world where AI collaboration, cross-cultural communication, and ethical leadership
            will define who leads and who follows.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="group relative bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 card-glow transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 rounded-xl bg-gradient-to-br ${pillar.color} flex items-center justify-center text-white mb-5`}
              >
                {pillar.icon}
              </div>
              <h3 className="text-white font-bold text-lg mb-3 leading-snug">{pillar.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        {/* Portrait of a Graduate */}
        <div className="mt-20 relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-900/40 via-slate-800/60 to-cyan-900/30 border border-violet-500/20 p-10 lg:p-14">
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(139,92,246,1) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-4xl">
            <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Portrait of an Eldarin Graduate
            </p>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-white mb-8">
              More than an applicant.{" "}
              <span className="text-gradient">A prepared leader.</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "Bilingual communicator (Korean + English)",
                "Quantitative reasoner",
                "Ethical AI operator",
                "Research-capable academic writer",
                "Lifelong portfolio builder",
                "Globally university-prepared",
              ].map((trait) => (
                <div key={trait} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-violet-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-slate-200 text-sm font-medium">{trait}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
