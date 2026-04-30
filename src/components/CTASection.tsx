"use client";
import { useState } from "react";
import { brand } from "@/config/brand";
import { isValidName, isValidEmail } from "@/lib/validation";
import { useLanguage } from "@/context/LanguageContext";

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

const ctaIcons = ["📚", "🗺", "📅"];

export default function CTASection() {
  const { t } = useLanguage();
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
      newErrors.name = t.cta.form.nameError;
    }
    if (!isValidEmail(formData.email)) {
      newErrors.email = t.cta.form.emailError;
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
        setErrorMessage(data.error ?? t.cta.form.errorGeneric);
        setStatus("error");
      }
    } catch (error) {
      console.error("[CTASection] Form submission failed:", error);
      setErrorMessage(t.cta.form.errorGeneric);
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

  const inputClass = (hasError?: boolean) =>
    `w-full rounded-xl text-white placeholder-white/20 px-4 py-3 text-sm focus:outline-none transition-colors` +
    ` border ${hasError ? "border-rose-500/60" : "border-white/[0.07]"}` +
    ` bg-white/[0.04] focus:border-blue-500/40 focus:bg-white/[0.06]`;

  return (
    <section
      id="cta"
      className="py-28 lg:py-36 section-dark"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <p className="eyebrow-gold mb-5">{t.cta.eyebrow}</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              {t.cta.h2a}{" "}
              <span className="text-gradient-gold">{t.cta.h2b}</span>
            </h2>
            <p className="text-white/45 text-lg mb-10 leading-relaxed font-light font-sans-ui">
              {t.cta.sub}
            </p>

            <div className="space-y-5">
              {t.cta.items.map((item, i) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="text-xl flex-shrink-0 mt-0.5" aria-hidden="true">
                    {ctaIcons[i]}
                  </span>
                  <div>
                    <div className="text-white/80 font-semibold text-sm mb-0.5">
                      {item.title}
                    </div>
                    <div className="text-white/35 text-sm font-light font-sans-ui">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-10 text-white/30 text-sm font-sans-ui">
              {t.cta.preferEmail}{" "}
              <a
                href={`mailto:${brand.contact.email}`}
                className="hover:text-white/55 transition-colors"
                style={{ color: "#d4af37" }}
              >
                {brand.contact.email}
              </a>
            </p>
          </div>

          {/* Right: form */}
          <div
            className="relative overflow-hidden rounded-2xl p-8"
            style={{
              background: "rgba(12,20,52,0.85)",
              border: "1px solid rgba(212,175,55,0.18)",
            }}
          >
            {status === "success" ? (
              <div className="text-center py-10">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{
                    background: "rgba(52,211,153,0.10)",
                    border: "1px solid rgba(52,211,153,0.30)",
                  }}
                >
                  <svg className="w-7 h-7" style={{ color: "#34d399" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{t.cta.form.successTitle}</h3>
                <p className="text-white/45 leading-relaxed text-sm font-light font-sans-ui">
                  {t.cta.form.successBody}{" "}
                  <strong className="text-white/80 font-semibold">{formData.name}</strong>.{" "}
                  {t.cta.form.successBodyAt}{" "}
                  <strong className="font-semibold" style={{ color: "#d4af37" }}>
                    {formData.email}
                  </strong>{" "}
                  {t.cta.form.successBodySuffix}
                </p>
                <button
                  className="mt-6 text-sm text-white/25 hover:text-white/50 transition-colors underline"
                  onClick={() => {
                    setStatus("idle");
                    setFormData({ name: "", email: "", phone: "", childGrade: "", message: "" });
                  }}
                >
                  {t.cta.form.submitAnother}
                </button>
              </div>
            ) : (
              <>
                <h3 className="text-lg font-bold text-white mb-1">{t.cta.form.title}</h3>
                <p className="text-white/35 text-sm mb-6 font-light font-sans-ui">
                  {t.cta.form.subtitle}
                </p>

                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-white/50 mb-1.5 tracking-wide">
                      {t.cta.form.nameLbl} <span className="text-rose-400/70" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder={t.cta.form.namePlaceholder}
                      className={inputClass(!!errors.name)}
                      aria-describedby={errors.name ? "name-error" : undefined}
                      aria-invalid={!!errors.name}
                      aria-required="true"
                    />
                    {errors.name && (
                      <p id="name-error" className="text-rose-400/80 text-xs mt-1" role="alert">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-white/50 mb-1.5 tracking-wide">
                      {t.cta.form.emailLbl} <span className="text-rose-400/70" aria-hidden="true">*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.cta.form.emailPlaceholder}
                      className={inputClass(!!errors.email)}
                      aria-describedby={errors.email ? "email-error" : undefined}
                      aria-invalid={!!errors.email}
                      aria-required="true"
                    />
                    {errors.email && (
                      <p id="email-error" className="text-rose-400/80 text-xs mt-1" role="alert">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-xs font-medium text-white/50 mb-1.5 tracking-wide">
                      {t.cta.form.phoneLbl}{" "}
                      <span className="text-white/25 text-xs font-light">{t.cta.form.phoneOptional}</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder={t.cta.form.phonePlaceholder}
                      className={inputClass()}
                    />
                  </div>

                  {/* Grade */}
                  <div>
                    <label htmlFor="childGrade" className="block text-xs font-medium text-white/50 mb-1.5 tracking-wide">
                      {t.cta.form.gradeLbl}{" "}
                      <span className="text-white/25 text-xs font-light">{t.cta.form.gradeOptional}</span>
                    </label>
                    <select
                      id="childGrade"
                      name="childGrade"
                      value={formData.childGrade}
                      onChange={handleChange}
                      className={inputClass() + " appearance-none"}
                      style={{ colorScheme: "dark" }}
                    >
                      <option value="">{t.cta.form.gradeDefault}</option>
                      {t.cta.form.gradeOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-white/50 mb-1.5 tracking-wide">
                      {t.cta.form.messageLbl}{" "}
                      <span className="text-white/25 text-xs font-light">{t.cta.form.messageOptional}</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder={t.cta.form.messagePlaceholder}
                      className={inputClass() + " resize-none"}
                    />
                  </div>

                  {/* Error state */}
                  {status === "error" && (
                    <div
                      className="rounded-xl px-4 py-3"
                      style={{
                        background: "rgba(239,68,68,0.06)",
                        border: "1px solid rgba(239,68,68,0.20)",
                      }}
                      role="alert"
                    >
                      <p className="text-rose-400/80 text-sm">{errorMessage}</p>
                    </div>
                  )}

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full py-3.5 rounded-xl font-bold text-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed font-sans-ui"
                    style={{
                      background: "linear-gradient(135deg, #b8962e 0%, #d4af37 100%)",
                      color: "#08122a",
                      boxShadow: "0 4px 20px rgba(212,175,55,0.25)",
                    }}
                    aria-label={t.cta.form.submit}
                  >
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        {t.cta.form.submitting}
                      </span>
                    ) : (
                      t.cta.form.submit
                    )}
                  </button>

                  <p className="text-white/20 text-xs text-center">
                    {t.cta.form.privacy}
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
