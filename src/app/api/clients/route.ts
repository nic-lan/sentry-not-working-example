import { NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

export async function GET() {
  throw new Error('ups inside GET clients')

  return NextResponse.json({ message: "hello world" }, { status: 200 })
}
