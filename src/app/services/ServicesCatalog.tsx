"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  AlertCircle,
  BatteryCharging,
  CalendarCheck,
  Cable,
  ChevronRight,
  CircleHelp,
  Clock,
  Cog,
  CreditCard,
  Euro,
  Gauge,
  Grid2X2,
  Lightbulb,
  PhoneCall,
  RotateCcw,
  Search,
  Settings,
  ShieldCheck,
  SlidersHorizontal,
  SprayCan,
  Truck,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useMemo, useState } from "react";
import { business } from "@/lib/site";
import styles from "./services.module.css";

type ServiceCategory =
  | "Entretien"
  | "Pneus"
  | "Freinage"
  | "Batterie"
  | "Électronique"
  | "Moteur"
  | "Accessoires";

export type Service = {
  id: string;
  title: string;
  category: ServiceCategory;
  icon: LucideIcon;
  image: string;
  price: string;
  duration: string;
  short: string;
  description: string;
  details: string[];
  prices: { label: string; value: string }[];
};

export function getAvailability(serviceId: string) {
  if (serviceId === "diagnostic" || serviceId.startsWith("diagnostic-")) {
    return {
      label: "Diagnostic sur rendez-vous",
      text: "Pour un diagnostic ou une recherche de panne, prenez rendez-vous ou appelez la boutique pour vérifier la disponibilité.",
      appointmentRequired: true,
    };
  }

  return {
    label: "Sans rendez-vous",
    text: "Vous pouvez passer directement en boutique. L'intervention dépend de l'affluence et des pièces disponibles.",
    appointmentRequired: false,
  };
}

const categories = [
  "Tous les services",
  "Entretien",
  "Pneus",
  "Freinage",
  "Batterie",
  "Électronique",
  "Moteur",
  "Accessoires",
] as const;

const services: Service[] = [
  {
    id: "diagnostic",
    title: "Diagnostic & recherche de panne",
    category: "Électronique",
    icon: Activity,
    image: "/atelier-greeneco.png",
    price: "À partir de 30 €",
    duration: "30 min",
    short: "Analyse complète de votre trottinette avec outils professionnels.",
    description:
      "Nous contrôlons les éléments mécaniques et électriques pour identifier rapidement l'origine de la panne avant toute réparation.",
    details: [
      "Contrôle batterie, moteur, contrôleur, accélérateur, display et connectiques.",
      "Vérification des symptômes avant démontage important.",
      "Devis clair avant intervention.",
    ],
    prices: [
      { label: "Diagnostic petite trottinette", value: "30 €" },
      { label: "Diagnostic grande trottinette", value: "40 €" },
      { label: "Diagnostic batterie", value: "60 €" },
    ],
  },
  {
    id: "pneus-crevaisons",
    title: "Pneus & crevaisons",
    category: "Pneus",
    icon: Gauge,
    image: "/methode-greeneco.png",
    price: "À partir de 35 €",
    duration: "30 à 60 min",
    short: "Changement de pneu, chambre à air, pneu tubeless ou plein.",
    description:
      "Nous réparons les crevaisons et remplaçons les pneus des petites et grandes trottinettes, avec contrôle de la roue avant remise.",
    details: [
      "Changement pneu et/ou chambre à air.",
      "Montage pneu plein selon dimension.",
      "Contrôle pression, valve, roue et remontage.",
    ],
    prices: [
      { label: "Main-d'oeuvre pneu/chambre à air petite trottinette", value: "35 €" },
      { label: "Main-d'oeuvre pneu/chambre à air grande trottinette", value: "40 €" },
      { label: "Chambre à air seule, pièce et main-d'oeuvre", value: "45 €" },
      { label: "Chambre à air + pneu 8 pouces", value: "80 €" },
      { label: "Chambre à air + pneu 10 pouces", value: "90 €" },
      { label: "Pneu plein roue 8 pouces", value: "60 €" },
      { label: "Pneu plein 10x2.125 pouces", value: "70 €" },
      { label: "Pneu plein 10x2.50 pouces", value: "80 €" },
      { label: "Pneu plein 10x2.70 pouces", value: "90 €" },
    ],
  },
  {
    id: "freinage",
    title: "Freinage",
    category: "Freinage",
    icon: SlidersHorizontal,
    image: "/baner1.png",
    price: "À partir de 20 €",
    duration: "30 à 60 min",
    short: "Plaquettes, disques, étriers, purge et réglage.",
    description:
      "Nous remettons votre freinage en état pour retrouver une trottinette stable, progressive et sécurisante.",
    details: [
      "Réglage et test du frein.",
      "Remplacement plaquettes, disque, levier ou étrier.",
      "Purge de frein hydraulique possible.",
    ],
    prices: [
      { label: "Réglage du frein", value: "20 €" },
      { label: "Purge de frein, 1 frein", value: "40 €" },
      { label: "Purge de frein, 2 freins", value: "60 €" },
      { label: "Levier de frein Xiaomi/Ninebot, pièces et main-d'oeuvre", value: "60 €" },
      { label: "Étrier de frein + plaquettes, pièces et main-d'oeuvre", value: "80 €" },
      { label: "Plaquettes de frein, pièces et main-d'oeuvre", value: "40 €" },
      { label: "Disque de frein petite trottinette", value: "40 €" },
      { label: "Disque de frein grande trottinette", value: "50 €" },
    ],
  },
  {
    id: "batterie",
    title: "Batterie",
    category: "Batterie",
    icon: BatteryCharging,
    image: "/atelier-greeneco.png",
    price: "À partir de 50 €",
    duration: "30 à 90 min",
    short: "Diagnostic, remplacement, problème de charge ou d'autonomie.",
    description:
      "Nous analysons l'autonomie, la charge, les connecteurs et les symptômes électriques liés à la batterie.",
    details: [
      "Contrôle du chargeur, port de charge et tension batterie.",
      "Remplacement batterie avec main-d'oeuvre hors pièce.",
      "Réparation batterie selon diagnostic.",
    ],
    prices: [
      { label: "Changement batterie, main-d'oeuvre hors pièce", value: "50 €" },
      { label: "Diagnostic batterie", value: "60 €" },
      { label: "Réparation batterie", value: "Sur devis" },
    ],
  },
  {
    id: "electronique",
    title: "Électronique",
    category: "Électronique",
    icon: Cable,
    image: "/methode-greeneco.png",
    price: "À partir de 35 €",
    duration: "30 à 90 min",
    short: "Contrôleur, afficheur, accélérateur, câblage, connectiques.",
    description:
      "Nous prenons en charge les pannes électroniques les plus fréquentes : écran, contrôleur, accélérateur et faisceaux.",
    details: [
      "Diagnostic des composants électriques.",
      "Remplacement de pièces électroniques selon modèle.",
      "Contrôle après réparation avant restitution.",
    ],
    prices: [
      { label: "Changement moteur, main-d'oeuvre hors pièce", value: "50 €" },
      { label: "Changement contrôleur, main-d'oeuvre hors pièce", value: "50 €" },
      { label: "Changement batterie, main-d'oeuvre hors pièce", value: "50 €" },
      { label: "Accélérateur et display, main-d'oeuvre hors pièce", value: "35 €" },
      { label: "Accélérateur petite trottinette, pièces et main-d'oeuvre", value: "60 €" },
      { label: "Accélérateur grande trottinette", value: "Selon la pièce" },
      { label: "Display mini moteur", value: "90 €" },
      { label: "Écran Xiaomi/Ninebot", value: "60 €" },
    ],
  },
  {
    id: "moteur",
    title: "Moteur",
    category: "Moteur",
    icon: Cog,
    image: "/baner1.png",
    price: "À partir de 50 €",
    duration: "1 à 2 h",
    short: "Diagnostic, réparation ou remplacement selon modèle.",
    description:
      "Nous vérifions le moteur, ses câbles et son comportement pour confirmer si une réparation ou un remplacement est nécessaire.",
    details: [
      "Contrôle moteur et connectiques.",
      "Main-d'oeuvre hors pièce possible.",
      "Compatibilité vérifiée selon modèle.",
    ],
    prices: [
      { label: "Changement moteur, main-d'oeuvre hors pièce", value: "50 €" },
      { label: "Diagnostic moteur", value: "30 à 40 €" },
      { label: "Remplacement complet", value: "Sur devis" },
    ],
  },
  {
    id: "entretien-complet",
    title: "Entretien complet",
    category: "Entretien",
    icon: Wrench,
    image: "/atelier-greeneco.png",
    price: "Sur devis",
    duration: "1 à 2 h",
    short: "Contrôle général, serrage, freins, pneus, direction et sécurité.",
    description:
      "Un contrôle complet pour rouler plus sereinement : nous inspectons les points d'usure et les éléments de sécurité.",
    details: [
      "Serrage général et contrôle visserie.",
      "Contrôle freins, pneus, éclairage, jeu dans la direction.",
      "Conseils d'entretien adaptés à votre modèle.",
    ],
    prices: [
      { label: "Contrôle général et serrage", value: "Sur devis" },
      { label: "Révision approfondie selon modèle", value: "Sur devis" },
    ],
  },
  {
    id: "suspensions-direction",
    title: "Suspensions & direction",
    category: "Entretien",
    icon: Settings,
    image: "/methode-greeneco.png",
    price: "Sur devis",
    duration: "30 à 60 min",
    short: "Jeu dans la direction, roulements, fourche, amortisseurs.",
    description:
      "Nous contrôlons les jeux, bruits et vibrations qui peuvent rendre la conduite moins stable ou moins confortable.",
    details: [
      "Diagnostic du jeu dans la potence ou la direction.",
      "Contrôle roulements, fourche et amortisseurs.",
      "Réglage ou devis si remplacement nécessaire.",
    ],
    prices: [
      { label: "Contrôle direction ou suspension", value: "Sur devis" },
      { label: "Changement potence complète Xiaomi", value: "100 €" },
      { label: "Réparation avec pièce spécifique", value: "Sur devis" },
    ],
  },
  {
    id: "eclairage",
    title: "Éclairage",
    category: "Électronique",
    icon: Lightbulb,
    image: "/baner1.png",
    price: "Sur devis",
    duration: "30 à 60 min",
    short: "Phare avant, feu arrière, clignotants et câblage.",
    description:
      "Nous réparons les problèmes d'éclairage pour améliorer votre visibilité et votre sécurité sur la route.",
    details: [
      "Contrôle alimentation et connectiques.",
      "Remplacement phare, feu arrière ou clignotant.",
      "Test de fonctionnement avant remise.",
    ],
    prices: [
      { label: "Diagnostic éclairage", value: "Sur devis" },
      { label: "Remplacement selon modèle", value: "Sur devis" },
    ],
  },
  {
    id: "accessoires-carrosserie",
    title: "Accessoires & carrosserie",
    category: "Accessoires",
    icon: Grid2X2,
    image: "/atelier-greeneco.png",
    price: "À partir de 50 €",
    duration: "15 à 45 min",
    short: "Poignées, béquille, garde-boue, antivol, support téléphone.",
    description:
      "Nous installons ou remplaçons les accessoires utiles au quotidien, avec vérification de la compatibilité.",
    details: [
      "Installation d'accessoires selon votre usage.",
      "Remplacement garde-boue et éléments de carrosserie.",
      "Conseil sur les pièces compatibles.",
    ],
    prices: [
      { label: "Garde-boue petit modèle Xiaomi M365", value: "50 €" },
      { label: "Garde-boue grand modèle Urban Glide", value: "60 à 80 €" },
      { label: "Potence complète Xiaomi", value: "100 €" },
      { label: "Autre accessoire selon modèle", value: "Sur devis" },
    ],
  },
  {
    id: "nettoyage",
    title: "Nettoyage",
    category: "Entretien",
    icon: SprayCan,
    image: "/methode-greeneco.png",
    price: "Sur devis",
    duration: "30 à 60 min",
    short: "Nettoyage complet de votre trottinette.",
    description:
      "Un nettoyage soigné permet de mieux repérer l'usure, préserver les composants et repartir avec une trottinette plus propre.",
    details: [
      "Nettoyage extérieur complet.",
      "Contrôle visuel des points sensibles.",
      "Conseils pour éviter l'usure prématurée.",
    ],
    prices: [
      { label: "Nettoyage standard", value: "Sur devis" },
      { label: "Nettoyage + contrôle rapide", value: "Sur devis" },
    ],
  },
];

function makeService({
  id,
  title,
  category,
  icon,
  image,
  price,
  duration,
  short,
  detail,
}: {
  id: string;
  title: string;
  category: ServiceCategory;
  icon: LucideIcon;
  image: string;
  price: string;
  duration: string;
  short: string;
  detail: string;
}): Service {
  return {
    id,
    title,
    category,
    icon,
    image,
    price,
    duration,
    short,
    description: `${short} ${detail}`,
    details: [
      detail,
      "Prix annoncé avant intervention.",
      "Contrôle rapide avant restitution.",
    ],
    prices: [{ label: title, value: price }],
  };
}

const specificServiceCards: Service[] = [
  makeService({
    id: "pneu-chambre-main-oeuvre-petite",
    title: "Pneu ou chambre à air petite trottinette",
    category: "Pneus",
    icon: Gauge,
    image: "/methode-greeneco.png",
    price: "35 €",
    duration: "30 à 60 min",
    short: "Changement pneu et/ou chambre à air sur petite trottinette.",
    detail: "Main-d'oeuvre hors pièces.",
  }),
  makeService({
    id: "pneu-chambre-main-oeuvre-grande",
    title: "Pneu ou chambre à air grande trottinette",
    category: "Pneus",
    icon: Gauge,
    image: "/methode-greeneco.png",
    price: "40 €",
    duration: "30 à 60 min",
    short: "Changement pneu et/ou chambre à air sur grande trottinette.",
    detail: "Main-d'oeuvre hors pièces.",
  }),
  makeService({
    id: "chambre-air-seule",
    title: "Changement chambre à air seule",
    category: "Pneus",
    icon: Gauge,
    image: "/methode-greeneco.png",
    price: "45 €",
    duration: "30 à 60 min",
    short: "Remplacement d'une chambre à air crevée.",
    detail: "Pièce et main-d'oeuvre incluses.",
  }),
  makeService({
    id: "chambre-air-pneu-8",
    title: "Chambre à air + pneu 8 pouces",
    category: "Pneus",
    icon: Gauge,
    image: "/methode-greeneco.png",
    price: "80 €",
    duration: "30 à 60 min",
    short: "Remplacement complet chambre à air et pneu 8 pouces.",
    detail: "Pour petite trottinette, pièce et main-d'oeuvre incluses.",
  }),
  makeService({
    id: "chambre-air-pneu-10",
    title: "Chambre à air + pneu 10 pouces",
    category: "Pneus",
    icon: Gauge,
    image: "/methode-greeneco.png",
    price: "90 €",
    duration: "30 à 60 min",
    short: "Remplacement complet chambre à air et pneu 10 pouces.",
    detail: "Pour grande trottinette, pièce et main-d'oeuvre incluses.",
  }),
  makeService({
    id: "pneu-plein-8",
    title: "Pneu plein 8 pouces",
    category: "Pneus",
    icon: Gauge,
    image: "/methode-greeneco.png",
    price: "60 €",
    duration: "30 à 60 min",
    short: "Montage d'un pneu plein 8 pouces.",
    detail: "Pièce et main-d'oeuvre incluses.",
  }),
  makeService({
    id: "pneu-plein-10-2125",
    title: "Pneu plein 10x2.125 pouces",
    category: "Pneus",
    icon: Gauge,
    image: "/methode-greeneco.png",
    price: "70 €",
    duration: "30 à 60 min",
    short: "Montage d'un pneu plein 10x2.125 pouces.",
    detail: "Pièce et main-d'oeuvre incluses.",
  }),
  makeService({
    id: "pneu-plein-10-250",
    title: "Pneu plein 10x2.50 pouces",
    category: "Pneus",
    icon: Gauge,
    image: "/methode-greeneco.png",
    price: "80 €",
    duration: "30 à 60 min",
    short: "Montage d'un pneu plein 10x2.50 pouces.",
    detail: "Pièce et main-d'oeuvre incluses.",
  }),
  makeService({
    id: "pneu-plein-10-270",
    title: "Pneu plein 10x2.70 pouces",
    category: "Pneus",
    icon: Gauge,
    image: "/methode-greeneco.png",
    price: "90 €",
    duration: "30 à 60 min",
    short: "Montage d'un pneu plein 10x2.70 pouces.",
    detail: "Pièce et main-d'oeuvre incluses.",
  }),
  makeService({
    id: "reglage-frein",
    title: "Réglage du frein",
    category: "Freinage",
    icon: SlidersHorizontal,
    image: "/baner1.png",
    price: "20 €",
    duration: "30 min",
    short: "Réglage du frein pour retrouver une réponse propre.",
    detail: "Contrôle et réglage du frein.",
  }),
  makeService({
    id: "purge-frein-1",
    title: "Purge de frein, 1 frein",
    category: "Freinage",
    icon: SlidersHorizontal,
    image: "/baner1.png",
    price: "40 €",
    duration: "30 à 60 min",
    short: "Purge hydraulique sur un frein.",
    detail: "Remise en pression du circuit hydraulique.",
  }),
  makeService({
    id: "purge-frein-2",
    title: "Purge de frein, 2 freins",
    category: "Freinage",
    icon: SlidersHorizontal,
    image: "/baner1.png",
    price: "60 €",
    duration: "30 à 60 min",
    short: "Purge hydraulique sur les deux freins.",
    detail: "Remise en pression des circuits hydrauliques.",
  }),
  makeService({
    id: "levier-frein-xiaomi-ninebot",
    title: "Levier de frein Xiaomi/Ninebot",
    category: "Freinage",
    icon: SlidersHorizontal,
    image: "/baner1.png",
    price: "60 €",
    duration: "30 à 60 min",
    short: "Remplacement du levier de frein Xiaomi ou Ninebot.",
    detail: "Pièces et main-d'oeuvre incluses.",
  }),
  makeService({
    id: "etrier-plaquettes",
    title: "Étrier de frein + plaquettes",
    category: "Freinage",
    icon: SlidersHorizontal,
    image: "/baner1.png",
    price: "80 €",
    duration: "30 à 60 min",
    short: "Remplacement de l'étrier et des plaquettes.",
    detail: "Pièces et main-d'oeuvre incluses.",
  }),
  makeService({
    id: "plaquettes-frein",
    title: "Plaquettes de frein",
    category: "Freinage",
    icon: SlidersHorizontal,
    image: "/baner1.png",
    price: "40 €",
    duration: "30 à 60 min",
    short: "Remplacement des plaquettes de frein.",
    detail: "Pièces et main-d'oeuvre incluses.",
  }),
  makeService({
    id: "disque-frein-petite",
    title: "Disque de frein petite trottinette",
    category: "Freinage",
    icon: SlidersHorizontal,
    image: "/baner1.png",
    price: "40 €",
    duration: "30 à 60 min",
    short: "Remplacement du disque sur petite trottinette.",
    detail: "Pièces et main-d'oeuvre incluses.",
  }),
  makeService({
    id: "disque-frein-grande",
    title: "Disque de frein grande trottinette",
    category: "Freinage",
    icon: SlidersHorizontal,
    image: "/baner1.png",
    price: "50 €",
    duration: "30 à 60 min",
    short: "Remplacement du disque sur grande trottinette.",
    detail: "Pièces et main-d'oeuvre incluses.",
  }),
  makeService({
    id: "diagnostic-petite",
    title: "Diagnostic petite trottinette",
    category: "Électronique",
    icon: Activity,
    image: "/atelier-greeneco.png",
    price: "30 €",
    duration: "30 min",
    short: "Recherche de panne sur petite trottinette.",
    detail: "Sur rendez-vous ou après appel boutique selon disponibilité.",
  }),
  makeService({
    id: "diagnostic-grande",
    title: "Diagnostic grande trottinette",
    category: "Électronique",
    icon: Activity,
    image: "/atelier-greeneco.png",
    price: "40 €",
    duration: "30 min",
    short: "Recherche de panne sur grande trottinette.",
    detail: "Sur rendez-vous ou après appel boutique selon disponibilité.",
  }),
  makeService({
    id: "changement-moteur-mo",
    title: "Changement moteur",
    category: "Moteur",
    icon: Cog,
    image: "/baner1.png",
    price: "50 €",
    duration: "1 à 2 h",
    short: "Remplacement ou pose moteur selon modèle.",
    detail: "Main-d'oeuvre hors pièces.",
  }),
  makeService({
    id: "changement-controleur-mo",
    title: "Changement contrôleur",
    category: "Électronique",
    icon: Cable,
    image: "/methode-greeneco.png",
    price: "50 €",
    duration: "30 à 90 min",
    short: "Remplacement du contrôleur électronique.",
    detail: "Main-d'oeuvre hors pièces.",
  }),
  makeService({
    id: "changement-batterie-mo",
    title: "Changement batterie",
    category: "Batterie",
    icon: BatteryCharging,
    image: "/atelier-greeneco.png",
    price: "50 €",
    duration: "30 à 90 min",
    short: "Remplacement de batterie selon modèle.",
    detail: "Main-d'oeuvre hors pièces.",
  }),
  makeService({
    id: "accelerateur-display-mo",
    title: "Accélérateur et display",
    category: "Électronique",
    icon: Cable,
    image: "/methode-greeneco.png",
    price: "35 €",
    duration: "30 à 90 min",
    short: "Pose ou remplacement accélérateur et display.",
    detail: "Main-d'oeuvre hors pièces.",
  }),
  makeService({
    id: "accelerateur-petite",
    title: "Accélérateur petite trottinette",
    category: "Électronique",
    icon: Cable,
    image: "/methode-greeneco.png",
    price: "60 €",
    duration: "30 à 90 min",
    short: "Remplacement accélérateur sur petite trottinette.",
    detail: "Pièces et main-d'oeuvre incluses.",
  }),
  makeService({
    id: "accelerateur-grande",
    title: "Accélérateur grande trottinette",
    category: "Électronique",
    icon: Cable,
    image: "/methode-greeneco.png",
    price: "Sur devis",
    duration: "30 à 90 min",
    short: "Remplacement accélérateur sur grande trottinette.",
    detail: "Prix variable selon la pièce.",
  }),
  makeService({
    id: "display-mini-moteur",
    title: "Display mini moteur",
    category: "Électronique",
    icon: Cable,
    image: "/methode-greeneco.png",
    price: "90 €",
    duration: "30 à 90 min",
    short: "Remplacement display mini moteur.",
    detail: "Pièces et main-d'oeuvre incluses.",
  }),
  makeService({
    id: "ecran-xiaomi-ninebot",
    title: "Écran Xiaomi/Ninebot",
    category: "Électronique",
    icon: Cable,
    image: "/methode-greeneco.png",
    price: "60 €",
    duration: "30 à 90 min",
    short: "Remplacement écran Xiaomi ou Ninebot.",
    detail: "Pièces et main-d'oeuvre incluses.",
  }),
  makeService({
    id: "garde-boue-xiaomi-m365",
    title: "Garde-boue Xiaomi M365",
    category: "Accessoires",
    icon: Grid2X2,
    image: "/atelier-greeneco.png",
    price: "50 €",
    duration: "15 à 45 min",
    short: "Remplacement garde-boue petit modèle.",
    detail: "Pour Xiaomi M365, pièces et main-d'oeuvre incluses.",
  }),
  makeService({
    id: "garde-boue-urban-glide",
    title: "Garde-boue Urban Glide",
    category: "Accessoires",
    icon: Grid2X2,
    image: "/atelier-greeneco.png",
    price: "60 à 80 €",
    duration: "15 à 45 min",
    short: "Remplacement garde-boue grand modèle.",
    detail: "Pour Urban Glide, pièces et main-d'oeuvre incluses.",
  }),
  makeService({
    id: "potence-complete-xiaomi",
    title: "Potence complète Xiaomi",
    category: "Accessoires",
    icon: Settings,
    image: "/atelier-greeneco.png",
    price: "100 €",
    duration: "1 à 2 h",
    short: "Remplacement de potence complète Xiaomi.",
    detail: "À confirmer selon la pièce.",
  }),
  makeService({
    id: "diagnostic-batterie",
    title: "Diagnostic batterie",
    category: "Batterie",
    icon: BatteryCharging,
    image: "/atelier-greeneco.png",
    price: "60 €",
    duration: "30 à 60 min",
    short: "Contrôle batterie et autonomie.",
    detail: "Sur rendez-vous ou après appel boutique selon disponibilité.",
  }),
  makeService({
    id: "reparation-batterie",
    title: "Réparation batterie",
    category: "Batterie",
    icon: BatteryCharging,
    image: "/atelier-greeneco.png",
    price: "Sur devis",
    duration: "Après diagnostic",
    short: "Réparation batterie selon panne constatée.",
    detail: "Prix confirmé après diagnostic.",
  }),
];

export const serviceCatalog = [...services, ...specificServiceCards];

const trustItems = [
  { icon: Truck, title: "Sans rendez-vous", text: "Sauf diagnostic et recherche de panne" },
  { icon: CreditCard, title: "Paiement sécurisé", text: "Carte Bancaire, PayPal" },
  { icon: RotateCcw, title: "Réparations garanties", text: "Pièces et main-d'oeuvre" },
  { icon: ShieldCheck, title: "Une mobilité plus durable", text: "Réparer aujourd'hui, rouler demain" },
];

export default function ServicesCatalog() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("Tous les services");
  const [query, setQuery] = useState("");
  const [selectedId, setSelectedId] = useState(serviceCatalog[0].id);

  const visibleServices = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    return serviceCatalog.filter((service) => {
      const matchesCategory =
        activeCategory === "Tous les services" || service.category === activeCategory;
      const searchableText = [
        service.title,
        service.short,
        service.description,
        service.category,
        ...service.details,
        ...service.prices.flatMap((price) => [price.label, price.value]),
      ]
        .join(" ")
        .toLowerCase();
      const matchesSearch =
        !searchTerm || searchableText.includes(searchTerm);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, query]);

  const selectedService =
    serviceCatalog.find((service) => service.id === selectedId) ?? serviceCatalog[0];
  const selectedAvailability = getAvailability(selectedService.id);

  function selectCategory(category: (typeof categories)[number]) {
    setActiveCategory(category);
    setQuery("");

    const firstService = serviceCatalog.find(
      (service) =>
        category === "Tous les services" || service.category === category,
    );

    if (firstService) {
      setSelectedId(firstService.id);
    }
  }

  return (
    <article className={styles.page}>
      <section className={styles.hero} aria-labelledby="services-hero-title">
        <div className={styles.heroContent}>
          <p>Services GreenEco</p>
          <h1 id="services-hero-title">Réparations et tarifs trottinette</h1>
          <span>
            Pneus, freins, batterie, moteur et électronique : choisissez votre
            prestation et consultez le prix avant de passer à l&apos;atelier.
          </span>
        </div>
      </section>

      <section className={styles.catalog} aria-labelledby="services-catalog-title">
        <div className={styles.filters}>
          <div className={styles.categoryList} aria-label="Filtrer les services">
            {categories.map((category) => (
              <button
                className={category === activeCategory ? styles.activeCategory : ""}
                key={category}
                type="button"
                onClick={() => selectCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <label className={styles.searchBox}>
            <Search size={20} strokeWidth={2.2} aria-hidden="true" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Rechercher un service..."
              aria-label="Rechercher un service"
            />
          </label>
        </div>

        <div className={styles.availabilityNotice}>
          <div>
            <span>
              <Truck size={24} strokeWidth={2.3} />
            </span>
            <div>
              <h2>Services sans rendez-vous</h2>
              <p>
                Pneus, freins, batterie, entretien, accessoires et petites
                réparations : passez directement en boutique selon disponibilité.
              </p>
            </div>
          </div>
          <div className={styles.diagnosticNotice}>
            <AlertCircle size={23} strokeWidth={2.4} />
            <p>
              <strong>Diagnostic :</strong> prenez rendez-vous ou appelez la
              boutique avant de venir.
            </p>
          </div>
        </div>

        <div
          className={styles.selectedService}
          id="services-catalog-title"
        >
          <div>
            <p>{selectedService.category}</p>
            <h1>{selectedService.title}</h1>
            <strong>{selectedService.price}</strong>
            <div
              className={`${styles.selectedAvailability} ${
                selectedAvailability.appointmentRequired
                  ? styles.appointmentRequired
                  : ""
              }`}
            >
              {selectedAvailability.appointmentRequired ? (
                <CalendarCheck size={18} strokeWidth={2.4} />
              ) : (
                <Truck size={18} strokeWidth={2.4} />
              )}
              <span>{selectedAvailability.label}</span>
            </div>
          </div>
          <p>{selectedService.description}</p>
          <ul>
            {selectedService.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
          <div className={styles.selectedPrices}>
            {selectedService.prices.map((price) => (
              <div key={`${selectedService.id}-${price.label}`}>
                <span>{price.label}</span>
                <strong>{price.value}</strong>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.serviceGrid}>
          {visibleServices.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                className={`${styles.serviceCard} ${
                  selectedService.id === service.id ? styles.selectedCard : ""
                }`}
                href={`/services/${service.id}`}
                key={service.id}
              >
                <Image
                  className={styles.cardImage}
                  src={service.image}
                  alt=""
                  width={720}
                  height={420}
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
                />
                <div className={styles.cardBody}>
                  <div
                    className={`${styles.availabilityBadge} ${
                      getAvailability(service.id).appointmentRequired
                        ? styles.badgeAppointment
                        : ""
                    }`}
                  >
                    {getAvailability(service.id).appointmentRequired ? (
                      <CalendarCheck size={15} strokeWidth={2.4} />
                    ) : (
                      <Truck size={15} strokeWidth={2.4} />
                    )}
                    <span>{getAvailability(service.id).label}</span>
                  </div>
                  <div className={styles.cardTitle}>
                    <span>
                      <Icon size={28} strokeWidth={2.2} />
                    </span>
                    <h2>{service.title}</h2>
                  </div>
                  <p>{service.short}</p>
                  <div className={styles.cardMeta}>
                    <span>
                      <Euro size={16} strokeWidth={2.2} />
                      {service.price}
                    </span>
                    <span>
                      <Clock size={16} strokeWidth={2.2} />
                      {service.duration}
                    </span>
                    <ChevronRight size={18} strokeWidth={2.4} />
                  </div>
                </div>
              </Link>
            );
          })}

          <aside className={styles.specificNeed}>
            <CircleHelp size={50} strokeWidth={1.9} />
            <h2>Un besoin spécifique ?</h2>
            <p>
              Une panne ou une demande particulière ? Contactez-nous, nos
              experts vous conseillent.
            </p>
            <a href="/contact">Nous contacter →</a>
          </aside>
        </div>

        <section className={styles.ctaBand} aria-label="Demande de devis">
          <div>
            <h2>Une question ? Un devis ?</h2>
            <p>
              Passez sans rendez-vous pour les réparations courantes. Pour un
              diagnostic, réservez ou appelez avant.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <a href={business.phoneHref}>
              <PhoneCall size={17} strokeWidth={2.5} />
              APPELER
            </a>
            <a href="/rendez-vous">PRENDRE RENDEZ-VOUS →</a>
          </div>
        </section>

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
