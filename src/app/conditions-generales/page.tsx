import type { Metadata } from "next";
import Link from "next/link";
import { business } from "@/lib/site";
import styles from "../seoPages.module.css";

export const metadata: Metadata = {
  title: "Conditions générales",
  description:
    "Conditions générales GreenEco pour les réparations, devis, diagnostics et interventions sur trottinettes électriques.",
  alternates: { canonical: "/conditions-generales" },
};

export default function ConditionsGeneralesPage() {
  return (
    <article className={styles.page}>
      <section className={styles.hero}>
        <p>Conditions de service</p>
        <h1>Conditions générales GreenEco</h1>
      </section>

      <section className={styles.content}>
        <div className={styles.copy}>
          <h2>Interventions</h2>
          <p>
            GreenEco intervient sur les trottinettes électriques et vélos
            électriques selon la disponibilité de l&apos;atelier, des pièces et
            la faisabilité technique.
          </p>

          <h2>Diagnostic et devis</h2>
          <p>
            Les diagnostics nécessitent un rendez-vous ou un appel préalable pour
            vérifier la disponibilité. Pour les autres prestations, le passage en
            boutique est possible sans rendez-vous selon l&apos;affluence. Un
            devis clair est présenté avant les réparations importantes.
          </p>

          <h2>Prix et paiement</h2>
          <p>
            Les prix affichés sont indicatifs et peuvent varier selon le modèle,
            la pièce nécessaire et l&apos;état de la trottinette. Le paiement est
            dû à la récupération du véhicule, sauf accord différent.
          </p>

          <h2>Garantie</h2>
          <p>
            Les interventions sont testées avant remise. Les garanties éventuelles
            portent sur les pièces remplacées et la main-d&apos;oeuvre associée,
            hors mauvaise utilisation, choc, oxydation ou modification non
            signalée.
          </p>
        </div>

        <aside className={styles.panel}>
          <h2>Une question avant intervention ?</h2>
          <p>
            Contactez l&apos;atelier au {business.phone} ou consultez les tarifs
            détaillés.
          </p>
          <Link href="/reparation">Voir les réparations</Link>
        </aside>
      </section>
    </article>
  );
}
