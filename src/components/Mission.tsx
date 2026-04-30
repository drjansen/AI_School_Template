const pillars = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    title: "AI-Driven Innovation",
    description:
      "We place AI fluency at the heart of every discipline — not as an elective, but as a foundational literacy. Students learn responsible AI use, adaptive skills, and ethical practice across all subjects.",
    accent: "#d4af37",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    title: "Knowledge Empowerment",
    description:
      "Our Moodle LMS and AI-powered Adaptive Literacy Skills Development (ALSD) platform ensure every student receives personalized instruction — diagnostic, targeted, and measurably effective.",
    accent: "#7b9eff",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Future-Ready Leaders",
    description:
      "Students learn to lead AI, not be led by it. Character formation, ethics, critical thinking, and stewardship are embedded across every grade — producing graduates who act with integrity and vision.",
    accent: "#a78bfa",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 004 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    title: "Korea-First Impact",
    description:
      "Eldarin exists to advance Korea's educational industry. Our curriculum aligns with domestic K-culture and AI university majors, reinforcing Korea's position as a global leader in content creation and technology.",
    accent: "#34d399",
  },
];

const traits = [
  "AI-literate academic thinker",
  "K-culture creator and communicator",
  "Ethical AI operator",
  "Research-capable writer",
  "Adaptive lifelong learner",
  "Korea-first, globally relevant leader",
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
          <p className="eyebrow-gold mb-5">Why Eldarin Institute</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
            Education advancing{" "}
            <span className="text-gradient-gold">Korea&apos;s AI era</span>
          </h2>
          <p className="text-white/45 text-lg leading-relaxed font-light font-sans-ui">
            Eldarin Institute is an Alternative Educational Institution built to advance
            Korea&apos;s educational industry — where AI fluency, K-culture creation, and
            character formation converge for the next generation.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="card-gold-trim rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5"
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
              <p className="text-white/40 text-sm leading-relaxed font-light font-sans-ui">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>

        {/* Portrait of a Graduate */}
        <div
          className="mt-16 relative overflow-hidden rounded-3xl p-10 lg:p-14 deco-frame"
          style={{
            background:
              "linear-gradient(135deg, rgba(212,175,55,0.06) 0%, rgba(12,20,52,0.95) 60%, rgba(8,18,42,0.98) 100%)",
            border: "1px solid rgba(212,175,55,0.18)",
          }}
        >
          {/* Circuit-dot grid */}
          <div
            className="absolute inset-0 opacity-[0.035] circuit-grid"
            aria-hidden="true"
          />
          <div className="relative z-10 max-w-4xl">
            <p className="eyebrow-gold mb-5">Portrait of an Eldarin Graduate</p>
            <h3 className="text-3xl sm:text-4xl font-bold text-white mb-8 tracking-tight">
              More than a student.{" "}
              <span className="text-gradient-gold">A Korea-first leader.</span>
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
              {traits.map((trait) => (
                <div key={trait} className="flex items-center gap-3">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: "#d4af37" }}
                    aria-hidden="true"
                  />
                  <span className="text-white/70 text-sm font-medium font-sans-ui">{trait}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
