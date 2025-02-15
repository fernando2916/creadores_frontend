import Section from "@/components/shared/Section";
import { ItemsBlog } from "./ItemsBlog";
import {
  FaBook,
  FaCalendar,
  FaClock,
  FaUserCircle,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";


export const InfoBlog = () => {
  return (
    <>
    <Section
        className="bg-slate-300 dark:bg-cont-100 p-10 "
        title="Últimas Entradas"
        description="Descubre las nuevas novedades sobre el mundo del diseño y sus distintas áreas."
        content={
          <>
            <div className="lg:max-w-7xl md:mx-auto mt-10">
              {ItemsBlog.length ? (
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pb-3">
                  {ItemsBlog.map((post) => (
                    <Link
                      key={post.Titulo}
                      className="block rounded-lg overflow-hidden mb-4"
                      href="/blog/30"
                    >
                      <article className="relative flex flex-col rounded-lg overflow-hidden shadow-lg bg-slate-400 text-white dark:bg-nav-800">
                        <div className="relative aspect-video overflow-hidden">
                          <Image src={post.img} alt="" width={500} height={500} />
                          <span className="bg-btn-200 dark:bg-btn-600 py-1 rounded-md px-2 text-sm font-bold absolute top-3 left-3">
                            Nuevo
                          </span>
                          <span className="bg-categoria-200 dark:bg-categoria-100 py-1 rounded-md px-2 text-sm font-bold absolute top-3 left-20">
                            {post.Categoria}
                          </span>
                        </div>
                        <div className="p-4 space-y-3">
                          <div className=" text-base md:text-lg">
                            <h3 className="mb-2 text-2xl font-semibold text-link-500 dark:text-link-200">
                              {post.Titulo}
                            </h3>
                            <div className=" mt-3">
                              <p className="line-clamp-3 text-justify text-sm ">
                                {post.Descripcion}
                              </p>
                            </div>
                            <div className="flex justify-between gap-4 text-sm my-2">
                              <div className="flex items-center gap-1">
                                <FaClock />
                                <p>Lectura de: {post.Tiempo}</p>
                              </div>
                              <div className="flex items-center gap-1">
                                <FaCalendar />
                                <p>{post.FechaPublicacion}</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-1.5 text-sm mt-3">
                              <FaUserCircle />
                              <p className="text-link-500 dark:text-link-200">{post.Autor}</p>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-center mx-auto"></div>
                      </article>
                    </Link>
                  ))}
                </ul>
              ) : (
                <p className="">No hay Post aún</p>
              )}
              <div className="flex justify-center mx-auto">
                <Link href="/blog">
                  <button
                    className="bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 py-2 px-6 text-xl font-medium rounded-md flex items-center gap-1"
                    type="button"
                  >
                    <FaBook />
                    Ver Más
                  </button>
                </Link>
              </div>
            </div>
          </>
        }
      />
    </>
  )
}
