
import {
  FaBell,
  FaFileAlt,
  FaHeart,
  FaLaptopCode,
  FaSearch,
  FaShoppingBasket,
  FaShoppingCart,
  FaSignInAlt,
  FaUser,
  FaUserCircle,
  FaUserCog,
} from "react-icons/fa";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { useAuthStore } from '@/hooks/useAuthStore';
import Link from "next/link";



export const MenuIcons = () => {

  const {user, startLogout} = useAuthStore()

  return (
    <div>
        <ul className="flex items-center justify-center gap-4">
          <li className="hidden md:flex text-2xl">
            <FaSearch />
          </li>
          {/* DESEOS */}
          <div>
            <button className="flex items-center justify-center text-white transition-colors bg-btn-400 rounded-lg h-10 w-10 box-content hover:bg-btn-600  dark:bg-btn-400 dark:text-white dark:hover:bg-btn-600 dark:hover:text-white">

            <Link href='/mi-lista-de-deseos'>
              <FaHeart  />
            </Link>
            </button>
          </div>
          {/* CARRITO */}

          <HoverCard className="right-5">
            <HoverCardTrigger className="" href='/carrito'>
              <FaShoppingCart className="text-2xl hover:text-link-100" />
              <HoverCardContent className="h-auto">
                {/* CONTENIDO */}
                <div className="flex flex-col space-y-2 items-center justify-center">
                  <p className="justify-center text-gray-400">Tu carrito esta vacío</p>
                  <button className="w-full flex justify-center py-2 rounded-md text-base font-bold text-white bg-btn-400 hover:bg-btn-600 disabled:bg-btn-600 transition-all ease-in gap-2 items-center">Seguir comprando</button>
                </div>
                {/* <div className=" overflow-y-scroll mb-3 h-auto">
                  <div className="py-2">
                    <p className="mb-1">Item</p>
                  </div>
  
                <Button className="w-full ">Ir al carrito</Button>
                </div> */}
  
              </HoverCardContent>
            </HoverCardTrigger>
          </HoverCard>
          {/* PERFIL */}
          <HoverCard className="">
            <HoverCardTrigger className="hidden md:flex">
              <FaUser className="text-2xl hover:text-link-100" />
              <HoverCardContent className="w-[15rem]">
                {/* CONTENIDO */}
                <div className=" overflow-y-scroll mb-3 ">
                  <ul className="space-y-1">
                    <li className="bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 p-2 rounded-md  flex items-center gap-2">
                      <div className="">
                      <FaUserCircle className="text-3xl"/>
                      </div>
                      <div className="">
                      <p className="text-sm">
                        {user.name } </p>
                      <span className="text-link-100 text-xs">{user.email}</span>
                      </div>
                      </li>
                    <li className="bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 p-2 rounded-md  flex items-center gap-2">
                      <FaBell/>
                      Notificaciones
                      </li>
                    <li className="bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 p-2 rounded-md  flex items-center gap-2">
                      <FaHeart/>
                      Lista de deseos
                      </li>
                    <li className="bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 p-2 rounded-md  flex items-center gap-2">
                      <FaShoppingBasket/>
                      Mis compras
                      </li>
                    <li className="bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 p-2 rounded-md  flex items-center gap-2">
                      <FaLaptopCode/>
                      Mis aprendizaje
                      </li>
                    <li className="bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 p-2 rounded-md  flex items-center gap-2">
                      <FaFileAlt/>
                      Facturación
                      </li>
                    <li className="bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 p-2 rounded-md  flex items-center gap-2">
                      <FaUserCog/>
                      Soporte
                      </li>
                    <li className="bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 p-2 gap-2">
                      <button className="flex items-center gap-2" 
                      onClick={startLogout}
                      >

                      <FaSignInAlt/>
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
  )
}
