"use client";

import Link from "next/link";
import { SideMenu } from "./items";

export const MenuSidePrincipal = ({ onClick: toggleMenu}) => {
  const homeCategory = SideMenu.find((item) => item.category === "home");
  const serviciosCategory = SideMenu.find(
    (item) => item.category === "servicios"
  );
  const empresaCategory = SideMenu.find((item) => item.category === "empresa");

   const today = new Date();
  const reserv = today.getFullYear();
  return (
    <>
      <ul className="p-3 border-b">
        {homeCategory?.items.map((item) => (
          <li
            key={item.id}
            className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
            onClick={toggleMenu}
          >
            <Link
              href={item.href}
              className="flex items-center gap-3 p-3 text-lg"
            >
              {item.icon2}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <h3 className="ml-8 pt-2 font-semibold text-gray-400">
        Nuestros servicios
      </h3>
      <ul className="p-3 border-b">
        {serviciosCategory?.items.map((item) => (
          <li
            key={item.id}
            className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
            onClick={toggleMenu}
          >
            <Link
              href={item.href}
              className="flex items-center gap-3 p-3 text-lg"
            >
              {item.icon2}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <h3 className="ml-8 pt-2 font-semibold text-gray-400">Sobre nosotros</h3>
      <ul className="p-3 border-b">
        {empresaCategory?.items.map((item) => (
          <li
            key={item.id}
            className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
            onClick={toggleMenu}
          >
            <Link
              href={item.href}
              className="flex items-center gap-3 p-3 text-lg"
            >
              {item.icon2}
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
      <ul className="p-2">
        <li
          className="hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link href="/" className="text-sm text-link-100 font-semibold">
            Emprendedores Creativos &copy; {""}
          </Link>
          <span className="text-sm font-semibold">
            {reserv} Todos los derechos reservados.
          </span>
        </li>
      </ul>
    </>
  );
};
