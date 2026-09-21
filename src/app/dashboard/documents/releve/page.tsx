"use client"
import React, { useState } from "react"
import Link from "next/link"

const matieres = ["Fran\u00e7ais", "Math\u00e9matiques", "Anglais", "Histoire-G\u00e9o", "Sciences", "EPS", "Arts Plastiques", "Informatique"]
const notesT1 = [14, 15, 13, 15, 12, 17, 14, 18]
const notesT2 = [15, 17, 12, 14, 13, 16, 15, 17]
const notesT3 = [14, 16, 14, 16, 14, 18, 16, 19]
const coeffs = [3, 4, 2, 3, 3, 2, 1, 2]

function calculerMoyenne(notes: number[]): string {
  let total = 0
  let totalCoeff = 0
  notes.forEach((n, i) => { total += n * coeffs[i]; totalCoeff += coeffs[i] })
  return (total / totalCoeff).toFixed(2)
}

function getDecision(moy: string): string {
  return parseFloat(moy) >= 10 ? "Admis(e)" : "Non admis(e)"
}

const headerStyle: React.CSSProperties = {
  borderTop: "4px double #1e3a5f",
  borderBottom: "4px double #1e3a5f",
  padding: "12px 0",
  marginBottom: 24,
}

export default function RelevePage() {
  const [eleve, setEleve] = useState("")
  const [dateNaissance, setDateNaissance] = useState("")
  const [lieuNaissance, setLieuNaissance] = useState("")
  const [classe, setClasse] = useState("")
  const [annee, setAnnee] = useState("2025-2026")
  const [showPreview, setShowPreview] = useState(false)

  const mT1 = calculerMoyenne(notesT1)
  const mT2 = calculerMoyenne(notesT2)
  const mT3 = calculerMoyenne(notesT3)
  const moyenneGenerale = ((parseFloat(mT1) + parseFloat(mT2) + parseFloat(mT3)) / 3).toFixed(2)

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
            <h1 style={{ fontSize: 24, fontWeight: 700, color: "#1e3a5f", marginBottom: 24 }}>Relev\u00e9 de Notes</h1>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>El\u00e8ve</label>
                <input type="text" value={eleve} onChange={(e) => setEleve(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, outline: "none" }} placeholder="Nom et pr\u00e9nom" />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>Date de naissance</label>
                <input type="date" value={dateNaissance} onChange={(e) => setDateNaissance(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, outline: "none" }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>Lieu de naissance</label>
                <input type="text" value={lieuNaissance} onChange={(e) => setLieuNaissance(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, outline: "none" }} placeholder="Ville, Pays" />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>Classe</label>
                <input type="text" value={classe} onChange={(e) => setClasse(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, outline: "none" }} placeholder="Ex: 6\u00e8me A" />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>Ann\u00e9e scolaire</label>
                <input type="text" value={annee} onChange={(e) => setAnnee(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, outline: "none" }} />
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
              <h1 style={{ fontSize: 20, fontWeight: 700, color: "#1e3a5f", fontFamily: 'Georgia, "Times New Roman", serif', textTransform: "uppercase", marginBottom: 4 }}>Relev\u00e9 de Notes</h1>
              <p style={{ fontSize: 13, color: "#64748b" }}>Ann\u00e9e scolaire {annee}</p>
            </div>

            <div style={{ display: "flex", gap: 20, marginBottom: 24, padding: 16, border: "1px solid #e2e8f0", borderRadius: 8 }}>
              <div style={{ width: 80, height: 100, border: "1px dashed #cbd5e1", borderRadius: 4, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#94a3b8", flexShrink: 0, textAlign: "center" }}>
                Photo de<br />l&apos;&eacute;l&egrave;ve
              </div>
              <div style={{ flex: 1, fontSize: 13, lineHeight: 1.8 }}>
                <div><strong>Nom et pr\u00e9nom :</strong> {eleve || "\u2026\u2026\u2026\u2026\u2026"}</div>
                <div><strong>N\u00e9(e) le :</strong> {dateNaissance || "\u2026\u2026\u2026\u2026\u2026"}</div>
                <div><strong>\u00e0 :</strong> {lieuNaissance || "\u2026\u2026\u2026\u2026\u2026"}</div>
                <div><strong>Classe :</strong> {classe || "\u2026\u2026\u2026\u2026\u2026"}</div>
              </div>
            </div>

            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12, marginBottom: 24 }}>
              <thead>
                <tr style={{ background: "#1e3a5f", color: "white" }}>
                  <th style={{ padding: "8px 6px", border: "1px solid #1e3a5f", textAlign: "left" }}>Mati\u00e8re</th>
                  <th style={{ padding: "8px 6px", border: "1px solid #1e3a5f", textAlign: "center" }}>1er Trim.</th>
                  <th style={{ padding: "8px 6px", border: "1px solid #1e3a5f", textAlign: "center" }}>2\u00e8me Trim.</th>
                  <th style={{ padding: "8px 6px", border: "1px solid #1e3a5f", textAlign: "center" }}>3\u00e8me Trim.</th>
                  <th style={{ padding: "8px 6px", border: "1px solid #1e3a5f", textAlign: "center" }}>Moy. Ann\u00e9e</th>
                </tr>
              </thead>
              <tbody>
                {matieres.map((m, i) => {
                  const moy = ((notesT1[i] + notesT2[i] + notesT3[i]) / 3).toFixed(1)
                  return (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#f8fafc" : "white" }}>
                      <td style={{ padding: "6px", border: "1px solid #e2e8f0", fontSize: 12 }}>{m}</td>
                      <td style={{ padding: "6px", border: "1px solid #e2e8f0", textAlign: "center" }}>{notesT1[i]}</td>
                      <td style={{ padding: "6px", border: "1px solid #e2e8f0", textAlign: "center" }}>{notesT2[i]}</td>
                      <td style={{ padding: "6px", border: "1px solid #e2e8f0", textAlign: "center" }}>{notesT3[i]}</td>
                      <td style={{ padding: "6px", border: "1px solid #e2e8f0", textAlign: "center", fontWeight: 600 }}>{moy}</td>
                    </tr>
                  )
                })}
              </tbody>
            </table>

            <div style={{ border: "1px solid #e2e8f0", borderRadius: 8, padding: 16, marginBottom: 24 }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, color: "#1e3a5f", marginBottom: 12 }}>Synth\u00e8se des Trimestres</h3>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 12 }}>
                <thead>
                  <tr style={{ background: "#f1f5f9" }}>
                    <th style={{ padding: "8px", border: "1px solid #e2e8f0", textAlign: "center" }}>Trimestre</th>
                    <th style={{ padding: "8px", border: "1px solid #e2e8f0", textAlign: "center" }}>Moyenne</th>
                    <th style={{ padding: "8px", border: "1px solid #e2e8f0", textAlign: "center" }}>D\u00e9cision</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style={{ padding: "8px", border: "1px solid #e2e8f0", textAlign: "center" }}>1er Trimestre</td>
                    <td style={{ padding: "8px", border: "1px solid #e2e8f0", textAlign: "center", fontWeight: 600 }}>{mT1}</td>
                    <td style={{ padding: "8px", border: "1px solid #e2e8f0", textAlign: "center" }}>{getDecision(mT1)}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "8px", border: "1px solid #e2e8f0", textAlign: "center" }}>2\u00e8me Trimestre</td>
                    <td style={{ padding: "8px", border: "1px solid #e2e8f0", textAlign: "center", fontWeight: 600 }}>{mT2}</td>
                    <td style={{ padding: "8px", border: "1px solid #e2e8f0", textAlign: "center" }}>{getDecision(mT2)}</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "8px", border: "1px solid #e2e8f0", textAlign: "center" }}>3\u00e8me Trimestre</td>
                    <td style={{ padding: "8px", border: "1px solid #e2e8f0", textAlign: "center", fontWeight: 600 }}>{mT3}</td>
                    <td style={{ padding: "8px", border: "1px solid #e2e8f0", textAlign: "center" }}>{getDecision(mT3)}</td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr style={{ background: "#1e3a5f", color: "white" }}>
                    <td style={{ padding: "8px", border: "1px solid #1e3a5f", textAlign: "center", fontWeight: 700 }}>Moyenne G\u00e9n\u00e9rale</td>
                    <td style={{ padding: "8px", border: "1px solid #1e3a5f", textAlign: "center", fontWeight: 700 }}>{moyenneGenerale}</td>
                    <td style={{ padding: "8px", border: "1px solid #1e3a5f", textAlign: "center", fontWeight: 700 }}>{getDecision(moyenneGenerale)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            <div style={{ marginTop: 32, textAlign: "center", fontSize: 11, color: "#64748b" }}>
              <p>Ce relev\u00e9 comporte 1 page. &laquo; Fait pour servir et valoir ce que de droit. &raquo;</p>
              <div style={{ marginTop: 24 }}>
                <p style={{ fontSize: 11, marginBottom: 4 }}>Cachet de l&apos;\u00e9tablissement</p>
                <div style={{ width: 100, height: 100, margin: "0 auto", border: "2px dashed #cbd5e1", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#94a3b8" }}>
                  Cachet officiel
                </div>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, marginTop: 32, fontSize: 12 }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontWeight: 700, color: "#1e3a5f" }}>Le Directeur</p>
                <div style={{ marginTop: 48, borderTop: "1px solid #94a3b8", paddingTop: 8 }}>Signature et cachet</div>
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontWeight: 700, color: "#1e3a5f" }}>Le Professeur Principal</p>
                <div style={{ marginTop: 48, borderTop: "1px solid #94a3b8", paddingTop: 8 }}>Signature</div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
