const courses = [
  {
    subject: "Mathematics",
    course: "Applied Calculus AB/BC + AI Modeling Lab",
    level: "Grades 11–12",
    tag: "STEM",
    tagColor: { bg: "rgba(123,158,255,0.08)", text: "#7b9eff", border: "rgba(123,158,255,0.22)" },
    description:
      "Students master calculus fundamentals and simultaneously build small predictive models, simulate physical and economic optimization, and use interpretability tools to explain their AI outputs.",
    skills: ["Limits & derivatives", "Integration applications", "Differential equations", "Neural net intuition", "Model evaluation"],
    icon: "∫",
    iconColor: "#7b9eff",
  },
  {
    subject: "English",
    course: "Applied English Literature + AI Rhetoric Studio",
    level: "Grades 9–12",
    tag: "Humanities",
    tagColor: { bg: "rgba(103,232,249,0.08)", text: "#67e8f9", border: "rgba(103,232,249,0.22)" },
    description:
      "Close reading of canonical and contemporary texts alongside AI-assisted drafting workflows. Emphasis on original voice, argumentation, source integrity, and recognizing AI-generated rhetoric.",
    skills: ["Literary analysis", "Argumentative writing", "AI-assisted drafting", "Citation discipline", "Bias detection"],
    icon: "✍",
    iconColor: "#67e8f9",
  },
  {
    subject: "Biology",
    course: "Biology + AI Bioinformatics Studio",
    level: "Grades 10–11",
    tag: "Life Science",
    tagColor: { bg: "rgba(52,211,153,0.08)", text: "#34d399", border: "rgba(52,211,153,0.22)" },
    description:
      "Classical genetics and cell biology paired with age-appropriate sequence analysis and pattern recognition activities. Students analyze real (anonymized) datasets and communicate findings rigorously.",
    skills: ["Genetics & heredity", "Cell biology", "Sequence analysis", "Data interpretation", "Scientific writing"],
    icon: "🧬",
    iconColor: "#34d399",
  },
  {
    subject: "Economics",
    course: "Economics + AI Policy & Forecasting",
    level: "Grades 11–12",
    tag: "Social Science",
    tagColor: { bg: "rgba(251,191,36,0.08)", text: "#fbbf24", border: "rgba(251,191,36,0.22)" },
    description:
      "Micro and macroeconomic reasoning enriched with data-driven forecasting, causal inference, and structured policy analysis — preparing students to think rigorously about complex systems.",
    skills: ["Supply & demand", "Fiscal policy", "Data reasoning", "Causal thinking", "Communicating uncertainty"],
    icon: "📈",
    iconColor: "#fbbf24",
  },
  {
    subject: "History",
    course: "History + AI Research Methods",
    level: "Grades 8–10",
    tag: "Humanities",
    tagColor: { bg: "rgba(167,139,250,0.08)", text: "#a78bfa", border: "rgba(167,139,250,0.22)" },
    description:
      "Primary source analysis paired with modern verification methodology. Students learn to detect bias, trace information provenance, and build annotated bibliographies — crucial for the AI information age.",
    skills: ["Primary source analysis", "Historiography", "Claim verification", "Annotated bibliography", "Research integrity"],
    icon: "📜",
    iconColor: "#a78bfa",
  },
  {
    subject: "Computer Science",
    course: "CS Foundations + Responsible AI Engineering",
    level: "Grades 7–12",
    tag: "Technology",
    tagColor: { bg: "rgba(103,232,249,0.08)", text: "#67e8f9", border: "rgba(103,232,249,0.22)" },
    description:
      "Beyond prompting: students learn how AI systems are designed, evaluated, and deployed. Topics include data hygiene, model limitations, fairness considerations, and basic software engineering principles.",
    skills: ["Algorithms & data structures", "Prompt engineering", "Model evaluation", "Fairness & bias", "Data hygiene"],
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
          <p className="eyebrow mb-5">AI-Integrated Curriculum</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Not just computer class.{" "}
            <span className="text-gradient">AI in every subject.</span>
          </h2>
          <p className="text-white/45 text-lg font-light leading-relaxed">
            Each core discipline is taught at full academic depth AND paired with
            applied AI modules — students understand the subject matter AND how
            AI intersects with it professionally, ethically, and creatively.
          </p>
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
                  className="text-xs font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    background: course.tagColor.bg,
                    color: course.tagColor.text,
                    border: `1px solid ${course.tagColor.border}`,
                  }}
                >
                  {course.tag}
                </span>
              </div>

              <div className="text-xs text-white/25 font-medium mb-1 tracking-wide">
                {course.level}
              </div>
              <div
                className="text-xs font-semibold uppercase tracking-widest mb-2"
                style={{ color: course.iconColor }}
              >
                {course.subject}
              </div>
              <h3 className="text-white font-semibold text-sm mb-3 leading-snug">
                {course.course}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed mb-5 flex-1 font-light">
                {course.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {course.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-0.5 rounded-md text-white/40"
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
