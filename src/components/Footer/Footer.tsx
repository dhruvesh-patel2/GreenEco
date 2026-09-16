import Image from "next/image";
import Link from "next/link";
import { Clock, Globe, Leaf, LockKeyhole, MapPin, Phone } from "lucide-react";
import { business } from "@/lib/site";
import CookieSettingsButton from "@/components/CookieConsent/CookieSettingsButton";
import styles from "./Footer.module.css";

const footerLinks = [
  { href: "/", label: "Accueil" },
  { href: "/notre-atelier", label: "L'atelier GreenEco" },
  { href: "/services", label: "Services & réparations" },
  { href: "/reparation", label: "Réparation" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/politique-de-confidentialite", label: "Politique de confidentialité" },
  { href: "/mentions-legales", label: "Mentions légales" },
  { href: "/politique-cookies", label: "Cookies" },
  { href: "/conditions-generales", label: "CGV" },
];

const socialLinks = ["ig", "f", "t", "yt", "in"];

const openingHours = [
  "Lundi : 11h00 - 19h00",
  "Mardi : 11h00 - 19h00",
  "Mercredi : 11h00 - 19h00",
  "Jeudi : 11h00 - 19h00",
  "Vendredi : 11h00 - 19h00",
  "Samedi : 11h00 - 19h00",
  "Dimanche : Fermé",
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerMain}>
        <div className={styles.footerBrand}>
          <Image
            src="/logo-greeneco.svg"
            alt="GreenEco"
            width={220}
            height={56}
            className={styles.footerLogo}
          />
          <p>
            Votre atelier de mobilité durable. Entretien, réparation et conseils
            pour une mobilité plus verte, plus simple, plus libre.
          </p>
          <div className={styles.socialLinks} aria-label="Réseaux sociaux">
            {socialLinks.map((social) => (
              <a href="#" key={social} aria-label={`GreenEco ${social}`}>
                {social}
              </a>
            ))}
          </div>
        </div>

        <nav className={styles.footerColumn} aria-label="Liens rapides">
          <h2>Liens rapides</h2>
          {footerLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className={styles.footerColumn}>
          <h2>Nos coordonnées</h2>
          <p className={styles.footerContactLine}>
            <MapPin size={22} strokeWidth={2.2} />
            <span>
              {business.addressStreet},
              <br />
              {business.postalCode} {business.city}
            </span>
          </p>
          <p className={styles.footerContactLine}>
            <Phone size={21} strokeWidth={2.2} />
            <a href={business.phoneHref}>{business.phone}</a>
          </p>
          <p className={styles.footerContactLine}>
            <Globe size={21} strokeWidth={2.2} />
            <a href={business.website}>{business.websiteLabel}</a>
          </p>
        </div>

        <div className={styles.footerColumn}>
          <h2>Horaires</h2>
          <div className={styles.hoursList}>
            <Clock size={19} strokeWidth={2} aria-hidden="true" />
            <div>
              {openingHours.map((hour) => (
                <p key={hour}>{hour}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p>© 2026 GreenEco. Tous droits réservés.</p>
        <div className={styles.legalLinks}>
          {legalLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
          <CookieSettingsButton className={styles.cookieButton} />
          <Link className={styles.adminLink} href="/admin">
            <LockKeyhole size={14} strokeWidth={2.2} />
            Administrateur
          </Link>
        </div>
        <div className={styles.footerSlogan}>
          <Leaf size={34} strokeWidth={2.2} />
          <span>
            Une mobilité plus propre
            <br />
            pour un avenir meilleur.
          </span>
        </div>
      </div>
    </footer>
  );
}
