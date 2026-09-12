"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function CameraIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.226 2.226 0 00-1.183-1.084 48.324 48.324 0 00-3.413-.461 48.316 48.316 0 00-3.413.461c-.542.099-1.037.5-1.183 1.084l-.822 1.316z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled || isOpen
          ? "bg-background/80 backdrop-blur-xl shadow-sm border-b border-black/5"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 group"
            onClick={() => setIsOpen(false)}
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-charcoal text-cream transition group-hover:bg-accent">
              <CameraIcon className="h-4 w-4" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif text-lg md:text-xl tracking-wide text-charcoal">
                Moments & Memories
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
                Studio · Kuwait
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal/80 hover:text-accent transition-colors tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://api.whatsapp.com/send?phone=96563"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 inline-flex items-center rounded-full bg-charcoal px-5 py-2.5 text-sm font-medium text-cream hover:bg-accent transition-colors"
            >
              Book Now
            </a>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-charcoal rounded-lg hover:bg-black/5 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile menu with frosted glass panel */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-out",
            isOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <div
            className={cn(
              "mt-1 mb-4 rounded-2xl border border-white/40",
              "bg-background/70 backdrop-blur-2xl",
              "shadow-[0_8px_32px_rgba(0,0,0,0.08)]",
              "px-5 py-5"
            )}
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-medium text-charcoal py-3 px-3 rounded-xl hover:bg-black/5 active:bg-black/10 transition-colors border-b border-black/5 last:border-0"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://api.whatsapp.com/send?phone=96563"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-flex justify-center items-center rounded-full bg-charcoal px-5 py-3 text-sm font-medium text-cream hover:bg-accent transition-colors"
              >
                Book via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
