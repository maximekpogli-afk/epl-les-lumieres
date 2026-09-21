"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import React from "react"
import type { Profile } from "@/types"

interface AuthContextType {
  profile: Profile | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, firstName: string, lastName: string, role: string) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | null>(null)

export function useAuth() {
  return useContext(AuthContext)
}

const DEMO_PROFILE: Profile = {
  id: "1",
  email: "admin@epl-lumieres.local",
  first_name: "Admin",
  last_name: "System",
  role: "admin" as any,
  created_at: new Date().toISOString(),
  updated_at: new Date().toISOString(),
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const stored = localStorage.getItem("epl_auth")
    if (stored) {
      try {
        setProfile(JSON.parse(stored))
      } catch {
        localStorage.removeItem("epl_auth")
      }
    }
    setLoading(false)
  }, [])

  const signIn = async (email: string, password: string) => {
    if (email === "admin@epl-lumieres.local" && password === "admin123") {
      const p = { ...DEMO_PROFILE, email }
      setProfile(p)
      localStorage.setItem("epl_auth", JSON.stringify(p))
      router.push("/dashboard")
    } else {
      throw new Error("Email ou mot de passe incorrect")
    }
  }

  const signUp = async (email: string, password: string, firstName: string, lastName: string, role: string) => {
    const p: Profile = {
      id: Date.now().toString(),
      email,
      first_name: firstName,
      last_name: lastName,
      role: role as any,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    }
    setProfile(p)
    localStorage.setItem("epl_auth", JSON.stringify(p))
    router.push("/dashboard")
  }

  const signOut = async () => {
    setProfile(null)
    localStorage.removeItem("epl_auth")
    router.push("/auth/login")
  }

  return React.createElement(AuthContext.Provider, { value: { profile, loading, signIn, signUp, signOut } }, children)
}
