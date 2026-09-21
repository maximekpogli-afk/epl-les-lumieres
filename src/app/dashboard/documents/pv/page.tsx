"use client"
import React, { useState } from "react"
import Link from "next/link"

const eleves = [
  { nom: "KALALA", prenom: "Sarah", t1: 18.0, t2: 18.5, t3: 19.0 },
  { nom: "MWAMBA", prenom: "Lucie", t1: 17.2, t2: 17.8, t3: 18.2 },
  { nom: "MBUYI", prenom: "Marie", t1: 16.2, t2: 17.0, t3: 17.5 },
  { nom: "KABONGO", prenom: "Jean", t1: 14.5, t2: 15.2, t3: 16.0 },
  { nom: "ILUNGA", prenom: "Grace", t1: 15.0, t2: 14.8, t3: 15.5 },
  { nom: "NZUZI", prenom: "Ruth", t1: 13.8, t2: 14.2, t3: 14.8 },
  { nom: "KASONGO", prenom: "Paul", t1: 12.5, t2: 13.0, t3: 13.5 },
  { nom: "TSHIMANGA", prenom: "Pierre", t1: 11.3, t2: 12.1, t3: 11.8 },
  { nom: "KAWAYA", prenom: "Joseph", t1: 8.5, t2: 9.2, t3: 10.0 },
  { nom: "MUTOMBO", prenom: "David", t1: 7.5, t2: 8.0, t3: 9.0 },
]

function getMention(moy: number): string {
  if (moy >= 16) return "Tr\u00e8s Bien"
  if (moy >= 14) return "Bien"
  if (moy >= 12) return "Assez Bien"
  if (moy >= 10) return "Passable"
  return "-"
}

function getDecision(moy: number): string {
  if (moy >= 10) return "Admis(e)"
  if (moy >= 8) return "R\u00e9orient\u00e9(e)"
  return "Non admis(e)"
}

function getDecisionColor(moy: number): string {
  if (moy >= 10) return "#16a34a"
  if (moy >= 8) return "#ea580c"
  return "#dc2626"
}

const headerStyle: React.CSSProperties = {
  borderTop: "4px double #1e3a5f",
  borderBottom: "4px double #1e3a5f",
  padding: "12px 0",
  marginBottom: 24,
}

export default function PvPage() {
  const [date, setDate] = useState("")
  const [classe, setClasse] = useState("")
  const [annee, setAnnee] = useState("2025-2026")
  const [trimestre, setTrimestre] = useState("1")
  const [showPreview, setShowPreview] = useState(false)

  const elevesAvecMoyenne = eleves.map((e) => {
    const moy = (e.t1 + e.t2 + e.t3) / 3
    return { ...e, moyenne: parseFloat(moy.toFixed(2)), decision: getDecision(moy), mention: getMention(moy) }
  }).sort((a, b) => b.moyenne - a.moyenne)

  const total = elevesAvecMoyenne.length
  const admis = elevesAvecMoyenne.filter((e) => e.moyenne >= 10).length
  const reorientes = elevesAvecMoyenne.filter((e) => e.moyenne >= 8 && e.moyenne < 10).length
  const nonAdmis = elevesAvecMoyenne.filter((e) => e.moyenne < 8).length
  const tauxReussite = ((admis / total) * 100).toFixed(1)

  const dateFormatted = date ? new Date(date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" }) : "\u2026\u2026\u2026\u2026\u2026"

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
            <h1 style={{ fontSize: 24, fontWeight: 700, color: "#1e3a5f", marginBottom: 24 }}>PV de D\u00e9lib\u00e9ration</h1>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>Date de la s\u00e9ance</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, outline: "none" }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>Classe</label>
                <input type="text" value={classe} onChange={(e) => setClasse(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, outline: "none" }} placeholder="Ex: 6\u00e8me A" />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>Ann\u00e9e scolaire</label>
                <input type="text" value={annee} onChange={(e) => setAnnee(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, outline: "none" }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>Trimestre</label>
                <select value={trimestre} onChange={(e) => setTrimestre(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, outline: "none", background: "white" }}>
                  <option value="1">1er Trimestre</option>
                  <option value="2">2\u00e8me Trimestre</option>
                  <option value="3">3\u00e8me Trimestre</option>
                </select>
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
                Proc\u00e8s-Verbal de D\u00e9lib\u00e9ration
              </h1>
              <p style={{ fontSize: 13, color: "#64748b" }}>Ann\u00e9e scolaire {annee} &mdash; Trimestre {trimestre}</p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12, padding: 16, border: "1px solid #e2e8f0", borderRadius: 8, marginBottom: 24, fontSize: 12 }}>
              <div><strong style={{ color: "#1e3a5f" }}>Date :</strong> {dateFormatted}</div>
              <div><strong style={{ color: "#1e3a5f" }}>Classe :</strong> {classe || "\u2026\u2026\u2026\u2026\u2026"}</div>
              <div><strong style={{ color: "#1e3a5f" }}>Session :</strong> Trimestre {trimestre}</div>
            </div>

            <div style={{ fontSize: 12, marginBottom: 24, padding: 12, background: "#f8fafc", borderRadius: 8 }}>
              <strong style={{ color: "#1e3a5f" }}>Membres pr\u00e9sents :</strong> Dr. Jean-Pierre Mbarga (Directeur), Mme. C\u00e9lestine Ngo Biyick (Secr\u00e9taire), M. Patrice Olinga (Pr\u00e9sident du jury)
            </div>

            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, marginBottom: 24 }}>
              <thead>
                <tr style={{ background: "#1e3a5f", color: "white" }}>
                  <th style={{ padding: "8px 6px", border: "1px solid #1e3a5f", textAlign: "center" }}>Rang</th>
                  <th style={{ padding: "8px 6px", border: "1px solid #1e3a5f", textAlign: "left" }}>Nom &amp; Pr\u00e9nom</th>
                  <th style={{ padding: "8px 6px", border: "1px solid #1e3a5f", textAlign: "center" }}>Moy. /20</th>
                  <th style={{ padding: "8px 6px", border: "1px solid #1e3a5f", textAlign: "center" }}>Mention</th>
                  <th style={{ padding: "8px 6px", border: "1px solid #1e3a5f", textAlign: "center" }}>D\u00e9cision</th>
                </tr>
              </thead>
              <tbody>
                {elevesAvecMoyenne.map((e, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "#f8fafc" : "white" }}>
                    <td style={{ padding: "6px", border: "1px solid #e2e8f0", textAlign: "center", fontWeight: 700 }}>{i + 1}</td>
                    <td style={{ padding: "6px", border: "1px solid #e2e8f0" }}>{e.prenom} {e.nom}</td>
                    <td style={{ padding: "6px", border: "1px solid #e2e8f0", textAlign: "center", fontWeight: 700 }}>{e.moyenne}</td>
                    <td style={{ padding: "6px", border: "1px solid #e2e8f0", textAlign: "center", fontStyle: "italic" }}>{e.mention}</td>
                    <td style={{ padding: "6px", border: "1px solid #e2e8f0", textAlign: "center", fontWeight: 700, color: getDecisionColor(e.moyenne) }}>{e.decision}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div style={{ border: "1px solid #e2e8f0", borderRadius: 8, padding: 16, marginBottom: 24 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1e3a5f", marginBottom: 12 }}>Synth\u00e8se</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 8, textAlign: "center", fontSize: 12 }}>
                <div style={{ padding: 8, background: "#f8fafc", borderRadius: 6 }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#1e3a5f" }}>{total}</div>
                  <div style={{ fontSize: 10, color: "#64748b" }}>Total \u00e9l\u00e8ves</div>
                </div>
                <div style={{ padding: 8, background: "#f0fdf4", borderRadius: 6 }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#16a34a" }}>{admis}</div>
                  <div style={{ fontSize: 10, color: "#64748b" }}>Admis(e)s</div>
                </div>
                <div style={{ padding: 8, background: "#fff7ed", borderRadius: 6 }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#ea580c" }}>{reorientes}</div>
                  <div style={{ fontSize: 10, color: "#64748b" }}>R\u00e9orient\u00e9(e)s</div>
                </div>
                <div style={{ padding: 8, background: "#fef2f2", borderRadius: 6 }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#dc2626" }}>{nonAdmis}</div>
                  <div style={{ fontSize: 10, color: "#64748b" }}>Non admis</div>
                </div>
                <div style={{ padding: 8, background: "#ede9fe", borderRadius: 6 }}>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#7c3aed" }}>{tauxReussite}%</div>
                  <div style={{ fontSize: 10, color: "#64748b" }}>Taux r\u00e9ussite</div>
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 32, marginTop: 48, fontSize: 12 }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontWeight: 700, color: "#1e3a5f" }}>Pr\u00e9sident du jury</p>
                <div style={{ marginTop: 48, borderTop: "1px solid #94a3b8", paddingTop: 8, color: "#64748b" }}>Signature</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontWeight: 700, color: "#1e3a5f" }}>Le Directeur</p>
                <div style={{ marginTop: 48, borderTop: "1px solid #94a3b8", paddingTop: 8, color: "#64748b" }}>Signature et cachet</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontWeight: 700, color: "#1e3a5f" }}>Le Secr\u00e9taire</p>
                <div style={{ marginTop: 48, borderTop: "1px solid #94a3b8", paddingTop: 8, color: "#64748b" }}>Signature</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
