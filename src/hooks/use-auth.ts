"use client"

import { createContext, useContext, useState, useEffect, useCallback } from "react"
import { useRouter } from "next/navigation"
import React from "react"
import type { Profile } from "@/types"
import { authClient } from "@/lib/auth-client"

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

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const loadSession = useCallback(async () => {
    try {
      const { data } = await authClient.getSession()
      if (data?.user) {
        setProfile({
          id: data.user.id,
          email: data.user.email,
          first_name: data.user.name || "",
          last_name: "",
          role: "admin" as any,
          created_at: data.user.createdAt?.toISOString() || new Date().toISOString(),
          updated_at: data.user.updatedAt?.toISOString() || new Date().toISOString(),
        })
      } else {
        setProfile(null)
      }
    } catch {
      setProfile(null)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadSession()
  }, [loadSession])

  const signIn = async (email: string, password: string) => {
    const { error } = await authClient.signIn.email({
      email,
      password,
    })
    if (error) {
      throw new Error(error.message || "Email ou mot de passe incorrect")
    }
    await loadSession()
    router.push("/dashboard")
  }

  const signUp = async (email: string, password: string, firstName: string, lastName: string, _role: string) => {
    const { error } = await authClient.signUp.email({
      email,
      password,
      name: `${firstName} ${lastName}`,
    })
    if (error) {
      throw new Error(error.message || "Erreur d'inscription")
    }
    await loadSession()
    router.push("/dashboard")
  }

  const signOut = async () => {
    await authClient.signOut()
    setProfile(null)
    router.push("/auth/login")
  }

  return React.createElement(AuthContext.Provider, { value: { profile, loading, signIn, signUp, signOut } }, children)
}
