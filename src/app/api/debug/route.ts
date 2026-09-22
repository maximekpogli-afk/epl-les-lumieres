export const GET = async () => {
  const envCheck = {
    TURSO_DATABASE_URL: process.env.TURSO_DATABASE_URL ? "SET" : "NOT SET",
    TURSO_AUTH_TOKEN: process.env.TURSO_AUTH_TOKEN ? "SET" : "NOT SET",
    BETTER_AUTH_SECRET: process.env.BETTER_AUTH_SECRET ? "SET" : "NOT SET",
    VERCEL: process.env.VERCEL || "NOT SET",
    VERCEL_URL: process.env.VERCEL_URL || "NOT SET",
  }

  let moduleCheck: any = {}
  try {
    const mod = await import("@libsql/kysely-libsql")
    moduleCheck.libsqlKysely = "OK: " + Object.keys(mod).join(",")
  } catch (e: any) {
    moduleCheck.libsqlKysely = "ERR: " + e.message
  }
  try {
    const mod = await import("kysely")
    moduleCheck.kysely = "OK: " + Object.keys(mod).join(",")
  } catch (e: any) {
    moduleCheck.kysely = "ERR: " + e.message
  }
  try {
    const mod = await import("better-sqlite3")
    moduleCheck.betterSqlite3 = "OK"
  } catch (e: any) {
    moduleCheck.betterSqlite3 = "ERR: " + e.message
  }

  return Response.json({ envCheck, moduleCheck })
}
