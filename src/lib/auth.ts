import { betterAuth } from "better-auth"
import { nextCookies } from "better-auth/next-js"
import Database from "better-sqlite3"

function getDb() {
  const tursoUrl = process.env.TURSO_DATABASE_URL
  const tursoToken = process.env.TURSO_AUTH_TOKEN

  if (tursoUrl) {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { createClient } = require("@libsql/client")
    return createClient({ url: tursoUrl, authToken: tursoToken })
  }

  return new Database("./epl.db")
}

export const auth = betterAuth({
  database: getDb(),
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
  },
  trustedOrigins: [
    "http://localhost:3000",
    "https://epl-les-lumieres.vercel.app",
  ],
  session: {
    cookieCache: {
      enabled: true,
    },
  },
  plugins: [nextCookies()],
})
