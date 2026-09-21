"use client"
import React, { useState } from "react"
import Link from "next/link"
import { FileText } from "lucide-react"

const subjects = [
  { name: "Français", coeff: 3, note: 14 },
  { name: "Mathématiques", coeff: 4, note: 16 },
  { name: "Anglais", coeff: 2, note: 13 },
  { name: "Histoire-Géographie", coeff: 3, note: 15 },
  { name: "Sciences", coeff: 3, note: 12 },
  { name: "EPS", coeff: 2, note: 17 },
  { name: "Arts Plastiques", coeff: 1, note: 14 },
  { name: "Informatique", coeff: 2, note: 18 },
]

function getAppreciation(note: number): string {
  if (note >= 16) return "Très bien"
  if (note >= 14) return "Bien"
  if (note >= 12) return "Assez bien"
  if (note >= 10) return "Passable"
  return "Insuffisant"
}

function getMention(moyenne: number): string {
  if (moyenne >= 16) return "Félicitations"
  if (moyenne >= 14) return "Encouragements"
  if (moyenne >= 12) return "Travail satisfaisant"
  return "Doit-faire des efforts"
}

function getNoteColor(note: number): string {
  if (note >= 16) return "#16a34a"
  if (note >= 14) return "#2563eb"
  if (note >= 12) return "#ea580c"
  if (note < 10) return "#dc2626"
  return "#374151"
}

export default function BulletinPage() {
  const [eleve, setEleve] = useState("")
  const [classe, setClasse] = useState("")
  const [annee, setAnnee] = useState("2025-2026")
  const [trimestre, setTrimestre] = useState("1")
  const [showPreview, setShowPreview] = useState(false)

  const totalCoeffs = subjects.reduce((acc, s) => acc + s.coeff, 0)
  const totalPoints = subjects.reduce((acc, s) => acc + s.note * s.coeff, 0)
  const moyenne = (totalPoints / totalCoeffs).toFixed(2)

  const trimestreLabel =
    trimestre === "1"
      ? "1er Trimestre"
      : trimestre === "2"
        ? "2ème Trimestre"
        : "3ème Trimestre"

  const mention = getMention(parseFloat(moyenne))
  const decision = parseFloat(moyenne) >= 10 ? "Admis(e)" : "Non admis(e)"

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "10px 14px",
    border: "1px solid #d1d5db",
    borderRadius: "8px",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.2s, box-shadow 0.2s",
    backgroundColor: "#fff",
  }

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "13px",
    fontWeight: 600,
    color: "#374151",
    marginBottom: "6px",
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f1f5f9", padding: "24px" }}>
      <style>{`
        @media print {
          body * { visibility: hidden !important; }
          .print-document, .print-document * { visibility: visible !important; }
          .print-document { position: absolute; left: 0; top: 0; width: 100%; box-shadow: none !important; margin: 0 !important; }
          .no-print { display: none !important; }
        }
      `}</style>

      {/* Form Section */}
      {!showPreview && (
        <div className="no-print" style={{ maxWidth: "640px", margin: "0 auto" }}>
          <div
            style={{
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)",
              padding: "32px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
              <FileText size={24} color="#1e3a5f" />
              <h1 style={{ fontSize: "22px", fontWeight: 700, color: "#1e3a5f", margin: 0 }}>
                Générer un Bulletin Scolaire
              </h1>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px", marginBottom: "24px" }}>
              <div>
                <label style={labelStyle}>Élève</label>
                <input
                  type="text"
                  value={eleve}
                  onChange={(e) => setEleve(e.target.value)}
                  placeholder="Nom et prénom"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#1e3a5f"
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(30,58,95,0.1)"
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#d1d5db"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                />
              </div>
              <div>
                <label style={labelStyle}>Classe</label>
                <input
                  type="text"
                  value={classe}
                  onChange={(e) => setClasse(e.target.value)}
                  placeholder="Ex: 6ème A"
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#1e3a5f"
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(30,58,95,0.1)"
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#d1d5db"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                />
              </div>
              <div>
                <label style={labelStyle}>Année scolaire</label>
                <input
                  type="text"
                  value={annee}
                  onChange={(e) => setAnnee(e.target.value)}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#1e3a5f"
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(30,58,95,0.1)"
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#d1d5db"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                />
              </div>
              <div>
                <label style={labelStyle}>Trimestre</label>
                <select
                  value={trimestre}
                  onChange={(e) => setTrimestre(e.target.value)}
                  style={inputStyle}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = "#1e3a5f"
                    e.currentTarget.style.boxShadow = "0 0 0 3px rgba(30,58,95,0.1)"
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "#d1d5db"
                    e.currentTarget.style.boxShadow = "none"
                  }}
                >
                  <option value="1">1er Trimestre</option>
                  <option value="2">2ème Trimestre</option>
                  <option value="3">3ème Trimestre</option>
                </select>
              </div>
            </div>

            <div style={{ display: "flex", gap: "12px" }}>
              <Link
                href="/dashboard/documents"
                style={{
                  flex: 1,
                  padding: "10px 20px",
                  backgroundColor: "transparent",
                  border: "1px solid #d1d5db",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: "#374151",
                  cursor: "pointer",
                  textAlign: "center",
                  textDecoration: "none",
                  transition: "background-color 0.2s",
                }}
              >
                Retour
              </Link>
              <button
                onClick={() => setShowPreview(true)}
                style={{
                  flex: 1,
                  padding: "10px 20px",
                  backgroundColor: "#1e3a5f",
                  color: "#fff",
                  border: "none",
                  borderRadius: "8px",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  transition: "background-color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#162d4a")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#1e3a5f")}
              >
                Générer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Document Preview */}
      {showPreview && (
        <>
          <div
            className="no-print"
            style={{
              maxWidth: "794px",
              margin: "0 auto 24px",
              display: "flex",
              gap: "12px",
            }}
          >
            <button
              onClick={() => setShowPreview(false)}
              style={{
                flex: 1,
                padding: "10px 20px",
                backgroundColor: "#1e3a5f",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Modifier
            </button>
            <button
              onClick={() => window.print()}
              style={{
                flex: 1,
                padding: "10px 20px",
                backgroundColor: "#16a34a",
                color: "#fff",
                border: "none",
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: 600,
                cursor: "pointer",
              }}
            >
              Imprimer / Télécharger PDF
            </button>
          </div>

          <div
            className="print-document"
            style={{
              maxWidth: "794px",
              margin: "0 auto",
              backgroundColor: "#fff",
              boxShadow: "0 4px 24px rgba(0,0,0,0.15)",
              padding: "48px",
              fontFamily: "Georgia, 'Times New Roman', serif",
            }}
          >
            {/* Official Header */}
            <div style={{ borderTop: "3px double #1e3a5f", paddingTop: "16px", marginBottom: "8px" }}>
              <div style={{ textAlign: "center", marginBottom: "4px" }}>
                <div style={{ fontSize: "16px", fontWeight: 700, color: "#1e3a5f", letterSpacing: "0.5px" }}>
                  ÉCOLE PRIVÉE LIBRE LES LUMIÈRES
                </div>
                <div style={{ fontSize: "12px", fontStyle: "italic", color: "#b8860b", marginTop: "2px" }}>
                  &laquo; Excellence et Lumière &raquo;
                </div>
              </div>
              <div style={{ textAlign: "center", fontSize: "10px", color: "#6b7280", marginTop: "4px" }}>
                BP 1234 — Kinshasa, RDC | Tél: +243 81 234 5678 | Email: info@epl-lumieres.cd
              </div>
            </div>
            <div style={{ borderBottom: "3px double #1e3a5f", marginBottom: "24px" }} />

            {/* Title */}
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
                <div style={{ flex: 1, height: "1px", backgroundColor: "#1e3a5f" }} />
                <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#1e3a5f", margin: 0, letterSpacing: "1px" }}>
                  BULLETIN SCOLAIRE
                </h2>
                <div style={{ flex: 1, height: "1px", backgroundColor: "#1e3a5f" }} />
              </div>
              <p style={{ fontSize: "13px", color: "#6b7280", marginTop: "6px" }}>
                Année scolaire {annee} — {trimestreLabel}
              </p>
            </div>

            {/* Student Info Box */}
            <div
              style={{
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                padding: "16px",
                marginBottom: "24px",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", fontSize: "13px" }}>
                <div><strong style={{ color: "#1e3a5f" }}>Élève :</strong> {eleve || "................................"}</div>
                <div><strong style={{ color: "#1e3a5f" }}>Classe :</strong> {classe || "................................"}</div>
                <div><strong style={{ color: "#1e3a5f" }}>Année scolaire :</strong> {annee}</div>
                <div><strong style={{ color: "#1e3a5f" }}>Trimestre :</strong> {trimestreLabel}</div>
              </div>
            </div>

            {/* Grades Table */}
            <table
              style={{
                width: "100%",
                borderCollapse: "collapse",
                marginBottom: "24px",
                fontSize: "12px",
              }}
            >
              <thead>
                <tr>
                  <th
                    style={{
                      backgroundColor: "#1e3a5f",
                      color: "#fff",
                      padding: "10px 12px",
                      textAlign: "left",
                      fontWeight: 600,
                      border: "1px solid #162d4a",
                    }}
                  >
                    Matière
                  </th>
                  <th
                    style={{
                      backgroundColor: "#1e3a5f",
                      color: "#fff",
                      padding: "10px 12px",
                      textAlign: "center",
                      fontWeight: 600,
                      border: "1px solid #162d4a",
                    }}
                  >
                    Coefficient
                  </th>
                  <th
                    style={{
                      backgroundColor: "#1e3a5f",
                      color: "#fff",
                      padding: "10px 12px",
                      textAlign: "center",
                      fontWeight: 600,
                      border: "1px solid #162d4a",
                    }}
                  >
                    Note /20
                  </th>
                  <th
                    style={{
                      backgroundColor: "#1e3a5f",
                      color: "#fff",
                      padding: "10px 12px",
                      textAlign: "left",
                      fontWeight: 600,
                      border: "1px solid #162d4a",
                    }}
                  >
                    Appréciation
                  </th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((s, i) => (
                  <tr key={i}>
                    <td
                      style={{
                        padding: "9px 12px",
                        border: "1px solid #e5e7eb",
                        backgroundColor: i % 2 === 0 ? "#fff" : "#f0f4ff",
                      }}
                    >
                      {s.name}
                    </td>
                    <td
                      style={{
                        padding: "9px 12px",
                        textAlign: "center",
                        border: "1px solid #e5e7eb",
                        backgroundColor: i % 2 === 0 ? "#fff" : "#f0f4ff",
                      }}
                    >
                      {s.coeff}
                    </td>
                    <td
                      style={{
                        padding: "9px 12px",
                        textAlign: "center",
                        border: "1px solid #e5e7eb",
                        backgroundColor: i % 2 === 0 ? "#fff" : "#f0f4ff",
                        color: getNoteColor(s.note),
                        fontWeight: 700,
                      }}
                    >
                      {s.note}
                    </td>
                    <td
                      style={{
                        padding: "9px 12px",
                        border: "1px solid #e5e7eb",
                        backgroundColor: i % 2 === 0 ? "#fff" : "#f0f4ff",
                      }}
                    >
                      {getAppreciation(s.note)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td
                    style={{
                      backgroundColor: "#1e3a5f",
                      color: "#fff",
                      padding: "10px 12px",
                      fontWeight: 700,
                      border: "1px solid #162d4a",
                    }}
                  >
                    Moyenne Générale
                  </td>
                  <td
                    style={{
                      backgroundColor: "#1e3a5f",
                      color: "#fff",
                      padding: "10px 12px",
                      textAlign: "center",
                      fontWeight: 700,
                      border: "1px solid #162d4a",
                    }}
                  >
                    {totalCoeffs}
                  </td>
                  <td
                    style={{
                      backgroundColor: "#1e3a5f",
                      color: "#fff",
                      padding: "10px 12px",
                      textAlign: "center",
                      fontWeight: 700,
                      border: "1px solid #162d4a",
                    }}
                  >
                    {moyenne}
                  </td>
                  <td
                    style={{
                      backgroundColor: "#1e3a5f",
                      color: "#fff",
                      padding: "10px 12px",
                      fontWeight: 700,
                      border: "1px solid #162d4a",
                    }}
                  >
                    {mention}
                  </td>
                </tr>
              </tfoot>
            </table>

            {/* Mention / Decision Box */}
            <div
              style={{
                border: "1px solid #d1d5db",
                borderRadius: "8px",
                padding: "16px",
                marginBottom: "24px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "8px",
                fontSize: "13px",
              }}
            >
              <div>
                <strong style={{ color: "#1e3a5f" }}>Mention :</strong>{" "}
                <span style={{ fontWeight: 700 }}>{mention}</span>
              </div>
              <div>
                <strong style={{ color: "#1e3a5f" }}>Décision :</strong>{" "}
                <span style={{ fontWeight: 700 }}>{decision}</span>
              </div>
            </div>

            {/* Signatures */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "48px",
                marginTop: "40px",
                fontSize: "12px",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div style={{ fontWeight: 700, color: "#1e3a5f", marginBottom: "40px" }}>
                  Le Directeur Principal
                </div>
                <div
                  style={{
                    borderTop: "1px solid #9ca3af",
                    paddingTop: "8px",
                    color: "#6b7280",
                    fontStyle: "italic",
                  }}
                >
                  Signature
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontWeight: 700, color: "#1e3a5f", marginBottom: "40px" }}>
                  Le Professeur Principal
                </div>
                <div
                  style={{
                    borderTop: "1px solid #9ca3af",
                    paddingTop: "8px",
                    color: "#6b7280",
                    fontStyle: "italic",
                  }}
                >
                  Signature
                </div>
              </div>
            </div>

            {/* Official Stamp Area */}
            <div style={{ textAlign: "center", marginTop: "24px" }}>
              <div
                style={{
                  display: "inline-block",
                  width: "100px",
                  height: "100px",
                  border: "2px dashed #d1d5db",
                  borderRadius: "50%",
                  lineHeight: "100px",
                  color: "#9ca3af",
                  fontSize: "10px",
                  fontStyle: "italic",
                }}
              >
                Cachet officiel
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
