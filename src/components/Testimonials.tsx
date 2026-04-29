const testimonials = [
  {
    quote:
      "Eldarin School changed how I think about writing. Learning to use AI responsibly while developing my own voice gave me a personal statement that was entirely mine — and it showed.",
    name: "Ji-yeon Park",
    role: "Grade 12 Graduate",
    destination: "Enrolled: University of Edinburgh",
    initials: "JP",
    accentColor: "#7b9eff",
  },
  {
    quote:
      "My daughter struggled with confidence in STEM until the AI Modeling Lab. Watching her explain gradient descent to her grandfather was a moment I will never forget.",
    name: "Hyun-soo Lim",
    role: "Parent of Grade 11 Student",
    destination: "",
    initials: "HL",
    accentColor: "#67e8f9",
  },
  {
    quote:
      "The university counseling at Eldarin started in Grade 10. By the time I applied, I wasn't rushing — I had three years of essays, projects, and a real capstone. I felt ready.",
    name: "Min-jun Choi",
    role: "Grade 12 Graduate",
    destination: "Enrolled: University of Toronto",
    initials: "MC",
    accentColor: "#a78bfa",
  },
  {
    quote:
      "No other school in Seoul integrates AI ethics into every class. My son isn't just learning to use ChatGPT — he's learning when not to, and why. That is the difference.",
    name: "Soo-jin Kim",
    role: "Parent of Grade 9 Student",
    destination: "",
    initials: "SK",
    accentColor: "#34d399",
  },
  {
    quote:
      "The Biology + Bioinformatics module convinced me I want to study computational biology. I would never have discovered that path without Eldarin's curriculum design.",
    name: "Da-eun Yoon",
    role: "Grade 11 Student",
    destination: "",
    initials: "DY",
    accentColor: "#67e8f9",
  },
  {
    quote:
      "As a Korean parent, I was skeptical about an AI school. But Eldarin's emphasis on ethics, integrity, and classical academic rigour convinced me. It is not just technology — it is character formation.",
    name: "Jae-won Oh",
    role: "Parent of Grade 6 Student",
    destination: "",
    initials: "JO",
    accentColor: "#fbbf24",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-28 lg:py-36 section-mid">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="eyebrow mb-5">Families & Students</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Voices from the{" "}
            <span className="text-gradient">Eldarin community</span>
          </h2>
          <p className="text-white/25 text-sm italic">
            * All testimonials are fictional placeholders for illustrative purposes.
          </p>
        </div>

        {/* Disclaimer banner */}
        <div
          className="mb-10 rounded-xl px-5 py-3.5 flex items-start gap-3"
          style={{
            background: "rgba(251,191,36,0.05)",
            border: "1px solid rgba(251,191,36,0.18)",
          }}
          role="note"
          aria-label="Disclaimer"
        >
          <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#fbbf24" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
          </svg>
          <p className="text-amber-200/60 text-sm font-light">
            <strong className="font-semibold text-amber-200/80">Note:</strong>{" "}
            All names, quotes, and enrollment outcomes below are fictional placeholders created for illustrative purposes only. They do not represent real students or families.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="card-glass rounded-2xl p-6 flex flex-col transition-all duration-300 hover:-translate-y-0.5"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label="5 stars" role="img">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5" style={{ color: "#fbbf24" }} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-white/50 text-sm leading-relaxed italic flex-1 mb-5 font-light">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                  style={{
                    background: `${t.accentColor}20`,
                    border: `1px solid ${t.accentColor}40`,
                    color: t.accentColor,
                  }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-white/80 text-sm font-semibold">{t.name}</div>
                  <div className="text-white/30 text-xs">{t.role}</div>
                  {t.destination && (
                    <div className="text-xs font-medium mt-0.5" style={{ color: "#67e8f9" }}>
                      {t.destination}
                    </div>
                  )}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
