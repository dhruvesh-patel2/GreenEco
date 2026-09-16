import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  BatteryCharging,
  Cable,
  CalendarCheck,
  CheckCircle2,
  Clock,
  Gauge,
  PhoneCall,
  ShieldCheck,
  SlidersHorizontal,
  Wrench,
} from "lucide-react";
import { business } from "@/lib/site";
import styles from "./reparation.module.css";

export const metadata: Metadata = {
  title: "Réparation trottinette électrique Saint-Maur",
  description:
    "GreenEco répare votre trottinette électrique à Saint-Maur : crevaison, pneu, frein, batterie, charge, moteur, connecteur et diagnostic de panne.",
  alternates: { canonical: "/reparation" },
};

const repairs = [
  {
    icon: Gauge,
    title: "Crevaison, pneu et chambre à air",
    text: "Remplacement pneu tubeless, chambre à air ou pneu plein selon le modèle.",
    price: "Dès 35 €",
  },
  {
    icon: SlidersHorizontal,
    title: "Freinage et sécurité",
    text: "Réglage, purge hydraulique, plaquettes, disque, levier ou étrier.",
    price: "Dès 20 €",
  },
  {
    icon: BatteryCharging,
    title: "Batterie et charge",
    text: "Contrôle autonomie, port de charge, chargeur et remplacement batterie.",
    price: "Dès 50 €",
  },
  {
    icon: Cable,
    title: "Électronique et moteur",
    text: "Contrôleur, écran, accélérateur, câblage, moteur et connectiques.",
    price: "Dès 35 €",
  },
];

const scooterModels = [
  {
    title: "Petite trottinette",
    models:
      "Xiaomi M365, Xiaomi Pro 1, Pro 2, Pro 3, E-Twow Booster, Urban Glide I9, Ninebot F2, Pure R3 Pro, Pure R Pro.",
  },
  {
    title: "Grande trottinette",
    models:
      "Urban Glide E-Cross Pro, Kukirin G2, Vsett 8, 9, 10, Speedway 4, 5, Dualtron DT Mini, Thunder, Ultra.",
  },
];

const tariffGroups = [
  {
    title: "Les roues",
    rows: [
      {
        label: "Changement pneu et/ou chambre à air, petite trottinette",
        detail: "Main-d'oeuvre hors pièces",
        price: "35 €",
      },
      {
        label: "Changement pneu et/ou chambre à air, grande trottinette",
        detail: "Main-d'oeuvre hors pièces",
        price: "40 €",
      },
      {
        label: "Chambre à air + pneu, roue 8 pouces",
        detail: "Pièce et main-d'oeuvre",
        price: "80 €",
      },
      {
        label: "Chambre à air + pneu, roue 10 pouces",
        detail: "Pièce et main-d'oeuvre",
        price: "90 €",
      },
      {
        label: "Chambre à air seule",
        detail: "Pièce et main-d'oeuvre",
        price: "45 €",
      },
      {
        label: "Pneu plein roue 8 pouces",
        detail: "Pièce et main-d'oeuvre",
        price: "60 €",
      },
      {
        label: "Pneu plein 10x2.125 pouces",
        detail: "Pièce et main-d'oeuvre",
        price: "70 €",
      },
      {
        label: "Pneu plein 10x2.50 pouces",
        detail: "Pièce et main-d'oeuvre",
        price: "80 €",
      },
      {
        label: "Pneu plein 10x2.70 pouces",
        detail: "Pièce et main-d'oeuvre",
        price: "90 €",
      },
    ],
  },
  {
    title: "Freins",
    rows: [
      { label: "Réglage du frein", detail: "Contrôle et réglage", price: "20 €" },
      { label: "Purge de frein, 1 frein", detail: "Circuit hydraulique", price: "40 €" },
      { label: "Purge de frein, 2 freins", detail: "Circuit hydraulique", price: "60 €" },
      {
        label: "Levier de frein Xiaomi/Ninebot",
        detail: "Pièces et main-d'oeuvre",
        price: "60 €",
      },
      {
        label: "Étrier de frein + plaquettes",
        detail: "Pièces et main-d'oeuvre",
        price: "80 €",
      },
      {
        label: "Plaquettes de frein",
        detail: "Pièces et main-d'oeuvre",
        price: "40 €",
      },
      {
        label: "Disque de frein, petite trottinette",
        detail: "Pièces et main-d'oeuvre",
        price: "40 €",
      },
      {
        label: "Disque de frein, grande trottinette",
        detail: "Pièces et main-d'oeuvre",
        price: "50 €",
      },
    ],
  },
  {
    title: "Électricité & moteur",
    rows: [
      { label: "Diagnostic petite trottinette", detail: "Recherche de panne", price: "30 €" },
      { label: "Diagnostic grande trottinette", detail: "Recherche de panne", price: "40 €" },
      {
        label: "Changement moteur",
        detail: "Main-d'oeuvre hors pièces",
        price: "50 €",
      },
      {
        label: "Changement contrôleur",
        detail: "Main-d'oeuvre hors pièces",
        price: "50 €",
      },
      {
        label: "Changement batterie",
        detail: "Main-d'oeuvre hors pièces",
        price: "50 €",
      },
      {
        label: "Changement accélérateur et display",
        detail: "Main-d'oeuvre hors pièces",
        price: "35 €",
      },
      {
        label: "Accélérateur petite trottinette",
        detail: "Pièces et main-d'oeuvre",
        price: "60 €",
      },
      {
        label: "Accélérateur grande trottinette",
        detail: "Prix variable selon la pièce",
        price: "Sur devis",
      },
      { label: "Display mini moteur", detail: "Pièces et main-d'oeuvre", price: "90 €" },
      { label: "Écran Xiaomi/Ninebot", detail: "Pièces et main-d'oeuvre", price: "60 €" },
    ],
  },
  {
    title: "Autres services",
    rows: [
      {
        label: "Garde-boue petit modèle Xiaomi M365",
        detail: "Pièces et main-d'oeuvre",
        price: "50 €",
      },
      {
        label: "Garde-boue grand modèle Urban Glide",
        detail: "Pièces et main-d'oeuvre",
        price: "60 à 80 €",
      },
      {
        label: "Potence complète Xiaomi",
        detail: "À voir selon la pièce",
        price: "100 €",
      },
      { label: "Diagnostic batterie", detail: "Contrôle complet", price: "60 €" },
      { label: "Réparation batterie", detail: "Après diagnostic", price: "Sur devis" },
    ],
  },
];

const checks = [
  "Devis annoncé avant intervention",
  "Pièces d'origine ou équivalentes",
  "Test de freinage et roulage avant remise",
  "Garantie pièces et main-d'oeuvre",
];

const process = [
  {
    title: "Vous passez à l'atelier",
    text: "Pour les réparations courantes, vous pouvez venir sans rendez-vous selon disponibilité.",
  },
  {
    title: "On identifie la panne",
    text: "Le technicien vérifie les symptômes, la compatibilité des pièces et le niveau d'urgence.",
  },
  {
    title: "Vous validez le prix",
    text: "Aucune réparation n'est lancée sans accord clair sur l'intervention.",
  },
  {
    title: "Vous repartez serein",
    text: "La trottinette est contrôlée avant restitution pour éviter les mauvaises surprises.",
  },
];

export default function ReparationPage() {
  return (
    <article className={styles.page}>
      <section className={styles.hero} aria-labelledby="repair-title">
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <p>Réparation trottinette</p>
            <h1 id="repair-title">
              Votre spécialiste trottinette électrique à Saint-Maur
            </h1>
            <span>
              Pneus, freins, batterie, moteur, électronique : GreenEco prend en
              charge les pannes du quotidien avec un devis clair.
            </span>
            <div className={styles.heroActions}>
              <Link href="#tariff-title">Voir les tarifs</Link>
              <a href={business.phoneHref}>
                <PhoneCall size={18} strokeWidth={2.4} />
                Appeler l&apos;atelier
              </a>
            </div>
          </div>
          <div className={styles.heroImage}>
            <Image
              src="/atelier-greeneco.png"
              alt="Atelier GreenEco de réparation de trottinettes électriques"
              width={1672}
              height={941}
              priority
              sizes="(max-width: 900px) 100vw, 42vw"
            />
          </div>
        </div>
      </section>

      <section className={styles.notice} aria-label="Informations de prise en charge">
        <div>
          <Wrench size={28} strokeWidth={2.2} />
          <div>
            <h2>Réparations courantes sans rendez-vous</h2>
            <p>
              Pour une crevaison, un frein, un accessoire ou une petite
              intervention, passez directement en boutique selon disponibilité.
            </p>
          </div>
        </div>
        <div>
          <CalendarCheck size={28} strokeWidth={2.2} />
          <div>
            <h2>Diagnostic sur rendez-vous</h2>
            <p>
              Pour une panne inconnue, batterie, moteur ou électronique, prenez
              rendez-vous ou appelez avant de venir.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.repairsSection} aria-labelledby="repairs-title">
        <div className={styles.sectionIntro}>
          <p>Interventions concrètes</p>
          <h2 id="repairs-title">On répare ce qui bloque vraiment votre trajet.</h2>
        </div>

        <div className={styles.repairsGrid}>
          {repairs.map((repair) => {
            const Icon = repair.icon;

            return (
              <article className={styles.repairCard} key={repair.title}>
                <span>
                  <Icon size={30} strokeWidth={2.2} />
                </span>
                <h3>{repair.title}</h3>
                <p>{repair.text}</p>
                <strong>{repair.price}</strong>
              </article>
            );
          })}
        </div>
      </section>

      <section className={styles.tariffSection} aria-labelledby="tariff-title">
        <div className={styles.sectionIntro}>
          <p>Tarifs prestations fixes</p>
          <h2 id="tariff-title">Les bons prix, clairs avant intervention.</h2>
        </div>

        <div className={styles.tariffIntro}>
          <strong>Sans rendez-vous pour les réparations courantes</strong>
          <span>
            Pneus, freins et petites interventions sont pris en charge en
            boutique selon disponibilité. Pour un diagnostic ou une recherche de
            panne, réservez un créneau ou appelez l&apos;atelier avant de venir.
          </span>
        </div>

        <div className={styles.modelGrid} aria-label="Catégories de trottinettes">
          {scooterModels.map((model) => (
            <article key={model.title}>
              <h3>{model.title}</h3>
              <p>{model.models}</p>
            </article>
          ))}
        </div>

        <div className={styles.tariffGrid}>
          {tariffGroups.map((group) => (
            <article className={styles.tariffGroup} key={group.title}>
              <h3>{group.title}</h3>
              <div className={styles.tariffRows}>
                {group.rows.map((row) => (
                  <div className={styles.tariffRow} key={`${group.title}-${row.label}`}>
                    <div>
                      <strong>{row.label}</strong>
                      <span>{row.detail}</span>
                    </div>
                    <b>{row.price}</b>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className={styles.tariffFootnote}>
          Les prix indiqués reprennent les prestations fixes. Les pièces non
          listées, modèles particuliers ou pannes complexes sont confirmés par
          devis avant réparation.
        </p>
      </section>

      <section className={styles.detailSection}>
        <div className={styles.detailImage}>
          <Image
            src="/methode-greeneco.png"
            alt="Réparation de trottinette électrique chez GreenEco"
            width={1536}
            height={1024}
            sizes="(max-width: 900px) 100vw, 46vw"
          />
        </div>

        <div className={styles.detailContent}>
          <p className={styles.kicker}>Pourquoi venir chez GreenEco ?</p>
          <h2>Un atelier local, des explications simples, un vrai suivi.</h2>
          <p>
            On ne remplace pas une pièce au hasard. Chaque intervention commence
            par un contrôle visuel et fonctionnel pour comprendre la panne, vous
            expliquer la solution et éviter les dépenses inutiles.
          </p>

          <ul className={styles.checkList}>
            {checks.map((check) => (
              <li key={check}>
                <CheckCircle2 size={22} strokeWidth={2.2} />
                {check}
              </li>
            ))}
          </ul>

          <div className={styles.stats}>
            <div>
              <strong>30 à 90 min</strong>
              <span>pour beaucoup d&apos;interventions courantes</span>
            </div>
            <div>
              <strong>Saint-Maur</strong>
              <span>atelier proche des trajets du Val-de-Marne</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.processSection} aria-labelledby="process-title">
        <div className={styles.sectionIntro}>
          <p>Prise en charge</p>
          <h2 id="process-title">Comment ça se passe à l&apos;atelier ?</h2>
        </div>

        <div className={styles.processGrid}>
          {process.map((step, index) => (
            <article className={styles.processItem} key={step.title}>
              <span>{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div>
          <p>Besoin d&apos;une réparation ?</p>
          <h2>Passez à l&apos;atelier ou réservez un diagnostic.</h2>
        </div>
        <div className={styles.ctaActions}>
          <Link href="/services">
            <ShieldCheck size={18} strokeWidth={2.4} />
            Voir nos prestations
          </Link>
          <Link href="/rendez-vous">
            <Clock size={18} strokeWidth={2.4} />
            Prendre rendez-vous
          </Link>
        </div>
      </section>
    </article>
  );
}
