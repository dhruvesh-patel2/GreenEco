import type { Metadata } from "next";
import CookieSettingsButton from "@/components/CookieConsent/CookieSettingsButton";
import styles from "../legalPages.module.css";

export const metadata: Metadata = {
  title: "Politique de cookies",
  description: "Politique de cookies GreenEco : consentement, stockage nécessaire et contrôle du chargement de Google Maps.",
  alternates: { canonical: "/politique-cookies" },
};

export default function PolitiqueCookiesPage() {
  return (
    <article className={styles.page}>
      <header className={styles.hero}><div className={styles.heroInner}>
        <p className={styles.eyebrow}>Vie privée</p><h1>Politique de cookies</h1>
        <p className={styles.heroLead}>Les traceurs réellement utilisés par GreenEco et les moyens disponibles pour contrôler vos choix.</p>
        <p className={styles.updated}>Dernière mise à jour : 17 septembre 2026</p>
      </div></header>

      <div className={styles.layout}>
        <nav className={styles.summary} aria-label="Sommaire de la politique de cookies">
          <p>Sommaire</p>
          <a href="#definition"><span>01</span>Définition</a>
          <a href="#traceurs"><span>02</span>Traceurs utilisés</a>
          <a href="#necessaires"><span>03</span>Stockage nécessaire</a>
          <a href="#externes"><span>04</span>Services externes</a>
          <a href="#choix"><span>05</span>Modifier vos choix</a>
        </nav>

        <div className={styles.legalContent}>
          <section id="definition" className={styles.section}>
            <p className={styles.sectionNumber}>01</p><h2>Qu&apos;est-ce qu&apos;un cookie ou un traceur ?</h2>
            <p>Un cookie ou un stockage navigateur est une petite information enregistrée sur votre appareil. Il peut être indispensable au fonctionnement d&apos;un service ou permettre à une plateforme externe de fournir un contenu.</p>
          </section>

          <section id="traceurs" className={styles.section}>
            <p className={styles.sectionNumber}>02</p><h2>Quels traceurs utilisons-nous ?</h2>
            <p>L&apos;audit du site a identifié un seul stockage créé directement par GreenEco et un service externe optionnel. Aucun outil de mesure d&apos;audience, cookie marketing, pixel publicitaire, outil de chat ou réseau social intégré n&apos;est actuellement chargé.</p>
            <div className={styles.dataTable} role="region" aria-label="Liste des traceurs" tabIndex={0}>
              <table><thead><tr><th>Élément</th><th>Fournisseur</th><th>Finalité</th><th>Catégorie</th><th>Durée</th><th>Consentement</th></tr></thead>
              <tbody>
                <tr><td><code>greeneco_cookie_consent</code></td><td>GreenEco</td><td>Mémoriser vos préférences et la version de la politique</td><td>Nécessaire</td><td>180 jours maximum</td><td>Non</td></tr>
                <tr><td>Cartes intégrées</td><td>Google Maps</td><td>Afficher la localisation de l&apos;atelier</td><td>Services externes</td><td>Selon les règles de Google</td><td>Oui</td></tr>
              </tbody></table>
            </div>
          </section>

          <section id="necessaires" className={styles.section}>
            <p className={styles.sectionNumber}>03</p><h2>Stockage strictement nécessaire</h2>
            <p>GreenEco utilise le stockage local <code>greeneco_cookie_consent</code> uniquement pour enregistrer votre choix, sa date et la version de la politique. Sans ce stockage, le site ne pourrait pas mémoriser votre refus ou votre accord entre deux visites.</p>
            <p>Le choix expire au plus tard après 180 jours. Il est également redemandé lorsque la version de la politique de consentement change ou lorsque le stockage est supprimé depuis votre navigateur.</p>
          </section>

          <section id="externes" className={styles.section}>
            <p className={styles.sectionNumber}>04</p><h2>Services externes : Google Maps</h2>
            <p>Quatre pages proposent une carte Google Maps intégrée. Avant votre accord, l&apos;iframe Google est totalement absente du document et aucune requête vers cette carte n&apos;est effectuée par votre navigateur. Un emplacement GreenEco est affiché à la place.</p>
            <p>Après autorisation des services externes, l&apos;iframe est chargée et Google peut traiter des informations conformément à ses propres règles. Les simples liens qui ouvrent Google Maps ne chargent aucun contenu Google sur le site GreenEco.</p>
            <div className={styles.notice}>Si vous retirez ensuite votre accord, les cartes sont immédiatement retirées et ne sont plus rechargées. GreenEco ne peut pas supprimer les cookies éventuellement créés sur le domaine de Google ; ceux-ci doivent être gérés auprès de Google ou depuis votre navigateur.</div>
          </section>

          <section id="choix" className={styles.section}>
            <p className={styles.sectionNumber}>05</p><h2>Comment modifier vos choix ?</h2>
            <p>Vous pouvez accepter ou refuser les services externes à tout moment. Le lien « Gérer mes cookies » reste disponible dans le pied de page sur toutes les pages du site.</p>
            <CookieSettingsButton className={styles.manageCookiesButton} />
          </section>
        </div>
      </div>
    </article>
  );
}
