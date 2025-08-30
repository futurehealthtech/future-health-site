import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Future Health",
  description: "Independent health research and insights",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-camel-200 text-slate-700 antialiased">
        <header className="sticky top-0 z-10 backdrop-blur bg-white/60 border-b border-white/50">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-semibold text-lg">Future Health</Link>
            <div className="flex gap-4 text-sm">
              <Link href="/apply" className="hover:text-fern-600">Apply</Link>
              <Link href="/members" className="hover:text-fern-600">Members</Link>
              <Link href="/admin" className="hover:text-fern-600">Admin</Link>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-12">
          {children}
        </main>

        <footer className="mt-12 border-t border-white/50 bg-white/60 backdrop-blur">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm">
            © {new Date().getFullYear()} Future Health
          </div>
        </footer>
      </body>
    </html>
  );
}
