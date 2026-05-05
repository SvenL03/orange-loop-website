"use client";

import { useState } from "react";
import {
  Search,
  User,
  Menu,
  X,
  Play,
  ChevronLeft,
  ChevronRight,
  Star,
  Clock,
  Calendar,
} from "lucide-react";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4";

const NAV_LINKS = [
  { label: "How It Works", href: "#process" },
  { label: "The Audit", href: "#process" },
  { label: "What You Get", href: "#process" },
  { label: "Testimonials", href: "#testimonial" },
  { label: "Contact", href: "#audit" },
];

export default function VideoHero() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      className="relative w-full h-screen overflow-hidden bg-black flex flex-col"
      style={{ fontFamily: "var(--font-inter), sans-serif" }}
    >
      {/* ── Background video ── */}
      <video
        className="fixed inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* ── Bottom blur overlay ── */}
      <div className="blur-overlay" />

      {/* ── Navbar ── */}
      <nav
        className="relative flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 md:py-6"
        style={{ zIndex: 50 }}
      >
        {/* Logo */}
        <a
          href="#"
          className="animate-blur-fade-up flex items-center gap-2.5 text-white no-underline"
          style={{
            fontFamily: "var(--font-syne), sans-serif",
            fontWeight: 700,
            fontSize: "16px",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            animationDelay: "0ms",
          }}
        >
          <div className="logo-loop" />
          Orange Loop AI
        </a>

        {/* Desktop nav links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              className="animate-blur-fade-up text-sm text-white/80 hover:text-white transition-colors no-underline"
              style={{ animationDelay: `${100 + i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right side buttons */}
        <div className="flex items-center gap-2">
          {/* Search button (sm+, hidden below sm) */}
          <a
            href="#audit"
            className="animate-blur-fade-up hidden sm:flex liquid-glass items-center gap-2 rounded-full text-white text-sm font-medium px-4 md:px-6 py-2 cursor-pointer no-underline"
            style={{ animationDelay: "350ms" }}
          >
            <Search size={18} />
            <span className="hidden md:inline">Inquire</span>
          </a>

          {/* User button (sm+) */}
          <button
            className="animate-blur-fade-up hidden sm:flex liquid-glass w-10 h-10 rounded-full items-center justify-center text-white cursor-pointer"
            style={{ animationDelay: "400ms" }}
          >
            <User size={18} />
          </button>

          {/* Hamburger (below lg) */}
          <button
            className="animate-blur-fade-up flex lg:hidden liquid-glass w-10 h-10 rounded-full items-center justify-center text-white cursor-pointer"
            style={{ animationDelay: "350ms" }}
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <div className="relative w-[18px] h-[18px]">
              <Menu
                size={18}
                className="absolute inset-0 transition-all duration-500 ease-out"
                style={{
                  opacity: menuOpen ? 0 : 1,
                  transform: menuOpen ? "rotate(180deg) scale(0.5)" : "rotate(0deg) scale(1)",
                }}
              />
              <X
                size={18}
                className="absolute inset-0 transition-all duration-500 ease-out"
                style={{
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? "rotate(0deg) scale(1)" : "rotate(-180deg) scale(0.5)",
                }}
              />
            </div>
          </button>
        </div>

        {/* Mobile dropdown */}
        <div
          className="absolute left-0 right-0 lg:hidden bg-gray-900/95 backdrop-blur-lg border-t border-b border-gray-800 shadow-2xl transition-all duration-500 ease-out"
          style={{
            top: "72px",
            zIndex: 40,
            opacity: menuOpen ? 1 : 0,
            transform: menuOpen ? "translateY(0)" : "translateY(-16px)",
            pointerEvents: menuOpen ? "auto" : "none",
          }}
        >
          <div className="px-4 py-2">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                className="block py-3 px-3 rounded-lg text-white/80 hover:text-white hover:bg-gray-800/50 transition-all no-underline"
                style={{
                  transform: menuOpen ? "translateX(0)" : `translateX(-${(i + 1) * 8}px)`,
                  transition: `transform 0.3s ease ${i * 50}ms, opacity 0.3s ease ${i * 50}ms, color 0.2s`,
                  opacity: menuOpen ? 1 : 0,
                }}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="border-t border-gray-800 mt-2 pt-3 pb-2 flex gap-2 sm:hidden">
              <a
                href="#audit"
                className="flex-1 flex items-center justify-center gap-2 liquid-glass rounded-full text-white text-sm py-2.5"
                onClick={() => setMenuOpen(false)}
              >
                <Search size={16} /> Inquire
              </a>
              <button className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-white">
                <User size={16} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ── Hero content (bottom) ── */}
      <div
        className="flex-1 flex flex-col justify-end px-4 sm:px-6 md:px-12 pb-8 md:pb-16"
        style={{ zIndex: 10, position: "relative" }}
      >
        <div className="flex flex-col md:flex-row md:items-end gap-8">
          {/* Left — main copy */}
          <div className="flex-1">
            {/* Metadata row */}
            <div
              className="animate-blur-fade-up flex flex-wrap items-center gap-3 sm:gap-6 mb-6 md:mb-8 text-white text-xs sm:text-sm"
              style={{ animationDelay: "300ms" }}
            >
              <span className="flex items-center gap-1.5">
                <Star size={16} className="sm:w-5 sm:h-5 fill-white" />
                <span className="font-medium">AI Strategy Audit</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={16} className="sm:w-5 sm:h-5" />
                3-Step Process
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={16} className="sm:w-5 sm:h-5" />
                Limited Spots
              </span>
            </div>

            {/* Title */}
            <h1
              className="animate-blur-fade-up text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-white mb-4 md:mb-6"
              style={{
                fontFamily: "var(--font-syne), sans-serif",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                animationDelay: "400ms",
              }}
            >
              You know you<br />
              should be using <em
                className="not-italic"
                style={{ color: "var(--orange)" }}
              >AI.</em>
            </h1>

            {/* Subtitle */}
            <p
              className="animate-blur-fade-up text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-12 max-w-2xl"
              style={{ animationDelay: "500ms" }}
            >
              You just don&apos;t have time to figure out where it fits.
              That&apos;s exactly what we fix.
            </p>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="#audit"
                className="animate-blur-fade-up flex items-center gap-2 bg-white text-black rounded-full font-medium px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-gray-200 transition-colors no-underline"
                style={{ animationDelay: "600ms" }}
              >
                <Play size={18} className="fill-black" />
                Inquire About an Audit
              </a>
              <a
                href="#process"
                className="animate-blur-fade-up flex items-center gap-2 liquid-glass text-white rounded-full font-medium px-6 sm:px-8 py-2.5 sm:py-3 no-underline"
                style={{ animationDelay: "700ms" }}
              >
                See How It Works
              </a>
            </div>
          </div>

          {/* Right — prev/next arrows */}
          <div className="flex items-center gap-3 md:flex-col md:gap-2">
            <button
              className="animate-blur-fade-up liquid-glass flex items-center gap-1.5 text-white rounded-full px-4 sm:px-6 py-2.5 sm:py-3"
              style={{ animationDelay: "800ms" }}
            >
              <ChevronLeft size={18} />
              <span className="text-sm hidden sm:inline">Previous</span>
            </button>
            <button
              className="animate-blur-fade-up liquid-glass flex items-center gap-1.5 text-white rounded-full px-4 sm:px-6 py-2.5 sm:py-3"
              style={{ animationDelay: "900ms" }}
            >
              <span className="text-sm hidden sm:inline">Next</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
