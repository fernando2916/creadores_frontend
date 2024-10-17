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
            className="opacity-40 object-cover "
            width={1920}
            height={1080}
          />
          <div className="absolute w-full h-full flex flex-col top-0 items-center justify-center ">
            <div className="text-center p-3 space-y-3 md:space-y-7 relative lg:-top-24">
              <span className=" text-link-100 font-bold text-xs md:text-3xl">
                Agencia de Diseño Gráfico
              </span>
              <h3 className="text-lg md:text-5xl font-extrabold">
                Asesoramiento
              </h3>
            </div>
          </div>
        </div>
    </header>
  );
}