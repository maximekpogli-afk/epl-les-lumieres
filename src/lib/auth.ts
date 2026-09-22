import { betterAuth } from "better-auth"
import { nextCookies } from "better-auth/next-js"

async function createDb() {
  if (process.env.TURSO_DATABASE_URL) {
    const { LibsqlDialect } = await import("@libsql/kysely-libsql")
    const { Kysely } = await import("kysely")
    const kysely = new Kysely({
      dialect: new LibsqlDialect({
        url: process.env.TURSO_DATABASE_URL,
        authToken: process.env.TURSO_AUTH_TOKEN,
      }),
    })
    return { db: kysely, type: "sqlite" as const }
  }

  const Database = (await import("better-sqlite3")).default
  const sqlite = new Database("./epl.db")
  sqlite.pragma("journal_mode = WAL")

  sqlite.exec(`
    CREATE TABLE IF NOT EXISTS "user" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "name" TEXT NOT NULL,
      "email" TEXT NOT NULL,
      "emailVerified" INTEGER NOT NULL DEFAULT 0,
      "image" TEXT,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS "session" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "expiresAt" DATETIME NOT NULL,
      "token" TEXT NOT NULL,
      "ipAddress" TEXT,
      "userAgent" TEXT,
      "userId" TEXT NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS "account" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "accountId" TEXT NOT NULL,
      "providerId" TEXT NOT NULL,
      "userId" TEXT NOT NULL REFERENCES "user"("id") ON DELETE CASCADE,
      "accessToken" TEXT,
      "refreshToken" TEXT,
      "idToken" TEXT,
      "accessTokenExpiresAt" DATETIME,
      "refreshTokenExpiresAt" DATETIME,
      "scope" TEXT,
      "password" TEXT,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE TABLE IF NOT EXISTS "verification" (
      "id" TEXT NOT NULL PRIMARY KEY,
      "identifier" TEXT NOT NULL,
      "value" TEXT NOT NULL,
      "expiresAt" DATETIME NOT NULL,
      "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
      "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
    );
    CREATE UNIQUE INDEX IF NOT EXISTS "user_email_idx" ON "user" ("email");
    CREATE UNIQUE INDEX IF NOT EXISTS "session_token_idx" ON "session" ("token");
  `)

  return sqlite
}

const db = await createDb()

export const auth = betterAuth({
  database: db,
  baseURL: process.env.BETTER_AUTH_URL || "http://localhost:3000",
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
