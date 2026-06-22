import type { Metadata } from "next";
import { Sora, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "RecipeCart — Transformez vos recettes en listes de courses",
  description:
    "RecipeCart transforme l'URL de n'importe quelle recette en liste de courses organisée par rayon. Simplifiez vos courses et gagnez du temps.",
  keywords: [
    "liste de courses",
    "recettes",
    "meal planning",
    "planification repas",
    "courses organisées",
  ],
  openGraph: {
    title: "RecipeCart — Transformez vos recettes en listes de courses",
    description:
      "Collez une URL de recette, obtenez une liste de courses triée par rayon.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${sora.variable} ${plusJakarta.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
