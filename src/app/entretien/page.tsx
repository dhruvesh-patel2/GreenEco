import type { Metadata } from "next";
import styles from "../seoPages.module.css";

export const metadata: Metadata = {
  title: "Entretien trottinette électrique à Saint-Maur",
  description:
    "Entretien et révision de trottinettes électriques à Saint-Maur : freins, pneus, serrage, éclairage, batterie et sécurité.",
  alternates: { canonical: "/entretien" },
};

export default function EntretienPage() {
  return (
    <article className={styles.page}>
      <section className={styles.hero}>
        <p>Entretien</p>
        <h1>Révision de trottinette électrique avant vos trajets</h1>
      </section>
      <section className={styles.content}>
        <div className={styles.copy}>
          <h2>Prévenir les pannes et sécuriser la conduite</h2>
          <p>
            Un entretien régulier limite les crevaisons, améliore le freinage
            et prolonge la durée de vie des pièces. GreenEco vérifie les points
            sensibles de votre trottinette électrique à Saint-Maur.
          </p>
          <ul className={styles.list}>
            <li>Contrôle freinage, pneus et visserie</li>
            <li>Nettoyage, réglages et vérification générale</li>
            <li>Conseils d’usage pour préserver la batterie</li>
          </ul>
        </div>
        <aside className={styles.panel}>
          <h2>Révision utile</h2>
          <p>Idéal avant une reprise intensive ou après plusieurs mois d’usage.</p>
          <a href="/rendez-vous">Planifier l’entretien</a>
        </aside>
      </section>
    </article>
  );
}
