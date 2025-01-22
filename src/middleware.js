import {NextResponse} from 'next/server'


const protectedRoutes = [
  '/mi-cuenta/:path*', 
  '/carrito/:path*', 
  '/mis-cursos/:*path', 
  '/lista-de-deseos', 
  '/mis-compras',
  '/notificaciones',
  '/facturacion',
]

export function middleware(req) {
    // Obtener el token de la cabecera de la solicitud o de una cookie
    const {cookies} = req;
    const token = cookies.get('accessToken');
  
    const url = req.nextUrl.clone();

  // Verifica si la ruta actual está protegida
    if (!token && protectedRoutes.includes(url.pathname)) {
      // Si no hay token, redirige al login
      url.pathname = '/ingresar'
      return NextResponse.redirect(url);
      // const loginUrl = new URL('/ingresar', req.url)
    }  
    return NextResponse.next();

}
  
    // Ruta a proteger
    //  export const config = {
    //   matcher: ['/carrito', '/cursos/[id]',],
    // };
  
    // Puedes agregar más lógica para validar el token aquí, como decodificarlo

  // Si no está protegida o el token es válido, continúa con la solicitud