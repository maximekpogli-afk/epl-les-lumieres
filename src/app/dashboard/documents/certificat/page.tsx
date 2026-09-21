"use client"
import React, { useState } from "react"
import Link from "next/link"

const headerStyle: React.CSSProperties = {
  borderTop: "4px double #1e3a5f",
  borderBottom: "4px double #1e3a5f",
  padding: "12px 0",
  marginBottom: 24,
}

export default function CertificatPage() {
  const [eleve, setEleve] = useState("")
  const [dateNaissance, setDateNaissance] = useState("")
  const [lieuNaissance, setLieuNaissance] = useState("")
  const [classe, setClasse] = useState("")
  const [annee, setAnnee] = useState("2025-2026")
  const [sexe, setSexe] = useState("M")
  const [showPreview, setShowPreview] = useState(false)

  const dateFormatted = dateNaissance
    ? new Date(dateNaissance).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })
    : "\u2026\u2026\u2026\u2026\u2026"
  const dateJour = new Date().toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" })
  const regNumber = `EPL/SCOL/${new Date().getFullYear()}-${String(Math.floor(Math.random() * 9999) + 1).padStart(4, "0")}`

  const ilElle = sexe === "M" ? "il" : "elle"
  const inscritE = sexe === "M" ? "inscrit" : "inscrite"
  const neE = sexe === "M" ? "n\u00e9" : "n\u00e9e"
  const soussigneE = sexe === "M" ? "soussign\u00e9" : "soussign\u00e9e"
  const interestedE = sexe === "M" ? "int\u00e9ress\u00e9" : "int\u00e9ress\u00e9e"

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
            <h1 style={{ fontSize: 24, fontWeight: 700, color: "#1e3a5f", marginBottom: 24 }}>Certificat de Scolarit\u00e9</h1>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>\u00c9l\u00e8ve (Nom et pr\u00e9nom)</label>
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
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>Sexe</label>
                <select value={sexe} onChange={(e) => setSexe(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, outline: "none", background: "white" }}>
                  <option value="M">Masculin</option>
                  <option value="F">F\u00e9minin</option>
                </select>
              </div>
              <div>
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

            <div style={{ textAlign: "center", marginBottom: 32, padding: "16px 0" }}>
              <div style={{ display: "inline-block", padding: "8px 24px", border: "2px solid #c9a84c", borderRadius: 4 }}>
                <h1 style={{ fontSize: 22, fontWeight: 700, color: "#1e3a5f", fontFamily: 'Georgia, "Times New Roman", serif', textTransform: "uppercase", margin: 0 }}>
                  Certificat de Scolarit\u00e9
                </h1>
              </div>
              <p style={{ fontSize: 11, color: "#94a3b8", marginTop: 8 }}>N\u00b0 {regNumber}</p>
            </div>

            <div style={{ fontSize: 13, lineHeight: 2, color: "#334155", fontFamily: 'Georgia, "Times New Roman", serif', textAlign: "justify" }}>
              <p style={{ marginBottom: 16 }}>
                Je {soussigneE}(e), <strong style={{ color: "#1e3a5f" }}>Dr. Jean-Pierre Mbarga</strong>, Directeur de l&apos;<strong style={{ color: "#1e3a5f" }}>\u00c9cole Priv\u00e9e Libre Les Lumi\u00e8res</strong>,
                certifie que :
              </p>

              <div style={{ padding: 20, border: "1px solid #e2e8f0", borderRadius: 8, background: "#f8fafc", marginBottom: 16, marginLeft: 24 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, fontSize: 13 }}>
                  <div><strong style={{ color: "#1e3a5f" }}>Nom et Pr\u00e9nom :</strong> {eleve || "\u2026\u2026\u2026\u2026\u2026"}</div>
                  <div><strong style={{ color: "#1e3a5f" }}>{neE.charAt(0).toUpperCase() + neE.slice(1)}(e) le :</strong> {dateFormatted}</div>
                  <div><strong style={{ color: "#1e3a5f" }}>\u00e0 :</strong> {lieuNaissance || "\u2026\u2026\u2026\u2026\u2026"}</div>
                  <div><strong style={{ color: "#1e3a5f" }}>Classe :</strong> {classe || "\u2026\u2026\u2026\u2026\u2026"}</div>
                </div>
              </div>

              <p style={{ marginBottom: 16 }}>
                {ilElle.charAt(0).toUpperCase() + ilElle.slice(1)} est r\u00e9guli\u00e8rement {inscritE}({sexe === "F" ? "e" : ""}) en classe de <strong style={{ color: "#1e3a5f" }}>{classe || "\u2026\u2026\u2026"}</strong> pour l&apos;ann\u00e9e scolaire <strong style={{ color: "#1e3a5f" }}>{annee}</strong> et jouit d&apos;une bonne conduite et d&apos;un bon caract\u00e8re.
              </p>

              <p style={{ marginBottom: 32 }}>
                Le pr\u00e9sent certificat est d\u00e9livr\u00e9 \u00e0 l&apos;{interestedE}(e) pour servir et valoir ce que de droit.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, fontSize: 12 }}>
              <div>
                <p style={{ color: "#64748b" }}>Fait \u00e0 Kinshasa, le {dateJour}</p>
              </div>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontWeight: 700, color: "#1e3a5f" }}>Le Directeur</p>
                <div style={{ marginTop: 48, borderTop: "1px solid #94a3b8", paddingTop: 8, color: "#64748b" }}>Signature et cachet</div>
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
