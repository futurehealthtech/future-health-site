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
            <link href="/" className="font-semibold text-lg">Future Health</link>
            <div className="flex gap-4 text-sm">
              <link href="/apply" className="hover:text-indigo-600">Apply</link>
              <link href="/members" className="hover:text-indigo-600">Members</link>
              <link href="/admin" className="hover:text-indigo-600">Admin</link>
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

