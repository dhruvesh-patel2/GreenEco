"use client";

import { FormEvent, useMemo, useState } from "react";
import {
  Calculator,
  FileText,
  LockKeyhole,
  Printer,
  ReceiptText,
  Wrench,
} from "lucide-react";
import styles from "./admin.module.css";

const accessCode = "2094";

const repairStatuses = [
  "Réception",
  "Diagnostic",
  "Devis envoyé",
  "Réparation",
  "Prêt",
  "Facturé",
];

const commonServices = [
  "Diagnostic petite trottinette - 30 €",
  "Diagnostic grande trottinette - 40 €",
  "Diagnostic batterie - 60 €",
  "Pneu/chambre à air petite trottinette - 35 €",
  "Pneu/chambre à air grande trottinette - 40 €",
  "Chambre à air seule - 45 €",
  "Pneu plein 8 pouces - 60 €",
  "Pneu plein 10x2.125 - 70 €",
  "Pneu plein 10x2.50 - 80 €",
  "Pneu plein 10x2.70 - 90 €",
  "Réglage frein - 20 €",
  "Purge 1 frein - 40 €",
  "Purge 2 freins - 60 €",
  "Changement batterie hors pièce - 50 €",
  "Changement moteur hors pièce - 50 €",
  "Changement contrôleur hors pièce - 50 €",
  "Écran Xiaomi/Ninebot - 60 €",
  "Garde-boue Xiaomi M365 - 50 €",
  "Potence complète Xiaomi - 100 €",
  "Réparation sur devis",
];

type Line = {
  id: number;
  label: string;
  quantity: number;
  unitPrice: number;
};

const initialLines: Line[] = [
  {
    id: 1,
    label: "Diagnostic petite trottinette",
    quantity: 1,
    unitPrice: 30,
  },
];

export default function AdminPanel() {
  const [code, setCode] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState("");
  const [documentType, setDocumentType] = useState<"Devis" | "Facture">("Devis");
  const [documentNumber, setDocumentNumber] = useState("GE-0001");
  const [clientName, setClientName] = useState("");
  const [clientPhone, setClientPhone] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [status, setStatus] = useState(repairStatuses[0]);
  const [notes, setNotes] = useState("");
  const [lines, setLines] = useState<Line[]>(initialLines);

  const total = useMemo(
    () =>
      lines.reduce((sum, line) => sum + line.quantity * line.unitPrice, 0),
    [lines],
  );

  function submitAccess(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (code.trim() === accessCode) {
      setAuthorized(true);
      setError("");
      return;
    }

    setError("Code administrateur incorrect.");
  }

  function updateLine(id: number, field: keyof Line, value: string) {
    setLines((current) =>
      current.map((line) =>
        line.id === id
          ? {
              ...line,
              [field]:
                field === "label" ? value : Number.parseFloat(value) || 0,
            }
          : line,
      ),
    );
  }

  function addLine() {
    setLines((current) => [
      ...current,
      {
        id: Date.now(),
        label: "",
        quantity: 1,
        unitPrice: 0,
      },
    ]);
  }

  function removeLine(id: number) {
    setLines((current) =>
      current.length === 1 ? current : current.filter((line) => line.id !== id),
    );
  }

  if (!authorized) {
    return (
      <section className={styles.loginPage}>
        <form className={styles.loginCard} onSubmit={submitAccess}>
          <span className={styles.loginIcon}>
            <LockKeyhole size={28} strokeWidth={2.2} />
          </span>
          <p>Espace administrateur</p>
          <h1>Connexion atelier GreenEco</h1>
          <label htmlFor="admin-code">Code d&apos;accès</label>
          <input
            autoComplete="one-time-code"
            id="admin-code"
            inputMode="numeric"
            onChange={(event) => setCode(event.target.value)}
            placeholder="Entrer le code"
            type="password"
            value={code}
          />
          {error ? <strong className={styles.error}>{error}</strong> : null}
          <button type="submit">Entrer dans l&apos;admin</button>
        </form>
      </section>
    );
  }

  return (
    <section className={styles.adminPage}>
      <div className={styles.adminHero}>
        <p>Administration GreenEco</p>
        <h1>Réparations, devis et factures</h1>
        <div className={styles.kpis}>
          <span>Suivi atelier</span>
          <span>Documents clients</span>
          <span>Tarifs rapides</span>
        </div>
      </div>

      <div className={styles.workspace}>
        <form className={styles.panel}>
          <div className={styles.panelTitle}>
            <Wrench size={22} strokeWidth={2.2} />
            <h2>Fiche réparation</h2>
          </div>

          <div className={styles.fieldGrid}>
            <label>
              Client
              <input
                onChange={(event) => setClientName(event.target.value)}
                placeholder="Nom du client"
                value={clientName}
              />
            </label>
            <label>
              Téléphone
              <input
                onChange={(event) => setClientPhone(event.target.value)}
                placeholder="06 12 34 56 78"
                value={clientPhone}
              />
            </label>
            <label>
              E-mail
              <input
                onChange={(event) => setClientEmail(event.target.value)}
                placeholder="client@email.com"
                type="email"
                value={clientEmail}
              />
            </label>
            <label>
              Modèle
              <input
                onChange={(event) => setVehicle(event.target.value)}
                placeholder="Xiaomi, Ninebot, Dualtron..."
                value={vehicle}
              />
            </label>
            <label>
              Statut
              <select
                onChange={(event) => setStatus(event.target.value)}
                value={status}
              >
                {repairStatuses.map((item) => (
                  <option key={item}>{item}</option>
                ))}
              </select>
            </label>
            <label>
              Prestation rapide
              <select
                onChange={(event) => {
                  const [label, rawPrice] = event.target.value.split(" - ");
                  const price = Number.parseInt(rawPrice || "0", 10);
                  setLines((current) => [
                    ...current,
                    {
                      id: Date.now(),
                      label,
                      quantity: 1,
                      unitPrice: Number.isNaN(price) ? 0 : price,
                    },
                  ]);
                }}
                value=""
              >
                <option value="" disabled>
                  Ajouter une prestation
                </option>
                {commonServices.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <label className={styles.notes}>
            Notes atelier
            <textarea
              onChange={(event) => setNotes(event.target.value)}
              placeholder="Symptômes, pièces à commander, accord client..."
              value={notes}
            />
          </label>
        </form>

        <div className={styles.panel}>
          <div className={styles.panelTitle}>
            <Calculator size={22} strokeWidth={2.2} />
            <h2>Lignes du document</h2>
          </div>

          <div className={styles.documentTools}>
            <label>
              Type
              <select
                onChange={(event) =>
                  setDocumentType(event.target.value as "Devis" | "Facture")
                }
                value={documentType}
              >
                <option>Devis</option>
                <option>Facture</option>
              </select>
            </label>
            <label>
              Numéro
              <input
                onChange={(event) => setDocumentNumber(event.target.value)}
                value={documentNumber}
              />
            </label>
          </div>

          <div className={styles.lines}>
            {lines.map((line) => (
              <div className={styles.line} key={line.id}>
                <input
                  aria-label="Libellé"
                  onChange={(event) =>
                    updateLine(line.id, "label", event.target.value)
                  }
                  placeholder="Prestation"
                  value={line.label}
                />
                <input
                  aria-label="Quantité"
                  min="0"
                  onChange={(event) =>
                    updateLine(line.id, "quantity", event.target.value)
                  }
                  type="number"
                  value={line.quantity}
                />
                <input
                  aria-label="Prix unitaire"
                  min="0"
                  onChange={(event) =>
                    updateLine(line.id, "unitPrice", event.target.value)
                  }
                  type="number"
                  value={line.unitPrice}
                />
                <button type="button" onClick={() => removeLine(line.id)}>
                  Retirer
                </button>
              </div>
            ))}
          </div>

          <div className={styles.totalBox}>
            <span>Total TTC</span>
            <strong>{total.toFixed(2)} €</strong>
          </div>

          <div className={styles.actions}>
            <button type="button" onClick={addLine}>
              Ajouter une ligne
            </button>
            <button type="button" onClick={() => window.print()}>
              <Printer size={18} strokeWidth={2.2} />
              Imprimer / PDF
            </button>
          </div>
        </div>

        <article className={styles.preview}>
          <div className={styles.previewHeader}>
            {documentType === "Devis" ? (
              <FileText size={26} strokeWidth={2.2} />
            ) : (
              <ReceiptText size={26} strokeWidth={2.2} />
            )}
            <div>
              <p>{documentType}</p>
              <h2>{documentNumber}</h2>
            </div>
          </div>

          <div className={styles.previewMeta}>
            <p>
              <strong>Client</strong>
              {clientName || "Client à renseigner"}
            </p>
            <p>
              <strong>Contact</strong>
              {clientPhone || clientEmail || "Téléphone / e-mail"}
            </p>
            <p>
              <strong>Trottinette</strong>
              {vehicle || "Modèle à renseigner"}
            </p>
            <p>
              <strong>Statut</strong>
              {status}
            </p>
          </div>

          <div className={styles.previewLines}>
            {lines.map((line) => (
              <div key={line.id}>
                <span>{line.label || "Prestation"}</span>
                <span>
                  {line.quantity} x {line.unitPrice.toFixed(2)} €
                </span>
              </div>
            ))}
          </div>

          <div className={styles.previewTotal}>
            <span>Total TTC</span>
            <strong>{total.toFixed(2)} €</strong>
          </div>

          <p className={styles.previewNotes}>
            {notes ||
              "Notes internes : diagnostic, accord client, pièces commandées ou consignes de remise."}
          </p>
        </article>
      </div>
    </section>
  );
}
