import Image from "next/image"

export const Header = () => {
  return (
    <header>
        <div className="pt-[5rem] relative bg-cover md:h-[65rem] z-10">
          <Image
            src='/disenadores.webp'
            alt="diseñadores"
            width={500}
            height={500}
            className="opacity-30 h-full w-full object-cover "
          />
          <div className="absolute w-full h-full flex flex-col top-0 items-center justify-center ">
            <div className="text-center p-3 space-y-3 md:space-y-7 relative lg:-top-24">
              <span className=" text-link-100 font-bold text-xs md:text-3xl">
                Agencia de Diseño Gráfico
              </span>
              <h3 className="text-lg md:text-5xl font-extrabold">
                Recursos y plantillas para diseñadores gráficos, freelances y
                estudiantes.
              </h3>
              <p className="text-sm md:text-xl">
                Archivos compatibles con paqueteria Adobe, CorelDraw, Tips
                Exclusivos en video, etc.
              </p>
            </div>
          </div>
        </div>
      </header>
  )
}
