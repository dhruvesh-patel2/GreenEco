import type { Metadata } from "next";
import AdminPanel from "./AdminPanel";

export const metadata: Metadata = {
  title: "Administration atelier",
  description: "Espace administrateur GreenEco pour devis, factures et réparations.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPage() {
  return <AdminPanel />;
}
