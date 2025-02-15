import Image from "next/image"
import Link from "next/link"
import { FaClock, FaDollarSign, FaHeart, FaLaptop, FaShoppingCart, FaStar, FaYoutube } from "react-icons/fa"
import { FaEarthAmericas } from "react-icons/fa6"

export const Recomended = () => {
  return (
    <section className="max-w-7xl mx-5 lg:mx-auto m-10 p-5">
      <h3 className="text-center text-4xl font-semibold">Cursos recomendados</h3>
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 ">
        <article className="relative flex flex-col rounded-lg overflow-hidden bg-slate-300 dark:bg-nav-800 shadow-lg ">
            <Link href='/cursos/Programación-desde-cero-2023'>
            <div className="relative aspect-video w-auto h-auto overflow-hidden">
              <Image src='/marketing.webp' alt="" className="" width={500} height={500} />
                <span className='bg-categoria-200 text-white dark:bg-categoria-100 py-1 rounded-md px-2 text-sm font-bold absolute top-3 left-3'>Desarrollo web</span>
                          <div className="absolute top-2 right-2 text-xl bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 p-3 rounded-full">
            <FaHeart title="Agregar a mis deseos"/>
            </div>
            </div>
            <div className="p-2">
              <div className="grid grid-cols-8 text-base md:text-lg">
                <h2 className="font-semibold line-clamp-1 col-span-5">Programación desde cero 2023 </h2>
              <p className="col-span-3 text-end font-semibold">$350.00 MXN</p>
              </div>
                <div className="flex items-center gap-2 mb-2">    
                <p>Instructor</p>
                <div className="flex items-center gap-1 text-sm">
                  <FaStar className='text-yellow-600'/>
                  <FaStar className='text-yellow-600'/>
                  <FaStar className='text-yellow-600'/>
                  <FaStar className='text-yellow-600'/>
                  <FaStar className='text-yellow-600'/>
                  <span>(15.3)</span>
              </div>
                </div>
              <div className="">
                <p className="flex items-center gap-1.5 text-sm"><FaEarthAmericas/>
                  Idioma: <strong>Español</strong>
                </p>
                <p className="flex items-center gap-1.5 text-sm"><FaYoutube/>
                  Duración: <strong>17,5 horas de vídeo</strong>
                </p>
                <p className="flex items-center gap-1.5 text-sm"><FaClock/>
                  Última actualización: <strong>6/2018</strong>
                </p>
              </div>
            </div>
             <div className=" grid grid-cols-12 items-center p-2 gap-2">
                  <button
                    type="button"
                    className="bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 rounded-md p-2 flex items-center gap-1 text-sm font-semibold col-span-6 justify-center"
                  >
                    <FaShoppingCart />
                    Añadir al carrito
                  </button>
                  <button
                    type="button"
                    className="bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 rounded-md p-2 flex items-center gap-2 text-sm font-semibold col-span-6 justify-center"
                  >
                    <FaDollarSign />
                    Comprar
                  </button>
                </div>
              </Link>
          </article>

      </div>
      <Link href='/cursos'>
      <button type="button" className="bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 rounded-md p-2 flex items-center gap-2 font-medium justify-center mx-auto mt-10">
      <FaLaptop/>
        Ver todos los cursos
        </button>
        </Link>
    </section>
  )
}
