import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Moments & Memories Studio for wedding photography inquiries in Kuwait.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="pb-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent mb-3">
            Get in touch
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal">
            Contact
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-muted">
            We would love to hear about your wedding plans. Reach out via
            WhatsApp or Instagram — we typically reply within 24 hours.
          </p>
        </div>
      </section>

      <section className="pb-20 md:pb-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <a
                href="https://api.whatsapp.com/send?phone=96563"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-5 rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md hover:border-accent/20 transition-all group"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600 group-hover:bg-green-100 transition-colors text-xl">
                  ✉
                </div>
                <div>
                  <h2 className="font-medium text-charcoal text-lg">WhatsApp</h2>
                  <p className="text-sm text-muted mt-1">
                    Fastest way to reach us for bookings and questions.
                  </p>
                  <p className="text-sm font-medium text-accent mt-3">
                    Message us →
                  </p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/mm.studio.kwt"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-5 rounded-2xl border border-black/5 bg-white p-6 shadow-sm hover:shadow-md hover:border-accent/20 transition-all group"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-pink-50 text-pink-600 group-hover:bg-pink-100 transition-colors text-xl">
                  ◈
                </div>
                <div>
                  <h2 className="font-medium text-charcoal text-lg">Instagram</h2>
                  <p className="text-sm text-muted mt-1">
                    See our latest work and send us a DM.
                  </p>
                  <p className="text-sm font-medium text-accent mt-3">
                    @mm.studio.kwt →
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-5 rounded-2xl border border-black/5 bg-cream/40 p-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-accent text-xl">
                  ⌖
                </div>
                <div>
                  <h2 className="font-medium text-charcoal text-lg">Location</h2>
                  <p className="text-sm text-muted mt-1">
                    Based in Kuwait. Available for weddings across the country
                    and selected destinations.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-charcoal text-cream p-8 md:p-10 flex flex-col justify-center">
              <h2 className="font-serif text-2xl mb-4">Ready to book?</h2>
              <p className="text-cream/70 leading-relaxed mb-6">
                When you message us, it helps if you include:
              </p>
              <ul className="space-y-3 text-sm text-cream/80 mb-8">
                <li className="flex gap-3">
                  <span className="text-accent-light">01</span>
                  Your wedding date (or approximate month)
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-light">02</span>
                  Venue or city in Kuwait
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-light">03</span>
                  Whether you need photography, video, or both
                </li>
                <li className="flex gap-3">
                  <span className="text-accent-light">04</span>
                  Any special requests or style preferences
                </li>
              </ul>
              <a
                href="https://api.whatsapp.com/send?phone=96563"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-cream px-6 py-3.5 text-sm font-medium text-charcoal hover:bg-accent-light transition-colors"
              >
                Open WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
