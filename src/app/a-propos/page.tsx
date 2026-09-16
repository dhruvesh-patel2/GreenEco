import type { Metadata } from "next";
import { business } from "@/lib/site";
import ExternalMap from "@/components/CookieConsent/ExternalMap";
import styles from "../seoPages.module.css";

export const metadata: Metadata = {
  title: "À propos de GreenEco Saint-Maur",
  description:
    "GreenEco valorise la réparation locale des trottinettes électriques à Saint-Maur pour une mobilité plus durable.",
  alternates: { canonical: "/a-propos" },
};

export default function AProposPage() {
  return (
    <article className={styles.page}>
      <section className={styles.hero}>
        <p>À propos</p>
        <h1>GreenEco, une mobilité plus verte à Saint-Maur</h1>
      </section>
      <section className={styles.content}>
        <div className={styles.copy}>
          <h2>Réparer pour prolonger la vie des trottinettes</h2>
          <p>
            GreenEco aide les utilisateurs à conserver une trottinette fiable
            plus longtemps grâce à la réparation, l’entretien et le diagnostic
            local à Saint-Maur-des-Fossés.
          </p>
          <ul className={styles.list}>
            <li>Approche locale et pratique</li>
            <li>Valorisation de la réparation</li>
            <li>Accompagnement des trajets du quotidien</li>
          </ul>
        </div>
        <aside className={styles.panel}>
          <h2>GreenEco</h2>
          <p>
            {business.fullName}. Retrouvez-nous au {business.addressLabel}.
          </p>
          <p>
            Google : {business.rating} ({business.reviewCount})
          </p>
          <a href="/notre-atelier">Découvrir l’atelier</a>
          <a className={styles.secondaryLink} href={business.mapsUrl}>
            Voir sur Google Maps
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
