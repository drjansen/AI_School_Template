const pillars = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI as First-Class Literacy",
    description:
      "We treat AI fluency the same way we treat reading and mathematics — a foundational skill every student must master, not an elective. Every grade level integrates responsible AI use.",
    accent: "#7b9eff",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Global University Outcomes",
    description:
      "From the first day of elementary school, every lesson, project, and portfolio entry is deliberately designed to open doors at top universities across the US, UK, Canada, and beyond.",
    accent: "#67e8f9",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Ethics, Agency & Leadership",
    description:
      "Students learn to lead AI, not be led by it. Our curriculum embeds ethics, critical evaluation, and source integrity — producing graduates who are responsible stewards of powerful technology.",
    accent: "#a78bfa",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Research-Grade Portfolio",
    description:
      "Every student builds a cumulative portfolio from Elementary through Grade 12 — capstones, research papers, AI projects, and community initiatives that demonstrate depth to admissions committees.",
    accent: "#34d399",
  },
];

const traits = [
  "Bilingual communicator (Korean + English)",
  "Quantitative reasoner",
  "Ethical AI operator",
  "Research-capable academic writer",
  "Lifelong portfolio builder",
  "Globally university-prepared",
];

export default function Mission() {
  return (
    <section
      id="mission"
      className="py-28 lg:py-36 section-dark"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="eyebrow mb-5">Why Eldarin School</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            A school built for the world your child will{" "}
            <span className="text-gradient">actually inherit</span>
          </h2>
          <p className="text-white/45 text-lg leading-relaxed font-light">
            Most schools prepare students for today. Eldarin School prepares
            students for 2035 and beyond — a world where AI collaboration,
            cross-cultural communication, and ethical leadership will define who
            leads and who follows.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="card-glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{
                  background: `${pillar.accent}18`,
                  color: pillar.accent,
                  border: `1px solid ${pillar.accent}30`,
                }}
              >
                {pillar.icon}
              </div>
              <h3 className="text-white font-semibold text-base mb-2.5 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed font-light">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Portrait of a Graduate */}
        <div
          className="mt-16 relative overflow-hidden rounded-3xl p-10 lg:p-14"
          style={{
            background:
              "linear-gradient(135deg, rgba(59,107,255,0.08) 0%, rgba(109,74,255,0.06) 50%, rgba(13,18,33,0.95) 100%)",
            border: "1px solid rgba(99,153,255,0.14)",
          }}
        >
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 opacity-[0.025]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(120,160,255,1) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-4xl">
            <p className="eyebrow mb-5">Portrait of an Eldarin Graduate</p>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8 tracking-tight">
              More than an applicant.{" "}
              <span className="text-gradient">A prepared leader.</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {traits.map((trait) => (
                <div key={trait} className="flex items-center gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#7b9eff" }}
                    aria-hidden="true"
                  />
                  <span className="text-white/70 text-sm font-medium">{trait}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
