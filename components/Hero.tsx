"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const [url, setUrl] = useState<string>("");

  return (
    <section className="relative min-h-screen pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 lg:pt-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left column - Content */}
          <div className="order-2 lg:order-1">
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-tight tracking-tight">
              Vos recettes deviennent des{" "}
              <span className="text-accent">listes de courses</span>
            </h1>
            <p className="mt-6 text-lg text-muted max-w-xl font-body leading-relaxed">
              Collez une URL, obtenez une liste triée par rayon. Fini les oublis et
              les allers-retours au supermarché.
            </p>

            {/* URL Input Demo */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://marmiton.org/votre-recette..."
                  className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder:text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent font-body"
                />
              </div>
              <Link href="#pricing" className="btn-primary whitespace-nowrap">
                Générer ma liste
              </Link>
            </div>

            {/* Trust badges */}
            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>3 recettes gratuites/mois</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>Sans carte bancaire</span>
              </div>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border shadow-2xl">
              <Image
                src="https://picsum.photos/seed/grocery-shopping/800/600"
                alt="Liste de courses organisée"
                fill
                className="object-cover"
                priority
              />
              {/* Overlay card */}
              <div className="absolute bottom-4 left-4 right-4 bg-surface/95 backdrop-blur-sm rounded-xl p-4 border border-border">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-display font-semibold text-foreground text-sm">Lasagnes bolognaise</p>
                    <p className="text-xs text-muted">12 ingrédients • 4 rayons</p>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <span className="text-muted">Boucherie:</span>
                    <span className="text-foreground">Bœuf haché, lardons</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                    <span className="text-muted">Épicerie:</span>
                    <span className="text-foreground">Feuilles de lasagne, tomates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
