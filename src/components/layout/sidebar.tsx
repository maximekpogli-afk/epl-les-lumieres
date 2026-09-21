"use client"

import * as React from "react"
import { usePathname, useRouter } from "next/navigation"
import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  UserCog,
  FileText,
  Calculator,
  CalendarClock,
  Activity,
  Settings,
  BarChart3,
  Bot,
  LogOut,
  Menu,
  X,
  Bell,
} from "lucide-react"
import { useAuth } from "@/hooks/use-auth"
import { cn } from "@/lib/utils"

const menuItems = [
  { title: "Tableau de bord", href: "/dashboard", icon: LayoutDashboard, roles: ["super_admin", "admin", "secretary", "teacher", "accountant", "parent"] },
  { title: "Élèves", href: "/dashboard/students", icon: Users, roles: ["super_admin", "admin", "secretary"] },
  { title: "Classes", href: "/dashboard/classes", icon: GraduationCap, roles: ["super_admin", "admin", "secretary", "teacher"] },
  { title: "Enseignants", href: "/dashboard/teachers", icon: UserCog, roles: ["super_admin", "admin"] },
  { title: "Matières", href: "/dashboard/subjects", icon: BookOpen, roles: ["super_admin", "admin"] },
  { title: "Notes", href: "/dashboard/grades", icon: FileText, roles: ["super_admin", "admin", "teacher", "secretary"] },
  { title: "Présences", href: "/dashboard/attendance", icon: CalendarClock, roles: ["super_admin", "admin", "teacher", "secretary"] },
  { title: "Finances", href: "/dashboard/finance", icon: Calculator, roles: ["super_admin", "admin", "accountant"] },
  { title: "Rapports", href: "/dashboard/reports", icon: BarChart3, roles: ["super_admin", "admin"] },
  { title: "Documents", href: "/dashboard/documents", icon: Activity, roles: ["super_admin", "admin", "secretary"] },
  { title: "Notifications", href: "/dashboard/notifications", icon: Bell, roles: ["super_admin", "admin", "secretary", "teacher", "accountant", "parent"] },
  { title: "Assistant IA", href: "/dashboard/ai", icon: Bot, roles: ["super_admin", "admin", "secretary", "teacher", "accountant", "parent"] },
  { title: "Paramètres", href: "/dashboard/settings", icon: Settings, roles: ["super_admin", "admin"] },
]

export function Sidebar() {
  const [collapsed, setCollapsed] = React.useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const auth = useAuth()
  const profile = auth?.profile
  const signOut = auth?.signOut

  const filteredMenu = menuItems.filter((item) =>
    profile?.role && item.roles.includes(profile.role)
  )

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 h-full z-30 flex flex-col transition-all duration-300 bg-sidebar-gradient text-white",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className={cn(
        "flex items-center gap-3 border-b border-white/10 transition-all duration-300",
        collapsed ? "justify-center p-4" : "px-5 py-5"
      )}>
        <div className="w-10 h-10 bg-gradient-to-br from-accent-400 to-accent-500 rounded-xl flex items-center justify-center shadow-lg shadow-accent-500/30 shrink-0">
          <GraduationCap className="w-6 h-6 text-white" />
        </div>
        {!collapsed && (
          <div className="animate-slide-in-left">
            <h1 className="font-display font-bold text-base leading-tight">EPL Les Lumières</h1>
            <p className="text-[11px] text-white/50">Gestion Scolaire</p>
          </div>
        )}
        <button
          type="button"
          className={cn(
            "rounded-lg hover:bg-white/10 transition-colors",
            collapsed ? "hidden" : "ml-auto p-1.5"
          )}
          onClick={() => setCollapsed(!collapsed)}
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {collapsed && (
        <button
          type="button"
          className="mx-auto mt-3 p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setCollapsed(false)}
        >
          <Menu className="w-5 h-5" />
        </button>
      )}

      <nav className="flex-1 py-4 px-3 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10">
        <div className="space-y-1">
          {filteredMenu.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/dashboard" && pathname.startsWith(item.href))
            const Icon = item.icon
            return (
              <button
                key={item.href}
                type="button"
                className={cn(
                  "w-full flex items-center gap-3 rounded-xl text-sm font-medium transition-all duration-200",
                  collapsed ? "justify-center p-3" : "px-3 py-2.5",
                  isActive
                    ? "bg-white/15 text-white shadow-lg shadow-black/10"
                    : "text-white/60 hover:text-white hover:bg-white/8"
                )}
                onClick={() => router.push(item.href)}
                title={collapsed ? item.title : undefined}
              >
                <Icon className={cn("shrink-0", isActive ? "w-5 h-5" : "w-[18px]")} />
                {!collapsed && <span>{item.title}</span>}
                {isActive && !collapsed && (
                  <div className="ml-auto w-1.5 h-1.5 rounded-full bg-accent-400 shadow-sm shadow-accent-400/50" />
                )}
              </button>
            )
          })}
        </div>
      </nav>

      <div className="p-3 border-t border-white/10">
        <button
          type="button"
          className={cn(
            "w-full flex items-center gap-3 rounded-xl text-sm font-medium transition-all duration-200 text-white/50 hover:text-red-300 hover:bg-red-500/10",
            collapsed ? "justify-center p-3" : "px-3 py-2.5"
          )}
          onClick={() => signOut?.()}
          title={collapsed ? "Déconnexion" : undefined}
        >
          <LogOut className="w-[18px] shrink-0" />
          {!collapsed && <span>Déconnexion</span>}
        </button>
      </div>
    </aside>
  )
}
