import Image from "next/image";
import { FaBehance, FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


export const InfoEquipo = () => {
  return (
    <section className="py-12">
      <div className="mx-auto max-w-7xl p-5">
        <div className="">
          <h2 className="text-3xl text-center font-semibold">
            Equipo de trabajo
          </h2>
          <p className=" text-lg text-center py-3 text-gray-300">
            Conoce a nuestro equipo de trabajo, los responsables de lo que vez
            aqui y en las redes sociales.
          </p>
        </div>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10">
          <li className="bg-nav-900 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={500}
              height={500}
              className="aspect-square w-full object-cover h-auto align-middle block"
            />
            <div className="p-5">

            <h3 className="text-lg font-semibold tracking-tight">
              Ana García
            </h3>
            <p className="text-base text-link-300">Desarrolladora de Software</p>
            <ul className="flex mt-5 gap-3 text-gray-300 text-lg">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaXTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaBehance />
              </li>
              <li></li>
            </ul>
            </div>
          </li>
          <li className="bg-nav-900 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={500}
              height={500}
              className="aspect-square w-full object-cover max-w-full h-auto align-middle block"
            />
            <div className="p-5">

            <h3 className=" text-lg font-semibold tracking-tight">
              Carlos Rodríguez
            </h3>
            <p className="text-base text-link-300">Analista de Datos</p>
            <ul className="flex mt-5 gap-3 text-gray-300 text-lg">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaXTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaBehance />
              </li>
              <li></li>
            </ul>
            </div>
          </li>
          <li className="bg-nav-900 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={500}
              height={500}
              className="aspect-square w-full object-cover max-w-full h-auto align-middle block"
            />
            <div className="p-5">
              
            <h3 className=" text-lg font-semibold tracking-tight">
              María López
            </h3>
            <p className="text-base text-link-300">Gerente de Proyectos</p>
            <ul className="flex mt-5 gap-3 text-gray-300 text-lg">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaXTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaBehance />
              </li>
              <li></li>
            </ul>
            </div>
          </li>
          <li className="bg-nav-900 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1488161628813-04466f872be2?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={500}
              height={500}
              className="aspect-square w-full object-cover max-w-full h-auto align-middle block"
            />
            <div className="p-5">

            <h3 className="text-lg font-semibold tracking-tight">
              Juan Pérez
            </h3>
            <p className="text-base text-link-300">Diseñador Gráfico</p>
            <ul className="flex mt-5 gap-3 text-gray-300 text-lg">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaXTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaBehance />
              </li>
              <li></li>
            </ul>
            </div>
          </li>
          <li className="bg-nav-900 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={500}
              height={500}
              className="aspect-square w-full object-cover max-w-full h-auto align-middle block"
            />
            <div className="p-5">

            <h3 className="text-lg font-semibold tracking-tight">
              Sofía Martínez
            </h3>
            <p className="text-base text-link-300">Marketing Digital</p>
            <ul className="flex mt-5 gap-3 text-gray-300 text-lg">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaXTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaBehance />
              </li>
              <li></li>
            </ul>
            </div>
          </li>
          <li className="bg-nav-900 rounded-lg overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1522556189639-b150ed9c4330?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={500}
              height={500}
              className="aspect-square w-full object-cover max-w-full h-auto align-middle block"
            />
            <div className="p-5">

            <h3 className="text-lg font-semibold tracking-tight">
              Ricardo Gomez
            </h3>
            <p className="text-base text-link-300">Fotógrafo</p>
            <ul className="flex mt-5 gap-3 text-gray-300 text-lg">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaXTwitter />
              </li>
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaBehance />
              </li>
              <li></li>
            </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
