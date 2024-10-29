import Section from "@/components/shared/Section";
import { FaCalendar, FaEnvelope } from "react-icons/fa";

import { FaHand } from "react-icons/fa6";


export const SuscripBoletin = () => {
  return (
    <>
    <Section className='bg-cont-100'
      content={
        <div className="relative isolate overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight  sm:text-4xl">Suscribete  Nuestro Boletín</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Enterate de las últimas Noticias, Promociones, Avisos, etc. ¡Qué no te tome por sorpresa!.
            </p>
            <div className="mt-6 flex flex-col md:flex-row space-y-3 max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Correo Electrónico
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-2 outline-none border-link-300 bg-transparent px-3.5 py-2  shadow-sm sm:text-sm sm:leading-6"
                placeholder="Ingresa tu Correo Electrónico"
              />
              <button
                type="submit"
                className="flex items-center mx-auto w-full md:w-1/3 justify-center gap-2 rounded-md bg-btn-400 px-3.5 py-2.5 font-semibold hover:bg-btn-600 transition-colors duration-150 "
                  >
                    <FaEnvelope className="text-sm"/>
                Subscríbete
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-btn-400 p-2 ring-link-500">
                <FaCalendar className="h-6 w-6 " aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-xl ">Artículos Mensuales </dt>
              <dd className="mt-2 leading-7 text-gray-300 text-justify">
                Nos importa mucho tu privacidad y tu tiempo, por lo tanto solo enviamos 5 correos por mes. 
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-btn-400 p-2 ring-link-500">
                <FaHand className="h-6 w-6 " aria-hidden="true" />
              </div>
              <dt className="mt-4 font-semibold text-xl ">No spam</dt>
              <dd className="mt-2 leading-7 text-gray-300 text-justify">
                De la misma manera, evitamos enviarte demasiados correo para si evitar llenarte de spam. Nuestro compromiso es informarte no aburrirte.
              </dd>
            </div>
          </dl>
        </div>
      </div>
      
    </div>
      }
       />
    </>
  )
}
