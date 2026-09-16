import type { Metadata } from "next";
import { business } from "@/lib/site";
import ExternalMap from "@/components/CookieConsent/ExternalMap";
import styles from "../seoPages.module.css";

export const metadata: Metadata = {
  title: "Contact réparation trottinette Saint-Maur",
  description:
    "Contactez GreenEco pour une réparation de trottinette électrique à Saint-Maur : diagnostic, entretien, pneus, freins et batterie.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <article className={styles.page}>
      <section className={styles.hero}>
        <p>Contact</p>
        <h1>Contacter GreenEco pour réparer votre trottinette</h1>
      </section>
      <section className={styles.content}>
        <div className={styles.copy}>
          <h2>Expliquez la panne, GreenEco vous oriente</h2>
          <p>
            Pour une crevaison, un problème de frein, une batterie faible ou un
            diagnostic complet, contactez l’atelier GreenEco à Saint-Maur.
          </p>
          <ul className={styles.list}>
            <li>Téléphone : {business.phone}</li>
            <li>Adresse : {business.addressLabel}</li>
            <li>Horaires : {business.hoursDisplay}</li>
            <li>Note Google : {business.rating} ({business.reviewCount})</li>
          </ul>
        </div>
        <aside className={styles.panel}>
          <h2>Réponse rapide</h2>
          <p>
            Préparez la marque, le modèle et les symptômes de la trottinette.
            Vous pouvez aussi passer à l&apos;atelier selon disponibilité.
          </p>
          <a href={business.phoneHref}>Appeler GreenEco</a>
          <a className={styles.secondaryLink} href={business.mapsUrl}>
            Ouvrir Google Maps
          </a>
        </aside>
      </section>
      <section className={styles.mapSection} aria-label="Carte Google Maps">
        <ExternalMap
          src={business.mapsEmbedUrl}
          title="Carte Google Maps de GreenEco"
        />
      </section>
    </article>
  );
}
