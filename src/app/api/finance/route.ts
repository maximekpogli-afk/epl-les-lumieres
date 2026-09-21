import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json({ data: [] })
}

export async function POST(request: Request) {
  const body = await request.json()
  return NextResponse.json({
    data: { id: Date.now().toString(), ...body, created_at: new Date().toISOString() },
  }, { status: 201 })
}
