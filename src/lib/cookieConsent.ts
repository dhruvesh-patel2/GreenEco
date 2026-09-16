export const CONSENT_VERSION = "1.0";
export const CONSENT_STORAGE_KEY = "greeneco_cookie_consent";
export const CONSENT_VALIDITY_DAYS = 180;

export type CookieConsent = {
  necessary: true;
  external: boolean;
  timestamp: string;
  version: string;
};

export type CookiePreferences = Pick<CookieConsent, "external">;

export function createConsent(external: boolean): CookieConsent {
  return {
    necessary: true,
    external,
    timestamp: new Date().toISOString(),
    version: CONSENT_VERSION,
  };
}

export function readStoredConsent(): CookieConsent | null {
  try {
    const rawConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!rawConsent) return null;

    const consent = JSON.parse(rawConsent) as Partial<CookieConsent>;
    const timestamp = Date.parse(consent.timestamp ?? "");
    const validity = CONSENT_VALIDITY_DAYS * 24 * 60 * 60 * 1000;

    if (
      consent.version !== CONSENT_VERSION ||
      consent.necessary !== true ||
      typeof consent.external !== "boolean" ||
      !Number.isFinite(timestamp) ||
      Date.now() - timestamp > validity
    ) {
      window.localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }

    return consent as CookieConsent;
  } catch {
    return null;
  }
}

export function storeConsent(consent: CookieConsent) {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(consent));
}
