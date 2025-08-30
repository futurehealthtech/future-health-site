"use client";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function ApplyPage() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", reason: "" });

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    const { error } = await supabase.from("applications").insert([
      {
        name: form.name.trim(),
        email: form.email.trim().toLowerCase(),
        reason: form.reason.trim(),
      },
    ]);

    if (error) {
      console.error(error);
      setStatus("error");
    } else {
      setStatus("sent");
      setForm({ name: "", email: "", reason: "" });
    }
  }

  return (
    <main style={{ textAlign: "center", marginTop: 80 }}>
      <h1>Apply for Access</h1>

      {status === "sent" ? (
        <p>Thanks! We got your application.</p>
      ) : (
        <form onSubmit={handleSubmit} style={{ maxWidth: 480, margin: "24px auto", textAlign: "left" }}>
          <label>
            Name
            <br />
            <input
              name="name"
              value={form.name}
              onChange={onChange}
              required
              style={{ width: "100%" }}
            />
          </label>
          <br />
          <br />
          <label>
            Email
            <br />
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={onChange}
              required
              style={{ width: "100%" }}
            />
          </label>
          <br />
          <br />
          <label>
            Why do you want access?
            <br />
            <textarea
              name="reason"
              value={form.reason}
              onChange={onChange}
              required
              style={{ width: "100%", height: 100 }}
            />
          </label>
          <br />
          <br />
          <button disabled={status === "sending"}>
            {status === "sending" ? "Submitting…" : "Submit"}
          </button>
          {status === "error" && (
            <p style={{ color: "crimson" }}>Something went wrong. Try again.</p>
          )}
        </form>
      )}
    </main>
  );
}
