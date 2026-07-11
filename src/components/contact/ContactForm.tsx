"use client";

import { FormEvent, useState } from "react";
import { inquiryTypes, budgetRanges } from "@/data/contact";
import { cn } from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full rounded-xl border border-ink/15 bg-white px-4 py-3 text-sm text-ink placeholder:text-ink-soft/50 focus-visible:outline-2 focus-visible:outline-glow-blue focus-visible:outline-offset-1 transition-colors";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const consentChecked = form.elements.namedItem("consent") as HTMLInputElement | null;
    formData.set("consent", consentChecked?.checked ? "true" : "false");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData
      });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        setErrorMessage(data.error ?? "문의 접수 중 오류가 발생했습니다.");
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setErrorMessage("네트워크 오류로 문의를 접수하지 못했습니다. 잠시 후 다시 시도해 주세요.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div
        role="status"
        className="rounded-2xl bg-bg-soft p-10 text-center"
      >
        <p className="font-en font-bold text-2xl text-ink">문의가 접수되었습니다.</p>
        <p className="mt-3 text-ink-soft leading-relaxed">
          빠른 시일 내에 담당자가 확인 후 연락드리겠습니다.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-7 text-sm font-semibold text-ink underline underline-offset-4"
        >
          다른 문의 남기기
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Field label="이름" htmlFor="name" required>
          <input id="name" name="name" type="text" required autoComplete="name" className={inputClasses} />
        </Field>
        <Field label="회사 또는 기관명" htmlFor="company">
          <input id="company" name="company" type="text" autoComplete="organization" className={inputClasses} />
        </Field>
        <Field label="연락처" htmlFor="phone">
          <input id="phone" name="phone" type="tel" autoComplete="tel" className={inputClasses} />
        </Field>
        <Field label="이메일" htmlFor="email" required>
          <input id="email" name="email" type="email" required autoComplete="email" className={inputClasses} />
        </Field>
        <Field label="문의 분야" htmlFor="inquiryType">
          <select id="inquiryType" name="inquiryType" className={inputClasses} defaultValue="">
            <option value="" disabled>
              선택해 주세요
            </option>
            {inquiryTypes.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </Field>
        <Field label="프로젝트 일정" htmlFor="timeline">
          <input
            id="timeline"
            name="timeline"
            type="text"
            placeholder="예: 2026년 9월 론칭 목표"
            className={inputClasses}
          />
        </Field>
      </div>

      <Field label="예상 예산" htmlFor="budget" hint="선택 항목입니다.">
        <select id="budget" name="budget" className={inputClasses} defaultValue="">
          <option value="">선택 안 함</option>
          {budgetRanges.map((b) => (
            <option key={b} value={b}>
              {b}
            </option>
          ))}
        </select>
      </Field>

      <Field label="프로젝트 설명" htmlFor="message" required>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="프로젝트 배경, 목표, 필요한 협업 범위를 자유롭게 남겨주세요."
          className={cn(inputClasses, "resize-none")}
        />
      </Field>

      <Field label="참고자료 첨부" htmlFor="attachment" hint="선택 항목입니다. (PDF, PPT, 이미지 등)">
        <input
          id="attachment"
          name="attachment"
          type="file"
          className="w-full text-sm text-ink-soft file:mr-4 file:rounded-full file:border-0 file:bg-bg-mute file:px-4 file:py-2 file:text-sm file:font-semibold file:text-ink hover:file:bg-ink hover:file:text-white file:transition-colors"
        />
      </Field>

      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          className="mt-1 w-4 h-4 accent-ink"
        />
        <label htmlFor="consent" className="text-sm text-ink-soft leading-relaxed">
          문의 처리를 위한 개인정보 수집 및 이용에 동의합니다.{" "}
          <a href="/privacy" className="underline underline-offset-2 hover:text-ink">
            개인정보처리방침 보기
          </a>
          <span className="text-red-500"> *</span>
        </label>
      </div>

      {status === "error" && errorMessage && (
        <p role="alert" className="text-sm text-red-600">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-ink text-white font-en font-semibold px-8 py-4 min-h-[44px] text-base hover:bg-[#2c2c31] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "전송 중..." : "Start a Project"}
      </button>
    </form>
  );
}

function Field({
  label,
  htmlFor,
  required,
  hint,
  children
}: {
  label: string;
  htmlFor: string;
  required?: boolean;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="block text-sm font-semibold text-ink mb-2">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      {children}
      {hint && <p className="mt-1.5 text-xs text-ink-soft/70">{hint}</p>}
    </div>
  );
}
