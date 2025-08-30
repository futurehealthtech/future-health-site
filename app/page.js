export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-[80vh] text-center">
      <h1 className="text-6xl font-extrabold text-indigo-600">
        Ella’s Members Club 🚀
      </h1>
      <p className="mt-6 text-lg text-gray-600 max-w-xl">
        Apply for access, get approved, and unlock members-only content.
      </p>
      <div className="mt-8 flex gap-4">
        <a
          href="/apply"
          className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:bg-indigo-700 transition"
        >
          Apply Now
        </a>
        <a
          href="/members"
          className="px-6 py-3 rounded-lg border font-semibold text-gray-700 hover:bg-gray-100 transition"
        >
          Members Area
        </a>
      </div>
    </main>
  );
}
