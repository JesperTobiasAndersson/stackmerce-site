import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for StackMerce and its apps.",
};

const sections = [
  {
    title: "What we collect",
    body:
      "We collect the information reasonably required to operate our apps and support merchants. This may include store identifiers, app installation details, billing status, app configuration, usage information, and support communications.",
  },
  {
    title: "How we use data",
    body:
      "We use merchant and store data to authenticate app installs, deliver app features, manage billing, provide support, improve reliability and security, and comply with legal or platform requirements.",
  },
  {
    title: "How data is stored",
    body:
      "We use infrastructure providers and platform services required to operate our apps. Information is stored only to the extent needed to provide app functionality, maintain secure sessions, troubleshoot issues, and support merchants.",
  },
  {
    title: "Sharing",
    body:
      "We do not sell merchant data. We may share information with service providers only when required to host, secure, monitor, bill, maintain, or support the app and only for those purposes.",
  },
  {
    title: "Retention",
    body:
      "We retain data only for as long as reasonably necessary to operate the app, provide support, meet billing and legal obligations, resolve disputes, and enforce our agreements.",
  },
  {
    title: "Access and deletion",
    body:
      "If you uninstall an app or request help with data handling, we may delete or anonymize information when it is no longer needed for legitimate operational, billing, or legal reasons. Certain records may be retained where required by law or platform rules.",
  },
  {
    title: "Contact",
    body:
      "For privacy-related questions, requests, or support, contact StackMerce through the support details provided in the relevant app listing or merchant support channel.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="space-y-6">
      <section className="glass-card aurora-border overflow-hidden rounded-[2.2rem] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
              Legal
            </span>
            <h1 className="mt-5 font-[family:var(--font-display)] text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              This Privacy Policy explains how StackMerce handles merchant and
              store information across its app portfolio.
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
          <PolicySignal title="Public reference" body="This page exists for merchants, reviewers, and compliance checks." />
          <PolicySignal title="Operational scope" body="It covers the app portfolio and the merchant data needed to run it." />
          <PolicySignal title="Data principle" body="Information is collected and retained only where needed to operate and support the apps." />
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
