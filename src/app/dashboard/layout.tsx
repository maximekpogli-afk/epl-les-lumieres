import { Sidebar } from "@/components/layout/sidebar"
import { Header } from "@/components/layout/header"

export default function LayoutPage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-surface-50">
      <Sidebar />
      <div className="flex-1 flex flex-col ml-64 transition-all duration-300">
        <Header />
        <main className="flex-1 p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  )
}
