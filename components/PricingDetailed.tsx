"use client";

import Link from "next/link";

export default function PricingDetailed() {
  const plans = [
    {
      name: "Gratuit",
      price: "0€",
      period: "pour toujours",
      description: "Parfait pour découvrir RecipeCart et tester le service.",
      features: [
        { text: "3 recettes par mois", included: true },
        { text: "Liste triée par rayon", included: true },
        { text: "Accès mobile", included: true },
        { text: "Export de liste (copier)", included: true },
        { text: "Planning hebdomadaire", included: false },
        { text: "Fusion de listes", included: false },
        { text: "Personnalisation des rayons", included: false },
        { text: "Support prioritaire", included: false },
      ],
      cta: "Commencer gratuitement",
      ctaLink: "#",
      highlighted: false,
    },
    {
      name: "Premium",
      price: "9,99€",
      period: "par mois",
      description: "Pour les familles et les passionnés de cuisine.",
      features: [
        { text: "Recettes illimitées", included: true },
        { text: "Liste triée par rayon", included: true },
        { text: "Accès mobile", included: true },
        { text: "Export de liste (tous formats)", included: true },
        { text: "Planning hebdomadaire", included: true },
        { text: "Fusion de listes", included: true },
        { text: "Personnalisation des rayons", included: true },
        { text: "Support prioritaire", included: true },
      ],
      cta: "S'abonner à Premium",
      ctaLink: "#",
      highlighted: true,
    },
  ];

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="font-display font-bold text-4xl sm:text-5xl text-foreground">
            Des tarifs simples
          </h1>
          <p className="mt-4 text-xl text-muted font-body">
            Pas de frais cachés. Commencez gratuitement, passez Premium quand vous êtes prêt.
          </p>
        </div>

        {/* Plans */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl border ${
                plan.highlighted
                  ? "bg-accent/5 border-accent"
                  : "bg-surface border-border"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-accent text-background text-xs font-semibold px-3 py-1 rounded-full">
                    Recommandé
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h2 className="font-display font-bold text-2xl text-foreground">
                  {plan.name}
                </h2>
                <p className="text-muted font-body mt-1">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="font-display font-bold text-5xl text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted font-body ml-2">{plan.period}</span>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    {feature.included ? (
                      <svg
                        className="w-5 h-5 flex-shrink-0 text-accent"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 flex-shrink-0 text-muted/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    )}
                    <span
                      className={`font-body ${
                        feature.included ? "text-foreground" : "text-muted/50"
                      }`}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaLink}
                className={`block text-center py-4 px-6 rounded-lg font-semibold transition-all ${
                  plan.highlighted
                    ? "bg-accent text-background hover:bg-accent-light"
                    : "bg-background border border-border text-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Guarantees */}
        <div className="mt-16 grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">
              Paiement sécurisé
            </h3>
            <p className="text-sm text-muted font-body">
              Transactions cryptées via Stripe
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">
              Annulation facile
            </h3>
            <p className="text-sm text-muted font-body">
              Annulez en 1 clic, à tout moment
            </p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-6 h-6 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                />
              </svg>
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">
              Satisfait ou remboursé
            </h3>
            <p className="text-sm text-muted font-body">
              14 jours pour changer d'avis
            </p>
          </div>
        </div>

        {/* FAQ Link */}
        <div className="mt-16 text-center">
          <p className="text-muted font-body">
            Une question ?{" "}
            <Link href="/#faq" className="text-accent hover:underline">
              Consultez notre FAQ
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
