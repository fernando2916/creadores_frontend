"use Client";
import Link from "next/link";

import { FaAngleRight, FaBars, FaTimes, FaUser } from "react-icons/fa";
import { useAuthStore } from "@/hooks/useAuthStore";
import { MenuDash } from "./MenuDash";
import { MenuSidePrincipal } from "./menuSidePrincipal";
import Image from "next/image";

export const SidebarMovile = ({ onClick: toggleMenu, showMenu: showMenu }) => {

  const { user, status } = useAuthStore();

  const isAuthenticated = status === "Authenticated";

  return (
    <aside>
      <div>
        <button
          className="bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 p-3 rounded-md outline-none"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>
      </div>
      <div
        className={`w-full bg-gray-900/60 dark:bg-nav-950/60 fixed inset-0 z-50 duration-150 ease-out justify-start items-end 
            ${showMenu ? "left-0" : "-left-full"}`}
      >
        <button
          className=" bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 p-3 rounded-md outline-none absolute top-5 right-5"
          onClick={toggleMenu}
        >
          <FaTimes />
        </button>

        <div
          className={`w-3/4 h-full bg-slate-200 dark:bg-nav-900 fixed transition-all duration-150 justify-between overflow-y-scroll ease-out 
              ${showMenu ? "left-0" : "-left-full"}`}
        >
          <div className="flex justify-center h-36 p-5
           items-center gap-3 py-3 bg-white dark:bg-nav-800">
            {status == "Authenticated" ? (
              <>
                <div className="">
                  {/* <Image src={} width={50} height={50} alt="imagen de perfil"/> */}
                </div>
                <div>
                  <span className="text-2xl">{user.name} </span>
                  <span className="text-2xl">{user.last_name}</span>
                  <div className="flex items-center gap-1">
                    <Link href="mi-cuenta" className="flex items-center gap-1">
                      <span className="text-base text-link-400">Mi Cuenta</span>
                      <FaAngleRight className="text-link-500 font-medium text-lg" />
                    </Link>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="p-5 ">
                  <div className="flex items-center gap-3 justify-center pb-3">
                    <div className="rounded-full">
                      <FaUser className="text-3xl" />
                    </div>
                    <div className="">
                      <span className="text-lg font-semibold ">
                        Entra a tu cuenta
                      </span>
                      <p className="text-xs text-justify text-slate-500">
                        Podrás comprar un artículo, comentar una publicación o
                        continuar con tu aprendizaje.
                      </p>
                    </div>
                  </div>
                  <Link href="/auth/ingresar" onClick={toggleMenu}>
                    <button className="flex justify-center items-center mx-auto bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 w-full p-2 rounded-lg transition-colors duration-150">
                      Ingresar
                    </button>
                  </Link>
                </div>
              </>
            )}
          </div>

          {isAuthenticated ? (
            <MenuDash onClick={toggleMenu}  />
          ) : (
            <MenuSidePrincipal onClick={toggleMenu} />
          )}
        </div>
      </div>
    </aside>
  );
};
