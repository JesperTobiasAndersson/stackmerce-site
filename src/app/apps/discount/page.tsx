import type { Metadata } from "next";
import Image from "next/image";
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
      <section className="glass-card aurora-border overflow-hidden rounded-[2.2rem] p-6 shadow-[0_28px_80px_rgba(0,0,0,0.28)] sm:p-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full border border-white/12 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--muted)]">
          Shopify app
            </span>
            <h1 className="mt-5 font-[family:var(--font-display)] text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl">
              Discount
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-8 text-[var(--muted)] sm:text-lg">
              Discount helps Shopify teams build automatic campaigns with a
              tighter operating layer around product, order, and shipping
              offers.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,#22d3ee_0%,#2d7dff_52%,#8246ff_100%)] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(45,125,255,0.35)]"
                href="/"
              >
                Back to app directory
              </Link>
            </div>
          </div>
          <Image
            alt="StackMerce mark"
            className="h-28 w-28 rounded-[2rem] shadow-[0_26px_50px_rgba(0,0,0,0.3)]"
            height={112}
            src="/brand/stackmerce-mark.svg"
            width={112}
          />
        </div>
      </section>

      <section className="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]">
        <article className="glass-card aurora-border rounded-[1.9rem] p-6">
          <h2 className="font-[family:var(--font-display)] text-2xl font-semibold tracking-[-0.04em] text-white">
            Core capabilities
          </h2>
          <ul className="mt-5 grid gap-3 text-sm leading-7 text-[var(--ink)]">
            {features.map((feature) => (
              <li
                className="rounded-2xl border border-white/8 bg-white/4 px-4 py-3"
                key={feature}
              >
                {feature}
              </li>
            ))}
          </ul>
        </article>

        <aside className="glass-card aurora-border rounded-[1.9rem] p-6 text-white shadow-[0_18px_46px_rgba(0,0,0,0.24)]">
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
