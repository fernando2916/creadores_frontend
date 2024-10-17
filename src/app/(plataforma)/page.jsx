"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { FaEnvelope } from "react-icons/fa";


export default function Page() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <header className="">
        <div className="w-full bg-gradient-to-r from-nav-700 to-link-700 p-4 md:p-6 lg:p-12 xl:h-[820px]">
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
                <Button className='flex items-center gap-3 w-full place-content-center' >
                  <FaEnvelope/>
                  Contacto
                </Button>
                </Link>
              </div>
            </div>
            <div className="md:flex justify-center bg-center w-auto p-5">
              <Image src='/maquina.webp' width={500} height={500} alt="imagen imprenta" className="w-full h-full" priority/>
            </div>
          </div>
        </div>
      </header>

      <main>
        
      </main>
    </>
  );
}