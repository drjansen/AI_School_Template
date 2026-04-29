"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Is Eldarin School an officially accredited school in South Korea?",
    a: "Eldarin School is currently operating on its accreditation pathway, running alongside our established organization (ICS, ics.kr). We are pursuing accreditation via South Korea's AI-education track, similar to the pathway blazed by other AI-focused institutions. Full accreditation is a primary institutional goal and timeline details will be published as they are confirmed.",
  },
  {
    q: "What languages are used for instruction?",
    a: "The primary medium of instruction is English, with structured Korean language support throughout K–12. Our goal is genuine bilingualism — students who can read, write, and think fluently in both languages by the time they graduate.",
  },
  {
    q: "Do students need prior AI or coding experience to enroll?",
    a: "No. Our program is designed to introduce AI concepts progressively from elementary school. Elementary students begin with AI awareness (conceptual); middle schoolers apply AI tools with guidance; high schoolers engage in rigorous, ethical AI-integrated coursework. No prior experience is required.",
  },
  {
    q: "Which universities do Eldarin graduates typically target?",
    a: "Our graduates target a range of highly selective institutions including universities in the US, UK, Canada, and Australia. Our university counseling is designed to be realistic and tailored — we help students identify institutions where they will genuinely thrive, not merely brand names.",
  },
  {
    q: "How is the AI-integrated curriculum different from adding a coding class?",
    a: "Completely different. Adding a coding elective leaves every other subject unchanged. At Eldarin, AI is integrated into the pedagogy of every subject — from how students research history to how they draft essays to how they analyze biological data. The result is students who understand AI as a tool, not just a subject.",
  },
  {
    q: "What is the student-to-teacher ratio?",
    a: "We maintain a low student-to-teacher ratio across all grades to ensure every student receives individual attention. Specific ratios per cohort are available in our prospectus — request one via the form below.",
  },
  {
    q: "How does the capstone thesis project work?",
    a: "Every Grade 12 student completes an original research or creative thesis of 5,000–10,000 words, documents any AI tool use with ethical justification, and defends it orally before a faculty panel. The final thesis becomes the centrepiece of their university application portfolio.",
  },
  {
    q: "When can my child enroll?",
    a: "We are currently accepting expressions of interest for our inaugural enrollment cohort. Request a prospectus via the form on this page to receive detailed enrollment timelines, admission requirements, and to schedule a family consultation.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 lg:py-32 bg-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sky-400 text-sm font-semibold uppercase tracking-widest mb-4">
            Frequently Asked Questions
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
            Everything you need to{" "}
            <span className="text-gradient">know to get started</span>
          </h2>
        </div>

        {/* Accordion */}
        <div className="space-y-3" role="list">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-700/60 rounded-2xl overflow-hidden"
              role="listitem"
            >
              <button
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-slate-800/50 transition-colors"
                aria-expanded={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-white font-medium text-base">{faq.q}</span>
                <svg
                  className={`w-5 h-5 flex-shrink-0 text-slate-400 transition-transform duration-200 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
