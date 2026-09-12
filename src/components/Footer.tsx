import Link from "next/link";

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.226 2.226 0 00-1.183-1.084 48.324 48.324 0 00-3.413-.461 48.316 48.316 0 00-3.413.461c-.542.099-1.037.5-1.183 1.084l-.822 1.316z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 3.75h-9A3.75 3.75 0 003.75 7.5v9a3.75 3.75 0 003.75 3.75h9a3.75 3.75 0 003.75-3.75v-9a3.75 3.75 0 00-3.75-3.75z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 7.5h.008v.008H17.25V7.5z" />
    </svg>
  );
}

function MessageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-soft-black text-cream">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cream/10">
                <CameraIcon className="h-5 w-5 text-accent-light" />
              </div>
              <div>
                <h3 className="font-serif text-xl tracking-wide">
                  Moments & Memories
                </h3>
                <p className="text-xs uppercase tracking-[0.2em] text-cream/60">
                  Studio · Kuwait
                </p>
              </div>
            </div>
            <p className="text-cream/70 max-w-md leading-relaxed text-sm">
              Professional wedding photography and videography. International
              photographers capturing timeless moments that last a lifetime.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-accent-light mb-4">
              Explore
            </h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li>
                <Link href="/portfolio" className="hover:text-cream transition">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-cream transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-cream transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cream transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-accent-light mb-4">
              Connect
            </h4>
            <ul className="space-y-3 text-sm text-cream/80">
              <li>
                <a
                  href="https://www.instagram.com/mm.studio.kwt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cream transition"
                >
                  <InstagramIcon className="h-4 w-4" />
                  @mm.studio.kwt
                </a>
              </li>
              <li>
                <a
                  href="https://api.whatsapp.com/send?phone=96563"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-cream transition"
                >
                  <MessageIcon className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li className="pt-2 text-cream/60">Kuwait</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-cream/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-cream/50">
          <p>© {new Date().getFullYear()} Moments & Memories Studio. All rights reserved.</p>
          <p className="tracking-wide">Capturing love stories in Kuwait</p>
        </div>
      </div>
    </footer>
  );
}
