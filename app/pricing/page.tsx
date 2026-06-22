import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingDetailed from "@/components/PricingDetailed";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs — RecipeCart",
  description:
    "Découvrez nos tarifs simples et transparents. Plan gratuit avec 3 recettes/mois ou Premium illimité à 9,99€/mois.",
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <PricingDetailed />
      </main>
      <Footer />
    </>
  );
}
