import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import Link from "next/link";

import { companyLinks } from "./site-data";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stackmerce.com"),
  title: {
    default: "StackMerce",
    template: "%s | StackMerce",
  },
  description:
    "StackMerce builds focused commerce apps for teams that want cleaner operations and stronger store performance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${plexMono.variable} min-h-full bg-[var(--surface)] text-[var(--ink)] antialiased`}
    >
      <body className="min-h-screen">
        <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-5 sm:px-8">
          <header className="sticky top-0 z-20 border-b border-black/5 bg-[color:rgba(246,242,235,0.86)] backdrop-blur">
            <div className="flex items-center justify-between gap-4 py-5">
              <Link className="inline-flex items-center gap-3" href="/">
                <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--ink)] text-sm font-semibold tracking-[0.24em] text-[var(--surface)]">
                  SM
                </span>
                <div>
                  <strong className="block font-[family:var(--font-display)] text-lg font-semibold">
                    StackMerce
                  </strong>
                  <span className="block text-xs uppercase tracking-[0.18em] text-[var(--muted)]">
                    Commerce app studio
                  </span>
                </div>
              </Link>

              <nav className="flex flex-wrap items-center gap-3 text-sm font-medium text-[var(--muted)]">
                <Link className="rounded-full px-3 py-2 transition hover:bg-black/5 hover:text-[var(--ink)]" href="/">
                  Apps
                </Link>
                {companyLinks.map((link) => (
                  <Link
                    key={link.href}
                    className="rounded-full px-3 py-2 transition hover:bg-black/5 hover:text-[var(--ink)]"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <main className="flex-1 py-8 sm:py-10">{children}</main>

          <footer className="border-t border-black/5 py-6 text-sm text-[var(--muted)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p>StackMerce builds focused apps for modern commerce teams.</p>
              <div className="flex flex-wrap gap-4">
                {companyLinks.map((link) => (
                  <Link
                    key={link.href}
                    className="transition hover:text-[var(--ink)]"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
