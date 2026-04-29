const courses = [
  {
    subject: "Mathematics",
    course: "Applied Calculus AB/BC + AI Modeling Lab",
    level: "Grades 11–12",
    tag: "STEM",
    tagColor: "bg-sky-500/20 text-sky-300 border-sky-500/30",
    description:
      "Students master calculus fundamentals and simultaneously build small predictive models, simulate physical and economic optimization, and use interpretability tools to explain their AI outputs.",
    skills: ["Limits & derivatives", "Integration applications", "Differential equations", "Neural net intuition", "Model evaluation"],
    icon: "∫",
    iconBg: "from-sky-600 to-indigo-700",
  },
  {
    subject: "English",
    course: "Applied English Literature + AI Rhetoric Studio",
    level: "Grades 9–12",
    tag: "Humanities",
    tagColor: "bg-teal-500/20 text-teal-300 border-teal-500/30",
    description:
      "Close reading of canonical and contemporary texts alongside AI-assisted drafting workflows. Emphasis on original voice, argumentation, source integrity, and recognizing AI-generated rhetoric.",
    skills: ["Literary analysis", "Argumentative writing", "AI-assisted drafting", "Citation discipline", "Bias detection"],
    icon: "✍",
    iconBg: "from-teal-600 to-cyan-700",
  },
  {
    subject: "Biology",
    course: "Biology + AI Bioinformatics Studio",
    level: "Grades 10–11",
    tag: "Life Science",
    tagColor: "bg-green-500/20 text-green-300 border-green-500/30",
    description:
      "Classical genetics and cell biology paired with age-appropriate sequence analysis and pattern recognition activities. Students analyze real (anonymized) datasets and communicate findings rigorously.",
    skills: ["Genetics & heredity", "Cell biology", "Sequence analysis", "Data interpretation", "Scientific writing"],
    icon: "🧬",
    iconBg: "from-green-600 to-emerald-700",
  },
  {
    subject: "Economics",
    course: "Economics + AI Policy & Forecasting",
    level: "Grades 11–12",
    tag: "Social Science",
    tagColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    description:
      "Micro and macroeconomic reasoning enriched with data-driven forecasting, causal inference, and structured policy analysis — preparing students to think rigorously about complex systems.",
    skills: ["Supply & demand", "Fiscal policy", "Data reasoning", "Causal thinking", "Communicating uncertainty"],
    icon: "📈",
    iconBg: "from-amber-500 to-orange-600",
  },
  {
    subject: "History",
    course: "History + AI Research Methods",
    level: "Grades 8–10",
    tag: "Humanities",
    tagColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    description:
      "Primary source analysis paired with modern verification methodology. Students learn to detect bias, trace information provenance, and build annotated bibliographies — crucial for the AI information age.",
    skills: ["Primary source analysis", "Historiography", "Claim verification", "Annotated bibliography", "Research integrity"],
    icon: "📜",
    iconBg: "from-rose-600 to-pink-700",
  },
  {
    subject: "Computer Science",
    course: "CS Foundations + Responsible AI Engineering",
    level: "Grades 7–12",
    tag: "Technology",
    tagColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    description:
      "Beyond prompting: students learn how AI systems are designed, evaluated, and deployed. Topics include data hygiene, model limitations, fairness considerations, and basic software engineering principles.",
    skills: ["Algorithms & data structures", "Prompt engineering", "Model evaluation", "Fairness & bias", "Data hygiene"],
    icon: "⚙️",
    iconBg: "from-cyan-600 to-blue-700",
  },
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="py-24 lg:py-32 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">
            AI-Integrated Curriculum
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Not just computer class.{" "}
            <span className="text-gradient">AI in every subject.</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Each core discipline is taught at full academic depth AND paired with
            applied AI modules — students understand the subject matter AND how
            AI intersects with it professionally, ethically, and creatively.
          </p>
        </div>

        {/* Course grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <article
              key={course.course}
              className="group relative bg-slate-800/50 border border-slate-700/40 rounded-2xl p-6 card-glow transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Icon + tag */}
              <div className="flex items-start justify-between mb-5">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.iconBg} flex items-center justify-center text-2xl`}
                  aria-hidden="true"
                >
                  {course.icon}
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${course.tagColor}`}>
                  {course.tag}
                </span>
              </div>

              <div className="text-xs text-slate-500 font-medium mb-1">{course.level}</div>
              <div className="text-slate-400 text-xs font-semibold uppercase tracking-wider mb-2">{course.subject}</div>
              <h3 className="text-white font-bold text-base mb-3 leading-snug">{course.course}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">{course.description}</p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5">
                {course.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-xs px-2 py-0.5 rounded-md bg-slate-700/60 text-slate-300 border border-slate-600/40"
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
