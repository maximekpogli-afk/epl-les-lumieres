import type { Metadata } from "next"
import "./globals.css"
import { Providers } from "./providers"
import CookieConsent from "@/components/cookie-consent"

export const metadata: Metadata = {
  title: "EPL Les Lumières - Gestion Scolaire",
  description: "Plateforme de gestion scolaire professionnelle",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
        <CookieConsent />
      </body>
    </html>
  )
}
