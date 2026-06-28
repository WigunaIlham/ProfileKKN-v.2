"use client";

import {useState, type FormEvent} from "react";
import {Send, CheckCircle2, AlertCircle, Loader2} from "lucide-react";
import {SITE_CONFIG} from "@/constants";
import {gmailComposeUrl} from "@/lib/utils";

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — if filled, silently succeed
    if (data.get("botcheck")) {
      setStatus("success");
      form.reset();
      return;
    }

    // Fallback when no access key is configured — open Gmail compose
    if (!accessKey) {
      const name = String(data.get("name") ?? "");
      const email = String(data.get("email") ?? "");
      const subject = String(data.get("subject") ?? "Pesan dari website");
      const body = `${String(data.get("message") ?? "")}\n\n— Dari: ${name} <${email}>`;
      window.open(
        gmailComposeUrl(SITE_CONFIG.email, subject, body),
        "_blank",
        "noopener,noreferrer",
      );
      return;
    }

    setStatus("submitting");
    setErrorMsg("");
    data.append("access_key", accessKey);
    data.append("from_name", SITE_CONFIG.name);
    data.append("subject", String(data.get("subject") ?? "Pesan dari website"));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(json.message ?? "Gagal mengirim pesan.");
      }
    } catch {
      setStatus("error");
      setErrorMsg("Tidak dapat terhubung. Coba lagi nanti.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 p-6 rounded-2xl card-earthy"
      noValidate
    >
      <div>
        <h3
          className="font-heading font-bold text-lg mb-1"
          style={{color: "var(--text-primary)"}}
        >
          Kirim Pesan
        </h3>
        <p className="text-sm" style={{color: "var(--text-muted)"}}>
          Punya pertanyaan atau ide kolaborasi? Tulis langsung di sini.
        </p>
      </div>

      <input
        type="text"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <div className="grid sm:grid-cols-2 gap-3">
        <Field label="Nama" name="name" required autoComplete="name" />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>

      <Field label="Subjek" name="subject" autoComplete="off" />

      <Field
        label="Pesan"
        name="message"
        required
        as="textarea"
        rows={5}
        autoComplete="off"
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            Mengirim...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            {accessKey ? "Kirim Pesan" : "Buka Gmail"}
          </>
        )}
      </button>

      <div aria-live="polite" className="min-h-[1.25rem]">
        {status === "success" && (
          <p
            className="flex items-center gap-2 text-sm"
            style={{color: "var(--primary)"}}
          >
            <CheckCircle2 className="w-4 h-4" />
            Terima kasih! Pesanmu sudah terkirim, kami akan segera membalas.
          </p>
        )}
        {status === "error" && (
          <p className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400">
            <AlertCircle className="w-4 h-4" />
            {errorMsg}
          </p>
        )}
      </div>
    </form>
  );
}

interface FieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "as"> {
  label: string;
  name: string;
  as?: "input" | "textarea";
  rows?: number;
}

function Field({label, name, as = "input", rows, ...rest}: FieldProps) {
  const baseClass =
    "w-full px-3.5 py-2.5 rounded-xl text-sm bg-transparent border outline-none transition-colors duration-200 focus:border-[var(--primary)]";
  const inputStyle = {
    borderColor: "var(--border)",
    color: "var(--text-primary)",
  } as const;

  return (
    <label className="flex flex-col gap-1.5">
      <span
        className="text-xs font-semibold uppercase tracking-wider"
        style={{color: "var(--text-muted)"}}
      >
        {label}
        {rest.required && <span style={{color: "#C4932A"}}> *</span>}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          rows={rows}
          required={rest.required}
          autoComplete={rest.autoComplete}
          className={baseClass + " resize-y"}
          style={inputStyle}
        />
      ) : (
        <input
          name={name}
          className={baseClass}
          style={inputStyle}
          {...rest}
        />
      )}
    </label>
  );
}
