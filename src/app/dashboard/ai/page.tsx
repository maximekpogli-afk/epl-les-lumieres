"use client"

import { useState } from "react"
import { Bot, Send, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AIPage() {
  const [message, setMessage] = useState("")

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Bot className="h-6 w-6 text-violet-600" />
          Assistant IA
        </h1>
        <p className="text-muted-foreground">Assistant intelligent pour la gestion scolaire</p>
      </div>

      <div className="rounded-xl border bg-card flex flex-col h-[500px]">
        <div className="flex items-center gap-2 p-4 border-b">
          <Sparkles className="h-5 w-5 text-violet-600" />
          <span className="font-medium text-sm">Assistant EPL Les Lumières</span>
          <span className="ml-auto inline-flex items-center rounded-full bg-green-100 text-green-700 px-2 py-0.5 text-xs font-medium">
            En ligne
          </span>
        </div>

        <div className="flex-1 flex items-center justify-center p-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-violet-50 flex items-center justify-center mx-auto mb-4">
              <Bot className="h-8 w-8 text-violet-600" />
            </div>
            <h3 className="font-semibold text-lg">Assistant IA</h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-sm">
              L&apos;assistant IA sera disponible prochainement. Il pourra vous aider
              avec les notes, les présences, les rapports et bien plus.
            </p>
          </div>
        </div>

        <div className="p-4 border-t">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tapez votre message..."
              className="flex-1 h-10 rounded-lg border bg-background px-3 text-sm outline-none focus:ring-2 focus:ring-violet-500"
              disabled
            />
            <Button size="icon" disabled>
              <Send className="h-4 w-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2 text-center">
            Fonctionnalité bientôt disponible
          </p>
        </div>
      </div>
    </div>
  )
}
