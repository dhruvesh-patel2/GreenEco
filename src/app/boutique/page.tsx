import type { Metadata } from "next";
import styles from "../seoPages.module.css";

export const metadata: Metadata = {
  title: "Boutique trottinette électrique Saint-Maur",
  description:
    "Boutique GreenEco pour accessoires et conseils liés aux trottinettes électriques à Saint-Maur.",
  alternates: { canonical: "/boutique" },
};

export default function BoutiquePage() {
  return (
    <article className={styles.page}>
      <section className={styles.hero}>
        <p>Boutique</p>
        <h1>Accessoires et pièces pour trottinettes électriques</h1>
      </section>
      <section className={styles.content}>
        <div className={styles.copy}>
          <h2>Des pièces utiles pour entretenir votre mobilité</h2>
          <p>
            La boutique GreenEco met en avant les besoins essentiels autour de
            la trottinette électrique : pneus, chambres à air, accessoires de
            sécurité et conseils d’entretien.
          </p>
          <ul className={styles.list}>
            <li>Pièces et accessoires courants</li>
            <li>Conseils adaptés à votre modèle</li>
            <li>Service local à Saint-Maur</li>
          </ul>
        </div>
        <aside className={styles.panel}>
          <h2>Besoin d’une pièce ?</h2>
          <p>Contactez l’atelier pour vérifier la compatibilité.</p>
          <a href="/contact">Demander conseil</a>
        </aside>
      </section>
    </article>
  );
}
