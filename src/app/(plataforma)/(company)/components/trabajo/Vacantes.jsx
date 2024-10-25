'use client'

import Link from "next/link";

import { useEffect, useState } from "react";
import { FaCalendar, FaClock, FaDollarSign } from "react-icons/fa";

import { ItemsVacantes } from "./ItemsVacantes";
import { FaLocationDot } from "react-icons/fa6";
import { WorkInfo } from "./WorkInfo";
import { WorkModal } from "./WorkModal";


export const Vacantes = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    
      const [isWork, setIsWork] = useState(true);
  return (
    <>
    <header className="pt-[4rem]">
      <div className="p-[3rem] md:py-[9rem] items-center mx-auto text-center bg-cont-100 ">
        <span className=" text-link-100 font-bold text-xs md:text-3xl">
          Agencia de Diseño Gráfico, Fotografía eh Impresión
        </span>
        <h3 className="text-lg md:text-5xl font-extrabold my-5">Vacantes</h3>
        <p className="text-sm md:text-xl">
          Encuentra el trabajo de tus sueños; ofrecemos vacantes para
          diseñadores, desarrolladores, fotográfos, impresores y mucho más!
        </p>
      </div>
    </header>
    <main className="m-5">
      {isWork ? (
        <>
          <p className="font-bold text-xl md:text-3xl container mx-auto">
            Nuestras Vacantes Disponibles
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-10 lg:container mx-auto">
            {ItemsVacantes.map((item) => (
              <li key={item.Puesto}>
                <div className="bg-nav-800 rounded-2xl flex flex-col p-5 md:items-center">
                  <div className="">
                      <h3 className="text-2xl font-semibold text-btn-50">
                        {item.Puesto}
                      </h3>
                    <ul className=" mt-2 mb-5 space-y-2">
                      <li className=" font-medium flex items-center gap-1">
                        <FaLocationDot />
                        {item.Opcion}
                      </li>
                      <li className=" font-medium flex items-center gap-1">
                        <FaClock />
                        {item.Horario}
                      </li>
                      <li className=" font-meduim gap-1 flex items-center ">
                        <FaDollarSign />
                        {item.Sueldo}
                      </li>
                      <li className="flex items-center gap-1">
                        <FaCalendar />
                        <p className="text-sm font-medium">
                          Último día para postularse:{" "}
                        </p>
                        {item.Post}
                      </li>
                    </ul>
                  </div>
                  <div className=" flex gap-5 justify-center items-center">
                    <WorkInfo />
                    <WorkModal />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center my-20">
            <h2 className="text-3xl text-center font-semibold">
              Por el momento no tenemos vacantes disponibles.
            </h2>
            <Link href="/contacto">
              <button
                type="button"
                className="bg-btn-400 hover:bg-btn-600 transition-colors duration-150 rounded-md p-3 mt-5"
              >
                Solicitar Información
              </button>
            </Link>
          </div>
        </>
      )}
    </main>
  </>
  )
}
