import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Copiez l'URL de votre recette",
      description: "Depuis n'importe quel site de cuisine que vous aimez.",
    },
    {
      number: "02",
      title: "RecipeCart analyse et extrait",
      description: "Notre IA identifie tous les ingrédients et quantités.",
    },
    {
      number: "03",
      title: "Obtenez votre liste triée",
      description: "Organisée par rayon, prête pour le supermarché.",
    },
  ];

  return (
    <section id="how-it-works" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative aspect-square rounded-2xl overflow-hidden border border-border">
              <Image
                src="https://picsum.photos/seed/cooking-meal/700/700"
                alt="Préparation de repas"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 bg-accent text-background rounded-xl p-4 shadow-lg">
              <p className="font-display font-bold text-3xl">3x</p>
              <p className="text-sm font-body">plus rapide</p>
            </div>
          </div>

          {/* Right - Steps */}
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Comment ça marche
            </h2>
            <p className="mt-4 text-lg text-muted font-body max-w-md">
              De la recette à la liste de courses en moins de 30 secondes.
            </p>

            <div className="mt-10 space-y-8">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <span className="font-display font-bold text-2xl text-accent">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-lg text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-muted font-body">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
