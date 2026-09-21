"use client"

import { Bell, UserPlus, CreditCard, AlertCircle, Users } from "lucide-react"

const notifications = [
  {
    title: "Nouvelle inscription",
    message: "Un nouvel élève a été inscrit en 6ème A.",
    date: "20/09/2026",
    icon: UserPlus,
    color: "text-blue-600",
    bg: "bg-blue-50",
    status: "Nouveau",
  },
  {
    title: "Paiement reçu",
    message: "Amadou Diallo a payé 75 000 XOF.",
    date: "19/09/2026",
    icon: CreditCard,
    color: "text-green-600",
    bg: "bg-green-50",
    status: "Traité",
  },
  {
    title: "Absence signalée",
    message: "Fatoumata Traoré est absente depuis 3 jours.",
    date: "18/09/2026",
    icon: AlertCircle,
    color: "text-orange-600",
    bg: "bg-orange-50",
    status: "En attente",
  },
  {
    title: "Réunion parents-professeurs",
    message: "Réunion prévue le 25/09/2026 à 15h00.",
    date: "17/09/2026",
    icon: Users,
    color: "text-purple-600",
    bg: "bg-purple-50",
    status: "Nouveau",
  },
]

const statusColors: Record<string, string> = {
  "Nouveau": "bg-blue-100 text-blue-700",
  "Traité": "bg-green-100 text-green-700",
  "En attente": "bg-orange-100 text-orange-700",
}

export default function NotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Bell className="h-6 w-6 text-yellow-600" />
          Notifications
        </h1>
        <p className="text-muted-foreground">Alertes et notifications de la plateforme</p>
      </div>

      <div className="space-y-3">
        {notifications.map((notif, i) => (
          <div key={i} onClick={() => alert("Notification marquée comme lue")} className="rounded-xl border bg-card p-4 flex items-start gap-4 hover:bg-muted/30 transition-colors cursor-pointer">
            <div className={`p-2.5 rounded-lg shrink-0 ${notif.bg}`}>
              <notif.icon className={`h-5 w-5 ${notif.color}`} />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-semibold text-sm">{notif.title}</h3>
                <span className={`shrink-0 inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${statusColors[notif.status] || "bg-gray-100 text-gray-700"}`}>
                  {notif.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{notif.message}</p>
              <p className="text-xs text-muted-foreground mt-2">{notif.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
