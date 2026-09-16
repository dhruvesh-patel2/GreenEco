"use client";

import { useCookieConsent } from "./CookieConsentProvider";

export default function CookieSettingsButton({ className }: { className?: string }) {
  const { openPreferences } = useCookieConsent();
  return <button type="button" className={className} onClick={openPreferences}>Gérer mes cookies</button>;
}
