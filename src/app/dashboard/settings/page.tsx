"use client"

import { useState, useEffect } from "react"
import { Settings, User, Bell, Shield, Save, Check } from "lucide-react"
import { Switch } from "@/components/ui/switch"

const STORAGE_KEY = "epl_settings"

function loadSettings() {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : null
  } catch { return null }
}

export default function SettingsPage() {
  const saved = loadSettings()
  const [notifications, setNotifications] = useState(saved?.notifications ?? true)
  const [emailAlerts, setEmailAlerts] = useState(saved?.emailAlerts ?? true)
  const [smsAlerts, setSmsAlerts] = useState(saved?.smsAlerts ?? false)
  const [twoFactor, setTwoFactor] = useState(saved?.twoFactor ?? false)
  const [darkMode, setDarkMode] = useState(saved?.darkMode ?? false)
  const [fullName, setFullName] = useState(saved?.fullName ?? "Admin EPL")
  const [email, setEmail] = useState(saved?.email ?? "admin@epl-lumieres.cm")
  const [phone, setPhone] = useState(saved?.phone ?? "")
  const [schoolName, setSchoolName] = useState(saved?.schoolName ?? "")
  const [saved2, setSaved] = useState(false)

  const handleSave = () => {
    const data = { notifications, emailAlerts, smsAlerts, twoFactor, darkMode, fullName, email, phone, schoolName }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Settings className="h-6 w-6 text-gray-600" />
          Paramètres
        </h1>
        <p className="text-muted-foreground">Configuration de votre compte et préférences</p>
      </div>

      <div className="rounded-xl border bg-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-blue-50">
            <User className="h-5 w-5 text-blue-600" />
          </div>
          <div>
            <h2 className="font-semibold">Profil</h2>
            <p className="text-sm text-muted-foreground">Informations de votre compte</p>
          </div>
        </div>
        <div className="space-y-4 pl-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium">Nom complet</label>
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 w-full h-9 rounded-lg border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full h-9 rounded-lg border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Téléphone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+237 6XX XXX XXX"
                className="mt-1 w-full h-9 rounded-lg border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Nom de l&apos;école</label>
              <input
                type="text"
                value={schoolName}
                onChange={(e) => setSchoolName(e.target.value)}
                placeholder="EPL Les Lumières"
                className="mt-1 w-full h-9 rounded-lg border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-xl border bg-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-orange-50">
            <Bell className="h-5 w-5 text-orange-600" />
          </div>
          <div>
            <h2 className="font-semibold">Notifications</h2>
            <p className="text-sm text-muted-foreground">Gérez vos préférences de notification</p>
          </div>
        </div>
        <div className="space-y-4 pl-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Notifications push</p>
              <p className="text-xs text-muted-foreground">Recevoir des notifications dans le navigateur</p>
            </div>
            <Switch checked={notifications} onCheckedChange={setNotifications} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Alertes par email</p>
              <p className="text-xs text-muted-foreground">Recevoir les alertes importantes par email</p>
            </div>
            <Switch checked={emailAlerts} onCheckedChange={setEmailAlerts} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Alertes par SMS</p>
              <p className="text-xs text-muted-foreground">Recevoir les alertes critiques par SMS</p>
            </div>
            <Switch checked={smsAlerts} onCheckedChange={setSmsAlerts} />
          </div>
        </div>
      </div>

      <div className="rounded-xl border bg-card p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-green-50">
            <Shield className="h-5 w-5 text-green-600" />
          </div>
          <div>
            <h2 className="font-semibold">Sécurité</h2>
            <p className="text-sm text-muted-foreground">Protégez votre compte</p>
          </div>
        </div>
        <div className="space-y-4 pl-10">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Authentification à deux facteurs</p>
              <p className="text-xs text-muted-foreground">Ajouter une couche de sécurité supplémentaire</p>
            </div>
            <Switch checked={twoFactor} onCheckedChange={setTwoFactor} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Mode sombre</p>
              <p className="text-xs text-muted-foreground">Activer le thème sombre</p>
            </div>
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={handleSave}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
            saved2
              ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
              : "bg-gradient-to-r from-brand-600 to-brand-500 text-white shadow-lg shadow-brand-500/25 hover:shadow-xl hover:-translate-y-0.5"
          }`}
        >
          {saved2 ? <><Check className="h-4 w-4" /> Sauvegardé !</> : <><Save className="h-4 w-4" /> Sauvegarder les modifications</>}
        </button>
      </div>
    </div>
  )
}
