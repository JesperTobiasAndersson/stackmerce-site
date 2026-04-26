import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Discount",
  description:
    "Discount is a StackMerce Shopify app for automatic product, order, and shipping discount campaigns.",
};

const features = [
  "Automatic product, order, and shipping discounts",
  "Schedules, minimum subtotal, quantity, and market targeting",
  "Embedded Shopify admin workflow for campaign control",
  "Plan-based access to more advanced discount types",
];

export default function DiscountPage() {
  return (
    <div className="space-y-6">
      <section className="rounded-[2rem] border border-[var(--line)] bg-[var(--card-strong)] p-6 shadow-[0_24px_60px_rgba(26,36,31,0.08)] sm:p-8">
        <span className="inline-flex rounded-full border border-[var(--line)] bg-[var(--surface)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
          Shopify app
        </span>
        <h1 className="mt-5 font-[family:var(--font-display)] text-4xl font-semibold tracking-[-0.05em] sm:text-5xl">
          Discount
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
          Discount helps Shopify teams build automatic discount campaigns with a
          cleaner operating layer. It is designed for merchants who need product,
          order, and shipping discount logic without burying control inside
          brittle workflows.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <Link
            className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-5 py-3 text-sm font-semibold text-[var(--surface)] transition hover:-translate-y-0.5 hover:bg-black"
            href="/"
          >
            Back to app directory
          </Link>
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
        <article className="rounded-[1.8rem] border border-[var(--line)] bg-[var(--card)] p-6">
          <h2 className="font-[family:var(--font-display)] text-2xl font-semibold tracking-[-0.04em]">
            Core capabilities
          </h2>
          <ul className="mt-5 grid gap-3 text-sm leading-7 text-[var(--ink)]">
            {features.map((feature) => (
              <li
                className="rounded-2xl border border-[var(--line)] bg-white px-4 py-3"
                key={feature}
              >
                {feature}
              </li>
            ))}
          </ul>
        </article>

        <aside className="rounded-[1.8rem] border border-[var(--line)] bg-[linear-gradient(135deg,#1f2c27_0%,#29433a_100%)] p-6 text-white shadow-[0_18px_46px_rgba(26,36,31,0.16)]">
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/72">
            Best for
          </span>
          <p className="mt-4 text-sm leading-7 text-white/86">
            Shopify stores that want stronger discount control, fewer manual
            workarounds, and a clearer operational layer around campaigns.
          </p>
          <div className="mt-6 rounded-[1.4rem] border border-white/12 bg-white/6 p-4">
            <strong className="font-[family:var(--font-display)] text-lg font-semibold">
              Status
            </strong>
            <p className="mt-2 text-sm leading-7 text-white/78">
              Live and managed as part of the StackMerce portfolio.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
