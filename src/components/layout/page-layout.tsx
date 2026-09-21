"use client"

import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"
import { useAuth } from "@/hooks/use-auth"
import { Loader2 } from "lucide-react"

export function PageLayout({ children }: { children: React.ReactNode }) {
  const auth = useAuth()
  const profile = auth?.profile
  const loading = auth?.loading

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
      </div>
    )
  }

  if (!profile) {
    return null
  }

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col ml-64">
        <Header />
        <div className="flex-1 p-6 overflow-auto">{children}</div>
      </main>
    </div>
  )
}
