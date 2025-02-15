import Image from "next/image";
import Link from "next/link";
import {
  FaCalendar,
  FaEye,
  FaNewspaper,
  FaRegComment,
  FaRegThumbsUp,
  FaUserCircle,
} from "react-icons/fa";

export const Posts = () => {
  return (
    <section className="pb-16">
      <div className="lg:container mx-auto px-5">
        <h1 className="mb-4 text-2xl font-semibold">Últimos Artículos</h1>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-8">
          <Link href="#" className="block rounded-lg overflow-hidden mb-4">
            <article className="bg-slate-400 dark:bg-nav-800">
              <div className="">
                <Image
                  src="/Equipo.webp"
                  className="object-cover aspect-video w-full relative"
                  alt="imagen en espera"
                  width={500}
                  height={500}
                />
                <p className="">Fecha de publicación</p>
              </div>
              <div className="p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="bg-categoria-100 py-1 rounded-md px-2 text-sm font-bold">
                    categoria
                  </span>
                  <div className="flex items-center justify-center gap-3 text-sm ">
                    <div className="flex items-center gap-1">
                      <FaNewspaper className="mt-0.5" />
                      <p className="capitalize">tipo</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaEye className="mt-0.5" />
                      <p>tiempo_de_lectura</p>
                    </div>
                  </div>
                </div>

                <h3 className="mb-2 text-2xl font-semibold hover:text-link-200">
                  titulo
                </h3>
                <div className="">
                  <p className="line-clamp-3 text-justify text-sm text-gray-300">
                    descripción_corta
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex justify-center items-center gap-3">
                    <div className="flex items-center gap-1 justify-center">
                      <FaRegThumbsUp />
                      <p>0</p>
                    </div>
                    <div className="flex items-center gap-1 justify-center">
                      <FaRegComment />
                      <p>3</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-3 text-sm ">
                    <div className="flex items-center gap-1">
                      <FaUserCircle className="mt-0.5" />
                      <p className="capitalize">autor</p>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaCalendar className="mt-0.5" />
                      {/* <FormatearFechaCondicional fecha='created_at'/> */}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </Link>
        </div>
      </div>
    </section>
  );
};
