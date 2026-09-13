import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Wedding photography, cinematic videography, and album design by Moments & Memories Studio in Kuwait.",
};

const mainServices = [
  {
    title: "Wedding Photography",
    description:
      "Complete coverage of your wedding day — from preparation to the final dance. Our international photographers combine documentary storytelling with fine-art portraiture.",
    features: [
      "Full-day or multi-day coverage",
      "Second photographer available",
      "Edited high-resolution gallery",
      "Online delivery & print rights",
    ],
  },
  {
    title: "Cinematic Videography",
    description:
      "Emotion-driven films that capture the atmosphere, speeches, and quiet moments. We create highlight films and full-length features that you will rewatch for years.",
    features: [
      "Cinematic highlight reel",
      "Full ceremony & reception films",
      "Drone footage (where permitted)",
      "Professional color grading",
    ],
  },
  {
    title: "Album Design",
    description:
      "Hand-designed heirloom albums that turn your favorite images into a tangible keepsake. Premium papers, elegant layouts, and lasting quality.",
    features: [
      "Custom design consultation",
      "Premium materials",
      "Multiple size options",
      "Parent albums available",
    ],
  },
];

const additional = [
  {
    title: "Engagement Sessions",
    text: "Pre-wedding portraits that tell the beginning of your story.",
  },
  {
    title: "Family & Portrait",
    text: "Timeless family and individual portrait sessions.",
  },
  {
    title: "Event Coverage",
    text: "Henna, parties, and other celebration photography.",
  },
];

const serviceImages = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1522673607200-164a1b6ed46c?auto=format&fit=crop&w=900&q=80",
];

export default function ServicesPage() {
  return (
    <div className="pt-24 md:pt-28">
      <section className="pb-12 md:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent mb-3">
            What we offer
          </p>
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal">
            Services
          </h1>
          <p className="mt-4 max-w-xl mx-auto text-muted">
            Thoughtfully crafted packages for couples who value artistry,
            emotion, and lasting quality.
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {mainServices.map((service, index) => (
            <div
              key={service.title}
              className="grid md:grid-cols-2 gap-10 items-center"
            >
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream text-accent mb-5 text-lg font-serif">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
                  {service.title}
                </h2>
                <p className="text-muted leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-charcoal/80"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={`relative aspect-[4/3] rounded-2xl overflow-hidden bg-stone-200 ${
                  index % 2 === 1 ? "md:order-1" : ""
                }`}
              >
                <img
                  src={serviceImages[index]}
                  alt={service.title}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-cream/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal text-center mb-10">
            Additional offerings
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {additional.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 border border-black/5 shadow-sm"
              >
                <h3 className="font-medium text-charcoal mb-2">{item.title}</h3>
                <p className="text-sm text-muted">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-2xl md:text-3xl text-charcoal mb-4">
            Let's plan your coverage
          </h2>
          <p className="text-muted mb-8">
            Every wedding is unique. Message us to discuss packages tailored to
            your day.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal px-8 py-3.5 text-sm font-medium text-cream hover:bg-accent transition-colors"
          >
            Get in touch
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
