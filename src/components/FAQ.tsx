"use client";
import { useState } from "react";

const faqs = [
  {
    q: "What is Eldarin Institute?",
    a: "Eldarin Institute is an Alternative Educational Institution in South Korea dedicated to advancing Korea's educational industry. Our mission is to provide an environment where students build strong academic and character foundations while shaping K-culture for the AI era. We are not established for the purpose of studying abroad.",
  },
  {
    q: "What languages are used for instruction?",
    a: "The primary medium of instruction is English, with structured Korean language development integrated throughout all grade levels. Our goal is genuine bilingualism — students who can read, write, think, and create fluently in both Korean and English.",
  },
  {
    q: "What is the Eldarin Operating Model?",
    a: "The Eldarin Operating Model is our integrated set of methods, platforms, policies, and routines — covering academic design, assessment integrity, AI enablement, adaptive literacy, character formation, and governance. It is powered by Moodle LMS as the central learning record system.",
  },
  {
    q: "What is AI-powered Adaptive Literacy Skills Development (ALSD)?",
    a: "ALSD is our personalized literacy program — not test drilling. It uses AI to deliver a diagnostic baseline for each student, followed by targeted instruction, measurable growth checks, and intervention triggers when needed. Human teachers remain fully accountable for all decisions. It supports both Korean and English literacy.",
  },
  {
    q: "Do students need prior AI or coding experience to enroll?",
    a: "No. Our program introduces AI concepts progressively across all grade levels. Younger students begin with AI awareness and foundational literacy; older students engage in responsible AI engineering and K-culture production. No prior experience is required.",
  },
  {
    q: "Which domestic Korean pathways does Eldarin align with?",
    a: "Eldarin's curriculum aligns with domestic Korean university majors in K-culture/K-content and AI/technology fields. Examples include departments at 서원대, 충북대, 신라대, 고려대, 중앙대, 서울시립대, 숙명여대, and many others. These are indicative examples only — verify in each institution's annual 모집요강.",
  },
  {
    q: "How does the capstone thesis project work?",
    a: "Every graduating student completes an original research or creative thesis of 5,000–10,000 words, documents any AI tool use with ethical justification, and defends it orally before a faculty panel. The thesis becomes the centrepiece of their academic portfolio and demonstrates authentic depth of learning.",
  },
  {
    q: "How can I inquire about enrollment?",
    a: "We are currently accepting expressions of interest. Submit an inquiry via the form on this page and a member of our team will be in touch within two business days. You may also email us at info@eldarin.ai.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-28 lg:py-36 section-dark">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="eyebrow-gold mb-5">Frequently Asked Questions</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Everything you need to{" "}
            <span className="text-gradient-gold">know to get started</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-2" role="list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden transition-colors"
              style={{
                border: `1px solid ${openIndex === index ? "rgba(212,175,55,0.28)" : "rgba(255,255,255,0.06)"}`,
                background: openIndex === index
                  ? "rgba(212,175,55,0.04)"
                  : "rgba(12,20,52,0.60)",
              }}
              role="listitem"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
                aria-expanded={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white/80 font-medium text-sm leading-relaxed font-sans-ui">
                  {faq.q}
                </span>
                <svg
                  className={`w-4 h-4 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  style={{ color: openIndex === index ? "#d4af37" : "rgba(255,255,255,0.30)" }}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-white/40 text-sm leading-relaxed font-light font-sans-ui">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
