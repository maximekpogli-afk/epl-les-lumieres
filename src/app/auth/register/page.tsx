"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"

export default function RegisterPage() {
  const router = useRouter()
  const auth = useAuth()
  if (!auth) return null
  const { signUp } = auth
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    try {
      await signUp(email, password, firstName, lastName, "admin")
      router.push("/dashboard")
    } catch (err: any) {
      setError(err.message || "Erreur d'inscription")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-900 via-indigo-800 to-violet-900 relative overflow-hidden items-center justify-center">
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="reg-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#reg-dots)" />
          </svg>
        </div>

        <div className="relative z-10 w-full max-w-md px-8 animate-fade-in">
          <svg viewBox="0 0 400 350" fill="none" className="w-full drop-shadow-2xl animate-float">
            {/* Shield */}
            <path d="M200 30 L310 80 V180 C310 260 260 310 200 340 C140 310 90 260 90 180 V80 Z" fill="#312e81" opacity="0.9" />
            <path d="M200 45 L295 90 V180 C295 250 250 295 200 325 C150 295 105 250 105 180 V90 Z" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
            {/* Book */}
            <path d="M140 200 L140 150 C140 150 170 140 200 150 L200 200 C200 200 170 190 140 200 Z" fill="white" opacity="0.95" />
            <path d="M260 200 L260 150 C260 150 230 140 200 150 L200 200 C200 200 230 190 260 200 Z" fill="white" opacity="0.85" />
            <line x1="200" y1="145" x2="200" y2="205" stroke="#1e3a5f" strokeWidth="1.5" />
            {/* Flame */}
            <ellipse cx="200" cy="100" rx="18" ry="25" fill="#f97316" opacity="0.9" />
            <ellipse cx="200" cy="95" rx="12" ry="18" fill="#fbbf24" opacity="0.8" />
            <ellipse cx="200" cy="92" rx="6" ry="10" fill="white" opacity="0.7" />
            {/* Stars */}
            <g transform="translate(130, 70)">
              <polygon points="0,-8 2,-2 8,-2 3,1 5,7 0,3 -5,7 -3,1 -8,-2 -2,-2" fill="#fbbf24" opacity="0.7" />
            </g>
            <g transform="translate(270, 70)">
              <polygon points="0,-8 2,-2 8,-2 3,1 5,7 0,3 -5,7 -3,1 -8,-2 -2,-2" fill="#fbbf24" opacity="0.7" />
            </g>
            {/* Light rays */}
            <line x1="200" y1="55" x2="200" y2="35" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
            <line x1="170" y1="65" x2="155" y2="50" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
            <line x1="230" y1="65" x2="245" y2="50" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
          </svg>

          <div className="text-center mt-8">
            <h2 className="text-2xl font-bold text-white mb-2">EPL Les Lumières</h2>
            <p className="text-white/60 text-sm">Rejoignez notre communauté éducative</p>
          </div>
        </div>

        <div className="absolute top-20 left-20 w-32 h-32 bg-indigo-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-violet-400/10 rounded-full blur-2xl" />
      </div>

      {/* Right Panel - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8 sm:p-12">
        <div className="w-full max-w-md animate-slide-up">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-indigo-600 to-indigo-400 rounded-2xl mb-3">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="text-xl font-bold text-gray-900">EPL Les Lumières</h1>
          </div>

          {/* Header */}
          <div className="hidden lg:block mb-8">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-2">
              Créer un compte <span className="text-indigo-600">✨</span>
            </h1>
            <p className="text-gray-500">
              Rejoignez la plateforme EPL Les Lumières.
            </p>
          </div>

          {error && (
            <div className="flex items-center gap-3 p-4 mb-6 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl animate-slide-up">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700">Prénom</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Jean"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700">Nom</label>
                <div className="relative">
                  <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Dupont"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">Mot de passe</label>
              <div className="relative">
                <Lock className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-11 pr-11 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  required
                  minLength={6}
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3.5 px-6 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-700 hover:to-violet-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/25 transition-all duration-200 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Création en cours...
                </span>
              ) : (
                "Créer le compte"
              )}
            </button>
          </form>

          <div className="text-center mt-8 space-y-2">
            <p className="text-sm text-gray-600">
              Déjà un compte ?{" "}
              <Link href="/auth/login" className="text-indigo-600 hover:text-indigo-700 font-semibold transition-colors">
                Se connecter
              </Link>
            </p>
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} EPL Les Lumières
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
              <Link href="/legal/terms" className="hover:text-indigo-600 transition-colors">Conditions</Link>
              <span>·</span>
              <Link href="/legal/privacy" className="hover:text-indigo-600 transition-colors">Confidentialité</Link>
              <span>·</span>
              <Link href="/legal/cookies" className="hover:text-indigo-600 transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
