const testimonials = [
  {
    quote:
      "Eldarin School changed how I think about writing. Learning to use AI responsibly while developing my own voice gave me a personal statement that was entirely mine — and it showed.",
    name: "Ji-yeon Park",
    role: "Grade 12 Graduate",
    destination: "Enrolled: University of Edinburgh",
    initials: "JP",
    color: "from-violet-500 to-purple-600",
  },
  {
    quote:
      "My daughter struggled with confidence in STEM until the AI Modeling Lab. Watching her explain gradient descent to her grandfather was a moment I will never forget.",
    name: "Hyun-soo Lim",
    role: "Parent of Grade 11 Student",
    destination: "",
    initials: "HL",
    color: "from-teal-500 to-cyan-600",
  },
  {
    quote:
      "The university counseling at Eldarin started in Grade 10. By the time I applied, I wasn't rushing — I had three years of essays, projects, and a real capstone. I felt ready.",
    name: "Min-jun Choi",
    role: "Grade 12 Graduate",
    destination: "Enrolled: University of Toronto",
    initials: "MC",
    color: "from-amber-500 to-orange-600",
  },
  {
    quote:
      "No other school in Seoul integrates AI ethics into every class. My son isn't just learning to use ChatGPT — he's learning when not to, and why. That is the difference.",
    name: "Soo-jin Kim",
    role: "Parent of Grade 9 Student",
    destination: "",
    initials: "SK",
    color: "from-rose-500 to-pink-600",
  },
  {
    quote:
      "The Biology + Bioinformatics module convinced me I want to study computational biology. I would never have discovered that path without Eldarin's curriculum design.",
    name: "Da-eun Yoon",
    role: "Grade 11 Student",
    destination: "",
    initials: "DY",
    color: "from-green-500 to-emerald-600",
  },
  {
    quote:
      "As a Korean parent, I was skeptical about an AI school. But Eldarin's emphasis on ethics, integrity, and classical academic rigour convinced me. It is not just technology — it is character formation.",
    name: "Jae-won Oh",
    role: "Parent of Grade 6 Student",
    destination: "",
    initials: "JO",
    color: "from-cyan-500 to-blue-600",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Families & Students
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            Voices from the{" "}
            <span className="text-gradient">Eldarin community</span>
          </h2>
          <p className="text-slate-500 text-sm italic">
            * All testimonials are fictional placeholders for illustrative purposes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 hover:border-slate-700 transition-colors flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4" aria-label="5 stars" role="img">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-slate-300 text-sm leading-relaxed italic flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <figcaption className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-sm font-bold flex-shrink-0`}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                  {t.destination && (
                    <div className="text-teal-400 text-xs font-medium mt-0.5">{t.destination}</div>
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
