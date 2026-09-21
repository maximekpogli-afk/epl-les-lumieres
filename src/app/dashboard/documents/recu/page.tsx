"use client"
import React, { useState } from "react"
import Link from "next/link"

function numberToWords(n: number): string {
  if (n === 0) return "z\u00e9ro"
  const ones = ["", "un", "deux", "trois", "quatre", "cinq", "six", "sept", "huit", "neuf", "dix", "onze", "douze", "treize", "quatorze", "quinze", "seize", "dix-sept", "dix-huit", "dix-neuf"]
  const tens = ["", "", "vingt", "trente", "quarante", "cinquante", "soixante", "soixante-dix", "quatre-vingts", "quatre-vingt-dix"]
  let result = ""
  if (n >= 1000) { result += ones[Math.floor(n / 1000)] + " mille "; n %= 1000 }
  if (n >= 100) { result += ones[Math.floor(n / 100)] + " cent "; n %= 100 }
  if (n >= 20) {
    const t = Math.floor(n / 10)
    const o = n % 10
    result += tens[t]
    if (o > 0) result += (t === 2 ? "-" : " et ") + ones[o]
  } else if (n > 0) {
    result += ones[n]
  }
  return result.trim()
}

const headerStyle: React.CSSProperties = {
  borderTop: "4px double #1e3a5f",
  borderBottom: "4px double #1e3a5f",
  padding: "12px 0",
  marginBottom: 24,
}

export default function RecuPage() {
  const [eleve, setEleve] = useState("")
  const [classe, setClasse] = useState("")
  const [montant, setMontant] = useState("")
  const [datePaiement, setDatePaiement] = useState("")
  const [motif, setMotif] = useState("Scolarit\u00e9")
  const [modePaiement, setModePaiement] = useState("Esp\u00e8ces")
  const [reference, setReference] = useState("")
  const [showPreview, setShowPreview] = useState(false)

  const recuNumber = `RECU-EPL-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9999) + 1).padStart(4, "0")}`
  const dateFormatted = datePaiement
    ? new Date(datePaiement).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })
    : "\u2026\u2026\u2026\u2026\u2026"

  const montantNumber = parseFloat(montant) || 0
  const montantEnLettres = montantNumber > 0 ? numberToWords(montantNumber) + " FCFA" : "\u2026\u2026\u2026"

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #0f172a 0%, #581c87 50%, #0f172a 100%)", padding: 24 }}>
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          .print-area, .print-area * { visibility: visible !important; }
          .print-area { position: absolute; left: 0; top: 0; width: 100%; }
          .no-print { display: none !important; }
        }
      `}</style>

      <div className="no-print" style={{ marginBottom: 24 }}>
        <Link href="/dashboard/documents" style={{ color: "#c4b5fd", textDecoration: "none" }}>
          &larr; Retour aux documents
        </Link>
      </div>

      {!showPreview ? (
        <div className="no-print" style={{ maxWidth: 720, margin: "0 auto" }}>
          <div style={{ background: "white", borderRadius: 16, boxShadow: "0 10px 40px rgba(0,0,0,0.12)", padding: 32 }}>
            <h1 style={{ fontSize: 24, fontWeight: 700, color: "#1e3a5f", marginBottom: 24 }}>Re\u00e7u de Paiement</h1>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>\u00c9l\u00e8ve</label>
                <input type="text" value={eleve} onChange={(e) => setEleve(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, outline: "none" }} placeholder="Nom et pr\u00e9nom" />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>Classe</label>
                <input type="text" value={classe} onChange={(e) => setClasse(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, outline: "none" }} placeholder="Ex: 6\u00e8me A" />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>Montant (FCFA)</label>
                <input type="number" value={montant} onChange={(e) => setMontant(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, outline: "none" }} placeholder="0" min="0" />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>Date de paiement</label>
                <input type="date" value={datePaiement} onChange={(e) => setDatePaiement(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, outline: "none" }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>Motif</label>
                <select value={motif} onChange={(e) => setMotif(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, outline: "none", background: "white" }}>
                  <option>Scolarit\u00e9</option>
                  <option>Inscription</option>
                  <option>Examen</option>
                  <option>Activit\u00e9s</option>
                  <option>Transport</option>
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>Mode de paiement</label>
                <select value={modePaiement} onChange={(e) => setModePaiement(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, outline: "none", background: "white" }}>
                  <option>Esp\u00e8ces</option>
                  <option>Virement</option>
                  <option>Mobile Money</option>
                </select>
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>R\u00e9f\u00e9rence</label>
                <input type="text" value={reference} onChange={(e) => setReference(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, outline: "none" }} placeholder="Ex: VIR-2025-001" />
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
              <button onClick={() => setShowPreview(true)} style={{ flex: 1, padding: "12px 0", background: "#1e3a5f", color: "white", border: "none", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
                G\u00e9n\u00e9rer
              </button>
              <Link href="/dashboard/documents" style={{ flex: 1, padding: "12px 0", background: "#e2e8f0", color: "#1e3a5f", border: "none", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer", textAlign: "center", display: "flex", alignItems: "center", justifyContent: "center", textDecoration: "none" }}>
                Retour
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="no-print" style={{ maxWidth: 720, margin: "0 auto 24px", display: "flex", gap: 12 }}>
            <button onClick={() => setShowPreview(false)} style={{ flex: 1, padding: "12px 0", background: "#1e3a5f", color: "white", border: "none", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
              Modifier
            </button>
            <button onClick={() => window.print()} style={{ flex: 1, padding: "12px 0", background: "#16a34a", color: "white", border: "none", borderRadius: 8, fontSize: 15, fontWeight: 600, cursor: "pointer" }}>
              Imprimer / PDF
            </button>
          </div>

          <div className="print-area" style={{ maxWidth: 794, margin: "0 auto", background: "white", padding: 48, boxShadow: "0 25px 60px rgba(0,0,0,0.3)" }}>
            <div style={headerStyle}>
              <div style={{ textAlign: "center", fontFamily: 'Georgia, "Times New Roman", serif' }}>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#1e3a5f", letterSpacing: 2 }}>ÉCOLE PRIVÉE LIBRE LES LUMIÈRES</div>
                <div style={{ fontSize: 12, fontStyle: "italic", color: "#c9a84c", marginTop: 2 }}>Excellence et Lumière</div>
                <div style={{ fontSize: 10, color: "#64748b", marginTop: 4 }}>Avenue de la Paix, N°12, Kinshasa-Gombe | Tél: +243 81 234 5678 | Email: info@epl-lumieres.cd</div>
              </div>
            </div>

            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <h1 style={{ fontSize: 20, fontWeight: 700, color: "#1e3a5f", fontFamily: 'Georgia, "Times New Roman", serif', textTransform: "uppercase", marginBottom: 4 }}>
                Re\u00e7u de Paiement
              </h1>
              <p style={{ fontSize: 12, color: "#c9a84c", fontWeight: 600 }}>N\u00b0 {recuNumber}</p>
            </div>

            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13, marginBottom: 24 }}>
              <tbody>
                <tr>
                  <td style={{ padding: "10px 12px", border: "1px solid #e2e8f0", fontWeight: 700, color: "#1e3a5f", width: "35%", background: "#f8fafc" }}>Re\u00e7u N\u00b0</td>
                  <td style={{ padding: "10px 12px", border: "1px solid #e2e8f0" }}>{recuNumber}</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 12px", border: "1px solid #e2e8f0", fontWeight: 700, color: "#1e3a5f", background: "#f8fafc" }}>Date</td>
                  <td style={{ padding: "10px 12px", border: "1px solid #e2e8f0" }}>{dateFormatted}</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 12px", border: "1px solid #e2e8f0", fontWeight: 700, color: "#1e3a5f", background: "#f8fafc" }}>\u00c9l\u00e8ve</td>
                  <td style={{ padding: "10px 12px", border: "1px solid #e2e8f0" }}>{eleve || "\u2026\u2026\u2026\u2026\u2026"}</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 12px", border: "1px solid #e2e8f0", fontWeight: 700, color: "#1e3a5f", background: "#f8fafc" }}>Classe</td>
                  <td style={{ padding: "10px 12px", border: "1px solid #e2e8f0" }}>{classe || "\u2026\u2026\u2026\u2026\u2026"}</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 12px", border: "1px solid #e2e8f0", fontWeight: 700, color: "#1e3a5f", background: "#f8fafc" }}>Motif du paiement</td>
                  <td style={{ padding: "10px 12px", border: "1px solid #e2e8f0" }}>{motif}</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 12px", border: "1px solid #e2e8f0", fontWeight: 700, color: "#1e3a5f", background: "#f8fafc" }}>Montant en chiffres</td>
                  <td style={{ padding: "10px 12px", border: "1px solid #e2e8f0", fontWeight: 700, fontSize: 16, color: "#1e3a5f" }}>{montantNumber.toLocaleString("fr-FR")} FCFA</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 12px", border: "1px solid #e2e8f0", fontWeight: 700, color: "#1e3a5f", background: "#f8fafc" }}>Montant en lettres</td>
                  <td style={{ padding: "10px 12px", border: "1px solid #e2e8f0", fontStyle: "italic" }}>{montantEnLettres}</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 12px", border: "1px solid #e2e8f0", fontWeight: 700, color: "#1e3a5f", background: "#f8fafc" }}>Mode de paiement</td>
                  <td style={{ padding: "10px 12px", border: "1px solid #e2e8f0" }}>{modePaiement}</td>
                </tr>
                <tr>
                  <td style={{ padding: "10px 12px", border: "1px solid #e2e8f0", fontWeight: 700, color: "#1e3a5f", background: "#f8fafc" }}>R\u00e9f\u00e9rence</td>
                  <td style={{ padding: "10px 12px", border: "1px solid #e2e8f0" }}>{reference || "\u2026\u2026\u2026\u2026\u2026"}</td>
                </tr>
              </tbody>
            </table>

            <div style={{ padding: 16, background: "#f0fdf4", border: "1px solid #bbf7d0", borderRadius: 8, marginBottom: 32, textAlign: "center", fontSize: 13, color: "#166534", fontWeight: 600, fontFamily: 'Georgia, "Times New Roman", serif' }}>
              Le montant ci-dessus a \u00e9t\u00e9 re\u00e7u en bonne et due forme.
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32, fontSize: 12 }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontWeight: 700, color: "#1e3a5f" }}>Le Comptable</p>
                <div style={{ marginTop: 48, borderTop: "1px solid #94a3b8", paddingTop: 8, color: "#64748b" }}>Signature</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontWeight: 700, color: "#1e3a5f" }}>Le Directeur</p>
                <div style={{ marginTop: 48, borderTop: "1px solid #94a3b8", paddingTop: 8, color: "#64748b" }}>Signature et cachet</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontWeight: 700, color: "#1e3a5f" }}>L&apos;int\u00e9ress\u00e9(e)</p>
                <div style={{ marginTop: 48, borderTop: "1px solid #94a3b8", paddingTop: 8, color: "#64748b" }}>Signature</div>
              </div>
            </div>

            <div style={{ textAlign: "center", marginTop: 24 }}>
              <div style={{ width: 100, height: 100, margin: "0 auto", border: "2px dashed #cbd5e1", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#94a3b8" }}>
                Cachet officiel
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
