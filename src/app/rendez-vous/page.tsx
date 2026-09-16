import type { Metadata } from "next";
import Link from "next/link";
import {
  ChevronRight,
  Headphones,
  Info,
  MapPin,
  Phone,
  RefreshCw,
  Scooter,
  ShieldCheck,
  Truck,
} from "lucide-react";
import { business } from "@/lib/site";
import ExternalMap from "@/components/CookieConsent/ExternalMap";
import styles from "./rendezVous.module.css";

export const metadata: Metadata = {
  title: "Prendre rendez-vous réparation trottinette Saint-Maur",
  description:
    "Réservez un créneau chez GreenEco à Saint-Maur-des-Fossés pour un diagnostic, un pneu, un frein, une batterie ou l'entretien de votre trottinette électrique.",
  alternates: { canonical: "/rendez-vous" },
};

const steps = ["Informations", "Créneau", "Confirmation"];

const popularServices = [
  "Diagnostic complet",
  "Changement de pneu",
  "Réparation de frein",
  "Problème de batterie",
  "Entretien général",
];

const trustItems = [
  {
    icon: Truck,
    title: "Livraison rapide",
    text: "2 à 4 jours ouvrés",
  },
  {
    icon: ShieldCheck,
    title: "Paiement sécurisé",
    text: "Carte bancaire, PayPal",
  },
  {
    icon: RefreshCw,
    title: "Retours faciles",
    text: "Sous 14 jours",
  },
  {
    icon: Headphones,
    title: "Une question ?",
    text: business.hoursDisplay,
  },
];

export default function RendezVousPage() {
  return (
    <article className={styles.page}>
      <section className={styles.hero} aria-labelledby="appointment-hero-title">
        <div className={styles.heroContent}>
          <p>Rendez-vous GreenEco</p>
          <h1 id="appointment-hero-title">Réserver un diagnostic à Saint-Maur</h1>
          <span>
            Pour une panne inconnue, une batterie ou un souci électronique,
            prenez un créneau ou appelez l&apos;atelier avant de venir.
          </span>
        </div>
      </section>

      <section className={styles.bookingSection} aria-labelledby="booking-title">
        <div className={styles.bookingGrid}>
          <form className={styles.formCard}>
            <div className={styles.formHeader}>
              <h1 id="booking-title">Réserver un créneau</h1>
              <p>
                Remplissez le formulaire ci-dessous pour planifier votre
                rendez-vous.
              </p>
            </div>

            <ol className={styles.steps} aria-label="Étapes de réservation">
              {steps.map((step, index) => (
                <li className={index === 0 ? styles.activeStep : ""} key={step}>
                  <span>{index + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>

            <div className={styles.fieldGrid}>
              <label>
                <span>Nom *</span>
                <input type="text" name="lastName" placeholder="Votre nom" required />
              </label>
              <label>
                <span>Prénom *</span>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Votre prénom"
                  required
                />
              </label>
            </div>

            <label className={styles.fullField}>
              <span>Téléphone *</span>
              <input type="tel" name="phone" placeholder="06 12 34 56 78" required />
            </label>

            <label className={styles.fullField}>
              <span>E-mail *</span>
              <input type="email" name="email" placeholder="votre@email.com" required />
            </label>

            <label className={styles.fullField}>
              <span>Type de prestation *</span>
              <select name="service" defaultValue="" required>
                <option value="" disabled>
                  Choisissez une prestation
                </option>
                <option>Diagnostic complet</option>
                <option>Changement de pneu</option>
                <option>Réparation de frein</option>
                <option>Problème de batterie</option>
                <option>Électronique ou moteur</option>
                <option>Entretien général</option>
              </select>
            </label>

            <label className={styles.fullField}>
              <span>Informations complémentaires</span>
              <textarea
                name="message"
                maxLength={500}
                placeholder="Décrivez rapidement le problème (facultatif)"
              />
              <small>0/500</small>
            </label>

            <button className={styles.submitButton} type="submit">
              Continuer <ChevronRight size={18} strokeWidth={2.5} />
            </button>
          </form>

          <aside className={styles.sideCard}>
            <div className={styles.questionHeader}>
              <span>
                <Scooter size={34} strokeWidth={1.8} />
              </span>
              <div>
                <h2>Une question avant de réserver ?</h2>
                <p>Notre équipe est là pour vous conseiller.</p>
              </div>
            </div>

            <a className={styles.phoneLine} href={business.phoneHref}>
              <Phone size={22} strokeWidth={2.4} />
              <span>
                {business.phone}
                <br />
                {business.hoursDisplay}
              </span>
            </a>

            <div className={styles.urgentBox}>
              <Info size={24} strokeWidth={2.2} />
              <div>
                <h3>En cas d&apos;urgence</h3>
                <p>
                  Vous pouvez également passer directement à l&apos;atelier selon
                  nos disponibilités.
                </p>
              </div>
            </div>

            <h2 className={styles.popularTitle}>
              Nos prestations les plus demandées
            </h2>
            <div className={styles.popularList}>
              {popularServices.map((service) => (
                <Link href="/services" key={service}>
                  {service}
                  <ChevronRight size={18} strokeWidth={2.4} />
                </Link>
              ))}
            </div>
          </aside>
        </div>

        <div className={styles.locationGrid}>
          <section className={styles.locationCard} aria-labelledby="atelier-title">
            <p className={styles.eyebrow}>
              <MapPin size={24} fill="currentColor" strokeWidth={2.2} />
              Notre atelier
            </p>
            <h2 id="atelier-title">À Saint-Maur-des-Fossés</h2>
            <address>
              {business.addressStreet}
              <br />
              {business.postalCode} {business.city}
            </address>
            <a href={business.mapsUrl}>
              Voir sur Google Maps <ChevronRight size={18} strokeWidth={2.4} />
            </a>
            <p>
              {business.rating} sur Google, {business.reviewCount}. Plus code :
              {" "}
              {business.plusCode}.
            </p>
          </section>

          <ExternalMap
            className={styles.mapFrame}
            src={business.mapsEmbedUrl}
            title="Carte Google Maps de GreenEco à Saint-Maur-des-Fossés"
          />

          <div className={styles.imagePreview} aria-label="Aperçu atelier" />
        </div>

        <div className={styles.trustStrip}>
          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div className={styles.trustItem} key={item.title}>
                <Icon size={36} strokeWidth={2.2} />
                <h2>{item.title}</h2>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </section>
    </article>
  );
}
