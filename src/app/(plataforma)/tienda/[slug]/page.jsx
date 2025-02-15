import { InputTalla } from '@/app/(plataforma)/tienda/components/InputTalla';
import { ModalComent } from '@/app/(plataforma)/tienda/components/ModalComent';
import { Progress } from '@/components/ui/progress';
import Image from 'next/image';
import { FaCircle, FaClock, FaCreditCard, FaHeart, FaRegStar, FaShoppingCart, FaStar, FaUserCircle } from 'react-icons/fa';


export const metadata = {
  title: 'Producto',
}

export default function ProductPage() {

  return (
    <>
    {/* Header */}
    <section className="pt-[5rem]">
      <div className="">
        <div className="grid grid-cols-1 md:grid-cols-12 p-5 max-w-7xl mx-2 md:mx-auto">
          <div className="col-span-6 p-5 relative">
            <Image src='/MEXICO.jpg' alt="image_title" className='' width={700} height={50} priority={'false'} />
            <span className="absolute top-6 left-9 bg-categoria-200 text-white dark:bg-categoria-100 rounded-lg p-2 font-semibold text-sm">
              Nuevo
            </span>
            <button className="absolute top-6 right-9 text-xl bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 p-3 rounded-full">
              <FaHeart title="Agregar a mis deseos" />
            </button>
          </div>
          <div className="col-span-6 py-5 space-y-3">
            <div className='flex justify-between items-center mr-5'>
            <h2 className="text-4xl font-semibold">Soy de México</h2>
            </div>
            <div className="grid grid-cols-12">
              <p className="col-span-4 text-sm md:text-lg font-medium">
                $480.00 MXN
              </p>
              <div className=" col-span-8 flex items-center justify-end gap-3 ">
                <div className="flex text-yellow-400">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <span className="text-sm">4 reseñas</span>
              </div>
              <div className="col-span-full pt-2">
                <p>
                  Ténica:
                  <span className="font-semibold ml-2">Serigrafía </span>
                </p>
                <p className="col-span-full pt-2">
                  Por:
                  <span className="font-semibold ml-2">
                    Emprendedores Creativos
                  </span>
                </p>
              </div>
              <div className="border border-gray-700 col-span-full my-3" />
              {/* TALLA Y COLORES */}
              <div className="col-span-full space-y-5">
                {/* TALLA */}
                <div className="">
                  <p className="font-semibold mb-2">Talla:</p>
                  <InputTalla/>
                </div>
                {/* COLORES */}
                <div className="">
                  <p className="font-semibold">Color:</p>
                  <div className="pt-3 space-x-3">
                    <button
                      className="p-5 bg-gray-700 rounded-full "
                      type="button"
                    ></button>
                    <button
                      className="p-5 bg-white rounded-full "
                      type="button"
                    ></button>
                    <button
                      className="p-5 bg-blue-600 rounded-full "
                      type="button"
                    ></button>
                    <button
                      className="p-5 bg-green-800 rounded-full "
                      type="button"
                    ></button>
                  </div>
                </div>
              </div>
              <div className='col-span-full mt-3'>
                <p className="font-semibold">Cantidad:</p>
              </div>
               
              <div className="col-span-full w-full pt-10 grid  mx-auto gap-5">
                <button
                  type="button"
                  className="p-3 bg-btn-200 hover:bg-btn-400 text-white dark:bg-btn-400 dark:hover:bg-btn-600 transition-colors duration-150 rounded-md font-semibold flex justify-center items-center gap-2"
                >
                  <FaShoppingCart />
                  Añadir al carrito
                </button>
                <button
                  type="button"
                  className="p-3 bg-link-200 hover:bg-link-400 dark:bg-link-400 text-white dark:hover:bg-link-600 transition-colors duration-150 rounded-md font-semibold flex justify-center items-center gap-2" 
                >
                  <FaCreditCard />
                  Comprar ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Contenido */}
    <section>
      <div className="grid md:grid-cols-12 gap-3 mx-3 md:mx-auto max-w-7xl justify-center px-5">
        <div className="col-span-6">
           <div>
            <h2 className="text-lg font-semibold underline underline-offset-8">
              Descripción
          </h2>
          <p className=" text-justify mx-2 mt-2">
            Diseño inspirado en el emblemático jaguar su belleza y estilo
            decorado a la ¡Ay Güey! con sus bordados de pespunte y color,
            inyectándolo de frescura y diversión
          </p>
          </div>
          
          <div className=" pt-3">
            <p className="text-lg font-semibold underline underline-offset-8 ">
              Caracteristicas del producto
            </p>
            <ul className="ml-2 pt-3 space-y-2">
              <li className="flex gap-3">
                <div>
                  <FaCircle className="mt-1.5 text-[7px]" />
                </div>
                <p>Playera UNISEX</p>
              </li>
              <li className="flex gap-3">
                <div>
                  <FaCircle className="mt-1.5 text-[7px]" />
                </div>
                <p>Cuello redondo</p>
              </li>
              <li className="flex gap-3">
                <div>
                  <FaCircle className="mt-1.5 text-[7px]" />
                </div>
                <p>Manga Corta</p>
              </li>
              <li className="flex gap-3">
                <div>
                  <FaCircle className="mt-1.5 text-[7px]" />
                </div>
                <p>Tacto suave</p>
              </li>
            </ul>
          </div>
         
        </div>
        <div className="col-span-6">
          <p className=" text-lg font-semibold col-span-full grid grid-cols-1 underline underline-offset-8">
            Composición:
          </p>
            <p className="text-base mt-2 ml-2">
              Cuerpo- 92% Viscosa - 8% Elastano
            </p>
          <div className=" pt-3">
            <p className="text-lg font-semibold underline underline-offset-8">
              Cuidados de la Ropa
            </p>
            <ul className="ml-2 pt-3 space-y-2">
              <li className="flex gap-3">
                <div>
                  <FaCircle className="mt-1.5 text-[7px]" />
                </div>
                <p>Lavar a maquina a menos de 30° o mano</p>
              </li>
              <li className="flex gap-3">
                <div>
                  <FaCircle className="mt-1.5 text-[7px]" />
                </div>
                <p>Lavar la prenda por el revés</p>
              </li>
              <li className="flex gap-3">
                <div>
                  <FaCircle className="mt-1.5 text-[7px]" />
                </div>
                <p>No usar secadora</p>
              </li>
              <li className="flex gap-3">
                <div>
                  <FaCircle className="mt-1.5 text-[7px]" />
                </div>
                <p>No usar cloro</p>
              </li>
              <li className="flex gap-3">
                <div>
                  <FaCircle className="mt-1.5 text-[7px]" />
                </div>
                <p>No lavar en seco</p>
              </li>
              <li className="flex gap-3">
                <div>
                  <FaCircle className="mt-1.5 text-[7px]" />
                </div>
                <p>No planchar sobre la aplicación</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    {/* comentarios */}
    <section>
      <div className="max-w-7xl mx-5 md:mx-auto px-5">
        <div className="grid grid-cols-12 pt-5">
          <div className="border md:hidden border-gray-700 col-span-full my-3" />
          <div className="col-span-full lg:col-span-6">
            <div className="flex flex-col mt-5">
              <p className="text-2xl font-semibold flex items-center gap-2">
                Opiniones de los usuarios
              </p>
              <div className="flex items-center">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar />
                <p className=" ml-2 text-lg">Promedio de 150 opiniones </p>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-1">
                <p className="text-sm ml-1">5</p>
                <FaStar className="text-yellow-500" />
                <Progress
                  size="md"
                  value={80}
                  className="w-[70%] md:w-[80%] mx-1 rounded-md"
                  
                />
                <span>80 %</span>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm ml-1">4</p>
                <FaStar className="text-yellow-500" />
                <Progress
                  size="md"
                  value={60}
                  className="w-[70%] md:w-[80%] mx-1 rounded-md"
                />
                <span>60 %</span>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm ml-1">3</p>
                <FaStar className="text-yellow-500" />
                <Progress
                  size="md"
                  value={5}
                  className="w-[70%] md:w-[80%] mx-1 rounded-md"
                />
                <span>5 %</span>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm ml-1">2</p>
                <FaStar className="text-yellow-500" />
                <Progress
                  size="md"
                  value={12}
                  className="w-[70%] md:w-[80%] mx-1 rounded-md"
                />
                <span>12 %</span>
              </div>
              <div className="flex items-center gap-1">
                <p className="text-sm ml-1">1</p>
                <FaStar className="text-yellow-500" />
                <Progress
                  size="md"
                  value={6}
                  className="w-[70%] md:w-[80%] mx-1 rounded-md"
                />
                <span>6 %</span>
              </div>
            </div>
            <div className="mt-5">
              <p className="text-2xl font-semibold">
                Comparte tus pensamientos
              </p>
              <p>
                Si has adquirido este producto, comparte tus opiniones con otros
                clientes.
              </p>
            </div>
            <div className="mt-1">
              <ModalComent/> 
            </div>
          </div>
          <div className="col-span-full md:w-[50rem] my-5 space-y-5">
            {/* COMENTARIOS */}
            <div className="bg-slate-300 dark:bg-cont-100 p-5 rounded-md ">
              <div className="flex justify-between items-start gap-3">
                <div className="flex gap-x-2">
                  <FaUserCircle className="text-3xl mt-1.5" />
                  <div className="space-y-1">
                  <h4 className="md:text-2xl font-semibold">Usuario</h4>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar />
                  </div>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-xs md:text-base pt-2"><FaClock/>Hace: 4 días</span>
              </div>
              <p className="text-justify text-xs md:text-sm mt-2 ml-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quis recusandae eaque quaerat doloribus omnis beatae ea in a excepturi aspernatur illum similique cupiditate enim rerum, odio sequi possimus accusamus!</p>
            </div>
            <div className="bg-slate-300 dark:bg-cont-100 p-5 rounded-md ">
              <div className="flex justify-between items-start gap-3">
                <div className="flex gap-x-2">
                  <FaUserCircle className="text-3xl mt-1.5" />
                  <div className="space-y-1">
                  <h4 className="md:text-2xl font-semibold">Usuario</h4>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar className="text-yellow-500" />
                    <FaStar />
                  </div>
                  </div>
                </div>
                <span className="flex items-center gap-1 text-xs md:text-base pt-2"><FaClock/>Hace: 4 días</span>
              </div>
              <p className="text-justify text-xs md:text-sm mt-2 ml-10">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta quis recusandae eaque quaerat doloribus omnis beatae ea in a excepturi aspernatur illum similique cupiditate enim rerum, odio sequi possimus accusamus!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* Recomendaciones */}
    <section>
      <div className="max-w-7xl mx-3 md:mx-auto px-5">
        <div className="grid grid-cols-12 pt-5">
          <h2 className="col-span-full text-center text-3xl font-semibold uppercase">
            Creemos que te podría gustar
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 my-5  ">
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
        </div>
      </div>
    </section>
    </>
  );
}
