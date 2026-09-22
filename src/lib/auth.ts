import { betterAuth } from "better-auth"
import { nextCookies } from "better-auth/next-js"

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL || process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000",
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
