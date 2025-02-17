"use client";
import Link from "next/link";

import { useAuthStore } from "@/hooks/useAuthStore";



import {
  FaBell,
  FaBook,
  FaBriefcase,
  FaCamera,
  FaChalkboardTeacher,
  FaCircle,
  FaCog,
  FaDownload,
  FaFileAlt,
  FaHeart,
  FaHome,
  FaInfoCircle,
  FaLaptopCode,
  FaMailBulk,
  FaNewspaper,
  FaPen,
  FaPrint,
  FaShoppingBag,
  FaSignOutAlt,
  FaVideo,
} from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";

export const MenuDash = ({ onClick: toggleMenu}) => {

  const today = new Date();
  const reserv = today.getFullYear();

  const { startLogout } = useAuthStore();



  return (
    <>
      <ul className="p-3 border-b">
        <li
          className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link href="/" className="flex items-center gap-3 p-3 text-lg">
            <FaHome />
            Inicio
          </Link>
        </li>
        <li
          onClick={toggleMenu}
          className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
        >
          <Link href="/blog" className="flex items-center gap-3 p-3 text-xl">
            <FaBook />
            Blog
          </Link>
        </li>
        <li
          onClick={toggleMenu}
          className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
        >
          <Link href="/tienda" className="flex items-center gap-3 p-3 text-xl">
            <FaShoppingBag />
            Tienda
          </Link>
        </li>
        <li
          onClick={toggleMenu}
          className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
        >
          <Link href="/cursos" className="flex items-center gap-3 p-3 text-xl">
            <FaVideo />
            Cursos
          </Link>
        </li>
        <li
          className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link
            href="notificaciones"
            className="flex items-center justify-between gap-3 p-3 text-lg"
          >
            <div className="flex items-center gap-3">
              <FaBell />
              Notificaciones
            </div>
            <div className=" flex text-alerts-500 items-center pr-3 justify-center text-3xl relative">
              <FaCircle />
              <span className="text-sm absolute mx-auto text-white">5</span>
            </div>
          </Link>
        </li>
        <li
          className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link
            href="mis-cursos"
            className="flex items-center gap-3 p-3 text-lg"
          >
            <FaLaptopCode />
            Mi aprendizaje
          </Link>
        </li>
        <li
          className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link
            href="mis-compras"
            className="flex items-center gap-3 p-3 text-lg"
          >
            <FaShoppingBag />
            Mis compras
          </Link>
        </li>
        <li
          className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link
            href="lista-de-deseos"
            className="flex items-center gap-3 p-3 text-lg"
          >
            <FaHeart />
            Lista de deseos
          </Link>
        </li>

        {/* <li
            className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
            onClick={toggleMenu}
          >
            <Link href="mi-cuenta" className="flex items-center gap-3 p-3 text-lg">
              <FaUserCircle />
              Mi cuenta
            </Link>
          </li> */}
        <li
          className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link
            href="/facturacion"
            className="flex items-center gap-3 p-3 text-lg"
          >
            <FaFileAlt />
            Facturación
          </Link>
        </li>
        <li
          className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link href="/soporte" className="flex items-center gap-3 p-3 text-lg">
            <FaCog />
            Soporte técnico
          </Link>
        </li>
        <li
          className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link
            href="/"
            onClick={startLogout}
            className="flex items-center gap-3 p-3 text-lg"
          >
            <FaSignOutAlt />
            Salir
          </Link>
        </li>
      </ul>
      <ul className="p-3 border-b">
        <div className="flex items-center justify-start pl-7 text-link-500 font-semibold dark:text-slate-400 gap-3">
          <span className="">Nuestros Servicios</span>
        </div>
        <li
          className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link
            href="/diseno-grafico"
            className="flex items-center gap-3 p-3 text-lg"
          >
            <FaPen />
            Diseño Gráfico
          </Link>
        </li>
        <li
          className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link
            href="/fotografia"
            className="flex items-center gap-3 p-3 text-lg"
          >
            <FaCamera />
            Fotografía
          </Link>
        </li>
        <li
          className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link
            href="/diseno-y-desarrollo-web"
            className="flex items-center gap-3 p-3 text-lg"
          >
            <FaLaptopCode />
            Diseño y Desarrollo Web
          </Link>
        </li>
        <li
          className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link
            href="/impresion"
            className="flex items-center gap-3 p-3 text-lg"
          >
            <FaPrint />
            Impresión
          </Link>
        </li>
        <li
          className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link
            href="/asesorias"
            className="flex items-center gap-3 p-3 text-lg"
          >
            <FaChalkboardTeacher />
            Asesorias
          </Link>
        </li>
      </ul>
      <ul className="p-3 border-b">
        <div className="flex items-center justify-start pl-7 text-link-500 font-semibold dark:text-slate-400 gap-3">
          <span className="">Más de Emprendedores</span>
        </div>
        <li
          className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link
            href="/nosotros/sobre-nosotros"
            className="flex items-center gap-3 p-3 text-lg"
          >
            <FaInfoCircle />
            Sobre Nosotros
          </Link>
        </li>
        <li
          className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link
            href="/contacto"
            className="flex items-center gap-3 p-3 text-lg"
          >
            <FaMailBulk />
            Contacto
          </Link>
        </li>
        <li
          className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link
            href="/recursos"
            className="flex items-center gap-3 p-3 text-lg"
          >
            <FaDownload />
            Recursos
          </Link>
        </li>
        <li
          className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link
            href="/bolsa-de-trabajo"
            className="flex items-center gap-3 p-3 text-lg"
          >
            <FaBriefcase />
            Vacantes
          </Link>
        </li>
        <li
          className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link
            href="/nosotros/responsabilidad-social"
            className="flex items-center gap-3 p-3 text-lg"
          >
            <FaNewspaper />
            Responsabilidad Social
          </Link>
        </li>
        <li
          className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
          onClick={toggleMenu}
        >
          <Link
            href="/nosotros/politica-medioambiente"
            className="flex items-center gap-3 p-3 text-lg"
          >
            <FaEarthAmericas />
            Política de medio ambiente
          </Link>
        </li>
      </ul>
      <ul className="p-2">
        <li
          className="hover:bg-slate-400 dark:hover:bg-nav-700 pl-3 rounded-lg transition-all"
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
