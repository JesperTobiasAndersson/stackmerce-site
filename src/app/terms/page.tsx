import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for StackMerce and its apps.",
};

const sections = [
  {
    title: "Use of the apps",
    body:
      "StackMerce apps are provided for business use by merchants and their authorized users. You agree to use the apps only in accordance with applicable law, platform rules, and your Shopify agreements.",
  },
  {
    title: "Billing",
    body:
      "Paid plans, free trials, renewals, and cancellations are handled through the platform billing flow configured for each app. You are responsible for reviewing the plan terms shown at purchase time.",
  },
  {
    title: "Availability",
    body:
      "We aim to keep the apps available and reliable, but we do not promise uninterrupted service. We may update, change, or remove features when needed for product, security, or compliance reasons.",
  },
  {
    title: "Merchant responsibilities",
    body:
      "You remain responsible for how discounts, configurations, and other merchant-facing settings are used in your store. You should validate commercial behavior before running important campaigns live.",
  },
  {
    title: "Limitation of liability",
    body:
      "To the maximum extent permitted by law, StackMerce is not liable for indirect, incidental, special, or consequential damages arising from use of the apps or inability to use them.",
  },
  {
    title: "Changes",
    body:
      "We may update these terms from time to time. Continued use of the apps after an update means you accept the revised terms.",
  },
];

export default function TermsPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-[var(--line)] bg-[var(--card-strong)] p-6 shadow-[0_24px_60px_rgba(26,36,31,0.08)] sm:p-8">
        <span className="inline-flex rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
          Legal
        </span>
        <h1 className="mt-5 font-[family:var(--font-display)] text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
          This is the public terms page for StackMerce and its apps. It should
          be reviewed and finalized before public launch or Shopify review.
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
