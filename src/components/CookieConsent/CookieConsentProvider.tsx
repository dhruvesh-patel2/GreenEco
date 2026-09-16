"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  createConsent,
  readStoredConsent,
  storeConsent,
  type CookieConsent,
  type CookiePreferences,
} from "@/lib/cookieConsent";
import CookieConsentUi from "./CookieConsentUi";

type ConsentContextValue = {
  consent: CookieConsent | null;
  ready: boolean;
  openPreferences: () => void;
  allowExternal: () => void;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

export default function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [consent, setConsent] = useState<CookieConsent | null>(null);
  const [ready, setReady] = useState(false);
  const [preferencesOpen, setPreferencesOpen] = useState(false);

  useEffect(() => {
    const hydrationTimer = window.setTimeout(() => {
      setConsent(readStoredConsent());
      setReady(true);
    }, 0);

    return () => window.clearTimeout(hydrationTimer);
  }, []);

  const save = useCallback((preferences: CookiePreferences) => {
    const nextConsent = createConsent(preferences.external);
    storeConsent(nextConsent);
    setConsent(nextConsent);
    setPreferencesOpen(false);
  }, []);

  const allowExternal = useCallback(() => save({ external: true }), [save]);
  const openPreferences = useCallback(() => setPreferencesOpen(true), []);

  const value = useMemo(
    () => ({ consent, ready, openPreferences, allowExternal }),
    [allowExternal, consent, openPreferences, ready],
  );

  return (
    <ConsentContext.Provider value={value}>
      {children}
      <CookieConsentUi
        consent={consent}
        ready={ready}
        preferencesOpen={preferencesOpen}
        openPreferences={openPreferences}
        closePreferences={() => setPreferencesOpen(false)}
        save={save}
      />
    </ConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const context = useContext(ConsentContext);
  if (!context) throw new Error("useCookieConsent must be used inside CookieConsentProvider");
  return context;
}
