import Image from "next/image"
import Link from "next/link"
import { FaEye, FaHeart, FaShoppingCart, FaStar } from "react-icons/fa"

export const Products = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl gap-8 md:mx-auto p-5">
      <Link href="/tienda/50">
        <article className=" bg-slate-300 dark:bg-nav-800 rounded-lg">
          <div className="relative">
            <Image
              src="/Chuckey.png"
              width={500}
              height={300}
              alt="chukey"
              className="object-cover aspect-square w-full rounded-t-md"
            />
            <div className="absolute top-2 right-2 text-xl bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 p-3 rounded-full">
              <FaHeart title="Agregar a mis deseos" />
            </div>
              <span className="bg-btn-200 text-white dark:bg-btn-600 py-1 rounded-md px-2 text-sm font-bold absolute top-3 left-3">
                Nuevo
              </span>
              <span className="bg-amber-500  dark:bg-alerts-300 ml-16 text-black py-1 rounded-md px-2 text-sm font-bold absolute top-3 left-3">
                Más Vendido
              </span>
          </div>
          <div className="p-4 space-y-3">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg md:text-2xl font-bold text-link-200">
                  Chucky Malvado
                </h3>
                <div className="flex items-center gap-16">
              <span className="font-semibold">Transfer Digital</span>
              <span className="text-sm font-semibold">$ 450.00 MXN</span>
              </div>
              </div>
            </div>
            <div className="flex items-center text-xs md:text-sm gap-1">
              <FaStar className="text-alerts-300" />
              <FaStar className="text-alerts-300" />
              <FaStar className="text-alerts-300" />
              <FaStar className="text-alerts-300" />
              <FaStar className="text-alerts-300" />
              <span>(4.2)</span>
            </div>
            <div className="">
              <p className="line-clamp-3 text-justify text-sm ">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta
                eaque eos totam distinctio dolorum, quam incidunt illo
                architecto dolor fugiat voluptas, accusamus qui! Quisquam
                perspiciatis nihil, et incidunt cupiditate nobis! Aperiam ea hic
                temporibus dignissimos iure assumenda amet, nemo ex dolorem,
                autem aliquam tempore laboriosam voluptates aspernatur modi
                tempora sit, nihil ad iusto saepe! Rem minus vitae dolorem eos
                nesciunt?
              </p>
            </div>
            <div className="flex items-center gap-5 flex-1">
              <button
                type="button"
                className="bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 rounded-md p-2 flex items-center gap-1 w-full text-sm font-semibold col-span-6 justify-center"
              >
                <FaShoppingCart />
                Añadir al carrito
              </button>
            </div>
          </div>
        </article>
      </Link>
 

 
    </div>
  );
}
