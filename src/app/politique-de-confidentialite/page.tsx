import type { Metadata } from "next";
import Link from "next/link";
import { Mail } from "lucide-react";
import { business } from "@/lib/site";
import styles from "../legalPages.module.css";

export const metadata: Metadata = {
  title: "Politique de confidentialité",
  description: "Politique de confidentialité GreenEco : données traitées, finalités, conservation et droits des clients.",
  alternates: { canonical: "/politique-de-confidentialite" },
};

const privacySections = [
  ["responsable", "Responsable du traitement"], ["donnees", "Données traitées"],
  ["finalites", "Finalités et bases légales"], ["destinataires", "Destinataires"],
  ["conservation", "Durées de conservation"], ["securite", "Sécurité"],
  ["droits", "Vos droits"], ["cookies", "Cookies et services externes"],
] as const;

export default function PrivacyPage() {
  return (
    <article className={styles.page}>
      <header className={styles.hero}><div className={styles.heroInner}>
        <p className={styles.eyebrow}>Protection des données</p><h1>Politique de confidentialité</h1>
        <p className={styles.heroLead}>Comment GreenEco traite et protège les informations communiquées dans le cadre de ses services.</p>
        <p className={styles.updated}>Dernière mise à jour : 17 septembre 2026</p>
      </div></header>

      <div className={styles.layout}>
        <nav className={styles.summary} aria-label="Sommaire de la politique de confidentialité">
          <p>Sommaire</p>
          {privacySections.map(([id, label], index) => <a href={`#${id}`} key={id}><span>{String(index + 1).padStart(2, "0")}</span>{label}</a>)}
        </nav>
        <div className={styles.legalContent}>
          <section id="responsable" className={styles.section}>
            <p className={styles.sectionNumber}>01</p><h2>Responsable du traitement</h2>
            <p>Le responsable des traitements décrits dans cette politique est DRIVING ECO, société par actions simplifiée exploitant l&apos;enseigne GreenEco.</p>
            <div className={styles.contactBox}><a href={`mailto:${business.email}`}><Mail size={18} />{business.email}</a><address>GreenEco / DRIVING ECO<br />33 rue de la Varenne<br />94100 Saint-Maur-des-Fossés, France</address></div>
          </section>
          <section id="donnees" className={styles.section}>
            <p className={styles.sectionNumber}>02</p><h2>Données traitées</h2>
            <p>Selon les fonctionnalités utilisées et les informations volontairement communiquées, les données peuvent comprendre le nom, le prénom, l&apos;adresse e-mail, le téléphone, les informations relatives au véhicule, les rendez-vous, les interventions, les réparations ainsi que les éléments nécessaires aux devis et factures.</p>
            <p>GreenEco demande uniquement les informations utiles au traitement de la demande ou à la réalisation de la prestation concernée.</p>
          </section>
          <section id="finalites" className={styles.section}>
            <p className={styles.sectionNumber}>03</p><h2>Finalités et bases légales</h2>
            <div className={styles.twoColumns}>
              <div><h3>Exécution du service</h3><ul><li>gérer une demande ou un rendez-vous ;</li><li>diagnostiquer et suivre un véhicule ;</li><li>préparer un devis ou une facture ;</li><li>contacter le client au sujet de la prestation.</li></ul></div>
              <div><h3>Obligations et intérêt légitime</h3><ul><li>respecter les obligations comptables et fiscales ;</li><li>conserver les justificatifs nécessaires ;</li><li>sécuriser les outils et prévenir les abus ;</li><li>gérer la relation client et les réclamations.</li></ul></div>
            </div>
            <p>Les traitements reposent, selon leur objet, sur l&apos;exécution de mesures précontractuelles ou contractuelles, le respect d&apos;une obligation légale ou l&apos;intérêt légitime de GreenEco à gérer et sécuriser son activité.</p>
          </section>
          <section id="destinataires" className={styles.section}>
            <p className={styles.sectionNumber}>04</p><h2>Destinataires et prestataires</h2>
            <p>Les données sont accessibles aux personnes autorisées de GreenEco qui en ont besoin pour traiter les demandes et prestations. Elles peuvent également être traitées par les prestataires techniques strictement nécessaires au fonctionnement du service, dans la limite de leur mission.</p>
            <p>Aucun service d&apos;e-mailing, de SMS, d&apos;analyse publicitaire ou fournisseur de base de données tiers n&apos;est actuellement identifié dans le code du site. La présente politique sera actualisée si de tels services sont ajoutés.</p>
          </section>
          <section id="conservation" className={styles.section}>
            <p className={styles.sectionNumber}>05</p><h2>Durées de conservation</h2>
            <p>Les données sont conservées pendant une durée proportionnée à la finalité du traitement. Les informations relatives à une demande ou à une prestation sont conservées pendant le temps nécessaire à son suivi et à la gestion de la relation client.</p>
            <p>Les devis, factures et autres documents soumis à une obligation légale de conservation peuvent être conservés pendant la durée imposée par la réglementation applicable.</p>
          </section>
          <section id="securite" className={styles.section}>
            <p className={styles.sectionNumber}>06</p><h2>Sécurité</h2>
            <p>GreenEco met en œuvre des mesures techniques et organisationnelles adaptées afin de prévenir l&apos;accès non autorisé, la perte, l&apos;altération ou la divulgation des informations. L&apos;accès aux outils internes doit être limité aux personnes autorisées.</p>
          </section>
          <section id="droits" className={styles.section}>
            <p className={styles.sectionNumber}>07</p><h2>Vos droits</h2>
            <p>Selon votre situation, vous pouvez demander l&apos;accès, la rectification, l&apos;effacement, la limitation ou la portabilité de vos données, ou vous opposer à leur traitement.</p>
            <div className={styles.notice}>Pour exercer vos droits : <a href={`mailto:${business.email}`}>{business.email}</a> ou par courrier à GreenEco / DRIVING ECO, 33 rue de la Varenne, 94100 Saint-Maur-des-Fossés.</div>
            <p>Vous pouvez également déposer une réclamation auprès de la <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">CNIL</a>.</p>
          </section>
          <section id="cookies" className={styles.section}>
            <p className={styles.sectionNumber}>08</p><h2>Cookies et services externes</h2>
            <p>Le site n&apos;intègre actuellement aucun outil publicitaire ni service de mesure d&apos;audience. Les liens et contenus externes, notamment Google Maps, sont soumis aux règles de ces services lorsqu&apos;ils sont consultés.</p>
            <p>Consultez également la <Link href="/politique-cookies">politique de cookies</Link> et les <Link href="/mentions-legales">mentions légales</Link>.</p>
          </section>
        </div>
      </div>
    </article>
  );
}
