"use client";

import Link from "next/link";
import { FaBars, FaTimes, FaAngleRight, FaUser } from "react-icons/fa";
import { SideMenu } from "./items";

export const SidebarPrincipal = ({
  onClick: toggleMenu,
  showMenu: showMenu,
}) => {
  const homeCategory = SideMenu.find((item) => item.category === "home");
  const serviciosCategory = SideMenu.find(
    (item) => item.category === "servicios"
  );
  const empresaCategory = SideMenu.find((item) => item.category === "empresa");

  const today = new Date();
  const reserv = today.getFullYear();
  return (
    <>
      <div>
        <button
          className=" bg-btn-400 hover:bg-btn-600 transition-colors duration-150 p-3 rounded-md outline-none"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>
      </div>
      {/* ! contenido */}
      <div
        className={`w-full bg-nav-950/60 fixed inset-0 z-50 duration-300 ease-out  
        ${showMenu ? "left-0" : "-left-full"}`}
      >
        <button
          className=" bg-btn-400 hover:bg-btn-600 transition-colors duration-150 p-3 rounded-md outline-none absolute top-5 right-5"
          onClick={toggleMenu}
        >
          <FaTimes />
        </button>
        <div
          className={`w-3/4 h-full bg-nav-900 fixed transition-all duration-300 overflow-y-scroll ease-out ${
            showMenu ? "left-0" : "-left-full"
          }`}
        >
          <div className="p-5 bg-nav-800">
            <div className="flex items-center gap-3 justify-center mx-5 pb-3">
              <div className="rounded-full">
                <FaUser className="text-3xl" />
              </div>
              <div className="">
                <span className="text-lg font-semibold ">
                  Entra a tu cuenta
                </span>
                <p className="text-xs text-justify text-gray-300">
                  Podrás comprar un artículo, comentar una publicación o
                  continuar con tu aprendizaje.
                </p>
              </div>
            </div>
            <Link href="/auth/ingresar" onClick={toggleMenu}>
              <button className="flex justify-center items-center mx-auto bg-btn-400 hover:bg-btn-600 text-white w-full p-2 rounded-lg">
                Ingresar
              </button>
            </Link>
          </div>

          <div>
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
            <h3 className="ml-8 pt-2 font-semibold text-gray-400">
              Sobre nosotros
            </h3>
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
          </div>
        </div>
      </div>
    </>
  );
};
