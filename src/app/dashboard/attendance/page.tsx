"use client"

import React from "react"
import { CalendarClock, Plus, Search } from "lucide-react"
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

const initialAttendance = [
  { id: "1", eleve: "Amadou Diallo", date: "20/09/2026", statut: "Present", classe: "6eme A" },
  { id: "2", eleve: "Fatoumata Traore", date: "20/09/2026", statut: "Absent", classe: "5eme B" },
  { id: "3", eleve: "Ibrahim Kone", date: "20/09/2026", statut: "Retard", classe: "4eme A" },
  { id: "4", eleve: "Aissatou Toure", date: "20/09/2026", statut: "Present", classe: "3eme A" },
  { id: "5", eleve: "Moussa Sylla", date: "20/09/2026", statut: "Present", classe: "6eme B" },
]

const statusColors: Record<string, string> = {
  "Present": "bg-green-100 text-green-700",
  "Absent": "bg-red-100 text-red-700",
  "Retard": "bg-orange-100 text-orange-700",
}

export default function AttendancePage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [showAddModal, setShowAddModal] = React.useState(false)
  const [attendance, setAttendance] = React.useState(initialAttendance)
  const [form, setForm] = React.useState({ eleve: "", date: "", statut: "Present", classe: "" })

  const filtered = attendance.filter((a) => a.eleve.toLowerCase().includes(searchQuery.toLowerCase()))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newItem = {
      id: Date.now().toString() + Math.random(),
      eleve: form.eleve,
      date: form.date || new Date().toLocaleDateString("fr-FR"),
      statut: form.statut,
      classe: form.classe,
    }
    setAttendance([...attendance, newItem])
    alert("Enregistré avec succès !")
    setShowAddModal(false)
    setForm({ eleve: "", date: "", statut: "Present", classe: "" })
  }

  const handleDelete = (id: string) => {
    if (window.confirm("Voulez-vous vraiment supprimer cette présence ?")) {
      setAttendance(attendance.filter((a) => a.id !== id))
      alert("Supprimé !")
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <CalendarClock className="h-6 w-6 text-pink-600" />
          Presences
        </h1>
        <p className="text-muted-foreground">Suivi des presences et absences des eleves</p>
      </div>

      <div className="rounded-xl border bg-card">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{filtered.length} enregistrements</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-8 rounded-lg border bg-background pl-8 pr-3 text-sm outline-none focus:ring-2 focus:ring-pink-500"
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
              <TableHead>Date</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Classe</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((row) => (
              <TableRow key={row.id}>
                <TableCell className="font-medium">{row.eleve}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${statusColors[row.statut] || "bg-gray-100 text-gray-700"}`}>
                    {row.statut}
                  </span>
                </TableCell>
                <TableCell>{row.classe}</TableCell>
                <TableCell>
                  <button onClick={() => handleDelete(row.id)} className="text-red-600 hover:text-red-800 text-sm font-medium">
                    Supprimer
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Modal open={showAddModal} onClose={() => setShowAddModal(false)} title="Ajouter une presence">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Eleve"
            value={form.eleve}
            onChange={(e) => setForm({ ...form, eleve: e.target.value })}
            className="input-modern w-full"
          />
          <input
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="input-modern w-full"
          />
          <select
            value={form.statut}
            onChange={(e) => setForm({ ...form, statut: e.target.value })}
            className="input-modern w-full"
          >
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
            <option value="Retard">Retard</option>
          </select>
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
