import type { Metadata } from "next";
import ServicesCatalog from "./ServicesCatalog";

export const metadata: Metadata = {
  title: "Services et tarifs de réparation trottinette à Saint-Maur",
  description:
    "Prestations GreenEco à Saint-Maur : pneus, crevaisons, freins, diagnostic, batterie, moteur, électronique, accessoires et entretien de trottinettes électriques.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return <ServicesCatalog />;
}
