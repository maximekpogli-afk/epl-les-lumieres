"use client"

import React from "react"
import { BookOpen, Plus, Search } from "lucide-react"
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

const initialSubjects = [
  { id: "1", nom: "Mathematiques", code: "MATH01", coefficient: 4, enseignant: "M. Camara", classe: "6eme A" },
  { id: "2", nom: "Francais", code: "FRAN01", coefficient: 3, enseignant: "Mme Bah", classe: "5eme B" },
  { id: "3", nom: "Physique-Chimie", code: "PHYCH01", coefficient: 3, enseignant: "M. Keita", classe: "4eme A" },
  { id: "4", nom: "Histoire-Geographie", code: "HISGE01", coefficient: 2, enseignant: "Mme Diallo", classe: "3eme A" },
  { id: "5", nom: "Anglais", code: "ANGL01", coefficient: 2, enseignant: "M. Sylla", classe: "6eme B" },
]

export default function SubjectsPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [showAddModal, setShowAddModal] = React.useState(false)
  const [subjects, setSubjects] = React.useState(initialSubjects)
  const [form, setForm] = React.useState({ nom: "", code: "", coefficient: "", enseignant: "" })

  const filtered = subjects.filter((s) => s.nom.toLowerCase().includes(searchQuery.toLowerCase()))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newItem = {
      id: Date.now().toString() + Math.random(),
      nom: form.nom,
      code: form.code,
      coefficient: parseInt(form.coefficient) || 1,
      enseignant: form.enseignant,
      classe: "",
    }
    setSubjects([...subjects, newItem])
    alert("Enregistré avec succès !")
    setShowAddModal(false)
    setForm({ nom: "", code: "", coefficient: "", enseignant: "" })
  }

  const handleDelete = (id: string) => {
    if (window.confirm("Voulez-vous vraiment supprimer cette matière ?")) {
      setSubjects(subjects.filter((s) => s.id !== id))
      alert("Supprimé !")
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <BookOpen className="h-6 w-6 text-orange-600" />
          Matieres
        </h1>
        <p className="text-muted-foreground">Gestion des matieres et programmes</p>
      </div>

      <div className="rounded-xl border bg-card">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{filtered.length} matieres</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-8 rounded-lg border bg-background pl-8 pr-3 text-sm outline-none focus:ring-2 focus:ring-orange-500"
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
              <TableHead>Nom</TableHead>
              <TableHead>Code</TableHead>
              <TableHead>Coefficient</TableHead>
              <TableHead>Enseignant</TableHead>
              <TableHead>Classe</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((subject) => (
              <TableRow key={subject.id}>
                <TableCell className="font-medium">{subject.nom}</TableCell>
                <TableCell>{subject.code}</TableCell>
                <TableCell>{subject.coefficient}</TableCell>
                <TableCell>{subject.enseignant}</TableCell>
                <TableCell>{subject.classe}</TableCell>
                <TableCell>
                  <button onClick={() => handleDelete(subject.id)} className="text-red-600 hover:text-red-800 text-sm font-medium">
                    Supprimer
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Modal open={showAddModal} onClose={() => setShowAddModal(false)} title="Ajouter une matiere">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Nom"
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
            className="input-modern w-full"
          />
          <input
            type="text"
            placeholder="Code"
            value={form.code}
            onChange={(e) => setForm({ ...form, code: e.target.value })}
            className="input-modern w-full"
          />
          <input
            type="number"
            placeholder="Coefficient"
            value={form.coefficient}
            onChange={(e) => setForm({ ...form, coefficient: e.target.value })}
            className="input-modern w-full"
          />
          <input
            type="text"
            placeholder="Enseignant assigne"
            value={form.enseignant}
            onChange={(e) => setForm({ ...form, enseignant: e.target.value })}
            className="input-modern w-full"
          />
          <button type="submit" className="btn-primary w-full">
            Enregistrer
          </button>
        </form>
      </Modal>
    </div>
  )
}
