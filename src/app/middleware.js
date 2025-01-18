import {NextResponse} from 'next/server'

export function middleware(req) {
    // Obtener el token de la cabecera de la solicitud o de una cookie
  const token = req.localStorage.get('token') || req.headers.get('Authorization');

  // Ruta a proteger
//   const protectedRoutes = ['/dashboard', '/admin', '/api/private-route'];

  // Verifica si la ruta actual está protegida
  if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
    if (!token) {
      // Si no hay token, redirige al login
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }

    // Puedes agregar más lógica para validar el token aquí, como decodificarlo
  }

  // Si no está protegida o el token es válido, continúa con la solicitud
  return NextResponse.next();
}