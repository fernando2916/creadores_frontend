
import Link from "next/link";

import {
  FaBook,
  FaBuffer,
  FaBuilding,
  FaHome,
  FaShoppingBag,
  FaVideo,
} from "react-icons/fa";

import { company, servicios } from "./items";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../ui/navigation-menu";



export const MenuPrincial = () => {
    return (
        <nav>
        <ul className="flex items-center justify-center gap-3 text-sm lg:text-base">
          <li className=" hover:text-link-100 transition-colors duration-150">
            <Link href="/" className="flex items-center gap-1">
              <FaHome />
              Inicio
            </Link>
          </li>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <FaBuffer className="mr-1 " />
                  Servicios
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>
                    <ul className="p-3 space-y-2 text-base">
                      {servicios.map((servicio) => (
                        <li
                          key={servicio.name}
                          className="hover:bg-slate-400 dark:hover:bg-nav-700 rounded-md transition-colors duration-150 px-5 py-2 w-64"
                        >
                          <Link href={servicio.href} className="flex items-center gap-2">
                            {servicio.icon}
                            {servicio.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <li className="hover:text-link-100 transition-colors duration-150">
            <Link href="/blog" className="flex items-center gap-1">
              <FaBook />
              Blog
            </Link>
          </li>
          <li className="hover:text-link-100 transition-colors duration-150">
            <Link href="/tienda" className="flex items-center gap-1">
              <FaShoppingBag />
              Tienda
            </Link>
          </li>
          <li className="hover:text-link-100 transition-colors duration-150">
            <Link href="/cursos" className="flex items-center gap-1">
              <FaVideo />
              Cursos
            </Link>
          </li>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <FaBuilding className="mr-1 " />
                  Nosotros
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <NavigationMenuLink>
                    <ul className="p-3 space-y-2 text-base">
                      {company.map((item) => (
                        <li
                          key={item.name}
                          className="hover:bg-slate-400 dark:hover:bg-nav-700 rounded-md transition-colors duration-150 px-5 py-2 w-64"
                        >
                          <Link href={item.href} className="flex items-center gap-2">
                            {item.icon}
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuLink>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </ul>
      </nav>
      );
}
