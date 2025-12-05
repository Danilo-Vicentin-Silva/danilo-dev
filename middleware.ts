// middleware.ts
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  // Se tentar acessar /admin
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // Verifica se tem um cookie de autenticação ou cabeçalho básico
    // Para simplificar, vamos usar Basic Auth (o navegador pede senha)
    const authHeader = request.headers.get("authorization")

    if (authHeader) {
      // Valor base64 de "admin:sua-senha-segura"
      const authValue = authHeader.split(" ")[1]
      const [user, pwd] = atob(authValue).split(":")

      // Defina ADMIN_PASSWORD no seu .env.local
      if (user === "admin" && pwd === process.env.ADMIN_PASSWORD) {
        return NextResponse.next()
      }
    }

    return new NextResponse("Autenticação necessária", {
      status: 401,
      headers: { "WWW-Authenticate": 'Basic realm="Secure Area"' },
    })
  }
}
