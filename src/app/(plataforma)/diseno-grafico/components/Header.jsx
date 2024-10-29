'use client'
import Image from "next/image";

import {Typewriter} from "react-simple-typewriter";


export const Header = () => {
  return (
    <header className="pt-[5rem] relative bg-cover md:h-[45rem] lg:h-[65rem] z-10">
      <Image
        src='/disenadores.webp'
        alt="diseñadores"
        className="opacity-30 h-full w-full object-cover"
        width={500}
        height={500}
        />
      <div className="absolute w-full h-full flex flex-col top-0 items-center justify-center ">
        <div className="text-center p-3 space-y-3 md:space-y-7 relative lg:-top-24">
          <span className=" text-link-100 font-bold text-sm md:text-3xl">
            Agencia de Diseño Gráfico
          </span>
          <h3 className="text-2xl md:text-7xl xl:text-9xl font-extrabold">
            Diseño Gráfico -
          </h3>
          <div className="text-link-100 text-3xl md:text-7xl xl:text-8xl font-extrabold md:mt-1">
            <Typewriter
                words={[
                "Identidad Corporativa",
                "Imagen Corporativa",
                "Ilustración",
                "Pre-prensa",
                "Diseño Editorial",
                "Tipografía",
                ]}
                cursor
                typeSpeed={70}
                delaySpeed={1000}
                loop
            />
          </div>
          <p className="text-lg md:text-4xl">
            Diseñamos profesionalmente cuidando todos los detalles.
          </p>
        </div>
      </div>
    </header>
  )
}
