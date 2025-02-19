import Image from "next/image";
import Link from "next/link";
import { FaTrashAlt } from "react-icons/fa";

export const Detalles = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
      <div className="lg:col-span-3">
        <div className="mb-8">
          <div className="rounded-[.5rem] mb-2 bg-slate-300 dark:bg-nav-800 shadow-xl shadow-slate-400 dark:shadow-nav-600">
            <div className="p-6">
              <ul className="space-y-4">
                <li className="flex flex-wrap lg:flex-nowrap">
                  <figure className="w-full shrink-0 lg:w-40">
                    <Image
                      className="aspect-[16/9] w-full rounded object-cover object-center"
                      alt=""
                      width={500}
                      height={500}
                      loading="lazy"
                      src="/CAT-SHOLO.jpg"
                    />
                  </figure>
                  <div className="lg:flex-1 lg:ml-4 overflow-hidden">
                    <h2 className="font-semibold truncate">
                      {" "}
                      Playera Cat-sholo
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400">Autor</p>
                    <p className="font-semibold">Precio</p>
                  </div>
                  <div className="lg:ml-6 text-sm">
                    <button className="block w-full lg:text-right font-bold text-btn-200 disabled:text-btn-600">
                      Eliminar
                    </button>
                    <button className="block w-full lg:text-right font-bold text-link-300 dark:text-link-100 disabled:text-link-600">
                      Mover a los deseos
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <button className="font-semibold flex text-red-500 disabled:text-red-800 text-sm mt-5">
            <FaTrashAlt className="mr-2" />
            Limpiar carrito de compras
          </button>
        </div>
      </div>
      <div className="lg:col-span-2">
        <div className="rounded-[.5rem] bg-slate-300 dark:bg-nav-800 shadow-md shadow-slate-400 dark:shadow-nav-600">
          <div className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Resumen</h2>
            <div className="flex justify-between items-center">
              <p className="">Total de productos:</p>
              <p className="">1</p>
            </div>
            <div className="flex justify-between items-center">
              <p className="">SubTotal:</p>
              <p className="">$ 120.00 MXN</p>
            </div>
            <hr className="my-2" />
            {/* <div>
              <form className="flex gap-2">
                <div className="w-full">
                  <label htmlFor="" className="text-lg font-semibold">
                    Cupón de descuento
                  </label>
                  <div className="grid grid-cols-12 gap-2 mt-3">
                    <input
                      type="text"
                      placeholder="Ingresar Cúpon"
                      className="col-span-7 bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 placeholder:text-black dark:placeholder:text-gray-400"
                    />
                    <button type="button" className="col-span-5 bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 rounded-md p-2 ">
                      Aplicar
                    </button>
                  </div>
                </div>
              </form>
            </div> */}

            {/* <hr className="my-2" /> */}
            <div className="flex justify-between items-center font-semibold mb-4">
              <p className="text-2xl">Total:</p>
              <p className="text-lg">$ 120.00 MXN</p>
            </div>
            <div>
              <Link href='/carrito/checkout'>
              <button type="button" className="bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 rounded-md p-2 w-full">
                Continuar con el pago
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
