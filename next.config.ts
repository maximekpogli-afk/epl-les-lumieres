import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  output: "standalone",
  env: {
    NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "@base-ui/react"],
  },
  serverExternalPackages: ["better-sqlite3", "@libsql/client", "@libsql/kysely-libsql"],
}

export default nextConfig
