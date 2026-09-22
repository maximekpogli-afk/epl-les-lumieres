import { betterAuth } from "better-auth"
import { nextCookies } from "better-auth/next-js"
import { createClient } from "@libsql/client"

export const auth = betterAuth({
  database: createClient({
    url: process.env.TURSO_DATABASE_URL!,
    authToken: process.env.TURSO_AUTH_TOKEN,
  }),
  baseURL: process.env.BETTER_AUTH_URL || (process.env.VERCEL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  trustedOrigins: [
    "http://localhost:3000",
    "https://epl-les-lumieres.vercel.app",
    "https://epl-les-lumieres-*.vercel.app",
  ],
  session: {
    cookieCache: {
      enabled: true,
    },
  },
  plugins: [nextCookies()],
})
