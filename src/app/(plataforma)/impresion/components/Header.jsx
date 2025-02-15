'use client'

import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"

export const Header = () => {
  return (
    <header>
      <div className="relative bg-cover md:h-[45rem] lg:h-[65rem] z-10">
        <Image
          src='/plotter.webp'
          alt="diseñadores"
          width={500}
          height={500}
          className="opacity-30 h-full w-full object-cover "
        />
        <div className="absolute w-full h-full flex flex-col top-0 items-center justify-center ">
          <div className="text-center p-3 space-y-3 md:space-y-7 relative lg:-top-24">
            <span className="font-bold text-sm md:text-3xl">
              Agencia de Diseño Gráfico
            </span>
            <h3 className=" text-xl md:text-7xl xl:text-8xl font-extrabold">
              Servicio de Impresión -{" "}
            </h3>
            <div className="text-link-300 dark:text-link-100 text-3xl md:text-7xl xl:text-8xl font-extrabold md:mt-1">
              <Typewriter
                  words={[
                    "Serigrafía",
                    "Sublimación",
                    "Offset Digital",
                    "Corte de Vinil",
                    "Bordado",
                    "Grabado Láser",
                    "Impresión Personalizada",
                ]}
                cursor
                typeSpeed={70}
                delaySpeed={1000}
                loop

              />
            </div>
            <p className="text-sm md:text-xl">
              Servicios 360º: desde el diseño hasta el producto final.
            </p>
          </div>
        </div>
      </div>
    </header>
  )
}
