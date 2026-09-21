"use client"

import React from "react"
import { UserCog, Plus, Search } from "lucide-react"
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

const initialTeachers = [
  { id: "1", nom: "Camara", prenom: "Mamadou", specialite: "Mathematiques", email: "m.camara@epl-lumieres.cm", telephone: "+237 699 123 456" },
  { id: "2", nom: "Bah", prenom: "Mariama", specialite: "Francais", email: "m.bah@epl-lumieres.cm", telephone: "+237 677 234 567" },
  { id: "3", nom: "Keita", prenom: "Moussa", specialite: "Physique-Chimie", email: "m.keita@epl-lumieres.cm", telephone: "+237 655 345 678" },
]

export default function TeachersPage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [showAddModal, setShowAddModal] = React.useState(false)
  const [teachers, setTeachers] = React.useState(initialTeachers)
  const [form, setForm] = React.useState({ prenom: "", nom: "", specialite: "", email: "", telephone: "" })

  const filtered = teachers.filter(
    (t) =>
      t.prenom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.nom.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.specialite.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newItem = {
      id: Date.now().toString() + Math.random(),
      nom: form.nom,
      prenom: form.prenom,
      specialite: form.specialite,
      email: form.email,
      telephone: form.telephone,
    }
    setTeachers([...teachers, newItem])
    alert("Enregistré avec succès !")
    setShowAddModal(false)
    setForm({ prenom: "", nom: "", specialite: "", email: "", telephone: "" })
  }

  const handleDelete = (id: string) => {
    if (window.confirm("Voulez-vous vraiment supprimer cet enseignant ?")) {
      setTeachers(teachers.filter((t) => t.id !== id))
      alert("Supprimé !")
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <UserCog className="h-6 w-6 text-green-600" />
          Enseignants
        </h1>
        <p className="text-muted-foreground">Gestion du corps enseignant</p>
      </div>

      <div className="rounded-xl border bg-card">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{filtered.length} enseignants</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-8 rounded-lg border bg-background pl-8 pr-3 text-sm outline-none focus:ring-2 focus:ring-green-500"
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
              <TableHead>Prenom</TableHead>
              <TableHead>Specialite</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Telephone</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((teacher) => (
              <TableRow key={teacher.id}>
                <TableCell className="font-medium">{teacher.nom}</TableCell>
                <TableCell>{teacher.prenom}</TableCell>
                <TableCell>{teacher.specialite}</TableCell>
                <TableCell>{teacher.email}</TableCell>
                <TableCell>{teacher.telephone}</TableCell>
                <TableCell>
                  <button onClick={() => handleDelete(teacher.id)} className="text-red-600 hover:text-red-800 text-sm font-medium">
                    Supprimer
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Modal open={showAddModal} onClose={() => setShowAddModal(false)} title="Ajouter un enseignant">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Prenom"
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
          <input
            type="text"
            placeholder="Specialite"
            value={form.specialite}
            onChange={(e) => setForm({ ...form, specialite: e.target.value })}
            className="input-modern w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="input-modern w-full"
          />
          <input
            type="tel"
            placeholder="Telephone"
            value={form.telephone}
            onChange={(e) => setForm({ ...form, telephone: e.target.value })}
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
