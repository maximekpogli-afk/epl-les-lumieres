"use client"

import React from "react"
import { FileText, Plus, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Modal } from "@/components/ui/modal"

const initialGrades = [
  { id: "1", eleve: "Amadou Diallo", matiere: "Mathematiques", note: 16, trimestre: "T1", date: "15/10/2025" },
  { id: "2", eleve: "Fatoumata Traore", matiere: "Francais", note: 14, trimestre: "T1", date: "16/10/2025" },
  { id: "3", eleve: "Ibrahim Kone", matiere: "Physique-Chimie", note: 12, trimestre: "T1", date: "17/10/2025" },
  { id: "4", eleve: "Aissatou Toure", matiere: "Histoire-Geographie", note: 18, trimestre: "T1", date: "15/10/2025" },
  { id: "5", eleve: "Moussa Sylla", matiere: "Anglais", note: 15, trimestre: "T1", date: "16/10/2025" },
]

export default function GradesPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [showAddModal, setShowAddModal] = React.useState(false)
  const [grades, setGrades] = React.useState(initialGrades)
  const [form, setForm] = React.useState({ eleve: "", matiere: "", note: "", trimestre: "T1" })

  const filtered = grades.filter(
    (g) =>
      g.eleve.toLowerCase().includes(searchQuery.toLowerCase()) ||
      g.matiere.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newItem = {
      id: Date.now().toString() + Math.random(),
      eleve: form.eleve,
      matiere: form.matiere,
      note: parseFloat(form.note) || 0,
      trimestre: form.trimestre,
      date: new Date().toLocaleDateString("fr-FR"),
    }
    setGrades([...grades, newItem])
    alert("Enregistré avec succès !")
    setShowAddModal(false)
    setForm({ eleve: "", matiere: "", note: "", trimestre: "T1" })
  }

  const handleDelete = (id: string) => {
    if (window.confirm("Voulez-vous vraiment supprimer cette note ?")) {
      setGrades(grades.filter((g) => g.id !== id))
      alert("Supprimé !")
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <FileText className="h-6 w-6 text-indigo-600" />
          Notes
        </h1>
        <p className="text-muted-foreground">Gestion des notes et evaluations des eleves</p>
      </div>

      <div className="rounded-xl border bg-card">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{filtered.length} notes</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-8 rounded-lg border bg-background pl-8 pr-3 text-sm outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <Button size="sm" onClick={() => setShowAddModal(true)}>
              <Plus className="h-4 w-4 mr-1" />
              Ajouter
            </Button>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Eleve</TableHead>
              <TableHead>Matiere</TableHead>
              <TableHead>Note/20</TableHead>
              <TableHead>Trimestre</TableHead>
              <TableHead>Date</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((grade) => (
              <TableRow key={grade.id}>
                <TableCell className="font-medium">{grade.eleve}</TableCell>
                <TableCell>{grade.matiere}</TableCell>
                <TableCell>
                  <span className={`font-semibold ${grade.note >= 14 ? "text-green-600" : grade.note >= 10 ? "text-orange-600" : "text-red-600"}`}>
                    {grade.note}/20
                  </span>
                </TableCell>
                <TableCell>{grade.trimestre}</TableCell>
                <TableCell>{grade.date}</TableCell>
                <TableCell>
                  <button onClick={() => handleDelete(grade.id)} className="text-red-600 hover:text-red-800 text-sm font-medium">
                    Supprimer
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Modal open={showAddModal} onClose={() => setShowAddModal(false)} title="Ajouter une note">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Eleve"
            value={form.eleve}
            onChange={(e) => setForm({ ...form, eleve: e.target.value })}
            className="input-modern w-full"
          />
          <input
            type="text"
            placeholder="Matiere"
            value={form.matiere}
            onChange={(e) => setForm({ ...form, matiere: e.target.value })}
            className="input-modern w-full"
          />
          <input
            type="number"
            placeholder="Note /20"
            min="0"
            max="20"
            value={form.note}
            onChange={(e) => setForm({ ...form, note: e.target.value })}
            className="input-modern w-full"
          />
          <select
            value={form.trimestre}
            onChange={(e) => setForm({ ...form, trimestre: e.target.value })}
            className="input-modern w-full"
          >
            <option value="T1">Trimestre 1</option>
            <option value="T2">Trimestre 2</option>
            <option value="T3">Trimestre 3</option>
          </select>
          <button type="submit" className="btn-primary w-full">
            Enregistrer
          </button>
        </form>
      </Modal>
    </div>
  )
}
