export const GET = async () => {
  const results: Record<string, string> = {}

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

    const wrapper = { db: kysely, type: "sqlite" }
    results.hasDbProp = "db" in wrapper ? "YES" : "NO"
    results.dbPropType = typeof wrapper.db
    results.dbPropConstructor = (wrapper.db as any).constructor?.name || "unknown"
  } catch (e: unknown) {
    results.kyselyTest = "ERR: " + (e instanceof Error ? e.message : String(e))
  }

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
      database: { db: kysely, type: "sqlite" } as any,
      baseURL: "https://epl-les-lumieres.vercel.app",
      emailAndPassword: { enabled: true },
    })
    results.betterAuthCreate = "OK"
    results.authKeys = Object.keys(authInstance).join(",")
  } catch (e: unknown) {
    results.betterAuthCreate = "ERR: " + (e instanceof Error ? (e.stack || e.message) : String(e))
  }

  return Response.json(results)
}
