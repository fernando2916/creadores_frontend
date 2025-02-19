import Link from "next/link";
import { FaAngleLeft, } from "react-icons/fa";
import { Tabs } from "./Tabs";


export const DatosContacto = () => {
  return (
    <form>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        <div className="lg:col-span-3">
          <div>
            <div className="">
              <h2 className="text-xl font-semibold">
                Datos personales y de facturación
              </h2>
              <div className="bg-slate-300 dark:bg-nav-800 p-5 my-2 rounded-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between">
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold">
                      Nombre
                    </label>
                    <input
                      type="text"
                      placeholder="Nombre"
                      className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 placeholder:text-black dark:placeholder:text-gray-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold">
                      Apellido
                    </label>
                    <input
                      type="text"
                      placeholder="Apellido"
                      className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 placeholder:text-black dark:placeholder:text-gray-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold">
                      Numero telefónico
                    </label>
                    <input
                      type="text"
                      placeholder="Numero telefónico"
                      className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 placeholder:text-black dark:placeholder:text-gray-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold">
                      RFC
                    </label>
                    <input
                      type="text"
                      placeholder="RFC"
                      className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 placeholder:text-black dark:placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold">Datos de envío</h2>
              <div className="bg-slate-300 dark:bg-nav-800 p-5 my-2 rounded-md">
                <div className="flex flex-col mb-2">
                  <label htmlFor="" className="font-semibold">
                    Código Postal
                  </label>
                  <input
                    type="text"
                    placeholder="Código Postal"
                    className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 placeholder:text-black dark:placeholder:text-gray-400"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-between">
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold">
                      Calle
                    </label>
                    <input
                      type="text"
                      placeholder="Calle"
                      className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 placeholder:text-black dark:placeholder:text-gray-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold">
                      Numero exterior
                    </label>
                    <input
                      type="text"
                      placeholder="Numero exterior"
                      className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 placeholder:text-black dark:placeholder:text-gray-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold">
                      Numero interior
                    </label>
                    <input
                      type="text"
                      placeholder="Numero interior"
                      className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 placeholder:text-black dark:placeholder:text-gray-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold">
                      Referencias adicionales
                    </label>
                    <input
                      type="text"
                      placeholder="Referencias de ubicación más precisa "
                      className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 placeholder:text-black dark:placeholder:text-gray-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold">
                      Colonia
                    </label>
                    <input
                      type="text"
                      placeholder="Colonia / Delegación "
                      className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 placeholder:text-black dark:placeholder:text-gray-400"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="" className="font-semibold">
                      Destinatario (¿Quien recibe?)
                    </label>
                    <input
                      type="text"
                      placeholder="Destinatario"
                      className="bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 placeholder:text-black dark:placeholder:text-gray-400"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <h2 className="text-xl font-semibold">Pago</h2>
              <div className="bg-slate-300 dark:bg-nav-800 p-5 my-2 rounded-md">
               <Tabs/>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2 md:mt-9">
          <div className="rounded-[.5rem] bg-slate-300 dark:bg-nav-800 shadow-md shadow-slate-400 dark:shadow-nav-600">
            <div className="p-5">
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-xl font-semibold">Resumen de compra</h2>
                <Link
                  href="/carrito"
                  className="flex items-center gap-1 text-link-400 hover:text-link-600 dark:text-link-200 dark:hover:text-link-400 transition-colors duration-150 text-sm"
                >
                  <FaAngleLeft />
                  Volver al carrito
                </Link>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <p className="">Precio original:</p>
                  <p className="">$ 12.00 MXN</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="">Descuento:</p>
                  <p className="text-red-500">-$ 0.00 MXN</p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="">Envio:</p>
                  <p className="text-green-700 dark:text-alerts-100 font-semibold">Gratis</p>
                </div>
              </div>

              <hr className="my-2" />

              <div>
                  <div className="w-full flex flex-col gap-2">
                    <label htmlFor="" className="text-base font-semibold">
                     ¿Tienes un código de descuento?
                    </label>
                    <div className="grid grid-cols-12 gap-2 mt-3">
                      <input
                        type="text"
                        placeholder="Ingresar Cúpon"
                        className="col-span-7 bg-transparent p-2 disabled:bg-nav-900 disabled:border-nav-900 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200 placeholder:text-black dark:placeholder:text-gray-400"
                      />
                      <button
                        type="button"
                        className="col-span-5 bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 rounded-md p-2 "
                      >
                        Aplicar
                      </button>
                    </div>
                  </div>
              </div>

              <hr className="my-2" />

              <div className="flex justify-between items-center font-semibold mb-4">
                <p className="text-2xl">Total:</p>
                <p className="text-lg">$ 12.00 MXN</p>
              </div>
              <div>
                <Link href="/carrito/checkout">
                  <button
                    type="button"
                    className="bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 rounded-md p-2 w-full"
                  >
                    Pagar
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
