"use client"

import React from "react"
import { Calculator, Plus, Search } from "lucide-react"
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

const initialPayments = [
  { id: "1", eleve: "Amadou Diallo", montant: "75 000 XOF", datePaiement: "01/09/2025", statut: "Paye", annee: "2025-2026" },
  { id: "2", eleve: "Fatoumata Traore", montant: "75 000 XOF", datePaiement: "03/09/2025", statut: "Paye", annee: "2025-2026" },
  { id: "3", eleve: "Ibrahim Kone", montant: "37 500 XOF", datePaiement: "10/09/2025", statut: "Partiel", annee: "2025-2026" },
  { id: "4", eleve: "Moussa Sylla", montant: "75 000 XOF", datePaiement: "-", statut: "Impaye", annee: "2025-2026" },
]

const statusColors: Record<string, string> = {
  "Paye": "bg-green-100 text-green-700",
  "Partiel": "bg-orange-100 text-orange-700",
  "Impaye": "bg-red-100 text-red-700",
}

export default function FinancePage() {
  const [searchQuery, setSearchQuery] = React.useState("")
  const [showAddModal, setShowAddModal] = React.useState(false)
  const [payments, setPayments] = React.useState(initialPayments)
  const [form, setForm] = React.useState({ eleve: "", montant: "", datePaiement: "", statut: "Paye" })

  const filtered = payments.filter((p) => p.eleve.toLowerCase().includes(searchQuery.toLowerCase()))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const newItem = {
      id: Date.now().toString() + Math.random(),
      eleve: form.eleve,
      montant: form.montant ? `${form.montant} XOF` : "0 XOF",
      datePaiement: form.datePaiement || new Date().toLocaleDateString("fr-FR"),
      statut: form.statut,
      annee: "2025-2026",
    }
    setPayments([...payments, newItem])
    alert("Enregistré avec succès !")
    setShowAddModal(false)
    setForm({ eleve: "", montant: "", datePaiement: "", statut: "Paye" })
  }

  const handleDelete = (id: string) => {
    if (window.confirm("Voulez-vous vraiment supprimer ce paiement ?")) {
      setPayments(payments.filter((p) => p.id !== id))
      alert("Supprimé !")
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Calculator className="h-6 w-6 text-emerald-600" />
          Finances
        </h1>
        <p className="text-muted-foreground">Gestion des paiements et frais scolaires</p>
      </div>

      <div className="rounded-xl border bg-card">
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">{filtered.length} paiements</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="h-8 rounded-lg border bg-background pl-8 pr-3 text-sm outline-none focus:ring-2 focus:ring-emerald-500"
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
              <TableHead>Montant</TableHead>
              <TableHead>Date paiement</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Annee</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell className="font-medium">{payment.eleve}</TableCell>
                <TableCell>{payment.montant}</TableCell>
                <TableCell>{payment.datePaiement}</TableCell>
                <TableCell>
                  <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${statusColors[payment.statut] || "bg-gray-100 text-gray-700"}`}>
                    {payment.statut}
                  </span>
                </TableCell>
                <TableCell>{payment.annee}</TableCell>
                <TableCell>
                  <button onClick={() => handleDelete(payment.id)} className="text-red-600 hover:text-red-800 text-sm font-medium">
                    Supprimer
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Modal open={showAddModal} onClose={() => setShowAddModal(false)} title="Ajouter un paiement">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Eleve"
            value={form.eleve}
            onChange={(e) => setForm({ ...form, eleve: e.target.value })}
            className="input-modern w-full"
          />
          <input
            type="number"
            placeholder="Montant"
            value={form.montant}
            onChange={(e) => setForm({ ...form, montant: e.target.value })}
            className="input-modern w-full"
          />
          <input
            type="date"
            value={form.datePaiement}
            onChange={(e) => setForm({ ...form, datePaiement: e.target.value })}
            className="input-modern w-full"
          />
          <select
            value={form.statut}
            onChange={(e) => setForm({ ...form, statut: e.target.value })}
            className="input-modern w-full"
          >
            <option value="Paye">Paye</option>
            <option value="En attente">En attente</option>
            <option value="Annule">Annule</option>
          </select>
          <button type="submit" className="btn-primary w-full">
            Enregistrer
          </button>
        </form>
      </Modal>
    </div>
  )
}
