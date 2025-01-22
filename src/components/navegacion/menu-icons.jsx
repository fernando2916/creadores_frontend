
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
import { Button } from "../ui/button";
import { useAuthStore } from '@/hooks/useAuthStore';



export const MenuIcons = () => {

  const {user, startLogout} = useAuthStore()

  return (
    <div>
        <ul className="flex items-center justify-center gap-4">
          <li className="hidden md:flex text-2xl">
            <FaSearch />
          </li>
          {/* DESEOS */}
          <HoverCard>
            <HoverCardTrigger className="hidden sm:flex">
              <FaHeart className="text-2xl hover:text-link-100" />
              <HoverCardContent className=" h-96">
                {/* CONTENIDO */}
                <div className=" overflow-y-scroll border-b border-slate-700 mb-3 h-[18rem]">
                  <div className="py-2">
                    <p className="mb-1">No hay deseos aún.</p>
                    <Button className="w-full">Añadir al carrito</Button>
                  </div>
                  <div className="py-2">
                    <p className="mb-1">No hay deseos aún.</p>
                    <Button className="w-full">Añadir al carrito</Button>
                  </div>
                  <div className="py-2">
                    <p className="mb-1">No hay deseos aún.</p>
                    <Button className="w-full">Añadir al carrito</Button>
                  </div>
                  <div className="py-2">
                    <p className="mb-1">No hay deseos aún.</p>
                    <Button className="w-full">Añadir al carrito</Button>
                  </div>
                  <div className="py-2">
                    <p className="mb-1">No hay deseos aún.</p>
                    <Button className="w-full">Añadir al carrito</Button>
                  </div>
                  <div className="py-2">
                    <p className="mb-1">No hay deseos aún.</p>
                    <Button className="w-full">Añadir al carrito</Button>
                  </div>
                </div>
  
                {/* FOOTER */}
                <Button className="w-full ">Ir a la lista de deseos</Button>
              </HoverCardContent>
            </HoverCardTrigger>
          </HoverCard>
          {/* CARRITO */}

          <HoverCard className="right-5">
            <HoverCardTrigger className="" href='/carrito'>
              <FaShoppingCart className="text-2xl hover:text-link-100" />
              <HoverCardContent className="h-auto">
                {/* CONTENIDO */}
                <div className="flex flex-col space-y-2 items-center justify-center">
                  <p className="justify-center text-gray-400">Tu carrito esta vacío</p>
                  <Button className="w-full ">Seguir comprando</Button>
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
                    <li className="hover:bg-nav-700 p-2 rounded-md  flex items-center gap-2">
                      <div className="">
                      <FaUserCircle className="text-3xl"/>
                      </div>
                      <div className="">
                      <p className="text-sm">
                        {user.name } </p>
                      <span className="text-link-100 text-xs">{user.email}</span>
                      </div>
                      </li>
                    <li className="hover:bg-nav-700 p-2 rounded-md  flex items-center gap-2">
                      <FaBell/>
                      Notificaciones
                      </li>
                    <li className="hover:bg-nav-700 p-2 rounded-md  flex items-center gap-2">
                      <FaHeart/>
                      Lista de deseos
                      </li>
                    <li className="hover:bg-nav-700 p-2 rounded-md  flex items-center gap-2">
                      <FaShoppingBasket/>
                      Mis compras
                      </li>
                    <li className="hover:bg-nav-700 p-2 rounded-md  flex items-center gap-2">
                      <FaLaptopCode/>
                      Mis aprendizaje
                      </li>
                    <li className="hover:bg-nav-700 p-2 rounded-md  flex items-center gap-2">
                      <FaFileAlt/>
                      Facturación
                      </li>
                    <li className="hover:bg-nav-700 p-2 rounded-md  flex items-center gap-2">
                      <FaUserCog/>
                      Soporte
                      </li>
                    <li className="hover:bg-nav-700 p-2 gap-2">
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
