"use client";

import { useState } from "react";

export default function TopNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Communities", href: "#communities" },
    { label: "Events", href: "#events" },
    { label: "Sponsors", href: "#sponsors" },
    // { label: "Tiers", href: "#tiers" },
    // { label: "Contact", href: "#contact" },
  ];

    return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0B1220] md:bg-[#0B1220]/90 backdrop-blur-md border-b border-outline-variant/30 h-16 w-full">
        <div className="max-w-[1440px] mx-auto px-6 md:px-margin-desktop h-full flex justify-between items-center">
          <a href="#" className="font-headline-md text-headline-md font-bold text-primary tracking-tight">
            ITECHROOTS 16.0
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <a
                key={item.label}
                className="font-data-label text-data-label text-on-surface-variant hover:text-primary transition-colors duration-200"
                href={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white hover:text-primary focus:outline-none p-2 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-[#0B1220] border-l border-outline-variant/30 shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col justify-between p-6 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="space-y-6 pt-12">
          {navItems.map((item) => (
            <a
              key={item.label}
              onClick={() => setIsOpen(false)}
              className="block font-headline-md text-xl text-on-surface-variant hover:text-primary transition-colors py-2"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Backdrop for mobile drawer */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 md:hidden backdrop-blur-xs transition-opacity duration-300"
        />
      )}
    </>
  );
}
