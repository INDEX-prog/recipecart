"use client";

import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Gratuit",
      price: "0€",
      period: "pour toujours",
      description: "Parfait pour découvrir RecipeCart",
      features: [
        "3 recettes par mois",
        "Liste triée par rayon",
        "Accès mobile",
        "Export de liste",
      ],
      cta: "Commencer gratuitement",
      ctaLink: "#",
      highlighted: false,
    },
    {
      name: "Premium",
      price: "9,99€",
      period: "par mois",
      description: "Pour les familles et les passionnés",
      features: [
        "Recettes illimitées",
        "Planning hebdomadaire",
        "Fusion de listes",
        "Personnalisation des rayons",
        "Historique complet",
        "Support prioritaire",
      ],
      cta: "Essayer Premium",
      ctaLink: "#",
      highlighted: true,
    },
  ];

  return (
    <section id="pricing" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
            Un prix simple, transparent
          </h2>
          <p className="mt-4 text-lg text-muted font-body">
            Commencez gratuitement, passez Premium quand vous êtes prêt.
          </p>
        </div>

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
                    Populaire
                  </span>
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-display font-bold text-xl text-foreground">
                  {plan.name}
                </h3>
                <p className="text-muted font-body text-sm mt-1">
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="font-display font-bold text-4xl text-foreground">
                  {plan.price}
                </span>
                <span className="text-muted font-body ml-2">
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${
                        plan.highlighted ? "text-accent" : "text-accent"
                      }`}
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
                    <span className="text-foreground font-body text-sm">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.ctaLink}
                className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
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

        {/* FAQ or trust elements */}
        <div className="mt-16 text-center">
          <p className="text-muted font-body">
            Paiement sécurisé par{" "}
            <span className="text-foreground font-semibold">Stripe</span>.
            Annulez à tout moment.
          </p>
        </div>
      </div>
    </section>
  );
}
