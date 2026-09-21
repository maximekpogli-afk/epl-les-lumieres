"use client"

import { Search, Bell, Moon, Sun, ChevronDown } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import { useRouter } from "next/navigation"
import { ROLES } from "@/lib/constants"
import { cn } from "@/lib/utils"
import { useState } from "react"

export function Header() {
  const auth = useAuth()
  const profile = auth?.profile
  const router = useRouter()
  const [darkMode, setDarkMode] = useState(false)
  const [showNotifs, setShowNotifs] = useState(false)
  const [showProfile, setShowProfile] = useState(false)

  return (
    <header className="h-18 border-b border-surface-200/80 flex items-center justify-between px-8 bg-white/70 backdrop-blur-xl sticky top-0 z-20">
      <div className="flex items-center gap-4 flex-1 max-w-lg">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un élève, classe, matière..."
            className="w-full pl-11 pr-4 py-2.5 bg-surface-50 border border-surface-200 rounded-xl text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-400 transition-all"
          />
          <kbd className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-gray-400 bg-white border border-surface-200 rounded px-1.5 py-0.5 font-mono">⌘K</kbd>
        </div>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          className="relative inline-flex items-center justify-center h-10 w-10 rounded-xl hover:bg-surface-100 transition-colors text-gray-500"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
        </button>

        <div className="relative">
          <button
            type="button"
            className="relative inline-flex items-center justify-center h-10 w-10 rounded-xl hover:bg-surface-100 transition-colors text-gray-500"
            onClick={() => { setShowNotifs(!showNotifs); setShowProfile(false) }}
          >
            <Bell className="h-[18px] w-[18px]" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-red-500 rounded-full ring-2 ring-white" />
          </button>
          {showNotifs && (
            <div className="absolute right-0 top-12 w-80 bg-white rounded-2xl shadow-float border border-surface-100 overflow-hidden animate-slide-up z-50">
              <div className="px-4 py-3 border-b border-surface-100 flex items-center justify-between">
                <span className="text-sm font-semibold text-gray-900">Notifications</span>
                <span className="badge-info text-[10px]">3 nouvelles</span>
              </div>
              <div className="max-h-64 overflow-y-auto">
                {[
                  { text: "Nouvelle inscription", sub: "Kofi Mensah - CM2", time: "il y a 5 min", color: "bg-blue-500" },
                  { text: "Paiement reçu", sub: "150 000 FCFA - Ayuba Diallo", time: "il y a 1h", color: "bg-emerald-500" },
                  { text: "Alerte absences", sub: "12 élèves absents aujourd'hui", time: "il y a 2h", color: "bg-amber-500" },
                ].map((n, i) => (
                  <div key={i} onClick={() => alert("Notification lue")} className="flex items-start gap-3 px-4 py-3 hover:bg-surface-50 transition-colors cursor-pointer border-b border-surface-50 last:border-0">
                    <div className={cn("w-2 h-2 rounded-full mt-1.5 shrink-0", n.color)} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900">{n.text}</p>
                      <p className="text-xs text-gray-500 truncate">{n.sub}</p>
                    </div>
                    <span className="text-[10px] text-gray-400 whitespace-nowrap">{n.time}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="relative">
          <button
            type="button"
            className="flex items-center gap-3 pl-2 pr-3 py-1.5 rounded-xl hover:bg-surface-100 transition-colors"
            onClick={() => { setShowProfile(!showProfile); setShowNotifs(false) }}
          >
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-brand-500 to-brand-600 flex items-center justify-center text-white text-sm font-bold shadow-md shadow-brand-500/20">
              {profile?.first_name?.[0] || profile?.last_name?.[0] || "U"}
            </div>
            <div className="hidden md:block text-left">
              <p className="text-sm font-semibold text-gray-900 leading-tight">
                {profile?.first_name} {profile?.last_name}
              </p>
              <p className="text-[11px] text-gray-400">
                {profile?.role ? ROLES[profile.role] : ""}
              </p>
            </div>
            <ChevronDown className="h-4 w-4 text-gray-400" />
          </button>
          {showProfile && (
            <div className="absolute right-0 top-12 w-56 bg-white rounded-2xl shadow-float border border-surface-100 overflow-hidden animate-slide-up z-50">
              <div className="p-2">
                {[
                  { label: "Mon profil", icon: "👤", onClick: () => router.push("/dashboard/settings") },
                  { label: "Paramètres", icon: "⚙️", onClick: () => router.push("/dashboard/settings") },
                  { label: "Aide", icon: "❓", onClick: () => alert("Aide : contactez support@epl-lumieres.local") },
                ].map((item, i) => (
                  <button key={i} onClick={item.onClick} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-700 hover:bg-surface-50 transition-colors">
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                  </button>
                ))}
              </div>
              <div className="p-2 border-t border-surface-100">
                <button onClick={() => auth?.signOut()} className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-600 hover:bg-red-50 transition-colors">
                  <span>🚪</span>
                  <span>Déconnexion</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
