import Link from "next/link"
import { Button } from "../ui/button"
import { FaShoppingCart } from "react-icons/fa"

export const MenuAccount = () => {
  return (
    <div className="flex items-center justify-center gap-0 sm:gap-2">
      <button>
        <Link href="/carrito">
          <FaShoppingCart className="text-2xl hover:text-link-100" />
        </Link>
      </button>
      <div className="flex items-center gap-2">
        <Button variant="link" className="bg-transparent hidden lg:block">
          <Link href="/auth/crear-cuenta">Registrarse</Link>
        </Button>
        <Button className="hidden md:block">
          <Link href="/auth/ingresar">Iniciar sesión</Link>
        </Button>
      </div>
    </div>
  )
}
