"use client"

import { BarChart3, TrendingUp, Users, GraduationCap, CalendarClock, Clock } from "lucide-react"

const stats = [
  { title: "Moyenne générale", value: "13.5/20", icon: TrendingUp, color: "text-blue-600", bg: "bg-blue-50" },
  { title: "Taux de réussite", value: "87%", icon: GraduationCap, color: "text-green-600", bg: "bg-green-50" },
  { title: "Absences ce mois", value: "24", icon: CalendarClock, color: "text-orange-600", bg: "bg-orange-50" },
  { title: "Inscriptions totales", value: "155", icon: Users, color: "text-purple-600", bg: "bg-purple-50" },
]

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <BarChart3 className="h-6 w-6 text-teal-600" />
          Rapports
        </h1>
        <p className="text-muted-foreground">Statistiques et rapports de l&apos;établissement</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat, i) => (
          <div key={i} className="rounded-xl border bg-card p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              </div>
              <div className={`p-3 rounded-lg ${stat.bg}`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-xl border bg-card p-8">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
            <Clock className="h-8 w-8 text-muted-foreground" />
          </div>
          <h3 className="text-lg font-semibold">Rapports détaillés</h3>
          <p className="text-sm text-muted-foreground mt-2 max-w-md">
            La génération de rapports détaillés (bulletins, statistiques par classe, graphiques)
            sera disponible prochainement.
          </p>
        </div>
      </div>
    </div>
  )
}
