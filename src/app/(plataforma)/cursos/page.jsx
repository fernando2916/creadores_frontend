
import Image from "next/image";
import Link from "next/link";
import {  FaStar } from "react-icons/fa";
import { Buscador } from "./components/Buscador";
import { HeaderCursos } from "./components/HeaderCursos";
import { Universidades } from "./components/Universidades";

export const metadata = {
  title: "Cursos",
};

export default function CursosPage() {
  return (
    <>
    <HeaderCursos/>
    <Universidades/>
      <main className="pt-[5rem]">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 my-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <aside className="hidden md:block">
            <div className="mb-4">
              <p className="text-lg font-semibold">Ordenar por</p>
              <div className="w-48">
                <div className="w-full">
                  <select className="form-select block w-full pl-3 pr-10 p-3 text-base sm:text-sm shadow-sm rounded-md border-2 bg-transparent focus:outline-none border-link-300 ">
                  <option className="bg-transparent" value="">Más Recientes</option>
                  <option className="bg-transparent" value="">Más Alumnos</option>
                  <option className="bg-transparent" value="">Mejor Calificado</option>
                </select>
                </div>
              </div>
            </div>
            <div className="mb-4">
            <button className="p-2 rounded-md bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 font-semibold mt-2">
              APLICAR FILTROS
            </button>
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold">Categorías</p>
              <ul>
                <li>
                  <label>
                    <input type="checkbox" className="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"/>
                    Desarrollo web
                  </label>
                  </li>
                <li>
                  <label>
                    <input type="checkbox" className="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"/>
                    Diseño Web
                  </label>
                  </li>
              </ul>
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold">Niveles</p>
              <ul>
                <li>
                  <label>
                    <input type="checkbox" className="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"/>
                    Desarrollo web
                  </label>
                  </li>
                <li>
                  <label>
                    <input type="checkbox" className="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"/>
                    Diseño Web
                  </label>
                  </li>
              </ul>
            </div>
            <div className="mb-4">
              <p className="text-lg font-semibold">Precios</p>
              <ul>
                <li>
                  <label>
                    <input type="checkbox" className="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"/>
                    Gratis
                  </label>
                  </li>
                <li>
                  <label>
                    <input type="checkbox" className="rounded dark:bg-gray-900 border-gray-300 dark:border-gray-700 text-indigo-600 shadow-sm focus:ring-indigo-500 dark:focus:ring-indigo-600 dark:focus:ring-offset-gray-800"/>
                    De pago
                  </label>
                  </li>
              </ul>
            </div>

          </aside>
          <div className="col-span-3">
            <div className="mb-12">
             <Buscador/>
            </div>
            <ul className="space-y-4">
            <li className="">
              <Link href='/cursos/aprende' className="block sm:flex w-full">
                <figure>
                  <Image src='/tren maya.jpg' className="w-full sm:w-36 md:w-64 aspect-[16/9] object-cover object-center" width={500} height={500} alt=" Imagen"/>
                </figure>
                <div className="flex-1 mt-2 sm:mt-0 sm:ml-4 sm:mr-6 lg:mr-12">
                  <h3 className="text-lg mb-1 leading-5 text-link-100">Aprende a documentar APIs con Swagger</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 line-clamp-3 mb-1">
                  Aprende a documentar APIs con Swagger de manera clara y profesional. Domina OpenAPI, genera documentación interactiva y facilita la integración de tus servicios.
                  </p>
                  <p className="text-slate-600 dark:text-slate-300 text-sm font-semibold mb-1">Prof: Victor Arana Flores</p>
                  <div className="flex items-center">
                    <ul className="flex items-center space-x-1 text-xs">
                      <li>
                        <FaStar className="text-alerts-300"/>
                      </li>
                      <li>
                        <FaStar className="text-alerts-300"/>
                      </li>
                      <li>
                        <FaStar className="text-alerts-300"/>
                      </li>
                      <li>
                        <FaStar className="text-alerts-300"/>
                      </li>
                      <li>
                        <FaStar className="text-alerts-300"/>
                      </li>
                    </ul>
                    <span className="text-sm text-slate-600 dark:text-slate-200 font-semibold ml-1">
                      (5)
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex items-center sm:block">
                    <p className="font-semibold text-slate-600 dark:text-slate-200">$ 450.00 MXN</p>
                  </div>
                </div>
              </Link>
            </li>
          </ul>
            <div className=""></div>
          </div>          
        </div>
        </div>
      </main>
    </>
  );
}
