import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Moments & Memories Studio — professional wedding photographers from abroad based in Kuwait.",
};

export default function AboutPage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="pb-16 md:pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent mb-3">
              Who we are
            </p>
            <h1 className="font-serif text-4xl md:text-5xl text-charcoal mb-6">
              Moments & Memories Studio
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              We are a wedding photography and videography studio based in
              Kuwait, bringing international experience and a refined artistic
              eye to every celebration we document.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-stone-200">
              <img
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=800&q=80"
                alt="Moments & Memories Studio photography"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-5">
                Our philosophy
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                A wedding day is filled with fleeting glances, quiet emotions,
                and joyful chaos. Our role is to notice those moments and
                preserve them with honesty and elegance.
              </p>
              <p className="text-muted leading-relaxed mb-6">
                With professional photographers from abroad, we combine global
                photographic standards with a deep respect for local culture and
                the unique traditions of each family we work with in Kuwait.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-accent text-sm font-medium">
                    01
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal">
                      International perspective
                    </h3>
                    <p className="text-sm text-muted mt-1">
                      Experience and training from abroad brought to Kuwait
                      weddings.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-accent text-sm font-medium">
                    02
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal">Emotion first</h3>
                    <p className="text-sm text-muted mt-1">
                      We prioritize genuine moments over forced poses.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cream text-accent text-sm font-medium">
                    03
                  </div>
                  <div>
                    <h3 className="font-medium text-charcoal">Craft & care</h3>
                    <p className="text-sm text-muted mt-1">
                      From the shoot to the final album, every detail matters.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-charcoal text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl mb-4">
            Based in Kuwait · Working with love
          </h2>
          <p className="text-cream/70 max-w-2xl mx-auto mb-8">
            Whether you are planning an intimate celebration or a grand wedding,
            we would be honored to document your day.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-cream px-8 py-3.5 text-sm font-medium text-charcoal hover:bg-accent-light transition-colors"
          >
            Start a conversation
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
