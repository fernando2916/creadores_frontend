import Link from "next/link";
import { FaMoon, FaShoppingCart, FaSun } from "react-icons/fa";
import { Button } from "../ui/button";
import { useTheme } from "@/context/DarkModeProvider";

export const MenuAccount = () => {
  const { toggleTheme } = useTheme();

  return (
    <div className="flex items-center justify-center gap-0 sm:gap-2">
      <button onClick={toggleTheme} className="relative flex items-center outline-none  justify-center transition-colors h-8 w-8 text-slate-400 hover:text-link-100 dark:text-white dark:hover:text-link-100 ">
        <FaSun className="hidden dark:block text-xl"/>  
        <FaMoon className="dark:hidden text-xl"/>
      </button>
      <button className="flex items-center justify-center transition-colors h-8 w-8 box-content text-slate-400 hover:text-link-100 dark:text-white dark:hover:text-link-100">
        <Link href="/carrito">
          <FaShoppingCart className="text-xl" />
        </Link>
      </button>
      <div className="flex items-center gap-2">
        <Button className="hidden lg:block hover:text-link-200 dark:text-link-100 dark:hover:text-link-300 duration-300 transition-colors">
          <Link href="/auth/crear-cuenta">Registrarse</Link>
        </Button>
        <Button className="hidden md:block bg-btn-200 hover:bg-btn-400 dark:bg-btn-400 text-white dark:hover:bg-btn-600 duration-300 transition-colors px-3">
          <Link href="/auth/ingresar">Iniciar sesión</Link>
        </Button>
      </div>
    </div>
  );
};
