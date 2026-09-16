import type { Metadata } from "next";
import { business } from "@/lib/site";
import ExternalMap from "@/components/CookieConsent/ExternalMap";
import styles from "../seoPages.module.css";

export const metadata: Metadata = {
  title: "Notre atelier trottinette à Saint-Maur",
  description:
    "GreenEco est un atelier local dédié à la réparation et l'entretien de trottinettes électriques à Saint-Maur-des-Fossés.",
  alternates: { canonical: "/notre-atelier" },
};

export default function NotreAtelierPage() {
  return (
    <article className={styles.page}>
      <section className={styles.hero}>
        <p>Notre atelier</p>
        <h1>Un atelier GreenEco proche des utilisateurs de Saint-Maur</h1>
      </section>
      <section className={styles.content}>
        <div className={styles.copy}>
          <h2>Réparer localement, simplement et proprement</h2>
          <p>
            GreenEco met en valeur une mobilité plus durable en réparant les
            trottinettes électriques plutôt qu’en les remplaçant trop vite.
            L’atelier accompagne les habitants de Saint-Maur et des communes
            voisines.
          </p>
          <ul className={styles.list}>
            <li>Diagnostic lisible avant intervention</li>
            <li>Réparations orientées usage quotidien</li>
            <li>Conseils pour prolonger la durée de vie de la trottinette</li>
          </ul>
        </div>
        <aside className={styles.panel}>
          <h2>Atelier GreenEco</h2>
          <p>
            {business.addressStreet}
            <br />
            {business.postalCode} {business.city}
          </p>
          <p>
            {business.phone} · {business.rating} Google
          </p>
          <a href={business.mapsUrl}>Voir l’itinéraire</a>
          <a className={styles.secondaryLink} href={business.phoneHref}>
            Appeler l’atelier
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
