import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import Image from "next/image";
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
  icons: {
    icon: [
      { url: "/brand/stackmerce-mark.svg", type: "image/svg+xml" },
    ],
    shortcut: ["/brand/stackmerce-mark.svg"],
    apple: ["/brand/stackmerce-mark.svg"],
  },
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
          <header className="sticky top-0 z-20 mt-4">
            <div className="glass-card aurora-border flex items-center justify-between gap-4 rounded-[1.75rem] px-4 py-4 shadow-[0_22px_60px_rgba(0,0,0,0.28)] sm:px-6">
              <Link className="inline-flex items-center gap-3" href="/">
                <Image
                  alt="StackMerce"
                  className="h-11 w-11 rounded-2xl"
                  height={44}
                  src="/brand/stackmerce-mark.svg"
                  width={44}
                />
                <div>
                  <strong className="block font-[family:var(--font-display)] text-lg font-semibold text-white">
                    StackMerce
                  </strong>
                  <span className="block text-xs uppercase tracking-[0.22em] text-[var(--muted)]">
                    Commerce app studio
                  </span>
                </div>
              </Link>

              <nav className="flex flex-wrap items-center gap-2 text-sm font-medium text-[var(--muted)]">
                <Link className="rounded-full border border-transparent px-3 py-2 transition hover:border-white/10 hover:bg-white/6 hover:text-white" href="/">
                  Apps
                </Link>
                {companyLinks.map((link) => (
                  <Link
                    key={link.href}
                    className="rounded-full border border-transparent px-3 py-2 transition hover:border-white/10 hover:bg-white/6 hover:text-white"
                    href={link.href}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          <main className="flex-1 py-8 sm:py-10">{children}</main>

          <footer className="border-t border-white/8 py-6 text-sm text-[var(--muted)]">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <p>StackMerce builds focused apps for modern commerce teams.</p>
              <div className="flex flex-wrap gap-4">
                {companyLinks.map((link) => (
                  <Link
                    key={link.href}
                    className="transition hover:text-white"
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
