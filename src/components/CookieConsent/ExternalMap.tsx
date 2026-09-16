"use client";

import { MapPin } from "lucide-react";
import { useCookieConsent } from "./CookieConsentProvider";
import styles from "./ExternalMap.module.css";

type ExternalMapProps = {
  src: string;
  title: string;
  className?: string;
};

export default function ExternalMap({ src, title, className }: ExternalMapProps) {
  const { consent, ready, allowExternal } = useCookieConsent();

  if (ready && consent?.external) {
    return <iframe className={className} src={src} title={title} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />;
  }

  return (
    <div className={`${styles.placeholder} ${className ?? ""}`} aria-label="Carte Google Maps bloquée">
      <MapPin size={28} />
      <strong>Carte Google Maps</strong>
      <p>Pour afficher cette carte, vous devez autoriser les services externes.</p>
      <button type="button" onClick={allowExternal} disabled={!ready}>Autoriser et afficher la carte</button>
    </div>
  );
}
