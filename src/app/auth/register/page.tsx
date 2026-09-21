"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"
import { AuthLayout } from "@/components/layout/auth-layout"
import { UserPlus } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const auth = useAuth()
  if (!auth) return null
  const { signUp } = auth
  const { toast } = useToast()
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", password: "", role: "student" })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      await signUp(form.email, form.password, form.firstName, form.lastName, form.role)
      toast({ title: "Succès", description: "Compte créé avec succès !" })
      router.push("/dashboard")
    } catch (err: any) {
      setError(err.message || "Erreur d'inscription")
      toast({ title: "Erreur", description: err.message, variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex items-center gap-2 mb-2">
          <UserPlus className="h-5 w-5 text-blue-600" />
          <h2 className="text-xl font-semibold">Créer un compte</h2>
        </div>
        {error && <div className="p-3 text-sm text-red-600 bg-red-50 rounded-lg">{error}</div>}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>Prénom</Label>
            <Input placeholder="Jean" value={form.firstName} onChange={(e) => setForm({...form, firstName: e.target.value})} required />
          </div>
          <div className="space-y-2">
            <Label>Nom</Label>
            <Input placeholder="Dupont" value={form.lastName} onChange={(e) => setForm({...form, lastName: e.target.value})} required />
          </div>
        </div>
        <div className="space-y-2">
          <Label>Email</Label>
          <Input type="email" placeholder="email@example.com" value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} required />
        </div>
        <div className="space-y-2">
          <Label>Mot de passe</Label>
          <Input type="password" placeholder="••••••••" value={form.password} onChange={(e) => setForm({...form, password: e.target.value})} required minLength={6} />
        </div>
        <div className="space-y-2">
          <Label>Rôle</Label>
          <Select value={form.role} onValueChange={(v) => setForm({...form, role: v || "student"})}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="student">Élève</SelectItem>
              <SelectItem value="teacher">Enseignant</SelectItem>
              <SelectItem value="parent">Parent</SelectItem>
              <SelectItem value="secretary">Secrétaire</SelectItem>
              <SelectItem value="accountant">Comptable</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Création..." : "Créer le compte"}
        </Button>
      </form>
    </AuthLayout>
  )
}
