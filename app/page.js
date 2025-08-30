import Link from "next/link";

export default function Home() {
  return (
    <section className="rounded-2xl border border-white/50 bg-white/70 backdrop-blur p-10 md:p-14 shadow-sm">
      <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-slate-700">
        Future Health
      </h1>
      <p className="mt-5 text-lg text-slate-600 max-w-2xl">
        Health and wellbeing research community.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <Link
          href="/apply"
          className="inline-flex items-center rounded-xl bg-fern-600 px-6 py-3 text-white font-semibold shadow hover:brightness-110 transition"
        >
          Apply Now
        </Link>
        <Link
          href="/members"
          className="inline-flex items-center rounded-xl border border-fern-600/70 px-6 py-3 font-semibold text-fern-600 hover:bg-fern-50 transition"
        >
          Members Area
        </Link>
      </div>

      {/* Optional: subtle badges in sky/camel for pops */}
      <div className="mt-6 flex flex-wrap gap-2">
        <span className="inline-block rounded-full bg-camel-100/70 px-3 py-1 text-sm">
          Research-first
        </span>
        <span className="inline-block rounded-full bg-sky-100/70 px-3 py-1 text-sm text-slate-700">
          Evidence-based
        </span>
      </div>
    </section>
  );
}

