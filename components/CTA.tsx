import Link from "next/link";

export default function CTA() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-3xl bg-accent/10 border border-accent/20 p-8 sm:p-12 lg:p-16 overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative max-w-2xl">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
              Prêt à simplifier vos courses ?
            </h2>
            <p className="mt-4 text-lg text-muted font-body">
              Rejoignez des milliers de cuisiniers qui gagnent du temps chaque semaine avec RecipeCart.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="#pricing" className="btn-primary">
                Essayer gratuitement
              </Link>
              <Link href="#how-it-works" className="btn-secondary">
                Voir comment ça marche
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
