import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const middleware = async (request: NextRequest) => {
  const requestPath = request.nextUrl.pathname

  console.log(`Received Request ${requestPath}`)
}
