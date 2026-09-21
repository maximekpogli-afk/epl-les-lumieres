"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Mail, Lock, Eye, EyeOff } from "lucide-react"
import { useAuth } from "@/hooks/use-auth"

export default function LoginPage() {
  const router = useRouter()
  const auth = useAuth()
  if (!auth) return null
  const { signIn } = auth
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
      await signIn(email, password)
    } catch (err: any) {
      setError(err.message || "Erreur de connexion")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex">
      {/* Left Panel - Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-login-bg relative overflow-hidden items-center justify-center">
        {/* Background decorations */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="login-dots" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#login-dots)" />
          </svg>
        </div>

        {/* Main SVG Illustration */}
        <div className="relative z-10 w-full max-w-md px-8 animate-fade-in">
          <svg viewBox="0 0 420 380" fill="none" className="w-full drop-shadow-2xl animate-float">
            {/* Desk */}
            <rect x="60" y="220" width="300" height="12" rx="4" fill="#312e81" />
            <rect x="80" y="232" width="8" height="80" rx="2" fill="#1e1b4b" />
            <rect x="332" y="232" width="8" height="80" rx="2" fill="#1e1b4b" />
            <rect x="60" y="224" width="300" height="6" rx="2" fill="#4338ca" />

            {/* Person - body */}
            <rect x="170" y="140" width="80" height="80" rx="12" fill="#6366f1" />
            <rect x="170" y="140" width="80" height="20" rx="12" fill="#4f46e5" />
            
            {/* Person - head */}
            <circle cx="210" cy="115" r="28" fill="#fed7aa" />
            <circle cx="210" cy="110" r="24" fill="#fde68a" opacity="0.3" />
            
            {/* Hair */}
            <path d="M182 108 Q190 80 210 78 Q230 80 238 108" fill="#1e1b4b" />
            <ellipse cx="185" cy="108" rx="6" ry="8" fill="#1e1b4b" />
            <ellipse cx="235" cy="108" rx="6" ry="8" fill="#1e1b4b" />
            
            {/* Eyes */}
            <circle cx="200" cy="112" r="3" fill="#1e1b4b" />
            <circle cx="220" cy="112" r="3" fill="#1e1b4b" />
            <circle cx="201" cy="111" r="1" fill="white" />
            <circle cx="221" cy="111" r="1" fill="white" />
            
            {/* Smile */}
            <path d="M202 122 Q210 128 218 122" stroke="#1e1b4b" strokeWidth="2" strokeLinecap="round" fill="none" />
            
            {/* Arms */}
            <rect x="140" y="155" width="30" height="10" rx="5" fill="#fed7aa" />
            <rect x="250" y="155" width="30" height="10" rx="5" fill="#fed7aa" />
            
            {/* Laptop on desk */}
            <rect x="150" y="195" width="120" height="25" rx="4" fill="#1e1b4b" />
            <rect x="155" y="198" width="110" height="18" rx="2" fill="#312e81" />
            <rect x="160" y="200" width="100" height="14" rx="1" fill="#4f46e5" />
            {/* Screen content */}
            <rect x="165" y="203" width="30" height="3" rx="1" fill="#818cf8" />
            <rect x="165" y="208" width="20" height="3" rx="1" fill="#a5b4fc" />
            <rect x="165" y="213" width="25" height="1" rx="0.5" fill="#c7d2fe" />
            <circle cx="245" cy="208" r="4" fill="#10b981" opacity="0.6" />

            {/* Laptop base */}
            <path d="M140 220 L150 210 L270 210 L280 220" fill="#3730a3" />

            {/* Book stack - left */}
            <rect x="80" y="200" width="50" height="8" rx="2" fill="#f97316" />
            <rect x="82" y="192" width="46" height="8" rx="2" fill="#10b981" />
            <rect x="84" y="184" width="42" height="8" rx="2" fill="#6366f1" />
            <rect x="80" y="200" width="50" height="2" fill="#ea580c" />
            <rect x="82" y="192" width="46" height="2" fill="#059669" />
            <rect x="84" y="184" width="42" height="2" fill="#4f46e5" />

            {/* Coffee cup - right */}
            <rect x="310" y="204" width="20" height="16" rx="3" fill="white" />
            <rect x="310" y="204" width="20" height="4" rx="2" fill="#e2e8f0" />
            <path d="M330 208 Q340 208 340 214 Q340 220 330 220" stroke="white" strokeWidth="2" fill="none" />
            {/* Steam */}
            <path d="M316 200 Q318 194 316 188" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
            <path d="M322 198 Q324 192 322 186" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.4" />
            <path d="M328 200 Q330 194 328 188" stroke="white" strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />

            {/* Pencil holder */}
            <rect x="100" y="170" width="16" height="14" rx="2" fill="#818cf8" />
            <line x1="104" y1="170" x2="104" y2="160" stroke="#f97316" strokeWidth="2" strokeLinecap="round" />
            <line x1="108" y1="170" x2="108" y2="156" stroke="#6366f1" strokeWidth="2" strokeLinecap="round" />
            <line x1="112" y1="170" x2="112" y2="162" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />

            {/* Floating books */}
            <g transform="translate(50, 60) rotate(-8)">
              <rect x="-14" y="-8" width="28" height="18" rx="2" fill="#f97316" />
              <rect x="-12" y="-6" width="24" height="14" rx="1" fill="#fed7aa" />
              <line x1="0" y1="-6" x2="0" y2="8" stroke="#f97316" strokeWidth="1" />
              <rect x="-10" y="-2" width="8" height="2" rx="1" fill="#fb923c" />
              <rect x="3" y="-2" width="8" height="2" rx="1" fill="#fb923c" />
            </g>

            {/* Floating graduation cap */}
            <g transform="translate(360, 50) rotate(10)">
              <polygon points="0,-12 20,0 0,12 -20,0" fill="#1e1b4b" />
              <rect x="-2" y="0" width="4" height="8" fill="#312e81" />
              <circle cx="0" cy="-12" r="3" fill="#f97316" />
              <path d="M-20 0 L-22 10" stroke="#1e1b4b" strokeWidth="1.5" />
              <circle cx="-22" cy="12" r="2" fill="#f97316" />
            </g>

            {/* Floating star */}
            <g transform="translate(320, 80)">
              <polygon points="0,-10 3,-3 10,-3 5,2 7,10 0,5 -7,10 -5,2 -10,-3 -3,-3" fill="#fbbf24" opacity="0.7" />
            </g>

            {/* Floating star 2 */}
            <g transform="translate(80, 40)">
              <polygon points="0,-7 2,-2 7,-2 3,1 5,7 0,3 -5,7 -3,1 -7,-2 -2,-2" fill="#f97316" opacity="0.5" />
            </g>

            {/* Light bulb / idea */}
            <g transform="translate(370, 130)">
              <circle cx="0" cy="0" r="12" fill="#fbbf24" opacity="0.3" />
              <circle cx="0" cy="0" r="8" fill="#fbbf24" opacity="0.5" />
              <circle cx="0" cy="0" r="5" fill="#fbbf24" />
              <rect x="-3" y="6" width="6" height="4" rx="1" fill="#e2e8f0" />
              <rect x="-2" y="10" width="4" height="2" rx="1" fill="#cbd5e1" />
              {/* Rays */}
              <line x1="0" y1="-14" x2="0" y2="-18" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              <line x1="10" y1="-10" x2="13" y2="-13" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              <line x1="14" y1="0" x2="18" y2="0" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
              <line x1="-14" y1="0" x2="-18" y2="0" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
            </g>

            {/* Clouds */}
            <g opacity="0.3">
              <ellipse cx="60" cy="30" rx="28" ry="10" fill="white" />
              <ellipse cx="48" cy="26" rx="16" ry="8" fill="white" />
              <ellipse cx="72" cy="26" rx="18" ry="8" fill="white" />
            </g>
            <g opacity="0.2">
              <ellipse cx="360" cy="20" rx="22" ry="8" fill="white" />
              <ellipse cx="348" cy="16" rx="14" ry="6" fill="white" />
              <ellipse cx="372" cy="16" rx="16" ry="6" fill="white" />
            </g>

            {/* Floor shadow */}
            <ellipse cx="210" cy="320" rx="160" ry="12" fill="white" opacity="0.1" />

            {/* Plant on floor */}
            <rect x="50" y="290" width="16" height="20" rx="3" fill="#059669" opacity="0.4" />
            <ellipse cx="58" cy="285" rx="14" ry="12" fill="#10b981" opacity="0.4" />
            <line x1="58" y1="290" x2="58" y2="280" stroke="#059669" strokeWidth="2" opacity="0.5" />
            <ellipse cx="52" cy="278" rx="6" ry="4" fill="#10b981" opacity="0.3" transform="rotate(-20 52 278)" />
            <ellipse cx="64" cy="276" rx="6" ry="4" fill="#10b981" opacity="0.3" transform="rotate(20 64 276)" />
          </svg>

          {/* Text under illustration */}
          <div className="text-center mt-10">
            <h2 className="font-display text-2xl font-bold text-white mb-2">
              EPL Les Lumières
            </h2>
            <p className="text-white/60 text-sm">
              La plateforme de gestion scolaire intelligente
            </p>
          </div>
        </div>

        {/* Decorative circles */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-brand-400/10 rounded-full blur-2xl" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent-400/10 rounded-full blur-2xl" />
      </div>

      {/* Right Panel - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-8 sm:p-12">
        <div className="w-full max-w-md animate-slide-up">
          {/* Mobile logo */}
          <div className="lg:hidden text-center mb-8">
            <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-brand-600 to-brand-400 rounded-2xl mb-3">
              <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h1 className="font-display text-xl font-bold text-gray-900">EPL Les Lumières</h1>
          </div>

          {/* Desktop header */}
          <div className="hidden lg:block mb-8">
            <h1 className="font-display text-3xl font-extrabold text-gray-900 mb-2">
              Bonjour <span className="gradient-text">👋</span>
            </h1>
            <p className="text-gray-500">
              Connectez-vous pour accéder à votre espace.
            </p>
          </div>

          {/* Error message */}
          {error && (
            <div className="flex items-center gap-3 p-4 mb-6 text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl animate-slide-up">
              <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <span>{error}</span>
            </div>
          )}

          {/* Login form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-gray-700">Email</label>
              <div className="relative">
                <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="email"
                  placeholder="admin@epl-lumieres.local"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-modern pl-11"
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
                  className="input-modern pl-11 pr-11"
                  required
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

            <div className="flex items-center justify-end">
              <button
                type="button"
                onClick={() => alert("Un email de réinitialisation a été envoyé à votre adresse.")}
                className="text-sm text-brand-600 hover:text-brand-700 font-medium transition-colors"
              >
                Mot de passe oublié ?
              </button>
            </div>

            <button
              type="submit"
              className="btn-primary w-full py-3.5 text-base"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  Connexion en cours...
                </span>
              ) : (
                "Se connecter"
              )}
            </button>
          </form>

          {/* Demo credentials */}
          <div className="mt-8 p-4 bg-surface-50 rounded-xl border border-surface-200">
            <p className="text-xs text-gray-500 text-center">
              <span className="font-medium text-gray-600">Identifiants de démonstration :</span>
              <br />
              admin@epl-lumieres.local / admin123
            </p>
          </div>

          {/* Footer link */}
          <div className="text-center mt-8 space-y-2">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} EPL Les Lumières
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
              <Link href="/legal/terms" className="hover:text-brand-600 transition-colors">Conditions d&apos;utilisation</Link>
              <span>·</span>
              <Link href="/legal/privacy" className="hover:text-brand-600 transition-colors">Politique de confidentialité</Link>
              <span>·</span>
              <Link href="/legal/cookies" className="hover:text-brand-600 transition-colors">Politique de cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
