import Link from "next/link";
import { FaMoon, FaShoppingCart, FaSun } from "react-icons/fa";
import { Button } from "../ui/button";
import { useTheme } from "@/context/DarkModeProvider";

export const MenuAccount = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-center gap-0 sm:gap-2">
      <button onClick={toggleTheme} className="relative flex items-center justify-center text-white transition-colors bg-btn-400 rounded-full h-11 w-11 hover:bg-btn-600  dark:bg-btn-400 dark:text-white dark:hover:bg-btn-600 dark:hover:text-white">
        <FaSun className="hidden dark:block"/>  
        <FaMoon className="dark:hidden"/>
      </button>
      <button>
        <Link href="/carrito">
          <FaShoppingCart className="text-2xl hover:text-link-100" />
        </Link>
      </button>
      <div className="flex items-center gap-2">
        <Button className="hidden lg:block text-link-100 hover:text-link-300 duration-300 transition-colors">
          <Link href="/auth/crear-cuenta">Registrarse</Link>
        </Button>
        <Button className="hidden md:block bg-btn-400 hover:bg-btn-600 duration-300 transition-colors px-3">
          <Link href="/auth/ingresar">Iniciar sesión</Link>
        </Button>
      </div>
    </div>
  );
};
