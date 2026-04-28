import Link from "next/link";
import Image from "next/image";

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
      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.3fr)_minmax(22rem,0.95fr)]">
        <div className="glass-card aurora-border relative overflow-hidden rounded-[2.2rem] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.3)] sm:p-8">
          <div className="absolute -right-20 top-0 h-48 w-48 rounded-full bg-[rgba(37,207,255,0.16)] blur-3xl" />
          <div className="absolute bottom-0 left-8 h-32 w-32 rounded-full bg-[rgba(125,67,255,0.2)] blur-3xl" />
          <span className="relative inline-flex rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            StackMerce
          </span>
          <h1 className="relative mt-5 max-w-3xl font-[family:var(--font-display)] text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-6xl">
            Focused Shopify apps with a cleaner operating layer.
          </h1>
          <p className="relative mt-5 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg">
            StackMerce packages sharp commercial tools for merchants who want
            less dashboard clutter, tighter control, and infrastructure that
            stays lean behind the scenes.
          </p>
          <div className="relative mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#22d3ee_0%,#2d7dff_52%,#8246ff_100%)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(45,125,255,0.35)]"
              href="#apps"
            >
              Browse apps
            </Link>
            <Link
              className="inline-flex items-center justify-center rounded-full border border-white/12 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/8"
              href="/privacy"
            >
              View policy pages
            </Link>
          </div>
          <div className="relative mt-10 grid gap-3 sm:grid-cols-3">
            <Signal value="Lean runtime" label="Cloud Run + Firestore in prod" />
            <Signal value="Shopify-native" label="App data stays close to commerce" />
            <Signal value="Focused scope" label="One product, one problem, clear control" />
          </div>
        </div>

        <div className="grid gap-4">
          <div className="glass-card aurora-border overflow-hidden rounded-[2.2rem] p-6 shadow-[0_22px_60px_rgba(0,0,0,0.26)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                  Brand mark
                </span>
                <p className="mt-3 max-w-xs text-sm leading-7 text-[var(--muted)]">
                  A compact layer system for apps, operations, and the public
                  company surface around them.
                </p>
              </div>
              <Image
                alt="StackMerce mark"
                className="h-20 w-20 rounded-[1.6rem] shadow-[0_20px_40px_rgba(0,0,0,0.3)]"
                height={80}
                src="/brand/stackmerce-mark.svg"
                width={80}
              />
            </div>
            <div className="mt-6 rounded-[1.6rem] border border-white/10 bg-[var(--panel)] p-4">
              <Image
                alt="StackMerce logo"
                className="h-auto w-full"
                height={174}
                src="/brand/stackmerce-logo.svg"
                width={449}
              />
            </div>
          </div>

          <div className="glass-card aurora-border rounded-[2.2rem] p-6 shadow-[0_20px_56px_rgba(0,0,0,0.22)]">
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Live portfolio
            </span>
            <div className="mt-4 grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <Metric value={apps.length} label="Public apps" />
              <Metric value="1" label="Policy hub" />
              <Metric value="Vercel" label="Web runtime" />
            </div>
          </div>
        </div>
      </section>

      <section
        className="glass-card aurora-border rounded-[2.2rem] p-6 shadow-[0_24px_70px_rgba(0,0,0,0.26)] sm:p-8"
        id="apps"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              App directory
            </span>
            <h2 className="mt-2 font-[family:var(--font-display)] text-3xl font-semibold tracking-[-0.05em] text-white">
              Current StackMerce apps
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-[var(--muted)]">
            A compact product shelf for apps that need clear positioning, a
            stable legal surface, and room to expand without bloating the site.
          </p>
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-2">
          {apps.map((app) => (
            <article
              className="rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(13,23,48,0.94),rgba(6,12,28,0.94))] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
              key={app.slug}
            >
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
                    {app.category}
                  </span>
                  <h3 className="mt-2 font-[family:var(--font-display)] text-2xl font-semibold tracking-[-0.04em] text-white">
                    {app.name}
                  </h3>
                </div>
                <span className="inline-flex w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200">
                  {app.status}
                </span>
              </div>

              <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--muted)]">
                {app.summary}
              </p>

              <ul className="mt-5 grid gap-3 text-sm leading-6 text-[var(--ink)]">
                {app.highlights.map((highlight) => (
                  <li
                    className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3 text-[var(--ink)]"
                    key={highlight}
                  >
                    {highlight}
                  </li>
                ))}
              </ul>

              <Link
                className="mt-6 inline-flex items-center rounded-full bg-[linear-gradient(135deg,#22d3ee_0%,#2d7dff_52%,#8246ff_100%)] px-4 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(45,125,255,0.35)]"
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
            className="glass-card aurora-border rounded-[1.8rem] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)]"
            key={principle.title}
          >
            <h3 className="font-[family:var(--font-display)] text-xl font-semibold tracking-[-0.03em] text-white">
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

function Signal({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-[1.45rem] border border-white/10 bg-white/5 px-4 py-4">
      <strong className="block text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
        {value}
      </strong>
      <span className="mt-2 block text-sm leading-6 text-[var(--muted)]">
        {label}
      </span>
    </div>
  );
}

function Metric({ value, label }: { value: string | number; label: string }) {
  return (
    <div className="rounded-[1.4rem] border border-white/8 bg-white/4 px-4 py-4">
      <strong className="block font-[family:var(--font-display)] text-3xl font-semibold tracking-[-0.04em] text-white">
        {value}
      </strong>
      <span className="mt-1 block text-xs font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">
        {label}
      </span>
    </div>
  );
}
