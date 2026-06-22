"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FAQItem[] = [
    {
      question: "Quels sites de recettes sont compatibles ?",
      answer:
        "RecipeCart fonctionne avec la majorité des sites de recettes francophones et anglophones : Marmiton, 750g, Cuisine AZ, BBC Good Food, AllRecipes, et la plupart des blogs culinaires.",
    },
    {
      question: "Puis-je modifier la liste après génération ?",
      answer:
        "Oui, vous pouvez ajouter, supprimer ou modifier les quantités de chaque ingrédient. Vous pouvez aussi déplacer les articles entre rayons selon l'organisation de votre supermarché.",
    },
    {
      question: "Comment fonctionne le planning hebdomadaire ?",
      answer:
        "Avec le plan Premium, ajoutez plusieurs recettes à votre planning de la semaine. RecipeCart fusionne automatiquement les ingrédients identiques et génère une liste consolidée.",
    },
    {
      question: "Puis-je annuler mon abonnement ?",
      answer:
        "Oui, vous pouvez annuler à tout moment depuis votre compte. Votre abonnement reste actif jusqu'à la fin de la période payée.",
    },
  ];

  return (
    <section className="section-padding bg-surface">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground text-center mb-12">
          Questions fréquentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-xl overflow-hidden"
            >
              <button
                type="button"
                className="w-full flex items-center justify-between p-5 text-left bg-background hover:bg-surface/50 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className="font-display font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-muted flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-5 pb-5 bg-background">
                  <p className="text-muted font-body leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
