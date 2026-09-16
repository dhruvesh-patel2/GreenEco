import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CookieConsentProvider from "@/components/CookieConsent/CookieConsentProvider";
import { business } from "@/lib/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || business.website;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "GreenEco | Réparation de trottinettes électriques à Saint-Maur",
    template: "%s | GreenEco",
  },
  description:
    "GreenEco répare, entretient et diagnostique les trottinettes électriques à Saint-Maur : pneus, freins, batterie, crevaisons et révision en atelier.",
  applicationName: "GreenEco",
  keywords: [
    "réparation trottinette Saint-Maur",
    "réparation trottinette électrique Saint-Maur",
    "atelier trottinette Saint-Maur",
    "crevaison trottinette Saint-Maur",
    "entretien trottinette électrique",
    "GreenEco",
  ],
  authors: [{ name: "GreenEco" }],
  creator: "GreenEco",
  publisher: "GreenEco",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GreenEco | Réparation de trottinettes électriques à Saint-Maur",
    description:
      "Atelier local pour réparer et entretenir votre trottinette électrique à Saint-Maur : diagnostic, pneus, freins, batterie et révision.",
    url: "/",
    siteName: "GreenEco",
    locale: "fr_FR",
    type: "website",
    images: [
      {
        url: "/og-greeneco.svg",
        width: 1200,
        height: 630,
        alt: "GreenEco - réparation de trottinettes électriques à Saint-Maur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "GreenEco | Réparation trottinette Saint-Maur",
    description:
      "Diagnostic, entretien et réparation de trottinettes électriques à Saint-Maur.",
    images: ["/og-greeneco.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo-greeneco-icon.svg",
    apple: "/logo-greeneco-icon.svg",
  },
  category: "local business",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <CookieConsentProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
