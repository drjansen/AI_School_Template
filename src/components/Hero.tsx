import { brand } from "@/config/brand";
import StarfieldCanvas from "@/components/StarfieldCanvas";

const stats = [
  { value: "K–12", label: "Full Pathway" },
  { value: "AI+", label: "Integrated Curriculum" },
  { value: "Global", label: "University Outcomes" },
  { value: "Seoul", label: "South Korea" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-pattern"
      aria-label="Hero"
    >
      {/* Animated star field — degrades to static when prefers-reduced-motion */}
      <StarfieldCanvas starCount={220} speed={0.8} />

      {/* Subtle radial aurora glows */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl bg-sky-500 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-8 blur-3xl bg-indigo-500 pointer-events-none"
        aria-hidden="true"
      />
      {/* Deep aurora pulse — lower-right */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[300px] rounded-full opacity-5 blur-3xl bg-teal-500 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32 pt-40">
        {/* Label */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-500/10 border border-sky-500/25 text-sky-300 text-xs font-semibold tracking-widest uppercase mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" aria-hidden="true" />
          Now Enrolling — Seoul, South Korea
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6">
          <span className="text-white">{brand.name}</span>
          <br />
          <span className="text-gradient">{brand.tagline}</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          A K–12 academy that merges world-class academic rigour with{" "}
          <span className="text-sky-300 font-medium">AI-integrated curriculum</span>{" "}
          — equipping students with the knowledge, skills, and character to lead in any university,
          any industry, and any future.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <a
            href="#cta"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-bold text-base transition-all hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25"
          >
            Request a Prospectus
          </a>
          <a
            href="#pathway"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-sky-500/30 text-white font-bold text-base transition-all"
          >
            Explore the K–12 Pathway
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-gradient mb-1">{stat.value}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500" aria-hidden="true">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <svg className="w-4 h-4 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
