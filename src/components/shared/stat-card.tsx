import { TrendingUp, TrendingDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface StatCardProps {
  title: string
  value: number | string
  change?: number
  changeLabel?: string
  icon: React.ReactNode
  iconBg?: string
}

export function StatCard({ title, value, change, changeLabel, icon, iconBg }: StatCardProps) {
  const isPositive = change !== undefined && change >= 0

  return (
    <div className="rounded-xl border bg-card p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold mt-1">{value}</h3>
          {change !== undefined && (
            <div className={cn("flex items-center gap-1 text-sm mt-1", isPositive ? "text-green-600" : "text-red-600")}>
              {isPositive ? <TrendingUp className="h-4 w-4" /> : <TrendingDown className="h-4 w-4" />}
              <span>{change}</span>
              {changeLabel && <span className="text-muted-foreground"> {changeLabel}</span>}
            </div>
          )}
        </div>
        <div className={cn("p-3 rounded-lg", iconBg || "bg-blue-50")}>
          {icon}
        </div>
      </div>
    </div>
  )
}
