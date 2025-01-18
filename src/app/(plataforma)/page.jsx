"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";
import { Servicios } from "./(home)/Servicios";
import { InfoBlog } from "./blog/components/InfoBlog";
import { Recomended } from "./cursos/components/Recomended";
import { InfoMarcas } from "./(home)/InfoMarcas";
import { InfoTienda } from "./tienda/components/InfoTienda";
import { SuscripBoletin } from "./(company)/contacto/components/SuscripBoletin";
import { InfoEquipo } from "./(home)/InfoEquipo";
import { InfoTestimoniales } from "./(home)/InfoTestimoniales";


export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className="pt-[5rem]">
        <div className="w-full bg-gradient-to-r from-nav-700 to-link-700 p-4 md:p-6 lg:p-12 xl:h-[950px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-10 place-content-center">
            <div className="grid place-content-center p-10 gap-y-3 lg:mx-24 xl:h-[500px]">
              <div className="text-5xl font-semibold text-left">
                Emprendedores Creativos &copy;
                <p className="py-3 text-white text-base font-normal text-justify">
                  Una identidad visual correctamente desarrollada, llamara la
                  atención de tus clientes y lograra que se acuerden de ti a
                  futuro, eso se logra trabajando de la mano con profesionales.
                </p>
              </div>
              <div className="flex flex-col gap-2 w-full">
                <Link href='/contacto'>
                <Button className='bg-btn-400 hover:bg-btn-600 transition-colors duration-300 flex items-center gap-3 w-full place-content-center' >
                  <FaEnvelope/>
                  Contacto
                </Button>
                </Link>
              </div>
            </div>
            <div className="md:flex justify-center bg-center w-auto p-5">
              <Image src='/maquina.svg' width={80} height={80} alt="imagen imprenta" className="w-full h-full" priority/>
            </div>
          </div>
        </div>
      </header>

      <main>
        <Servicios/>
        <InfoBlog/>
        <Recomended/>
        <InfoMarcas/>
        <InfoTienda/>
        <SuscripBoletin/>
        <InfoEquipo/>
        <InfoTestimoniales/>
      </main>
    </>
  );
}
