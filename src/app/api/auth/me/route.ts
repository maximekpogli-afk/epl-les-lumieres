import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({
    user: { id: "mock-user", email: "mock@example.com" },
    profile: { id: "mock-user", email: "mock@example.com", first_name: "Mock", last_name: "User", role: "admin" },
  })
}
