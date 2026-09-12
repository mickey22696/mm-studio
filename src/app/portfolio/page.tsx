import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Browse wedding and engagement photography by Moments & Memories Studio in Kuwait.",
};

const collections = [
  {
    id: "dj",
    title: "D & J",
    type: "Wedding",
    location: "Kuwait",
    color: "from-stone-300 to-stone-500",
  },
  {
    id: "fm",
    title: "F & M",
    type: "Engagement",
    location: "Kuwait",
    color: "from-amber-100 to-amber-300",
  },
  {
    id: "rm",
    title: "R & M",
    type: "Wedding",
    location: "Kuwait",
    color: "from-rose-100 to-rose-300",
  },
  {
    id: "dk",
    title: "D & K",
    type: "Wedding",
    location: "Kuwait",
    color: "from-slate-200 to-slate-400",
  },
  {
    id: "placeholder-1",
    title: "Coming Soon",
    type: "Wedding",
    location: "Kuwait",
    color: "from-neutral-200 to-neutral-400",
  },
  {
    id: "placeholder-2",
    title: "Coming Soon",
    type: "Engagement",
    location: "Kuwait",
    color: "from-stone-100 to-stone-300",
  },
];

export default function PortfolioPage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent mb-3">
            Our Work
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal">
            Portfolio
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-muted">
            A selection of love stories we&apos;ve had the privilege to document.
            Each gallery reflects the unique emotion and style of the couple.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {collections.map((item) => (
              <article
                key={item.id}
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-transform duration-700 group-hover:scale-105`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-xs uppercase tracking-widest text-white/70 mb-1">
                    {item.type} · {item.location}
                  </p>
                  <h2 className="font-serif text-2xl tracking-wide">
                    {item.title}
                  </h2>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center rounded-2xl border border-dashed border-charcoal/15 bg-cream/30 p-10">
            <p className="font-serif text-xl text-charcoal mb-2">
              More galleries coming soon
            </p>
            <p className="text-sm text-muted mb-6 max-w-md mx-auto">
              Follow us on Instagram @mm.studio.kwt for the latest work and
              behind-the-scenes moments.
            </p>
            <a
              href="https://www.instagram.com/mm.studio.kwt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-charcoal transition-colors"
            >
              View on Instagram
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
