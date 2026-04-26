import Link from "next/link";

import { apps } from "./site-data";

const principles = [
  {
    title: "Focused products",
    description:
      "Each app solves one commercial problem well instead of trying to become a vague all-in-one stack.",
  },
  {
    title: "Operational clarity",
    description:
      "We design for merchants and operators who need fast control, clear constraints, and less friction in daily workflows.",
  },
  {
    title: "Lean infrastructure",
    description:
      "Public web stays simple and fast, while app infrastructure is kept separate and cost-conscious behind the scenes.",
  },
];

export default function Home() {
  return (
    <div className="space-y-6 sm:space-y-8">
      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.45fr)_minmax(20rem,0.85fr)]">
        <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--card-strong)] p-6 shadow-[0_24px_60px_rgba(26,36,31,0.08)] sm:p-8">
          <span className="inline-flex rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            StackMerce
          </span>
          <h1 className="mt-5 max-w-3xl font-[family:var(--font-display)] text-4xl font-semibold tracking-[-0.05em] text-[var(--ink)] sm:text-5xl lg:text-6xl">
            One home for the commerce apps you ship.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            StackMerce is the public layer around our app portfolio. It gives
            merchants one clear place to discover products, understand what each
            app does, and access the policy pages Shopify expects.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-[var(--surface)] transition hover:-translate-y-0.5 hover:bg-black"
              href="#apps"
            >
              Browse apps
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] px-5 py-3 text-sm font-semibold text-[var(--ink)] transition hover:-translate-y-0.5 hover:bg-white"
              href="/privacy"
            >
              View policy pages
            </Link>
          </div>
        </div>

        <div className="grid gap-4">
          <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_18px_45px_rgba(26,36,31,0.06)]">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Live portfolio
            </span>
            <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <Metric value={apps.length} label="Public apps" />
              <Metric value="1" label="Policy hub" />
              <Metric value="Vercel" label="Web runtime" />
            </div>
          </div>

          <div className="rounded-[2rem] border border-[var(--line)] bg-[linear-gradient(135deg,#1f2c27_0%,#29433a_100%)] p-6 text-white shadow-[0_20px_50px_rgba(26,36,31,0.18)]">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
              Why this setup
            </span>
            <p className="mt-4 text-sm leading-7 text-white/86">
              Keep your public company site separate from Shopify runtime and
              billing logic. That makes launches cleaner, policy pages easier,
              and future apps easier to add without touching your embedded app
              infrastructure.
            </p>
          </div>
        </div>
      </section>

      <section
        className="rounded-[2rem] border border-[var(--line)] bg-[var(--card-strong)] p-6 shadow-[0_18px_45px_rgba(26,36,31,0.05)] sm:p-8"
        id="apps"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              App directory
            </span>
            <h2 className="mt-2 font-[family:var(--font-display)] text-3xl font-semibold tracking-[-0.04em]">
              Current StackMerce apps
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
            This section is designed to grow. Add a new app page, link it here,
            and the public site stays consistent without touching your Shopify
            admin app.
          </p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {apps.map((app) => (
            <article
              className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--surface)] p-6"
              key={app.slug}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                    {app.category}
                  </span>
                  <h3 className="mt-2 font-[family:var(--font-display)] text-2xl font-semibold tracking-[-0.04em]">
                    {app.name}
                  </h3>
                </div>
                <span className="inline-flex w-fit rounded-full border border-[var(--line)] bg-[var(--accent-soft)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--accent)]">
                  {app.status}
                </span>
              </div>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
                {app.summary}
              </p>

              <ul className="mt-5 grid gap-3 text-sm leading-6 text-[var(--ink)]">
                {app.highlights.map((highlight) => (
                  <li
                    className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3"
                    key={highlight}
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              <Link
                className="mt-6 inline-flex items-center rounded-full bg-[var(--teal)] px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#255b50]"
                href={app.href}
              >
                Open app profile
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-3">
        {principles.map((principle) => (
          <article
            className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--card)] p-6 shadow-[0_16px_36px_rgba(26,36,31,0.04)]"
            key={principle.title}
          >
            <h3 className="font-[family:var(--font-display)] text-xl font-semibold tracking-[-0.03em]">
              {principle.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-[var(--muted)]">
              {principle.description}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}

function Metric({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="rounded-[1.4rem] border border-[var(--line)] bg-white px-4 py-4">
      <strong className="block font-[family:var(--font-display)] text-3xl font-semibold tracking-[-0.04em] text-[var(--ink)]">
        {value}
      </strong>
      <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
        {label}
      </span>
    </div>
  );
}
