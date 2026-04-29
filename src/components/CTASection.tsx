"use client";
import { useState } from "react";
import { brand } from "@/config/brand";
import { isValidName, isValidEmail } from "@/lib/validation";

interface FormData {
  name: string;
  email: string;
  phone: string;
  childGrade: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
}

const gradeOptions = [
  "Elementary (Grades 1–3)",
  "Elementary (Grades 4–6)",
  "Middle School (Grades 7–9)",
  "High School (Grades 10–12)",
  "Not yet enrolled age",
  "Other / Multiple children",
];

export default function CTASection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    childGrade: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!isValidName(formData.name)) {
      newErrors.name = "Please enter your full name.";
    }
    if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/prospectus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        const data = await res.json();
        setErrorMessage(data.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch (error) {
      console.error("[CTASection] Form submission failed:", error);
      setErrorMessage("Unable to submit. Please check your connection and try again.");
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="cta" className="py-24 lg:py-32 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-4">
              Begin the Journey
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              Ready to give your child the{" "}
              <span className="text-gradient">Eldarin advantage?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Request our full prospectus to receive detailed information on curriculum,
              admission requirements, tuition, and enrollment timelines. A member of our
              admissions team will be in touch within two business days.
            </p>

            <div className="space-y-4">
              {[
                { icon: "📄", title: "Detailed Curriculum Overview", desc: "Full subject listings, AI integration details, and grade-by-grade expectations." },
                { icon: "🎓", title: "Admissions Requirements", desc: "What we look for at each entry grade, assessment processes, and enrollment dates." },
                { icon: "📅", title: "Family Consultation", desc: "We will follow up to schedule a one-on-one call with our admissions director." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0 mt-0.5" aria-hidden="true">{item.icon}</span>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.title}</div>
                    <div className="text-slate-500 text-sm">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-8 text-slate-500 text-sm">
              Prefer email?{" "}
              <a
                href={`mailto:${brand.contact.email}`}
                className="text-violet-400 hover:text-violet-300 transition-colors"
              >
                {brand.contact.email}
              </a>
            </p>
          </div>

          {/* Right: form */}
          <div className="relative overflow-hidden rounded-3xl bg-slate-900/80 border border-slate-700/60 p-8">
            {status === "success" ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-teal-500/20 border border-teal-500/40 flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Request Received</h3>
                <p className="text-slate-400 leading-relaxed">
                  Thank you, <strong className="text-white">{formData.name}</strong>.
                  Our admissions team will be in touch at{" "}
                  <strong className="text-violet-400">{formData.email}</strong>{" "}
                  within two business days.
                </p>
                <button
                  className="mt-6 text-sm text-slate-500 hover:text-slate-300 transition-colors underline"
                  onClick={() => {
                    setStatus("idle");
                    setFormData({ name: "", email: "", phone: "", childGrade: "", message: "" });
                  }}
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-white mb-1">Request a Prospectus</h3>
                <p className="text-slate-400 text-sm mb-6">
                  Fill in your details below and we will send you our full information pack.
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
                      Full Name <span className="text-rose-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={`w-full rounded-xl bg-slate-800/60 border ${
                        errors.name ? "border-rose-500" : "border-slate-700"
                      } text-white placeholder-slate-500 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-colors`}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={!!errors.name}
                      aria-required="true"
                    />
                    {errors.name && (
                      <p id="name-error" className="text-rose-400 text-xs mt-1" role="alert">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
                      Email Address <span className="text-rose-400" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full rounded-xl bg-slate-800/60 border ${
                        errors.email ? "border-rose-500" : "border-slate-700"
                      } text-white placeholder-slate-500 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-colors`}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={!!errors.email}
                      aria-required="true"
                    />
                    {errors.email && (
                      <p id="email-error" className="text-rose-400 text-xs mt-1" role="alert">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone (optional) */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1.5">
                      Phone Number <span className="text-slate-500 text-xs">(optional)</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+82 10 0000 0000"
                      className="w-full rounded-xl bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-colors"
                    />
                  </div>

                  {/* Grade */}
                  <div>
                    <label htmlFor="childGrade" className="block text-sm font-medium text-slate-300 mb-1.5">
                      Child&apos;s Current Grade Level <span className="text-slate-500 text-xs">(optional)</span>
                    </label>
                    <select
                      id="childGrade"
                      name="childGrade"
                      value={formData.childGrade}
                      onChange={handleChange}
                      className="w-full rounded-xl bg-slate-800/60 border border-slate-700 text-white px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-colors appearance-none"
                    >
                      <option value="" className="bg-slate-800">Select grade level…</option>
                      {gradeOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-slate-800">{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
                      Message or Questions <span className="text-slate-500 text-xs">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any questions or context you'd like to share…"
                      className="w-full rounded-xl bg-slate-800/60 border border-slate-700 text-white placeholder-slate-500 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-violet-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Error state */}
                  {status === "error" && (
                    <div className="rounded-xl bg-rose-500/10 border border-rose-500/30 px-4 py-3" role="alert">
                      <p className="text-rose-400 text-sm">{errorMessage}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3.5 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold text-base transition-all hover:scale-[1.01] hover:shadow-lg hover:shadow-violet-500/20"
                    aria-label="Submit prospectus request"
                  >
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending…
                      </span>
                    ) : (
                      "Request Prospectus →"
                    )}
                  </button>

                  <p className="text-slate-600 text-xs text-center">
                    We respect your privacy. No spam, ever.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
