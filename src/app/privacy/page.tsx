import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for StackMerce and its apps.",
};

const sections = [
  {
    title: "What we collect",
    body:
      "We collect the information needed to operate our apps and support merchants. This may include store identifiers, installed app context, billing state, app configuration, and usage data required to deliver app features.",
  },
  {
    title: "How we use data",
    body:
      "We use merchant and store data to authenticate installs, operate app features, maintain billing, provide support, improve reliability, and meet legal or platform obligations.",
  },
  {
    title: "How data is stored",
    body:
      "We use infrastructure providers and platform services required to operate our apps. Data is stored only to the extent needed to run app functionality, keep sessions valid, and support merchants safely.",
  },
  {
    title: "Sharing",
    body:
      "We do not sell merchant data. We may share data with service providers only when needed to host, secure, monitor, bill, or support the app.",
  },
  {
    title: "Retention",
    body:
      "We retain data only as long as needed to operate the app, fulfill support or billing obligations, comply with law, and resolve disputes.",
  },
  {
    title: "Contact",
    body:
      "If you need privacy-related help, use the support contact configured for your StackMerce app listing or your company support channel.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-[var(--line)] bg-[var(--card-strong)] p-6 shadow-[0_24px_60px_rgba(26,36,31,0.08)] sm:p-8">
        <span className="inline-flex rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
          Legal
        </span>
        <h1 className="mt-5 font-[family:var(--font-display)] text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
          This page is the public privacy reference for StackMerce and its app
          portfolio. You should review the final text with your legal or
          commercial owner before public launch.
        </p>
      </section>

      <section className="grid gap-4">
        {sections.map((section) => (
          <article
            className="rounded-[1.6rem] border border-[var(--line)] bg-[var(--card)] p-6"
            key={section.title}
          >
            <h2 className="font-[family:var(--font-display)] text-2xl font-semibold tracking-[-0.04em]">
              {section.title}
            </h2>
            <p className="mt-3 max-w-4xl text-sm leading-8 text-[var(--muted)]">
              {section.body}
            </p>
          </article>
        ))}
      </section>
    </div>
  );
}
