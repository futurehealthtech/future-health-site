import "./globals.css"; 

export const metadata = { 
  title: "Future Health", 
  description: "Independent health research and insights" 
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-50 text-gray-900 antialiased">
        <header className="border-b bg-white">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a href="/" className="font-semibold text-lg">Future Health</a>
            <div className="flex gap-4 text-sm">
              <a href="/apply" className="hover:text-indigo-600">Apply</a>
              <a href="/members" className="hover:text-indigo-600">Members</a>
              <a href="/admin" className="hover:text-indigo-600">Admin</a>
            </div>
          </nav>
        </header>

        <main className="mx-auto max-w-6xl px-4 py-10">
          {children}
        </main>

        <footer className="mt-12 border-t bg-white">
          <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-500">
            © {new Date().getFullYear()} Future Health — All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}

