import Image from "next/image";
import Link from "next/link";

const highlights = [
  {
    name: "D & J",
    label: "Wedding",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "F & M",
    label: "Engagement",
    image:
      "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "R & M",
    label: "Wedding",
    image:
      "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "D & K",
    label: "Wedding",
    image:
      "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=600&q=80",
  },
];

const services = [
  {
    title: "Wedding Photography",
    description:
      "Full-day coverage by professional photographers from abroad. Candid moments, portraits, and every detail captured with artistry.",
  },
  {
    title: "Cinematic Videography",
    description:
      "Emotion-driven films that tell your love story. Highlight reels and full-length films crafted with cinematic quality.",
  },
  {
    title: "Album Design",
    description:
      "Beautifully designed heirloom albums that turn your photographs into a lasting keepsake you will treasure forever.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1920&q=80"
            alt="Wedding photography"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-background" />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center pt-24 pb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white mb-8">
            Kuwait · Wedding Photography
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[1.1]">
            Moments that
            <br />
            <span className="italic text-accent-light">last forever</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-white/85 leading-relaxed">
            Professional photographers from abroad capturing the emotion,
            elegance, and beauty of your wedding day in Kuwait.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-cream px-8 py-3.5 text-sm font-medium text-charcoal hover:bg-white transition-colors"
            >
              View Portfolio
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="https://api.whatsapp.com/send?phone=96563"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/10 backdrop-blur-sm px-8 py-3.5 text-sm font-medium text-white hover:bg-white/20 transition-colors"
            >
              Book a Consultation
            </a>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto">
            <div>
              <p className="font-serif text-3xl text-white">101+</p>
              <p className="text-xs uppercase tracking-wider text-white/60 mt-1">Posts</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-white">5.2k</p>
              <p className="text-xs uppercase tracking-wider text-white/60 mt-1">Followers</p>
            </div>
            <div>
              <p className="font-serif text-3xl text-white">∞</p>
              <p className="text-xs uppercase tracking-wider text-white/60 mt-1">Memories</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-cream/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent mb-3">Recent Stories</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Love stories we've told</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {highlights.map((item) => (
              <Link key={item.name} href="/portfolio" className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-stone-200">
                <Image src={item.image} alt={`${item.name} ${item.label}`} fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="font-serif text-xl tracking-wide">{item.name}</p>
                  <p className="text-xs uppercase tracking-widest text-white/70 mt-1">{item.label}</p>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/portfolio" className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-charcoal transition-colors">
              Explore full portfolio
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent mb-3">What we offer</p>
            <h2 className="font-serif text-3xl md:text-4xl text-charcoal">Photography · Videography · Albums</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="group rounded-2xl border border-black/5 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-cream text-accent text-lg font-serif group-hover:bg-accent group-hover:text-cream transition-colors">·</div>
                <h3 className="font-serif text-xl text-charcoal mb-3">{service.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/services" className="inline-flex items-center gap-2 rounded-full border border-charcoal/15 px-6 py-3 text-sm font-medium text-charcoal hover:bg-charcoal hover:text-cream transition-colors">View all services</Link>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-charcoal text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-accent-light mb-4">Our approach</p>
              <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">Professional photographers<br /><span className="italic text-accent-light">from abroad</span></h2>
              <p className="text-cream/70 leading-relaxed mb-6">Moments & Memories Studio brings international experience and a refined eye to wedding photography in Kuwait. We believe every love story deserves to be told with authenticity, elegance, and emotion.</p>
              <ul className="space-y-3 text-sm text-cream/80">
                <li>Documentary & fine-art style</li>
                <li>Based in Kuwait</li>
                <li>Full wedding & engagement coverage</li>
              </ul>
              <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accent-light hover:text-cream transition-colors">Learn more about us</Link>
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-cream/10">
              <Image src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=800&q=80" alt="Wedding moment" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4">Ready to tell your story?</h2>
          <p className="text-muted text-lg mb-8">Let's create timeless images of your wedding day. Reach out via WhatsApp or Instagram to start the conversation.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://api.whatsapp.com/send?phone=96563" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-charcoal px-8 py-3.5 text-sm font-medium text-cream hover:bg-accent transition-colors">Message on WhatsApp</a>
            <a href="https://www.instagram.com/mm.studio.kwt" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-charcoal/20 px-8 py-3.5 text-sm font-medium text-charcoal hover:border-accent hover:text-accent transition-colors">Follow on Instagram</a>
          </div>
        </div>
      </section>
    </>
  );
}
