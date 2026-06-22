import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Je ne fais plus jamais de liste à la main. RecipeCart me fait gagner au moins 30 minutes par semaine.",
      author: "Marie L.",
      role: "Maman de 3 enfants",
      avatar: "woman-portrait-1",
    },
    {
      quote: "Enfin un outil simple qui fait exactement ce qu'il promet. Le tri par rayon est un game changer.",
      author: "Thomas D.",
      role: "Amateur de cuisine",
      avatar: "man-portrait-1",
    },
  ];

  return (
    <section className="section-padding bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-foreground">
            Ils ont simplifié leurs courses
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-background border border-border"
            >
              <svg
                className="w-10 h-10 text-accent/30 mb-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <blockquote className="text-xl text-foreground font-body leading-relaxed mb-6">
                {testimonial.quote}
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={`https://picsum.photos/seed/${testimonial.avatar}/100/100`}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-muted font-body">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
