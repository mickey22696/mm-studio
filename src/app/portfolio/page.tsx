import type { Metadata } from "next";
import Image from "next/image";
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
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "fm",
    title: "F & M",
    type: "Engagement",
    location: "Kuwait",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "rm",
    title: "R & M",
    type: "Wedding",
    location: "Kuwait",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "dk",
    title: "D & K",
    type: "Wedding",
    location: "Kuwait",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "sa",
    title: "S & A",
    type: "Wedding",
    location: "Kuwait",
    image:
      "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ln",
    title: "L & N",
    type: "Engagement",
    location: "Kuwait",
    image:
      "https://images.unsplash.com/photo-1522673607200-164a1b6ed46c?auto=format&fit=crop&w=800&q=80",
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
                className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-stone-200"
              >
                <Image
                  src={item.image}
                  alt={`${item.title} — ${item.type} photography`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority={item.id === "dj"}
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
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
