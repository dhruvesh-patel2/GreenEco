import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { business } from "@/lib/site";
import styles from "./conditions.module.css";

export const metadata: Metadata = {
  title: "Conditions générales de service",
  description:
    "Consultez les conditions générales applicables aux diagnostics, entretiens et réparations réalisés par l'atelier GreenEco à Saint-Maur-des-Fossés.",
  alternates: { canonical: "/conditions-generales" },
};

const summary = [
  ["conditions", "Conditions"], ["rendez-vous", "Rendez-vous"],
  ["diagnostic-devis", "Diagnostic & devis"], ["tarifs-paiement", "Tarifs & paiement"],
  ["reparation", "Réparation"], ["garanties", "Garanties"],
  ["responsabilite", "Responsabilité"], ["reclamations", "Réclamations"],
] as const;

export default function ConditionsGeneralesPage() {
  return (
    <article className={styles.page}>
      <header className={styles.hero}>
        <div className={styles.heroInner}>
          <p>Conditions de service</p>
          <h1>Conditions générales de service GreenEco</h1>
          <span>Conditions applicables aux diagnostics, entretiens et réparations réalisés par l&apos;atelier GreenEco.</span>
          <small>Dernière mise à jour : 17 septembre 2026</small>
        </div>
      </header>

      <div className={styles.layout}>
        <div className={styles.content}>
          <section id="conditions" className={styles.chapter}>
            <div className={styles.chapterHeading}><span>01</span><h2>Objet et champ d&apos;application</h2></div>
            <p>Les présentes conditions encadrent les prestations réalisées par GreenEco auprès de ses clients : diagnostic, entretien, réparation, remplacement de pièces et interventions techniques sur les trottinettes et vélos électriques pris en charge par l&apos;atelier.</p>
            <p>GreenEco est une enseigne exploitée par DRIVING ECO, société par actions simplifiée, SIREN 951 647 981, SIRET de l&apos;établissement GreenEco 951 647 981 00020, TVA intracommunautaire FR88951647981.</p>
            <p>Les conditions applicables sont celles communiquées au client dans le cadre de la prestation, sous réserve des dispositions légales impératives.</p>
          </section>

          <section id="rendez-vous" className={styles.chapter}>
            <div className={styles.chapterHeading}><span>02</span><h2>Rendez-vous et prise en charge</h2></div>
            <h3>Prise de rendez-vous</h3>
            <p>Le client peut demander un rendez-vous depuis le site ou contacter directement GreenEco. Il doit communiquer des coordonnées exactes et des informations suffisamment précises sur son véhicule et la difficulté rencontrée.</p>
            <div className={styles.notice}>Une demande de rendez-vous concerne la prise en charge du véhicule. Elle ne constitue ni un diagnostic définitif, ni un devis définitif, ni la garantie d&apos;une réparation immédiate.</div>
            <h3>Dépôt du véhicule</h3>
            <p>Lors du dépôt, GreenEco peut recueillir l&apos;identité et les coordonnées du client, la marque et le modèle du véhicule, la panne signalée, son état apparent, les accessoires laissés et l&apos;intervention demandée.</p>
            <p>Le client doit signaler les réparations ou modifications antérieures, problèmes électriques connus, chocs, forte exposition à l&apos;eau, batterie endommagée ou tout comportement anormal susceptible d&apos;affecter l&apos;intervention.</p>
            <p>GreenEco peut refuser une intervention techniquement impossible, présentant un risque de sécurité, nécessitant des pièces indisponibles ou ne relevant pas des prestations proposées par l&apos;atelier.</p>
          </section>

          <section id="diagnostic-devis" className={styles.chapter}>
            <div className={styles.chapterHeading}><span>03</span><h2>Diagnostic et devis</h2></div>
            <h3>Diagnostic</h3>
            <p>Un diagnostic peut être nécessaire pour identifier l&apos;origine d&apos;une panne. Le diagnostic initial peut évoluer lorsqu&apos;un démontage ou des tests révèlent une anomalie qui ne pouvait pas être constatée lors du premier examen.</p>
            <p>Les tarifs de diagnostic actuellement proposés sont détaillés sur la page <Link href="/reparation">Réparations et tarifs</Link>. Le tarif applicable dépend notamment du type de véhicule ou du contrôle demandé.</p>
            <h3>Devis et autorisation d&apos;intervention</h3>
            <p>Lorsqu&apos;un devis est établi, il décrit les prestations et pièces prévues selon les informations disponibles au moment du diagnostic. GreenEco n&apos;ajoute pas arbitrairement une prestation supplémentaire facturable importante sans rapport avec ce qui a été accepté.</p>
            <p>Si une panne ou une pièce supplémentaire est découverte pendant l&apos;intervention, GreenEco peut contacter le client pour l&apos;en informer et, lorsque cela est nécessaire, recueillir son accord avant de poursuivre. Le prix final peut évoluer lorsque le client accepte une modification ou un complément.</p>
          </section>

          <section id="tarifs-paiement" className={styles.chapter}>
            <div className={styles.chapterHeading}><span>04</span><h2>Tarifs, paiement et facturation</h2></div>
            <h3>Tarifs</h3>
            <p>Les prix applicables sont ceux affichés par GreenEco pour la prestation concernée ou communiqués au client. Les prestations clairement tarifées sont facturées au prix annoncé pour leur périmètre. D&apos;autres interventions nécessitent un diagnostic ou un devis lorsque leur prix dépend du modèle, de la pièce, de la complexité ou de l&apos;état du véhicule.</p>
            <p>Les mentions « main-d&apos;œuvre hors pièces », « selon la pièce » ou « sur devis » précisent les éléments qui ne peuvent pas être déterminés à l&apos;avance. Les tarifs détaillés sont consultables sur la page <Link href="/reparation">Réparation</Link>.</p>
            <h3>Paiement</h3>
            <p>Le client règle les sommes correspondant aux prestations et produits effectivement facturés, selon les conditions qui lui ont été communiquées. Les modalités et moyens de paiement disponibles sont confirmés directement par GreenEco.</p>
            <h3>Facturation</h3>
            <p>GreenEco peut établir une facture correspondant aux prestations réalisées et aux pièces facturées. Les informations nécessaires à son établissement et à sa conservation peuvent être traitées conformément aux obligations comptables et fiscales applicables.</p>
          </section>

          <section id="reparation" className={styles.chapter}>
            <div className={styles.chapterHeading}><span>05</span><h2>Exécution de la réparation</h2></div>
            <h3>Pièces détachées</h3>
            <p>Une réparation peut nécessiter le remplacement de composants. Leur disponibilité dépend notamment du fabricant, du modèle, de l&apos;ancienneté du véhicule, des fournisseurs et des stocks disponibles. GreenEco ne garantit pas un délai d&apos;approvisionnement avant confirmation de la disponibilité.</p>
            <p>Lorsque cela est prévu pour la prestation, GreenEco peut proposer des pièces d&apos;origine ou équivalentes adaptées au véhicule. La solution retenue est précisée au client dans le cadre de la prestation ou du devis.</p>
            <h3>Délais d&apos;intervention</h3>
            <p>Les délais dépendent de la nature de la panne, de la charge de l&apos;atelier, de la disponibilité des pièces, des tests nécessaires et des difficultés techniques découvertes pendant l&apos;intervention. Un délai communiqué à titre estimatif peut évoluer en cas d&apos;événement technique ou logistique imprévu.</p>
            <h3>Récupération du véhicule</h3>
            <p>Lorsque l&apos;intervention est terminée, le client peut être informé afin de récupérer son véhicule selon les modalités convenues. Si le véhicule reste à l&apos;atelier pendant une durée anormalement longue, GreenEco peut reprendre contact avec le client pour organiser sa récupération.</p>
            <p>Aucun abandon ni transfert de propriété n&apos;intervient automatiquement. Toute situation prolongée est traitée conformément aux procédures légalement applicables.</p>
            <h3>Batteries et éléments électriques</h3>
            <p>Les batteries lithium et composants électriques peuvent présenter des risques particuliers. Le client doit prévenir GreenEco si une batterie a subi un choc important, est déformée, chauffe anormalement, dégage une odeur inhabituelle, a été fortement exposée à l&apos;eau ou présente un comportement potentiellement dangereux.</p>
            <p>Pour des raisons de sécurité, GreenEco peut refuser ou interrompre une prise en charge lorsqu&apos;un véhicule ou une batterie présente un danger nécessitant des précautions particulières.</p>
          </section>

          <section id="garanties" className={styles.chapter}>
            <div className={styles.chapterHeading}><span>06</span><h2>Garanties</h2></div>
            <p>Les prestations et pièces fournies par GreenEco bénéficient, lorsqu&apos;elles sont applicables, des garanties prévues par la réglementation. Une nouvelle panne n&apos;est pas nécessairement liée à l&apos;intervention précédente.</p>
            <p>Lorsqu&apos;un problème est signalé après une intervention, GreenEco peut examiner le véhicule pour déterminer son origine et son éventuel lien avec la prestation réalisée. Les garanties applicables ne couvrent pas nécessairement les dommages dont il est établi qu&apos;ils résultent d&apos;un choc, d&apos;une mauvaise utilisation, d&apos;une modification ultérieure, d&apos;une intervention d&apos;un tiers ou d&apos;une cause sans lien avec la prestation GreenEco.</p>
            <div className={styles.notice}>Aucune stipulation des présentes conditions ne supprime ni ne limite les garanties légales dont bénéficie le consommateur.</div>
            <h3>Données personnelles</h3>
            <p>Les données nécessaires aux rendez-vous, au suivi des interventions, à la relation client, aux devis et à la facturation peuvent être traitées par GreenEco. <Link href="/politique-de-confidentialite">Consulter notre politique de confidentialité</Link>.</p>
          </section>

          <section id="responsabilite" className={styles.chapter}>
            <div className={styles.chapterHeading}><span>07</span><h2>Responsabilité et force majeure</h2></div>
            <h3>Responsabilité</h3>
            <p>GreenEco est responsable de l&apos;exécution de ses prestations dans les conditions prévues par la réglementation applicable. GreenEco ne peut toutefois être tenu responsable d&apos;un problème sans lien avec son intervention ou résultant notamment d&apos;informations incorrectes fournies par le client, d&apos;une modification ultérieure du véhicule ou d&apos;un événement extérieur, sous réserve des dispositions légales impératives.</p>
            <h3>Force majeure</h3>
            <p>Lorsqu&apos;un événement répondant aux critères juridiques de la force majeure empêche ou retarde l&apos;exécution d&apos;une prestation, les obligations affectées peuvent être suspendues pendant la durée de cet événement, dans les conditions prévues par le droit applicable.</p>
          </section>

          <section id="reclamations" className={styles.chapter}>
            <div className={styles.chapterHeading}><span>08</span><h2>Réclamations et règlement des différends</h2></div>
            <h3>Contacter GreenEco</h3>
            <p>Pour toute question ou difficulté concernant une prestation, le client peut contacter l&apos;atelier afin de rechercher une solution.</p>
            <address className={styles.contactBox}>
              <strong>GreenEco</strong><span>33 rue de la Varenne<br />94100 Saint-Maur-des-Fossés</span>
              <a href={business.phoneHref}><Phone size={17} />{business.phone}</a>
              <a href={`mailto:${business.email}`}><Mail size={17} />{business.email}</a>
            </address>
            <h3>Médiation de la consommation</h3>
            {/* TODO: renseigner le médiateur de la consommation auquel DRIVING ECO a effectivement adhéré avant mise en production. */}
            <p>Après une réclamation écrite préalable auprès de GreenEco restée sans solution satisfaisante, le consommateur peut recourir gratuitement au médiateur de la consommation dont relève DRIVING ECO. Les coordonnées de ce médiateur seront communiquées dès confirmation de l&apos;organisme auquel la société a effectivement adhéré.</p>
            <h3>Droit applicable</h3>
            <p>Les présentes conditions sont soumises au droit français. En cas de différend, les règles légales applicables déterminent les voies de recours et la juridiction compétente, sans priver le consommateur des protections impératives dont il bénéficie.</p>
          </section>
        </div>

        <nav className={styles.summary} aria-label="Sommaire des conditions générales">
          <p>Dans cette page</p>
          {summary.map(([id, label], index) => <a href={`#${id}`} key={id}><span>{String(index + 1).padStart(2, "0")}</span>{label}</a>)}
          <Link href="/reparation" className={styles.pricesLink}>Voir les tarifs <span>→</span></Link>
        </nav>
      </div>
    </article>
  );
}
