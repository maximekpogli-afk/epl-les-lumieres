import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email, password, firstName, lastName, role } = await request.json()
    return NextResponse.json({
      user: { id: Date.now().toString(), email, user_metadata: { first_name: firstName, last_name: lastName, role } },
    }, { status: 201 })
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 })
  }
}
