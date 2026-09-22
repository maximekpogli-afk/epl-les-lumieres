export const GET = async () => {
  const envCheck: Record<string, string> = {
    TURSO_DATABASE_URL: process.env.TURSO_DATABASE_URL ? "SET (" + process.env.TURSO_DATABASE_URL.substring(0, 30) + "...)" : "NOT SET",
    TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN ? "SET" : "NOT SET",
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET ? "SET" : "NOT SET",
    VERCEL: process.env.VERCEL || "NOT SET",
    VERCEL_URL: process.env.VERCEL_URL || "NOT SET",
    NODE_ENV: process.env.NODE_ENV || "NOT SET",
  }

  const moduleCheck: Record<string, string> = {}
  try {
    const mod = await import("@libsql/kysely-libsql")
    moduleCheck.libsqlKysely = "OK: " + Object.keys(mod).join(",")
  } catch (e: unknown) {
    moduleCheck.libsqlKysely = "ERR: " + (e instanceof Error ? e.message : String(e))
  }
  try {
    const mod = await import("kysely")
    moduleCheck.kysely = "OK: " + Object.keys(mod).join(",")
  } catch (e: unknown) {
    moduleCheck.kysely = "ERR: " + (e instanceof Error ? e.message : String(e))
  }

  try {
    const { createClient } = await import("@libsql/client")
    const client = createClient({
      url: process.env.TURSO_DATABASE_URL || "",
      authToken: process.env.TURSO_AUTH_TOKEN,
    })
    const result = await client.execute("SELECT name FROM sqlite_master WHERE type='table'")
    moduleCheck.tursoDirect = "OK - tables: " + result.rows.map(r => r.name).join(", ")
    client.close()
  } catch (e: unknown) {
    moduleCheck.tursoDirect = "ERR: " + (e instanceof Error ? e.message : String(e))
  }

  return Response.json({ envCheck, moduleCheck })
}
