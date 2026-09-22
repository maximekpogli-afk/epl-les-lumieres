import { betterAuth } from "better-auth"
import { nextCookies } from "better-auth/next-js"

let _db: any = null

function getDb() {
  if (_db) return _db
  const { createClient } = require("@libsql/client")
  _db = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_AUTH_TOKEN,
  })
  return _db
}

export const auth = betterAuth({
  database: getDb(),
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
