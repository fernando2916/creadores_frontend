import Image from "next/image"
import Link from "next/link"
import { FaClock, FaDollarSign, FaHeart, FaRegStar, FaShoppingCart, FaStar, FaYoutube } from "react-icons/fa"
import { FaEarthAmericas } from "react-icons/fa6"

export const Contenido = () => {
  return (
    <section className="max-w-7xl md:mx-auto my-10">
      <div className="mx-5">
        <h2 className="text-3xl font-semibold"> Cursos más vistos</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-8 mt-5">
          <article className="relative flex flex-col rounded-lg overflow-hidden shadow-lg bg-nav-800">
            <Link href='/cursos/Programación-desde-cero-2023'>
            <div className="relative aspect-video overflow-hidden">
              <Image src='/objetivo.webp' alt="prev" width={800} height={800} />
                <span className='bg-categoria-100 py-1 rounded-md px-2 text-sm font-bold absolute top-3 left-3'>Desarrollo web</span>
                          <div className="absolute top-2 right-2 text-xl bg-btn-400 hover:bg-btn-600 transition-colors duration-150 p-3 rounded-full">
            <FaHeart title="Agregar a mis deseos"/>
            </div>
            </div>
            <div className="p-2">
              <div className="grid grid-cols-8 text-base md:text-lg">
                <h2 className="font-semibold line-clamp-1 col-span-5">Programación desde cero 2023 </h2>
              <p className="col-span-3 text-end font-semibold text-link-300">$350.00 MXN</p>
              </div>
                <div className="flex items-center gap-2 mb-2">    
                <p>Instructor</p>
                <div className="flex items-center gap-1 text-sm">
                  <FaStar className='text-yellow-600'/>
                  <FaStar className='text-yellow-600'/>
                  <FaStar className='text-yellow-600'/>
                  <FaRegStar/>
                  <FaRegStar />
                  <span>(15)</span>
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
             <div className="grid grid-cols-12 items-center p-3 gap-2">
                  <button
                    type="button"
                    className="bg-btn-400 hover:bg-btn-600 transition-colors duration-150 rounded-md p-2 flex items-center gap-1 text-sm font-semibold col-span-6 justify-center"
                  >
                    <FaShoppingCart />
                    Añadir al carrito
                  </button>
                  <button
                    type="button"
                    className="bg-btn-400 hover:bg-btn-600 transition-colors duration-150 rounded-md p-2 flex items-center gap-2 text-sm font-semibold col-span-6 justify-center"
                  >
                    <FaDollarSign />
                    Comprar
                  </button>
                </div>
              </Link>
          </article>
        </div>
      </div>
    </section>
  )
}
