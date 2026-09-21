"use client"
import React, { useState } from "react"
import Link from "next/link"

const headerStyle: React.CSSProperties = {
  borderTop: "4px double #1e3a5f",
  borderBottom: "4px double #1e3a5f",
  padding: "12px 0",
  marginBottom: 24,
}

export default function CommuniquePage() {
  const [titre, setTitre] = useState("")
  const [date, setDate] = useState("")
  const [contenu, setContenu] = useState("")
  const [categorie, setCategorie] = useState("G\u00e9n\u00e9ral")
  const [expediteur, setExpediteur] = useState("Le Directeur")
  const [showPreview, setShowPreview] = useState(false)

  const reference = `EPL/COM/${new Date().getFullYear()}/001`
  const dateFormatted = date ? new Date(date).toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" }) : "\u2026\u2026\u2026\u2026\u2026"

  const badgeColor: Record<string, string> = {
    "G\u00e9n\u00e9ral": "#1e3a5f",
    "P\u00e9dagogie": "#16a34a",
    "Financier": "#dc2626",
    "\u00c9v\u00e9nement": "#c9a84c",
  }

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
            <h1 style={{ fontSize: 24, fontWeight: 700, color: "#1e3a5f", marginBottom: 24 }}>Communiqu\u00e9 Officiel</h1>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>Titre</label>
                <input type="text" value={titre} onChange={(e) => setTitre(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, outline: "none" }} placeholder="Titre du communiqu\u00e9" />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>Date</label>
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, outline: "none" }} />
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>Cat\u00e9gorie</label>
                <select value={categorie} onChange={(e) => setCategorie(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, outline: "none", background: "white" }}>
                  <option>G\u00e9n\u00e9ral</option>
                  <option>P\u00e9dagogie</option>
                  <option>Financier</option>
                  <option>\u00c9v\u00e9nement</option>
                </select>
              </div>
              <div>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>Exp\u00e9diteur</label>
                <input type="text" value={expediteur} onChange={(e) => setExpediteur(e.target.value)} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, outline: "none" }} />
              </div>
              <div style={{ gridColumn: "1 / -1" }}>
                <label style={{ display: "block", fontSize: 13, fontWeight: 600, color: "#475569", marginBottom: 4 }}>Contenu</label>
                <textarea value={contenu} onChange={(e) => setContenu(e.target.value)} rows={5} style={{ width: "100%", padding: "10px 14px", border: "1px solid #e2e8f0", borderRadius: 8, fontSize: 14, outline: "none", resize: "vertical" }} placeholder="Contenu du communiqu\u00e9..." />
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

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 24, fontSize: 12, color: "#64748b" }}>
              <div>
                <div style={{ fontWeight: 700, color: "#1e3a5f" }}>R\u00e9f\u00e9rence : {reference}</div>
              </div>
              <div style={{ padding: "4px 12px", borderRadius: 20, background: badgeColor[categorie] || "#1e3a5f", color: "white", fontSize: 11, fontWeight: 600 }}>
                {categorie}
              </div>
            </div>

            <div style={{ textAlign: "center", marginBottom: 32, padding: "16px 0", borderBottom: "2px solid #c9a84c" }}>
              <h1 style={{ fontSize: 20, fontWeight: 700, color: "#1e3a5f", fontFamily: 'Georgia, "Times New Roman", serif', textTransform: "uppercase" }}>
                {titre || "Titre du communiqu\u00e9"}
              </h1>
              <p style={{ fontSize: 12, color: "#64748b", marginTop: 4 }}>Kinshasa, le {dateFormatted}</p>
            </div>

            <div style={{ fontSize: 13, lineHeight: 1.8, color: "#334155", marginBottom: 48, whiteSpace: "pre-wrap", fontFamily: 'Georgia, "Times New Roman", serif' }}>
              {contenu || "Contenu du communiqu\u00e9..."}
            </div>

            <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 48 }}>
              <div style={{ textAlign: "center" }}>
                <p style={{ fontSize: 13, fontWeight: 700, color: "#1e3a5f" }}>{expediteur}</p>
                <div style={{ marginTop: 48, borderTop: "1px solid #94a3b8", paddingTop: 8, fontSize: 11, color: "#64748b", width: 180 }}>Signature</div>
              </div>
            </div>

            <div style={{ textAlign: "center", marginBottom: 24 }}>
              <div style={{ width: 100, height: 100, margin: "0 auto", border: "2px dashed #cbd5e1", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 9, color: "#94a3b8" }}>
                Cachet officiel
              </div>
            </div>

            <div style={{ borderTop: "2px double #1e3a5f", paddingTop: 16, marginTop: 24 }}>
              <p style={{ fontSize: 11, fontWeight: 700, color: "#1e3a5f", marginBottom: 8 }}>Ampliations :</p>
              <ul style={{ fontSize: 10, color: "#64748b", paddingLeft: 20, lineHeight: 1.8 }}>
                <li>Direction</li>
                <li>Secr\u00e9tariat</li>
                <li>Professeurs concern\u00e9s</li>
                <li>Parents d&apos;\u00e9l\u00e8ves</li>
                <li>Affichage</li>
              </ul>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
