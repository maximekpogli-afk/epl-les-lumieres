export const GET = async () => {
  const results: Record<string, any> = {}

  // Test 1: import dynamique de Better Auth
  try {
    const { betterAuth } = await import("better-auth")
    results.betterAuthImport = "OK"
  } catch (e: unknown) {
    results.betterAuthImport = "ERR: " + (e instanceof Error ? e.message : String(e))
  }

  // Test 2: import du handler
  try {
    const { toNextJsHandler } = await import("better-auth/next-js")
    results.nextJsHandlerImport = "OK"
  } catch (e: unknown) {
    results.nextJsHandlerImport = "ERR: " + (e instanceof Error ? e.message : String(e))
  }

  // Test 3: create Kysely + LibsqlDialect via dynamic import
  try {
    const { LibsqlDialect } = await import("@libsql/kysely-libsql")
    const { Kysely } = await import("kysely")
    const kysely = new Kysely({
      dialect: new LibsqlDialect({
        url: process.env.TURSO_DATABASE_URL!,
        authToken: process.env.TURSO_AUTH_TOKEN,
      }),
    })
    const result = await kysely.selectFrom("user").selectAll().execute()
    results.kyselyQuery = "OK - users: " + result.length
    results.kyselyHasDb = "db" in ({ db: kysely, type: "sqlite" } as any) ? "YES" : "NO"
    results.kyselyConstructorName = (kysely as any).constructor?.name || "unknown"
    results.kyselyDialectType = typeof (kysely as any).dialect
    results.kyselyDialectKeys = Object.keys((kysely as any).dialect || {}).join(",")
  } catch (e: unknown) {
    results.kyselyTest = "ERR: " + (e instanceof Error ? e.stack || e.message : String(e))
  }

  // Test 4: try creating Better Auth with Kysely wrapper
  try {
    const { betterAuth } = await import("better-auth")
    const { LibsqlDialect } = await import("@libsql/kysely-libsql")
    const { Kysely } = await import("kysely")
    const kysely = new Kysely({
      dialect: new LibsqlDialect({
        url: process.env.TURSO_DATABASE_URL!,
        authToken: process.env.TURSO_AUTH_TOKEN,
      }),
    })

    const authInstance = betterAuth({
      database: { db: kysely, type: "sqlite" },
      baseURL: "https://epl-les-lumieres.vercel.app",
      emailAndPassword: { enabled: true },
    })
    results.betterAuthCreate = "OK"
    results.authType = typeof authInstance
    results.authKeys = Object.keys(authInstance).join(",")
  } catch (e: unknown) {
    results.betterAuthCreate = "ERR: " + (e instanceof Error ? e.stack || e.message : String(e))
  }

  return Response.json(results, { status: 200 })
}
