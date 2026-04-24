"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

const RECAPTCHA_SITE_KEY = "6LflhscsAAAAAHDHmPiQrQhcs12mVoYlnXMCbufW";

type Props = {
  service: string;
  compact?: boolean;
};

type Status = "idle" | "submitting" | "success" | "error";

declare global {
  interface Window {
    grecaptcha?: {
      render: (element: HTMLElement, options: Record<string, unknown>) => number;
      reset: (widgetId?: number) => void;
      getResponse: (widgetId?: number) => string;
    };
    onRecaptchaLoad?: () => void;
  }
}

export default function LeadForm({ service, compact = false }: Props) {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const recaptchaRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);

  useEffect(() => {
    const renderWidget = () => {
      if (recaptchaRef.current && window.grecaptcha && widgetIdRef.current === null) {
        widgetIdRef.current = window.grecaptcha.render(recaptchaRef.current, {
          sitekey: RECAPTCHA_SITE_KEY,
          theme: "light",
        });
      }
    };
    if (window.grecaptcha) {
      renderWidget();
    } else {
      window.onRecaptchaLoad = renderWidget;
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (formData.get("website")) {
      setStatus("success");
      form.reset();
      return;
    }

    const recaptchaToken =
      widgetIdRef.current !== null && window.grecaptcha
        ? window.grecaptcha.getResponse(widgetIdRef.current)
        : "";

    if (!recaptchaToken) {
      setStatus("error");
      setErrorMsg("Please confirm you are not a robot.");
      return;
    }

    const payload = {
      name: String(formData.get("name") ?? "").trim(),
      phone: String(formData.get("phone") ?? "").trim(),
      email: String(formData.get("email") ?? "").trim(),
      message: String(formData.get("message") ?? "").trim(),
      service: String(formData.get("service") ?? "").trim(),
      "g-recaptcha-response": recaptchaToken,
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
    };

    try {
      const res = await fetch("https://formspree.io/f/xqewwoqz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => null);
        let msg = `Submission failed (${res.status}). Please try again or call us.`;
        if (data && Array.isArray(data.errors) && data.errors.length > 0) {
          msg = data.errors.map((e: { message?: string; code?: string }) => e.message || e.code || "error").join(", ");
        } else if (data && typeof data.error === "string") {
          msg = data.error;
        }
        throw new Error(msg);
      }
      setStatus("success");
      form.reset();
      if (widgetIdRef.current !== null && window.grecaptcha) window.grecaptcha.reset(widgetIdRef.current);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      if (widgetIdRef.current !== null && window.grecaptcha) window.grecaptcha.reset(widgetIdRef.current);
    }
  }

  if (status === "success") {
    return (
      <div className={`bg-white rounded-xl shadow-2xl ${compact ? "p-6" : "p-7"} text-center`}>
        <div className="mx-auto w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-xl font-bold text-gray-900 mb-2">Thanks, we got your request!</p>
        <p className="text-gray-600">A licensed plumber will reach out shortly. For emergencies, please call us directly.</p>
      </div>
    );
  }

  return (
    <>
      <Script
        src="https://www.google.com/recaptcha/api.js?onload=onRecaptchaLoad&render=explicit"
        strategy="afterInteractive"
        async
        defer
      />
      <form
        onSubmit={handleSubmit}
        className={`bg-white rounded-xl shadow-2xl ${compact ? "p-5" : "p-6"}`}
      >
        <div className="mb-4">
          <p className="text-xl font-bold text-gray-900">Get a Free Estimate</p>
          <p className="text-sm text-gray-600">Fast response, typically within the hour</p>
        </div>

        <input type="hidden" name="service" value={service} />
        {/* Honeypot - bots fill this, humans won't see it */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="absolute left-[-9999px] opacity-0 h-0 w-0"
          aria-hidden="true"
        />

        <div className="space-y-3">
          <input
            name="name"
            type="text"
            required
            placeholder="Your name"
            autoComplete="name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none"
          />
          <input
            name="phone"
            type="tel"
            required
            placeholder="Phone number"
            autoComplete="tel"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email address"
            autoComplete="email"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none"
          />
          <textarea
            name="message"
            rows={3}
            placeholder="Briefly describe the issue (optional)"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-red-600 focus:border-red-600 outline-none resize-none"
          />
        </div>

        <div ref={recaptchaRef} className="mt-4" />

        <button
          type="submit"
          disabled={status === "submitting"}
          className="mt-4 w-full bg-red-700 hover:bg-red-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition shadow-md"
        >
          {status === "submitting" ? "Sending..." : "Request Free Estimate"}
        </button>

        {status === "error" && (
          <p className="mt-3 text-sm text-red-700">{errorMsg}</p>
        )}

        <p className="mt-3 text-xs text-gray-500 text-center">
          By submitting, you agree to be contacted. We never share your info.
        </p>
      </form>
    </>
  );
}
