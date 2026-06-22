"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <svg
                className="w-5 h-5 text-background"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <span className="font-display font-bold text-xl text-foreground">
              RecipeCart
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#features"
              className="text-muted hover:text-foreground transition-colors font-body"
            >
              Fonctionnalités
            </Link>
            <Link
              href="#how-it-works"
              className="text-muted hover:text-foreground transition-colors font-body"
            >
              Comment ça marche
            </Link>
            <Link
              href="#pricing"
              className="text-muted hover:text-foreground transition-colors font-body"
            >
              Tarifs
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="#pricing"
              className="text-muted hover:text-foreground transition-colors font-body"
            >
              Se connecter
            </Link>
            <Link href="#pricing" className="btn-primary text-sm">
              Essayer gratuitement
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="md:hidden p-2 text-muted hover:text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                href="#features"
                className="text-muted hover:text-foreground transition-colors font-body px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fonctionnalités
              </Link>
              <Link
                href="#how-it-works"
                className="text-muted hover:text-foreground transition-colors font-body px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Comment ça marche
              </Link>
              <Link
                href="#pricing"
                className="text-muted hover:text-foreground transition-colors font-body px-2 py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Tarifs
              </Link>
              <div className="flex flex-col gap-3 pt-4 border-t border-border">
                <Link
                  href="#pricing"
                  className="text-center text-muted hover:text-foreground transition-colors font-body py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Se connecter
                </Link>
                <Link
                  href="#pricing"
                  className="btn-primary text-sm text-center"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Essayer gratuitement
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
