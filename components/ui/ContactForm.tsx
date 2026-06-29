"use client";

import {useState, type FormEvent, type ChangeEvent, type FocusEvent} from "react";
import {Send, Loader2} from "lucide-react";
import {toast} from "sonner";
import {SITE_CONFIG} from "@/constants";
import {gmailComposeUrl} from "@/lib/utils";

type Status = "idle" | "submitting";
type FormErrors = Partial<Record<"name" | "email" | "message", string>>;

const MAX_MESSAGE_LEN = 500;

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FormErrors>({});
  const [messageLen, setMessageLen] = useState(0);

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  // ── Validation ──
  function validateField(
    name: "name" | "email" | "message",
    value: string,
  ): string | undefined {
    const trimmed = value.trim();
    if (name === "name") {
      if (!trimmed) return "Nama wajib diisi";
      if (trimmed.length < 2) return "Nama terlalu pendek";
    }
    if (name === "email") {
      if (!trimmed) return "Email wajib diisi";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed))
        return "Format email tidak valid";
    }
    if (name === "message") {
      if (!trimmed) return "Pesan wajib diisi";
      if (trimmed.length < 10) return "Pesan minimal 10 karakter";
      if (trimmed.length > MAX_MESSAGE_LEN)
        return `Pesan maksimal ${MAX_MESSAGE_LEN} karakter`;
    }
    return undefined;
  }

  function handleBlur(e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const name = e.target.name as "name" | "email" | "message";
    if (name !== "name" && name !== "email" && name !== "message") return;
    const err = validateField(name, e.target.value);
    setErrors((prev) => ({...prev, [name]: err}));
  }

  function handleMessageChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setMessageLen(e.target.value.length);
    if (errors.message) {
      const err = validateField("message", e.target.value);
      setErrors((prev) => ({...prev, message: err}));
    }
  }

  function handleFieldChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const name = e.target.name as "name" | "email" | "message";
    if (errors[name]) {
      const err = validateField(name, e.target.value);
      setErrors((prev) => ({...prev, [name]: err}));
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Honeypot — silently succeed
    if (data.get("botcheck")) {
      toast.success("Terima kasih!");
      form.reset();
      setMessageLen(0);
      return;
    }

    // Run full validation
    const fieldErrors: FormErrors = {
      name: validateField("name", String(data.get("name") ?? "")),
      email: validateField("email", String(data.get("email") ?? "")),
      message: validateField("message", String(data.get("message") ?? "")),
    };
    setErrors(fieldErrors);
    if (fieldErrors.name || fieldErrors.email || fieldErrors.message) {
      toast.error("Periksa kembali isian form", {
        description: "Beberapa field belum valid.",
      });
      return;
    }

    // Fallback when no Web3Forms key — open Gmail compose
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
      toast.info("Membuka Gmail...", {
        description: "Lengkapi & kirim dari tab Gmail yang baru terbuka.",
      });
      return;
    }

    setStatus("submitting");
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
        toast.success("Pesan terkirim! 🎉", {
          description: "Tim kami akan segera membalas.",
        });
        form.reset();
        setMessageLen(0);
        setErrors({});
      } else {
        toast.error("Gagal mengirim pesan", {
          description: json.message ?? "Coba lagi atau hubungi via WhatsApp.",
        });
      }
    } catch {
      toast.error("Tidak dapat terhubung", {
        description: "Periksa koneksi internet dan coba lagi.",
      });
    } finally {
      setStatus("idle");
    }
  }

  const messageCounterColor =
    messageLen > MAX_MESSAGE_LEN
      ? "#dc2626"
      : messageLen > MAX_MESSAGE_LEN * 0.85
        ? "#d97706"
        : "var(--text-muted)";

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-4 p-6 rounded-2xl card-earthy"
      noValidate
    >
      <div>
        <h3
          className="font-heading font-bold text-lg mb-1 tracking-tight"
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
        <Field
          label="Nama"
          name="name"
          required
          autoComplete="name"
          error={errors.name}
          onBlur={handleBlur}
          onChange={handleFieldChange}
        />
        <Field
          label="Email"
          name="email"
          type="email"
          required
          autoComplete="email"
          error={errors.email}
          onBlur={handleBlur}
          onChange={handleFieldChange}
        />
      </div>

      <Field
        label="Subjek"
        name="subject"
        autoComplete="off"
      />

      <Field
        label="Pesan"
        name="message"
        required
        as="textarea"
        rows={5}
        autoComplete="off"
        error={errors.message}
        onBlur={handleBlur}
        onChange={handleMessageChange}
        helper={
          <span
            className="text-[10px] font-medium tabular-nums"
            style={{color: messageCounterColor}}
          >
            {messageLen}/{MAX_MESSAGE_LEN}
          </span>
        }
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="btn-primary justify-center min-w-[160px] disabled:opacity-60 disabled:cursor-not-allowed"
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
    </form>
  );
}

interface FieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "as"> {
  label: string;
  name: string;
  as?: "input" | "textarea";
  rows?: number;
  error?: string;
  helper?: React.ReactNode;
  onBlur?: (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

function Field({
  label,
  name,
  as = "input",
  rows,
  error,
  helper,
  onBlur,
  onChange,
  ...rest
}: FieldProps) {
  const baseClass =
    "w-full px-3.5 py-2.5 rounded-xl text-sm bg-transparent border outline-none transition-colors duration-200";
  const borderColor = error
    ? "#dc2626"
    : "var(--border)";
  const inputStyle = {
    borderColor,
    color: "var(--text-primary)",
  } as const;

  return (
    <label className="flex flex-col gap-1.5">
      <span className="flex items-center justify-between gap-2">
        <span
          className="text-xs font-semibold uppercase"
          style={{
            color: "var(--text-muted)",
            letterSpacing: "0.10em",
          }}
        >
          {label}
          {rest.required && <span style={{color: "#C4932A"}}> *</span>}
        </span>
        {helper}
      </span>
      {as === "textarea" ? (
        <textarea
          name={name}
          rows={rows}
          required={rest.required}
          autoComplete={rest.autoComplete}
          className={`${baseClass} resize-y focus:border-[var(--primary)]`}
          style={inputStyle}
          onBlur={onBlur}
          onChange={onChange as (e: ChangeEvent<HTMLTextAreaElement>) => void}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
        />
      ) : (
        <input
          name={name}
          className={`${baseClass} focus:border-[var(--primary)]`}
          style={inputStyle}
          onBlur={onBlur}
          onChange={onChange}
          aria-invalid={!!error}
          aria-describedby={error ? `${name}-error` : undefined}
          {...rest}
        />
      )}
      {error && (
        <span
          id={`${name}-error`}
          className="text-[11px] font-medium"
          style={{color: "#dc2626"}}
        >
          {error}
        </span>
      )}
    </label>
  );
}
