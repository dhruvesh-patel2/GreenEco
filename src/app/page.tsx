import type { Metadata } from "next";
import Image, { getImageProps } from "next/image";
import Link from "next/link";
import {
  BatteryCharging,
  CircleCheck,
  CircleGauge,
  Cog,
  FileText,
  Leaf,
  MapPin,
  MessageCircle,
  Search,
  ShieldCheck,
  Star,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import { business } from "@/lib/site";
import { getGoogleReviews } from "@/lib/googleReviews";
import ReviewsCarousel from "@/components/Reviews/ReviewsCarousel";
import styles from "./page.module.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || business.website;

export const metadata: Metadata = {
  title: "Réparation trottinette électrique à Saint-Maur",
  description:
    "GreenEco est l'atelier de réparation de trottinettes électriques à Saint-Maur : crevaison, pneu, frein, batterie, diagnostic et entretien rapide.",
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${siteUrl}/#greeneco`,
  name: "GreenEco",
  url: siteUrl,
  logo: `${siteUrl}/logo-greeneco.svg`,
  image: `${siteUrl}/og-greeneco.svg`,
  telephone: business.phone,
  description:
    "Atelier de réparation, diagnostic et entretien de trottinettes électriques à Saint-Maur.",
  areaServed: [
    "Saint-Maur-des-Fossés",
    "Saint-Maur",
    "La Varenne-Saint-Hilaire",
    "Joinville-le-Pont",
    "Créteil",
    "Champigny-sur-Marne",
  ],
  address: {
    "@type": "PostalAddress",
    streetAddress: business.addressStreet,
    postalCode: business.postalCode,
    addressLocality: "Saint-Maur-des-Fossés",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.6",
    reviewCount: "107",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "11:00",
      closes: "19:00",
    },
  ],
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Réparation de trottinette électrique",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Entretien et diagnostic de trottinette électrique",
      },
    },
  ],
};

const services = [
  {
    icon: Search,
    image: "/atelier-greeneco.png",
    href: "/services/diagnostic",
    title: "Diagnostic",
    text: "Un diagnostic précis et gratuit avant toute intervention.",
  },
  {
    icon: Wrench,
    image: "/methode-greeneco.png",
    href: "/services/pneus-crevaisons",
    title: "Réparation",
    text: "Remplacement de pièces, réparation électronique, soudure, etc.",
  },
  {
    icon: Cog,
    image: "/atelier-greeneco.png",
    href: "/services/entretien-complet",
    title: "Entretien",
    text: "Révision complète pour plus de sécurité et de performance.",
  },
  {
    icon: CircleGauge,
    image: "/baner1.png",
    href: "/services/pneus-crevaisons",
    title: "Pneus & roues",
    text: "Changement de pneus, chambres à air et roues pleines.",
  },
  {
    icon: BatteryCharging,
    image: "/methode-greeneco.png",
    href: "/services/batterie",
    title: "Batterie",
    text: "Diagnostic et remplacement de batterie toutes marques.",
  },
];

const advantages = [
  {
    icon: Zap,
    title: "Réparation rapide",
    text: "24 à 48h en moyenne",
  },
  {
    icon: ShieldCheck,
    title: "Garantie sur toutes nos interventions",
    text: "Pièces et main d'oeuvre",
  },
  {
    icon: Leaf,
    title: "Pièces d'origine ou équivalentes",
    text: "Qualité et durabilité assurées",
  },
  {
    icon: Users,
    title: "Des clients satisfaits",
    text: `${business.rating} sur Google`,
    rating: true,
  },
];

const atelierPoints = [
  {
    icon: Users,
    title: "Des techniciens qualifiés",
    text: "Une équipe expérimentée et à l'écoute.",
  },
  {
    icon: Cog,
    title: "Des pièces fiables",
    text: "Pièces d'origine ou équivalentes, garanties.",
  },
  {
    icon: MessageCircle,
    title: "Un accompagnement personnalisé",
    text: "Des conseils adaptés à vos besoins.",
  },
];

const methodSteps = [
  {
    icon: Search,
    title: "Diagnostic",
    text: "Nous identifions la panne en quelques minutes.",
    tag: "Gratuit et sans engagement",
  },
  {
    icon: FileText,
    title: "Devis",
    text: "Un devis clair et détaillé avant toute intervention.",
    tag: "Transparent et rapide",
  },
  {
    icon: Wrench,
    title: "Réparation",
    text: "Nos techniciens s'occupent de tout dans notre atelier.",
    tag: "Avec des pièces de qualité",
  },
  {
    icon: CircleCheck,
    title: "Retour",
    text: "Votre trottinette est prête à rouler, avec garantie.",
    tag: "Testée avant remise",
  },
];

const whyChoosePoints = [
  {
    icon: Leaf,
    title: "Écoresponsable",
    text: "Moins de déchets, plus de mobilité.",
  },
  {
    icon: ShieldCheck,
    title: "Qualité garantie",
    text: "Des pièces testées et fiables.",
  },
  {
    icon: Users,
    title: "Service humain",
    text: "À l'écoute de vos besoins.",
  },
  {
    icon: MapPin,
    title: "Expertise locale",
    text: "À Saint-Maur-des-Fossés et ses alentours.",
  },
];

const scooterBrands = [
  { name: "Xiaomi", className: "xiaomi" },
  { name: "Ninebot", className: "ninebot" },
  { name: "E-TWOW", className: "etwow" },
  { name: "UrbanGlide", className: "urbanGlide" },
  { name: "DUALTRON", className: "dualtron" },
  { name: "VSETT", className: "vsett" },
];

export default async function Home() {
  const googleReviews = await getGoogleReviews();
  const heroImageCommon = {
    alt: "",
    sizes: "100vw",
    fetchPriority: "high" as const,
    loading: "eager" as const,
  };
  const {
    props: { srcSet: heroDesktopSrcSet },
  } = getImageProps({
    ...heroImageCommon,
    src: "/baner1.png",
    width: 1440,
    height: 798,
    quality: 75,
  });
  const { props: heroMobileProps } = getImageProps({
    ...heroImageCommon,
    src: "/baner1-1.png",
    width: 1254,
    height: 1254,
    quality: 65,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <section className={styles.sectionOne} aria-labelledby="hero-title">
        <div className={styles.hero}>
          <picture className={styles.heroMedia}>
            <source media="(min-width: 901px)" srcSet={heroDesktopSrcSet} />
            <source media="(max-width: 900px)" srcSet="/baner1-mobile.webp" />
            <img
              {...heroMobileProps}
              alt=""
              className={styles.heroImage}
            />
          </picture>

          <div className={styles.heroContent}>
            <p className={styles.heroBadge}>Réparation- entretien-conseil</p>

            <div className={styles.heroTextPanel}>
              <h1 id="hero-title">
                Votre trottinette
                <br />
                en de <span>bonnes mains.</span>
              </h1>
              <p className={styles.lead}>
                Réparation rapide, pièces d’origine, techniciens spécialisés et
                un service transparent. Roulez plus loin, en toute sécurité.
              </p>
            </div>

            <div className={styles.heroActions}>
              <Link href="/rendez-vous" className={styles.primaryAction}>
                PRENDRE RENDEZ-VOUS →
              </Link>
              <Link href="/services" className={styles.secondaryAction}>
                VOIR NOS SERVICES →
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.brandStrip}>
          <div className={styles.brandInner}>
            <h2>Nous réparons toutes les grandes marques</h2>
            <div className={styles.brandGrid}>
              {scooterBrands.map((brand) => (
                <div className={styles.brandLogo} key={brand.name}>
                  <span
                    className={`${styles.brandWordmark} ${styles[brand.className]}`}
                  >
                    {brand.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={styles.services} aria-labelledby="services-title">
        <div className={styles.servicesHeader}>
          <div>
            <p className={styles.sectionLabel}>Nos services</p>
            <h2 id="services-title">
              Un service complet pour votre <span>mobilité.</span>
            </h2>
            <p className={styles.servicesLead}>
              De la simple révision à la réparation complexe, nous prenons soin
              de votre trottinette.
            </p>
          </div>

          <Link href="/services" className={styles.allServicesLink}>
            Voir tous nos services →
          </Link>
        </div>

        <div className={styles.serviceGrid}>
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article className={styles.serviceCard} key={service.title}>
                <Image
                  className={styles.serviceImage}
                  src={service.image}
                  alt={`${service.title} GreenEco`}
                  width={720}
                  height={420}
                  sizes="(max-width: 700px) calc(100vw - 36px), (max-width: 1100px) 50vw, 20vw"
                />

                <div className={styles.serviceBody}>
                  <span className={styles.serviceIcon}>
                    <Icon size={21} strokeWidth={2.5} />
                  </span>
                  <h3>{service.title}</h3>
                </div>
                <p>{service.text}</p>
                <Link href={service.href} className={styles.serviceLink}>
                  En savoir plus →
                </Link>
              </article>
            );
          })}
        </div>

        <div className={styles.advantages}>
          {advantages.map((advantage) => {
            const Icon = advantage.icon;

            return (
              <div className={styles.advantageItem} key={advantage.title}>
                <span className={styles.advantageIcon}>
                  <Icon size={31} strokeWidth={2.2} />
                </span>
                <h3>{advantage.title}</h3>
                {advantage.rating ? (
                  <div
                    className={styles.rating}
                    role="img"
                    aria-label={`Note ${business.rating} sur 5 sur Google`}
                  >
                    {Array.from({ length: 5 }, (_, index) => (
                      <Star key={index} size={18} fill="currentColor" />
                    ))}
                  </div>
                ) : null}
                <p>{advantage.text}</p>
              </div>
            );
          })}
        </div>
      </section>

      <section className={styles.workshopSection} aria-labelledby="workshop-title">
        <div className={styles.workshopMain}>
          <div className={styles.workshopContent}>
            <p className={styles.sectionLabel}>L&apos;atelier GreenEco</p>
            <h2 id="workshop-title">
              Une équipe passionnée
              <br />
              <span>à votre service.</span>
            </h2>
            <p className={styles.workshopLead}>
              Chez GreenEco, chaque trottinette est prise en charge avec soin
              dans notre atelier à Saint-Maur-des-Fossés. Nous mettons notre
              savoir-faire et notre expérience au service de votre mobilité.
            </p>

            <div className={styles.workshopList}>
              {atelierPoints.map((point) => {
                const Icon = point.icon;

                return (
                  <div className={styles.workshopPoint} key={point.title}>
                    <span>
                      <Icon size={28} strokeWidth={2} />
                    </span>
                    <div>
                      <h3>{point.title}</h3>
                      <p>{point.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className={styles.workshopActions}>
              <a href="/notre-atelier" className={styles.workshopPrimary}>
                Découvrir notre atelier <span>→</span>
              </a>
              <a href="/rendez-vous" className={styles.workshopSecondary}>
                Prendre rendez-vous
              </a>
            </div>
          </div>

          <div className={styles.workshopImageWrap}>
            <Image
              className={styles.workshopImage}
              src="/atelier-greeneco.png"
              alt="Atelier GreenEco de réparation de trottinettes électriques à Saint-Maur"
              width={1672}
              height={941}
              sizes="(max-width: 900px) calc(100vw - 36px), 50vw"
            />
          </div>
        </div>

        <div className={styles.workshopQuote}>
          <blockquote>
            « Notre atelier, c&apos;est avant tout une histoire de passion et de
            confiance. »
          </blockquote>
          <p>L&apos;équipe GreenEco</p>
          <div className={styles.workshopClaim}>
            <span />
            <strong>
              Réparer aujourd&apos;hui,
              <br />
              rouler demain
            </strong>
          </div>
        </div>
      </section>

      <section className={styles.methodSection} aria-labelledby="method-title">
        <div className={styles.methodIntro}>
          <p className={styles.methodLabel}>Notre méthode</p>
          <h2 id="method-title">Une prise en charge simple et efficace.</h2>
          <p>De la panne au retour sur la route, on s&apos;occupe de tout.</p>
        </div>

        <div className={styles.methodSteps}>
          {methodSteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div className={styles.methodStep} key={step.title}>
                <span className={styles.stepNumber}>{index + 1}</span>
                <span className={styles.stepIcon}>
                  <Icon size={45} strokeWidth={2.2} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
                <span className={styles.stepTag}>{step.tag}</span>
              </div>
            );
          })}
        </div>

        <div className={styles.expertiseBlock}>
          <div className={styles.expertiseImageWrap}>
            <Image
              className={styles.expertiseImage}
              src="/methode-greeneco.png"
              alt="Réparation durable d'une trottinette électrique dans l'atelier GreenEco"
              width={1536}
              height={1024}
              sizes="(max-width: 900px) calc(100vw - 36px), 52vw"
            />
            <div className={styles.sustainableCard}>
              <span />
              <div>
                <h3>
                  Une mobilité
                  <br />
                  plus durable
                </h3>
                <p>
                  Réparer aujourd&apos;hui,
                  <br />
                  rouler demain.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.expertiseContent}>
            <p className={styles.sectionLabel}>Pourquoi choisir GreenEco ?</p>
            <h2>
              Plus qu&apos;un atelier,
              <br />
              une vraie expertise.
            </h2>
            <p className={styles.expertiseLead}>
              Nous prolongeons la durée de vie de votre trottinette grâce à des
              réparations de qualité et des conseils adaptés. Choisir GreenEco,
              c&apos;est faire confiance à des passionnés qui partagent vos
              valeurs.
            </p>

            <div className={styles.reasonGrid}>
              {whyChoosePoints.map((reason) => {
                const Icon = reason.icon;

                return (
                  <div className={styles.reasonItem} key={reason.title}>
                    <span>
                      <Icon size={36} strokeWidth={2} />
                    </span>
                    <div>
                      <h3>{reason.title}</h3>
                      <p>{reason.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <a href="/a-propos" className={styles.expertiseLink}>
              En savoir plus sur notre démarche →
            </a>
          </div>
        </div>
      </section>

      <section className={styles.reviewsSection} aria-labelledby="reviews-title">
        <div className={styles.reviewsIntro}>
          <p className={styles.methodLabel}>Avis clients</p>
          <h2 id="reviews-title">Ils nous font confiance.</h2>
          <p>
            Des centaines d&apos;utilisateurs nous ont déjà confié leur
            trottinette. Découvrez leurs retours d&apos;expérience.
          </p>
        </div>

        <ReviewsCarousel data={googleReviews} />
      </section>

    </>
  );
}
