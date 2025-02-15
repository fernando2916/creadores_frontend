import Image from "next/image";

export const metadata = {
  title: 'Asesorias'
}

export default function AsesoriasPage() {
  return (
    <header className="pt-[5rem]">
       <div className="relative bg-cover md:h-[45rem] lg:h-[65rem] z-10">
          <Image
            src="/tutor.webp"
            alt="diseñadores"
            className="opacity-40 object-cover w-full h-full "
            width={500}
            height={500}
          />
          <div className="absolute w-full h-full flex flex-col top-0 items-center justify-center ">
            <div className="text-center p-3 space-y-3 md:space-y-7 relative lg:-top-24">
              <span className="font-bold text-xs md:text-3xl text-black dark:text-link-100">
                Agencia de Diseño Gráfico
              </span>
              <h3 className="text-lg md:text-6xl font-extrabold">
                Asesoramiento
              </h3>
            </div>
          </div>
        </div>
    </header>
  );
}