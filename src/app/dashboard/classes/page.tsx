"use client"

import React from "react"
import { GraduationCap, Plus, Search } from "lucide-react"
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

const initialClasses = [
  { id: "1", nom: "6eme A", niveau: "6eme", enseignant: "M. Camara", effectif: 42, annee: "2025-2026" },
  { id: "2", nom: "5eme B", niveau: "5eme", enseignant: "Mme Bah", effectif: 38, annee: "2025-2026" },
  { id: "3", nom: "4eme A", niveau: "4eme", enseignant: "M. Keita", effectif: 40, annee: "2025-2026" },
  { id: "4", nom: "3eme A", niveau: "3eme", enseignant: "Mme Diallo", effectif: 35, annee: "2025-2026" },
]

export default function ClassesPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [showAddModal, setShowAddModal] = React.useState(false)
  const [classes, setClasses] = React.useState(initialClasses)
  const [form, setForm] = React.useState({ nom: "", niveau: "", effectifMax: "", anneeScolaire: "" })

  const filtered = classes.filter((c) => c.nom.toLowerCase().includes(searchQuery.toLowerCase()))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newItem = {
      id: Date.now().toString() + Math.random(),
      nom: form.nom,
      niveau: form.niveau,
      enseignant: "",
      effectif: parseInt(form.effectifMax) || 0,
      annee: form.anneeScolaire,
    }
    setClasses([...classes, newItem])
    alert("Enregistré avec succès !")
    setShowAddModal(false)
    setForm({ nom: "", niveau: "", effectifMax: "", anneeScolaire: "" })
  }

  const handleDelete = (id: string) => {
    if (window.confirm("Voulez-vous vraiment supprimer cette classe ?")) {
      setClasses(classes.filter((c) => c.id !== id))
      alert("Supprimé !")
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <GraduationCap className="h-6 w-6 text-purple-600" />
          Classes
        </h1>
        <p className="text-muted-foreground">Gestion des classes et niveaux scolaires</p>
      </div>

      <div className="rounded-xl border bg-card">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{filtered.length} classes</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-8 rounded-lg border bg-background pl-8 pr-3 text-sm outline-none focus:ring-2 focus:ring-purple-500"
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
              <TableHead>Niveau</TableHead>
              <TableHead>Enseignant</TableHead>
              <TableHead>Effectif</TableHead>
              <TableHead>Annee</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((cls) => (
              <TableRow key={cls.id}>
                <TableCell className="font-medium">{cls.nom}</TableCell>
                <TableCell>{cls.niveau}</TableCell>
                <TableCell>{cls.enseignant}</TableCell>
                <TableCell>{cls.effectif}</TableCell>
                <TableCell>{cls.annee}</TableCell>
                <TableCell>
                  <button onClick={() => handleDelete(cls.id)} className="text-red-600 hover:text-red-800 text-sm font-medium">
                    Supprimer
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Modal open={showAddModal} onClose={() => setShowAddModal(false)} title="Ajouter une classe">
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
            placeholder="Niveau"
            value={form.niveau}
            onChange={(e) => setForm({ ...form, niveau: e.target.value })}
            className="input-modern w-full"
          />
          <input
            type="number"
            placeholder="Effectif max"
            value={form.effectifMax}
            onChange={(e) => setForm({ ...form, effectifMax: e.target.value })}
            className="input-modern w-full"
          />
          <input
            type="text"
            placeholder="Annee scolaire"
            value={form.anneeScolaire}
            onChange={(e) => setForm({ ...form, anneeScolaire: e.target.value })}
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
