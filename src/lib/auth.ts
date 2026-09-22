import { betterAuth } from "better-auth"
import { nextCookies } from "better-auth/next-js"

export const auth = betterAuth({
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
