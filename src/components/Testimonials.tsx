const testimonials = [
  {
    quote:
      "Eldarin Institute changed how I think about creative work. Learning to use AI responsibly while developing my own cultural voice gave me a genuine K-culture portfolio that is entirely mine.",
    name: "Ji-yeon Park",
    role: "Graduate",
    destination: "",
    initials: "JP",
    accentColor: "#d4af37",
  },
  {
    quote:
      "My daughter struggled with confidence in STEM until the AI Modeling Lab. Watching her explain machine learning concepts to her grandfather using a K-drama storyline was a moment I will never forget.",
    name: "Hyun-soo Lim",
    role: "Parent",
    destination: "",
    initials: "HL",
    accentColor: "#67e8f9",
  },
  {
    quote:
      "The adaptive literacy platform identified exactly where my reading comprehension was weakest. Within one semester, my growth was measurable — and it never felt like drilling.",
    name: "Min-jun Choi",
    role: "Student",
    destination: "",
    initials: "MC",
    accentColor: "#7b9eff",
  },
  {
    quote:
      "No other institution in Seoul integrates AI ethics into every class. My son is not just learning to use ChatGPT — he is learning when not to, and why. That is the difference.",
    name: "Soo-jin Kim",
    role: "Parent",
    destination: "",
    initials: "SK",
    accentColor: "#34d399",
  },
  {
    quote:
      "The K-culture studio module convinced me that I want to work in the Korean content industry. I never would have discovered that passion without Eldarin&apos;s curriculum design.",
    name: "Da-eun Yoon",
    role: "Student",
    destination: "",
    initials: "DY",
    accentColor: "#a78bfa",
  },
  {
    quote:
      "As a Korean parent, I wanted an institution that truly advances Korea — not one preparing students to leave. Eldarin&apos;s Korea-first mission and emphasis on character formation convinced me.",
    name: "Jae-won Oh",
    role: "Parent",
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
          <p className="eyebrow-gold mb-5">Families & Students</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Voices from the{" "}
            <span className="text-gradient-gold">Eldarin community</span>
          </h2>
          <p className="text-white/25 text-sm italic font-sans-ui">
            * All testimonials are fictional placeholders for illustrative purposes.
          </p>
        </div>

        {/* Disclaimer banner */}
        <div
          className="mb-10 rounded-xl px-5 py-3.5 flex items-start gap-3"
          style={{
            background: "rgba(212,175,55,0.05)",
            border: "1px solid rgba(212,175,55,0.18)",
          }}
          role="note"
          aria-label="Disclaimer"
        >
          <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#d4af37" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
          </svg>
          <p className="text-amber-200/60 text-sm font-light font-sans-ui">
            <strong className="font-semibold text-amber-200/80">Note:</strong>{" "}
            All names and quotes below are fictional placeholders for illustrative purposes only. They do not represent real students or families.
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
                  <svg key={i} className="w-3.5 h-3.5" style={{ color: "#d4af37" }} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-white/50 text-sm leading-relaxed italic flex-1 mb-5 font-light font-sans-ui">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 font-sans-ui"
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
                  <div className="text-white/30 text-xs font-sans-ui">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
