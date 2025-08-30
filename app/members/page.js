"use client";
import { useState } from "react";

export default function MembersPage() {
  const [email, setEmail] = useState("");
  const [checking, setChecking] = useState(false);
  const [approved, setApproved] = useState(null); // null = not checked yet
  const [err, setErr] = useState("");

  async function checkApproval(e) {
    e.preventDefault();
    setChecking(true);
    setErr("");
    setApproved(null);

    try {
      const res = await fetch("/api/check-approval", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (!res.ok) {
        setErr(await res.text());
        setApproved(false);
      } else {
        const { approved } = await res.json();
        setApproved(approved);
      }
    } catch (e) {
      setErr("Network error");
      setApproved(false);
    } finally {
      setChecking(false);
    }
  }

  return (
    <main style={{ maxWidth: 700, margin: "40px auto", padding: 16 }}>
      <h1>Members Area</h1>

      {approved !== true && (
        <form onSubmit={checkApproval} style={{ marginTop: 16 }}>
          <label>
            Enter your email to check access:<br />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ width: "100%", maxWidth: 380 }}
            />
          </label>
          <div style={{ marginTop: 10 }}>
            <button disabled={checking}>
              {checking ? "Checking…" : "Check access"}
            </button>
          </div>
        </form>
      )}

      {err && <p style={{ color: "crimson", marginTop: 12 }}>{err}</p>}

      {approved === false && !err && (
        <p style={{ marginTop: 16 }}>
          ❌ Not approved yet. If you already applied, we’ll email you when you’re in.
        </p>
      )}

      {approved === true && (
        <>
          <hr style={{ margin: "24px 0" }} />
          <h2>✅ Approved! Welcome.</h2>
          <p>Here is the members-only content. 🎉</p>
        </>
      )}
    </main>
  );
}

