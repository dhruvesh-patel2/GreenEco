"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, Phone, Search } from "lucide-react";
import { usePathname } from "next/navigation";
import { business } from "@/lib/site";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Services" },
  { href: "/reparation", label: "Réparation" },
  { href: "/entretien", label: "Entretien" },
  { href: "/notre-atelier", label: "Notre atelier" },
  { href: "/a-propos", label: "A propos" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topContainer}>
          <div className={styles.smallLogo}>
            <Image
              src="/logo-greeneco-icon.svg"
              alt="GreenEco - réparation de trottinettes à Saint-Maur"
              width={60}
              height={60}
              priority
            />
          </div>

          <p>Une mobilité plus verte, un avenir meilleur</p>
        </div>
      </div>

      <div className={styles.mainBar}>
        <div className={styles.mainContainer}>
          <Link href="/" className={styles.logo}>
            <Image
              src="/logo-greeneco.svg"
              alt="GreenEco"
              width={220}
              height={56}
              priority
            />
          </Link>

          <nav className={styles.nav} aria-label="Navigation principale">
            {navLinks.map((link) => (
              <Link
                aria-current={isActive(link.href) ? "page" : undefined}
                className={isActive(link.href) ? styles.activeLink : ""}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <button className={styles.iconButton} aria-label="Rechercher">
              <Search size={26} strokeWidth={2} />
            </button>

            <div className={styles.phone}>
              <Phone size={25} fill="currentColor" />

              <div className={styles.phoneText}>
                <a href={business.phoneHref}>{business.phone}</a>
                <span>{business.hoursShort}</span>
              </div>
            </div>

            <Link
              href="/rendez-vous"
              className={`${styles.appointment} ${
                isActive("/rendez-vous") ? styles.activeAppointment : ""
              }`}
            >
              PRENDRE RENDEZ-VOUS
              <span>→</span>
            </Link>

            <button className={styles.menuButton} aria-label="Ouvrir le menu">
              <Menu size={28} strokeWidth={2.2} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
