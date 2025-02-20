import {
  FaBell,
  FaFileAlt,
  FaHeart,
  FaLaptopCode,
  FaMoon,
  FaShoppingBasket,
  FaShoppingCart,
  FaSignInAlt,
  FaSun,
  FaUser,
  FaUserCircle,
  FaUserCog,
} from "react-icons/fa";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { useAuthStore } from "@/hooks/useAuthStore";
import Link from "next/link";
import { useTheme } from "@/context/DarkModeProvider";

export const MenuIcons = () => {
  const { user, startLogout } = useAuthStore();
  const { toggleTheme } = useTheme();

  return (
    <div>
      <ul className="flex items-center justify-center gap-1 sm:gap-2">
        <button
          onClick={toggleTheme}
          className="relative flex items-center outline-none justify-center transition-colors text-slate-400 hover:text-link-100 dark:text-white dark:hover:text-link-100"
        >
          <FaSun className="hidden dark:block text-xl" />
          <FaMoon className="dark:hidden text-xl" />
        </button>
        {/* DESEOS */}
        <div>
          <button type='button' className="flex items-center justify-center transition-colors rounded-lg h-8 w-8 text-slate-400 hover:text-link-100 dark:text-white dark:hover:text-link-100">
            <Link href="/mi-cuenta/mis-deseos">
              <FaHeart className="text-xl" />
            </Link>
          </button>
        </div>
        {/* CARRITO */}

        <Link className="" href="/carrito">
          <button type='button' className="flex items-center justify-center transition-colors rounded-lg  text-slate-400 hover:text-link-100 dark:text-white dark:hover:text-link-100">
            <FaShoppingCart className="text-2xl hover:text-link-100" />
          </button>
        </Link>
        {/* PERFIL */}
        <HoverCard className="">
          <HoverCardTrigger className="hidden md:flex">
            <FaUser className="rounded-lg text-xl text-slate-400 hover:text-link-100 dark:text-white dark:hover:text-link-100" />
            <HoverCardContent className="w-[15rem]">
              {/* CONTENIDO */}
              <div className=" overflow-y-scroll mb-3 ">
                <ul className="space-y-1">
                  <li className="p-2 rounded-md  flex items-center gap-2">
                    <div className="">
                      <FaUserCircle className="text-3xl" />
                    </div>
                    <div className="">
                      <p className="text-sm">{user.name} </p>
                      <span className="text-link-400 dark:textlink-100 font-semibold text-xs">
                        {user.email}
                      </span>
                    </div>
                  </li>

                  <li>
                  <Link href="/notificaciones">
                    <button type='button' className="hover:bg-slate-400 dark:hover:bg-nav-700 p-2 rounded-md  flex items-center gap-2">
                      <FaBell />
                      Notificaciones
                    </button>
                  </Link>
                  </li>

                  <li>

                  <Link href="/mi-cuenta/mi-perfil">
                    <button type='button' className="hover:bg-slate-400 dark:hover:bg-nav-700 p-2 rounded-md  flex items-center gap-2">
                      <FaUserCircle />
                      Mi perfil
                    </button>
                  </Link>
                  </li>

                  <li>

                  <Link href="/mi-cuenta/mis-compras">
                    <button type='button' className="hover:bg-slate-400 dark:hover:bg-nav-700 p-2 rounded-md  flex items-center gap-2">
                      <FaShoppingBasket />
                      Mis compras
                    </button>
                  </Link>
                  </li>

                  <li>

                  <Link href="/mi-cuenta/mis-cursos">
                    <button type='button' className="hover:bg-slate-400 dark:hover:bg-nav-700 p-2 rounded-md  flex items-center gap-2">
                      <FaLaptopCode />
                      Mis aprendizaje
                    </button>
                  </Link>
                  </li>

                  <li>

                  <Link href="/facturacion">
                    <button type='button' className="hover:bg-slate-400 dark:hover:bg-nav-700 p-2 rounded-md  flex items-center gap-2">
                      <FaFileAlt />
                      Facturación
                    </button>
                  </Link>
                  </li>

                  <li className="hover:bg-slate-400 dark:hover:bg-nav-700 p-2 rounded-md  flex items-center gap-2">
                    <FaUserCog />
                    Soporte
                  </li>
                  <li className="hover:bg-slate-400 dark:hover:bg-nav-700 p-2 gap-2">
                    <button
                      className="flex items-center gap-2"
                      onClick={startLogout}
                    >
                      <FaSignInAlt />
                      Salir
                    </button>
                  </li>
                </ul>
              </div>
            </HoverCardContent>
          </HoverCardTrigger>
        </HoverCard>
      </ul>
    </div>
  );
};
