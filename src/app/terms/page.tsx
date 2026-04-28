import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for StackMerce and its apps.",
};

const sections = [
  {
    title: "Use of the apps",
    body:
      "StackMerce apps are provided for business use by merchants and their authorized users. By installing or using an app, you agree to use it in accordance with applicable law, platform rules, and your agreements with Shopify.",
  },
  {
    title: "Billing",
    body:
      "Paid plans, free trials, renewals, upgrades, downgrades, and cancellations are handled through the platform billing flow configured for each app. You are responsible for reviewing the pricing and plan terms presented at purchase time.",
  },
  {
    title: "Availability",
    body:
      "We aim to keep the apps available and reliable, but we do not guarantee uninterrupted or error-free service. We may update, modify, suspend, or remove features when reasonably necessary for product, operational, security, or compliance reasons.",
  },
  {
    title: "Merchant responsibilities",
    body:
      "You remain responsible for how discounts, configurations, automations, and other merchant-facing settings are used in your store. You should validate commercial behavior before applying important changes in a live environment.",
  },
  {
    title: "Limitation of liability",
    body:
      "To the maximum extent permitted by law, StackMerce is not liable for indirect, incidental, special, consequential, or similar damages arising from the use of, or inability to use, the apps.",
  },
  {
    title: "Changes",
    body:
      "We may update these terms from time to time. Continued use of an app after an update becomes effective constitutes acceptance of the revised terms.",
  },
  {
    title: "Termination",
    body:
      "We may suspend or terminate access to an app where necessary for security, abuse prevention, legal compliance, non-payment, platform requirements, or material misuse of the service.",
  },
];

export default function TermsPage() {
  return (
    <div className="space-y-6">
      <section className="glass-card aurora-border overflow-hidden rounded-[2.2rem] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Legal
            </span>
            <h1 className="mt-5 font-[family:var(--font-display)] text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              These Terms of Service govern the use of StackMerce apps and the
              related public services that support them.
            </p>
            <p className="mt-3 text-sm font-medium uppercase tracking-[0.18em] text-cyan-200">
              Effective date: April 28, 2026
            </p>
          </div>
          <div className="rounded-[1.8rem] border border-white/10 bg-white/5 p-4">
            <Image
              alt="StackMerce mark"
              className="h-20 w-20 rounded-[1.4rem]"
              height={80}
              src="/brand/stackmerce-mark.svg"
              width={80}
            />
          </div>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          <PolicySignal title="Merchant-facing" body="These terms define the public usage baseline for your app portfolio." />
          <PolicySignal title="Platform-aligned" body="Language assumes Shopify billing, permissions, and install flows." />
          <PolicySignal title="Commercial scope" body="Billing, usage, and availability are framed around real merchant operations." />
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-2">
        {sections.map((section) => (
          <article
            className="glass-card aurora-border rounded-[1.8rem] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)]"
            key={section.title}
          >
            <h2 className="font-[family:var(--font-display)] text-2xl font-semibold tracking-[-0.04em] text-white">
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

function PolicySignal({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-[1.45rem] border border-white/10 bg-white/5 px-4 py-4">
      <strong className="block text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
        {title}
      </strong>
      <p className="mt-2 text-sm leading-6 text-[var(--muted)]">{body}</p>
    </div>
  );
}
