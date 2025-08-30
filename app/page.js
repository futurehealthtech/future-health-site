import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <section className="relative grid gap-10 md:grid-cols-[1.1fr_1fr] items-center">
      {/* Left side with warm clay block */}
      <div className="rounded-3xl bg-sand/60 p-8 md:p-12 border border-white/40">
        <h1 className="font-[family:var(--font-display)] text-4xl md:text-6xl leading-tight text-wood">
          Where health insight is shaped.
        </h1>
        <p className="mt-5 max-w-xl text-mauve/90">
          Calm, evidence-led research and insight — curated and thoughtfully gated.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/apply" className="inline-flex items-center rounded-xl bg-clay px-6 py-3 text-white font-semibold shadow hover:brightness-110 transition">
            Apply Now
          </Link>
          <Link href="/members" className="inline-flex items-center rounded-xl border border-clay/70 px-6 py-3 font-semibold text-clay hover:bg-clay/10 transition">
            Members Area
          </Link>
        </div>
      </div>

      {/* Right side: image with overlay card */}
      <div className="relative">
        <div className="overflow-hidden rounded-3xl">
          <Image src="/hero.jpg" alt="Warm interior texture" width={1400} height={900} className="h-[440px] w-full object-cover" priority />
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[88%] max-w-[520px] rounded-2xl bg-white/65 backdrop-blur border border-white/60 shadow-[0_20px_60px_-20px_rgba(62,54,46,0.35)] p-6 md:p-8">
          <div className="aspect-[4/3] overflow-hidden rounded-lg border border-white/60">
            <Image src="/hero.jpg" alt="Preview interior" width={1200} height={900} className="h-full w-full object-cover" />
          </div>
          <h2 className="mt-5 font-[family:var(--font-display)] text-2xl md:text-3xl text-wood">
            Future Health Insights
          </h2>
          <p className="mt-2 text-sm text-wood/70">
            Calm, evidence-led content — quietly crafted, deeply grounded.
          </p>
          <div className="mt-5">
            <Link href="/apply" className="inline-flex items-center rounded-full px-5 py-2 border border-wood/30 text-wood hover:bg-wood/5">
              Learn More ↗
            </Link>
          </div>
        </div>
      </div>

      {/* Right-hand color rail (desktop only) */}
      <div className="hidden lg:block absolute right-[-40px] top-0 h-full w-8 rounded-l-2xl"
           style={{ background: "linear-gradient(#3E362E 20%, #865D36 40%, #93785B 60%, #AC8968 80%, #A69080 100%)" }} />
    </section>
  );
}


