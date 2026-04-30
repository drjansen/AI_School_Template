const pathways = [
  {
    badge: "K-Culture & K-Content",
    korean: "K문화 / K-콘텐츠 계열",
    accentColor: "#d4af37",
    borderColor: "rgba(212,175,55,0.22)",
    bgAccent: "rgba(212,175,55,0.05)",
    description:
      "Students who develop K-culture creation, media production, and cultural entrepreneurship skills are aligned with Korea's rapidly growing K-culture and K-content higher education sector.",
    features: [
      "K-culture studio production (script, storyboard, pitch)",
      "Korean language fluency + cultural communication",
      "Digital media and content creation",
      "Cultural analytics and industry research",
      "K-content business and IP fundamentals",
      "AI-assisted creative production workflows",
    ],
    outcome: "Aligned with K-culture / K-content university departments at institutions including 서원대, 충북대, 신라대, 유원대, 숙명여대, and others.",
    universities: ["서원대학교", "충북대학교", "신라대학교", "유원대학교", "숙명여자대학교", "동덕여자대학교", "경희대학교"],
  },
  {
    badge: "AI & Technology",
    korean: "AI / 인공지능 계열",
    accentColor: "#7b9eff",
    borderColor: "rgba(123,158,255,0.22)",
    bgAccent: "rgba(123,158,255,0.05)",
    description:
      "Students who build strong AI engineering, data science, and computational foundations are positioned for Korea's expanding AI and software university programs.",
    features: [
      "AI and machine learning foundations",
      "Data analysis and statistical reasoning",
      "Software engineering principles",
      "Responsible AI and ethics",
      "AI model evaluation and interpretation",
      "Research methodology and capstone projects",
    ],
    outcome: "Aligned with AI / 인공지능 university departments at institutions including 고려대, 중앙대, 서울시립대, 서강대, 숙명여대, 이화여대, and others.",
    universities: ["고려대학교", "중앙대학교", "서울시립대학교", "서강대학교", "숙명여자대학교", "이화여자대학교", "세종대학교"],
  },
  {
    badge: "AI × K-Culture Fusion",
    korean: "AI × K-콘텐츠 융합",
    accentColor: "#a78bfa",
    borderColor: "rgba(167,139,250,0.22)",
    bgAccent: "rgba(167,139,250,0.05)",
    description:
      "The signature Eldarin pathway — combining AI engineering literacy with K-culture creative skills. This is where Korea's cultural leadership and technological advantage meet.",
    features: [
      "AI × K-content production (AI-assisted media, storytelling)",
      "Cultural data analytics and trend research",
      "AI ethics in creative industries",
      "Cross-disciplinary capstone thesis",
      "Portfolio: AI-integrated cultural projects",
      "Industry mentorship and peer review",
    ],
    outcome: "Positioned for interdisciplinary programs and dual-track pathways bridging AI and cultural content sectors at leading Korean institutions.",
    universities: ["경기대학교", "서울여자대학교", "서경대학교", "한양대학교 ERICA", "영산대학교"],
  },
];

export default function Pathway() {
  return (
    <section id="pathway" className="py-28 lg:py-36 section-mid">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="eyebrow-gold mb-5">Domestic Pathways</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Korea-first.{" "}
            <span className="text-gradient-gold">Multiple pathways.</span>
          </h2>
          <p className="text-white/45 text-lg font-light leading-relaxed font-sans-ui">
            Eldarin&apos;s curriculum aligns with domestic Korean university majors in
            AI and K-culture — advancing Korea&apos;s educational industry from within.
            All pathways listed are indicative; students verify current admissions guides (모집요강) annually.
          </p>
        </div>

        {/* Compliance note */}
        <div
          className="mb-10 rounded-xl px-5 py-3.5 flex items-start gap-3"
          style={{
            background: "rgba(212,175,55,0.05)",
            border: "1px solid rgba(212,175,55,0.18)",
          }}
          role="note"
          aria-label="Compliance note"
        >
          <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "#d4af37" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20A10 10 0 0012 2z" />
          </svg>
          <p className="text-amber-200/70 text-sm font-light font-sans-ui">
            <strong className="font-semibold text-amber-200/90">Pathway Alignment Note:</strong>{" "}
            University names are illustrative examples only. Eldarin Institute is not established for the purpose of studying abroad. All pathway alignment is domestic and Korea-first. Departments and majors may change annually — please verify in each institution&apos;s official 모집요강.
          </p>
        </div>

        {/* Pathways */}
        <div className="space-y-5">
          {pathways.map((pathway, index) => (
            <div
              key={pathway.badge}
              className="relative overflow-hidden rounded-2xl p-8 lg:p-10"
              style={{
                background: `linear-gradient(135deg, ${pathway.bgAccent} 0%, rgba(8,18,42,0.92) 100%)`,
                border: `1px solid ${pathway.borderColor}`,
              }}
            >
              <div className="lg:flex gap-10">
                {/* Left */}
                <div className="lg:w-80 flex-shrink-0 mb-6 lg:mb-0">
                  <div className="flex items-center gap-3 mb-3 flex-wrap">
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold"
                      style={{ background: `${pathway.accentColor}22`, color: pathway.accentColor, border: `1px solid ${pathway.accentColor}40` }}
                    >
                      {pathway.badge}
                    </span>
                  </div>
                  <p className="text-white/30 text-xs mb-2 font-sans-ui tracking-wide">{pathway.korean}</p>
                  <p className="text-white/45 text-sm leading-relaxed font-light font-sans-ui">
                    {pathway.description}
                  </p>
                  <div
                    className="mt-4 p-3.5 rounded-xl"
                    style={{
                      background: `${pathway.accentColor}08`,
                      border: `1px solid ${pathway.accentColor}22`,
                    }}
                  >
                    <p className="text-xs text-white/60 leading-relaxed font-sans-ui">
                      <span
                        className="font-semibold"
                        style={{ color: pathway.accentColor }}
                      >
                        Alignment:{" "}
                      </span>
                      {pathway.outcome}
                    </p>
                  </div>
                  {/* Sample universities */}
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {pathway.universities.map((uni) => (
                      <span
                        key={uni}
                        className="text-xs px-2 py-0.5 rounded-md font-sans-ui"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.07)",
                          color: "rgba(255,255,255,0.40)",
                        }}
                      >
                        {uni}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: features */}
                <div className="flex-1 grid sm:grid-cols-2 gap-2.5">
                  {pathway.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                        style={{ background: pathway.accentColor }}
                        aria-hidden="true"
                      />
                      <span className="text-white/60 text-sm font-light font-sans-ui">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step number */}
              <div
                className="absolute top-6 right-6 lg:top-8 lg:right-8 w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold font-sans-ui"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.25)",
                }}
                aria-hidden="true"
              >
                0{index + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom disclaimer */}
        <p className="text-center text-white/20 text-xs mt-8 font-sans-ui">
          * Pathway alignment is indicative only. University departments and admissions requirements change annually.
          Eldarin Institute does not provide overseas-study preparation as an institutional purpose.
        </p>
      </div>
    </section>
  );
}
