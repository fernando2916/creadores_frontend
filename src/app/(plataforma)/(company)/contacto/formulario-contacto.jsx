import { FaEnvelope } from "react-icons/fa"

export const FormularioContacto = () => {
  return (
    <>
    <div className="w-full md:w-1/2 flex flex-col md:px-5 mt-5">
      <div className="mx-auto max-w-2xl text-center">
        <h3 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Formulario de contacto
        </h3>
        <p className="mt-2 md:text-base text-gray-200 text-xs lg:flex">
          ¿Tienes un proyecto en mente? Cuéntanos tu idea y estaremos
          encantados de ayudarte.
        </p>
      </div>
      <div className="mt-5">
        <form className="space-y-4">
          <div className=" flex flex-col space-y-2">
            <label className="text-sm" htmlFor="name">Nombre Completo</label>
            <input
              type="text"
              placeholder="Nombre Completo"
              id='name'
              className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
            />
          </div>
          <div className=" flex flex-col space-y-2">
            <label className="text-sm" htmlFor="email">Correo Electrónico</label>
            <input
              type="email"
              id="email"
              placeholder="Ingresa tu Correo Electrónico"
              className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
            />
          </div>
          <div className=" flex flex-col space-y-2">
            <label className="text-sm" htmlFor="company">Empresa</label>
            <input
              type="text"
              id="company"
              placeholder="Negocio o independiente"
              className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
            />
          </div>
          <div className=" flex flex-col space-y-2">
            <label className="text-sm" htmlFor="phone">
              Teléfono de Contacto
            </label>
            
            <input
              type="tel"
              id="phone"
              placeholder="Numero de Contacto"
              className="bg-transparent p-2 rounded-md border-link-100 border-2 outline-none focus:shadow-md focus:shadow-link-200"
            />
          </div>
          <div className=" flex flex-col space-y-2">
            <label className="text-sm" htmlFor="message">Mensaje</label>
            <textarea
              id="message"
              cols="38"
              rows="6"
              className=" bg-transparent border-2 border-link-100 rounded-md p-2 outline-none focus:shadow-md focus:shadow-link-200"
              placeholder="Escribenos tus dudas..."
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full rounded-md bg-btn-400 hover:bg-btn-600 px-3.5 py-2.5 mt-5 text-center text-sm font-semibold duration-150 shadow-sm uppercase transition-colors"
          >
            <FaEnvelope />
            Solicitar más Información
          </button>
        </form>
      </div>
    </div>
  </>
  )
}
