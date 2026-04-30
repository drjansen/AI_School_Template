const courses = [
  {
    subject: "K-Culture Studio",
    course: "K-Content Creation + AI Production Lab",
    level: "All Grade Levels (K-12)",
    tag: "K-Culture",
    tagColor: { bg: "rgba(212,175,55,0.08)", text: "#d4af37", border: "rgba(212,175,55,0.25)" },
    description:
      "Students create K-culture content — scripts, short films, music presentations, digital art, and cultural essays — using AI production tools responsibly. Emphasis on original voice, cultural authenticity, and IP integrity.",
    skills: ["Script & storyboard", "AI-assisted editing", "Cultural analysis", "IP & ethics", "Pitch & presentation"],
    icon: "🎬",
    iconColor: "#d4af37",
  },
  {
    subject: "AI Literacy",
    course: "Adaptive Literacy Skills Development (ALSD)",
    level: "All Grade Levels (K-12)",
    tag: "Foundation",
    tagColor: { bg: "rgba(52,211,153,0.08)", text: "#34d399", border: "rgba(52,211,153,0.22)" },
    description:
      "Our AI-powered adaptive literacy platform delivers personalized instruction: diagnostic baseline → targeted practice → measurable growth. Emphasis on reading, writing, reasoning, and responsible AI use — not test drilling.",
    skills: ["Diagnostic literacy", "Adaptive reading paths", "Writing development", "AI-supported practice", "Growth tracking"],
    icon: "📖",
    iconColor: "#34d399",
  },
  {
    subject: "Mathematics",
    course: "Applied Mathematics + AI Modeling Lab",
    level: "All Grade Levels (K-12)",
    tag: "STEM",
    tagColor: { bg: "rgba(123,158,255,0.08)", text: "#7b9eff", border: "rgba(123,158,255,0.22)" },
    description:
      "Students master core mathematics alongside applied AI modeling — building predictive models, working with data, and using AI tools to visualize and communicate mathematical reasoning.",
    skills: ["Calculus foundations", "Statistical reasoning", "AI model intuition", "Data visualization", "Problem solving"],
    icon: "∫",
    iconColor: "#7b9eff",
  },
  {
    subject: "Korean & English",
    course: "Bilingual Communication + AI Rhetoric Studio",
    level: "All Grade Levels (K-12)",
    tag: "Languages",
    tagColor: { bg: "rgba(103,232,249,0.08)", text: "#67e8f9", border: "rgba(103,232,249,0.22)" },
    description:
      "Genuine bilingualism — Korean and English developed in tandem. Students learn academic writing, argumentation, cultural communication, and how to recognize and evaluate AI-generated rhetoric.",
    skills: ["Academic writing", "Korean fluency", "Argumentation", "AI rhetoric detection", "Cultural voice"],
    icon: "✍",
    iconColor: "#67e8f9",
  },
  {
    subject: "Cultural Research",
    course: "K-Culture Analytics + Research Methods",
    level: "Grades 7–12",
    tag: "Research",
    tagColor: { bg: "rgba(167,139,250,0.08)", text: "#a78bfa", border: "rgba(167,139,250,0.22)" },
    description:
      "Students analyze K-culture trends, industry data, and cultural phenomena using research methodology. Emphasis on source verification, annotated bibliography, and producing credible cultural arguments.",
    skills: ["Trend analysis", "Source verification", "Data interpretation", "Annotated bibliography", "Cultural critique"],
    icon: "📜",
    iconColor: "#a78bfa",
  },
  {
    subject: "AI Engineering",
    course: "CS Foundations + Responsible AI Engineering",
    level: "Grades 7–12",
    tag: "Technology",
    tagColor: { bg: "rgba(103,232,249,0.08)", text: "#67e8f9", border: "rgba(103,232,249,0.22)" },
    description:
      "Beyond prompting: students learn how AI systems are designed, evaluated, and deployed responsibly. Topics include fairness, data hygiene, model limitations, and software engineering fundamentals aligned with Korean AI industry standards.",
    skills: ["Algorithms", "Prompt engineering", "Model evaluation", "Fairness & bias", "Software basics"],
    icon: "⚙️",
    iconColor: "#67e8f9",
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-28 lg:py-36 section-dark">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="eyebrow-gold mb-5">AI-Integrated Curriculum</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            K-culture creation.{" "}
            <span className="text-gradient-gold">AI in every subject.</span>
          </h2>
          <p className="text-white/45 text-lg font-light leading-relaxed font-sans-ui">
            Each discipline is taught at full academic depth and paired with AI
            integration — delivered through our{" "}
            <strong className="text-white/70">Moodle LMS</strong> and{" "}
            <strong className="text-white/70">AI-powered Adaptive Literacy Skills Development</strong>{" "}
            platform, so every student progresses at the right pace.
          </p>
        </div>

        {/* Moodle + ALSD callout */}
        <div
          className="mb-12 rounded-2xl p-6 lg:p-8 grid sm:grid-cols-2 gap-6"
          style={{
            background: "rgba(12,20,52,0.80)",
            border: "1px solid rgba(212,175,55,0.18)",
          }}
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-base"
                style={{ background: "rgba(212,175,55,0.10)", border: "1px solid rgba(212,175,55,0.25)" }}
                aria-hidden="true"
              >
                🎓
              </div>
              <h3 className="text-white font-semibold text-sm">Moodle LMS — Eldarin Learning Record</h3>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-light font-sans-ui">
              Moodle is our evidence backbone: portfolios, rubric-based grading, versioned drafts,
              oral defense scheduling, and AI-disclosure workflows. Every learning artifact is
              traceable and auditable.
            </p>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center text-base"
                style={{ background: "rgba(52,211,153,0.10)", border: "1px solid rgba(52,211,153,0.25)" }}
                aria-hidden="true"
              >
                📈
              </div>
              <h3 className="text-white font-semibold text-sm">AI-Powered Adaptive Literacy Skills Development</h3>
            </div>
            <p className="text-white/40 text-sm leading-relaxed font-light font-sans-ui">
              Personalized literacy instruction — not test drilling. Diagnostic baseline, targeted
              AI-supported practice, and measured growth checks. Human teachers remain accountable;
              AI recommendations are reviewed and adjusted per student.
            </p>
          </div>
        </div>

        {/* Course grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((course) => (
            <article
              key={course.course}
              className="card-glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
            >
              {/* Icon + tag */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center text-xl"
                  style={{
                    background: `${course.iconColor}12`,
                    border: `1px solid ${course.iconColor}28`,
                  }}
                  aria-hidden="true"
                >
                  {course.icon}
                </div>
                <span
                  className="text-xs font-semibold px-2.5 py-1 rounded-full font-sans-ui"
                  style={{
                    background: course.tagColor.bg,
                    color: course.tagColor.text,
                    border: `1px solid ${course.tagColor.border}`,
                  }}
                >
                  {course.tag}
                </span>
              </div>

              <div className="text-xs text-white/25 font-medium mb-1 tracking-wide font-sans-ui">
                {course.level}
              </div>
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-2 font-sans-ui"
                style={{ color: course.iconColor }}
              >
                {course.subject}
              </div>
              <h3 className="text-white font-semibold text-sm mb-3 leading-snug">
                {course.course}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-5 flex-1 font-light font-sans-ui">
                {course.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {course.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-0.5 rounded-md text-white/40 font-sans-ui"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
