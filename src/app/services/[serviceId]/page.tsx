"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  CalendarCheck,
  ChevronLeft,
  Clock,
  Euro,
  PhoneCall,
  ShieldCheck,
  Truck,
} from "lucide-react";
import {
  getAvailability,
  serviceCatalog,
} from "@/app/services/ServicesCatalog";
import { business } from "@/lib/site";
import styles from "./serviceDetail.module.css";

export default function ServiceDetailPage() {
  const params = useParams<{ serviceId: string }>();
  const service = serviceCatalog.find((item) => item.id === params.serviceId);

  if (!service) {
    return (
      <article className={styles.page}>
        <section className={styles.notFound}>
          <p>Service introuvable</p>
          <h1>Cette prestation n&apos;existe pas ou a été déplacée.</h1>
          <Link href="/services">
            <ChevronLeft size={18} strokeWidth={2.4} />
            Retour aux services
          </Link>
        </section>
      </article>
    );
  }

  const Icon = service.icon;
  const availability = getAvailability(service.id);

  return (
    <article className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <Link href="/services" className={styles.backLink}>
            <ChevronLeft size={18} strokeWidth={2.4} />
            Tous les services
          </Link>
          <p>{service.category}</p>
          <h1>{service.title}</h1>
          <span>{service.short}</span>
          <div className={styles.heroBadges}>
            <strong>
              <Euro size={18} strokeWidth={2.4} />
              {service.price}
            </strong>
            <strong>
              <Clock size={18} strokeWidth={2.4} />
              {service.duration}
            </strong>
          </div>
        </div>

        <div className={styles.heroImage}>
          <Image
            src={service.image}
            alt={`${service.title} chez GreenEco`}
            width={960}
            height={560}
            priority
            sizes="(max-width: 900px) 100vw, 42vw"
          />
        </div>
      </section>

      <section className={styles.content}>
        <article className={styles.detailCard}>
          <div className={styles.iconTitle}>
            <span>
              <Icon size={30} strokeWidth={2.2} />
            </span>
            <div>
              <p>Prestation GreenEco</p>
              <h2>Détails et prix</h2>
            </div>
          </div>

          <p className={styles.description}>{service.description}</p>

          <div
            className={`${styles.availability} ${
              availability.appointmentRequired ? styles.appointmentRequired : ""
            }`}
          >
            {availability.appointmentRequired ? (
              <CalendarCheck size={22} strokeWidth={2.4} />
            ) : (
              <Truck size={22} strokeWidth={2.4} />
            )}
            <div>
              <strong>{availability.label}</strong>
              <p>{availability.text}</p>
            </div>
          </div>

          <ul className={styles.detailsList}>
            {service.details.map((detail) => (
              <li key={detail}>
                <ShieldCheck size={19} strokeWidth={2.3} />
                {detail}
              </li>
            ))}
          </ul>
        </article>

        <aside className={styles.priceCard}>
          <h2>Tarifs</h2>
          <div className={styles.priceRows}>
            {service.prices.map((price) => (
              <div key={price.label}>
                <span>{price.label}</span>
                <strong>{price.value}</strong>
              </div>
            ))}
          </div>

          <div className={styles.actions}>
            <Link href="/rendez-vous">Prendre rendez-vous</Link>
            <a href={business.phoneHref}>
              <PhoneCall size={17} strokeWidth={2.4} />
              Appeler {business.phone}
            </a>
          </div>

          <p>
            Les modèles particuliers, pièces rares ou pannes complexes sont
            confirmés par devis avant intervention.
          </p>
        </aside>
      </section>
    </article>
  );
}
