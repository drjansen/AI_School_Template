"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";

export default function LeadershipSpotlight() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-28 lg:py-36 section-mid">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div
          className="rounded-3xl p-8 md:p-10 lg:p-12 deco-frame"
          style={{
            background:
              "linear-gradient(145deg, rgba(212,175,55,0.06) 0%, rgba(12,20,52,0.92) 60%, rgba(8,18,42,0.98) 100%)",
            border: "1px solid rgba(212,175,55,0.2)",
          }}
        >
          <div className="grid lg:grid-cols-[360px_1fr] gap-8 lg:gap-12 items-start">
            <div className="card-gold-trim rounded-2xl overflow-hidden">
              <Image
                src="/leadership/director-headshot4.jpg"
                alt={t.leadership.photoAlt}
                width={900}
                height={1200}
                sizes="(max-width: 1024px) 100vw, 360px"
                className="w-full h-auto object-cover"
                priority={false}
              />
            </div>

            <div>
              <p className="eyebrow-gold mb-4">{t.leadership.eyebrow}</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-4">
                {t.leadership.h2a}{" "}
                <span className="text-gradient-gold">{t.leadership.h2b}</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed font-light font-sans-ui mb-7">
                {t.leadership.intro}
              </p>

              <div className="card-gold-trim rounded-2xl p-6 mb-6">
                <h3 className="text-2xl text-white font-semibold mb-1">{t.leadership.name}</h3>
                <p className="text-sm uppercase tracking-[0.18em] text-amber-200/80 font-semibold font-sans-ui">
                  {t.leadership.title}
                </p>
              </div>

              <div className="space-y-4 mb-7">
                <p className="text-white/70 leading-relaxed font-light font-sans-ui">
                  {t.leadership.summary}
                </p>
                <p className="text-white/65 leading-relaxed font-light font-sans-ui">
                  {t.leadership.vision}
                </p>
              </div>

              <ul className="grid sm:grid-cols-2 gap-3">
                {t.leadership.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span
                      className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                      style={{ background: "#d4af37" }}
                      aria-hidden="true"
                    />
                    <span className="text-white/70 text-sm leading-relaxed font-sans-ui">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
