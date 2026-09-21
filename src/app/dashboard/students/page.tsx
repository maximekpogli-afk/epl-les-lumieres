"use client"

import React from "react"
import { Users, Plus, Search } from "lucide-react"
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

const initialStudents = [
  { id: "1", nom: "Diallo", prenom: "Amadou", classe: "6ème A", sexe: "M", dateInscription: "01/09/2025" },
  { id: "2", nom: "Traoré", prenom: "Fatoumata", classe: "5ème B", sexe: "F", dateInscription: "01/09/2025" },
  { id: "3", nom: "Koné", prenom: "Ibrahim", classe: "4ème A", sexe: "M", dateInscription: "03/09/2025" },
  { id: "4", nom: "Touré", prenom: "Aïssatou", classe: "3ème A", sexe: "F", dateInscription: "02/09/2025" },
  { id: "5", nom: "Sylla", prenom: "Moussa", classe: "6ème B", sexe: "M", dateInscription: "01/09/2025" },
]

export default function StudentsPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [showAddModal, setShowAddModal] = React.useState(false)
  const [students, setStudents] = React.useState(initialStudents)
  const [form, setForm] = React.useState({ prenom: "", nom: "", sexe: "M", dateNaissance: "", classe: "" })

  const filtered = students.filter(
    (s) =>
      s.prenom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.nom.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newItem = {
      id: Date.now().toString() + Math.random(),
      nom: form.nom,
      prenom: form.prenom,
      classe: form.classe,
      sexe: form.sexe,
      dateInscription: form.dateNaissance || new Date().toLocaleDateString("fr-FR"),
    }
    setStudents([...students, newItem])
    alert("Enregistré avec succès !")
    setShowAddModal(false)
    setForm({ prenom: "", nom: "", sexe: "M", dateNaissance: "", classe: "" })
  }

  const handleDelete = (id: string) => {
    if (window.confirm("Voulez-vous vraiment supprimer cet élève ?")) {
      setStudents(students.filter((s) => s.id !== id))
      alert("Supprimé !")
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Users className="h-6 w-6 text-blue-600" />
          Élèves
        </h1>
        <p className="text-muted-foreground">Gestion des élèves inscrits à l&apos;EPL Les Lumières</p>
      </div>

      <div className="rounded-xl border bg-card">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{filtered.length} élèves</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-8 rounded-lg border bg-background pl-8 pr-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
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
              <TableHead>Prénom</TableHead>
              <TableHead>Classe</TableHead>
              <TableHead>Sexe</TableHead>
              <TableHead>Date inscription</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">{student.nom}</TableCell>
                <TableCell>{student.prenom}</TableCell>
                <TableCell>{student.classe}</TableCell>
                <TableCell>{student.sexe}</TableCell>
                <TableCell>{student.dateInscription}</TableCell>
                <TableCell>
                  <button onClick={() => handleDelete(student.id)} className="text-red-600 hover:text-red-800 text-sm font-medium">
                    Supprimer
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Modal open={showAddModal} onClose={() => setShowAddModal(false)} title="Ajouter un élève">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Prénom"
            value={form.prenom}
            onChange={(e) => setForm({ ...form, prenom: e.target.value })}
            className="input-modern w-full"
          />
          <input
            type="text"
            placeholder="Nom"
            value={form.nom}
            onChange={(e) => setForm({ ...form, nom: e.target.value })}
            className="input-modern w-full"
          />
          <select
            value={form.sexe}
            onChange={(e) => setForm({ ...form, sexe: e.target.value })}
            className="input-modern w-full"
          >
            <option value="M">Masculin</option>
            <option value="F">Féminin</option>
          </select>
          <input
            type="date"
            placeholder="Date de naissance"
            value={form.dateNaissance}
            onChange={(e) => setForm({ ...form, dateNaissance: e.target.value })}
            className="input-modern w-full"
          />
          <input
            type="text"
            placeholder="Classe"
            value={form.classe}
            onChange={(e) => setForm({ ...form, classe: e.target.value })}
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
