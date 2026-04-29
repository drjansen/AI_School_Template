import { brand } from "@/config/brand";

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Subtle content overlay for legibility — does NOT block background */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse at 50% 60%, rgba(5,8,15,0.35) 0%, rgba(5,8,15,0.72) 100%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 text-center py-36 pt-44">
        {/* Status badge */}
        <div className="badge-aurora inline-flex mb-10">
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: "#7b9eff" }}
            aria-hidden="true"
          />
          Now Enrolling — Seoul, South Korea
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl lg:text-[4.5rem] font-bold tracking-tight leading-[1.08] mb-7">
          <span className="text-white">{brand.name}</span>
          <br />
          <span className="text-gradient">{brand.tagline}</span>
        </h1>

        {/* Sub-headline */}
        <p className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
          A K–12 academy that merges world-class academic rigour with{" "}
          <span className="text-white/80 font-medium">
            AI-integrated curriculum
          </span>{" "}
          — equipping students with the knowledge, skills, and character to lead
          in any university, any industry, and any future.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <a href="#cta" className="w-full sm:w-auto btn-primary">
            Request a Prospectus
          </a>
          <a href="#pathway" className="w-full sm:w-auto btn-ghost">
            Explore the K–12 Pathway
          </a>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-gradient mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-white/35 uppercase tracking-widest font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
        style={{ color: "rgba(255,255,255,0.25)" }}
        aria-hidden="true"
      >
        <span className="text-[10px] uppercase tracking-[0.2em] font-medium">
          Scroll
        </span>
        <svg
          className="w-3.5 h-3.5 animate-bounce"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </section>
  );
}
