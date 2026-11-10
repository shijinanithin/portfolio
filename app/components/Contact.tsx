"use client";

import { useState, type FormEvent } from "react";
import styles from "./Contact.module.css";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");
    formData.append("subject", "New message from your portfolio");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className={styles.section}>
      <div className={styles.formCard}>
        <p className={styles.eyebrow}>Contact</p>
        <h2 className={styles.title}>Let&apos;s work together.</h2>
        <p className={styles.intro}>
          Send a message and I&apos;ll get back to you within one working day.
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="checkbox"
            name="botcheck"
            className={styles.hidden}
            tabIndex={-1}
            autoComplete="off"
          />

          <label className={styles.label}>
            Name
            <input type="text" name="name" required className={styles.input} />
          </label>

          <label className={styles.label}>
            Email
            <input
              type="email"
              name="email"
              required
              className={styles.input}
            />
          </label>

          <label className={styles.label}>
            Message
            <textarea
              name="message"
              rows={4}
              required
              className={styles.textarea}
            />
          </label>

          <button
            type="submit"
            disabled={status === "sending"}
            className={styles.button}
          >
            {status === "sending" ? "Sending..." : "Send message"}
          </button>

          {status === "success" && (
            <p className={styles.success} role="status">
              Thank you! Your message has been sent.
            </p>
          )}
          {status === "error" && (
            <p className={styles.error} role="alert">
              Sorry, something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
