"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Check, LockKeyhole, Settings2, X } from "lucide-react";
import type { CookieConsent, CookiePreferences } from "@/lib/cookieConsent";
import styles from "./CookieConsent.module.css";

type Props = {
  consent: CookieConsent | null;
  ready: boolean;
  preferencesOpen: boolean;
  openPreferences: () => void;
  closePreferences: () => void;
  save: (preferences: CookiePreferences) => void;
};

export default function CookieConsentUi({ consent, ready, preferencesOpen, openPreferences, closePreferences, save }: Props) {
  const [external, setExternal] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!preferencesOpen) return;
    previousFocus.current = document.activeElement as HTMLElement | null;
    const preferencesTimer = window.setTimeout(
      () => setExternal(consent?.external ?? false),
      0,
    );
    dialogRef.current?.focus();

    const handleDialogKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Escape" && consent) closePreferences();
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>("button, a[href], input:not([disabled])");
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", handleDialogKeyboard);
    return () => {
      window.clearTimeout(preferencesTimer);
      document.removeEventListener("keydown", handleDialogKeyboard);
      previousFocus.current?.focus();
    };
  }, [closePreferences, consent, preferencesOpen]);

  if (!ready) return null;

  return (
    <>
      {!consent && !preferencesOpen ? (
        <section className={styles.banner} aria-label="Choix des cookies">
          <div className={styles.bannerText}>
            <span className={styles.privacyIcon}><LockKeyhole size={21} /></span>
            <div><h2>GreenEco respecte votre vie privée</h2><p>Nous utilisons un stockage nécessaire au fonctionnement du site et, avec votre accord, les services externes utiles à votre expérience. Vous pouvez accepter, refuser ou personnaliser vos choix.</p><Link href="/politique-cookies">Politique de cookies</Link></div>
          </div>
          <div className={styles.bannerActions}>
            <button type="button" onClick={() => save({ external: true })}>Tout accepter</button>
            <button type="button" onClick={() => save({ external: false })}>Tout refuser</button>
            <button type="button" onClick={openPreferences} className={styles.customize}>Personnaliser</button>
          </div>
        </section>
      ) : null}

      {preferencesOpen ? (
        <div className={styles.backdrop} onMouseDown={(event) => { if (event.target === event.currentTarget && consent) closePreferences(); }}>
          <div className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="cookie-dialog-title" tabIndex={-1} ref={dialogRef}>
            <div className={styles.modalHeader}>
              <div><p>Préférences</p><h2 id="cookie-dialog-title">Gérer mes cookies</h2></div>
              {consent ? <button type="button" className={styles.closeButton} onClick={closePreferences} aria-label="Fermer les préférences"><X size={22} /></button> : null}
            </div>
            <p className={styles.modalIntro}>Choisissez les services que GreenEco peut charger. Votre choix reste modifiable à tout moment.</p>

            <div className={styles.category}>
              <div><h3>Stockage strictement nécessaire</h3><p>Mémorise uniquement votre choix de consentement. Il ne peut pas être désactivé.</p></div>
              <span className={styles.alwaysOn}><Check size={15} /> Toujours actif</span>
            </div>
            <div className={styles.category}>
              <div><h3>Services externes</h3><p>Permet d&apos;afficher les cartes Google Maps intégrées au site.</p></div>
              <label className={styles.switch}>
                <input type="checkbox" checked={external} onChange={(event) => setExternal(event.target.checked)} />
                <span aria-hidden="true" /><b>{external ? "Autorisé" : "Refusé"}</b>
              </label>
            </div>

            <div className={styles.modalActions}>
              <button type="button" onClick={() => save({ external: true })}>Tout accepter</button>
              <button type="button" onClick={() => save({ external: false })}>Tout refuser</button>
              <button type="button" className={styles.saveButton} onClick={() => save({ external })}><Settings2 size={17} />Enregistrer mes choix</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
