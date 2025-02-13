import { FaCalendarAlt, FaChartLine, FaClock, FaHeart, FaInfinity, FaStar } from "react-icons/fa";

export default function CursoPage() {
  return (
    <main className="pt-[5rem]">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="col-span-1 lg:col-span-2 order-2 lg:order-1"></div>
          <div className="col-span-1 order-1 lg:order-2">
            <div>
              <div className="w-full flex flex-col shadow-md rounded-lg bg-nav-700">
                <div className="px-2 py-5 md:px-4 space-y-3">
                  <p className="text-2xl flex items-center justify-center mb-2">$ 450.00 MXN</p>
                  <div>
                    <div className="flex space-x-2 mb-2">
                      <div className="flex-1">
                        <button className="bg-link-400 p-2 hover:bg-link-600 transition-colors duration-150 rounded-md font-medium justify-center items-center w-full">AÑADIR AL CARRITO</button>
                      </div>
                  <div>
                    <button className="p-2 hover:bg-btn-600 transition-colors duration-150 rounded-md font-medium justify-center items-center border border-link-100 text-lg box-content">
                      <FaHeart/>
                    </button>
                  </div>
                    </div>
                    <button className="bg-btn-400 p-2 hover:bg-btn-600 transition-colors duration-150 rounded-md font-medium justify-center items-center w-full uppercase">
                      Comprar ahora
                    </button>
                  </div>
                  <div>
                    <p className="">Detalle del curso:</p>
                    <ul className="space-y-1">
                      <li className="flex items-center gap-2">
                        <FaCalendarAlt className="text-sm"/>
                        <p className="">Última actualización</p>
                      </li>
                      <li className="flex items-center gap-2">
                      <FaClock className="text-sm"/>
                        <p className="">Duración</p>

                      </li>
                      <li className="flex items-center gap-2">
                      <FaChartLine className="text-sm"/>
                        <p className="">Nivel intermedio</p>

                      </li>
                      <li className="flex items-center gap-2">
                      <FaStar className="text-sm"/>
                        <p className="">Calificación</p>

                      </li>
                      <li className="flex items-center gap-2">
                      <FaInfinity className="text-sm"/>
                        <p className="">Acceso de por vida</p>

                      </li>
                    </ul>
                  </div>
                  <div>
                    <form >
                      <input type="text" placeholder="" className="" />
                      <button className="uppercase">Apicar</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}