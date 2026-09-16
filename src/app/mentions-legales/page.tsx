import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Mail, MapPin, Phone } from "lucide-react";
import { business } from "@/lib/site";
import styles from "../legalPages.module.css";

export const metadata: Metadata = {
  title: "Mentions légales",
  description:
    "Mentions légales de GreenEco : éditeur DRIVING ECO, coordonnées, propriété intellectuelle, données personnelles et utilisation du site.",
  alternates: { canonical: "/mentions-legales" },
};

const sections = [
  ["editeur", "Éditeur du site"], ["hebergement", "Hébergement"],
  ["propriete", "Propriété intellectuelle"], ["rendez-vous", "Prise de rendez-vous"],
  ["donnees", "Données personnelles"], ["conservation", "Conservation"],
  ["droits", "Vos droits"], ["securite", "Sécurité"],
  ["prestataires", "Prestataires techniques"], ["cookies", "Cookies et traceurs"],
  ["responsabilite", "Responsabilité"],
] as const;

export default function MentionsLegalesPage() {
  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Informations légales</p>
          <h1>Mentions légales GreenEco</h1>
          <p className={styles.heroLead}>Informations relatives à l&apos;éditeur du site, à son hébergement et à l&apos;utilisation des services GreenEco.</p>
          <p className={styles.updated}>Dernière mise à jour : 17 septembre 2026</p>
        </div>
      </header>

      <div className={styles.layout}>
        <nav className={styles.summary} aria-label="Sommaire des mentions légales">
          <p>Sommaire</p>
          {sections.map(([id, label], index) => (
            <a href={`#${id}`} key={id}><span>{String(index + 1).padStart(2, "0")}</span>{label}</a>
          ))}
        </nav>

        <div className={styles.legalContent}>
          <section id="editeur" className={styles.section}>
            <p className={styles.sectionNumber}>01</p><h2>Éditeur du site</h2>
            <p>Le site GreenEco est édité par la société <strong>DRIVING ECO</strong>, société par actions simplifiée, immatriculée sous le numéro SIREN 951 647 981.</p>
            <div className={styles.companyCard}>
              <div className={styles.companyHeading}>
                <span><Building2 size={22} /></span><div><h3>DRIVING ECO</h3><p>Société par actions simplifiée (SAS)</p></div>
              </div>
              <dl className={styles.companyGrid}>
                <div><dt>SIREN</dt><dd>951 647 981</dd></div><div><dt>SIRET du siège</dt><dd>951 647 981 00012</dd></div>
                <div><dt>SIRET GreenEco</dt><dd>951 647 981 00020</dd></div><div><dt>TVA intracommunautaire</dt><dd>FR88951647981</dd></div>
                <div><dt>Date de création</dt><dd>19 avril 2023</dd></div><div><dt>Activité du siège</dt><dd>Commerce et réparation de motocycles</dd></div>
                <div><dt>Code APE/NAF du siège</dt><dd>4540Z</dd></div><div><dt>Activité de l&apos;établissement</dt><dd>Commerce de détail d&apos;articles de sport en magasin spécialisé</dd></div>
                <div><dt>Code APE/NAF de l&apos;établissement</dt><dd>4764Z</dd></div>
              </dl>
              <div className={styles.contactGrid}>
                <address><MapPin size={19} /><span><strong>Siège social</strong>11 rue René Rousseau<br />95870 Bezons, France</span></address>
                <address><MapPin size={19} /><span><strong>Établissement GreenEco</strong>33 rue de la Varenne<br />94100 Saint-Maur-des-Fossés, France</span></address>
                <a href={business.phoneHref}><Phone size={18} />{business.phone}</a>
                <a href={`mailto:${business.email}`}><Mail size={18} />{business.email}</a>
              </div>
            </div>
            <p>L&apos;établissement GreenEco exerce notamment une activité liée à la réparation, l&apos;entretien et au diagnostic de trottinettes et vélos électriques. Site : <a href={business.website}>{business.websiteLabel}</a>.</p>
          </section>

          <section id="hebergement" className={styles.section}>
            <p className={styles.sectionNumber}>02</p><h2>Hébergement</h2>
            {/* TODO: renseigner l'hébergeur définitif avant mise en production. */}
            <p>Les informations relatives à l&apos;hébergeur du site seront publiées ici dès la mise en production définitive du service.</p>
          </section>

          <section id="propriete" className={styles.section}>
            <p className={styles.sectionNumber}>03</p><h2>Propriété intellectuelle</h2>
            <p>L&apos;ensemble des contenus présents sur le site GreenEco, notamment les textes, éléments graphiques, photographies, illustrations, logos, icônes, interfaces et éléments constituant sa structure, est susceptible d&apos;être protégé par les dispositions applicables en matière de propriété intellectuelle.</p>
            <p>Toute reproduction, représentation, adaptation ou exploitation totale ou partielle des contenus du site sans autorisation préalable du titulaire des droits concernés est interdite, sauf dans les cas autorisés par la loi. Les contenus appartenant à des tiers restent la propriété de leurs titulaires respectifs.</p>
          </section>

          <section id="rendez-vous" className={styles.section}>
            <p className={styles.sectionNumber}>04</p><h2>Prise de rendez-vous</h2>
            <p>Le site GreenEco permet aux utilisateurs de prendre ou demander un rendez-vous pour l&apos;entretien, le diagnostic ou la réparation de leur véhicule. Les informations communiquées servent à traiter la demande, organiser le rendez-vous et assurer le suivi de la prestation.</p>
            <div className={styles.notice}>Une prise de rendez-vous ne constitue pas nécessairement l&apos;acceptation définitive d&apos;un devis ou d&apos;une réparation. Un diagnostic en atelier peut être nécessaire pour confirmer le prix, les pièces et le délai d&apos;intervention.</div>
          </section>

          <section id="donnees" className={styles.section}>
            <p className={styles.sectionNumber}>05</p><h2>Données personnelles</h2>
            <p>Selon les fonctionnalités effectivement utilisées, GreenEco peut traiter les données transmises par les clients dans le cadre des rendez-vous, demandes et prestations.</p>
            <div className={styles.twoColumns}>
              <div><h3>Données concernées</h3><ul><li>nom et prénom ;</li><li>adresse e-mail et téléphone ;</li><li>informations relatives au véhicule ;</li><li>rendez-vous, interventions et réparations ;</li><li>éléments nécessaires aux devis et factures.</li></ul></div>
              <div><h3>Utilisations</h3><ul><li>gérer les rendez-vous et demandes ;</li><li>contacter le client et suivre les réparations ;</li><li>établir et conserver devis et factures ;</li><li>gérer la relation client ;</li><li>respecter les obligations légales et comptables.</li></ul></div>
            </div>
            <p>Les modalités détaillées sont présentées dans la <Link href="/politique-de-confidentialite">politique de confidentialité</Link>.</p>
          </section>

          <section id="conservation" className={styles.section}>
            <p className={styles.sectionNumber}>06</p><h2>Conservation des données</h2>
            <p>Les données personnelles sont conservées pendant une durée proportionnée aux finalités pour lesquelles elles ont été collectées, sous réserve des obligations légales imposant la conservation de certaines informations pendant une durée déterminée. Les documents comptables, notamment les factures, peuvent être conservés pendant la durée prévue par la réglementation applicable.</p>
          </section>

          <section id="droits" className={styles.section}>
            <p className={styles.sectionNumber}>07</p><h2>Vos droits</h2>
            <p>Conformément au RGPD et à la loi Informatique et Libertés, les personnes concernées disposent, selon leur situation, de droits d&apos;accès, de rectification, d&apos;effacement, de limitation, d&apos;opposition et de portabilité de leurs données.</p>
            <div className={styles.contactBox}><a href={`mailto:${business.email}`}><Mail size={18} />{business.email}</a><address>GreenEco / DRIVING ECO<br />33 rue de la Varenne<br />94100 Saint-Maur-des-Fossés, France</address></div>
            <p>Toute personne concernée peut également introduire une réclamation auprès de la <a href="https://www.cnil.fr" target="_blank" rel="noreferrer">CNIL</a>.</p>
          </section>

          <section id="securite" className={styles.section}>
            <p className={styles.sectionNumber}>08</p><h2>Sécurité des données</h2>
            <p>GreenEco met en œuvre des mesures techniques et organisationnelles destinées à protéger les informations traitées contre notamment l&apos;accès non autorisé, la perte, l&apos;altération ou la divulgation. Les fonctionnalités internes relatives aux clients, rendez-vous, réparations, devis et factures sont destinées aux seules personnes autorisées.</p>
          </section>

          <section id="prestataires" className={styles.section}>
            <p className={styles.sectionNumber}>09</p><h2>Prestataires techniques</h2>
            <p>Certaines données peuvent être traitées par les prestataires techniques strictement nécessaires au fonctionnement du site et des services, notamment pour l&apos;hébergement ou l&apos;infrastructure technique. Leur intervention est limitée aux besoins du service concerné. Aucun prestataire nominatif supplémentaire n&apos;est déclaré tant qu&apos;il n&apos;est pas effectivement intégré au site.</p>
          </section>

          <section id="cookies" className={styles.section}>
            <p className={styles.sectionNumber}>10</p><h2>Cookies et traceurs</h2>
            <p>Aucun outil publicitaire ni service de mesure d&apos;audience n&apos;est actuellement intégré au site. Des services externes ouverts à la demande de l&apos;utilisateur, tels que Google Maps, appliquent leurs propres règles lorsqu&apos;il quitte le site ou consulte leur contenu. Consultez la <Link href="/politique-cookies">politique de cookies</Link>.</p>
          </section>

          <section id="responsabilite" className={styles.section}>
            <p className={styles.sectionNumber}>11</p><h2>Responsabilité</h2>
            <p>GreenEco s&apos;efforce de fournir des informations exactes et régulièrement mises à jour. Les tarifs, délais, disponibilités des pièces et possibilités de réparation peuvent toutefois varier selon le véhicule, son état, le diagnostic et les pièces nécessaires. Un diagnostic en atelier peut être nécessaire avant la confirmation définitive du prix et du délai.</p>
            <p>GreenEco ne saurait être tenu responsable des interruptions temporaires du site liées notamment à la maintenance, à des incidents techniques ou à des événements indépendants de sa volonté, sous réserve des dispositions légales impératives.</p>
          </section>
        </div>
      </div>
    </article>
  );
}
