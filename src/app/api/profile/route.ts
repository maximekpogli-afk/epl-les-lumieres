import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ data: { id: "mock-user", email: "mock@example.com", first_name: "Mock", last_name: "User", role: "admin" } })
}

export async function PUT(request: Request) {
  const { data } = await request.json()
  return NextResponse.json({ data: { id: "mock-user", ...data, updated_at: new Date().toISOString() } })
}
