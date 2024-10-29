'use client'
import Image from "next/image"
import { Typewriter } from "react-simple-typewriter"

export const HeaderFoto = () => {
  return (
    <header className=" pt-[5rem] relative bg-cover md:h-[45rem] lg:h-[65rem] z-10 ">
        <Image src='/backgroundfoto.webp' alt="Objetivo de cámara" className="opacity-70 h-full object-cover w-full" width={500} height={500}/>

        <div className="absolute w-full h-full flex flex-col top-0 items-center justify-center ">
        <div className="text-center p-3 space-y-3 md:space-y-7 relative lg:-top-24">
          <span className=" text-link-100 font-bold text-sm md:text-3xl">
            Agencia de Fotografía
          </span>
          <h3 className=" text-2xl md:text-7xl xl:text-9xl font-extrabold">
            <Typewriter
                words={[
                  "Fotografía Corporativa",
                  "Fotografía de Retrato",
                  "Fotografía de Producto",
                  "Fotografía de Estudio",
                ]}
                cursor
                typeSpeed={70}
                delaySpeed={1000}
                loop
                />
        </h3>
          <p className="text-lg md:text-4xl">
            ¡Dominando la fotografía de la A a la Z!
          </p>
        </div>
      </div>
    </header>
  )
}
